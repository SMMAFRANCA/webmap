ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([230083.063941, 7699987.750491, 280201.362997, 7741660.188040]);
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
var format_ARO_REMANESCENTES_FLORESTAIS_5 = new ol.format.GeoJSON();
var features_ARO_REMANESCENTES_FLORESTAIS_5 = format_ARO_REMANESCENTES_FLORESTAIS_5.readFeatures(json_ARO_REMANESCENTES_FLORESTAIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_REMANESCENTES_FLORESTAIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_REMANESCENTES_FLORESTAIS_5.addFeatures(features_ARO_REMANESCENTES_FLORESTAIS_5);
var lyr_ARO_REMANESCENTES_FLORESTAIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_REMANESCENTES_FLORESTAIS_5, 
                style: style_ARO_REMANESCENTES_FLORESTAIS_5,
                popuplayertitle: 'ARO_REMANESCENTES_FLORESTAIS',
                interactive: true,
                title: '<img src="styles/legend/ARO_REMANESCENTES_FLORESTAIS_5.png" /> ARO_REMANESCENTES_FLORESTAIS'
            });
var format_ARO_FAIXA_DE_CUESTAS_6 = new ol.format.GeoJSON();
var features_ARO_FAIXA_DE_CUESTAS_6 = format_ARO_FAIXA_DE_CUESTAS_6.readFeatures(json_ARO_FAIXA_DE_CUESTAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_FAIXA_DE_CUESTAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_FAIXA_DE_CUESTAS_6.addFeatures(features_ARO_FAIXA_DE_CUESTAS_6);
var lyr_ARO_FAIXA_DE_CUESTAS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_FAIXA_DE_CUESTAS_6, 
                style: style_ARO_FAIXA_DE_CUESTAS_6,
                popuplayertitle: 'ARO_FAIXA_DE_CUESTAS',
                interactive: true,
                title: '<img src="styles/legend/ARO_FAIXA_DE_CUESTAS_6.png" /> ARO_FAIXA_DE_CUESTAS'
            });
var format_ARO_AREA_DE_AMORTECIMENTO_7 = new ol.format.GeoJSON();
var features_ARO_AREA_DE_AMORTECIMENTO_7 = format_ARO_AREA_DE_AMORTECIMENTO_7.readFeatures(json_ARO_AREA_DE_AMORTECIMENTO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_AREA_DE_AMORTECIMENTO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_AREA_DE_AMORTECIMENTO_7.addFeatures(features_ARO_AREA_DE_AMORTECIMENTO_7);
var lyr_ARO_AREA_DE_AMORTECIMENTO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_AREA_DE_AMORTECIMENTO_7, 
                style: style_ARO_AREA_DE_AMORTECIMENTO_7,
                popuplayertitle: 'ARO_AREA_DE_AMORTECIMENTO',
                interactive: true,
                title: '<img src="styles/legend/ARO_AREA_DE_AMORTECIMENTO_7.png" /> ARO_AREA_DE_AMORTECIMENTO'
            });
var format_ARO_APP_8 = new ol.format.GeoJSON();
var features_ARO_APP_8 = format_ARO_APP_8.readFeatures(json_ARO_APP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARO_APP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARO_APP_8.addFeatures(features_ARO_APP_8);
var lyr_ARO_APP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARO_APP_8, 
                style: style_ARO_APP_8,
                popuplayertitle: 'ARO_APP',
                interactive: true,
                title: '<img src="styles/legend/ARO_APP_8.png" /> ARO_APP'
            });
var format_ARA_INCONGRUENCIAS_EM_APP_9 = new ol.format.GeoJSON();
var features_ARA_INCONGRUENCIAS_EM_APP_9 = format_ARA_INCONGRUENCIAS_EM_APP_9.readFeatures(json_ARA_INCONGRUENCIAS_EM_APP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_INCONGRUENCIAS_EM_APP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_INCONGRUENCIAS_EM_APP_9.addFeatures(features_ARA_INCONGRUENCIAS_EM_APP_9);
var lyr_ARA_INCONGRUENCIAS_EM_APP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_INCONGRUENCIAS_EM_APP_9, 
                style: style_ARA_INCONGRUENCIAS_EM_APP_9,
                popuplayertitle: 'ARA_INCONGRUENCIAS_EM_APP',
                interactive: true,
                title: '<img src="styles/legend/ARA_INCONGRUENCIAS_EM_APP_9.png" /> ARA_INCONGRUENCIAS_EM_APP'
            });
var format_ARA_ETE_LAGOAS_10 = new ol.format.GeoJSON();
var features_ARA_ETE_LAGOAS_10 = format_ARA_ETE_LAGOAS_10.readFeatures(json_ARA_ETE_LAGOAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_ETE_LAGOAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_ETE_LAGOAS_10.addFeatures(features_ARA_ETE_LAGOAS_10);
var lyr_ARA_ETE_LAGOAS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_ETE_LAGOAS_10, 
                style: style_ARA_ETE_LAGOAS_10,
                popuplayertitle: 'ARA_ETE_LAGOAS',
                interactive: true,
                title: '<img src="styles/legend/ARA_ETE_LAGOAS_10.png" /> ARA_ETE_LAGOAS'
            });
var format_ARA_ATERROS_11 = new ol.format.GeoJSON();
var features_ARA_ATERROS_11 = format_ARA_ATERROS_11.readFeatures(json_ARA_ATERROS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARA_ATERROS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARA_ATERROS_11.addFeatures(features_ARA_ATERROS_11);
var lyr_ARA_ATERROS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARA_ATERROS_11, 
                style: style_ARA_ATERROS_11,
                popuplayertitle: 'ARA_ATERROS',
                interactive: true,
                title: '<img src="styles/legend/ARA_ATERROS_11.png" /> ARA_ATERROS'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_3_12 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_3_12 = format_AOD_BAIXA_DENSIDADE_NIVEL_3_12.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_12.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_3_12);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_3_12, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_3_12,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_3',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_3_12.png" /> AOD_BAIXA_DENSIDADE_NIVEL_3'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_2_13 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_2_13 = format_AOD_BAIXA_DENSIDADE_NIVEL_2_13.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_13.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_2_13);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_2_13, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_2_13,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_2',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_2_13.png" /> AOD_BAIXA_DENSIDADE_NIVEL_2'
            });
var format_AOD_BAIXA_DENSIDADE_NIVEL_1_14 = new ol.format.GeoJSON();
var features_AOD_BAIXA_DENSIDADE_NIVEL_1_14 = format_AOD_BAIXA_DENSIDADE_NIVEL_1_14.readFeatures(json_AOD_BAIXA_DENSIDADE_NIVEL_1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_14.addFeatures(features_AOD_BAIXA_DENSIDADE_NIVEL_1_14);
var lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_BAIXA_DENSIDADE_NIVEL_1_14, 
                style: style_AOD_BAIXA_DENSIDADE_NIVEL_1_14,
                popuplayertitle: 'AOD_BAIXA_DENSIDADE_NIVEL_1',
                interactive: true,
                title: '<img src="styles/legend/AOD_BAIXA_DENSIDADE_NIVEL_1_14.png" /> AOD_BAIXA_DENSIDADE_NIVEL_1'
            });
var format_AOD_AUS_FASE_2_15 = new ol.format.GeoJSON();
var features_AOD_AUS_FASE_2_15 = format_AOD_AUS_FASE_2_15.readFeatures(json_AOD_AUS_FASE_2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AUS_FASE_2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AUS_FASE_2_15.addFeatures(features_AOD_AUS_FASE_2_15);
var lyr_AOD_AUS_FASE_2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AUS_FASE_2_15, 
                style: style_AOD_AUS_FASE_2_15,
                popuplayertitle: 'AOD_AUS_FASE_2',
                interactive: true,
                title: '<img src="styles/legend/AOD_AUS_FASE_2_15.png" /> AOD_AUS_FASE_2'
            });
var format_AOD_AUS_FASE_1_16 = new ol.format.GeoJSON();
var features_AOD_AUS_FASE_1_16 = format_AOD_AUS_FASE_1_16.readFeatures(json_AOD_AUS_FASE_1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AUS_FASE_1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AUS_FASE_1_16.addFeatures(features_AOD_AUS_FASE_1_16);
var lyr_AOD_AUS_FASE_1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AUS_FASE_1_16, 
                style: style_AOD_AUS_FASE_1_16,
                popuplayertitle: 'AOD_AUS_FASE_1',
                interactive: true,
                title: '<img src="styles/legend/AOD_AUS_FASE_1_16.png" /> AOD_AUS_FASE_1'
            });
var format_AOD_AREA_URBANA_CONSOLIDADA_17 = new ol.format.GeoJSON();
var features_AOD_AREA_URBANA_CONSOLIDADA_17 = format_AOD_AREA_URBANA_CONSOLIDADA_17.readFeatures(json_AOD_AREA_URBANA_CONSOLIDADA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AOD_AREA_URBANA_CONSOLIDADA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOD_AREA_URBANA_CONSOLIDADA_17.addFeatures(features_AOD_AREA_URBANA_CONSOLIDADA_17);
var lyr_AOD_AREA_URBANA_CONSOLIDADA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOD_AREA_URBANA_CONSOLIDADA_17, 
                style: style_AOD_AREA_URBANA_CONSOLIDADA_17,
                popuplayertitle: 'AOD_AREA_URBANA_CONSOLIDADA',
                interactive: true,
                title: '<img src="styles/legend/AOD_AREA_URBANA_CONSOLIDADA_17.png" /> AOD_AREA_URBANA_CONSOLIDADA'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_18 = format_LimitedaBaciadoRioCanoasLeiC4322024_18.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_18);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_18, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_18,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_18.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_19 = format_LimitedaBaciadoRioCanoasLeiC1002006_19.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_19);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_19,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_19.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_20 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_20 = format_DelimitaodaBaciadoRibeirodaOna_20.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_20.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_20);
var lyr_DelimitaodaBaciadoRibeirodaOna_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_20, 
                style: style_DelimitaodaBaciadoRibeirodaOna_20,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_20.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AEISreaEspecialdeInteresseSocial_21 = new ol.format.GeoJSON();
var features_AEISreaEspecialdeInteresseSocial_21 = format_AEISreaEspecialdeInteresseSocial_21.readFeatures(json_AEISreaEspecialdeInteresseSocial_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AEISreaEspecialdeInteresseSocial_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEISreaEspecialdeInteresseSocial_21.addFeatures(features_AEISreaEspecialdeInteresseSocial_21);
var lyr_AEISreaEspecialdeInteresseSocial_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEISreaEspecialdeInteresseSocial_21, 
                style: style_AEISreaEspecialdeInteresseSocial_21,
                popuplayertitle: 'AEIS - Área Especial de Interesse Social',
                interactive: true,
                title: '<img src="styles/legend/AEISreaEspecialdeInteresseSocial_21.png" /> AEIS - Área Especial de Interesse Social'
            });
var format_AEPIreaEspecialPreferIndustrialeLogstica_22 = new ol.format.GeoJSON();
var features_AEPIreaEspecialPreferIndustrialeLogstica_22 = format_AEPIreaEspecialPreferIndustrialeLogstica_22.readFeatures(json_AEPIreaEspecialPreferIndustrialeLogstica_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_22.addFeatures(features_AEPIreaEspecialPreferIndustrialeLogstica_22);
var lyr_AEPIreaEspecialPreferIndustrialeLogstica_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEPIreaEspecialPreferIndustrialeLogstica_22, 
                style: style_AEPIreaEspecialPreferIndustrialeLogstica_22,
                popuplayertitle: 'AEPI - Área Especial Prefer. Industrial e Logística',
                interactive: true,
                title: '<img src="styles/legend/AEPIreaEspecialPreferIndustrialeLogstica_22.png" /> AEPI - Área Especial Prefer. Industrial e Logística'
            });
var format_AERUreaEspecialResidenciasUnifamiliares_23 = new ol.format.GeoJSON();
var features_AERUreaEspecialResidenciasUnifamiliares_23 = format_AERUreaEspecialResidenciasUnifamiliares_23.readFeatures(json_AERUreaEspecialResidenciasUnifamiliares_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AERUreaEspecialResidenciasUnifamiliares_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AERUreaEspecialResidenciasUnifamiliares_23.addFeatures(features_AERUreaEspecialResidenciasUnifamiliares_23);
var lyr_AERUreaEspecialResidenciasUnifamiliares_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AERUreaEspecialResidenciasUnifamiliares_23, 
                style: style_AERUreaEspecialResidenciasUnifamiliares_23,
                popuplayertitle: 'AERU - Área Especial Residencias Unifamiliares',
                interactive: true,
                title: '<img src="styles/legend/AERUreaEspecialResidenciasUnifamiliares_23.png" /> AERU - Área Especial Residencias Unifamiliares'
            });
var format_reaEspecialLazerInteresseTursticoeCultural_24 = new ol.format.GeoJSON();
var features_reaEspecialLazerInteresseTursticoeCultural_24 = format_reaEspecialLazerInteresseTursticoeCultural_24.readFeatures(json_reaEspecialLazerInteresseTursticoeCultural_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaEspecialLazerInteresseTursticoeCultural_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaEspecialLazerInteresseTursticoeCultural_24.addFeatures(features_reaEspecialLazerInteresseTursticoeCultural_24);
var lyr_reaEspecialLazerInteresseTursticoeCultural_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaEspecialLazerInteresseTursticoeCultural_24, 
                style: style_reaEspecialLazerInteresseTursticoeCultural_24,
                popuplayertitle: 'Área Especial Lazer Interesse Turístico e Cultural',
                interactive: true,
                title: '<img src="styles/legend/reaEspecialLazerInteresseTursticoeCultural_24.png" /> Área Especial Lazer Interesse Turístico e Cultural'
            });
var format_MacrozonadoRioCanoas_25 = new ol.format.GeoJSON();
var features_MacrozonadoRioCanoas_25 = format_MacrozonadoRioCanoas_25.readFeatures(json_MacrozonadoRioCanoas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonadoRioCanoas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonadoRioCanoas_25.addFeatures(features_MacrozonadoRioCanoas_25);
var lyr_MacrozonadoRioCanoas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonadoRioCanoas_25, 
                style: style_MacrozonadoRioCanoas_25,
                popuplayertitle: 'Macrozona do Rio Canoas',
                interactive: true,
                title: '<img src="styles/legend/MacrozonadoRioCanoas_25.png" /> Macrozona do Rio Canoas'
            });
var format_SubMacrozonadeExpansoUrbana_26 = new ol.format.GeoJSON();
var features_SubMacrozonadeExpansoUrbana_26 = format_SubMacrozonadeExpansoUrbana_26.readFeatures(json_SubMacrozonadeExpansoUrbana_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeExpansoUrbana_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeExpansoUrbana_26.addFeatures(features_SubMacrozonadeExpansoUrbana_26);
var lyr_SubMacrozonadeExpansoUrbana_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeExpansoUrbana_26, 
                style: style_SubMacrozonadeExpansoUrbana_26,
                popuplayertitle: 'Sub - Macrozona de Expansão Urbana',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeExpansoUrbana_26.png" /> Sub - Macrozona de Expansão Urbana'
            });
var format_SubMacrozonadeOcupaoPreferencial_27 = new ol.format.GeoJSON();
var features_SubMacrozonadeOcupaoPreferencial_27 = format_SubMacrozonadeOcupaoPreferencial_27.readFeatures(json_SubMacrozonadeOcupaoPreferencial_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeOcupaoPreferencial_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeOcupaoPreferencial_27.addFeatures(features_SubMacrozonadeOcupaoPreferencial_27);
var lyr_SubMacrozonadeOcupaoPreferencial_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeOcupaoPreferencial_27, 
                style: style_SubMacrozonadeOcupaoPreferencial_27,
                popuplayertitle: 'Sub - Macrozona de Ocupação Preferencial',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeOcupaoPreferencial_27.png" /> Sub - Macrozona de Ocupação Preferencial'
            });
var format_SubMacrozonadeOcupaoRestrita_28 = new ol.format.GeoJSON();
var features_SubMacrozonadeOcupaoRestrita_28 = format_SubMacrozonadeOcupaoRestrita_28.readFeatures(json_SubMacrozonadeOcupaoRestrita_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SubMacrozonadeOcupaoRestrita_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubMacrozonadeOcupaoRestrita_28.addFeatures(features_SubMacrozonadeOcupaoRestrita_28);
var lyr_SubMacrozonadeOcupaoRestrita_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubMacrozonadeOcupaoRestrita_28, 
                style: style_SubMacrozonadeOcupaoRestrita_28,
                popuplayertitle: 'Sub - Macrozona de Ocupação Restrita',
                interactive: true,
                title: '<img src="styles/legend/SubMacrozonadeOcupaoRestrita_28.png" /> Sub - Macrozona de Ocupação Restrita'
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
var format_ExpUrbanaLCN1402009_30 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN1402009_30 = format_ExpUrbanaLCN1402009_30.readFeatures(json_ExpUrbanaLCN1402009_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN1402009_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN1402009_30.addFeatures(features_ExpUrbanaLCN1402009_30);
var lyr_ExpUrbanaLCN1402009_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN1402009_30, 
                style: style_ExpUrbanaLCN1402009_30,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 140/ 2009',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN1402009_30.png" /> Exp. Urbana - L.C. Nº 140/ 2009'
            });
var format_ExpUrbanaLCN2352013_31 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN2352013_31 = format_ExpUrbanaLCN2352013_31.readFeatures(json_ExpUrbanaLCN2352013_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN2352013_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN2352013_31.addFeatures(features_ExpUrbanaLCN2352013_31);
var lyr_ExpUrbanaLCN2352013_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN2352013_31, 
                style: style_ExpUrbanaLCN2352013_31,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 235/ 2013',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN2352013_31.png" /> Exp. Urbana - L.C. Nº 235/ 2013'
            });
var format_ExpUrbanaLCN3242019_32 = new ol.format.GeoJSON();
var features_ExpUrbanaLCN3242019_32 = format_ExpUrbanaLCN3242019_32.readFeatures(json_ExpUrbanaLCN3242019_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLCN3242019_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLCN3242019_32.addFeatures(features_ExpUrbanaLCN3242019_32);
var lyr_ExpUrbanaLCN3242019_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLCN3242019_32, 
                style: style_ExpUrbanaLCN3242019_32,
                popuplayertitle: 'Exp. Urbana - L.C. Nº 324/ 2019',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLCN3242019_32.png" /> Exp. Urbana - L.C. Nº 324/ 2019'
            });
var format_ExpUrbanaLeis4240199244201994eLC1002006_33 = new ol.format.GeoJSON();
var features_ExpUrbanaLeis4240199244201994eLC1002006_33 = format_ExpUrbanaLeis4240199244201994eLC1002006_33.readFeatures(json_ExpUrbanaLeis4240199244201994eLC1002006_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_33.addFeatures(features_ExpUrbanaLeis4240199244201994eLC1002006_33);
var lyr_ExpUrbanaLeis4240199244201994eLC1002006_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpUrbanaLeis4240199244201994eLC1002006_33, 
                style: style_ExpUrbanaLeis4240199244201994eLC1002006_33,
                popuplayertitle: 'Exp. Urbana - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/ExpUrbanaLeis4240199244201994eLC1002006_33.png" /> Exp. Urbana - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006'
            });
var format_SistemaVirioExpansodosistemavirio_34 = new ol.format.GeoJSON();
var features_SistemaVirioExpansodosistemavirio_34 = format_SistemaVirioExpansodosistemavirio_34.readFeatures(json_SistemaVirioExpansodosistemavirio_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioExpansodosistemavirio_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioExpansodosistemavirio_34.addFeatures(features_SistemaVirioExpansodosistemavirio_34);
var lyr_SistemaVirioExpansodosistemavirio_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioExpansodosistemavirio_34, 
                style: style_SistemaVirioExpansodosistemavirio_34,
                popuplayertitle: 'Sistema Viário - Expansão do sistema viário',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioExpansodosistemavirio_34.png" /> Sistema Viário - Expansão do sistema viário'
            });
var format_SistemaVirioRodovias_35 = new ol.format.GeoJSON();
var features_SistemaVirioRodovias_35 = format_SistemaVirioRodovias_35.readFeatures(json_SistemaVirioRodovias_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodovias_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodovias_35.addFeatures(features_SistemaVirioRodovias_35);
var lyr_SistemaVirioRodovias_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodovias_35, 
                style: style_SistemaVirioRodovias_35,
                popuplayertitle: 'Sistema Viário - Rodovias',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodovias_35.png" /> Sistema Viário - Rodovias'
            });
var format_SistemaVirioRodoviasViasarteriais_36 = new ol.format.GeoJSON();
var features_SistemaVirioRodoviasViasarteriais_36 = format_SistemaVirioRodoviasViasarteriais_36.readFeatures(json_SistemaVirioRodoviasViasarteriais_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodoviasViasarteriais_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodoviasViasarteriais_36.addFeatures(features_SistemaVirioRodoviasViasarteriais_36);
var lyr_SistemaVirioRodoviasViasarteriais_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodoviasViasarteriais_36, 
                style: style_SistemaVirioRodoviasViasarteriais_36,
                popuplayertitle: 'Sistema Viário - Rodovias/Vias arteriais',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodoviasViasarteriais_36.png" /> Sistema Viário - Rodovias/Vias arteriais'
            });
var format_SistemaVirioSistemavirioprincipal_37 = new ol.format.GeoJSON();
var features_SistemaVirioSistemavirioprincipal_37 = format_SistemaVirioSistemavirioprincipal_37.readFeatures(json_SistemaVirioSistemavirioprincipal_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioSistemavirioprincipal_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioSistemavirioprincipal_37.addFeatures(features_SistemaVirioSistemavirioprincipal_37);
var lyr_SistemaVirioSistemavirioprincipal_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioSistemavirioprincipal_37, 
                style: style_SistemaVirioSistemavirioprincipal_37,
                popuplayertitle: 'Sistema Viário - Sistema viário principal',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioSistemavirioprincipal_37.png" /> Sistema Viário - Sistema viário principal'
            });
var format_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = format_PlanoVirioZonaSulAVENIDAEXISTENTE_38.readFeatures(json_PlanoVirioZonaSulAVENIDAEXISTENTE_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38.addFeatures(features_PlanoVirioZonaSulAVENIDAEXISTENTE_38);
var lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_38, 
                style: style_PlanoVirioZonaSulAVENIDAEXISTENTE_38,
                popuplayertitle: 'Plano Viário Zona Sul - AVENIDA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulAVENIDAEXISTENTE_38.png" /> Plano Viário Zona Sul - AVENIDA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = format_PlanoVirioZonaSulDIRETRIZAVENIDA_39.readFeatures(json_PlanoVirioZonaSulDIRETRIZAVENIDA_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39.addFeatures(features_PlanoVirioZonaSulDIRETRIZAVENIDA_39);
var lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_39, 
                style: style_PlanoVirioZonaSulDIRETRIZAVENIDA_39,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ AVENIDA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZAVENIDA_39.png" /> Plano Viário Zona Sul - DIRETRIZ AVENIDA'
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
var format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.readFeatures(json_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.addFeatures(features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41);
var lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41, 
                style: style_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41,
                popuplayertitle: 'Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.png" /> Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.readFeatures(json_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.addFeatures(features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42);
var lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42, 
                style: style_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ VIA PARQUE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.png" /> Plano Viário Zona Sul - DIRETRIZ VIA PARQUE'
            });
var format_AtenoPrimria24unid_43 = new ol.format.GeoJSON();
var features_AtenoPrimria24unid_43 = format_AtenoPrimria24unid_43.readFeatures(json_AtenoPrimria24unid_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AtenoPrimria24unid_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtenoPrimria24unid_43.addFeatures(features_AtenoPrimria24unid_43);
var lyr_AtenoPrimria24unid_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtenoPrimria24unid_43, 
                style: style_AtenoPrimria24unid_43,
                popuplayertitle: 'Atenção Primária (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AtenoPrimria24unid_43.png" /> Atenção Primária (24 unid.)'
            });
var format_GestoAdministrativo3unid_44 = new ol.format.GeoJSON();
var features_GestoAdministrativo3unid_44 = format_GestoAdministrativo3unid_44.readFeatures(json_GestoAdministrativo3unid_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GestoAdministrativo3unid_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GestoAdministrativo3unid_44.addFeatures(features_GestoAdministrativo3unid_44);
var lyr_GestoAdministrativo3unid_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GestoAdministrativo3unid_44, 
                style: style_GestoAdministrativo3unid_44,
                popuplayertitle: 'Gestão / Administrativo (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/GestoAdministrativo3unid_44.png" /> Gestão / Administrativo (3 unid.)'
            });
var format_UnidadedeUrgnciaeEmergncia8unid_45 = new ol.format.GeoJSON();
var features_UnidadedeUrgnciaeEmergncia8unid_45 = format_UnidadedeUrgnciaeEmergncia8unid_45.readFeatures(json_UnidadedeUrgnciaeEmergncia8unid_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadedeUrgnciaeEmergncia8unid_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeUrgnciaeEmergncia8unid_45.addFeatures(features_UnidadedeUrgnciaeEmergncia8unid_45);
var lyr_UnidadedeUrgnciaeEmergncia8unid_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeUrgnciaeEmergncia8unid_45, 
                style: style_UnidadedeUrgnciaeEmergncia8unid_45,
                popuplayertitle: 'Unidade de Urgência e Emergência (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeUrgnciaeEmergncia8unid_45.png" /> Unidade de Urgência e Emergência (8 unid.)'
            });
var format_ServiodeEspecialidadesDiagnstico14unid_46 = new ol.format.GeoJSON();
var features_ServiodeEspecialidadesDiagnstico14unid_46 = format_ServiodeEspecialidadesDiagnstico14unid_46.readFeatures(json_ServiodeEspecialidadesDiagnstico14unid_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServiodeEspecialidadesDiagnstico14unid_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiodeEspecialidadesDiagnstico14unid_46.addFeatures(features_ServiodeEspecialidadesDiagnstico14unid_46);
var lyr_ServiodeEspecialidadesDiagnstico14unid_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiodeEspecialidadesDiagnstico14unid_46, 
                style: style_ServiodeEspecialidadesDiagnstico14unid_46,
                popuplayertitle: 'Serviço de Especialidades / Diagnóstico (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ServiodeEspecialidadesDiagnstico14unid_46.png" /> Serviço de Especialidades / Diagnóstico (14 unid.)'
            });
var format_VigilnciaemSade5unid_47 = new ol.format.GeoJSON();
var features_VigilnciaemSade5unid_47 = format_VigilnciaemSade5unid_47.readFeatures(json_VigilnciaemSade5unid_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VigilnciaemSade5unid_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigilnciaemSade5unid_47.addFeatures(features_VigilnciaemSade5unid_47);
var lyr_VigilnciaemSade5unid_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VigilnciaemSade5unid_47, 
                style: style_VigilnciaemSade5unid_47,
                popuplayertitle: 'Vigilância em Saúde (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/VigilnciaemSade5unid_47.png" /> Vigilância em Saúde (5 unid.)'
            });
var format_Arena3unid_48 = new ol.format.GeoJSON();
var features_Arena3unid_48 = format_Arena3unid_48.readFeatures(json_Arena3unid_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arena3unid_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arena3unid_48.addFeatures(features_Arena3unid_48);
var lyr_Arena3unid_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arena3unid_48, 
                style: style_Arena3unid_48,
                popuplayertitle: 'Arena (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Arena3unid_48.png" /> Arena (3 unid.)'
            });
var format_Biblioteca1unid_49 = new ol.format.GeoJSON();
var features_Biblioteca1unid_49 = format_Biblioteca1unid_49.readFeatures(json_Biblioteca1unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Biblioteca1unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca1unid_49.addFeatures(features_Biblioteca1unid_49);
var lyr_Biblioteca1unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca1unid_49, 
                style: style_Biblioteca1unid_49,
                popuplayertitle: 'Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Biblioteca1unid_49.png" /> Biblioteca (1 unid.)'
            });
var format_Campo25unid_50 = new ol.format.GeoJSON();
var features_Campo25unid_50 = format_Campo25unid_50.readFeatures(json_Campo25unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Campo25unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo25unid_50.addFeatures(features_Campo25unid_50);
var lyr_Campo25unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campo25unid_50, 
                style: style_Campo25unid_50,
                popuplayertitle: 'Campo (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Campo25unid_50.png" /> Campo (25 unid.)'
            });
var format_Casa1unid_51 = new ol.format.GeoJSON();
var features_Casa1unid_51 = format_Casa1unid_51.readFeatures(json_Casa1unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Casa1unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa1unid_51.addFeatures(features_Casa1unid_51);
var lyr_Casa1unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa1unid_51, 
                style: style_Casa1unid_51,
                popuplayertitle: 'Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Casa1unid_51.png" /> Casa (1 unid.)'
            });
var format_Centro4unid_52 = new ol.format.GeoJSON();
var features_Centro4unid_52 = format_Centro4unid_52.readFeatures(json_Centro4unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Centro4unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro4unid_52.addFeatures(features_Centro4unid_52);
var lyr_Centro4unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centro4unid_52, 
                style: style_Centro4unid_52,
                popuplayertitle: 'Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Centro4unid_52.png" /> Centro (4 unid.)'
            });
var format_CEPEL12unid_53 = new ol.format.GeoJSON();
var features_CEPEL12unid_53 = format_CEPEL12unid_53.readFeatures(json_CEPEL12unid_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CEPEL12unid_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEPEL12unid_53.addFeatures(features_CEPEL12unid_53);
var lyr_CEPEL12unid_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEPEL12unid_53, 
                style: style_CEPEL12unid_53,
                popuplayertitle: 'CEPEL (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CEPEL12unid_53.png" /> CEPEL (12 unid.)'
            });
var format_Conjunto4unid_54 = new ol.format.GeoJSON();
var features_Conjunto4unid_54 = format_Conjunto4unid_54.readFeatures(json_Conjunto4unid_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Conjunto4unid_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conjunto4unid_54.addFeatures(features_Conjunto4unid_54);
var lyr_Conjunto4unid_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conjunto4unid_54, 
                style: style_Conjunto4unid_54,
                popuplayertitle: 'Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Conjunto4unid_54.png" /> Conjunto (4 unid.)'
            });
var format_Estadio1unid_55 = new ol.format.GeoJSON();
var features_Estadio1unid_55 = format_Estadio1unid_55.readFeatures(json_Estadio1unid_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Estadio1unid_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadio1unid_55.addFeatures(features_Estadio1unid_55);
var lyr_Estadio1unid_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estadio1unid_55, 
                style: style_Estadio1unid_55,
                popuplayertitle: 'Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Estadio1unid_55.png" /> Estadio (1 unid.)'
            });
var format_Ginsio5unid_56 = new ol.format.GeoJSON();
var features_Ginsio5unid_56 = format_Ginsio5unid_56.readFeatures(json_Ginsio5unid_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ginsio5unid_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ginsio5unid_56.addFeatures(features_Ginsio5unid_56);
var lyr_Ginsio5unid_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ginsio5unid_56, 
                style: style_Ginsio5unid_56,
                popuplayertitle: 'Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Ginsio5unid_56.png" /> Ginásio (5 unid.)'
            });
var format_Museu2unid_57 = new ol.format.GeoJSON();
var features_Museu2unid_57 = format_Museu2unid_57.readFeatures(json_Museu2unid_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Museu2unid_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museu2unid_57.addFeatures(features_Museu2unid_57);
var lyr_Museu2unid_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museu2unid_57, 
                style: style_Museu2unid_57,
                popuplayertitle: 'Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Museu2unid_57.png" /> Museu (2 unid.)'
            });
var format_Parque2unid_58 = new ol.format.GeoJSON();
var features_Parque2unid_58 = format_Parque2unid_58.readFeatures(json_Parque2unid_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Parque2unid_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parque2unid_58.addFeatures(features_Parque2unid_58);
var lyr_Parque2unid_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parque2unid_58, 
                style: style_Parque2unid_58,
                popuplayertitle: 'Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Parque2unid_58.png" /> Parque (2 unid.)'
            });
var format_Pavilho1unid_59 = new ol.format.GeoJSON();
var features_Pavilho1unid_59 = format_Pavilho1unid_59.readFeatures(json_Pavilho1unid_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pavilho1unid_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavilho1unid_59.addFeatures(features_Pavilho1unid_59);
var lyr_Pavilho1unid_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pavilho1unid_59, 
                style: style_Pavilho1unid_59,
                popuplayertitle: 'Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pavilho1unid_59.png" /> Pavilhão (1 unid.)'
            });
var format_Pinacoteca1unid_60 = new ol.format.GeoJSON();
var features_Pinacoteca1unid_60 = format_Pinacoteca1unid_60.readFeatures(json_Pinacoteca1unid_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pinacoteca1unid_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinacoteca1unid_60.addFeatures(features_Pinacoteca1unid_60);
var lyr_Pinacoteca1unid_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pinacoteca1unid_60, 
                style: style_Pinacoteca1unid_60,
                popuplayertitle: 'Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pinacoteca1unid_60.png" /> Pinacoteca (1 unid.)'
            });
var format_Piscina1unid_61 = new ol.format.GeoJSON();
var features_Piscina1unid_61 = format_Piscina1unid_61.readFeatures(json_Piscina1unid_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Piscina1unid_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piscina1unid_61.addFeatures(features_Piscina1unid_61);
var lyr_Piscina1unid_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piscina1unid_61, 
                style: style_Piscina1unid_61,
                popuplayertitle: 'Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Piscina1unid_61.png" /> Piscina (1 unid.)'
            });
var format_Pista1unid_62 = new ol.format.GeoJSON();
var features_Pista1unid_62 = format_Pista1unid_62.readFeatures(json_Pista1unid_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pista1unid_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pista1unid_62.addFeatures(features_Pista1unid_62);
var lyr_Pista1unid_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pista1unid_62, 
                style: style_Pista1unid_62,
                popuplayertitle: 'Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pista1unid_62.png" /> Pista (1 unid.)'
            });
var format_Praa3unid_63 = new ol.format.GeoJSON();
var features_Praa3unid_63 = format_Praa3unid_63.readFeatures(json_Praa3unid_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Praa3unid_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praa3unid_63.addFeatures(features_Praa3unid_63);
var lyr_Praa3unid_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praa3unid_63, 
                style: style_Praa3unid_63,
                popuplayertitle: 'Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Praa3unid_63.png" /> Praça (3 unid.)'
            });
var format_Quadra3unid_64 = new ol.format.GeoJSON();
var features_Quadra3unid_64 = format_Quadra3unid_64.readFeatures(json_Quadra3unid_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra3unid_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra3unid_64.addFeatures(features_Quadra3unid_64);
var lyr_Quadra3unid_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra3unid_64, 
                style: style_Quadra3unid_64,
                popuplayertitle: 'Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Quadra3unid_64.png" /> Quadra (3 unid.)'
            });
var format_Secretaria1unid_65 = new ol.format.GeoJSON();
var features_Secretaria1unid_65 = format_Secretaria1unid_65.readFeatures(json_Secretaria1unid_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Secretaria1unid_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secretaria1unid_65.addFeatures(features_Secretaria1unid_65);
var lyr_Secretaria1unid_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secretaria1unid_65, 
                style: style_Secretaria1unid_65,
                popuplayertitle: 'Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Secretaria1unid_65.png" /> Secretaria (1 unid.)'
            });
var format_Teatro2unid_66 = new ol.format.GeoJSON();
var features_Teatro2unid_66 = format_Teatro2unid_66.readFeatures(json_Teatro2unid_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Teatro2unid_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teatro2unid_66.addFeatures(features_Teatro2unid_66);
var lyr_Teatro2unid_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teatro2unid_66, 
                style: style_Teatro2unid_66,
                popuplayertitle: 'Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Teatro2unid_66.png" /> Teatro (2 unid.)'
            });
var format_AlfabetizaaodeJovenseAdultos15unid_67 = new ol.format.GeoJSON();
var features_AlfabetizaaodeJovenseAdultos15unid_67 = format_AlfabetizaaodeJovenseAdultos15unid_67.readFeatures(json_AlfabetizaaodeJovenseAdultos15unid_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AlfabetizaaodeJovenseAdultos15unid_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizaaodeJovenseAdultos15unid_67.addFeatures(features_AlfabetizaaodeJovenseAdultos15unid_67);
var lyr_AlfabetizaaodeJovenseAdultos15unid_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizaaodeJovenseAdultos15unid_67, 
                style: style_AlfabetizaaodeJovenseAdultos15unid_67,
                popuplayertitle: 'Alfabetizaçao de Jovens e Adultos (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AlfabetizaaodeJovenseAdultos15unid_67.png" /> Alfabetizaçao de Jovens e Adultos (15 unid.)'
            });
var format_AlmoxarifadoEducao1unid_68 = new ol.format.GeoJSON();
var features_AlmoxarifadoEducao1unid_68 = format_AlmoxarifadoEducao1unid_68.readFeatures(json_AlmoxarifadoEducao1unid_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AlmoxarifadoEducao1unid_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlmoxarifadoEducao1unid_68.addFeatures(features_AlmoxarifadoEducao1unid_68);
var lyr_AlmoxarifadoEducao1unid_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlmoxarifadoEducao1unid_68, 
                style: style_AlmoxarifadoEducao1unid_68,
                popuplayertitle: 'Almoxarifado Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AlmoxarifadoEducao1unid_68.png" /> Almoxarifado Educação (1 unid.)'
            });
var format_CEIGustavoChereghiniBichuette1unid_69 = new ol.format.GeoJSON();
var features_CEIGustavoChereghiniBichuette1unid_69 = format_CEIGustavoChereghiniBichuette1unid_69.readFeatures(json_CEIGustavoChereghiniBichuette1unid_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CEIGustavoChereghiniBichuette1unid_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEIGustavoChereghiniBichuette1unid_69.addFeatures(features_CEIGustavoChereghiniBichuette1unid_69);
var lyr_CEIGustavoChereghiniBichuette1unid_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEIGustavoChereghiniBichuette1unid_69, 
                style: style_CEIGustavoChereghiniBichuette1unid_69,
                popuplayertitle: 'CEI Gustavo Chereghini Bichuette (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CEIGustavoChereghiniBichuette1unid_69.png" /> CEI Gustavo Chereghini Bichuette (1 unid.)'
            });
var format_Creche35unid_70 = new ol.format.GeoJSON();
var features_Creche35unid_70 = format_Creche35unid_70.readFeatures(json_Creche35unid_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Creche35unid_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Creche35unid_70.addFeatures(features_Creche35unid_70);
var lyr_Creche35unid_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Creche35unid_70, 
                style: style_Creche35unid_70,
                popuplayertitle: 'Creche (35 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Creche35unid_70.png" /> Creche (35 unid.)'
            });
var format_CrechePrEscola45unid_71 = new ol.format.GeoJSON();
var features_CrechePrEscola45unid_71 = format_CrechePrEscola45unid_71.readFeatures(json_CrechePrEscola45unid_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CrechePrEscola45unid_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrechePrEscola45unid_71.addFeatures(features_CrechePrEscola45unid_71);
var lyr_CrechePrEscola45unid_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrechePrEscola45unid_71, 
                style: style_CrechePrEscola45unid_71,
                popuplayertitle: 'Creche, Pré Escola (45 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CrechePrEscola45unid_71.png" /> Creche, Pré Escola (45 unid.)'
            });
var format_EdInfantil9unid_72 = new ol.format.GeoJSON();
var features_EdInfantil9unid_72 = format_EdInfantil9unid_72.readFeatures(json_EdInfantil9unid_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdInfantil9unid_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdInfantil9unid_72.addFeatures(features_EdInfantil9unid_72);
var lyr_EdInfantil9unid_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdInfantil9unid_72, 
                style: style_EdInfantil9unid_72,
                popuplayertitle: 'Ed. Infantil (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EdInfantil9unid_72.png" /> Ed. Infantil (9 unid.)'
            });
var format_EdInfantilEnsFundamental39unid_73 = new ol.format.GeoJSON();
var features_EdInfantilEnsFundamental39unid_73 = format_EdInfantilEnsFundamental39unid_73.readFeatures(json_EdInfantilEnsFundamental39unid_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdInfantilEnsFundamental39unid_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdInfantilEnsFundamental39unid_73.addFeatures(features_EdInfantilEnsFundamental39unid_73);
var lyr_EdInfantilEnsFundamental39unid_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdInfantilEnsFundamental39unid_73, 
                style: style_EdInfantilEnsFundamental39unid_73,
                popuplayertitle: 'Ed. Infantil, Ens. Fundamental (39 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EdInfantilEnsFundamental39unid_73.png" /> Ed. Infantil, Ens. Fundamental (39 unid.)'
            });
var format_EJA3unid_74 = new ol.format.GeoJSON();
var features_EJA3unid_74 = format_EJA3unid_74.readFeatures(json_EJA3unid_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EJA3unid_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJA3unid_74.addFeatures(features_EJA3unid_74);
var lyr_EJA3unid_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJA3unid_74, 
                style: style_EJA3unid_74,
                popuplayertitle: 'EJA (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EJA3unid_74.png" /> EJA (3 unid.)'
            });
var format_EnsFundamental3unid_75 = new ol.format.GeoJSON();
var features_EnsFundamental3unid_75 = format_EnsFundamental3unid_75.readFeatures(json_EnsFundamental3unid_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EnsFundamental3unid_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnsFundamental3unid_75.addFeatures(features_EnsFundamental3unid_75);
var lyr_EnsFundamental3unid_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnsFundamental3unid_75, 
                style: style_EnsFundamental3unid_75,
                popuplayertitle: 'Ens. Fundamental (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EnsFundamental3unid_75.png" /> Ens. Fundamental (3 unid.)'
            });
var format_EspaodeDifusoCientfica1unid_76 = new ol.format.GeoJSON();
var features_EspaodeDifusoCientfica1unid_76 = format_EspaodeDifusoCientfica1unid_76.readFeatures(json_EspaodeDifusoCientfica1unid_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EspaodeDifusoCientfica1unid_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaodeDifusoCientfica1unid_76.addFeatures(features_EspaodeDifusoCientfica1unid_76);
var lyr_EspaodeDifusoCientfica1unid_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaodeDifusoCientfica1unid_76, 
                style: style_EspaodeDifusoCientfica1unid_76,
                popuplayertitle: 'Espaço de Difusão Científica (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EspaodeDifusoCientfica1unid_76.png" /> Espaço de Difusão Científica (1 unid.)'
            });
var format_SecretariaMunicipaldeEducao1unid_77 = new ol.format.GeoJSON();
var features_SecretariaMunicipaldeEducao1unid_77 = format_SecretariaMunicipaldeEducao1unid_77.readFeatures(json_SecretariaMunicipaldeEducao1unid_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SecretariaMunicipaldeEducao1unid_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecretariaMunicipaldeEducao1unid_77.addFeatures(features_SecretariaMunicipaldeEducao1unid_77);
var lyr_SecretariaMunicipaldeEducao1unid_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecretariaMunicipaldeEducao1unid_77, 
                style: style_SecretariaMunicipaldeEducao1unid_77,
                popuplayertitle: 'Secretaria Municipal de Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/SecretariaMunicipaldeEducao1unid_77.png" /> Secretaria Municipal de Educação (1 unid.)'
            });
var format_SetordeMerenda1unid_78 = new ol.format.GeoJSON();
var features_SetordeMerenda1unid_78 = format_SetordeMerenda1unid_78.readFeatures(json_SetordeMerenda1unid_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SetordeMerenda1unid_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetordeMerenda1unid_78.addFeatures(features_SetordeMerenda1unid_78);
var lyr_SetordeMerenda1unid_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetordeMerenda1unid_78, 
                style: style_SetordeMerenda1unid_78,
                popuplayertitle: 'Setor de Merenda (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/SetordeMerenda1unid_78.png" /> Setor de Merenda (1 unid.)'
            });
var format_UniversidadeAbertadoBrasilUAB1unid_79 = new ol.format.GeoJSON();
var features_UniversidadeAbertadoBrasilUAB1unid_79 = format_UniversidadeAbertadoBrasilUAB1unid_79.readFeatures(json_UniversidadeAbertadoBrasilUAB1unid_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UniversidadeAbertadoBrasilUAB1unid_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversidadeAbertadoBrasilUAB1unid_79.addFeatures(features_UniversidadeAbertadoBrasilUAB1unid_79);
var lyr_UniversidadeAbertadoBrasilUAB1unid_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversidadeAbertadoBrasilUAB1unid_79, 
                style: style_UniversidadeAbertadoBrasilUAB1unid_79,
                popuplayertitle: 'Universidade Aberta do Brasil - UAB (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UniversidadeAbertadoBrasilUAB1unid_79.png" /> Universidade Aberta do Brasil - UAB (1 unid.)'
            });
var format_RodoviasEstaduais4unid_80 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_80 = format_RodoviasEstaduais4unid_80.readFeatures(json_RodoviasEstaduais4unid_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasEstaduais4unid_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_80.addFeatures(features_RodoviasEstaduais4unid_80);
var lyr_RodoviasEstaduais4unid_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_80, 
                style: style_RodoviasEstaduais4unid_80,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_80.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_81 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_81 = format_EstradasRuraisMunicipais34unid_81.readFeatures(json_EstradasRuraisMunicipais34unid_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstradasRuraisMunicipais34unid_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_81.addFeatures(features_EstradasRuraisMunicipais34unid_81);
var lyr_EstradasRuraisMunicipais34unid_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_81, 
                style: style_EstradasRuraisMunicipais34unid_81,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_81.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_82 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_82 = format_RodoviasMunicipais8unid_82.readFeatures(json_RodoviasMunicipais8unid_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasMunicipais8unid_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_82.addFeatures(features_RodoviasMunicipais8unid_82);
var lyr_RodoviasMunicipais8unid_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_82, 
                style: style_RodoviasMunicipais8unid_82,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_82.png" /> Rodovias Municipais (8 unid.)'
            });
var format_LotesImvelPrivado96unid_83 = new ol.format.GeoJSON();
var features_LotesImvelPrivado96unid_83 = format_LotesImvelPrivado96unid_83.readFeatures(json_LotesImvelPrivado96unid_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LotesImvelPrivado96unid_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado96unid_83.addFeatures(features_LotesImvelPrivado96unid_83);
var lyr_LotesImvelPrivado96unid_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado96unid_83, 
                style: style_LotesImvelPrivado96unid_83,
                popuplayertitle: 'Lotes - Imóvel Privado (96 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado96unid_83.png" /> Lotes - Imóvel Privado (96 unid.)'
            });
var format_ImvelPrivado96unid_84 = new ol.format.GeoJSON();
var features_ImvelPrivado96unid_84 = format_ImvelPrivado96unid_84.readFeatures(json_ImvelPrivado96unid_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPrivado96unid_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado96unid_84.addFeatures(features_ImvelPrivado96unid_84);
var lyr_ImvelPrivado96unid_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado96unid_84, 
                style: style_ImvelPrivado96unid_84,
                popuplayertitle: 'Imóvel Privado (96 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado96unid_84.png" /> Imóvel Privado (96 unid.)'
            });
var format_ImvelRural1unid_85 = new ol.format.GeoJSON();
var features_ImvelRural1unid_85 = format_ImvelRural1unid_85.readFeatures(json_ImvelRural1unid_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelRural1unid_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelRural1unid_85.addFeatures(features_ImvelRural1unid_85);
var lyr_ImvelRural1unid_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelRural1unid_85, 
                style: style_ImvelRural1unid_85,
                popuplayertitle: 'Imóvel Rural (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelRural1unid_85.png" /> Imóvel Rural (1 unid.)'
            });
var format_ImvelPblico125unid_86 = new ol.format.GeoJSON();
var features_ImvelPblico125unid_86 = format_ImvelPblico125unid_86.readFeatures(json_ImvelPblico125unid_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico125unid_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico125unid_86.addFeatures(features_ImvelPblico125unid_86);
var lyr_ImvelPblico125unid_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico125unid_86, 
                style: style_ImvelPblico125unid_86,
                popuplayertitle: 'Imóvel Público (125 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico125unid_86.png" /> Imóvel Público (125 unid.)'
            });
var format_PARQUE_DOS_TRABALHADORES_87 = new ol.format.GeoJSON();
var features_PARQUE_DOS_TRABALHADORES_87 = format_PARQUE_DOS_TRABALHADORES_87.readFeatures(json_PARQUE_DOS_TRABALHADORES_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DOS_TRABALHADORES_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DOS_TRABALHADORES_87.addFeatures(features_PARQUE_DOS_TRABALHADORES_87);
var lyr_PARQUE_DOS_TRABALHADORES_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DOS_TRABALHADORES_87, 
                style: style_PARQUE_DOS_TRABALHADORES_87,
                popuplayertitle: 'PARQUE_DOS_TRABALHADORES',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DOS_TRABALHADORES_87.png" /> PARQUE_DOS_TRABALHADORES'
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
var format_JARDIM_ZOOBOTANICO_89 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_89 = format_JARDIM_ZOOBOTANICO_89.readFeatures(json_JARDIM_ZOOBOTANICO_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_89.addFeatures(features_JARDIM_ZOOBOTANICO_89);
var lyr_JARDIM_ZOOBOTANICO_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_89, 
                style: style_JARDIM_ZOOBOTANICO_89,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_89.png" /> JARDIM_ZOOBOTANICO'
            });
var format_JARDIM_ZOOBOTANICO_90 = new ol.format.GeoJSON();
var features_JARDIM_ZOOBOTANICO_90 = format_JARDIM_ZOOBOTANICO_90.readFeatures(json_JARDIM_ZOOBOTANICO_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JARDIM_ZOOBOTANICO_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARDIM_ZOOBOTANICO_90.addFeatures(features_JARDIM_ZOOBOTANICO_90);
var lyr_JARDIM_ZOOBOTANICO_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARDIM_ZOOBOTANICO_90, 
                style: style_JARDIM_ZOOBOTANICO_90,
                popuplayertitle: 'JARDIM_ZOOBOTANICO',
                interactive: true,
                title: '<img src="styles/legend/JARDIM_ZOOBOTANICO_90.png" /> JARDIM_ZOOBOTANICO'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92 = format_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.readFeatures(json_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.addFeatures(features_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92);
var lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92, 
                style: style_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92,
                popuplayertitle: 'PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.png" /> PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94 = new ol.format.GeoJSON();
var features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94 = format_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.readFeatures(json_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.addFeatures(features_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94);
var lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94, 
                style: style_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94,
                popuplayertitle: 'PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.png" /> PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96 = new ol.format.GeoJSON();
var features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96 = format_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.readFeatures(json_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.addFeatures(features_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96);
var lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96, 
                style: style_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96,
                popuplayertitle: 'PARQUE_DE_EXPOSICOES_FERNANDO_COSTA',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.png" /> PARQUE_DE_EXPOSICOES_FERNANDO_COSTA'
            });
var format_PARQUE_CAXAMBU_97 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_97 = format_PARQUE_CAXAMBU_97.readFeatures(json_PARQUE_CAXAMBU_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_97.addFeatures(features_PARQUE_CAXAMBU_97);
var lyr_PARQUE_CAXAMBU_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_97, 
                style: style_PARQUE_CAXAMBU_97,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_97.png" /> PARQUE_CAXAMBU'
            });
var format_PARQUE_CAXAMBU_98 = new ol.format.GeoJSON();
var features_PARQUE_CAXAMBU_98 = format_PARQUE_CAXAMBU_98.readFeatures(json_PARQUE_CAXAMBU_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PARQUE_CAXAMBU_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUE_CAXAMBU_98.addFeatures(features_PARQUE_CAXAMBU_98);
var lyr_PARQUE_CAXAMBU_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUE_CAXAMBU_98, 
                style: style_PARQUE_CAXAMBU_98,
                popuplayertitle: 'PARQUE_CAXAMBU',
                interactive: true,
                title: '<img src="styles/legend/PARQUE_CAXAMBU_98.png" /> PARQUE_CAXAMBU'
            });
var format_COMPLEXO_POLIESPORTIVO_99 = new ol.format.GeoJSON();
var features_COMPLEXO_POLIESPORTIVO_99 = format_COMPLEXO_POLIESPORTIVO_99.readFeatures(json_COMPLEXO_POLIESPORTIVO_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_COMPLEXO_POLIESPORTIVO_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMPLEXO_POLIESPORTIVO_99.addFeatures(features_COMPLEXO_POLIESPORTIVO_99);
var lyr_COMPLEXO_POLIESPORTIVO_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMPLEXO_POLIESPORTIVO_99, 
                style: style_COMPLEXO_POLIESPORTIVO_99,
                popuplayertitle: 'COMPLEXO_POLIESPORTIVO',
                interactive: true,
                title: '<img src="styles/legend/COMPLEXO_POLIESPORTIVO_99.png" /> COMPLEXO_POLIESPORTIVO'
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
var format_UBSdoJardimSantaBarbara_101 = new ol.format.GeoJSON();
var features_UBSdoJardimSantaBarbara_101 = format_UBSdoJardimSantaBarbara_101.readFeatures(json_UBSdoJardimSantaBarbara_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoJardimSantaBarbara_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoJardimSantaBarbara_101.addFeatures(features_UBSdoJardimSantaBarbara_101);
var lyr_UBSdoJardimSantaBarbara_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoJardimSantaBarbara_101, 
                style: style_UBSdoJardimSantaBarbara_101,
                popuplayertitle: 'UBS do Jardim Santa Barbara',
                interactive: true,
                title: '<img src="styles/legend/UBSdoJardimSantaBarbara_101.png" /> UBS do Jardim Santa Barbara'
            });
var format_UBSdaVilaSantaTerezinha_102 = new ol.format.GeoJSON();
var features_UBSdaVilaSantaTerezinha_102 = format_UBSdaVilaSantaTerezinha_102.readFeatures(json_UBSdaVilaSantaTerezinha_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdaVilaSantaTerezinha_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdaVilaSantaTerezinha_102.addFeatures(features_UBSdaVilaSantaTerezinha_102);
var lyr_UBSdaVilaSantaTerezinha_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdaVilaSantaTerezinha_102, 
                style: style_UBSdaVilaSantaTerezinha_102,
                popuplayertitle: 'UBS da Vila Santa Terezinha',
                interactive: true,
                title: '<img src="styles/legend/UBSdaVilaSantaTerezinha_102.png" /> UBS da Vila Santa Terezinha'
            });
var format_UBSdoResidencialPeresElias_103 = new ol.format.GeoJSON();
var features_UBSdoResidencialPeresElias_103 = format_UBSdoResidencialPeresElias_103.readFeatures(json_UBSdoResidencialPeresElias_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoResidencialPeresElias_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoResidencialPeresElias_103.addFeatures(features_UBSdoResidencialPeresElias_103);
var lyr_UBSdoResidencialPeresElias_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoResidencialPeresElias_103, 
                style: style_UBSdoResidencialPeresElias_103,
                popuplayertitle: 'UBS do Residencial Peres Elias',
                interactive: true,
                title: '<img src="styles/legend/UBSdoResidencialPeresElias_103.png" /> UBS do Residencial Peres Elias'
            });
var format_UBSdoParquedoHorto_104 = new ol.format.GeoJSON();
var features_UBSdoParquedoHorto_104 = format_UBSdoParquedoHorto_104.readFeatures(json_UBSdoParquedoHorto_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoParquedoHorto_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoParquedoHorto_104.addFeatures(features_UBSdoParquedoHorto_104);
var lyr_UBSdoParquedoHorto_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoParquedoHorto_104, 
                style: style_UBSdoParquedoHorto_104,
                popuplayertitle: 'UBS do Parque do Horto',
                interactive: true,
                title: '<img src="styles/legend/UBSdoParquedoHorto_104.png" /> UBS do Parque do Horto'
            });
var format_UBSdoJardimPalma_105 = new ol.format.GeoJSON();
var features_UBSdoJardimPalma_105 = format_UBSdoJardimPalma_105.readFeatures(json_UBSdoJardimPalma_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoJardimPalma_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoJardimPalma_105.addFeatures(features_UBSdoJardimPalma_105);
var lyr_UBSdoJardimPalma_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoJardimPalma_105, 
                style: style_UBSdoJardimPalma_105,
                popuplayertitle: 'UBS do Jardim Palma',
                interactive: true,
                title: '<img src="styles/legend/UBSdoJardimPalma_105.png" /> UBS do Jardim Palma'
            });
var format_RevitalizaodaEstaoFerroviria_106 = new ol.format.GeoJSON();
var features_RevitalizaodaEstaoFerroviria_106 = format_RevitalizaodaEstaoFerroviria_106.readFeatures(json_RevitalizaodaEstaoFerroviria_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RevitalizaodaEstaoFerroviria_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RevitalizaodaEstaoFerroviria_106.addFeatures(features_RevitalizaodaEstaoFerroviria_106);
var lyr_RevitalizaodaEstaoFerroviria_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RevitalizaodaEstaoFerroviria_106, 
                style: style_RevitalizaodaEstaoFerroviria_106,
                popuplayertitle: 'Revitalização da Estação Ferroviária',
                interactive: true,
                title: '<img src="styles/legend/RevitalizaodaEstaoFerroviria_106.png" /> Revitalização da Estação Ferroviária'
            });
var format_readeLazerdoParqueContinental_107 = new ol.format.GeoJSON();
var features_readeLazerdoParqueContinental_107 = format_readeLazerdoParqueContinental_107.readFeatures(json_readeLazerdoParqueContinental_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoParqueContinental_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoParqueContinental_107.addFeatures(features_readeLazerdoParqueContinental_107);
var lyr_readeLazerdoParqueContinental_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoParqueContinental_107, 
                style: style_readeLazerdoParqueContinental_107,
                popuplayertitle: 'Área de Lazer do Parque Continental',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoParqueContinental_107.png" /> Área de Lazer do Parque Continental'
            });
var format_readeLazerdoJardimPortinari_108 = new ol.format.GeoJSON();
var features_readeLazerdoJardimPortinari_108 = format_readeLazerdoJardimPortinari_108.readFeatures(json_readeLazerdoJardimPortinari_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoJardimPortinari_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoJardimPortinari_108.addFeatures(features_readeLazerdoJardimPortinari_108);
var lyr_readeLazerdoJardimPortinari_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoJardimPortinari_108, 
                style: style_readeLazerdoJardimPortinari_108,
                popuplayertitle: 'Área de Lazer do Jardim Portinari',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoJardimPortinari_108.png" /> Área de Lazer do Jardim Portinari'
            });
var format_readeLazerdoParquedasEsmeraldas_109 = new ol.format.GeoJSON();
var features_readeLazerdoParquedasEsmeraldas_109 = format_readeLazerdoParquedasEsmeraldas_109.readFeatures(json_readeLazerdoParquedasEsmeraldas_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoParquedasEsmeraldas_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoParquedasEsmeraldas_109.addFeatures(features_readeLazerdoParquedasEsmeraldas_109);
var lyr_readeLazerdoParquedasEsmeraldas_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoParquedasEsmeraldas_109, 
                style: style_readeLazerdoParquedasEsmeraldas_109,
                popuplayertitle: 'Área de Lazer do Parque das Esmeraldas',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoParquedasEsmeraldas_109.png" /> Área de Lazer do Parque das Esmeraldas'
            });
var format_ReforoEstruturaldoColgioChampagnat_110 = new ol.format.GeoJSON();
var features_ReforoEstruturaldoColgioChampagnat_110 = format_ReforoEstruturaldoColgioChampagnat_110.readFeatures(json_ReforoEstruturaldoColgioChampagnat_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReforoEstruturaldoColgioChampagnat_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReforoEstruturaldoColgioChampagnat_110.addFeatures(features_ReforoEstruturaldoColgioChampagnat_110);
var lyr_ReforoEstruturaldoColgioChampagnat_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReforoEstruturaldoColgioChampagnat_110, 
                style: style_ReforoEstruturaldoColgioChampagnat_110,
                popuplayertitle: 'Reforço Estrutural do Colégio Champagnat',
                interactive: true,
                title: '<img src="styles/legend/ReforoEstruturaldoColgioChampagnat_110.png" /> Reforço Estrutural do Colégio Champagnat'
            });
var format_ProntoSocorrolvaroAzzuz_111 = new ol.format.GeoJSON();
var features_ProntoSocorrolvaroAzzuz_111 = format_ProntoSocorrolvaroAzzuz_111.readFeatures(json_ProntoSocorrolvaroAzzuz_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProntoSocorrolvaroAzzuz_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProntoSocorrolvaroAzzuz_111.addFeatures(features_ProntoSocorrolvaroAzzuz_111);
var lyr_ProntoSocorrolvaroAzzuz_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProntoSocorrolvaroAzzuz_111, 
                style: style_ProntoSocorrolvaroAzzuz_111,
                popuplayertitle: 'Pronto Socorro Álvaro Azzuz',
                interactive: true,
                title: '<img src="styles/legend/ProntoSocorrolvaroAzzuz_111.png" /> Pronto Socorro Álvaro Azzuz'
            });
var format_Policlnica_112 = new ol.format.GeoJSON();
var features_Policlnica_112 = format_Policlnica_112.readFeatures(json_Policlnica_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Policlnica_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policlnica_112.addFeatures(features_Policlnica_112);
var lyr_Policlnica_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Policlnica_112, 
                style: style_Policlnica_112,
                popuplayertitle: 'Policlínica',
                interactive: true,
                title: '<img src="styles/legend/Policlnica_112.png" /> Policlínica'
            });
var format_RecapeamentodoJardimMartins_113 = new ol.format.GeoJSON();
var features_RecapeamentodoJardimMartins_113 = format_RecapeamentodoJardimMartins_113.readFeatures(json_RecapeamentodoJardimMartins_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecapeamentodoJardimMartins_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecapeamentodoJardimMartins_113.addFeatures(features_RecapeamentodoJardimMartins_113);
var lyr_RecapeamentodoJardimMartins_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecapeamentodoJardimMartins_113, 
                style: style_RecapeamentodoJardimMartins_113,
                popuplayertitle: 'Recapeamento do Jardim Martins',
                interactive: true,
                title: '<img src="styles/legend/RecapeamentodoJardimMartins_113.png" /> Recapeamento do Jardim Martins'
            });
var format_NovoNGA_114 = new ol.format.GeoJSON();
var features_NovoNGA_114 = format_NovoNGA_114.readFeatures(json_NovoNGA_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_NovoNGA_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovoNGA_114.addFeatures(features_NovoNGA_114);
var lyr_NovoNGA_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovoNGA_114, 
                style: style_NovoNGA_114,
                popuplayertitle: 'Novo NGA',
                interactive: true,
                title: '<img src="styles/legend/NovoNGA_114.png" /> Novo NGA'
            });
var format_EstabilizaodeTaludenoJardimBrasilndia_115 = new ol.format.GeoJSON();
var features_EstabilizaodeTaludenoJardimBrasilndia_115 = format_EstabilizaodeTaludenoJardimBrasilndia_115.readFeatures(json_EstabilizaodeTaludenoJardimBrasilndia_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstabilizaodeTaludenoJardimBrasilndia_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstabilizaodeTaludenoJardimBrasilndia_115.addFeatures(features_EstabilizaodeTaludenoJardimBrasilndia_115);
var lyr_EstabilizaodeTaludenoJardimBrasilndia_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstabilizaodeTaludenoJardimBrasilndia_115, 
                style: style_EstabilizaodeTaludenoJardimBrasilndia_115,
                popuplayertitle: 'Estabilização de Talude no Jardim Brasilândia',
                interactive: true,
                title: '<img src="styles/legend/EstabilizaodeTaludenoJardimBrasilndia_115.png" /> Estabilização de Talude no Jardim Brasilândia'
            });
var format_EscolaJooLiporoni_116 = new ol.format.GeoJSON();
var features_EscolaJooLiporoni_116 = format_EscolaJooLiporoni_116.readFeatures(json_EscolaJooLiporoni_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EscolaJooLiporoni_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaJooLiporoni_116.addFeatures(features_EscolaJooLiporoni_116);
var lyr_EscolaJooLiporoni_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscolaJooLiporoni_116, 
                style: style_EscolaJooLiporoni_116,
                popuplayertitle: 'Escola João Liporoni',
                interactive: true,
                title: '<img src="styles/legend/EscolaJooLiporoni_116.png" /> Escola João Liporoni'
            });
var format_DrenagemdoCrregodosBagres_117 = new ol.format.GeoJSON();
var features_DrenagemdoCrregodosBagres_117 = format_DrenagemdoCrregodosBagres_117.readFeatures(json_DrenagemdoCrregodosBagres_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoCrregodosBagres_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoCrregodosBagres_117.addFeatures(features_DrenagemdoCrregodosBagres_117);
var lyr_DrenagemdoCrregodosBagres_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoCrregodosBagres_117, 
                style: style_DrenagemdoCrregodosBagres_117,
                popuplayertitle: 'Drenagem do Córrego dos Bagres',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoCrregodosBagres_117.png" /> Drenagem do Córrego dos Bagres'
            });
var format_DrenagemdoCrregoCubato_118 = new ol.format.GeoJSON();
var features_DrenagemdoCrregoCubato_118 = format_DrenagemdoCrregoCubato_118.readFeatures(json_DrenagemdoCrregoCubato_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoCrregoCubato_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoCrregoCubato_118.addFeatures(features_DrenagemdoCrregoCubato_118);
var lyr_DrenagemdoCrregoCubato_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoCrregoCubato_118, 
                style: style_DrenagemdoCrregoCubato_118,
                popuplayertitle: 'Drenagem do Córrego Cubatão',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoCrregoCubato_118.png" /> Drenagem do Córrego Cubatão'
            });
var format_DrenagemdoJardimPalmeiras_119 = new ol.format.GeoJSON();
var features_DrenagemdoJardimPalmeiras_119 = format_DrenagemdoJardimPalmeiras_119.readFeatures(json_DrenagemdoJardimPalmeiras_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoJardimPalmeiras_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoJardimPalmeiras_119.addFeatures(features_DrenagemdoJardimPalmeiras_119);
var lyr_DrenagemdoJardimPalmeiras_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoJardimPalmeiras_119, 
                style: style_DrenagemdoJardimPalmeiras_119,
                popuplayertitle: 'Drenagem do Jardim Palmeiras',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoJardimPalmeiras_119.png" /> Drenagem do Jardim Palmeiras'
            });
var format_CrechedoSamelPark_120 = new ol.format.GeoJSON();
var features_CrechedoSamelPark_120 = format_CrechedoSamelPark_120.readFeatures(json_CrechedoSamelPark_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CrechedoSamelPark_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrechedoSamelPark_120.addFeatures(features_CrechedoSamelPark_120);
var lyr_CrechedoSamelPark_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrechedoSamelPark_120, 
                style: style_CrechedoSamelPark_120,
                popuplayertitle: 'Creche do Samel Park',
                interactive: true,
                title: '<img src="styles/legend/CrechedoSamelPark_120.png" /> Creche do Samel Park'
            });
var format_CRASOeste_121 = new ol.format.GeoJSON();
var features_CRASOeste_121 = format_CRASOeste_121.readFeatures(json_CRASOeste_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRASOeste_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRASOeste_121.addFeatures(features_CRASOeste_121);
var lyr_CRASOeste_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRASOeste_121, 
                style: style_CRASOeste_121,
                popuplayertitle: 'CRAS Oeste',
                interactive: true,
                title: '<img src="styles/legend/CRASOeste_121.png" /> CRAS Oeste'
            });
var format_CRASNorte_122 = new ol.format.GeoJSON();
var features_CRASNorte_122 = format_CRASNorte_122.readFeatures(json_CRASNorte_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRASNorte_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRASNorte_122.addFeatures(features_CRASNorte_122);
var lyr_CRASNorte_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRASNorte_122, 
                style: style_CRASNorte_122,
                popuplayertitle: 'CRAS Norte',
                interactive: true,
                title: '<img src="styles/legend/CRASNorte_122.png" /> CRAS Norte'
            });
var format_CorpodeBombeiros_123 = new ol.format.GeoJSON();
var features_CorpodeBombeiros_123 = format_CorpodeBombeiros_123.readFeatures(json_CorpodeBombeiros_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CorpodeBombeiros_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorpodeBombeiros_123.addFeatures(features_CorpodeBombeiros_123);
var lyr_CorpodeBombeiros_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorpodeBombeiros_123, 
                style: style_CorpodeBombeiros_123,
                popuplayertitle: 'Corpo de Bombeiros',
                interactive: true,
                title: '<img src="styles/legend/CorpodeBombeiros_123.png" /> Corpo de Bombeiros'
            });
var format_ContenoViria_124 = new ol.format.GeoJSON();
var features_ContenoViria_124 = format_ContenoViria_124.readFeatures(json_ContenoViria_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ContenoViria_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContenoViria_124.addFeatures(features_ContenoViria_124);
var lyr_ContenoViria_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContenoViria_124, 
                style: style_ContenoViria_124,
                popuplayertitle: 'Contenção Viária',
                interactive: true,
                title: '<img src="styles/legend/ContenoViria_124.png" /> Contenção Viária'
            });
var format_CAPSInfantil_125 = new ol.format.GeoJSON();
var features_CAPSInfantil_125 = format_CAPSInfantil_125.readFeatures(json_CAPSInfantil_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CAPSInfantil_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPSInfantil_125.addFeatures(features_CAPSInfantil_125);
var lyr_CAPSInfantil_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPSInfantil_125, 
                style: style_CAPSInfantil_125,
                popuplayertitle: 'CAPS Infantil',
                interactive: true,
                title: '<img src="styles/legend/CAPSInfantil_125.png" /> CAPS Infantil'
            });
var format_ObrasPblicas_126 = new ol.format.GeoJSON();
var features_ObrasPblicas_126 = format_ObrasPblicas_126.readFeatures(json_ObrasPblicas_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ObrasPblicas_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasPblicas_126.addFeatures(features_ObrasPblicas_126);
var lyr_ObrasPblicas_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasPblicas_126, 
                style: style_ObrasPblicas_126,
                popuplayertitle: 'Obras Públicas',
                interactive: true,
                title: '<img src="styles/legend/ObrasPblicas_126.png" /> Obras Públicas'
            });
var format_REURB9unid_127 = new ol.format.GeoJSON();
var features_REURB9unid_127 = format_REURB9unid_127.readFeatures(json_REURB9unid_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURB9unid_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURB9unid_127.addFeatures(features_REURB9unid_127);
var lyr_REURB9unid_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURB9unid_127, 
                style: style_REURB9unid_127,
                popuplayertitle: 'REURB (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURB9unid_127.png" /> REURB (9 unid.)'
            });
var format_REURB9unid_128 = new ol.format.GeoJSON();
var features_REURB9unid_128 = format_REURB9unid_128.readFeatures(json_REURB9unid_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURB9unid_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURB9unid_128.addFeatures(features_REURB9unid_128);
var lyr_REURB9unid_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURB9unid_128, 
                style: style_REURB9unid_128,
                popuplayertitle: 'REURB (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURB9unid_128.png" /> REURB (9 unid.)'
            });
var format_Vivenna_129 = new ol.format.GeoJSON();
var features_Vivenna_129 = format_Vivenna_129.readFeatures(json_Vivenna_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_129.addFeatures(features_Vivenna_129);
var lyr_Vivenna_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_129, 
                style: style_Vivenna_129,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_129_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_129_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_129_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_129_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_129_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_129_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_129_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_129_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/Vivenna_130.png" /> Vivenna'
            });
var format_VittaSoVicente_131 = new ol.format.GeoJSON();
var features_VittaSoVicente_131 = format_VittaSoVicente_131.readFeatures(json_VittaSoVicente_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_131.addFeatures(features_VittaSoVicente_131);
var lyr_VittaSoVicente_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_131, 
                style: style_VittaSoVicente_131,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_131_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_131_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_131_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_131_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_131_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_131_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/VittaSoVicente_132.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_133 = new ol.format.GeoJSON();
var features_VittaJardimSimes_133 = format_VittaJardimSimes_133.readFeatures(json_VittaJardimSimes_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_133.addFeatures(features_VittaJardimSimes_133);
var lyr_VittaJardimSimes_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_133, 
                style: style_VittaJardimSimes_133,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_133_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_133_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_133_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_133_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_133_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_133_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/VittaJardimSimes_134.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_135 = new ol.format.GeoJSON();
var features_VittaAlvorada_135 = format_VittaAlvorada_135.readFeatures(json_VittaAlvorada_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_135.addFeatures(features_VittaAlvorada_135);
var lyr_VittaAlvorada_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_135, 
                style: style_VittaAlvorada_135,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_135_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_135_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_135_2.png" /> LOTES<br />\
    <img src="styles/legend/VittaAlvorada_135_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_135_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaAlvorada_135_5.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VittaAlvorada_136.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_137 = new ol.format.GeoJSON();
var features_VilaDiEspanha_137 = format_VilaDiEspanha_137.readFeatures(json_VilaDiEspanha_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_137.addFeatures(features_VilaDiEspanha_137);
var lyr_VilaDiEspanha_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_137, 
                style: style_VilaDiEspanha_137,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_137_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_137_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_137_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_137_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_137_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_137_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_137_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_137_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VilaDiEspanha_138.png" /> Vila Di Espanha'
            });
var format_VillaPucci_139 = new ol.format.GeoJSON();
var features_VillaPucci_139 = format_VillaPucci_139.readFeatures(json_VillaPucci_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_139.addFeatures(features_VillaPucci_139);
var lyr_VillaPucci_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_139, 
                style: style_VillaPucci_139,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_139_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_139_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_139_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_139_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_139_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_139_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_139_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_139_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_139_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_139_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_139_10.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VillaPucci_140.png" /> Villa Pucci'
            });
var format_VilaPiemonteII_141 = new ol.format.GeoJSON();
var features_VilaPiemonteII_141 = format_VilaPiemonteII_141.readFeatures(json_VilaPiemonteII_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaPiemonteII_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaPiemonteII_141.addFeatures(features_VilaPiemonteII_141);
var lyr_VilaPiemonteII_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaPiemonteII_141, 
                style: style_VilaPiemonteII_141,
                popuplayertitle: 'Vila Piemonte II',
                interactive: true,
    title: 'Vila Piemonte II<br />\
    <img src="styles/legend/VilaPiemonteII_141_0.png" /> APP<br />\
    <img src="styles/legend/VilaPiemonteII_141_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaPiemonteII_141_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaPiemonteII_141_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/VilaPiemonteII_141_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_141_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaPiemonteII_141_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VilaPiemonteII_141_7.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaPiemonteII_141_8.png" /> RUAS<br />\
    <img src="styles/legend/VilaPiemonteII_141_9.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VilaPiemonteII_142.png" /> Vila Piemonte II'
            });
var format_VilaOlimpica_143 = new ol.format.GeoJSON();
var features_VilaOlimpica_143 = format_VilaOlimpica_143.readFeatures(json_VilaOlimpica_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaOlimpica_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaOlimpica_143.addFeatures(features_VilaOlimpica_143);
var lyr_VilaOlimpica_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaOlimpica_143, 
                style: style_VilaOlimpica_143,
                popuplayertitle: 'Vila Olimpica',
                interactive: true,
    title: 'Vila Olimpica<br />\
    <img src="styles/legend/VilaOlimpica_143_0.png" /> APP<br />\
    <img src="styles/legend/VilaOlimpica_143_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaOlimpica_143_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VilaOlimpica_143_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaOlimpica_143_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaOlimpica_143_5.png" /> RUAS<br />\
    <img src="styles/legend/VilaOlimpica_143_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VilaOlimpica_144.png" /> Vila Olimpica'
            });
var format_VillaDoratta_145 = new ol.format.GeoJSON();
var features_VillaDoratta_145 = format_VillaDoratta_145.readFeatures(json_VillaDoratta_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_145.addFeatures(features_VillaDoratta_145);
var lyr_VillaDoratta_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_145, 
                style: style_VillaDoratta_145,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_145_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_145_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_145_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_145_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_145_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_145_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_145_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_145_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_145_8.png" /> APP<br />' });
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
                title: '<img src="styles/legend/VillaDoratta_146.png" /> Villa Doratta'
            });
var format_VillaBella_147 = new ol.format.GeoJSON();
var features_VillaBella_147 = format_VillaBella_147.readFeatures(json_VillaBella_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_147.addFeatures(features_VillaBella_147);
var lyr_VillaBella_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_147, 
                style: style_VillaBella_147,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_147_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_147_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_147_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_147_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_147_6.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/VillaBella_148.png" /> Villa Bella'
            });
var format_Versalhes_149 = new ol.format.GeoJSON();
var features_Versalhes_149 = format_Versalhes_149.readFeatures(json_Versalhes_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_149.addFeatures(features_Versalhes_149);
var lyr_Versalhes_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_149, 
                style: style_Versalhes_149,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_149_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_149_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_149_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_149_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_149_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_149_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/Versalhes_150.png" /> Versalhes'
            });
var format_TorontoResidence_151 = new ol.format.GeoJSON();
var features_TorontoResidence_151 = format_TorontoResidence_151.readFeatures(json_TorontoResidence_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_151.addFeatures(features_TorontoResidence_151);
var lyr_TorontoResidence_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_151, 
                style: style_TorontoResidence_151,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_151_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_151_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_151_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_151_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_151_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_151_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/TorontoResidence_152.png" /> Toronto Residence'
            });
var format_TerraNova_153 = new ol.format.GeoJSON();
var features_TerraNova_153 = format_TerraNova_153.readFeatures(json_TerraNova_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_153.addFeatures(features_TerraNova_153);
var lyr_TerraNova_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_153, 
                style: style_TerraNova_153,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_153_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_153_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_153_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_153_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_153_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_153_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/TerraNova_154.png" /> Terra Nova'
            });
var format_Sonetto_155 = new ol.format.GeoJSON();
var features_Sonetto_155 = format_Sonetto_155.readFeatures(json_Sonetto_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_155.addFeatures(features_Sonetto_155);
var lyr_Sonetto_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_155, 
                style: style_Sonetto_155,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_155.png" /> Sonetto'
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
var format_SMARTFRANCAEIXORESIDENCIAL2_157 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_157 = format_SMARTFRANCAEIXORESIDENCIAL2_157.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_157.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_157);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_157, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_157,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_157_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_158.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_159 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_159 = format_SMARTFRANCAEIXORESIDENCIAL1_159.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_159.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_159);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_159, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_159,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_159_8.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_160.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_161 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_161 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_161.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_161.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_161);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_161, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_161,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_161_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_162.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_163 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_163 = format_ServidoRamal138kVFranca4Guanabara_163.readFeatures(json_ServidoRamal138kVFranca4Guanabara_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_163.addFeatures(features_ServidoRamal138kVFranca4Guanabara_163);
var lyr_ServidoRamal138kVFranca4Guanabara_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_163, 
                style: style_ServidoRamal138kVFranca4Guanabara_163,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_163.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
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
var format_SantaLina_165 = new ol.format.GeoJSON();
var features_SantaLina_165 = format_SantaLina_165.readFeatures(json_SantaLina_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_165.addFeatures(features_SantaLina_165);
var lyr_SantaLina_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_165, 
                style: style_SantaLina_165,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_165_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_165_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_165_2.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/SantaLina_166.png" /> Santa Lina'
            });
var format_SantAnita_167 = new ol.format.GeoJSON();
var features_SantAnita_167 = format_SantAnita_167.readFeatures(json_SantAnita_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_167.addFeatures(features_SantAnita_167);
var lyr_SantAnita_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_167, 
                style: style_SantAnita_167,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_167.png" /> Sant\'Anita'
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
var format_RuaAlfioBenedini_169 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_169 = format_RuaAlfioBenedini_169.readFeatures(json_RuaAlfioBenedini_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_169.addFeatures(features_RuaAlfioBenedini_169);
var lyr_RuaAlfioBenedini_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_169, 
                style: style_RuaAlfioBenedini_169,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_169.png" /> Rua Alfio Benedini'
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
var format_ResidencialValeVerde_172 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_172 = format_ResidencialValeVerde_172.readFeatures(json_ResidencialValeVerde_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_172.addFeatures(features_ResidencialValeVerde_172);
var lyr_ResidencialValeVerde_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_172, 
                style: style_ResidencialValeVerde_172,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_172_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_172_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_172_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_172_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_172_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_172_5.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/ResidencialValeVerde_173.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_174 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_174 = format_ResidencialYasminTorres_174.readFeatures(json_ResidencialYasminTorres_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_174.addFeatures(features_ResidencialYasminTorres_174);
var lyr_ResidencialYasminTorres_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_174, 
                style: style_ResidencialYasminTorres_174,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_174.png" /> Residencial Yasmin Torres'
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
var format_ResidencialTellini_176 = new ol.format.GeoJSON();
var features_ResidencialTellini_176 = format_ResidencialTellini_176.readFeatures(json_ResidencialTellini_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialTellini_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialTellini_176.addFeatures(features_ResidencialTellini_176);
var lyr_ResidencialTellini_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialTellini_176, 
                style: style_ResidencialTellini_176,
                popuplayertitle: 'Residencial Tellini',
                interactive: true,
    title: 'Residencial Tellini<br />\
    <img src="styles/legend/ResidencialTellini_176_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialTellini_176_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialTellini_176_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialTellini_176_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialTellini_176_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialTellini_176_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialTellini_176_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialTellini_177.png" /> Residencial Tellini'
            });
var format_ResidencialSoCarlosII_178 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_178 = format_ResidencialSoCarlosII_178.readFeatures(json_ResidencialSoCarlosII_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_178.addFeatures(features_ResidencialSoCarlosII_178);
var lyr_ResidencialSoCarlosII_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_178, 
                style: style_ResidencialSoCarlosII_178,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_178_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialSoCarlosII_179.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_180 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_180 = format_ResidencialSoCarlosI_180.readFeatures(json_ResidencialSoCarlosI_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_180.addFeatures(features_ResidencialSoCarlosI_180);
var lyr_ResidencialSoCarlosI_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_180, 
                style: style_ResidencialSoCarlosI_180,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_180_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialSoCarlosI_181.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_182 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_182 = format_ResidencialSantaIns_182.readFeatures(json_ResidencialSantaIns_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_182.addFeatures(features_ResidencialSantaIns_182);
var lyr_ResidencialSantaIns_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_182, 
                style: style_ResidencialSantaIns_182,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_182_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_182_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_182_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_182_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaIns_182_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_182_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialSantaIns_183.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_184 = new ol.format.GeoJSON();
var features_ResidencialSantaF_184 = format_ResidencialSantaF_184.readFeatures(json_ResidencialSantaF_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_184.addFeatures(features_ResidencialSantaF_184);
var lyr_ResidencialSantaF_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_184, 
                style: style_ResidencialSantaF_184,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_184_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialSantaF_184_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_184_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_184_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaF_184_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_184_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialSantaF_185.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_186 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_186 = format_ResidencialQuintadosOitis_186.readFeatures(json_ResidencialQuintadosOitis_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_186.addFeatures(features_ResidencialQuintadosOitis_186);
var lyr_ResidencialQuintadosOitis_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_186, 
                style: style_ResidencialQuintadosOitis_186,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_5.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_186_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialQuintadosOitis_187.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_188 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_188 = format_ResidencialQuintadoSol_188.readFeatures(json_ResidencialQuintadoSol_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_188.addFeatures(features_ResidencialQuintadoSol_188);
var lyr_ResidencialQuintadoSol_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_188, 
                style: style_ResidencialQuintadoSol_188,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_188_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialQuintadoSol_189.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_190 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_190 = format_ResidencialPousoAlegreII_190.readFeatures(json_ResidencialPousoAlegreII_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_190.addFeatures(features_ResidencialPousoAlegreII_190);
var lyr_ResidencialPousoAlegreII_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_190, 
                style: style_ResidencialPousoAlegreII_190,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_190_7.png" /> SERVIDAO<br />' });
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
                title: '<img src="styles/legend/ResidencialPousoAlegreII_191.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_192 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_192 = format_ResidencialPousoAlegre_192.readFeatures(json_ResidencialPousoAlegre_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_192.addFeatures(features_ResidencialPousoAlegre_192);
var lyr_ResidencialPousoAlegre_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_192, 
                style: style_ResidencialPousoAlegre_192,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_192_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialPousoAlegre_193.png" /> Residencial Pouso Alegre'
            });
var format_ResidencialPiamalim_194 = new ol.format.GeoJSON();
var features_ResidencialPiamalim_194 = format_ResidencialPiamalim_194.readFeatures(json_ResidencialPiamalim_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPiamalim_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPiamalim_194.addFeatures(features_ResidencialPiamalim_194);
var lyr_ResidencialPiamalim_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPiamalim_194, 
                style: style_ResidencialPiamalim_194,
                popuplayertitle: 'Residencial Piamalim',
                interactive: true,
    title: 'Residencial Piamalim<br />\
    <img src="styles/legend/ResidencialPiamalim_194_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPiamalim_194_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPiamalim_194_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPiamalim_194_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPiamalim_194_4.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialPiamalim_195.png" /> Residencial Piamalim'
            });
var format_ResidencialParquedosPassaros_196 = new ol.format.GeoJSON();
var features_ResidencialParquedosPassaros_196 = format_ResidencialParquedosPassaros_196.readFeatures(json_ResidencialParquedosPassaros_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialParquedosPassaros_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialParquedosPassaros_196.addFeatures(features_ResidencialParquedosPassaros_196);
var lyr_ResidencialParquedosPassaros_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialParquedosPassaros_196, 
                style: style_ResidencialParquedosPassaros_196,
                popuplayertitle: 'Residencial Parque dos Passaros',
                interactive: true,
    title: 'Residencial Parque dos Passaros<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_8.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialParquedosPassaros_196_9.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialParquedosPassaros_197.png" /> Residencial Parque dos Passaros'
            });
var format_ResicencialNairRetuciII_198 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_198 = format_ResicencialNairRetuciII_198.readFeatures(json_ResicencialNairRetuciII_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_198.addFeatures(features_ResicencialNairRetuciII_198);
var lyr_ResicencialNairRetuciII_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_198, 
                style: style_ResicencialNairRetuciII_198,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_198_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResicencialNairRetuciII_199.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_200 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_200 = format_ResicencialNairRetuci_200.readFeatures(json_ResicencialNairRetuci_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_200.addFeatures(features_ResicencialNairRetuci_200);
var lyr_ResicencialNairRetuci_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_200, 
                style: style_ResicencialNairRetuci_200,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_4.png" /> LOTES<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_6.png" /> RUAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_200_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResicencialNairRetuci_201.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_202 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_202 = format_ResidencialMoradadoBosque_202.readFeatures(json_ResidencialMoradadoBosque_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_202.addFeatures(features_ResidencialMoradadoBosque_202);
var lyr_ResidencialMoradadoBosque_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_202, 
                style: style_ResidencialMoradadoBosque_202,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_202_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialMoradadoBosque_203.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_204 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_204 = format_ResidencialMarthaHelena_204.readFeatures(json_ResidencialMarthaHelena_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_204.addFeatures(features_ResidencialMarthaHelena_204);
var lyr_ResidencialMarthaHelena_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_204, 
                style: style_ResidencialMarthaHelena_204,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_204.png" /> Residencial Martha Helena'
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
var format_ResidencialMarioTasso_206 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_206 = format_ResidencialMarioTasso_206.readFeatures(json_ResidencialMarioTasso_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_206.addFeatures(features_ResidencialMarioTasso_206);
var lyr_ResidencialMarioTasso_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_206, 
                style: style_ResidencialMarioTasso_206,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_206_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialMarioTasso_207.png" /> Residencial Mario Tasso'
            });
var format_ResidencialMarianaAlarcon_208 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_208 = format_ResidencialMarianaAlarcon_208.readFeatures(json_ResidencialMarianaAlarcon_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_208.addFeatures(features_ResidencialMarianaAlarcon_208);
var lyr_ResidencialMarianaAlarcon_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_208, 
                style: style_ResidencialMarianaAlarcon_208,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
    title: 'Residencial Mariana Alarcon <br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_208_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialMarianaAlarcon_209.png" /> Residencial Mariana Alarcon '
            });
var format_ResidencialJardimCanada_210 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_210 = format_ResidencialJardimCanada_210.readFeatures(json_ResidencialJardimCanada_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_210.addFeatures(features_ResidencialJardimCanada_210);
var lyr_ResidencialJardimCanada_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_210, 
                style: style_ResidencialJardimCanada_210,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_210.png" /> Residencial Jardim Canada'
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
var format_ResidencialJabuticabeiras_212 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_212 = format_ResidencialJabuticabeiras_212.readFeatures(json_ResidencialJabuticabeiras_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_212.addFeatures(features_ResidencialJabuticabeiras_212);
var lyr_ResidencialJabuticabeiras_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_212, 
                style: style_ResidencialJabuticabeiras_212,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_212_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialJabuticabeiras_213.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialGramadosII_214 = new ol.format.GeoJSON();
var features_ResidencialGramadosII_214 = format_ResidencialGramadosII_214.readFeatures(json_ResidencialGramadosII_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramadosII_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramadosII_214.addFeatures(features_ResidencialGramadosII_214);
var lyr_ResidencialGramadosII_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramadosII_214, 
                style: style_ResidencialGramadosII_214,
                popuplayertitle: 'Residencial Gramados II',
                interactive: true,
    title: 'Residencial Gramados II<br />\
    <img src="styles/legend/ResidencialGramadosII_214_0.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramadosII_214_1.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramadosII_214_2.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramadosII_214_3.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialGramadosII_215.png" /> Residencial Gramados II'
            });
var format_ResidencialGramados_216 = new ol.format.GeoJSON();
var features_ResidencialGramados_216 = format_ResidencialGramados_216.readFeatures(json_ResidencialGramados_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGramados_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGramados_216.addFeatures(features_ResidencialGramados_216);
var lyr_ResidencialGramados_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGramados_216, 
                style: style_ResidencialGramados_216,
                popuplayertitle: 'Residencial Gramados',
                interactive: true,
    title: 'Residencial Gramados<br />\
    <img src="styles/legend/ResidencialGramados_216_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGramados_216_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGramados_216_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGramados_216_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGramados_216_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGramados_216_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialGramados_217.png" /> Residencial Gramados'
            });
var format_ResidencialGaia_218 = new ol.format.GeoJSON();
var features_ResidencialGaia_218 = format_ResidencialGaia_218.readFeatures(json_ResidencialGaia_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialGaia_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialGaia_218.addFeatures(features_ResidencialGaia_218);
var lyr_ResidencialGaia_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialGaia_218, 
                style: style_ResidencialGaia_218,
                popuplayertitle: 'Residencial Gaia',
                interactive: true,
    title: 'Residencial Gaia<br />\
    <img src="styles/legend/ResidencialGaia_218_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialGaia_218_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialGaia_218_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialGaia_218_3.png" /> DESMEMBRAMENTO DOACAO DESAPROPRIACAO<br />\
    <img src="styles/legend/ResidencialGaia_218_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialGaia_218_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialGaia_218_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialGaia_218_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialGaia_219.png" /> Residencial Gaia'
            });
var format_ResidencialFrutuoso_220 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_220 = format_ResidencialFrutuoso_220.readFeatures(json_ResidencialFrutuoso_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_220.addFeatures(features_ResidencialFrutuoso_220);
var lyr_ResidencialFrutuoso_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_220, 
                style: style_ResidencialFrutuoso_220,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_220_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialFrutuoso_221.png" /> Residencial Frutuoso'
            });
var format_ResidencialFaggioni_222 = new ol.format.GeoJSON();
var features_ResidencialFaggioni_222 = format_ResidencialFaggioni_222.readFeatures(json_ResidencialFaggioni_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFaggioni_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFaggioni_222.addFeatures(features_ResidencialFaggioni_222);
var lyr_ResidencialFaggioni_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFaggioni_222, 
                style: style_ResidencialFaggioni_222,
                popuplayertitle: 'Residencial Faggioni',
                interactive: true,
    title: 'Residencial Faggioni<br />\
    <img src="styles/legend/ResidencialFaggioni_222_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFaggioni_222_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFaggioni_222_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFaggioni_222_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialFaggioni_222_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFaggioni_222_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialFaggioni_223.png" /> Residencial Faggioni'
            });
var format_ResidencialEssenza_224 = new ol.format.GeoJSON();
var features_ResidencialEssenza_224 = format_ResidencialEssenza_224.readFeatures(json_ResidencialEssenza_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_224.addFeatures(features_ResidencialEssenza_224);
var lyr_ResidencialEssenza_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_224, 
                style: style_ResidencialEssenza_224,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_224_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_224_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_224_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_224_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_224_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_224_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_224_6.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/ResidencialEssenza_225.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_226 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_226 = format_ResidencialDomingosJardini_226.readFeatures(json_ResidencialDomingosJardini_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_226.addFeatures(features_ResidencialDomingosJardini_226);
var lyr_ResidencialDomingosJardini_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_226, 
                style: style_ResidencialDomingosJardini_226,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_226_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialDomingosJardini_227.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_228 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_228 = format_ResidencialCintraAlves_228.readFeatures(json_ResidencialCintraAlves_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_228.addFeatures(features_ResidencialCintraAlves_228);
var lyr_ResidencialCintraAlves_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_228, 
                style: style_ResidencialCintraAlves_228,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_228_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialCintraAlves_229.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_230 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_230 = format_ResidencialBoaVista_230.readFeatures(json_ResidencialBoaVista_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_230.addFeatures(features_ResidencialBoaVista_230);
var lyr_ResidencialBoaVista_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_230, 
                style: style_ResidencialBoaVista_230,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_230_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_230_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_230_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_230_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_230_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_230_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_230_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_230_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialBoaVista_231.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_232 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_232 = format_ResidencialAltodaFazenda_232.readFeatures(json_ResidencialAltodaFazenda_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_232.addFeatures(features_ResidencialAltodaFazenda_232);
var lyr_ResidencialAltodaFazenda_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_232, 
                style: style_ResidencialAltodaFazenda_232,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_232_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ResidencialAltodaFazenda_233.png" /> Residencial Alto da Fazenda'
            });
var format_ResidencialAnaHelena_234 = new ol.format.GeoJSON();
var features_ResidencialAnaHelena_234 = format_ResidencialAnaHelena_234.readFeatures(json_ResidencialAnaHelena_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAnaHelena_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAnaHelena_234.addFeatures(features_ResidencialAnaHelena_234);
var lyr_ResidencialAnaHelena_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAnaHelena_234, 
                style: style_ResidencialAnaHelena_234,
                popuplayertitle: 'Residencial Ana Helena',
                interactive: true,
    title: 'Residencial Ana Helena<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_2.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialAnaHelena_234_5.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ResidencialAnaHelena_235.png" /> Residencial Ana Helena'
            });
var format_ReservaAbaete_236 = new ol.format.GeoJSON();
var features_ReservaAbaete_236 = format_ReservaAbaete_236.readFeatures(json_ReservaAbaete_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReservaAbaete_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaAbaete_236.addFeatures(features_ReservaAbaete_236);
var lyr_ReservaAbaete_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaAbaete_236, 
                style: style_ReservaAbaete_236,
                popuplayertitle: 'Reserva Abaete',
                interactive: true,
    title: 'Reserva Abaete<br />\
    <img src="styles/legend/ReservaAbaete_236_0.png" /> APP<br />\
    <img src="styles/legend/ReservaAbaete_236_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ReservaAbaete_236_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ReservaAbaete_236_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ReservaAbaete_236_4.png" /> LOTES<br />\
    <img src="styles/legend/ReservaAbaete_236_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ReservaAbaete_236_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ReservaAbaete_237.png" /> Reserva Abaete'
            });
var format_RecantoMeneghetti_238 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_238 = format_RecantoMeneghetti_238.readFeatures(json_RecantoMeneghetti_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_238.addFeatures(features_RecantoMeneghetti_238);
var lyr_RecantoMeneghetti_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_238, 
                style: style_RecantoMeneghetti_238,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_238_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_238_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_238_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_238_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_238_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_238_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_238_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_238_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_238_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_238_9.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/RecantoMeneghetti_239.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_240 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_240 = format_Quadra18VilaExposio_240.readFeatures(json_Quadra18VilaExposio_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_240.addFeatures(features_Quadra18VilaExposio_240);
var lyr_Quadra18VilaExposio_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_240, 
                style: style_Quadra18VilaExposio_240,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_240_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_240_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_240_2.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/Quadra18VilaExposio_241.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_242 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_242 = format_ProlongamentoSamelPark_242.readFeatures(json_ProlongamentoSamelPark_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_242.addFeatures(features_ProlongamentoSamelPark_242);
var lyr_ProlongamentoSamelPark_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_242, 
                style: style_ProlongamentoSamelPark_242,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_242_7.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/ProlongamentoSamelPark_243.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_244 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_244 = format_ParqueVillaLobos_244.readFeatures(json_ParqueVillaLobos_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_244.addFeatures(features_ParqueVillaLobos_244);
var lyr_ParqueVillaLobos_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_244, 
                style: style_ParqueVillaLobos_244,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_244_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_244_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_244_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_244_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_244_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_244_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ParqueVillaLobos_245.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_246 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_246 = format_ParquePalmeiraImperial_246.readFeatures(json_ParquePalmeiraImperial_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_246.addFeatures(features_ParquePalmeiraImperial_246);
var lyr_ParquePalmeiraImperial_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_246, 
                style: style_ParquePalmeiraImperial_246,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_246_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ParquePalmeiraImperial_247.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_248 = new ol.format.GeoJSON();
var features_ParqueJacarand_248 = format_ParqueJacarand_248.readFeatures(json_ParqueJacarand_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_248.addFeatures(features_ParqueJacarand_248);
var lyr_ParqueJacarand_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_248, 
                style: style_ParqueJacarand_248,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_248_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_248_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_248_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_248_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_248_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_248_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_248_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_248_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ParqueJacarand_249.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_250 = new ol.format.GeoJSON();
var features_ParqueFlora_250 = format_ParqueFlora_250.readFeatures(json_ParqueFlora_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_250.addFeatures(features_ParqueFlora_250);
var lyr_ParqueFlora_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_250, 
                style: style_ParqueFlora_250,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_250_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_250_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_250_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_250_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_250_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_250_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_250_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ParqueFlora_251.png" /> Parque Flora'
            });
var format_ParquedosSabias_252 = new ol.format.GeoJSON();
var features_ParquedosSabias_252 = format_ParquedosSabias_252.readFeatures(json_ParquedosSabias_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_252.addFeatures(features_ParquedosSabias_252);
var lyr_ParquedosSabias_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_252, 
                style: style_ParquedosSabias_252,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_252_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_252_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_252_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_252_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_252_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_252_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_252_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_252_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ParquedosSabias_253.png" /> Parque dos Sabias'
            });
var format_ParquedosCoqueiros_254 = new ol.format.GeoJSON();
var features_ParquedosCoqueiros_254 = format_ParquedosCoqueiros_254.readFeatures(json_ParquedosCoqueiros_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosCoqueiros_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosCoqueiros_254.addFeatures(features_ParquedosCoqueiros_254);
var lyr_ParquedosCoqueiros_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosCoqueiros_254, 
                style: style_ParquedosCoqueiros_254,
                popuplayertitle: 'Parque dos Coqueiros',
                interactive: true,
    title: 'Parque dos Coqueiros<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_3.png" /> LOTES<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_5.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ParquedosCoqueiros_254_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ParquedosCoqueiros_255.png" /> Parque dos Coqueiros'
            });
var format_ParqueAlvorada_256 = new ol.format.GeoJSON();
var features_ParqueAlvorada_256 = format_ParqueAlvorada_256.readFeatures(json_ParqueAlvorada_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAlvorada_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAlvorada_256.addFeatures(features_ParqueAlvorada_256);
var lyr_ParqueAlvorada_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAlvorada_256, 
                style: style_ParqueAlvorada_256,
                popuplayertitle: 'Parque Alvorada',
                interactive: true,
    title: 'Parque Alvorada<br />\
    <img src="styles/legend/ParqueAlvorada_256_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueAlvorada_256_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueAlvorada_256_2.png" /> LOTES<br />\
    <img src="styles/legend/ParqueAlvorada_256_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueAlvorada_256_4.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ParqueAlvorada_257.png" /> Parque Alvorada'
            });
var format_ParagonFaseII_258 = new ol.format.GeoJSON();
var features_ParagonFaseII_258 = format_ParagonFaseII_258.readFeatures(json_ParagonFaseII_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_258.addFeatures(features_ParagonFaseII_258);
var lyr_ParagonFaseII_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_258, 
                style: style_ParagonFaseII_258,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_258_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_258_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_258_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_258_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_258_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_258_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_258_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_258_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_258_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/ParagonFaseII_259.png" /> Paragon Fase II'
            });
var format_Paragon_260 = new ol.format.GeoJSON();
var features_Paragon_260 = format_Paragon_260.readFeatures(json_Paragon_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_260.addFeatures(features_Paragon_260);
var lyr_Paragon_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_260, 
                style: style_Paragon_260,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_260_0.png" /> APP<br />\
    <img src="styles/legend/Paragon_260_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_260_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_260_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Paragon_260_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_260_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Paragon_260_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Paragon_260_7.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_260_8.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_260_9.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/Paragon_261.png" /> Paragon'
            });
var format_PalmeiraReal_262 = new ol.format.GeoJSON();
var features_PalmeiraReal_262 = format_PalmeiraReal_262.readFeatures(json_PalmeiraReal_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_262.addFeatures(features_PalmeiraReal_262);
var lyr_PalmeiraReal_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_262, 
                style: style_PalmeiraReal_262,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_262_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_262_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_262_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_262_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_262_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_262_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/PalmeiraReal_263.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_264 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_264 = format_MoradadoVerdeII_264.readFeatures(json_MoradadoVerdeII_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_264.addFeatures(features_MoradadoVerdeII_264);
var lyr_MoradadoVerdeII_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_264, 
                style: style_MoradadoVerdeII_264,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_264_0.png" /> APP<br />\
    <img src="styles/legend/MoradadoVerdeII_264_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_264_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_264_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MoradadoVerdeII_264_4.png" /> LOTES<br />\
    <img src="styles/legend/MoradadoVerdeII_264_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_264_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_264_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/MoradadoVerdeII_265.png" /> Morada do Verde II'
            });
var format_MoradadaMata_266 = new ol.format.GeoJSON();
var features_MoradadaMata_266 = format_MoradadaMata_266.readFeatures(json_MoradadaMata_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_266.addFeatures(features_MoradadaMata_266);
var lyr_MoradadaMata_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_266, 
                style: style_MoradadaMata_266,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_266_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_266_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_266_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_266_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_266_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_266_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_266_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_266_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/MoradadaMata_267.png" /> Morada da Mata'
            });
var format_Monti_268 = new ol.format.GeoJSON();
var features_Monti_268 = format_Monti_268.readFeatures(json_Monti_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_268.addFeatures(features_Monti_268);
var lyr_Monti_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_268, 
                style: style_Monti_268,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_268_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_268_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_268_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_268_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_268_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_268_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/Monti_269.png" /> Montié'
            });
var format_MontBlancResidence_270 = new ol.format.GeoJSON();
var features_MontBlancResidence_270 = format_MontBlancResidence_270.readFeatures(json_MontBlancResidence_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_270.addFeatures(features_MontBlancResidence_270);
var lyr_MontBlancResidence_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_270, 
                style: style_MontBlancResidence_270,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_270.png" /> Mont Blanc Residence'
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
var format_MasterplanDespaschoal_272 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_272 = format_MasterplanDespaschoal_272.readFeatures(json_MasterplanDespaschoal_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_272.addFeatures(features_MasterplanDespaschoal_272);
var lyr_MasterplanDespaschoal_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_272, 
                style: style_MasterplanDespaschoal_272,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_272_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_272_9.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/MasterplanDespaschoal_273.png" /> Masterplan Despaschoal '
            });
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
var format_MasteplanBildVitta_275 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_275 = format_MasteplanBildVitta_275.readFeatures(json_MasteplanBildVitta_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_275.addFeatures(features_MasteplanBildVitta_275);
var lyr_MasteplanBildVitta_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_275, 
                style: style_MasteplanBildVitta_275,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_275_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_275_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_275_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_275_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_275_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_275_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_275_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_275_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_275_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_275_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_275_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_275_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_275_12.png" /> SERVIDAO<br />' });
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
                title: '<img src="styles/legend/MasteplanBildVitta_276.png" /> Masteplan Bild/Vitta'
            });
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
var format_Loteamentolamo_278 = new ol.format.GeoJSON();
var features_Loteamentolamo_278 = format_Loteamentolamo_278.readFeatures(json_Loteamentolamo_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_278.addFeatures(features_Loteamentolamo_278);
var lyr_Loteamentolamo_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_278, 
                style: style_Loteamentolamo_278,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_278_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_278_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_278_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_278_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_278_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_278_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_278_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_278_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_278_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_278_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_278_10.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/Loteamentolamo_279.png" /> Loteamento Álamo'
            });
var format_JardimStephani_280 = new ol.format.GeoJSON();
var features_JardimStephani_280 = format_JardimStephani_280.readFeatures(json_JardimStephani_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimStephani_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimStephani_280.addFeatures(features_JardimStephani_280);
var lyr_JardimStephani_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimStephani_280, 
                style: style_JardimStephani_280,
                popuplayertitle: 'Jardim Stephani',
                interactive: true,
    title: 'Jardim Stephani<br />\
    <img src="styles/legend/JardimStephani_280_0.png" /> LOTES<br />' });
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
                title: '<img src="styles/legend/JardimStephani_281.png" /> Jardim Stephani'
            });
var format_JardimPherola_282 = new ol.format.GeoJSON();
var features_JardimPherola_282 = format_JardimPherola_282.readFeatures(json_JardimPherola_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_282.addFeatures(features_JardimPherola_282);
var lyr_JardimPherola_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_282, 
                style: style_JardimPherola_282,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_282.png" /> Jardim Pherola'
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
var format_JardimNatal_284 = new ol.format.GeoJSON();
var features_JardimNatal_284 = format_JardimNatal_284.readFeatures(json_JardimNatal_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimNatal_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNatal_284.addFeatures(features_JardimNatal_284);
var lyr_JardimNatal_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimNatal_284, 
                style: style_JardimNatal_284,
                popuplayertitle: 'Jardim Natal',
                interactive: true,
    title: 'Jardim Natal<br />\
    <img src="styles/legend/JardimNatal_284_0.png" /> APP<br />\
    <img src="styles/legend/JardimNatal_284_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimNatal_284_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimNatal_284_3.png" /> LOTES<br />\
    <img src="styles/legend/JardimNatal_284_4.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimNatal_284_5.png" /> RUAS<br />\
    <img src="styles/legend/JardimNatal_284_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/JardimNatal_285.png" /> Jardim Natal'
            });
var format_JardimMariaLuiza_286 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_286 = format_JardimMariaLuiza_286.readFeatures(json_JardimMariaLuiza_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_286.addFeatures(features_JardimMariaLuiza_286);
var lyr_JardimMariaLuiza_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_286, 
                style: style_JardimMariaLuiza_286,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_286_0.png" /> APP<br />\
    <img src="styles/legend/JardimMariaLuiza_286_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_286_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimMariaLuiza_286_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_286_4.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaLuiza_286_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_286_6.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaLuiza_286_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/JardimMariaLuiza_287.png" /> Jardim Maria Luiza'
            });
var format_JardimMariaAugusta_288 = new ol.format.GeoJSON();
var features_JardimMariaAugusta_288 = format_JardimMariaAugusta_288.readFeatures(json_JardimMariaAugusta_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaAugusta_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaAugusta_288.addFeatures(features_JardimMariaAugusta_288);
var lyr_JardimMariaAugusta_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaAugusta_288, 
                style: style_JardimMariaAugusta_288,
                popuplayertitle: 'Jardim Maria Augusta',
                interactive: true,
    title: 'Jardim Maria Augusta<br />\
    <img src="styles/legend/JardimMariaAugusta_288_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaAugusta_288_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimMariaAugusta_288_2.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaAugusta_288_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaAugusta_288_4.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaAugusta_288_5.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/JardimMariaAugusta_289.png" /> Jardim Maria Augusta'
            });
var format_JardimHorizonte_290 = new ol.format.GeoJSON();
var features_JardimHorizonte_290 = format_JardimHorizonte_290.readFeatures(json_JardimHorizonte_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_290.addFeatures(features_JardimHorizonte_290);
var lyr_JardimHorizonte_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_290, 
                style: style_JardimHorizonte_290,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_290_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_290_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_290_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_290_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_290_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_290_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_290_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_290_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_290_8.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/JardimHorizonte_291.png" /> Jardim Horizonte'
            });
var format_JardimFlora_292 = new ol.format.GeoJSON();
var features_JardimFlora_292 = format_JardimFlora_292.readFeatures(json_JardimFlora_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_292.addFeatures(features_JardimFlora_292);
var lyr_JardimFlora_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_292, 
                style: style_JardimFlora_292,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_292_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_292_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_292_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_292_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_292_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_292_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_292_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_292_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_292_8.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/JardimFlora_293.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_294 = new ol.format.GeoJSON();
var features_IrineuZanetiII_294 = format_IrineuZanetiII_294.readFeatures(json_IrineuZanetiII_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_294.addFeatures(features_IrineuZanetiII_294);
var lyr_IrineuZanetiII_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_294, 
                style: style_IrineuZanetiII_294,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_294_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_294_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_294_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_294_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_294_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_294_5.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/IrineuZanetiII_295.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_296 = new ol.format.GeoJSON();
var features_Infratcnica_296 = format_Infratcnica_296.readFeatures(json_Infratcnica_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_296.addFeatures(features_Infratcnica_296);
var lyr_Infratcnica_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_296, 
                style: style_Infratcnica_296,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_296_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_296_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_296_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_296_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_296_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_296_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/Infratcnica_297.png" /> Infratécnica'
            });
var format_HorizResidence_298 = new ol.format.GeoJSON();
var features_HorizResidence_298 = format_HorizResidence_298.readFeatures(json_HorizResidence_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_298.addFeatures(features_HorizResidence_298);
var lyr_HorizResidence_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_298, 
                style: style_HorizResidence_298,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_298.png" /> Horiz Residence'
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
var format_GlebaNossaSenhoraAuxiliadora_300 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_300 = format_GlebaNossaSenhoraAuxiliadora_300.readFeatures(json_GlebaNossaSenhoraAuxiliadora_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_300.addFeatures(features_GlebaNossaSenhoraAuxiliadora_300);
var lyr_GlebaNossaSenhoraAuxiliadora_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_300, 
                style: style_GlebaNossaSenhoraAuxiliadora_300,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_300.png" /> Gleba Nossa Senhora Auxiliadora'
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
var format_Ferracini_302 = new ol.format.GeoJSON();
var features_Ferracini_302 = format_Ferracini_302.readFeatures(json_Ferracini_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_302.addFeatures(features_Ferracini_302);
var lyr_Ferracini_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_302, 
                style: style_Ferracini_302,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_302_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_302_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_302_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_302_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_302_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_302_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_302_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_302_7.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/Ferracini_303.png" /> Ferracini'
            });
var format_FrancaB6_304 = new ol.format.GeoJSON();
var features_FrancaB6_304 = format_FrancaB6_304.readFeatures(json_FrancaB6_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_304.addFeatures(features_FrancaB6_304);
var lyr_FrancaB6_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_304, 
                style: style_FrancaB6_304,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_304_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_304_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_304_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_304_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_304_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_304_5.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/FrancaB6_305.png" /> Franca B6'
            });
var format_FazendaProgresso_306 = new ol.format.GeoJSON();
var features_FazendaProgresso_306 = format_FazendaProgresso_306.readFeatures(json_FazendaProgresso_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_306.addFeatures(features_FazendaProgresso_306);
var lyr_FazendaProgresso_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_306, 
                style: style_FazendaProgresso_306,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_306.png" /> Fazenda Progresso'
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
var format_FazendaeGranjaSantaRita2_308 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_308 = format_FazendaeGranjaSantaRita2_308.readFeatures(json_FazendaeGranjaSantaRita2_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_308.addFeatures(features_FazendaeGranjaSantaRita2_308);
var lyr_FazendaeGranjaSantaRita2_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_308, 
                style: style_FazendaeGranjaSantaRita2_308,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_308.png" /> Fazenda e Granja Santa Rita 2'
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
var format_FazendaeGranjaSantaRita_310 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_310 = format_FazendaeGranjaSantaRita_310.readFeatures(json_FazendaeGranjaSantaRita_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_310.addFeatures(features_FazendaeGranjaSantaRita_310);
var lyr_FazendaeGranjaSantaRita_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_310, 
                style: style_FazendaeGranjaSantaRita_310,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_310.png" /> Fazenda e Granja Santa Rita'
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
var format_Essence_312 = new ol.format.GeoJSON();
var features_Essence_312 = format_Essence_312.readFeatures(json_Essence_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_312.addFeatures(features_Essence_312);
var lyr_Essence_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_312, 
                style: style_Essence_312,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_312.png" /> Essence'
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
var format_Elias_314 = new ol.format.GeoJSON();
var features_Elias_314 = format_Elias_314.readFeatures(json_Elias_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_314.addFeatures(features_Elias_314);
var lyr_Elias_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_314, 
                style: style_Elias_314,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_314_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_314_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_314_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_314_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/Elias_314_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Elias_314_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Elias_314_6.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_314_7.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/Elias_315.png" /> Elias'
            });
var format_EdifcioSolNascente_316 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_316 = format_EdifcioSolNascente_316.readFeatures(json_EdifcioSolNascente_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_316.addFeatures(features_EdifcioSolNascente_316);
var lyr_EdifcioSolNascente_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_316, 
                style: style_EdifcioSolNascente_316,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_316.png" /> Edifício Sol Nascente'
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
var format_EdifcioRuadoSol_318 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_318 = format_EdifcioRuadoSol_318.readFeatures(json_EdifcioRuadoSol_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_318.addFeatures(features_EdifcioRuadoSol_318);
var lyr_EdifcioRuadoSol_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_318, 
                style: style_EdifcioRuadoSol_318,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_318.png" /> Edifício Rua do Sol'
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
var format_EdifcioResidencialHope_320 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_320 = format_EdifcioResidencialHope_320.readFeatures(json_EdifcioResidencialHope_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_320.addFeatures(features_EdifcioResidencialHope_320);
var lyr_EdifcioResidencialHope_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_320, 
                style: style_EdifcioResidencialHope_320,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_320.png" /> Edifício Residencial Hope'
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
var format_DiocesedeFranca_322 = new ol.format.GeoJSON();
var features_DiocesedeFranca_322 = format_DiocesedeFranca_322.readFeatures(json_DiocesedeFranca_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_322.addFeatures(features_DiocesedeFranca_322);
var lyr_DiocesedeFranca_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_322, 
                style: style_DiocesedeFranca_322,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_322_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_322_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_322_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_322_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_322_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_322_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_322_6.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/DiocesedeFranca_323.png" /> Diocese de Franca'
            });
var format_DaVinci_324 = new ol.format.GeoJSON();
var features_DaVinci_324 = format_DaVinci_324.readFeatures(json_DaVinci_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_324.addFeatures(features_DaVinci_324);
var lyr_DaVinci_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_324, 
                style: style_DaVinci_324,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_324.png" /> Da Vinci'
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
var format_CondomnioIICityPetrpolis_326 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_326 = format_CondomnioIICityPetrpolis_326.readFeatures(json_CondomnioIICityPetrpolis_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_326.addFeatures(features_CondomnioIICityPetrpolis_326);
var lyr_CondomnioIICityPetrpolis_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_326, 
                style: style_CondomnioIICityPetrpolis_326,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_326_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_327.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_328 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_328 = format_CondomnioICityPetrpolis_328.readFeatures(json_CondomnioICityPetrpolis_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_328.addFeatures(features_CondomnioICityPetrpolis_328);
var lyr_CondomnioICityPetrpolis_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_328, 
                style: style_CondomnioICityPetrpolis_328,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_328_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/CondomnioICityPetrpolis_329.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_330 = new ol.format.GeoJSON();
var features_Colorado_330 = format_Colorado_330.readFeatures(json_Colorado_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_330.addFeatures(features_Colorado_330);
var lyr_Colorado_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_330, 
                style: style_Colorado_330,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_330_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_330_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_330_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_330_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_330_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_330_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_330_6.png" /> PASSEIO<br />' });
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
                title: '<img src="styles/legend/Colorado_331.png" /> Colorado'
            });
var format_CidadeJardim_332 = new ol.format.GeoJSON();
var features_CidadeJardim_332 = format_CidadeJardim_332.readFeatures(json_CidadeJardim_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_332.addFeatures(features_CidadeJardim_332);
var lyr_CidadeJardim_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_332, 
                style: style_CidadeJardim_332,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_332_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_332_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_332_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_332_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_332_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_332_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_332_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_332_7.png" /> SERVIDAO<br />' });
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
                title: '<img src="styles/legend/CidadeJardim_333.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_334 = new ol.format.GeoJSON();
var features_ChacaraOlaria_334 = format_ChacaraOlaria_334.readFeatures(json_ChacaraOlaria_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_334.addFeatures(features_ChacaraOlaria_334);
var lyr_ChacaraOlaria_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_334, 
                style: style_ChacaraOlaria_334,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_334.png" /> Chacara Olaria'
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
var format_ChacaraBelaVista_336 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_336 = format_ChacaraBelaVista_336.readFeatures(json_ChacaraBelaVista_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_336.addFeatures(features_ChacaraBelaVista_336);
var lyr_ChacaraBelaVista_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_336, 
                style: style_ChacaraBelaVista_336,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_336_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_336_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_336_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_336_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_336_4.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/ChacaraBelaVista_337.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_338 = new ol.format.GeoJSON();
var features_BordadaMata_338 = format_BordadaMata_338.readFeatures(json_BordadaMata_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_338.addFeatures(features_BordadaMata_338);
var lyr_BordadaMata_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_338, 
                style: style_BordadaMata_338,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_338_0.png" /> APP<br />\
    <img src="styles/legend/BordadaMata_338_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_338_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_338_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_338_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BordadaMata_338_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BordadaMata_338_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_338_7.png" /> RUAS<br />\
    <img src="styles/legend/BordadaMata_338_8.png" /> SERVIDAO<br />' });
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
                title: '<img src="styles/legend/BordadaMata_339.png" /> Borda da Mata'
            });
var format_Arteris_340 = new ol.format.GeoJSON();
var features_Arteris_340 = format_Arteris_340.readFeatures(json_Arteris_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_340.addFeatures(features_Arteris_340);
var lyr_Arteris_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_340, 
                style: style_Arteris_340,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_340_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_340_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_340_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_340_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_340_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_340_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_340_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_340_7.png" /> AREA DESAPROPRIADA<br />' });
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
                title: '<img src="styles/legend/Arteris_341.png" /> Arteris'
            });
var format_ArterisFaixadeDomnioFrancaSP_3342_342 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3342_342 = format_ArterisFaixadeDomnioFrancaSP_3342_342.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3342_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3342_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3342_342.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3342_342);
var lyr_ArterisFaixadeDomnioFrancaSP_3342_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3342_342, 
                style: style_ArterisFaixadeDomnioFrancaSP_3342_342,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_334 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3342_342.png" /> Arteris Faixa de Domínio Franca — SP_334 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSP_3452_343 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3452_343 = format_ArterisFaixadeDomnioFrancaSP_3452_343.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3452_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3452_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3452_343.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3452_343);
var lyr_ArterisFaixadeDomnioFrancaSP_3452_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3452_343, 
                style: style_ArterisFaixadeDomnioFrancaSP_3452_343,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_345 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3452_343.png" /> Arteris Faixa de Domínio Franca — SP_345 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSPA_397334_344 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSPA_397334_344 = format_ArterisFaixadeDomnioFrancaSPA_397334_344.readFeatures(json_ArterisFaixadeDomnioFrancaSPA_397334_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_344.addFeatures(features_ArterisFaixadeDomnioFrancaSPA_397334_344);
var lyr_ArterisFaixadeDomnioFrancaSPA_397334_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_344, 
                style: style_ArterisFaixadeDomnioFrancaSPA_397334_344,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSPA_397334_344.png" /> Arteris Faixa de Domínio Franca — SPA_397/334'
            });
var format_Arizona_345 = new ol.format.GeoJSON();
var features_Arizona_345 = format_Arizona_345.readFeatures(json_Arizona_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_345.addFeatures(features_Arizona_345);
var lyr_Arizona_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_345, 
                style: style_Arizona_345,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_345_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_345_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_345_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_345_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_345_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_345_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_345_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/Arizona_346.png" /> Arizona'
            });
var format_AbuDhabiParadiseResortResidence_347 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_347 = format_AbuDhabiParadiseResortResidence_347.readFeatures(json_AbuDhabiParadiseResortResidence_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_347.addFeatures(features_AbuDhabiParadiseResortResidence_347);
var lyr_AbuDhabiParadiseResortResidence_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_347, 
                style: style_AbuDhabiParadiseResortResidence_347,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_3.png" /> LOTES<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_4.png" /> PASSEIO<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_5.png" /> RUAS<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_347_6.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_348.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado43unid_349 = new ol.format.GeoJSON();
var features_EtapaAprovado43unid_349 = format_EtapaAprovado43unid_349.readFeatures(json_EtapaAprovado43unid_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado43unid_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado43unid_349.addFeatures(features_EtapaAprovado43unid_349);
var lyr_EtapaAprovado43unid_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado43unid_349, 
                style: style_EtapaAprovado43unid_349,
                popuplayertitle: 'Etapa: Aprovado (43 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado43unid_349.png" /> Etapa: Aprovado (43 unid.)'
            });
var format_EtapaDiretriz22unid_350 = new ol.format.GeoJSON();
var features_EtapaDiretriz22unid_350 = format_EtapaDiretriz22unid_350.readFeatures(json_EtapaDiretriz22unid_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz22unid_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz22unid_350.addFeatures(features_EtapaDiretriz22unid_350);
var lyr_EtapaDiretriz22unid_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz22unid_350, 
                style: style_EtapaDiretriz22unid_350,
                popuplayertitle: 'Etapa: Diretriz (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz22unid_350.png" /> Etapa: Diretriz (22 unid.)'
            });
var format_EtapaDefinitiva10unid_351 = new ol.format.GeoJSON();
var features_EtapaDefinitiva10unid_351 = format_EtapaDefinitiva10unid_351.readFeatures(json_EtapaDefinitiva10unid_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva10unid_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva10unid_351.addFeatures(features_EtapaDefinitiva10unid_351);
var lyr_EtapaDefinitiva10unid_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva10unid_351, 
                style: style_EtapaDefinitiva10unid_351,
                popuplayertitle: 'Etapa: Definitiva 10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva10unid_351.png" /> Etapa: Definitiva 10 unid.)'
            });
var format_EtapaPrvia24unid_352 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_352 = format_EtapaPrvia24unid_352.readFeatures(json_EtapaPrvia24unid_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_352.addFeatures(features_EtapaPrvia24unid_352);
var lyr_EtapaPrvia24unid_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_352, 
                style: style_EtapaPrvia24unid_352,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_352.png" /> Etapa: Prévia (24 unid.)'
            });
var format_LoteamentosClandestinos69unid_353 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_353 = format_LoteamentosClandestinos69unid_353.readFeatures(json_LoteamentosClandestinos69unid_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos69unid_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_353.addFeatures(features_LoteamentosClandestinos69unid_353);
var lyr_LoteamentosClandestinos69unid_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_353, 
                style: style_LoteamentosClandestinos69unid_353,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_353.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_LoteamentosClandestinos69unid_354 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_354 = format_LoteamentosClandestinos69unid_354.readFeatures(json_LoteamentosClandestinos69unid_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos69unid_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_354.addFeatures(features_LoteamentosClandestinos69unid_354);
var lyr_LoteamentosClandestinos69unid_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_354, 
                style: style_LoteamentosClandestinos69unid_354,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_354.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_FazendaPalestina105unid_355 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_355 = format_FazendaPalestina105unid_355.readFeatures(json_FazendaPalestina105unid_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaPalestina105unid_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_355.addFeatures(features_FazendaPalestina105unid_355);
var lyr_FazendaPalestina105unid_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_355, 
                style: style_FazendaPalestina105unid_355,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_355.png" /> Fazenda Palestina (105 unid.)'
            });
var format_FazendaPalestina105unid_356 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_356 = format_FazendaPalestina105unid_356.readFeatures(json_FazendaPalestina105unid_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaPalestina105unid_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_356.addFeatures(features_FazendaPalestina105unid_356);
var lyr_FazendaPalestina105unid_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_356, 
                style: style_FazendaPalestina105unid_356,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_356.png" /> Fazenda Palestina (105 unid.)'
            });
var format_APP1745unid_357 = new ol.format.GeoJSON();
var features_APP1745unid_357 = format_APP1745unid_357.readFeatures(json_APP1745unid_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_357.addFeatures(features_APP1745unid_357);
var lyr_APP1745unid_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_357, 
                style: style_APP1745unid_357,
                popuplayertitle: 'APP (1.745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_357.png" /> APP (1.745 unid.)'
            });
var format_RiosDuplos84unid_358 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_358 = format_RiosDuplos84unid_358.readFeatures(json_RiosDuplos84unid_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_358.addFeatures(features_RiosDuplos84unid_358);
var lyr_RiosDuplos84unid_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_358, 
                style: style_RiosDuplos84unid_358,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_358.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_359 = new ol.format.GeoJSON();
var features_MassasDgua270unid_359 = format_MassasDgua270unid_359.readFeatures(json_MassasDgua270unid_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_359.addFeatures(features_MassasDgua270unid_359);
var lyr_MassasDgua270unid_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_359, 
                style: style_MassasDgua270unid_359,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_359.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_360 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_360 = format_RiosSimples1842unid_360.readFeatures(json_RiosSimples1842unid_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_360.addFeatures(features_RiosSimples1842unid_360);
var lyr_RiosSimples1842unid_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_360, 
                style: style_RiosSimples1842unid_360,
                popuplayertitle: 'Rios Simples (1.842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_360.png" /> Rios Simples (1.842 unid.)'
            });
var format_Nascentes821unid_361 = new ol.format.GeoJSON();
var features_Nascentes821unid_361 = format_Nascentes821unid_361.readFeatures(json_Nascentes821unid_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_361.addFeatures(features_Nascentes821unid_361);
var lyr_Nascentes821unid_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_361, 
                style: style_Nascentes821unid_361,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_361.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazMunicipal_362 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipal_362 = format_AntigoAterrodaFazMunicipal_362.readFeatures(json_AntigoAterrodaFazMunicipal_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipal_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipal_362.addFeatures(features_AntigoAterrodaFazMunicipal_362);
var lyr_AntigoAterrodaFazMunicipal_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipal_362, 
                style: style_AntigoAterrodaFazMunicipal_362,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipal_362.png" /> Antigo Aterro da Faz. Municipal'
            });
var format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363 = format_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.readFeatures(json_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.addFeatures(features_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363);
var lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363, 
                style: style_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.png" /> Antigo Aterro da Faz. Municipal - PMs-Gás/Avatz (15 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364 = format_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364);
var lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364, 
                style: style_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Avatz (18 unid.)'
            });
var format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365 = format_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.readFeatures(json_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.addFeatures(features_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365);
var lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365, 
                style: style_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365,
                popuplayertitle: 'Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.png" /> Antigo Aterro da Faz. Municipal - PMs-Água/Geo-Analítica (15 unid.)'
            });
var format_reaBdaFazMunicipal_366 = new ol.format.GeoJSON();
var features_reaBdaFazMunicipal_366 = format_reaBdaFazMunicipal_366.readFeatures(json_reaBdaFazMunicipal_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicipal_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicipal_366.addFeatures(features_reaBdaFazMunicipal_366);
var lyr_reaBdaFazMunicipal_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicipal_366, 
                style: style_reaBdaFazMunicipal_366,
                popuplayertitle: 'Área "B" da Faz. Municipal',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicipal_366.png" /> Área "B" da Faz. Municipal'
            });
var format_reaBdaFazMunicPoosMonitEngesolve7unid_367 = new ol.format.GeoJSON();
var features_reaBdaFazMunicPoosMonitEngesolve7unid_367 = format_reaBdaFazMunicPoosMonitEngesolve7unid_367.readFeatures(json_reaBdaFazMunicPoosMonitEngesolve7unid_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_367.addFeatures(features_reaBdaFazMunicPoosMonitEngesolve7unid_367);
var lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazMunicPoosMonitEngesolve7unid_367, 
                style: style_reaBdaFazMunicPoosMonitEngesolve7unid_367,
                popuplayertitle: 'Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazMunicPoosMonitEngesolve7unid_367.png" /> Área "B" da Faz. Munic. - Poços Monit. Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_368 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_368 = format_AntigoAterrodasMaritacas_368.readFeatures(json_AntigoAterrodasMaritacas_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_368.addFeatures(features_AntigoAterrodasMaritacas_368);
var lyr_AntigoAterrodasMaritacas_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_368, 
                style: style_AntigoAterrodasMaritacas_368,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_368.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterroMaritacas1Etapa28unid_369 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas1Etapa28unid_369 = format_AntigoAterroMaritacas1Etapa28unid_369.readFeatures(json_AntigoAterroMaritacas1Etapa28unid_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas1Etapa28unid_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas1Etapa28unid_369.addFeatures(features_AntigoAterroMaritacas1Etapa28unid_369);
var lyr_AntigoAterroMaritacas1Etapa28unid_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas1Etapa28unid_369, 
                style: style_AntigoAterroMaritacas1Etapa28unid_369,
                popuplayertitle: 'Antigo AterroMaritacas - 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas1Etapa28unid_369.png" /> Antigo AterroMaritacas - 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_370 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_370 = format_ParqueZumbidosPalmares_370.readFeatures(json_ParqueZumbidosPalmares_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_370.addFeatures(features_ParqueZumbidosPalmares_370);
var lyr_ParqueZumbidosPalmares_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_370, 
                style: style_ParqueZumbidosPalmares_370,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_370.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterroMaritacas3Etapa5unid_371 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas3Etapa5unid_371 = format_AntigoAterroMaritacas3Etapa5unid_371.readFeatures(json_AntigoAterroMaritacas3Etapa5unid_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas3Etapa5unid_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas3Etapa5unid_371.addFeatures(features_AntigoAterroMaritacas3Etapa5unid_371);
var lyr_AntigoAterroMaritacas3Etapa5unid_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas3Etapa5unid_371, 
                style: style_AntigoAterroMaritacas3Etapa5unid_371,
                popuplayertitle: 'Antigo Aterro Maritacas - 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas3Etapa5unid_371.png" /> Antigo Aterro Maritacas - 3ª Etapa (5 unid.)'
            });
var format_AntigoAterroMaritacas2Etapa41unid_372 = new ol.format.GeoJSON();
var features_AntigoAterroMaritacas2Etapa41unid_372 = format_AntigoAterroMaritacas2Etapa41unid_372.readFeatures(json_AntigoAterroMaritacas2Etapa41unid_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterroMaritacas2Etapa41unid_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterroMaritacas2Etapa41unid_372.addFeatures(features_AntigoAterroMaritacas2Etapa41unid_372);
var lyr_AntigoAterroMaritacas2Etapa41unid_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterroMaritacas2Etapa41unid_372, 
                style: style_AntigoAterroMaritacas2Etapa41unid_372,
                popuplayertitle: 'Antigo Aterro Maritacas - 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterroMaritacas2Etapa41unid_372.png" /> Antigo Aterro Maritacas - 2ª Etapa (41 unid.)'
            });
var format_reaN2_373 = new ol.format.GeoJSON();
var features_reaN2_373 = format_reaN2_373.readFeatures(json_reaN2_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN2_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN2_373.addFeatures(features_reaN2_373);
var lyr_reaN2_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN2_373, 
                style: style_reaN2_373,
                popuplayertitle: 'Área N2',
                interactive: true,
                title: '<img src="styles/legend/reaN2_373.png" /> Área N2'
            });
var format_reaN1_374 = new ol.format.GeoJSON();
var features_reaN1_374 = format_reaN1_374.readFeatures(json_reaN1_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN1_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN1_374.addFeatures(features_reaN1_374);
var lyr_reaN1_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN1_374, 
                style: style_reaN1_374,
                popuplayertitle: 'Área N1',
                interactive: true,
                title: '<img src="styles/legend/reaN1_374.png" /> Área N1'
            });
var format_reaN_375 = new ol.format.GeoJSON();
var features_reaN_375 = format_reaN_375.readFeatures(json_reaN_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_375.addFeatures(features_reaN_375);
var lyr_reaN_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_375, 
                style: style_reaN_375,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_375.png" /> Área N'
            });
var format_ConjuntoHabitacional_376 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_376 = format_ConjuntoHabitacional_376.readFeatures(json_ConjuntoHabitacional_376, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_376 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_376.addFeatures(features_ConjuntoHabitacional_376);
var lyr_ConjuntoHabitacional_376 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_376, 
                style: style_ConjuntoHabitacional_376,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_376.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_377 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_377 = format_AvdeacessoaoHortoeColgioAgrcola_377.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_377, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_377 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_377.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_377);
var lyr_AvdeacessoaoHortoeColgioAgrcola_377 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_377, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_377,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_377.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_378 = new ol.format.GeoJSON();
var features_reaK_378 = format_reaK_378.readFeatures(json_reaK_378, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_378 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_378.addFeatures(features_reaK_378);
var lyr_reaK_378 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_378, 
                style: style_reaK_378,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_378.png" /> Área K'
            });
var format_reaJ_379 = new ol.format.GeoJSON();
var features_reaJ_379 = format_reaJ_379.readFeatures(json_reaJ_379, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_379 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_379.addFeatures(features_reaJ_379);
var lyr_reaJ_379 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_379, 
                style: style_reaJ_379,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_379.png" /> Área J'
            });
var format_reaI_380 = new ol.format.GeoJSON();
var features_reaI_380 = format_reaI_380.readFeatures(json_reaI_380, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_380 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_380.addFeatures(features_reaI_380);
var lyr_reaI_380 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_380, 
                style: style_reaI_380,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_380.png" /> Área I'
            });
var format_reaH_381 = new ol.format.GeoJSON();
var features_reaH_381 = format_reaH_381.readFeatures(json_reaH_381, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_381 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_381.addFeatures(features_reaH_381);
var lyr_reaH_381 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_381, 
                style: style_reaH_381,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_381.png" /> Área H'
            });
var format_reaG_382 = new ol.format.GeoJSON();
var features_reaG_382 = format_reaG_382.readFeatures(json_reaG_382, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_382 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_382.addFeatures(features_reaG_382);
var lyr_reaG_382 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_382, 
                style: style_reaG_382,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_382.png" /> Área G'
            });
var format_reaF_383 = new ol.format.GeoJSON();
var features_reaF_383 = format_reaF_383.readFeatures(json_reaF_383, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_383 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_383.addFeatures(features_reaF_383);
var lyr_reaF_383 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_383, 
                style: style_reaF_383,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_383.png" /> Área F'
            });
var format_reaE_384 = new ol.format.GeoJSON();
var features_reaE_384 = format_reaE_384.readFeatures(json_reaE_384, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_384 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_384.addFeatures(features_reaE_384);
var lyr_reaE_384 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_384, 
                style: style_reaE_384,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_384.png" /> Área E'
            });
var format_reaD_385 = new ol.format.GeoJSON();
var features_reaD_385 = format_reaD_385.readFeatures(json_reaD_385, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_385 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_385.addFeatures(features_reaD_385);
var lyr_reaD_385 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_385, 
                style: style_reaD_385,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_385.png" /> Área D'
            });
var format_reaC_386 = new ol.format.GeoJSON();
var features_reaC_386 = format_reaC_386.readFeatures(json_reaC_386, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_386 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_386.addFeatures(features_reaC_386);
var lyr_reaC_386 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_386, 
                style: style_reaC_386,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_386.png" /> Área C'
            });
var format_reaB_387 = new ol.format.GeoJSON();
var features_reaB_387 = format_reaB_387.readFeatures(json_reaB_387, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_387 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_387.addFeatures(features_reaB_387);
var lyr_reaB_387 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_387, 
                style: style_reaB_387,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_387.png" /> Área B'
            });
var format_reaA_388 = new ol.format.GeoJSON();
var features_reaA_388 = format_reaA_388.readFeatures(json_reaA_388, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_388 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_388.addFeatures(features_reaA_388);
var lyr_reaA_388 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_388, 
                style: style_reaA_388,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_388.png" /> Área A'
            });
var format_reaAverbada355235PartedareaG_389 = new ol.format.GeoJSON();
var features_reaAverbada355235PartedareaG_389 = format_reaAverbada355235PartedareaG_389.readFeatures(json_reaAverbada355235PartedareaG_389, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235PartedareaG_389 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235PartedareaG_389.addFeatures(features_reaAverbada355235PartedareaG_389);
var lyr_reaAverbada355235PartedareaG_389 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235PartedareaG_389, 
                style: style_reaAverbada355235PartedareaG_389,
                popuplayertitle: 'Área Averbada 3/55235 (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235PartedareaG_389.png" /> Área Averbada 3/55235 (Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_390 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_390 = format_reaaseraverbadaPartedareaG_390.readFeatures(json_reaaseraverbadaPartedareaG_390, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_390 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_390.addFeatures(features_reaaseraverbadaPartedareaG_390);
var lyr_reaaseraverbadaPartedareaG_390 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_390, 
                style: style_reaaseraverbadaPartedareaG_390,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_390.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_Proposto2unid_391 = new ol.format.GeoJSON();
var features_Proposto2unid_391 = format_Proposto2unid_391.readFeatures(json_Proposto2unid_391, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Proposto2unid_391 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposto2unid_391.addFeatures(features_Proposto2unid_391);
var lyr_Proposto2unid_391 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposto2unid_391, 
                style: style_Proposto2unid_391,
                popuplayertitle: 'Proposto (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Proposto2unid_391.png" /> Proposto (2 unid.)'
            });
var format_Emconstruo2unid_392 = new ol.format.GeoJSON();
var features_Emconstruo2unid_392 = format_Emconstruo2unid_392.readFeatures(json_Emconstruo2unid_392, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Emconstruo2unid_392 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emconstruo2unid_392.addFeatures(features_Emconstruo2unid_392);
var lyr_Emconstruo2unid_392 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emconstruo2unid_392, 
                style: style_Emconstruo2unid_392,
                popuplayertitle: 'Em construção (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Emconstruo2unid_392.png" /> Em construção (2 unid.)'
            });
var format_Emfuncionamento4unid_393 = new ol.format.GeoJSON();
var features_Emfuncionamento4unid_393 = format_Emfuncionamento4unid_393.readFeatures(json_Emfuncionamento4unid_393, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Emfuncionamento4unid_393 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emfuncionamento4unid_393.addFeatures(features_Emfuncionamento4unid_393);
var lyr_Emfuncionamento4unid_393 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emfuncionamento4unid_393, 
                style: style_Emfuncionamento4unid_393,
                popuplayertitle: 'Em funcionamento (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Emfuncionamento4unid_393.png" /> Em funcionamento (4 unid.)'
            });
var format_DrenagensExistentes_394 = new ol.format.GeoJSON();
var features_DrenagensExistentes_394 = format_DrenagensExistentes_394.readFeatures(json_DrenagensExistentes_394, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_394 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_394.addFeatures(features_DrenagensExistentes_394);
var lyr_DrenagensExistentes_394 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_394, 
                style: style_DrenagensExistentes_394,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_394_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_394_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_394_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_394_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_394_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_394_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_394_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_394_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_394_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_394_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_394_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_394_11.png" /> PV<br />' });
var format_Drenagens_395 = new ol.format.GeoJSON();
var features_Drenagens_395 = format_Drenagens_395.readFeatures(json_Drenagens_395, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Drenagens_395 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_395.addFeatures(features_Drenagens_395);
var lyr_Drenagens_395 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_395, 
                style: style_Drenagens_395,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_395_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_395_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/Drenagens_395_2.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_395_3.png" /> CANALETA<br />\
    <img src="styles/legend/Drenagens_395_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/Drenagens_395_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/Drenagens_395_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/Drenagens_395_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/Drenagens_395_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/Drenagens_395_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/Drenagens_395_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/Drenagens_395_11.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396 = format_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.readFeatures(json_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.addFeatures(features_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396);
var lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396, 
                style: style_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396,
                popuplayertitle: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_SANTA_TEREZINHA<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396_4.png" /> PV<br />' });
var format_DRENAGEM_PROL_VILA_ISABEL_397 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_VILA_ISABEL_397 = format_DRENAGEM_PROL_VILA_ISABEL_397.readFeatures(json_DRENAGEM_PROL_VILA_ISABEL_397, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_VILA_ISABEL_397 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_VILA_ISABEL_397.addFeatures(features_DRENAGEM_PROL_VILA_ISABEL_397);
var lyr_DRENAGEM_PROL_VILA_ISABEL_397 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_VILA_ISABEL_397, 
                style: style_DRENAGEM_PROL_VILA_ISABEL_397,
                popuplayertitle: 'DRENAGEM_PROL_VILA_ISABEL',
                interactive: true,
    title: 'DRENAGEM_PROL_VILA_ISABEL<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_397_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_397_1.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_397_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_VILA_ISABEL_397_3.png" /> DIAMETRO 600<br />' });
var format_DRENAGEM_PROL_JARDIM_MARTINS_398 = new ol.format.GeoJSON();
var features_DRENAGEM_PROL_JARDIM_MARTINS_398 = format_DRENAGEM_PROL_JARDIM_MARTINS_398.readFeatures(json_DRENAGEM_PROL_JARDIM_MARTINS_398, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_398 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_398.addFeatures(features_DRENAGEM_PROL_JARDIM_MARTINS_398);
var lyr_DRENAGEM_PROL_JARDIM_MARTINS_398 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PROL_JARDIM_MARTINS_398, 
                style: style_DRENAGEM_PROL_JARDIM_MARTINS_398,
                popuplayertitle: 'DRENAGEM_PROL_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_PROL_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PROL_JARDIM_MARTINS_398_5.png" /> PV<br />' });
var format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399 = new ol.format.GeoJSON();
var features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399 = format_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.readFeatures(json_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.addFeatures(features_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399);
var lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399, 
                style: style_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399,
                popuplayertitle: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA',
                interactive: true,
    title: 'DRENAGEM_POLO_IND_ABILIO_NOGUEIRA<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_UNIVERSITARIO_400 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_UNIVERSITARIO_400 = format_DRENAGEM_PARQUE_UNIVERSITARIO_400.readFeatures(json_DRENAGEM_PARQUE_UNIVERSITARIO_400, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_400 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_400.addFeatures(features_DRENAGEM_PARQUE_UNIVERSITARIO_400);
var lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_UNIVERSITARIO_400, 
                style: style_DRENAGEM_PARQUE_UNIVERSITARIO_400,
                popuplayertitle: 'DRENAGEM_PARQUE_UNIVERSITARIO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_UNIVERSITARIO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_UNIVERSITARIO_400_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_SANTA_ADELIA_401 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_SANTA_ADELIA_401 = format_DRENAGEM_PARQUE_SANTA_ADELIA_401.readFeatures(json_DRENAGEM_PARQUE_SANTA_ADELIA_401, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_401 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_401.addFeatures(features_DRENAGEM_PARQUE_SANTA_ADELIA_401);
var lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_SANTA_ADELIA_401, 
                style: style_DRENAGEM_PARQUE_SANTA_ADELIA_401,
                popuplayertitle: 'DRENAGEM_PARQUE_SANTA_ADELIA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_SANTA_ADELIA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_2.png" /> DIAMETRO 300<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_4.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_6.png" /> DIAMETRO 700<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_SANTA_ADELIA_401_7.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_SABIAS_402 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_SABIAS_402 = format_DRENAGEM_PARQUE_DOS_SABIAS_402.readFeatures(json_DRENAGEM_PARQUE_DOS_SABIAS_402, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_402 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_402.addFeatures(features_DRENAGEM_PARQUE_DOS_SABIAS_402);
var lyr_DRENAGEM_PARQUE_DOS_SABIAS_402 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_SABIAS_402, 
                style: style_DRENAGEM_PARQUE_DOS_SABIAS_402,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_SABIAS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_SABIAS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_4.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_5.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_6.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_7.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_8.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_SABIAS_402_9.png" /> PV<br />' });
var format_DRENAGEM_PARQ_RESD_SANTA_MARIA_403 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQ_RESD_SANTA_MARIA_403 = format_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.readFeatures(json_DRENAGEM_PARQ_RESD_SANTA_MARIA_403, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_403 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.addFeatures(features_DRENAGEM_PARQ_RESD_SANTA_MARIA_403);
var lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQ_RESD_SANTA_MARIA_403, 
                style: style_DRENAGEM_PARQ_RESD_SANTA_MARIA_403,
                popuplayertitle: 'DRENAGEM_PARQ_RESD_SANTA_MARIA',
                interactive: true,
    title: 'DRENAGEM_PARQ_RESD_SANTA_MARIA<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_403_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_403_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_403_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_403_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQ_RESD_SANTA_MARIA_403_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_MOEMA_404 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_MOEMA_404 = format_DRENAGEM_PARQUE_MOEMA_404.readFeatures(json_DRENAGEM_PARQUE_MOEMA_404, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_MOEMA_404 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_MOEMA_404.addFeatures(features_DRENAGEM_PARQUE_MOEMA_404);
var lyr_DRENAGEM_PARQUE_MOEMA_404 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_MOEMA_404, 
                style: style_DRENAGEM_PARQUE_MOEMA_404,
                popuplayertitle: 'DRENAGEM_PARQUE_MOEMA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_MOEMA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_MOEMA_404_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_JOAO_LEITE_405 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_JOAO_LEITE_405 = format_DRENAGEM_PARQUE_JOAO_LEITE_405.readFeatures(json_DRENAGEM_PARQUE_JOAO_LEITE_405, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_405 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_405.addFeatures(features_DRENAGEM_PARQUE_JOAO_LEITE_405);
var lyr_DRENAGEM_PARQUE_JOAO_LEITE_405 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_JOAO_LEITE_405, 
                style: style_DRENAGEM_PARQUE_JOAO_LEITE_405,
                popuplayertitle: 'DRENAGEM_PARQUE_JOAO_LEITE',
                interactive: true,
    title: 'DRENAGEM_PARQUE_JOAO_LEITE<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_JOAO_LEITE_405_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_CASTELO_406 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_CASTELO_406 = format_DRENAGEM_PARQUE_CASTELO_406.readFeatures(json_DRENAGEM_PARQUE_CASTELO_406, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_CASTELO_406 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_CASTELO_406.addFeatures(features_DRENAGEM_PARQUE_CASTELO_406);
var lyr_DRENAGEM_PARQUE_CASTELO_406 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_CASTELO_406, 
                style: style_DRENAGEM_PARQUE_CASTELO_406,
                popuplayertitle: 'DRENAGEM_PARQUE_CASTELO',
                interactive: true,
    title: 'DRENAGEM_PARQUE_CASTELO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_406_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_406_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_406_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_406_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_CASTELO_406_4.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_BOA_VISTA_407 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_BOA_VISTA_407 = format_DRENAGEM_PARQUE_BOA_VISTA_407.readFeatures(json_DRENAGEM_PARQUE_BOA_VISTA_407, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_BOA_VISTA_407 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_BOA_VISTA_407.addFeatures(features_DRENAGEM_PARQUE_BOA_VISTA_407);
var lyr_DRENAGEM_PARQUE_BOA_VISTA_407 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_BOA_VISTA_407, 
                style: style_DRENAGEM_PARQUE_BOA_VISTA_407,
                popuplayertitle: 'DRENAGEM_PARQUE_BOA_VISTA',
                interactive: true,
    title: 'DRENAGEM_PARQUE_BOA_VISTA<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_407_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_407_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_407_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_BOA_VISTA_407_3.png" /> PV<br />' });
var format_DRENAGEM_PARAGON_408 = new ol.format.GeoJSON();
var features_DRENAGEM_PARAGON_408 = format_DRENAGEM_PARAGON_408.readFeatures(json_DRENAGEM_PARAGON_408, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARAGON_408 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARAGON_408.addFeatures(features_DRENAGEM_PARAGON_408);
var lyr_DRENAGEM_PARAGON_408 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARAGON_408, 
                style: style_DRENAGEM_PARAGON_408,
                popuplayertitle: 'DRENAGEM_PARAGON',
                interactive: true,
    title: 'DRENAGEM_PARAGON<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_1.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_2.png" /> CANALETA<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_4.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_5.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_6.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_7.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_8.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_9.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARAGON_408_10.png" /> PV<br />' });
var format_DRENAGEM_NAIR_RETUSSI_I_409 = new ol.format.GeoJSON();
var features_DRENAGEM_NAIR_RETUSSI_I_409 = format_DRENAGEM_NAIR_RETUSSI_I_409.readFeatures(json_DRENAGEM_NAIR_RETUSSI_I_409, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_NAIR_RETUSSI_I_409 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_NAIR_RETUSSI_I_409.addFeatures(features_DRENAGEM_NAIR_RETUSSI_I_409);
var lyr_DRENAGEM_NAIR_RETUSSI_I_409 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_NAIR_RETUSSI_I_409, 
                style: style_DRENAGEM_NAIR_RETUSSI_I_409,
                popuplayertitle: 'DRENAGEM_NAIR_RETUSSI_I',
                interactive: true,
    title: 'DRENAGEM_NAIR_RETUSSI_I<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_NAIR_RETUSSI_I_409_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOEMIA_410 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOEMIA_410 = format_DRENAGEM_JARDIM_NOEMIA_410.readFeatures(json_DRENAGEM_JARDIM_NOEMIA_410, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOEMIA_410 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOEMIA_410.addFeatures(features_DRENAGEM_JARDIM_NOEMIA_410);
var lyr_DRENAGEM_JARDIM_NOEMIA_410 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOEMIA_410, 
                style: style_DRENAGEM_JARDIM_NOEMIA_410,
                popuplayertitle: 'DRENAGEM_JARDIM_NOEMIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOEMIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_410_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_410_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_410_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOEMIA_410_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NATAL_411 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NATAL_411 = format_DRENAGEM_JARDIM_NATAL_411.readFeatures(json_DRENAGEM_JARDIM_NATAL_411, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NATAL_411 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NATAL_411.addFeatures(features_DRENAGEM_JARDIM_NATAL_411);
var lyr_DRENAGEM_JARDIM_NATAL_411 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NATAL_411, 
                style: style_DRENAGEM_JARDIM_NATAL_411,
                popuplayertitle: 'DRENAGEM_JARDIM_NATAL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NATAL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NATAL_411_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARTINS_412 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARTINS_412 = format_DRENAGEM_JARDIM_MARTINS_412.readFeatures(json_DRENAGEM_JARDIM_MARTINS_412, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARTINS_412 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARTINS_412.addFeatures(features_DRENAGEM_JARDIM_MARTINS_412);
var lyr_DRENAGEM_JARDIM_MARTINS_412 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARTINS_412, 
                style: style_DRENAGEM_JARDIM_MARTINS_412,
                popuplayertitle: 'DRENAGEM_JARDIM_MARTINS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARTINS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_412_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_412_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_412_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARTINS_412_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SAO_GABRIEL_413 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SAO_GABRIEL_413 = format_DRENAGEM_JARDIM_SAO_GABRIEL_413.readFeatures(json_DRENAGEM_JARDIM_SAO_GABRIEL_413, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_413 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_413.addFeatures(features_DRENAGEM_JARDIM_SAO_GABRIEL_413);
var lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SAO_GABRIEL_413, 
                style: style_DRENAGEM_JARDIM_SAO_GABRIEL_413,
                popuplayertitle: 'DRENAGEM_JARDIM_SAO_GABRIEL',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SAO_GABRIEL<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SAO_GABRIEL_413_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_SANTA_LUCIA_414 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_SANTA_LUCIA_414 = format_DRENAGEM_JARDIM_SANTA_LUCIA_414.readFeatures(json_DRENAGEM_JARDIM_SANTA_LUCIA_414, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_414 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_414.addFeatures(features_DRENAGEM_JARDIM_SANTA_LUCIA_414);
var lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_SANTA_LUCIA_414, 
                style: style_DRENAGEM_JARDIM_SANTA_LUCIA_414,
                popuplayertitle: 'DRENAGEM_JARDIM_SANTA_LUCIA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_SANTA_LUCIA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_SANTA_LUCIA_414_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PULICANO_415 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PULICANO_415 = format_DRENAGEM_JARDIM_PULICANO_415.readFeatures(json_DRENAGEM_JARDIM_PULICANO_415, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PULICANO_415 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PULICANO_415.addFeatures(features_DRENAGEM_JARDIM_PULICANO_415);
var lyr_DRENAGEM_JARDIM_PULICANO_415 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PULICANO_415, 
                style: style_DRENAGEM_JARDIM_PULICANO_415,
                popuplayertitle: 'DRENAGEM_JARDIM_PULICANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PULICANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_3.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PULICANO_415_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PIRATININGA_416 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PIRATININGA_416 = format_DRENAGEM_JARDIM_PIRATININGA_416.readFeatures(json_DRENAGEM_JARDIM_PIRATININGA_416, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PIRATININGA_416 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PIRATININGA_416.addFeatures(features_DRENAGEM_JARDIM_PIRATININGA_416);
var lyr_DRENAGEM_JARDIM_PIRATININGA_416 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PIRATININGA_416, 
                style: style_DRENAGEM_JARDIM_PIRATININGA_416,
                popuplayertitle: 'DRENAGEM_JARDIM_PIRATININGA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PIRATININGA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PIRATININGA_416_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_PALMA_417 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_PALMA_417 = format_DRENAGEM_JARDIM_PALMA_417.readFeatures(json_DRENAGEM_JARDIM_PALMA_417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_PALMA_417 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_PALMA_417.addFeatures(features_DRENAGEM_JARDIM_PALMA_417);
var lyr_DRENAGEM_JARDIM_PALMA_417 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_PALMA_417, 
                style: style_DRENAGEM_JARDIM_PALMA_417,
                popuplayertitle: 'DRENAGEM_JARDIM_PALMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_PALMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_4.png" /> DIAMETRO 900<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_PALMA_417_5.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418 = format_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.readFeatures(json_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.addFeatures(features_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418);
var lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418, 
                style: style_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418,
                popuplayertitle: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS',
                interactive: true,
    title: 'DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418_4.png" /> PV<br />' });
var format_DRENAGEM_ATLANTA_PARK_419 = new ol.format.GeoJSON();
var features_DRENAGEM_ATLANTA_PARK_419 = format_DRENAGEM_ATLANTA_PARK_419.readFeatures(json_DRENAGEM_ATLANTA_PARK_419, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_ATLANTA_PARK_419 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_ATLANTA_PARK_419.addFeatures(features_DRENAGEM_ATLANTA_PARK_419);
var lyr_DRENAGEM_ATLANTA_PARK_419 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_ATLANTA_PARK_419, 
                style: style_DRENAGEM_ATLANTA_PARK_419,
                popuplayertitle: 'DRENAGEM_ATLANTA_PARK',
                interactive: true,
    title: 'DRENAGEM_ATLANTA_PARK<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_ATLANTA_PARK_419_8.png" /> PV<br />' });
var format_DRENAGEM_DINFRA_II_420 = new ol.format.GeoJSON();
var features_DRENAGEM_DINFRA_II_420 = format_DRENAGEM_DINFRA_II_420.readFeatures(json_DRENAGEM_DINFRA_II_420, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DINFRA_II_420 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DINFRA_II_420.addFeatures(features_DRENAGEM_DINFRA_II_420);
var lyr_DRENAGEM_DINFRA_II_420 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DINFRA_II_420, 
                style: style_DRENAGEM_DINFRA_II_420,
                popuplayertitle: 'DRENAGEM_DINFRA_II',
                interactive: true,
    title: 'DRENAGEM_DINFRA_II<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_3.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_4.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_DINFRA_II_420_5.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_MARIA_LUIZA_421 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_MARIA_LUIZA_421 = format_DRENAGEM_JARDIM_MARIA_LUIZA_421.readFeatures(json_DRENAGEM_JARDIM_MARIA_LUIZA_421, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_421 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_421.addFeatures(features_DRENAGEM_JARDIM_MARIA_LUIZA_421);
var lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_MARIA_LUIZA_421, 
                style: style_DRENAGEM_JARDIM_MARIA_LUIZA_421,
                popuplayertitle: 'DRENAGEM_JARDIM_MARIA_LUIZA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_MARIA_LUIZA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_6.png" /> FLUXO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_MARIA_LUIZA_421_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_GAIA_422 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_GAIA_422 = format_DRENAGEM_RESIDENCIAL_GAIA_422.readFeatures(json_DRENAGEM_RESIDENCIAL_GAIA_422, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_GAIA_422 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_GAIA_422.addFeatures(features_DRENAGEM_RESIDENCIAL_GAIA_422);
var lyr_DRENAGEM_RESIDENCIAL_GAIA_422 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_GAIA_422, 
                style: style_DRENAGEM_RESIDENCIAL_GAIA_422,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_GAIA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_GAIA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_GAIA_422_6.png" /> PV<br />' });
var format_DRENAGEM_PARQUE_DOS_COQUEIROS_423 = new ol.format.GeoJSON();
var features_DRENAGEM_PARQUE_DOS_COQUEIROS_423 = format_DRENAGEM_PARQUE_DOS_COQUEIROS_423.readFeatures(json_DRENAGEM_PARQUE_DOS_COQUEIROS_423, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_423 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_423.addFeatures(features_DRENAGEM_PARQUE_DOS_COQUEIROS_423);
var lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_PARQUE_DOS_COQUEIROS_423, 
                style: style_DRENAGEM_PARQUE_DOS_COQUEIROS_423,
                popuplayertitle: 'DRENAGEM_PARQUE_DOS_COQUEIROS',
                interactive: true,
    title: 'DRENAGEM_PARQUE_DOS_COQUEIROS<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_2.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_3.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_6.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_7.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_PARQUE_DOS_COQUEIROS_423_8.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_IPANEMA_424 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_IPANEMA_424 = format_DRENAGEM_JARDIM_IPANEMA_424.readFeatures(json_DRENAGEM_JARDIM_IPANEMA_424, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_IPANEMA_424 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_IPANEMA_424.addFeatures(features_DRENAGEM_JARDIM_IPANEMA_424);
var lyr_DRENAGEM_JARDIM_IPANEMA_424 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_IPANEMA_424, 
                style: style_DRENAGEM_JARDIM_IPANEMA_424,
                popuplayertitle: 'DRENAGEM_JARDIM_IPANEMA',
                interactive: true,
    title: 'DRENAGEM_JARDIM_IPANEMA<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_IPANEMA_424_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_LIBANO_425 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_LIBANO_425 = format_DRENAGEM_JARDIM_LIBANO_425.readFeatures(json_DRENAGEM_JARDIM_LIBANO_425, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_LIBANO_425 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_LIBANO_425.addFeatures(features_DRENAGEM_JARDIM_LIBANO_425);
var lyr_DRENAGEM_JARDIM_LIBANO_425 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_LIBANO_425, 
                style: style_DRENAGEM_JARDIM_LIBANO_425,
                popuplayertitle: 'DRENAGEM_JARDIM_LIBANO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_LIBANO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_425_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_425_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_425_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_LIBANO_425_3.png" /> FLUXO<br />' });
var format_DRENAGEM_JARDIM_BOTANICO_426 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BOTANICO_426 = format_DRENAGEM_JARDIM_BOTANICO_426.readFeatures(json_DRENAGEM_JARDIM_BOTANICO_426, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BOTANICO_426 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BOTANICO_426.addFeatures(features_DRENAGEM_JARDIM_BOTANICO_426);
var lyr_DRENAGEM_JARDIM_BOTANICO_426 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BOTANICO_426, 
                style: style_DRENAGEM_JARDIM_BOTANICO_426,
                popuplayertitle: 'DRENAGEM_JARDIM_BOTANICO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BOTANICO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_2.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BOTANICO_426_7.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_BARAO_427 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_BARAO_427 = format_DRENAGEM_JARDIM_BARAO_427.readFeatures(json_DRENAGEM_JARDIM_BARAO_427, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_BARAO_427 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_BARAO_427.addFeatures(features_DRENAGEM_JARDIM_BARAO_427);
var lyr_DRENAGEM_JARDIM_BARAO_427 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_BARAO_427, 
                style: style_DRENAGEM_JARDIM_BARAO_427,
                popuplayertitle: 'DRENAGEM_JARDIM_BARAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_BARAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_427_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_427_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_427_2.png" /> DIAMETRO 500<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_BARAO_427_3.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_AVIACAO_428 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AVIACAO_428 = format_DRENAGEM_JARDIM_AVIACAO_428.readFeatures(json_DRENAGEM_JARDIM_AVIACAO_428, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AVIACAO_428 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AVIACAO_428.addFeatures(features_DRENAGEM_JARDIM_AVIACAO_428);
var lyr_DRENAGEM_JARDIM_AVIACAO_428 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AVIACAO_428, 
                style: style_DRENAGEM_JARDIM_AVIACAO_428,
                popuplayertitle: 'DRENAGEM_JARDIM_AVIACAO',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AVIACAO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AVIACAO_428_6.png" /> PV<br />' });
var format_DRENAGEM_JARDIM_AEROPORTO_II_429 = new ol.format.GeoJSON();
var features_DRENAGEM_JARDIM_AEROPORTO_II_429 = format_DRENAGEM_JARDIM_AEROPORTO_II_429.readFeatures(json_DRENAGEM_JARDIM_AEROPORTO_II_429, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_429 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_429.addFeatures(features_DRENAGEM_JARDIM_AEROPORTO_II_429);
var lyr_DRENAGEM_JARDIM_AEROPORTO_II_429 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_JARDIM_AEROPORTO_II_429, 
                style: style_DRENAGEM_JARDIM_AEROPORTO_II_429,
                popuplayertitle: 'DRENAGEM_JARDIM_AEROPORTO_II',
                interactive: true,
    title: 'DRENAGEM_JARDIM_AEROPORTO_II<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_429_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_429_1.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_429_2.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_429_3.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_JARDIM_AEROPORTO_II_429_4.png" /> PV<br />' });
var format_DRENAGEM_GRAMADOS_I_430 = new ol.format.GeoJSON();
var features_DRENAGEM_GRAMADOS_I_430 = format_DRENAGEM_GRAMADOS_I_430.readFeatures(json_DRENAGEM_GRAMADOS_I_430, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_GRAMADOS_I_430 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_GRAMADOS_I_430.addFeatures(features_DRENAGEM_GRAMADOS_I_430);
var lyr_DRENAGEM_GRAMADOS_I_430 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_GRAMADOS_I_430, 
                style: style_DRENAGEM_GRAMADOS_I_430,
                popuplayertitle: 'DRENAGEM_GRAMADOS_I',
                interactive: true,
    title: 'DRENAGEM_GRAMADOS_I<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_2.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_3.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_4.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_5.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_GRAMADOS_I_430_6.png" /> PV<br />' });
var format_DRENAGEM_FRANCA_POLO_CLUBE_431 = new ol.format.GeoJSON();
var features_DRENAGEM_FRANCA_POLO_CLUBE_431 = format_DRENAGEM_FRANCA_POLO_CLUBE_431.readFeatures(json_DRENAGEM_FRANCA_POLO_CLUBE_431, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_431 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_431.addFeatures(features_DRENAGEM_FRANCA_POLO_CLUBE_431);
var lyr_DRENAGEM_FRANCA_POLO_CLUBE_431 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_FRANCA_POLO_CLUBE_431, 
                style: style_DRENAGEM_FRANCA_POLO_CLUBE_431,
                popuplayertitle: 'DRENAGEM_FRANCA_POLO_CLUBE',
                interactive: true,
    title: 'DRENAGEM_FRANCA_POLO_CLUBE<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_6.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DRENAGEM_FRANCA_POLO_CLUBE_431_7.png" /> PV<br />' });
var format_DRENAGEM_RESIDENCIAL_ANA_HELENA_432 = new ol.format.GeoJSON();
var features_DRENAGEM_RESIDENCIAL_ANA_HELENA_432 = format_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.readFeatures(json_DRENAGEM_RESIDENCIAL_ANA_HELENA_432, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_432 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.addFeatures(features_DRENAGEM_RESIDENCIAL_ANA_HELENA_432);
var lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_RESIDENCIAL_ANA_HELENA_432, 
                style: style_DRENAGEM_RESIDENCIAL_ANA_HELENA_432,
                popuplayertitle: 'DRENAGEM_RESIDENCIAL_ANA_HELENA',
                interactive: true,
    title: 'DRENAGEM_RESIDENCIAL_ANA_HELENA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_2.png" /> CAIXA<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_3.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_4.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_5.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_RESIDENCIAL_ANA_HELENA_432_6.png" /> DISSIPADOR<br />' });
var format_DRENAGEM_DOMINGOS_JARDINI_433 = new ol.format.GeoJSON();
var features_DRENAGEM_DOMINGOS_JARDINI_433 = format_DRENAGEM_DOMINGOS_JARDINI_433.readFeatures(json_DRENAGEM_DOMINGOS_JARDINI_433, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DRENAGEM_DOMINGOS_JARDINI_433 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAGEM_DOMINGOS_JARDINI_433.addFeatures(features_DRENAGEM_DOMINGOS_JARDINI_433);
var lyr_DRENAGEM_DOMINGOS_JARDINI_433 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAGEM_DOMINGOS_JARDINI_433, 
                style: style_DRENAGEM_DOMINGOS_JARDINI_433,
                popuplayertitle: 'DRENAGEM_DOMINGOS_JARDINI',
                interactive: true,
    title: 'DRENAGEM_DOMINGOS_JARDINI<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_0.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_1.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_2.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_3.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_4.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_5.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DRENAGEM_DOMINGOS_JARDINI_433_6.png" /> PV<br />' });
var format_Voorocas27unid_434 = new ol.format.GeoJSON();
var features_Voorocas27unid_434 = format_Voorocas27unid_434.readFeatures(json_Voorocas27unid_434, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas27unid_434 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas27unid_434.addFeatures(features_Voorocas27unid_434);
var lyr_Voorocas27unid_434 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas27unid_434, 
                style: style_Voorocas27unid_434,
                popuplayertitle: 'Voçorocas (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas27unid_434.png" /> Voçorocas (27 unid.)'
            });
var format_LocaisDifcilAcessoreasRurais12unid_435 = new ol.format.GeoJSON();
var features_LocaisDifcilAcessoreasRurais12unid_435 = format_LocaisDifcilAcessoreasRurais12unid_435.readFeatures(json_LocaisDifcilAcessoreasRurais12unid_435, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisDifcilAcessoreasRurais12unid_435 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisDifcilAcessoreasRurais12unid_435.addFeatures(features_LocaisDifcilAcessoreasRurais12unid_435);
var lyr_LocaisDifcilAcessoreasRurais12unid_435 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisDifcilAcessoreasRurais12unid_435, 
                style: style_LocaisDifcilAcessoreasRurais12unid_435,
                popuplayertitle: 'Locais Difícil Acesso Áreas Rurais (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisDifcilAcessoreasRurais12unid_435.png" /> Locais Difícil Acesso Áreas Rurais (12 unid.)'
            });
var format_Contineres286unid_436 = new ol.format.GeoJSON();
var features_Contineres286unid_436 = format_Contineres286unid_436.readFeatures(json_Contineres286unid_436, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_436 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_436.addFeatures(features_Contineres286unid_436);
var lyr_Contineres286unid_436 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_436, 
                style: style_Contineres286unid_436,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_436.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_437 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_437 = format_rvoreImuneaoCorte9unid_437.readFeatures(json_rvoreImuneaoCorte9unid_437, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_437 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_437.addFeatures(features_rvoreImuneaoCorte9unid_437);
var lyr_rvoreImuneaoCorte9unid_437 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_437, 
                style: style_rvoreImuneaoCorte9unid_437,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_437.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_AcademiasaoArLivre84unid_438 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_438 = format_AcademiasaoArLivre84unid_438.readFeatures(json_AcademiasaoArLivre84unid_438, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_438 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_438.addFeatures(features_AcademiasaoArLivre84unid_438);
var lyr_AcademiasaoArLivre84unid_438 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_438, 
                style: style_AcademiasaoArLivre84unid_438,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_438.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Gesso1unid_439 = new ol.format.GeoJSON();
var features_Gesso1unid_439 = format_Gesso1unid_439.readFeatures(json_Gesso1unid_439, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_439 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_439.addFeatures(features_Gesso1unid_439);
var lyr_Gesso1unid_439 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_439, 
                style: style_Gesso1unid_439,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_439.png" /> Gesso (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_440 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_440 = format_ResduosdeConstruoCivil7unid_440.readFeatures(json_ResduosdeConstruoCivil7unid_440, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_440 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_440.addFeatures(features_ResduosdeConstruoCivil7unid_440);
var lyr_ResduosdeConstruoCivil7unid_440 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_440, 
                style: style_ResduosdeConstruoCivil7unid_440,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_440.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_441 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_441 = format_ResduosVerdes1unid_441.readFeatures(json_ResduosVerdes1unid_441, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_441 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_441.addFeatures(features_ResduosVerdes1unid_441);
var lyr_ResduosVerdes1unid_441 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_441, 
                style: style_ResduosVerdes1unid_441,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_441.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_442 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_442 = format_ChapasdeRaioX1unid_442.readFeatures(json_ChapasdeRaioX1unid_442, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_442 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_442.addFeatures(features_ChapasdeRaioX1unid_442);
var lyr_ChapasdeRaioX1unid_442 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_442, 
                style: style_ChapasdeRaioX1unid_442,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_442.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_443 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_443 = format_Embalagensvaziasdeagrotxicos1unid_443.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_443, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_443 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_443.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_443);
var lyr_Embalagensvaziasdeagrotxicos1unid_443 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_443, 
                style: style_Embalagensvaziasdeagrotxicos1unid_443,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_443.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_444 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_444 = format_leodecozinhausado2unid_444.readFeatures(json_leodecozinhausado2unid_444, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_444 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_444.addFeatures(features_leodecozinhausado2unid_444);
var lyr_leodecozinhausado2unid_444 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_444, 
                style: style_leodecozinhausado2unid_444,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_444.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_445 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_445 = format_leolubrificanteusado1unid_445.readFeatures(json_leolubrificanteusado1unid_445, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_445 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_445.addFeatures(features_leolubrificanteusado1unid_445);
var lyr_leolubrificanteusado1unid_445 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_445, 
                style: style_leolubrificanteusado1unid_445,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_445.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_446 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_446 = format_Latasdetintametlicasvazias2unid_446.readFeatures(json_Latasdetintametlicasvazias2unid_446, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_446 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_446.addFeatures(features_Latasdetintametlicasvazias2unid_446);
var lyr_Latasdetintametlicasvazias2unid_446 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_446, 
                style: style_Latasdetintametlicasvazias2unid_446,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_446.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_447 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_447 = format_ResduosPerigosos1unid_447.readFeatures(json_ResduosPerigosos1unid_447, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_447 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_447.addFeatures(features_ResduosPerigosos1unid_447);
var lyr_ResduosPerigosos1unid_447 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_447, 
                style: style_ResduosPerigosos1unid_447,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_447.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_448 = new ol.format.GeoJSON();
var features_Madeiras1unid_448 = format_Madeiras1unid_448.readFeatures(json_Madeiras1unid_448, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_448 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_448.addFeatures(features_Madeiras1unid_448);
var lyr_Madeiras1unid_448 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_448, 
                style: style_Madeiras1unid_448,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_448.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_449 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_449 = format_ResduosdeServiosdeSade21unid_449.readFeatures(json_ResduosdeServiosdeSade21unid_449, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_449 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_449.addFeatures(features_ResduosdeServiosdeSade21unid_449);
var lyr_ResduosdeServiosdeSade21unid_449 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_449, 
                style: style_ResduosdeServiosdeSade21unid_449,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_449.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias17unid_450 = new ol.format.GeoJSON();
var features_PilhaseBaterias17unid_450 = format_PilhaseBaterias17unid_450.readFeatures(json_PilhaseBaterias17unid_450, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias17unid_450 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias17unid_450.addFeatures(features_PilhaseBaterias17unid_450);
var lyr_PilhaseBaterias17unid_450 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias17unid_450, 
                style: style_PilhaseBaterias17unid_450,
                popuplayertitle: 'Pilhas e Baterias (17 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias17unid_450.png" /> Pilhas e Baterias (17 unid.)'
            });
var format_Pneus1unid_451 = new ol.format.GeoJSON();
var features_Pneus1unid_451 = format_Pneus1unid_451.readFeatures(json_Pneus1unid_451, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_451 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_451.addFeatures(features_Pneus1unid_451);
var lyr_Pneus1unid_451 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_451, 
                style: style_Pneus1unid_451,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_451.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_452 = new ol.format.GeoJSON();
var features_Lmpadas4unid_452 = format_Lmpadas4unid_452.readFeatures(json_Lmpadas4unid_452, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_452 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_452.addFeatures(features_Lmpadas4unid_452);
var lyr_Lmpadas4unid_452 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_452, 
                style: style_Lmpadas4unid_452,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_452.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_453 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_453 = format_ResduosdeCouro1unid_453.readFeatures(json_ResduosdeCouro1unid_453, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_453 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_453.addFeatures(features_ResduosdeCouro1unid_453);
var lyr_ResduosdeCouro1unid_453 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_453, 
                style: style_ResduosdeCouro1unid_453,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_453.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_454 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_454 = format_ResduosEletrnicos2unid_454.readFeatures(json_ResduosEletrnicos2unid_454, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_454 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_454.addFeatures(features_ResduosEletrnicos2unid_454);
var lyr_ResduosEletrnicos2unid_454 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_454, 
                style: style_ResduosEletrnicos2unid_454,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_454.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_455 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_455 = format_ResduosReciclveis15unid_455.readFeatures(json_ResduosReciclveis15unid_455, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_455 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_455.addFeatures(features_ResduosReciclveis15unid_455);
var lyr_ResduosReciclveis15unid_455 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_455, 
                style: style_ResduosReciclveis15unid_455,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_455.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_456 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_456 = format_ResduosInservveis4unid_456.readFeatures(json_ResduosInservveis4unid_456, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_456 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_456.addFeatures(features_ResduosInservveis4unid_456);
var lyr_ResduosInservveis4unid_456 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_456, 
                style: style_ResduosInservveis4unid_456,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_456.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_457 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_457 = format_PBZPAEdifcioPrimeHELIPONTO_457.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_457, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_457 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_457.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_457);
var lyr_PBZPAEdifcioPrimeHELIPONTO_457 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_457, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_457,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_457.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_458 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_458 = format_PBZPAEdifcioPrimeHELIPONTO_458.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_458, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_458 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_458.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_458);
var lyr_PBZPAEdifcioPrimeHELIPONTO_458 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_458, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_458,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_458_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_458_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_459 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_459 = format_PBZPAHospitalHELIPONTO_459.readFeatures(json_PBZPAHospitalHELIPONTO_459, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_459 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_459.addFeatures(features_PBZPAHospitalHELIPONTO_459);
var lyr_PBZPAHospitalHELIPONTO_459 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_459, 
                style: style_PBZPAHospitalHELIPONTO_459,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_459_6.png" /> TLOF 1<br />' });
var format_PBZPAAeroporto_460 = new ol.format.GeoJSON();
var features_PBZPAAeroporto_460 = format_PBZPAAeroporto_460.readFeatures(json_PBZPAAeroporto_460, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAAeroporto_460 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAAeroporto_460.addFeatures(features_PBZPAAeroporto_460);
var lyr_PBZPAAeroporto_460 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAAeroporto_460, 
                style: style_PBZPAAeroporto_460,
                popuplayertitle: 'PBZPA - Aeroporto',
                interactive: true,
    title: 'PBZPA - Aeroporto<br />\
    <img src="styles/legend/PBZPAAeroporto_460_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PBZPAAeroporto_460_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PBZPAAeroporto_460_2.png" /> Cônica<br />\
    <img src="styles/legend/PBZPAAeroporto_460_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PBZPAAeroporto_460_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PBZPAAeroporto_460_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PBZPAAeroporto_460_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PBZPAAeroporto_460_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PBZPAAeroporto_460_8.png" /> Pista<br />\
    <img src="styles/legend/PBZPAAeroporto_460_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PBZPAAeroporto_460_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PBZPAAeroporto_460_11.png" /> Transição<br />' });
var format_CLASSE_I_461 = new ol.format.GeoJSON();
var features_CLASSE_I_461 = format_CLASSE_I_461.readFeatures(json_CLASSE_I_461, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_I_461 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_I_461.addFeatures(features_CLASSE_I_461);
var lyr_CLASSE_I_461 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_I_461, 
                style: style_CLASSE_I_461,
                popuplayertitle: 'CLASSE_I',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_I_461.png" /> CLASSE_I'
            });
var format_CLASSE_II_462 = new ol.format.GeoJSON();
var features_CLASSE_II_462 = format_CLASSE_II_462.readFeatures(json_CLASSE_II_462, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_II_462 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_II_462.addFeatures(features_CLASSE_II_462);
var lyr_CLASSE_II_462 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_II_462, 
                style: style_CLASSE_II_462,
                popuplayertitle: 'CLASSE_II',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_II_462.png" /> CLASSE_II'
            });
var format_CLASSE_IIIA_463 = new ol.format.GeoJSON();
var features_CLASSE_IIIA_463 = format_CLASSE_IIIA_463.readFeatures(json_CLASSE_IIIA_463, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIA_463 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIA_463.addFeatures(features_CLASSE_IIIA_463);
var lyr_CLASSE_IIIA_463 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIA_463, 
                style: style_CLASSE_IIIA_463,
                popuplayertitle: 'CLASSE_IIIA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIA_463.png" /> CLASSE_IIIA'
            });
var format_CLASSE_IIIB_464 = new ol.format.GeoJSON();
var features_CLASSE_IIIB_464 = format_CLASSE_IIIB_464.readFeatures(json_CLASSE_IIIB_464, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIB_464 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIB_464.addFeatures(features_CLASSE_IIIB_464);
var lyr_CLASSE_IIIB_464 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIB_464, 
                style: style_CLASSE_IIIB_464,
                popuplayertitle: 'CLASSE_IIIB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIB_464.png" /> CLASSE_IIIB'
            });
var format_CLASSE_IIIC_465 = new ol.format.GeoJSON();
var features_CLASSE_IIIC_465 = format_CLASSE_IIIC_465.readFeatures(json_CLASSE_IIIC_465, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IIIC_465 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IIIC_465.addFeatures(features_CLASSE_IIIC_465);
var lyr_CLASSE_IIIC_465 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IIIC_465, 
                style: style_CLASSE_IIIC_465,
                popuplayertitle: 'CLASSE_IIIC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IIIC_465.png" /> CLASSE_IIIC'
            });
var format_CLASSE_IVA_466 = new ol.format.GeoJSON();
var features_CLASSE_IVA_466 = format_CLASSE_IVA_466.readFeatures(json_CLASSE_IVA_466, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVA_466 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVA_466.addFeatures(features_CLASSE_IVA_466);
var lyr_CLASSE_IVA_466 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVA_466, 
                style: style_CLASSE_IVA_466,
                popuplayertitle: 'CLASSE_IVA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVA_466.png" /> CLASSE_IVA'
            });
var format_CLASSE_IVB_467 = new ol.format.GeoJSON();
var features_CLASSE_IVB_467 = format_CLASSE_IVB_467.readFeatures(json_CLASSE_IVB_467, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVB_467 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVB_467.addFeatures(features_CLASSE_IVB_467);
var lyr_CLASSE_IVB_467 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVB_467, 
                style: style_CLASSE_IVB_467,
                popuplayertitle: 'CLASSE_IVB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVB_467.png" /> CLASSE_IVB'
            });
var format_CLASSE_IVC_468 = new ol.format.GeoJSON();
var features_CLASSE_IVC_468 = format_CLASSE_IVC_468.readFeatures(json_CLASSE_IVC_468, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_IVC_468 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_IVC_468.addFeatures(features_CLASSE_IVC_468);
var lyr_CLASSE_IVC_468 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_IVC_468, 
                style: style_CLASSE_IVC_468,
                popuplayertitle: 'CLASSE_IVC',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_IVC_468.png" /> CLASSE_IVC'
            });
var format_CLASSE_VA_469 = new ol.format.GeoJSON();
var features_CLASSE_VA_469 = format_CLASSE_VA_469.readFeatures(json_CLASSE_VA_469, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VA_469 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VA_469.addFeatures(features_CLASSE_VA_469);
var lyr_CLASSE_VA_469 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VA_469, 
                style: style_CLASSE_VA_469,
                popuplayertitle: 'CLASSE_VA',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VA_469.png" /> CLASSE_VA'
            });
var format_CLASSE_VB_470 = new ol.format.GeoJSON();
var features_CLASSE_VB_470 = format_CLASSE_VB_470.readFeatures(json_CLASSE_VB_470, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CLASSE_VB_470 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSE_VB_470.addFeatures(features_CLASSE_VB_470);
var lyr_CLASSE_VB_470 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSE_VB_470, 
                style: style_CLASSE_VB_470,
                popuplayertitle: 'CLASSE_VB',
                interactive: true,
                title: '<img src="styles/legend/CLASSE_VB_470.png" /> CLASSE_VB'
            });
var format_RegioCentroLeste42unid675453694m_471 = new ol.format.GeoJSON();
var features_RegioCentroLeste42unid675453694m_471 = format_RegioCentroLeste42unid675453694m_471.readFeatures(json_RegioCentroLeste42unid675453694m_471, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioCentroLeste42unid675453694m_471 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioCentroLeste42unid675453694m_471.addFeatures(features_RegioCentroLeste42unid675453694m_471);
var lyr_RegioCentroLeste42unid675453694m_471 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioCentroLeste42unid675453694m_471, 
                style: style_RegioCentroLeste42unid675453694m_471,
                popuplayertitle: 'Região Centro Leste (42 unid. / 6.754.536,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioCentroLeste42unid675453694m_471.png" /> Região Centro Leste (42 unid. / 6.754.536,94 m²)'
            });
var format_RegioLesteNordeste50unid1233454938m_472 = new ol.format.GeoJSON();
var features_RegioLesteNordeste50unid1233454938m_472 = format_RegioLesteNordeste50unid1233454938m_472.readFeatures(json_RegioLesteNordeste50unid1233454938m_472, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioLesteNordeste50unid1233454938m_472 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioLesteNordeste50unid1233454938m_472.addFeatures(features_RegioLesteNordeste50unid1233454938m_472);
var lyr_RegioLesteNordeste50unid1233454938m_472 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioLesteNordeste50unid1233454938m_472, 
                style: style_RegioLesteNordeste50unid1233454938m_472,
                popuplayertitle: 'Região Leste Nordeste (50 unid. / 12.334.549,38 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioLesteNordeste50unid1233454938m_472.png" /> Região Leste Nordeste (50 unid. / 12.334.549,38 m²)'
            });
var format_RegioNorteI45unid1043752016m_473 = new ol.format.GeoJSON();
var features_RegioNorteI45unid1043752016m_473 = format_RegioNorteI45unid1043752016m_473.readFeatures(json_RegioNorteI45unid1043752016m_473, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteI45unid1043752016m_473 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteI45unid1043752016m_473.addFeatures(features_RegioNorteI45unid1043752016m_473);
var lyr_RegioNorteI45unid1043752016m_473 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteI45unid1043752016m_473, 
                style: style_RegioNorteI45unid1043752016m_473,
                popuplayertitle: 'Região Norte I (45 unid. / 10.437.520,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteI45unid1043752016m_473.png" /> Região Norte I (45 unid. / 10.437.520,16 m²)'
            });
var format_RegioNorteII36unid859331837m_474 = new ol.format.GeoJSON();
var features_RegioNorteII36unid859331837m_474 = format_RegioNorteII36unid859331837m_474.readFeatures(json_RegioNorteII36unid859331837m_474, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteII36unid859331837m_474 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteII36unid859331837m_474.addFeatures(features_RegioNorteII36unid859331837m_474);
var lyr_RegioNorteII36unid859331837m_474 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteII36unid859331837m_474, 
                style: style_RegioNorteII36unid859331837m_474,
                popuplayertitle: 'Região Norte II (36 unid. / 8.593.318,37 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteII36unid859331837m_474.png" /> Região Norte II (36 unid. / 8.593.318,37 m²)'
            });
var format_RegioOesteI65unid1245065890m_475 = new ol.format.GeoJSON();
var features_RegioOesteI65unid1245065890m_475 = format_RegioOesteI65unid1245065890m_475.readFeatures(json_RegioOesteI65unid1245065890m_475, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteI65unid1245065890m_475 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteI65unid1245065890m_475.addFeatures(features_RegioOesteI65unid1245065890m_475);
var lyr_RegioOesteI65unid1245065890m_475 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteI65unid1245065890m_475, 
                style: style_RegioOesteI65unid1245065890m_475,
                popuplayertitle: 'Região Oeste I (65 unid. / 12.450.658,90 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteI65unid1245065890m_475.png" /> Região Oeste I (65 unid. / 12.450.658,90 m²)'
            });
var format_RegioOesteII43unid599615871m_476 = new ol.format.GeoJSON();
var features_RegioOesteII43unid599615871m_476 = format_RegioOesteII43unid599615871m_476.readFeatures(json_RegioOesteII43unid599615871m_476, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteII43unid599615871m_476 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteII43unid599615871m_476.addFeatures(features_RegioOesteII43unid599615871m_476);
var lyr_RegioOesteII43unid599615871m_476 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteII43unid599615871m_476, 
                style: style_RegioOesteII43unid599615871m_476,
                popuplayertitle: 'Região Oeste II (43 unid. / 5.996.158,71 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteII43unid599615871m_476.png" /> Região Oeste II (43 unid. / 5.996.158,71 m²)'
            });
var format_RegioSudeste38unid579321135m_477 = new ol.format.GeoJSON();
var features_RegioSudeste38unid579321135m_477 = format_RegioSudeste38unid579321135m_477.readFeatures(json_RegioSudeste38unid579321135m_477, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudeste38unid579321135m_477 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudeste38unid579321135m_477.addFeatures(features_RegioSudeste38unid579321135m_477);
var lyr_RegioSudeste38unid579321135m_477 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudeste38unid579321135m_477, 
                style: style_RegioSudeste38unid579321135m_477,
                popuplayertitle: 'Região Sudeste (38 unid. / 5.793.211,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudeste38unid579321135m_477.png" /> Região Sudeste (38 unid. / 5.793.211,35 m²)'
            });
var format_RegioSudesteSul44unid830633497m_478 = new ol.format.GeoJSON();
var features_RegioSudesteSul44unid830633497m_478 = format_RegioSudesteSul44unid830633497m_478.readFeatures(json_RegioSudesteSul44unid830633497m_478, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudesteSul44unid830633497m_478 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudesteSul44unid830633497m_478.addFeatures(features_RegioSudesteSul44unid830633497m_478);
var lyr_RegioSudesteSul44unid830633497m_478 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudesteSul44unid830633497m_478, 
                style: style_RegioSudesteSul44unid830633497m_478,
                popuplayertitle: 'Região Sudeste Sul (44 unid. / 8.306.334,97 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudesteSul44unid830633497m_478.png" /> Região Sudeste Sul (44 unid. / 8.306.334,97 m²)'
            });
var format_RegioSul20unid639964086m_479 = new ol.format.GeoJSON();
var features_RegioSul20unid639964086m_479 = format_RegioSul20unid639964086m_479.readFeatures(json_RegioSul20unid639964086m_479, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSul20unid639964086m_479 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSul20unid639964086m_479.addFeatures(features_RegioSul20unid639964086m_479);
var lyr_RegioSul20unid639964086m_479 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSul20unid639964086m_479, 
                style: style_RegioSul20unid639964086m_479,
                popuplayertitle: 'Região Sul (20 unid. / 6.399.640,86 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSul20unid639964086m_479.png" /> Região Sul (20 unid. / 6.399.640,86 m²)'
            });
var format_APP169unid239527816m_480 = new ol.format.GeoJSON();
var features_APP169unid239527816m_480 = format_APP169unid239527816m_480.readFeatures(json_APP169unid239527816m_480, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid239527816m_480 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid239527816m_480.addFeatures(features_APP169unid239527816m_480);
var lyr_APP169unid239527816m_480 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid239527816m_480, 
                style: style_APP169unid239527816m_480,
                popuplayertitle: 'APP (169 unid. / 2.395.278,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid239527816m_480.png" /> APP (169 unid. / 2.395.278,16 m²)'
            });
var format_reaInstitucional371unid208395759m_481 = new ol.format.GeoJSON();
var features_reaInstitucional371unid208395759m_481 = format_reaInstitucional371unid208395759m_481.readFeatures(json_reaInstitucional371unid208395759m_481, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional371unid208395759m_481 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional371unid208395759m_481.addFeatures(features_reaInstitucional371unid208395759m_481);
var lyr_reaInstitucional371unid208395759m_481 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional371unid208395759m_481, 
                style: style_reaInstitucional371unid208395759m_481,
                popuplayertitle: 'Área Institucional  (371 unid. / 2.083.957,59 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional371unid208395759m_481.png" /> Área Institucional  (371 unid. / 2.083.957,59 m²)'
            });
var format_reaPatrimonial69unid121924073m_482 = new ol.format.GeoJSON();
var features_reaPatrimonial69unid121924073m_482 = format_reaPatrimonial69unid121924073m_482.readFeatures(json_reaPatrimonial69unid121924073m_482, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial69unid121924073m_482 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial69unid121924073m_482.addFeatures(features_reaPatrimonial69unid121924073m_482);
var lyr_reaPatrimonial69unid121924073m_482 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial69unid121924073m_482, 
                style: style_reaPatrimonial69unid121924073m_482,
                popuplayertitle: 'Área Patrimonial (69 unid. / 1.219.240,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial69unid121924073m_482.png" /> Área Patrimonial (69 unid. / 1.219.240,73 m²)'
            });
var format_reaVerde2117unid881307234m_483 = new ol.format.GeoJSON();
var features_reaVerde2117unid881307234m_483 = format_reaVerde2117unid881307234m_483.readFeatures(json_reaVerde2117unid881307234m_483, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2117unid881307234m_483 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2117unid881307234m_483.addFeatures(features_reaVerde2117unid881307234m_483);
var lyr_reaVerde2117unid881307234m_483 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2117unid881307234m_483, 
                style: style_reaVerde2117unid881307234m_483,
                popuplayertitle: 'Área Verde (2117 unid. / 8.813.072,34 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2117unid881307234m_483.png" /> Área Verde (2117 unid. / 8.813.072,34 m²)'
            });
var format_readeUsoEspecial280unid271349968m_484 = new ol.format.GeoJSON();
var features_readeUsoEspecial280unid271349968m_484 = format_readeUsoEspecial280unid271349968m_484.readFeatures(json_readeUsoEspecial280unid271349968m_484, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial280unid271349968m_484 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial280unid271349968m_484.addFeatures(features_readeUsoEspecial280unid271349968m_484);
var lyr_readeUsoEspecial280unid271349968m_484 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial280unid271349968m_484, 
                style: style_readeUsoEspecial280unid271349968m_484,
                popuplayertitle: 'Área de Uso Especial (280 unid. / 2.713.499,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial280unid271349968m_484.png" /> Área de Uso Especial (280 unid. / 2.713.499,68 m²)'
            });
var format_LoteamentoFechado146unid70632440m_485 = new ol.format.GeoJSON();
var features_LoteamentoFechado146unid70632440m_485 = format_LoteamentoFechado146unid70632440m_485.readFeatures(json_LoteamentoFechado146unid70632440m_485, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado146unid70632440m_485 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado146unid70632440m_485.addFeatures(features_LoteamentoFechado146unid70632440m_485);
var lyr_LoteamentoFechado146unid70632440m_485 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado146unid70632440m_485, 
                style: style_LoteamentoFechado146unid70632440m_485,
                popuplayertitle: 'Loteamento Fechado (146 unid. / 706.324,40 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado146unid70632440m_485.png" /> Loteamento Fechado (146 unid. / 706.324,40 m²)'
            });
var format_Lote252unid7530210m_486 = new ol.format.GeoJSON();
var features_Lote252unid7530210m_486 = format_Lote252unid7530210m_486.readFeatures(json_Lote252unid7530210m_486, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid7530210m_486 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid7530210m_486.addFeatures(features_Lote252unid7530210m_486);
var lyr_Lote252unid7530210m_486 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid7530210m_486, 
                style: style_Lote252unid7530210m_486,
                popuplayertitle: 'Lote (252 unid. / 75.302,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid7530210m_486.png" /> Lote (252 unid. / 75.302,10 m²)'
            });
var format_Lote252unid_487 = new ol.format.GeoJSON();
var features_Lote252unid_487 = format_Lote252unid_487.readFeatures(json_Lote252unid_487, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid_487 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid_487.addFeatures(features_Lote252unid_487);
var lyr_Lote252unid_487 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid_487, 
                style: style_Lote252unid_487,
                popuplayertitle: 'Lote (252 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid_487.png" /> Lote (252 unid.)'
            });
var format_LoteEdificao20unid508062m_488 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_488 = format_LoteEdificao20unid508062m_488.readFeatures(json_LoteEdificao20unid508062m_488, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_488 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_488.addFeatures(features_LoteEdificao20unid508062m_488);
var lyr_LoteEdificao20unid508062m_488 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_488, 
                style: style_LoteEdificao20unid508062m_488,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_488.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_489 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_489 = format_LoteEdificao20unid_489.readFeatures(json_LoteEdificao20unid_489, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_489 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_489.addFeatures(features_LoteEdificao20unid_489);
var lyr_LoteEdificao20unid_489 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_489, 
                style: style_LoteEdificao20unid_489,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_489.png" /> Lote/Edificação (20 unid.)'
            });
var format_LeiloLEI97542025Homologado4unid334770m_490 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid334770m_490 = format_LeiloLEI97542025Homologado4unid334770m_490.readFeatures(json_LeiloLEI97542025Homologado4unid334770m_490, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid334770m_490 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid334770m_490.addFeatures(features_LeiloLEI97542025Homologado4unid334770m_490);
var lyr_LeiloLEI97542025Homologado4unid334770m_490 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid334770m_490, 
                style: style_LeiloLEI97542025Homologado4unid334770m_490,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid334770m_490.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_LeiloLEI97542025Homologado4unid_491 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Homologado4unid_491 = format_LeiloLEI97542025Homologado4unid_491.readFeatures(json_LeiloLEI97542025Homologado4unid_491, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Homologado4unid_491 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Homologado4unid_491.addFeatures(features_LeiloLEI97542025Homologado4unid_491);
var lyr_LeiloLEI97542025Homologado4unid_491 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Homologado4unid_491, 
                style: style_LeiloLEI97542025Homologado4unid_491,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Homologado4unid_491.png" /> Leilão - LEI 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEI97542025Proc2652520256922unid352000m_492 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid352000m_492 = format_LeiloLEI97542025Proc2652520256922unid352000m_492.readFeatures(json_LeiloLEI97542025Proc2652520256922unid352000m_492, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_492 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_492.addFeatures(features_LeiloLEI97542025Proc2652520256922unid352000m_492);
var lyr_LeiloLEI97542025Proc2652520256922unid352000m_492 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid352000m_492, 
                style: style_LeiloLEI97542025Proc2652520256922unid352000m_492,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid352000m_492.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEI97542025Proc2652520256922unid_493 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2652520256922unid_493 = format_LeiloLEI97542025Proc2652520256922unid_493.readFeatures(json_LeiloLEI97542025Proc2652520256922unid_493, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2652520256922unid_493 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2652520256922unid_493.addFeatures(features_LeiloLEI97542025Proc2652520256922unid_493);
var lyr_LeiloLEI97542025Proc2652520256922unid_493 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2652520256922unid_493, 
                style: style_LeiloLEI97542025Proc2652520256922unid_493,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2652520256922unid_493.png" /> Leilão - LEI 9.754/2025 - Proc 26525/2025-69 (22 unid.)'
            });
var format_LeiloLEI97542025Proc7954202537196unid3240462m_494 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid3240462m_494 = format_LeiloLEI97542025Proc7954202537196unid3240462m_494.readFeatures(json_LeiloLEI97542025Proc7954202537196unid3240462m_494, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_494 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_494.addFeatures(features_LeiloLEI97542025Proc7954202537196unid3240462m_494);
var lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid3240462m_494, 
                style: style_LeiloLEI97542025Proc7954202537196unid3240462m_494,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid3240462m_494.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEI97542025Proc7954202537196unid_495 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc7954202537196unid_495 = format_LeiloLEI97542025Proc7954202537196unid_495.readFeatures(json_LeiloLEI97542025Proc7954202537196unid_495, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc7954202537196unid_495 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc7954202537196unid_495.addFeatures(features_LeiloLEI97542025Proc7954202537196unid_495);
var lyr_LeiloLEI97542025Proc7954202537196unid_495 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc7954202537196unid_495, 
                style: style_LeiloLEI97542025Proc7954202537196unid_495,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc7954202537196unid_495.png" /> Leilão - LEI 9.754/2025 - Proc 7954/2025-37 (196 unid.)'
            });
var format_LeiloLEI97542025Proc2198620254518unid2092083m_496 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid2092083m_496 = format_LeiloLEI97542025Proc2198620254518unid2092083m_496.readFeatures(json_LeiloLEI97542025Proc2198620254518unid2092083m_496, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_496 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_496.addFeatures(features_LeiloLEI97542025Proc2198620254518unid2092083m_496);
var lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid2092083m_496, 
                style: style_LeiloLEI97542025Proc2198620254518unid2092083m_496,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid2092083m_496.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEI97542025Proc2198620254518unid_497 = new ol.format.GeoJSON();
var features_LeiloLEI97542025Proc2198620254518unid_497 = format_LeiloLEI97542025Proc2198620254518unid_497.readFeatures(json_LeiloLEI97542025Proc2198620254518unid_497, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEI97542025Proc2198620254518unid_497 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEI97542025Proc2198620254518unid_497.addFeatures(features_LeiloLEI97542025Proc2198620254518unid_497);
var lyr_LeiloLEI97542025Proc2198620254518unid_497 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEI97542025Proc2198620254518unid_497, 
                style: style_LeiloLEI97542025Proc2198620254518unid_497,
                popuplayertitle: 'Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEI97542025Proc2198620254518unid_497.png" /> Leilão - LEI 9.754/2025 - Proc 21986/2025-45 (18 unid.)'
            });
var format_LoteEMDEF10unid218783m_498 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_498 = format_LoteEMDEF10unid218783m_498.readFeatures(json_LoteEMDEF10unid218783m_498, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_498 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_498.addFeatures(features_LoteEMDEF10unid218783m_498);
var lyr_LoteEMDEF10unid218783m_498 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_498, 
                style: style_LoteEMDEF10unid218783m_498,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_498.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_499 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_499 = format_LoteEMDEF10unid_499.readFeatures(json_LoteEMDEF10unid_499, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_499 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_499.addFeatures(features_LoteEMDEF10unid_499);
var lyr_LoteEMDEF10unid_499 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_499, 
                style: style_LoteEMDEF10unid_499,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_499.png" /> Lote EMDEF (10 unid.)'
            });
var format_TRPRLCETESB2unid_500 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_500 = format_TRPRLCETESB2unid_500.readFeatures(json_TRPRLCETESB2unid_500, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_500 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_500.addFeatures(features_TRPRLCETESB2unid_500);
var lyr_TRPRLCETESB2unid_500 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_500, 
                style: style_TRPRLCETESB2unid_500,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_500.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_501 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_501 = format_TRPRLCETESB2unid_501.readFeatures(json_TRPRLCETESB2unid_501, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_501 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_501.addFeatures(features_TRPRLCETESB2unid_501);
var lyr_TRPRLCETESB2unid_501 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_501, 
                style: style_TRPRLCETESB2unid_501,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_501.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TCRAMunicipal14unid_502 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_502 = format_TCRAMunicipal14unid_502.readFeatures(json_TCRAMunicipal14unid_502, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_502 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_502.addFeatures(features_TCRAMunicipal14unid_502);
var lyr_TCRAMunicipal14unid_502 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_502, 
                style: style_TCRAMunicipal14unid_502,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_502.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_503 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_503 = format_TCRAMunicipal14unid_503.readFeatures(json_TCRAMunicipal14unid_503, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_503 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_503.addFeatures(features_TCRAMunicipal14unid_503);
var lyr_TCRAMunicipal14unid_503 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_503, 
                style: style_TCRAMunicipal14unid_503,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_503.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_504 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_504 = format_TCRACETESBPARCELAMENTO32unid_504.readFeatures(json_TCRACETESBPARCELAMENTO32unid_504, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_504 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_504.addFeatures(features_TCRACETESBPARCELAMENTO32unid_504);
var lyr_TCRACETESBPARCELAMENTO32unid_504 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_504, 
                style: style_TCRACETESBPARCELAMENTO32unid_504,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_504.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_505 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_505 = format_TCRACETESBPARCELAMENTO32unid_505.readFeatures(json_TCRACETESBPARCELAMENTO32unid_505, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_505 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_505.addFeatures(features_TCRACETESBPARCELAMENTO32unid_505);
var lyr_TCRACETESBPARCELAMENTO32unid_505 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_505, 
                style: style_TCRACETESBPARCELAMENTO32unid_505,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_505.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESB30unid_506 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_506 = format_TCRACETESB30unid_506.readFeatures(json_TCRACETESB30unid_506, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB30unid_506 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_506.addFeatures(features_TCRACETESB30unid_506);
var lyr_TCRACETESB30unid_506 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_506, 
                style: style_TCRACETESB30unid_506,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_506.png" /> TCRA CETESB (30 unid.)'
            });
var format_TCRACETESB30unid_507 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_507 = format_TCRACETESB30unid_507.readFeatures(json_TCRACETESB30unid_507, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB30unid_507 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_507.addFeatures(features_TCRACETESB30unid_507);
var lyr_TCRACETESB30unid_507 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_507, 
                style: style_TCRACETESB30unid_507,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_507.png" /> TCRA CETESB (30 unid.)'
            });
var format_TACMinistrioPblico9unid_508 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_508 = format_TACMinistrioPblico9unid_508.readFeatures(json_TACMinistrioPblico9unid_508, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_508 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_508.addFeatures(features_TACMinistrioPblico9unid_508);
var lyr_TACMinistrioPblico9unid_508 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_508, 
                style: style_TACMinistrioPblico9unid_508,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_508.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_509 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_509 = format_TACMinistrioPblico9unid_509.readFeatures(json_TACMinistrioPblico9unid_509, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_509 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_509.addFeatures(features_TACMinistrioPblico9unid_509);
var lyr_TACMinistrioPblico9unid_509 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_509, 
                style: style_TACMinistrioPblico9unid_509,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_509.png" /> TAC Ministério Público (9 unid.)'
            });
var format_PlantioVoluntrio1unid_510 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_510 = format_PlantioVoluntrio1unid_510.readFeatures(json_PlantioVoluntrio1unid_510, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_510 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_510.addFeatures(features_PlantioVoluntrio1unid_510);
var lyr_PlantioVoluntrio1unid_510 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_510, 
                style: style_PlantioVoluntrio1unid_510,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_510.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_511 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_511 = format_PlantioVoluntrio1unid_511.readFeatures(json_PlantioVoluntrio1unid_511, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_511 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_511.addFeatures(features_PlantioVoluntrio1unid_511);
var lyr_PlantioVoluntrio1unid_511 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_511, 
                style: style_PlantioVoluntrio1unid_511,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_511.png" /> Plantio Voluntário (1 unid.)'
            });
var format_CartaAnuncia21unid_512 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_512 = format_CartaAnuncia21unid_512.readFeatures(json_CartaAnuncia21unid_512, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia21unid_512 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_512.addFeatures(features_CartaAnuncia21unid_512);
var lyr_CartaAnuncia21unid_512 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_512, 
                style: style_CartaAnuncia21unid_512,
                popuplayertitle: 'Carta Anuência (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_512.png" /> Carta Anuência (21 unid.)'
            });
var format_CartaAnuncia21unid_513 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_513 = format_CartaAnuncia21unid_513.readFeatures(json_CartaAnuncia21unid_513, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia21unid_513 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_513.addFeatures(features_CartaAnuncia21unid_513);
var lyr_CartaAnuncia21unid_513 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_513, 
                style: style_CartaAnuncia21unid_513,
                popuplayertitle: 'Carta Anuência (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_513.png" /> Carta Anuência (21 unid.)'
            });
var format_AoCivilPblica1unid_514 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_514 = format_AoCivilPblica1unid_514.readFeatures(json_AoCivilPblica1unid_514, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_514 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_514.addFeatures(features_AoCivilPblica1unid_514);
var lyr_AoCivilPblica1unid_514 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_514, 
                style: style_AoCivilPblica1unid_514,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_514.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_515 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_515 = format_AoCivilPblica1unid_515.readFeatures(json_AoCivilPblica1unid_515, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_515 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_515.addFeatures(features_AoCivilPblica1unid_515);
var lyr_AoCivilPblica1unid_515 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_515, 
                style: style_AoCivilPblica1unid_515,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_515.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AdoteUmaPraa392unid38295094m_516 = new ol.format.GeoJSON();
var features_AdoteUmaPraa392unid38295094m_516 = format_AdoteUmaPraa392unid38295094m_516.readFeatures(json_AdoteUmaPraa392unid38295094m_516, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AdoteUmaPraa392unid38295094m_516 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdoteUmaPraa392unid38295094m_516.addFeatures(features_AdoteUmaPraa392unid38295094m_516);
var lyr_AdoteUmaPraa392unid38295094m_516 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdoteUmaPraa392unid38295094m_516, 
                style: style_AdoteUmaPraa392unid38295094m_516,
                popuplayertitle: 'Adote Uma Praça (392 unid. / 382.950,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/AdoteUmaPraa392unid38295094m_516.png" /> Adote Uma Praça (392 unid. / 382.950,94 m²)'
            });
var format_CPlacaDilu152unid15990431m_517 = new ol.format.GeoJSON();
var features_CPlacaDilu152unid15990431m_517 = format_CPlacaDilu152unid15990431m_517.readFeatures(json_CPlacaDilu152unid15990431m_517, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaDilu152unid15990431m_517 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaDilu152unid15990431m_517.addFeatures(features_CPlacaDilu152unid15990431m_517);
var lyr_CPlacaDilu152unid15990431m_517 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaDilu152unid15990431m_517, 
                style: style_CPlacaDilu152unid15990431m_517,
                popuplayertitle: 'C/ Placa - Dilu (152 unid. / 159.904,31 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaDilu152unid15990431m_517.png" /> C/ Placa - Dilu (152 unid. / 159.904,31 m²)'
            });
var format_CPlacaEgnaldo221unid22321870m_518 = new ol.format.GeoJSON();
var features_CPlacaEgnaldo221unid22321870m_518 = format_CPlacaEgnaldo221unid22321870m_518.readFeatures(json_CPlacaEgnaldo221unid22321870m_518, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CPlacaEgnaldo221unid22321870m_518 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPlacaEgnaldo221unid22321870m_518.addFeatures(features_CPlacaEgnaldo221unid22321870m_518);
var lyr_CPlacaEgnaldo221unid22321870m_518 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPlacaEgnaldo221unid22321870m_518, 
                style: style_CPlacaEgnaldo221unid22321870m_518,
                popuplayertitle: 'C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/CPlacaEgnaldo221unid22321870m_518.png" /> C/ Placa - Egnaldo (221 unid. / 223.218,70 m²)'
            });
var format_SPlacaDilu15unid751060m_519 = new ol.format.GeoJSON();
var features_SPlacaDilu15unid751060m_519 = format_SPlacaDilu15unid751060m_519.readFeatures(json_SPlacaDilu15unid751060m_519, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaDilu15unid751060m_519 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaDilu15unid751060m_519.addFeatures(features_SPlacaDilu15unid751060m_519);
var lyr_SPlacaDilu15unid751060m_519 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaDilu15unid751060m_519, 
                style: style_SPlacaDilu15unid751060m_519,
                popuplayertitle: 'S/ Placa - Dilu (15 unid. / 7.510,60 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaDilu15unid751060m_519.png" /> S/ Placa - Dilu (15 unid. / 7.510,60 m²)'
            });
var format_SPlacaEgnaldo4unid86447m_520 = new ol.format.GeoJSON();
var features_SPlacaEgnaldo4unid86447m_520 = format_SPlacaEgnaldo4unid86447m_520.readFeatures(json_SPlacaEgnaldo4unid86447m_520, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SPlacaEgnaldo4unid86447m_520 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPlacaEgnaldo4unid86447m_520.addFeatures(features_SPlacaEgnaldo4unid86447m_520);
var lyr_SPlacaEgnaldo4unid86447m_520 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPlacaEgnaldo4unid86447m_520, 
                style: style_SPlacaEgnaldo4unid86447m_520,
                popuplayertitle: 'S/ Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SPlacaEgnaldo4unid86447m_520.png" /> S/ Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_AdoteUmaPraa392unid38295094m_516,lyr_CPlacaDilu152unid15990431m_517,lyr_CPlacaEgnaldo221unid22321870m_518,lyr_SPlacaDilu15unid751060m_519,lyr_SPlacaEgnaldo4unid86447m_520,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_TRPRLCETESB2unid_500,lyr_TRPRLCETESB2unid_501,lyr_TCRAMunicipal14unid_502,lyr_TCRAMunicipal14unid_503,lyr_TCRACETESBPARCELAMENTO32unid_504,lyr_TCRACETESBPARCELAMENTO32unid_505,lyr_TCRACETESB30unid_506,lyr_TCRACETESB30unid_507,lyr_TACMinistrioPblico9unid_508,lyr_TACMinistrioPblico9unid_509,lyr_PlantioVoluntrio1unid_510,lyr_PlantioVoluntrio1unid_511,lyr_CartaAnuncia21unid_512,lyr_CartaAnuncia21unid_513,lyr_AoCivilPblica1unid_514,lyr_AoCivilPblica1unid_515,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP169unid239527816m_480,lyr_reaInstitucional371unid208395759m_481,lyr_reaPatrimonial69unid121924073m_482,lyr_reaVerde2117unid881307234m_483,lyr_readeUsoEspecial280unid271349968m_484,lyr_LoteamentoFechado146unid70632440m_485,lyr_Lote252unid7530210m_486,lyr_Lote252unid_487,lyr_LoteEdificao20unid508062m_488,lyr_LoteEdificao20unid_489,lyr_LeiloLEI97542025Homologado4unid334770m_490,lyr_LeiloLEI97542025Homologado4unid_491,lyr_LeiloLEI97542025Proc2652520256922unid352000m_492,lyr_LeiloLEI97542025Proc2652520256922unid_493,lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494,lyr_LeiloLEI97542025Proc7954202537196unid_495,lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496,lyr_LeiloLEI97542025Proc2198620254518unid_497,lyr_LoteEMDEF10unid218783m_498,lyr_LoteEMDEF10unid_499,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_Bairros383unidRegies9unid = new ol.layer.Group({
                                layers: [lyr_RegioCentroLeste42unid675453694m_471,lyr_RegioLesteNordeste50unid1233454938m_472,lyr_RegioNorteI45unid1043752016m_473,lyr_RegioNorteII36unid859331837m_474,lyr_RegioOesteI65unid1245065890m_475,lyr_RegioOesteII43unid599615871m_476,lyr_RegioSudeste38unid579321135m_477,lyr_RegioSudesteSul44unid830633497m_478,lyr_RegioSul20unid639964086m_479,],
                                fold: 'close',
                                title: 'Bairros (383 unid.) / Regiões (9 unid.)'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_CLASSE_I_461,lyr_CLASSE_II_462,lyr_CLASSE_IIIA_463,lyr_CLASSE_IIIB_464,lyr_CLASSE_IIIC_465,lyr_CLASSE_IVA_466,lyr_CLASSE_IVB_467,lyr_CLASSE_IVC_468,lyr_CLASSE_VA_469,lyr_CLASSE_VB_470,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_457,lyr_PBZPAEdifcioPrimeHELIPONTO_458,lyr_PBZPAHospitalHELIPONTO_459,lyr_PBZPAAeroporto_460,],
                                fold: 'close',
                                title: 'Controle Aéreo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_Gesso1unid_439,lyr_ResduosdeConstruoCivil7unid_440,lyr_ResduosVerdes1unid_441,lyr_ChapasdeRaioX1unid_442,lyr_Embalagensvaziasdeagrotxicos1unid_443,lyr_leodecozinhausado2unid_444,lyr_leolubrificanteusado1unid_445,lyr_Latasdetintametlicasvazias2unid_446,lyr_ResduosPerigosos1unid_447,lyr_Madeiras1unid_448,lyr_ResduosdeServiosdeSade21unid_449,lyr_PilhaseBaterias17unid_450,lyr_Pneus1unid_451,lyr_Lmpadas4unid_452,lyr_ResduosdeCouro1unid_453,lyr_ResduosEletrnicos2unid_454,lyr_ResduosReciclveis15unid_455,lyr_ResduosInservveis4unid_456,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_Voorocas27unid_434,lyr_LocaisDifcilAcessoreasRurais12unid_435,lyr_Contineres286unid_436,lyr_rvoreImuneaoCorte9unid_437,lyr_AcademiasaoArLivre84unid_438,],
                                fold: 'close',
                                title: 'Diversos'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_394,lyr_Drenagens_395,lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396,lyr_DRENAGEM_PROL_VILA_ISABEL_397,lyr_DRENAGEM_PROL_JARDIM_MARTINS_398,lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399,lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400,lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401,lyr_DRENAGEM_PARQUE_DOS_SABIAS_402,lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403,lyr_DRENAGEM_PARQUE_MOEMA_404,lyr_DRENAGEM_PARQUE_JOAO_LEITE_405,lyr_DRENAGEM_PARQUE_CASTELO_406,lyr_DRENAGEM_PARQUE_BOA_VISTA_407,lyr_DRENAGEM_PARAGON_408,lyr_DRENAGEM_NAIR_RETUSSI_I_409,lyr_DRENAGEM_JARDIM_NOEMIA_410,lyr_DRENAGEM_JARDIM_NATAL_411,lyr_DRENAGEM_JARDIM_MARTINS_412,lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413,lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414,lyr_DRENAGEM_JARDIM_PULICANO_415,lyr_DRENAGEM_JARDIM_PIRATININGA_416,lyr_DRENAGEM_JARDIM_PALMA_417,lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418,lyr_DRENAGEM_ATLANTA_PARK_419,lyr_DRENAGEM_DINFRA_II_420,lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421,lyr_DRENAGEM_RESIDENCIAL_GAIA_422,lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423,lyr_DRENAGEM_JARDIM_IPANEMA_424,lyr_DRENAGEM_JARDIM_LIBANO_425,lyr_DRENAGEM_JARDIM_BOTANICO_426,lyr_DRENAGEM_JARDIM_BARAO_427,lyr_DRENAGEM_JARDIM_AVIACAO_428,lyr_DRENAGEM_JARDIM_AEROPORTO_II_429,lyr_DRENAGEM_GRAMADOS_I_430,lyr_DRENAGEM_FRANCA_POLO_CLUBE_431,lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432,lyr_DRENAGEM_DOMINGOS_JARDINI_433,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_Ecopontos = new ol.layer.Group({
                                layers: [lyr_Proposto2unid_391,lyr_Emconstruo2unid_392,lyr_Emfuncionamento4unid_393,],
                                fold: 'close',
                                title: 'Ecopontos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN2_373,lyr_reaN1_374,lyr_reaN_375,lyr_ConjuntoHabitacional_376,lyr_AvdeacessoaoHortoeColgioAgrcola_377,lyr_reaK_378,lyr_reaJ_379,lyr_reaI_380,lyr_reaH_381,lyr_reaG_382,lyr_reaF_383,lyr_reaE_384,lyr_reaD_385,lyr_reaC_386,lyr_reaB_387,lyr_reaA_388,lyr_reaAverbada355235PartedareaG_389,lyr_reaaseraverbadaPartedareaG_390,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazMunicipal_362,lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363,lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364,lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365,lyr_reaBdaFazMunicipal_366,lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367,lyr_AntigoAterrodasMaritacas_368,lyr_AntigoAterroMaritacas1Etapa28unid_369,lyr_ParqueZumbidosPalmares_370,lyr_AntigoAterroMaritacas3Etapa5unid_371,lyr_AntigoAterroMaritacas2Etapa41unid_372,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_357,lyr_RiosDuplos84unid_358,lyr_MassasDgua270unid_359,lyr_RiosSimples1842unid_360,lyr_Nascentes821unid_361,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinos69unid_353,lyr_LoteamentosClandestinos69unid_354,lyr_FazendaPalestina105unid_355,lyr_FazendaPalestina105unid_356,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_129,lyr_Vivenna_130,lyr_VittaSoVicente_131,lyr_VittaSoVicente_132,lyr_VittaJardimSimes_133,lyr_VittaJardimSimes_134,lyr_VittaAlvorada_135,lyr_VittaAlvorada_136,lyr_VilaDiEspanha_137,lyr_VilaDiEspanha_138,lyr_VillaPucci_139,lyr_VillaPucci_140,lyr_VilaPiemonteII_141,lyr_VilaPiemonteII_142,lyr_VilaOlimpica_143,lyr_VilaOlimpica_144,lyr_VillaDoratta_145,lyr_VillaDoratta_146,lyr_VillaBella_147,lyr_VillaBella_148,lyr_Versalhes_149,lyr_Versalhes_150,lyr_TorontoResidence_151,lyr_TorontoResidence_152,lyr_TerraNova_153,lyr_TerraNova_154,lyr_Sonetto_155,lyr_Sonetto_156,lyr_SMARTFRANCAEIXORESIDENCIAL2_157,lyr_SMARTFRANCAEIXORESIDENCIAL2_158,lyr_SMARTFRANCAEIXORESIDENCIAL1_159,lyr_SMARTFRANCAEIXORESIDENCIAL1_160,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162,lyr_ServidoRamal138kVFranca4Guanabara_163,lyr_ServidoRamal138kVFranca4Guanabara_164,lyr_SantaLina_165,lyr_SantaLina_166,lyr_SantAnita_167,lyr_SantAnita_168,lyr_RuaAlfioBenedini_169,lyr_RuaAlfioBenedini_170,lyr_RuaAlfioBenedini_171,lyr_ResidencialValeVerde_172,lyr_ResidencialValeVerde_173,lyr_ResidencialYasminTorres_174,lyr_ResidencialYasminTorres_175,lyr_ResidencialTellini_176,lyr_ResidencialTellini_177,lyr_ResidencialSoCarlosII_178,lyr_ResidencialSoCarlosII_179,lyr_ResidencialSoCarlosI_180,lyr_ResidencialSoCarlosI_181,lyr_ResidencialSantaIns_182,lyr_ResidencialSantaIns_183,lyr_ResidencialSantaF_184,lyr_ResidencialSantaF_185,lyr_ResidencialQuintadosOitis_186,lyr_ResidencialQuintadosOitis_187,lyr_ResidencialQuintadoSol_188,lyr_ResidencialQuintadoSol_189,lyr_ResidencialPousoAlegreII_190,lyr_ResidencialPousoAlegreII_191,lyr_ResidencialPousoAlegre_192,lyr_ResidencialPousoAlegre_193,lyr_ResidencialPiamalim_194,lyr_ResidencialPiamalim_195,lyr_ResidencialParquedosPassaros_196,lyr_ResidencialParquedosPassaros_197,lyr_ResicencialNairRetuciII_198,lyr_ResicencialNairRetuciII_199,lyr_ResicencialNairRetuci_200,lyr_ResicencialNairRetuci_201,lyr_ResidencialMoradadoBosque_202,lyr_ResidencialMoradadoBosque_203,lyr_ResidencialMarthaHelena_204,lyr_ResidencialMarthaHelena_205,lyr_ResidencialMarioTasso_206,lyr_ResidencialMarioTasso_207,lyr_ResidencialMarianaAlarcon_208,lyr_ResidencialMarianaAlarcon_209,lyr_ResidencialJardimCanada_210,lyr_ResidencialJardimCanada_211,lyr_ResidencialJabuticabeiras_212,lyr_ResidencialJabuticabeiras_213,lyr_ResidencialGramadosII_214,lyr_ResidencialGramadosII_215,lyr_ResidencialGramados_216,lyr_ResidencialGramados_217,lyr_ResidencialGaia_218,lyr_ResidencialGaia_219,lyr_ResidencialFrutuoso_220,lyr_ResidencialFrutuoso_221,lyr_ResidencialFaggioni_222,lyr_ResidencialFaggioni_223,lyr_ResidencialEssenza_224,lyr_ResidencialEssenza_225,lyr_ResidencialDomingosJardini_226,lyr_ResidencialDomingosJardini_227,lyr_ResidencialCintraAlves_228,lyr_ResidencialCintraAlves_229,lyr_ResidencialBoaVista_230,lyr_ResidencialBoaVista_231,lyr_ResidencialAltodaFazenda_232,lyr_ResidencialAltodaFazenda_233,lyr_ResidencialAnaHelena_234,lyr_ResidencialAnaHelena_235,lyr_ReservaAbaete_236,lyr_ReservaAbaete_237,lyr_RecantoMeneghetti_238,lyr_RecantoMeneghetti_239,lyr_Quadra18VilaExposio_240,lyr_Quadra18VilaExposio_241,lyr_ProlongamentoSamelPark_242,lyr_ProlongamentoSamelPark_243,lyr_ParqueVillaLobos_244,lyr_ParqueVillaLobos_245,lyr_ParquePalmeiraImperial_246,lyr_ParquePalmeiraImperial_247,lyr_ParqueJacarand_248,lyr_ParqueJacarand_249,lyr_ParqueFlora_250,lyr_ParqueFlora_251,lyr_ParquedosSabias_252,lyr_ParquedosSabias_253,lyr_ParquedosCoqueiros_254,lyr_ParquedosCoqueiros_255,lyr_ParqueAlvorada_256,lyr_ParqueAlvorada_257,lyr_ParagonFaseII_258,lyr_ParagonFaseII_259,lyr_Paragon_260,lyr_Paragon_261,lyr_PalmeiraReal_262,lyr_PalmeiraReal_263,lyr_MoradadoVerdeII_264,lyr_MoradadoVerdeII_265,lyr_MoradadaMata_266,lyr_MoradadaMata_267,lyr_Monti_268,lyr_Monti_269,lyr_MontBlancResidence_270,lyr_MontBlancResidence_271,lyr_MasterplanDespaschoal_272,lyr_MasterplanDespaschoal_273,lyr_MasterplanDespaschoal_274,lyr_MasteplanBildVitta_275,lyr_MasteplanBildVitta_276,lyr_MasteplanBildVitta_277,lyr_Loteamentolamo_278,lyr_Loteamentolamo_279,lyr_JardimStephani_280,lyr_JardimStephani_281,lyr_JardimPherola_282,lyr_JardimPherola_283,lyr_JardimNatal_284,lyr_JardimNatal_285,lyr_JardimMariaLuiza_286,lyr_JardimMariaLuiza_287,lyr_JardimMariaAugusta_288,lyr_JardimMariaAugusta_289,lyr_JardimHorizonte_290,lyr_JardimHorizonte_291,lyr_JardimFlora_292,lyr_JardimFlora_293,lyr_IrineuZanetiII_294,lyr_IrineuZanetiII_295,lyr_Infratcnica_296,lyr_Infratcnica_297,lyr_HorizResidence_298,lyr_HorizResidence_299,lyr_GlebaNossaSenhoraAuxiliadora_300,lyr_GlebaNossaSenhoraAuxiliadora_301,lyr_Ferracini_302,lyr_Ferracini_303,lyr_FrancaB6_304,lyr_FrancaB6_305,lyr_FazendaProgresso_306,lyr_FazendaProgresso_307,lyr_FazendaeGranjaSantaRita2_308,lyr_FazendaeGranjaSantaRita2_309,lyr_FazendaeGranjaSantaRita_310,lyr_FazendaeGranjaSantaRita_311,lyr_Essence_312,lyr_Essence_313,lyr_Elias_314,lyr_Elias_315,lyr_EdifcioSolNascente_316,lyr_EdifcioSolNascente_317,lyr_EdifcioRuadoSol_318,lyr_EdifcioRuadoSol_319,lyr_EdifcioResidencialHope_320,lyr_EdifcioResidencialHope_321,lyr_DiocesedeFranca_322,lyr_DiocesedeFranca_323,lyr_DaVinci_324,lyr_DaVinci_325,lyr_CondomnioIICityPetrpolis_326,lyr_CondomnioIICityPetrpolis_327,lyr_CondomnioICityPetrpolis_328,lyr_CondomnioICityPetrpolis_329,lyr_Colorado_330,lyr_Colorado_331,lyr_CidadeJardim_332,lyr_CidadeJardim_333,lyr_ChacaraOlaria_334,lyr_ChacaraOlaria_335,lyr_ChacaraBelaVista_336,lyr_ChacaraBelaVista_337,lyr_BordadaMata_338,lyr_BordadaMata_339,lyr_Arteris_340,lyr_Arteris_341,lyr_ArterisFaixadeDomnioFrancaSP_3342_342,lyr_ArterisFaixadeDomnioFrancaSP_3452_343,lyr_ArterisFaixadeDomnioFrancaSPA_397334_344,lyr_Arizona_345,lyr_Arizona_346,lyr_AbuDhabiParadiseResortResidence_347,lyr_AbuDhabiParadiseResortResidence_348,lyr_EtapaAprovado43unid_349,lyr_EtapaDiretriz22unid_350,lyr_EtapaDefinitiva10unid_351,lyr_EtapaPrvia24unid_352,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_REURB9unid_127,lyr_REURB9unid_128,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBSdoJardimSantaBarbara_101,lyr_UBSdaVilaSantaTerezinha_102,lyr_UBSdoResidencialPeresElias_103,lyr_UBSdoParquedoHorto_104,lyr_UBSdoJardimPalma_105,lyr_RevitalizaodaEstaoFerroviria_106,lyr_readeLazerdoParqueContinental_107,lyr_readeLazerdoJardimPortinari_108,lyr_readeLazerdoParquedasEsmeraldas_109,lyr_ReforoEstruturaldoColgioChampagnat_110,lyr_ProntoSocorrolvaroAzzuz_111,lyr_Policlnica_112,lyr_RecapeamentodoJardimMartins_113,lyr_NovoNGA_114,lyr_EstabilizaodeTaludenoJardimBrasilndia_115,lyr_EscolaJooLiporoni_116,lyr_DrenagemdoCrregodosBagres_117,lyr_DrenagemdoCrregoCubato_118,lyr_DrenagemdoJardimPalmeiras_119,lyr_CrechedoSamelPark_120,lyr_CRASOeste_121,lyr_CRASNorte_122,lyr_CorpodeBombeiros_123,lyr_ContenoViria_124,lyr_CAPSInfantil_125,lyr_ObrasPblicas_126,],
                                fold: 'close',
                                title: 'Obras Públicas'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_PARQUE_DOS_TRABALHADORES_87,lyr_PARQUE_DOS_TRABALHADORES_88,lyr_JARDIM_ZOOBOTANICO_89,lyr_JARDIM_ZOOBOTANICO_90,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91,lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93,lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95,lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96,lyr_PARQUE_CAXAMBU_97,lyr_PARQUE_CAXAMBU_98,lyr_COMPLEXO_POLIESPORTIVO_99,lyr_COMPLEXO_POLIESPORTIVO_100,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado96unid_83,lyr_ImvelPrivado96unid_84,lyr_ImvelRural1unid_85,lyr_ImvelPblico125unid_86,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_80,lyr_EstradasRuraisMunicipais34unid_81,lyr_RodoviasMunicipais8unid_82,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_SecretariadeEducaoUnidadesEscolares = new ol.layer.Group({
                                layers: [lyr_AlfabetizaaodeJovenseAdultos15unid_67,lyr_AlmoxarifadoEducao1unid_68,lyr_CEIGustavoChereghiniBichuette1unid_69,lyr_Creche35unid_70,lyr_CrechePrEscola45unid_71,lyr_EdInfantil9unid_72,lyr_EdInfantilEnsFundamental39unid_73,lyr_EJA3unid_74,lyr_EnsFundamental3unid_75,lyr_EspaodeDifusoCientfica1unid_76,lyr_SecretariaMunicipaldeEducao1unid_77,lyr_SetordeMerenda1unid_78,lyr_UniversidadeAbertadoBrasilUAB1unid_79,],
                                fold: 'close',
                                title: 'Secretaria de Educação - Unidades Escolares'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_Arena3unid_48,lyr_Biblioteca1unid_49,lyr_Campo25unid_50,lyr_Casa1unid_51,lyr_Centro4unid_52,lyr_CEPEL12unid_53,lyr_Conjunto4unid_54,lyr_Estadio1unid_55,lyr_Ginsio5unid_56,lyr_Museu2unid_57,lyr_Parque2unid_58,lyr_Pavilho1unid_59,lyr_Pinacoteca1unid_60,lyr_Piscina1unid_61,lyr_Pista1unid_62,lyr_Praa3unid_63,lyr_Quadra3unid_64,lyr_Secretaria1unid_65,lyr_Teatro2unid_66,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_AtenoPrimria24unid_43,lyr_GestoAdministrativo3unid_44,lyr_UnidadedeUrgnciaeEmergncia8unid_45,lyr_ServiodeEspecialidadesDiagnstico14unid_46,lyr_VigilnciaemSade5unid_47,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_SistemaVirioExpansodosistemavirio_34,lyr_SistemaVirioRodovias_35,lyr_SistemaVirioRodoviasViasarteriais_36,lyr_SistemaVirioSistemavirioprincipal_37,lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38,lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39,lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40,lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41,lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_AEISreaEspecialdeInteresseSocial_21,lyr_AEPIreaEspecialPreferIndustrialeLogstica_22,lyr_AERUreaEspecialResidenciasUnifamiliares_23,lyr_reaEspecialLazerInteresseTursticoeCultural_24,lyr_MacrozonadoRioCanoas_25,lyr_SubMacrozonadeExpansoUrbana_26,lyr_SubMacrozonadeOcupaoPreferencial_27,lyr_SubMacrozonadeOcupaoRestrita_28,lyr_ExpUrbanaLCN0502003_29,lyr_ExpUrbanaLCN1402009_30,lyr_ExpUrbanaLCN2352013_31,lyr_ExpUrbanaLCN3242019_32,lyr_ExpUrbanaLeis4240199244201994eLC1002006_33,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARO_REMANESCENTES_FLORESTAIS_5,lyr_ARO_FAIXA_DE_CUESTAS_6,lyr_ARO_AREA_DE_AMORTECIMENTO_7,lyr_ARO_APP_8,lyr_ARA_INCONGRUENCIAS_EM_APP_9,lyr_ARA_ETE_LAGOAS_10,lyr_ARA_ATERROS_11,lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12,lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13,lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14,lyr_AOD_AUS_FASE_2_15,lyr_AOD_AUS_FASE_1_16,lyr_AOD_AREA_URBANA_CONSOLIDADA_17,lyr_LimitedaBaciadoRioCanoasLeiC4322024_18,lyr_LimitedaBaciadoRioCanoasLeiC1002006_19,lyr_DelimitaodaBaciadoRibeirodaOna_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_ZonaCartogrficaMapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_ARO_REMANESCENTES_FLORESTAIS_5.setVisible(false);lyr_ARO_FAIXA_DE_CUESTAS_6.setVisible(false);lyr_ARO_AREA_DE_AMORTECIMENTO_7.setVisible(false);lyr_ARO_APP_8.setVisible(false);lyr_ARA_INCONGRUENCIAS_EM_APP_9.setVisible(false);lyr_ARA_ETE_LAGOAS_10.setVisible(false);lyr_ARA_ATERROS_11.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13.setVisible(false);lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14.setVisible(false);lyr_AOD_AUS_FASE_2_15.setVisible(false);lyr_AOD_AUS_FASE_1_16.setVisible(false);lyr_AOD_AREA_URBANA_CONSOLIDADA_17.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_20.setVisible(false);lyr_AEISreaEspecialdeInteresseSocial_21.setVisible(false);lyr_AEPIreaEspecialPreferIndustrialeLogstica_22.setVisible(false);lyr_AERUreaEspecialResidenciasUnifamiliares_23.setVisible(false);lyr_reaEspecialLazerInteresseTursticoeCultural_24.setVisible(false);lyr_MacrozonadoRioCanoas_25.setVisible(false);lyr_SubMacrozonadeExpansoUrbana_26.setVisible(false);lyr_SubMacrozonadeOcupaoPreferencial_27.setVisible(false);lyr_SubMacrozonadeOcupaoRestrita_28.setVisible(false);lyr_ExpUrbanaLCN0502003_29.setVisible(false);lyr_ExpUrbanaLCN1402009_30.setVisible(false);lyr_ExpUrbanaLCN2352013_31.setVisible(false);lyr_ExpUrbanaLCN3242019_32.setVisible(false);lyr_ExpUrbanaLeis4240199244201994eLC1002006_33.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_34.setVisible(false);lyr_SistemaVirioRodovias_35.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_36.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_37.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.setVisible(false);lyr_AtenoPrimria24unid_43.setVisible(false);lyr_GestoAdministrativo3unid_44.setVisible(false);lyr_UnidadedeUrgnciaeEmergncia8unid_45.setVisible(false);lyr_ServiodeEspecialidadesDiagnstico14unid_46.setVisible(false);lyr_VigilnciaemSade5unid_47.setVisible(false);lyr_Arena3unid_48.setVisible(false);lyr_Biblioteca1unid_49.setVisible(false);lyr_Campo25unid_50.setVisible(false);lyr_Casa1unid_51.setVisible(false);lyr_Centro4unid_52.setVisible(false);lyr_CEPEL12unid_53.setVisible(false);lyr_Conjunto4unid_54.setVisible(false);lyr_Estadio1unid_55.setVisible(false);lyr_Ginsio5unid_56.setVisible(false);lyr_Museu2unid_57.setVisible(false);lyr_Parque2unid_58.setVisible(false);lyr_Pavilho1unid_59.setVisible(false);lyr_Pinacoteca1unid_60.setVisible(false);lyr_Piscina1unid_61.setVisible(false);lyr_Pista1unid_62.setVisible(false);lyr_Praa3unid_63.setVisible(false);lyr_Quadra3unid_64.setVisible(false);lyr_Secretaria1unid_65.setVisible(false);lyr_Teatro2unid_66.setVisible(false);lyr_AlfabetizaaodeJovenseAdultos15unid_67.setVisible(false);lyr_AlmoxarifadoEducao1unid_68.setVisible(false);lyr_CEIGustavoChereghiniBichuette1unid_69.setVisible(false);lyr_Creche35unid_70.setVisible(false);lyr_CrechePrEscola45unid_71.setVisible(false);lyr_EdInfantil9unid_72.setVisible(false);lyr_EdInfantilEnsFundamental39unid_73.setVisible(false);lyr_EJA3unid_74.setVisible(false);lyr_EnsFundamental3unid_75.setVisible(false);lyr_EspaodeDifusoCientfica1unid_76.setVisible(false);lyr_SecretariaMunicipaldeEducao1unid_77.setVisible(false);lyr_SetordeMerenda1unid_78.setVisible(false);lyr_UniversidadeAbertadoBrasilUAB1unid_79.setVisible(false);lyr_RodoviasEstaduais4unid_80.setVisible(false);lyr_EstradasRuraisMunicipais34unid_81.setVisible(false);lyr_RodoviasMunicipais8unid_82.setVisible(false);lyr_LotesImvelPrivado96unid_83.setVisible(false);lyr_ImvelPrivado96unid_84.setVisible(false);lyr_ImvelRural1unid_85.setVisible(false);lyr_ImvelPblico125unid_86.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_87.setVisible(false);lyr_PARQUE_DOS_TRABALHADORES_88.setVisible(false);lyr_JARDIM_ZOOBOTANICO_89.setVisible(false);lyr_JARDIM_ZOOBOTANICO_90.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.setVisible(false);lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.setVisible(false);lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.setVisible(false);lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.setVisible(false);lyr_PARQUE_CAXAMBU_97.setVisible(false);lyr_PARQUE_CAXAMBU_98.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_99.setVisible(false);lyr_COMPLEXO_POLIESPORTIVO_100.setVisible(false);lyr_UBSdoJardimSantaBarbara_101.setVisible(false);lyr_UBSdaVilaSantaTerezinha_102.setVisible(false);lyr_UBSdoResidencialPeresElias_103.setVisible(false);lyr_UBSdoParquedoHorto_104.setVisible(false);lyr_UBSdoJardimPalma_105.setVisible(false);lyr_RevitalizaodaEstaoFerroviria_106.setVisible(false);lyr_readeLazerdoParqueContinental_107.setVisible(false);lyr_readeLazerdoJardimPortinari_108.setVisible(false);lyr_readeLazerdoParquedasEsmeraldas_109.setVisible(false);lyr_ReforoEstruturaldoColgioChampagnat_110.setVisible(false);lyr_ProntoSocorrolvaroAzzuz_111.setVisible(false);lyr_Policlnica_112.setVisible(false);lyr_RecapeamentodoJardimMartins_113.setVisible(false);lyr_NovoNGA_114.setVisible(false);lyr_EstabilizaodeTaludenoJardimBrasilndia_115.setVisible(false);lyr_EscolaJooLiporoni_116.setVisible(false);lyr_DrenagemdoCrregodosBagres_117.setVisible(false);lyr_DrenagemdoCrregoCubato_118.setVisible(false);lyr_DrenagemdoJardimPalmeiras_119.setVisible(false);lyr_CrechedoSamelPark_120.setVisible(false);lyr_CRASOeste_121.setVisible(false);lyr_CRASNorte_122.setVisible(false);lyr_CorpodeBombeiros_123.setVisible(false);lyr_ContenoViria_124.setVisible(false);lyr_CAPSInfantil_125.setVisible(false);lyr_ObrasPblicas_126.setVisible(false);lyr_REURB9unid_127.setVisible(false);lyr_REURB9unid_128.setVisible(false);lyr_Vivenna_129.setVisible(false);lyr_Vivenna_130.setVisible(false);lyr_VittaSoVicente_131.setVisible(false);lyr_VittaSoVicente_132.setVisible(false);lyr_VittaJardimSimes_133.setVisible(false);lyr_VittaJardimSimes_134.setVisible(false);lyr_VittaAlvorada_135.setVisible(false);lyr_VittaAlvorada_136.setVisible(false);lyr_VilaDiEspanha_137.setVisible(false);lyr_VilaDiEspanha_138.setVisible(false);lyr_VillaPucci_139.setVisible(false);lyr_VillaPucci_140.setVisible(false);lyr_VilaPiemonteII_141.setVisible(false);lyr_VilaPiemonteII_142.setVisible(false);lyr_VilaOlimpica_143.setVisible(false);lyr_VilaOlimpica_144.setVisible(false);lyr_VillaDoratta_145.setVisible(false);lyr_VillaDoratta_146.setVisible(false);lyr_VillaBella_147.setVisible(false);lyr_VillaBella_148.setVisible(false);lyr_Versalhes_149.setVisible(false);lyr_Versalhes_150.setVisible(false);lyr_TorontoResidence_151.setVisible(false);lyr_TorontoResidence_152.setVisible(false);lyr_TerraNova_153.setVisible(false);lyr_TerraNova_154.setVisible(false);lyr_Sonetto_155.setVisible(false);lyr_Sonetto_156.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_157.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_158.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_159.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_160.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_163.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_164.setVisible(false);lyr_SantaLina_165.setVisible(false);lyr_SantaLina_166.setVisible(false);lyr_SantAnita_167.setVisible(false);lyr_SantAnita_168.setVisible(false);lyr_RuaAlfioBenedini_169.setVisible(false);lyr_RuaAlfioBenedini_170.setVisible(false);lyr_RuaAlfioBenedini_171.setVisible(false);lyr_ResidencialValeVerde_172.setVisible(false);lyr_ResidencialValeVerde_173.setVisible(false);lyr_ResidencialYasminTorres_174.setVisible(false);lyr_ResidencialYasminTorres_175.setVisible(false);lyr_ResidencialTellini_176.setVisible(false);lyr_ResidencialTellini_177.setVisible(false);lyr_ResidencialSoCarlosII_178.setVisible(false);lyr_ResidencialSoCarlosII_179.setVisible(false);lyr_ResidencialSoCarlosI_180.setVisible(false);lyr_ResidencialSoCarlosI_181.setVisible(false);lyr_ResidencialSantaIns_182.setVisible(false);lyr_ResidencialSantaIns_183.setVisible(false);lyr_ResidencialSantaF_184.setVisible(false);lyr_ResidencialSantaF_185.setVisible(false);lyr_ResidencialQuintadosOitis_186.setVisible(false);lyr_ResidencialQuintadosOitis_187.setVisible(false);lyr_ResidencialQuintadoSol_188.setVisible(false);lyr_ResidencialQuintadoSol_189.setVisible(false);lyr_ResidencialPousoAlegreII_190.setVisible(false);lyr_ResidencialPousoAlegreII_191.setVisible(false);lyr_ResidencialPousoAlegre_192.setVisible(false);lyr_ResidencialPousoAlegre_193.setVisible(false);lyr_ResidencialPiamalim_194.setVisible(false);lyr_ResidencialPiamalim_195.setVisible(false);lyr_ResidencialParquedosPassaros_196.setVisible(false);lyr_ResidencialParquedosPassaros_197.setVisible(false);lyr_ResicencialNairRetuciII_198.setVisible(false);lyr_ResicencialNairRetuciII_199.setVisible(false);lyr_ResicencialNairRetuci_200.setVisible(false);lyr_ResicencialNairRetuci_201.setVisible(false);lyr_ResidencialMoradadoBosque_202.setVisible(false);lyr_ResidencialMoradadoBosque_203.setVisible(false);lyr_ResidencialMarthaHelena_204.setVisible(false);lyr_ResidencialMarthaHelena_205.setVisible(false);lyr_ResidencialMarioTasso_206.setVisible(false);lyr_ResidencialMarioTasso_207.setVisible(false);lyr_ResidencialMarianaAlarcon_208.setVisible(false);lyr_ResidencialMarianaAlarcon_209.setVisible(false);lyr_ResidencialJardimCanada_210.setVisible(false);lyr_ResidencialJardimCanada_211.setVisible(false);lyr_ResidencialJabuticabeiras_212.setVisible(false);lyr_ResidencialJabuticabeiras_213.setVisible(false);lyr_ResidencialGramadosII_214.setVisible(false);lyr_ResidencialGramadosII_215.setVisible(false);lyr_ResidencialGramados_216.setVisible(false);lyr_ResidencialGramados_217.setVisible(false);lyr_ResidencialGaia_218.setVisible(false);lyr_ResidencialGaia_219.setVisible(false);lyr_ResidencialFrutuoso_220.setVisible(false);lyr_ResidencialFrutuoso_221.setVisible(false);lyr_ResidencialFaggioni_222.setVisible(false);lyr_ResidencialFaggioni_223.setVisible(false);lyr_ResidencialEssenza_224.setVisible(false);lyr_ResidencialEssenza_225.setVisible(false);lyr_ResidencialDomingosJardini_226.setVisible(false);lyr_ResidencialDomingosJardini_227.setVisible(false);lyr_ResidencialCintraAlves_228.setVisible(false);lyr_ResidencialCintraAlves_229.setVisible(false);lyr_ResidencialBoaVista_230.setVisible(false);lyr_ResidencialBoaVista_231.setVisible(false);lyr_ResidencialAltodaFazenda_232.setVisible(false);lyr_ResidencialAltodaFazenda_233.setVisible(false);lyr_ResidencialAnaHelena_234.setVisible(false);lyr_ResidencialAnaHelena_235.setVisible(false);lyr_ReservaAbaete_236.setVisible(false);lyr_ReservaAbaete_237.setVisible(false);lyr_RecantoMeneghetti_238.setVisible(false);lyr_RecantoMeneghetti_239.setVisible(false);lyr_Quadra18VilaExposio_240.setVisible(false);lyr_Quadra18VilaExposio_241.setVisible(false);lyr_ProlongamentoSamelPark_242.setVisible(false);lyr_ProlongamentoSamelPark_243.setVisible(false);lyr_ParqueVillaLobos_244.setVisible(false);lyr_ParqueVillaLobos_245.setVisible(false);lyr_ParquePalmeiraImperial_246.setVisible(false);lyr_ParquePalmeiraImperial_247.setVisible(false);lyr_ParqueJacarand_248.setVisible(false);lyr_ParqueJacarand_249.setVisible(false);lyr_ParqueFlora_250.setVisible(false);lyr_ParqueFlora_251.setVisible(false);lyr_ParquedosSabias_252.setVisible(false);lyr_ParquedosSabias_253.setVisible(false);lyr_ParquedosCoqueiros_254.setVisible(false);lyr_ParquedosCoqueiros_255.setVisible(false);lyr_ParqueAlvorada_256.setVisible(false);lyr_ParqueAlvorada_257.setVisible(false);lyr_ParagonFaseII_258.setVisible(false);lyr_ParagonFaseII_259.setVisible(false);lyr_Paragon_260.setVisible(false);lyr_Paragon_261.setVisible(false);lyr_PalmeiraReal_262.setVisible(false);lyr_PalmeiraReal_263.setVisible(false);lyr_MoradadoVerdeII_264.setVisible(false);lyr_MoradadoVerdeII_265.setVisible(false);lyr_MoradadaMata_266.setVisible(false);lyr_MoradadaMata_267.setVisible(false);lyr_Monti_268.setVisible(false);lyr_Monti_269.setVisible(false);lyr_MontBlancResidence_270.setVisible(false);lyr_MontBlancResidence_271.setVisible(false);lyr_MasterplanDespaschoal_272.setVisible(false);lyr_MasterplanDespaschoal_273.setVisible(false);lyr_MasterplanDespaschoal_274.setVisible(false);lyr_MasteplanBildVitta_275.setVisible(false);lyr_MasteplanBildVitta_276.setVisible(false);lyr_MasteplanBildVitta_277.setVisible(false);lyr_Loteamentolamo_278.setVisible(false);lyr_Loteamentolamo_279.setVisible(false);lyr_JardimStephani_280.setVisible(false);lyr_JardimStephani_281.setVisible(false);lyr_JardimPherola_282.setVisible(false);lyr_JardimPherola_283.setVisible(false);lyr_JardimNatal_284.setVisible(false);lyr_JardimNatal_285.setVisible(false);lyr_JardimMariaLuiza_286.setVisible(false);lyr_JardimMariaLuiza_287.setVisible(false);lyr_JardimMariaAugusta_288.setVisible(false);lyr_JardimMariaAugusta_289.setVisible(false);lyr_JardimHorizonte_290.setVisible(false);lyr_JardimHorizonte_291.setVisible(false);lyr_JardimFlora_292.setVisible(false);lyr_JardimFlora_293.setVisible(false);lyr_IrineuZanetiII_294.setVisible(false);lyr_IrineuZanetiII_295.setVisible(false);lyr_Infratcnica_296.setVisible(false);lyr_Infratcnica_297.setVisible(false);lyr_HorizResidence_298.setVisible(false);lyr_HorizResidence_299.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_300.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_301.setVisible(false);lyr_Ferracini_302.setVisible(false);lyr_Ferracini_303.setVisible(false);lyr_FrancaB6_304.setVisible(false);lyr_FrancaB6_305.setVisible(false);lyr_FazendaProgresso_306.setVisible(false);lyr_FazendaProgresso_307.setVisible(false);lyr_FazendaeGranjaSantaRita2_308.setVisible(false);lyr_FazendaeGranjaSantaRita2_309.setVisible(false);lyr_FazendaeGranjaSantaRita_310.setVisible(false);lyr_FazendaeGranjaSantaRita_311.setVisible(false);lyr_Essence_312.setVisible(false);lyr_Essence_313.setVisible(false);lyr_Elias_314.setVisible(false);lyr_Elias_315.setVisible(false);lyr_EdifcioSolNascente_316.setVisible(false);lyr_EdifcioSolNascente_317.setVisible(false);lyr_EdifcioRuadoSol_318.setVisible(false);lyr_EdifcioRuadoSol_319.setVisible(false);lyr_EdifcioResidencialHope_320.setVisible(false);lyr_EdifcioResidencialHope_321.setVisible(false);lyr_DiocesedeFranca_322.setVisible(false);lyr_DiocesedeFranca_323.setVisible(false);lyr_DaVinci_324.setVisible(false);lyr_DaVinci_325.setVisible(false);lyr_CondomnioIICityPetrpolis_326.setVisible(false);lyr_CondomnioIICityPetrpolis_327.setVisible(false);lyr_CondomnioICityPetrpolis_328.setVisible(false);lyr_CondomnioICityPetrpolis_329.setVisible(false);lyr_Colorado_330.setVisible(false);lyr_Colorado_331.setVisible(false);lyr_CidadeJardim_332.setVisible(false);lyr_CidadeJardim_333.setVisible(false);lyr_ChacaraOlaria_334.setVisible(false);lyr_ChacaraOlaria_335.setVisible(false);lyr_ChacaraBelaVista_336.setVisible(false);lyr_ChacaraBelaVista_337.setVisible(false);lyr_BordadaMata_338.setVisible(false);lyr_BordadaMata_339.setVisible(false);lyr_Arteris_340.setVisible(false);lyr_Arteris_341.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3342_342.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3452_343.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSPA_397334_344.setVisible(false);lyr_Arizona_345.setVisible(false);lyr_Arizona_346.setVisible(false);lyr_AbuDhabiParadiseResortResidence_347.setVisible(false);lyr_AbuDhabiParadiseResortResidence_348.setVisible(false);lyr_EtapaAprovado43unid_349.setVisible(false);lyr_EtapaDiretriz22unid_350.setVisible(false);lyr_EtapaDefinitiva10unid_351.setVisible(false);lyr_EtapaPrvia24unid_352.setVisible(false);lyr_LoteamentosClandestinos69unid_353.setVisible(false);lyr_LoteamentosClandestinos69unid_354.setVisible(false);lyr_FazendaPalestina105unid_355.setVisible(false);lyr_FazendaPalestina105unid_356.setVisible(false);lyr_APP1745unid_357.setVisible(false);lyr_RiosDuplos84unid_358.setVisible(false);lyr_MassasDgua270unid_359.setVisible(false);lyr_RiosSimples1842unid_360.setVisible(false);lyr_Nascentes821unid_361.setVisible(false);lyr_AntigoAterrodaFazMunicipal_362.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.setVisible(false);lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.setVisible(false);lyr_reaBdaFazMunicipal_366.setVisible(false);lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367.setVisible(false);lyr_AntigoAterrodasMaritacas_368.setVisible(false);lyr_AntigoAterroMaritacas1Etapa28unid_369.setVisible(false);lyr_ParqueZumbidosPalmares_370.setVisible(false);lyr_AntigoAterroMaritacas3Etapa5unid_371.setVisible(false);lyr_AntigoAterroMaritacas2Etapa41unid_372.setVisible(false);lyr_reaN2_373.setVisible(false);lyr_reaN1_374.setVisible(false);lyr_reaN_375.setVisible(false);lyr_ConjuntoHabitacional_376.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_377.setVisible(false);lyr_reaK_378.setVisible(false);lyr_reaJ_379.setVisible(false);lyr_reaI_380.setVisible(false);lyr_reaH_381.setVisible(false);lyr_reaG_382.setVisible(false);lyr_reaF_383.setVisible(false);lyr_reaE_384.setVisible(false);lyr_reaD_385.setVisible(false);lyr_reaC_386.setVisible(false);lyr_reaB_387.setVisible(false);lyr_reaA_388.setVisible(false);lyr_reaAverbada355235PartedareaG_389.setVisible(false);lyr_reaaseraverbadaPartedareaG_390.setVisible(false);lyr_Proposto2unid_391.setVisible(false);lyr_Emconstruo2unid_392.setVisible(false);lyr_Emfuncionamento4unid_393.setVisible(false);lyr_DrenagensExistentes_394.setVisible(false);lyr_Drenagens_395.setVisible(false);lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.setVisible(false);lyr_DRENAGEM_PROL_VILA_ISABEL_397.setVisible(false);lyr_DRENAGEM_PROL_JARDIM_MARTINS_398.setVisible(false);lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.setVisible(false);lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400.setVisible(false);lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_SABIAS_402.setVisible(false);lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.setVisible(false);lyr_DRENAGEM_PARQUE_MOEMA_404.setVisible(false);lyr_DRENAGEM_PARQUE_JOAO_LEITE_405.setVisible(false);lyr_DRENAGEM_PARQUE_CASTELO_406.setVisible(false);lyr_DRENAGEM_PARQUE_BOA_VISTA_407.setVisible(false);lyr_DRENAGEM_PARAGON_408.setVisible(false);lyr_DRENAGEM_NAIR_RETUSSI_I_409.setVisible(false);lyr_DRENAGEM_JARDIM_NOEMIA_410.setVisible(false);lyr_DRENAGEM_JARDIM_NATAL_411.setVisible(false);lyr_DRENAGEM_JARDIM_MARTINS_412.setVisible(false);lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413.setVisible(false);lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414.setVisible(false);lyr_DRENAGEM_JARDIM_PULICANO_415.setVisible(false);lyr_DRENAGEM_JARDIM_PIRATININGA_416.setVisible(false);lyr_DRENAGEM_JARDIM_PALMA_417.setVisible(false);lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.setVisible(false);lyr_DRENAGEM_ATLANTA_PARK_419.setVisible(false);lyr_DRENAGEM_DINFRA_II_420.setVisible(false);lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_GAIA_422.setVisible(false);lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423.setVisible(false);lyr_DRENAGEM_JARDIM_IPANEMA_424.setVisible(false);lyr_DRENAGEM_JARDIM_LIBANO_425.setVisible(false);lyr_DRENAGEM_JARDIM_BOTANICO_426.setVisible(false);lyr_DRENAGEM_JARDIM_BARAO_427.setVisible(false);lyr_DRENAGEM_JARDIM_AVIACAO_428.setVisible(false);lyr_DRENAGEM_JARDIM_AEROPORTO_II_429.setVisible(false);lyr_DRENAGEM_GRAMADOS_I_430.setVisible(false);lyr_DRENAGEM_FRANCA_POLO_CLUBE_431.setVisible(false);lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.setVisible(false);lyr_DRENAGEM_DOMINGOS_JARDINI_433.setVisible(false);lyr_Voorocas27unid_434.setVisible(false);lyr_LocaisDifcilAcessoreasRurais12unid_435.setVisible(false);lyr_Contineres286unid_436.setVisible(false);lyr_rvoreImuneaoCorte9unid_437.setVisible(false);lyr_AcademiasaoArLivre84unid_438.setVisible(false);lyr_Gesso1unid_439.setVisible(false);lyr_ResduosdeConstruoCivil7unid_440.setVisible(false);lyr_ResduosVerdes1unid_441.setVisible(false);lyr_ChapasdeRaioX1unid_442.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_443.setVisible(false);lyr_leodecozinhausado2unid_444.setVisible(false);lyr_leolubrificanteusado1unid_445.setVisible(false);lyr_Latasdetintametlicasvazias2unid_446.setVisible(false);lyr_ResduosPerigosos1unid_447.setVisible(false);lyr_Madeiras1unid_448.setVisible(false);lyr_ResduosdeServiosdeSade21unid_449.setVisible(false);lyr_PilhaseBaterias17unid_450.setVisible(false);lyr_Pneus1unid_451.setVisible(false);lyr_Lmpadas4unid_452.setVisible(false);lyr_ResduosdeCouro1unid_453.setVisible(false);lyr_ResduosEletrnicos2unid_454.setVisible(false);lyr_ResduosReciclveis15unid_455.setVisible(false);lyr_ResduosInservveis4unid_456.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_457.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_458.setVisible(false);lyr_PBZPAHospitalHELIPONTO_459.setVisible(false);lyr_PBZPAAeroporto_460.setVisible(false);lyr_CLASSE_I_461.setVisible(false);lyr_CLASSE_II_462.setVisible(false);lyr_CLASSE_IIIA_463.setVisible(false);lyr_CLASSE_IIIB_464.setVisible(false);lyr_CLASSE_IIIC_465.setVisible(false);lyr_CLASSE_IVA_466.setVisible(false);lyr_CLASSE_IVB_467.setVisible(false);lyr_CLASSE_IVC_468.setVisible(false);lyr_CLASSE_VA_469.setVisible(false);lyr_CLASSE_VB_470.setVisible(false);lyr_RegioCentroLeste42unid675453694m_471.setVisible(false);lyr_RegioLesteNordeste50unid1233454938m_472.setVisible(false);lyr_RegioNorteI45unid1043752016m_473.setVisible(false);lyr_RegioNorteII36unid859331837m_474.setVisible(false);lyr_RegioOesteI65unid1245065890m_475.setVisible(false);lyr_RegioOesteII43unid599615871m_476.setVisible(false);lyr_RegioSudeste38unid579321135m_477.setVisible(false);lyr_RegioSudesteSul44unid830633497m_478.setVisible(false);lyr_RegioSul20unid639964086m_479.setVisible(false);lyr_APP169unid239527816m_480.setVisible(false);lyr_reaInstitucional371unid208395759m_481.setVisible(false);lyr_reaPatrimonial69unid121924073m_482.setVisible(false);lyr_reaVerde2117unid881307234m_483.setVisible(false);lyr_readeUsoEspecial280unid271349968m_484.setVisible(false);lyr_LoteamentoFechado146unid70632440m_485.setVisible(false);lyr_Lote252unid7530210m_486.setVisible(false);lyr_Lote252unid_487.setVisible(false);lyr_LoteEdificao20unid508062m_488.setVisible(false);lyr_LoteEdificao20unid_489.setVisible(false);lyr_LeiloLEI97542025Homologado4unid334770m_490.setVisible(false);lyr_LeiloLEI97542025Homologado4unid_491.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid352000m_492.setVisible(false);lyr_LeiloLEI97542025Proc2652520256922unid_493.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494.setVisible(false);lyr_LeiloLEI97542025Proc7954202537196unid_495.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496.setVisible(false);lyr_LeiloLEI97542025Proc2198620254518unid_497.setVisible(false);lyr_LoteEMDEF10unid218783m_498.setVisible(false);lyr_LoteEMDEF10unid_499.setVisible(false);lyr_TRPRLCETESB2unid_500.setVisible(false);lyr_TRPRLCETESB2unid_501.setVisible(false);lyr_TCRAMunicipal14unid_502.setVisible(false);lyr_TCRAMunicipal14unid_503.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_504.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_505.setVisible(false);lyr_TCRACETESB30unid_506.setVisible(false);lyr_TCRACETESB30unid_507.setVisible(false);lyr_TACMinistrioPblico9unid_508.setVisible(false);lyr_TACMinistrioPblico9unid_509.setVisible(false);lyr_PlantioVoluntrio1unid_510.setVisible(false);lyr_PlantioVoluntrio1unid_511.setVisible(false);lyr_CartaAnuncia21unid_512.setVisible(false);lyr_CartaAnuncia21unid_513.setVisible(false);lyr_AoCivilPblica1unid_514.setVisible(false);lyr_AoCivilPblica1unid_515.setVisible(false);lyr_AdoteUmaPraa392unid38295094m_516.setVisible(false);lyr_CPlacaDilu152unid15990431m_517.setVisible(false);lyr_CPlacaEgnaldo221unid22321870m_518.setVisible(false);lyr_SPlacaDilu15unid751060m_519.setVisible(false);lyr_SPlacaEgnaldo4unid86447m_520.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_SecretariadeSade,group_SecretariadeEsporteeCultura,group_SecretariadeEducaoUnidadesEscolares,group_RodoviaseEstradas,group_PontosViciados,group_ParquesdeFranca,group_ObrasPblicas,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Ecopontos,group_Drenagem,group_Diversos,group_DescarteCorretodeResduos,group_ControleAreo,group_ClassesdeRiscoIPT,group_Bairros383unidRegies9unid,group_reasPblicas,group_reasCompromissadas,group_ProgramaAdoteUmaPraa];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_ARO_REMANESCENTES_FLORESTAIS_5.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_FAIXA_DE_CUESTAS_6.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_AREA_DE_AMORTECIMENTO_7.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARO_APP_8.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_INCONGRUENCIAS_EM_APP_9.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_ETE_LAGOAS_10.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_ARA_ATERROS_11.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AUS_FASE_2_15.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AUS_FASE_1_16.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_17.set('fieldAliases', {'fid': 'fid', 'SUBCLASSE': 'Subclasse', 'AREA_M2': 'Área (m²)', 'CLASSE': 'Classe', 'DESCRICAO_SUBCLASSE': 'DESCRICAO_SUBCLASSE', 'DESCRICAO_CLASSE': 'DESCRICAO_CLASSE', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldAliases', {'fid': 'fid', 'area_km2': 'area_km2', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldAliases', {'fid': 'fid', 'area_km2': 'area_km2', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AEISreaEspecialdeInteresseSocial_21.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_22.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_AERUreaEspecialResidenciasUnifamiliares_23.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_reaEspecialLazerInteresseTursticoeCultural_24.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_MacrozonadoRioCanoas_25.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_SubMacrozonadeExpansoUrbana_26.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_SubMacrozonadeOcupaoPreferencial_27.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_SubMacrozonadeOcupaoRestrita_28.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_ExpUrbanaLCN0502003_29.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN1402009_30.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN2352013_31.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLCN3242019_32.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_33.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodovias_35.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_AtenoPrimria24unid_43.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_GestoAdministrativo3unid_44.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_UnidadedeUrgnciaeEmergncia8unid_45.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_ServiodeEspecialidadesDiagnstico14unid_46.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_VigilnciaemSade5unid_47.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_Arena3unid_48.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Biblioteca1unid_49.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Campo25unid_50.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Casa1unid_51.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Centro4unid_52.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_CEPEL12unid_53.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Conjunto4unid_54.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Estadio1unid_55.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Ginsio5unid_56.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Museu2unid_57.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Parque2unid_58.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Pavilho1unid_59.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Pinacoteca1unid_60.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Piscina1unid_61.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Pista1unid_62.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Praa3unid_63.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Quadra3unid_64.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Secretaria1unid_65.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_Teatro2unid_66.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_AlfabetizaaodeJovenseAdultos15unid_67.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_AlmoxarifadoEducao1unid_68.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_CEIGustavoChereghiniBichuette1unid_69.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_Creche35unid_70.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_CrechePrEscola45unid_71.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_EdInfantil9unid_72.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_EdInfantilEnsFundamental39unid_73.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_EJA3unid_74.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_EnsFundamental3unid_75.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_EspaodeDifusoCientfica1unid_76.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_SecretariaMunicipaldeEducao1unid_77.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_SetordeMerenda1unid_78.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UniversidadeAbertadoBrasilUAB1unid_79.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_RodoviasEstaduais4unid_80.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_82.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_LotesImvelPrivado96unid_83.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', '_BAIRRO': '_BAIRRO', '_RUA': '_RUA', '_processo_seinfra': 'Processo SEINFRA', '_processo_sms': 'Processo SMS', '_processo_mp': 'Pocesso MP', '_processo_smseg': 'Processo SMSEG', '_outros_processos': 'Outos Processos', '_data_inclusao': 'Data de Inclusão', });
lyr_ImvelPrivado96unid_84.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_ImvelRural1unid_85.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_ImvelPblico125unid_86.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', 'REGIAO': 'REGIAO', });
lyr_PARQUE_DOS_TRABALHADORES_87.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_JARDIM_ZOOBOTANICO_89.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_JARDIM_ZOOBOTANICO_90.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_97.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_PARQUE_CAXAMBU_98.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_COMPLEXO_POLIESPORTIVO_99.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'DESCRICAO': 'Descrição', });
lyr_UBSdoJardimSantaBarbara_101.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdaVilaSantaTerezinha_102.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoResidencialPeresElias_103.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoParquedoHorto_104.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoJardimPalma_105.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_RevitalizaodaEstaoFerroviria_106.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoParqueContinental_107.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoJardimPortinari_108.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoParquedasEsmeraldas_109.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ReforoEstruturaldoColgioChampagnat_110.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ProntoSocorrolvaroAzzuz_111.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_Policlnica_112.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_RecapeamentodoJardimMartins_113.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_NovoNGA_114.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_115.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_EscolaJooLiporoni_116.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoCrregodosBagres_117.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoCrregoCubato_118.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoJardimPalmeiras_119.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CrechedoSamelPark_120.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CRASOeste_121.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CRASNorte_122.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CorpodeBombeiros_123.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ContenoViria_124.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CAPSInfantil_125.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ObrasPblicas_126.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_REURB9unid_127.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURB9unid_128.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_Vivenna_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaPiemonteII_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaOlimpica_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_163.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_171.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialTellini_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPiamalim_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialParquedosPassaros_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramadosII_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGramados_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialGaia_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFaggioni_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAnaHelena_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ReservaAbaete_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_242.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_243.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_244.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_245.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_246.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_247.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_248.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_249.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_250.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_251.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_252.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_253.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_254.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosCoqueiros_255.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_256.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueAlvorada_257.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_258.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_259.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_260.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_261.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_262.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_263.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_264.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_265.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_266.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_267.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_268.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_269.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_270.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_271.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_272.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_273.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_274.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_275.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_276.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_277.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_Loteamentolamo_278.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_279.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_280.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimStephani_281.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_282.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_283.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimNatal_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_288.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaAugusta_289.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_291.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_292.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_293.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_294.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_295.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_296.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_297.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_298.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_299.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_300.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_302.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_303.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_304.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_305.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_306.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_307.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_308.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_310.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_311.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_312.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_313.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_314.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_315.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_316.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_317.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_318.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_319.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_320.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_321.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_322.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_323.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_324.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_325.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_326.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_327.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_328.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_329.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_330.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_331.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_332.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_333.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_334.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_335.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_336.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_337.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_338.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_339.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_340.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_341.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_342.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_343.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_344.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_Arizona_345.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_346.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_347.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado43unid_349.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_350.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva10unid_351.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_352.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_LoteamentosClandestinos69unid_353.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinos69unid_354.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_FazendaPalestina105unid_355.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_FazendaPalestina105unid_356.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_APP1745unid_357.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_358.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_359.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_360.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_361.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazMunicipal_362.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_reaBdaFazMunicipal_366.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_368.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas1Etapa28unid_369.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_370.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterroMaritacas3Etapa5unid_371.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterroMaritacas2Etapa41unid_372.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_reaN2_373.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN1_374.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN_375.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_376.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_377.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_378.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_379.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_380.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_381.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_382.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_383.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_384.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_385.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_386.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_387.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_388.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235PartedareaG_389.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_390.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_Proposto2unid_391.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_Emconstruo2unid_392.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_Emfuncionamento4unid_393.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_DrenagensExistentes_394.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_395.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_VILA_ISABEL_397.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_398.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_402.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_MOEMA_404.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_405.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_CASTELO_406.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_407.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARAGON_408.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_NAIR_RETUSSI_I_409.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOEMIA_410.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NATAL_411.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARTINS_412.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PULICANO_415.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PIRATININGA_416.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_PALMA_417.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_ATLANTA_PARK_419.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DINFRA_II_420.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_422.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_IPANEMA_424.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_LIBANO_425.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BOTANICO_426.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_BARAO_427.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AVIACAO_428.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_429.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_GRAMADOS_I_430.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_431.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_DRENAGEM_DOMINGOS_JARDINI_433.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'CLASSE', });
lyr_Voorocas27unid_434.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LocaisDifcilAcessoreasRurais12unid_435.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_Contineres286unid_436.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_437.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_AcademiasaoArLivre84unid_438.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_Gesso1unid_439.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_440.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_441.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_442.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_443.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_444.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_445.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_446.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_447.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_448.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_449.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias17unid_450.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_451.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_452.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_453.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_454.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_455.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_456.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PBZPAEdifcioPrimeHELIPONTO_457.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_458.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_459.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAAeroporto_460.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CLASSE_I_461.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_II_462.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIA_463.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIB_464.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IIIC_465.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVA_466.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVB_467.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_IVC_468.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_VA_469.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_CLASSE_VB_470.set('fieldAliases', {'fid': 'fid', 'CLASSE': 'Classe', 'RISCO_DE_EROSAO': 'RISCO_DE_EROSAO', 'SUSCETIBILIDADE_DO_SOLO': 'SUSCETIBILIDADE_DO_SOLO', 'USO_DO_SOLO': 'USO_DO_SOLO', 'SETORES_DO_RELEVO': 'SETORES_DO_RELEVO', 'SOLOS_PREDOMINANTES': 'SOLOS_PREDOMINANTES', 'SUBSTRATO_ROCHOSO': 'SUBSTRATO_ROCHOSO', 'PROCESSOS_EROSIVOS_EXISTENTES': 'PROCESSOS_EROSIVOS_EXISTENTES', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'RECOMENDACOES_PARA_OCUPACAO_URBANA', });
lyr_RegioCentroLeste42unid675453694m_471.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioLesteNordeste50unid1233454938m_472.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteI45unid1043752016m_473.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteII36unid859331837m_474.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteI65unid1245065890m_475.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteII43unid599615871m_476.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudeste38unid579321135m_477.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudesteSul44unid830633497m_478.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSul20unid639964086m_479.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_APP169unid239527816m_480.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional371unid208395759m_481.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial69unid121924073m_482.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaVerde2117unid881307234m_483.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_readeUsoEspecial280unid271349968m_484.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado146unid70632440m_485.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid7530210m_486.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid_487.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LoteEdificao20unid508062m_488.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_489.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LeiloLEI97542025Homologado4unid334770m_490.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEI97542025Homologado4unid_491.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_492.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2652520256922unid_493.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc7954202537196unid_495.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEI97542025Proc2198620254518unid_497.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LoteEMDEF10unid218783m_498.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_499.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_TRPRLCETESB2unid_500.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_501.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_502.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_503.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRACETESBPARCELAMENTO32unid_504.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO32unid_505.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRACETESB30unid_506.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TCRACETESB30unid_507.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TACMinistrioPblico9unid_508.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_509.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_PlantioVoluntrio1unid_510.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_511.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_CartaAnuncia21unid_512.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia21unid_513.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_AoCivilPblica1unid_514.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_515.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_AdoteUmaPraa392unid38295094m_516.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_CPlacaDilu152unid15990431m_517.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_CPlacaEgnaldo221unid22321870m_518.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SPlacaDilu15unid751060m_519.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SPlacaEgnaldo4unid86447m_520.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_ARO_REMANESCENTES_FLORESTAIS_5.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_FAIXA_DE_CUESTAS_6.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_AREA_DE_AMORTECIMENTO_7.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARO_APP_8.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_INCONGRUENCIAS_EM_APP_9.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_ETE_LAGOAS_10.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_ARA_ATERROS_11.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AUS_FASE_2_15.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AUS_FASE_1_16.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_17.set('fieldImages', {'fid': 'TextEdit', 'SUBCLASSE': 'TextEdit', 'AREA_M2': 'TextEdit', 'CLASSE': 'TextEdit', 'DESCRICAO_SUBCLASSE': 'TextEdit', 'DESCRICAO_CLASSE': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldImages', {'fid': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AEISreaEspecialdeInteresseSocial_21.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_22.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_AERUreaEspecialResidenciasUnifamiliares_23.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_reaEspecialLazerInteresseTursticoeCultural_24.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_MacrozonadoRioCanoas_25.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_SubMacrozonadeExpansoUrbana_26.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_SubMacrozonadeOcupaoPreferencial_27.set('fieldImages', {'fid': 'TextEdit', 'macrozona_urbana': 'TextEdit', });
lyr_SubMacrozonadeOcupaoRestrita_28.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_ExpUrbanaLCN0502003_29.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN1402009_30.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN2352013_31.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLCN3242019_32.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_33.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodovias_35.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_AtenoPrimria24unid_43.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_GestoAdministrativo3unid_44.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_UnidadedeUrgnciaeEmergncia8unid_45.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ServiodeEspecialidadesDiagnstico14unid_46.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_VigilnciaemSade5unid_47.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_Arena3unid_48.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Biblioteca1unid_49.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Campo25unid_50.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Casa1unid_51.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Centro4unid_52.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_CEPEL12unid_53.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Conjunto4unid_54.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Estadio1unid_55.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Ginsio5unid_56.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Museu2unid_57.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Parque2unid_58.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Pavilho1unid_59.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Pinacoteca1unid_60.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Piscina1unid_61.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Pista1unid_62.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Praa3unid_63.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Quadra3unid_64.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Secretaria1unid_65.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_Teatro2unid_66.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_AlfabetizaaodeJovenseAdultos15unid_67.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_AlmoxarifadoEducao1unid_68.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_CEIGustavoChereghiniBichuette1unid_69.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_Creche35unid_70.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_CrechePrEscola45unid_71.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_EdInfantil9unid_72.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_EdInfantilEnsFundamental39unid_73.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_EJA3unid_74.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_EnsFundamental3unid_75.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_EspaodeDifusoCientfica1unid_76.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_SecretariaMunicipaldeEducao1unid_77.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_SetordeMerenda1unid_78.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UniversidadeAbertadoBrasilUAB1unid_79.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_RodoviasEstaduais4unid_80.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_82.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_LotesImvelPrivado96unid_83.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', '_BAIRRO': 'TextEdit', '_RUA': 'TextEdit', '_processo_seinfra': 'TextEdit', '_processo_sms': 'TextEdit', '_processo_mp': 'TextEdit', '_processo_smseg': 'TextEdit', '_outros_processos': 'TextEdit', '_data_inclusao': 'DateTime', });
lyr_ImvelPrivado96unid_84.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', 'REGIAO': '', });
lyr_ImvelRural1unid_85.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', 'REGIAO': '', });
lyr_ImvelPblico125unid_86.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', 'data_inclusao': '', 'REGIAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_87.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_89.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_JARDIM_ZOOBOTANICO_90.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_97.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_PARQUE_CAXAMBU_98.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_99.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldImages', {'fid': 'TextEdit', 'NOME': '', 'DESCRICAO': '', });
lyr_UBSdoJardimSantaBarbara_101.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdaVilaSantaTerezinha_102.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoResidencialPeresElias_103.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoParquedoHorto_104.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoJardimPalma_105.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_RevitalizaodaEstaoFerroviria_106.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoParqueContinental_107.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoJardimPortinari_108.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoParquedasEsmeraldas_109.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ReforoEstruturaldoColgioChampagnat_110.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ProntoSocorrolvaroAzzuz_111.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_Policlnica_112.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_RecapeamentodoJardimMartins_113.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_NovoNGA_114.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_115.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_EscolaJooLiporoni_116.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoCrregodosBagres_117.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoCrregoCubato_118.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoJardimPalmeiras_119.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CrechedoSamelPark_120.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CRASOeste_121.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CRASNorte_122.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CorpodeBombeiros_123.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ContenoViria_124.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CAPSInfantil_125.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ObrasPblicas_126.set('fieldImages', {'fid': 'TextEdit', 'Obra': 'TextEdit', 'Contrato': 'TextEdit', 'Empresa_Contratada': 'TextEdit', 'Porcentagem_de_Execucao': 'TextEdit', 'Inicio_da_Obra': 'DateTime', 'Prazo_Inicial': 'TextEdit', 'Valor_da_Obra': 'TextEdit', });
lyr_REURB9unid_127.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURB9unid_128.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_Vivenna_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaPiemonteII_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaOlimpica_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_163.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_168.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_170.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_171.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialTellini_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPiamalim_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialParquedosPassaros_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramadosII_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGramados_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialGaia_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFaggioni_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAnaHelena_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ReservaAbaete_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_242.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_243.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_244.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_245.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_246.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_247.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_248.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_249.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_250.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_251.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_252.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_253.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_254.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosCoqueiros_255.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_256.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueAlvorada_257.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_258.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_259.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_260.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_261.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_262.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_263.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_264.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_265.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_266.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_267.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_268.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_269.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_270.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_271.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_272.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_273.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_274.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_275.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_276.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_277.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_Loteamentolamo_278.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_279.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_280.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimStephani_281.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_282.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_283.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimNatal_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_286.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_287.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_288.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaAugusta_289.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_291.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_292.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_293.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_294.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_295.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_296.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_297.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_298.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_299.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_300.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_302.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_303.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_304.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_305.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_306.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_307.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_308.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_310.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_311.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_312.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_313.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_314.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_315.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_316.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_317.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_318.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_319.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_320.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_321.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_322.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_323.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_324.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_325.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_326.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_327.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_328.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_329.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_330.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_331.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_332.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_333.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_334.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_335.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_336.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_337.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_338.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_339.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_340.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_341.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_342.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_343.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_344.set('fieldImages', {'fid': '', 'description': '', });
lyr_Arizona_345.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_346.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_347.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado43unid_349.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_350.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva10unid_351.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_352.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_353.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_354.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_FazendaPalestina105unid_355.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_FazendaPalestina105unid_356.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_APP1745unid_357.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_358.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_359.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_360.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_361.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipal_362.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_reaBdaFazMunicipal_366.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_368.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas1Etapa28unid_369.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_370.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterroMaritacas3Etapa5unid_371.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterroMaritacas2Etapa41unid_372.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reaN2_373.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN1_374.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN_375.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_376.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_377.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_378.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_379.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_380.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_381.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_382.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_383.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_384.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_385.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_386.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_387.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_388.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235PartedareaG_389.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_390.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_Proposto2unid_391.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_Emconstruo2unid_392.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_Emfuncionamento4unid_393.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_DrenagensExistentes_394.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Drenagens_395.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_VILA_ISABEL_397.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_398.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_402.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_MOEMA_404.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_405.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_CASTELO_406.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_407.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARAGON_408.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_NAIR_RETUSSI_I_409.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOEMIA_410.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NATAL_411.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARTINS_412.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PULICANO_415.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PIRATININGA_416.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_PALMA_417.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_ATLANTA_PARK_419.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DINFRA_II_420.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_422.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_IPANEMA_424.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_LIBANO_425.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BOTANICO_426.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_BARAO_427.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AVIACAO_428.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_429.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_GRAMADOS_I_430.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_431.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_DRENAGEM_DOMINGOS_JARDINI_433.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_Voorocas27unid_434.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LocaisDifcilAcessoreasRurais12unid_435.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_Contineres286unid_436.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_437.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_438.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_Gesso1unid_439.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_440.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_441.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_442.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_443.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_444.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_445.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_446.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_447.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_448.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_449.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias17unid_450.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_451.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_452.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeCouro1unid_453.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_454.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_455.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosInservveis4unid_456.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_457.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_458.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_459.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAAeroporto_460.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CLASSE_I_461.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_II_462.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIA_463.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIB_464.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IIIC_465.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVA_466.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVB_467.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_IVC_468.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_VA_469.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_CLASSE_VB_470.set('fieldImages', {'fid': 'TextEdit', 'CLASSE': 'TextEdit', 'RISCO_DE_EROSAO': 'TextEdit', 'SUSCETIBILIDADE_DO_SOLO': 'TextEdit', 'USO_DO_SOLO': 'TextEdit', 'SETORES_DO_RELEVO': 'TextEdit', 'SOLOS_PREDOMINANTES': 'TextEdit', 'SUBSTRATO_ROCHOSO': 'TextEdit', 'PROCESSOS_EROSIVOS_EXISTENTES': 'TextEdit', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'TextEdit', });
lyr_RegioCentroLeste42unid675453694m_471.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioLesteNordeste50unid1233454938m_472.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteI45unid1043752016m_473.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteII36unid859331837m_474.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteI65unid1245065890m_475.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteII43unid599615871m_476.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudeste38unid579321135m_477.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudesteSul44unid830633497m_478.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSul20unid639964086m_479.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_APP169unid239527816m_480.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaInstitucional371unid208395759m_481.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaPatrimonial69unid121924073m_482.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_reaVerde2117unid881307234m_483.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_readeUsoEspecial280unid271349968m_484.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteamentoFechado146unid70632440m_485.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_Lote252unid7530210m_486.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_Lote252unid_487.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_LoteEdificao20unid508062m_488.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_489.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LeiloLEI97542025Homologado4unid334770m_490.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Homologado4unid_491.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_492.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2652520256922unid_493.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc7954202537196unid_495.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEI97542025Proc2198620254518unid_497.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_498.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteEMDEF10unid_499.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_TRPRLCETESB2unid_500.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_501.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_502.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_503.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO32unid_504.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO32unid_505.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB30unid_506.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', 'situacao': '', });
lyr_TCRACETESB30unid_507.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', 'situacao': '', });
lyr_TACMinistrioPblico9unid_508.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_509.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_PlantioVoluntrio1unid_510.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_511.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_CartaAnuncia21unid_512.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia21unid_513.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_AoCivilPblica1unid_514.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_515.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AdoteUmaPraa392unid38295094m_516.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_CPlacaDilu152unid15990431m_517.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_CPlacaEgnaldo221unid22321870m_518.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SPlacaDilu15unid751060m_519.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_SPlacaEgnaldo4unid86447m_520.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_ARO_REMANESCENTES_FLORESTAIS_5.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_FAIXA_DE_CUESTAS_6.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_AREA_DE_AMORTECIMENTO_7.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARO_APP_8.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_INCONGRUENCIAS_EM_APP_9.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_ETE_LAGOAS_10.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_ARA_ATERROS_11.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_3_12.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_2_13.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_BAIXA_DENSIDADE_NIVEL_1_14.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AUS_FASE_2_15.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AUS_FASE_1_16.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_AOD_AREA_URBANA_CONSOLIDADA_17.set('fieldLabels', {'fid': 'hidden field', 'SUBCLASSE': 'inline label - visible with data', 'AREA_M2': 'inline label - visible with data', 'CLASSE': 'inline label - visible with data', 'DESCRICAO_SUBCLASSE': 'inline label - visible with data', 'DESCRICAO_CLASSE': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldLabels', {'fid': 'hidden field', 'area_km2': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldLabels', {'fid': 'hidden field', 'area_km2': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AEISreaEspecialdeInteresseSocial_21.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_AEPIreaEspecialPreferIndustrialeLogstica_22.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_AERUreaEspecialResidenciasUnifamiliares_23.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_reaEspecialLazerInteresseTursticoeCultural_24.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_MacrozonadoRioCanoas_25.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_SubMacrozonadeExpansoUrbana_26.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_SubMacrozonadeOcupaoPreferencial_27.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_SubMacrozonadeOcupaoRestrita_28.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_ExpUrbanaLCN0502003_29.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN1402009_30.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN2352013_31.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLCN3242019_32.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpUrbanaLeis4240199244201994eLC1002006_33.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodovias_35.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_AtenoPrimria24unid_43.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_GestoAdministrativo3unid_44.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_UnidadedeUrgnciaeEmergncia8unid_45.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_ServiodeEspecialidadesDiagnstico14unid_46.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_VigilnciaemSade5unid_47.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_Arena3unid_48.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Biblioteca1unid_49.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Campo25unid_50.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Casa1unid_51.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Centro4unid_52.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_CEPEL12unid_53.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Conjunto4unid_54.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Estadio1unid_55.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Ginsio5unid_56.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Museu2unid_57.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Parque2unid_58.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Pavilho1unid_59.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Pinacoteca1unid_60.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Piscina1unid_61.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Pista1unid_62.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Praa3unid_63.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Quadra3unid_64.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Secretaria1unid_65.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_Teatro2unid_66.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_AlfabetizaaodeJovenseAdultos15unid_67.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_AlmoxarifadoEducao1unid_68.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_CEIGustavoChereghiniBichuette1unid_69.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_Creche35unid_70.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_CrechePrEscola45unid_71.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_EdInfantil9unid_72.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_EdInfantilEnsFundamental39unid_73.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_EJA3unid_74.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_EnsFundamental3unid_75.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_EspaodeDifusoCientfica1unid_76.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_SecretariaMunicipaldeEducao1unid_77.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_SetordeMerenda1unid_78.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UniversidadeAbertadoBrasilUAB1unid_79.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_80.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_82.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_LotesImvelPrivado96unid_83.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', '_BAIRRO': 'inline label - visible with data', '_RUA': 'inline label - visible with data', '_processo_seinfra': 'inline label - visible with data', '_processo_sms': 'inline label - visible with data', '_processo_mp': 'inline label - visible with data', '_processo_smseg': 'inline label - visible with data', '_outros_processos': 'inline label - visible with data', '_data_inclusao': 'hidden field', });
lyr_ImvelPrivado96unid_84.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'REGIAO': 'no label', });
lyr_ImvelRural1unid_85.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'REGIAO': 'no label', });
lyr_ImvelPblico125unid_86.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'REGIAO': 'no label', });
lyr_PARQUE_DOS_TRABALHADORES_87.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_DOS_TRABALHADORES_88.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_JARDIM_ZOOBOTANICO_89.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_JARDIM_ZOOBOTANICO_90.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_91.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_AMBIENTAL_SEBASTIAO_ALVES_BRANQUINHO_92.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_93.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_AMBIENTAL_LUPERCIO_TAVEIRA_94.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_95.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_DE_EXPOSICOES_FERNANDO_COSTA_96.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_CAXAMBU_97.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_PARQUE_CAXAMBU_98.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_COMPLEXO_POLIESPORTIVO_99.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_COMPLEXO_POLIESPORTIVO_100.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'no label', 'DESCRICAO': 'no label', });
lyr_UBSdoJardimSantaBarbara_101.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdaVilaSantaTerezinha_102.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoResidencialPeresElias_103.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoParquedoHorto_104.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoJardimPalma_105.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_RevitalizaodaEstaoFerroviria_106.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoParqueContinental_107.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoJardimPortinari_108.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoParquedasEsmeraldas_109.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ReforoEstruturaldoColgioChampagnat_110.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ProntoSocorrolvaroAzzuz_111.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_Policlnica_112.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_RecapeamentodoJardimMartins_113.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_NovoNGA_114.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_115.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_EscolaJooLiporoni_116.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoCrregodosBagres_117.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoCrregoCubato_118.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoJardimPalmeiras_119.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CrechedoSamelPark_120.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CRASOeste_121.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CRASNorte_122.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CorpodeBombeiros_123.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ContenoViria_124.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CAPSInfantil_125.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ObrasPblicas_126.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_REURB9unid_127.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURB9unid_128.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_Vivenna_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaPiemonteII_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaOlimpica_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_163.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_164.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_171.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialTellini_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_190.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPiamalim_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialParquedosPassaros_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramadosII_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGramados_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialGaia_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFaggioni_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAnaHelena_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ReservaAbaete_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_243.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_244.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_245.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_246.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_247.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_248.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_249.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_250.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_251.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_252.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_253.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_254.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosCoqueiros_255.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_256.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueAlvorada_257.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_258.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_259.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_260.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_261.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_262.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_263.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_264.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_265.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_266.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_267.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_268.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_269.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_270.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_271.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_272.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_273.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_274.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_275.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_276.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_277.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_Loteamentolamo_278.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_279.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_280.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimStephani_281.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_282.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_283.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimNatal_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_288.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaAugusta_289.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_291.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_292.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_293.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_294.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_295.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_296.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_297.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_298.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_299.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_300.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_301.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_302.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_303.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_304.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_305.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_306.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_307.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_308.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_309.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_310.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_311.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_312.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_313.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_314.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_315.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_316.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_317.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_318.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_319.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_320.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_321.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_322.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_323.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_324.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_325.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_326.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_327.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_328.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_329.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_330.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_331.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_332.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_333.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_334.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_335.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_336.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_337.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_338.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_339.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_340.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_341.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_342.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_343.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_344.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_Arizona_345.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_346.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_347.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_348.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado43unid_349.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_350.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva10unid_351.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_352.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_353.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_354.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_FazendaPalestina105unid_355.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'no label', });
lyr_FazendaPalestina105unid_356.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'no label', });
lyr_APP1745unid_357.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_358.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_359.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_360.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_361.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipal_362.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsGsAvatz15unid_363.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaAvatz18unid_364.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazMunicipalPMsguaGeoAnaltica15unid_365.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_reaBdaFazMunicipal_366.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazMunicPoosMonitEngesolve7unid_367.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_368.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas1Etapa28unid_369.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_370.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas3Etapa5unid_371.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterroMaritacas2Etapa41unid_372.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_reaN2_373.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN1_374.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN_375.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_376.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_377.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_378.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_379.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_380.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_381.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_382.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_383.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_384.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_385.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_386.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_387.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_388.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235PartedareaG_389.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_390.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_Proposto2unid_391.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Emconstruo2unid_392.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Emfuncionamento4unid_393.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_DrenagensExistentes_394.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_395.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_SANTA_TEREZINHA_396.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_VILA_ISABEL_397.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PROL_JARDIM_MARTINS_398.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_POLO_IND_ABILIO_NOGUEIRA_399.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_UNIVERSITARIO_400.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_SANTA_ADELIA_401.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_SABIAS_402.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQ_RESD_SANTA_MARIA_403.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_MOEMA_404.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_JOAO_LEITE_405.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_CASTELO_406.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_BOA_VISTA_407.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARAGON_408.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_NAIR_RETUSSI_I_409.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOEMIA_410.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NATAL_411.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARTINS_412.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SAO_GABRIEL_413.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_SANTA_LUCIA_414.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PULICANO_415.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PIRATININGA_416.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_PALMA_417.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_NOSSA_SENHORA_DAS_GRACAS_418.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_ATLANTA_PARK_419.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DINFRA_II_420.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_MARIA_LUIZA_421.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_GAIA_422.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_PARQUE_DOS_COQUEIROS_423.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_IPANEMA_424.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_LIBANO_425.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BOTANICO_426.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_BARAO_427.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AVIACAO_428.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_JARDIM_AEROPORTO_II_429.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_GRAMADOS_I_430.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_FRANCA_POLO_CLUBE_431.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_RESIDENCIAL_ANA_HELENA_432.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_DRENAGEM_DOMINGOS_JARDINI_433.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', });
lyr_Voorocas27unid_434.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_LocaisDifcilAcessoreasRurais12unid_435.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_Contineres286unid_436.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_437.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_438.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_Gesso1unid_439.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_440.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_441.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_442.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_443.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_444.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_445.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_446.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_447.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_448.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_449.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias17unid_450.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_451.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_452.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_453.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_454.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_455.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_456.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_457.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_458.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_459.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAAeroporto_460.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_CLASSE_I_461.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_II_462.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIA_463.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIB_464.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IIIC_465.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVA_466.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVB_467.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_IVC_468.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_VA_469.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_CLASSE_VB_470.set('fieldLabels', {'fid': 'hidden field', 'CLASSE': 'inline label - visible with data', 'RISCO_DE_EROSAO': 'inline label - visible with data', 'SUSCETIBILIDADE_DO_SOLO': 'inline label - visible with data', 'USO_DO_SOLO': 'inline label - visible with data', 'SETORES_DO_RELEVO': 'inline label - visible with data', 'SOLOS_PREDOMINANTES': 'inline label - visible with data', 'SUBSTRATO_ROCHOSO': 'inline label - visible with data', 'PROCESSOS_EROSIVOS_EXISTENTES': 'inline label - visible with data', 'RECOMENDACOES_PARA_OCUPACAO_URBANA': 'inline label - visible with data', });
lyr_RegioCentroLeste42unid675453694m_471.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioLesteNordeste50unid1233454938m_472.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteI45unid1043752016m_473.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteII36unid859331837m_474.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteI65unid1245065890m_475.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteII43unid599615871m_476.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudeste38unid579321135m_477.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudesteSul44unid830633497m_478.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSul20unid639964086m_479.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_APP169unid239527816m_480.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional371unid208395759m_481.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial69unid121924073m_482.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde2117unid881307234m_483.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial280unid271349968m_484.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteamentoFechado146unid70632440m_485.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_Lote252unid7530210m_486.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote252unid_487.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_LoteEdificao20unid508062m_488.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_489.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid334770m_490.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Homologado4unid_491.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid352000m_492.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2652520256922unid_493.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid3240462m_494.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc7954202537196unid_495.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid2092083m_496.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEI97542025Proc2198620254518unid_497.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_498.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_499.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_500.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_501.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_502.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_503.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_504.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_505.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB30unid_506.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_TCRACETESB30unid_507.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_508.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_509.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_510.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_511.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_512.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_513.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_514.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_515.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AdoteUmaPraa392unid38295094m_516.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_CPlacaDilu152unid15990431m_517.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_CPlacaEgnaldo221unid22321870m_518.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SPlacaDilu15unid751060m_519.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SPlacaEgnaldo4unid86447m_520.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SPlacaEgnaldo4unid86447m_520.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});