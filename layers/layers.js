ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.359375, 7700979.946759, 276615.686900, 7740908.029506]);
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
var format_ARORemanescentesFlorestais_5 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_5 = format_ARORemanescentesFlorestais_5.readFeatures(json_ARORemanescentesFlorestais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_5.addFeatures(features_ARORemanescentesFlorestais_5);
var lyr_ARORemanescentesFlorestais_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_5, 
                style: style_ARORemanescentesFlorestais_5,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_5.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_6 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_6 = format_AROreadeAmortecimento_6.readFeatures(json_AROreadeAmortecimento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_6.addFeatures(features_AROreadeAmortecimento_6);
var lyr_AROreadeAmortecimento_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_6, 
                style: style_AROreadeAmortecimento_6,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_6.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_7 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_7 = format_AROFaixadeCuestas_7.readFeatures(json_AROFaixadeCuestas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_7.addFeatures(features_AROFaixadeCuestas_7);
var lyr_AROFaixadeCuestas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_7, 
                style: style_AROFaixadeCuestas_7,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_7.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_8 = new ol.format.GeoJSON();
var features_AROAPP_8 = format_AROAPP_8.readFeatures(json_AROAPP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_8.addFeatures(features_AROAPP_8);
var lyr_AROAPP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_8, 
                style: style_AROAPP_8,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_8.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_9 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_9 = format_ARAIncongrunciasemAPP_9.readFeatures(json_ARAIncongrunciasemAPP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_9.addFeatures(features_ARAIncongrunciasemAPP_9);
var lyr_ARAIncongrunciasemAPP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_9, 
                style: style_ARAIncongrunciasemAPP_9,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_9.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_10 = new ol.format.GeoJSON();
var features_ARAETELagoas_10 = format_ARAETELagoas_10.readFeatures(json_ARAETELagoas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_10.addFeatures(features_ARAETELagoas_10);
var lyr_ARAETELagoas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_10, 
                style: style_ARAETELagoas_10,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_10.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_11 = new ol.format.GeoJSON();
var features_ARAAterros_11 = format_ARAAterros_11.readFeatures(json_ARAAterros_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_11.addFeatures(features_ARAAterros_11);
var lyr_ARAAterros_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_11, 
                style: style_ARAAterros_11,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_11.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_12 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_12 = format_AODreaUrbanaConsolidada_12.readFeatures(json_AODreaUrbanaConsolidada_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_12.addFeatures(features_AODreaUrbanaConsolidada_12);
var lyr_AODreaUrbanaConsolidada_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_12, 
                style: style_AODreaUrbanaConsolidada_12,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_12.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_13 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_13 = format_AODBaixaDensidadeNvel3_13.readFeatures(json_AODBaixaDensidadeNvel3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_13.addFeatures(features_AODBaixaDensidadeNvel3_13);
var lyr_AODBaixaDensidadeNvel3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_13, 
                style: style_AODBaixaDensidadeNvel3_13,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_13.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_14 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_14 = format_AODBaixaDensidadeNvel2_14.readFeatures(json_AODBaixaDensidadeNvel2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_14.addFeatures(features_AODBaixaDensidadeNvel2_14);
var lyr_AODBaixaDensidadeNvel2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_14, 
                style: style_AODBaixaDensidadeNvel2_14,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_14.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_15 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_15 = format_AODBaixaDensidadeNvel1_15.readFeatures(json_AODBaixaDensidadeNvel1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_15.addFeatures(features_AODBaixaDensidadeNvel1_15);
var lyr_AODBaixaDensidadeNvel1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_15, 
                style: style_AODBaixaDensidadeNvel1_15,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_15.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_16 = new ol.format.GeoJSON();
var features_AODAUSFase2_16 = format_AODAUSFase2_16.readFeatures(json_AODAUSFase2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_16.addFeatures(features_AODAUSFase2_16);
var lyr_AODAUSFase2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_16, 
                style: style_AODAUSFase2_16,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_16.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_17 = new ol.format.GeoJSON();
var features_AODAUSFase1_17 = format_AODAUSFase1_17.readFeatures(json_AODAUSFase1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_17.addFeatures(features_AODAUSFase1_17);
var lyr_AODAUSFase1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_17, 
                style: style_AODAUSFase1_17,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_17.png" /> AOD - AUS Fase 1'
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
var format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.readFeatures(json_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.addFeatures(features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21);
var lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21, 
                style: style_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21,
                popuplayertitle: 'Zonas Especiais - AEIS - Área Especial de Interesse Social',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.png" /> Zonas Especiais - AEIS - Área Especial de Interesse Social'
            });
var format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.readFeatures(json_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.addFeatures(features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22);
var lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22, 
                style: style_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22,
                popuplayertitle: 'Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.png" /> Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística'
            });
var format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.readFeatures(json_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.addFeatures(features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23);
var lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23, 
                style: style_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23,
                popuplayertitle: 'Zonas Especiais - AERU - Área Especial Residencias Unifamiliares',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.png" /> Zonas Especiais - AERU - Área Especial Residencias Unifamiliares'
            });
var format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.format.GeoJSON();
var features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.readFeatures(json_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.addFeatures(features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24);
var lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24, 
                style: style_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24,
                popuplayertitle: 'Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.png" /> Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural'
            });
var format_MacrozonasMacrozonadoRioCanoas_25 = new ol.format.GeoJSON();
var features_MacrozonasMacrozonadoRioCanoas_25 = format_MacrozonasMacrozonadoRioCanoas_25.readFeatures(json_MacrozonasMacrozonadoRioCanoas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasMacrozonadoRioCanoas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasMacrozonadoRioCanoas_25.addFeatures(features_MacrozonasMacrozonadoRioCanoas_25);
var lyr_MacrozonasMacrozonadoRioCanoas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasMacrozonadoRioCanoas_25, 
                style: style_MacrozonasMacrozonadoRioCanoas_25,
                popuplayertitle: 'Macrozonas - Macrozona do Rio Canoas',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasMacrozonadoRioCanoas_25.png" /> Macrozonas - Macrozona do Rio Canoas'
            });
var format_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeExpansoUrbana_26 = format_MacrozonasSubMacrozonadeExpansoUrbana_26.readFeatures(json_MacrozonasSubMacrozonadeExpansoUrbana_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26.addFeatures(features_MacrozonasSubMacrozonadeExpansoUrbana_26);
var lyr_MacrozonasSubMacrozonadeExpansoUrbana_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_26, 
                style: style_MacrozonasSubMacrozonadeExpansoUrbana_26,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Expansão Urbana',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeExpansoUrbana_26.png" /> Macrozonas - Sub - Macrozona de Expansão Urbana'
            });
var format_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = format_MacrozonasSubMacrozonadeOcupaoPreferencial_27.readFeatures(json_MacrozonasSubMacrozonadeOcupaoPreferencial_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27.addFeatures(features_MacrozonasSubMacrozonadeOcupaoPreferencial_27);
var lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_27, 
                style: style_MacrozonasSubMacrozonadeOcupaoPreferencial_27,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Preferencial',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoPreferencial_27.png" /> Macrozonas - Sub - Macrozona de Ocupação Preferencial'
            });
var format_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoRestrita_28 = format_MacrozonasSubMacrozonadeOcupaoRestrita_28.readFeatures(json_MacrozonasSubMacrozonadeOcupaoRestrita_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28.addFeatures(features_MacrozonasSubMacrozonadeOcupaoRestrita_28);
var lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_28, 
                style: style_MacrozonasSubMacrozonadeOcupaoRestrita_28,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Restrita',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoRestrita_28.png" /> Macrozonas - Sub - Macrozona de Ocupação Restrita'
            });
var format_ExpansoUrbanaLCN0502003_29 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN0502003_29 = format_ExpansoUrbanaLCN0502003_29.readFeatures(json_ExpansoUrbanaLCN0502003_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN0502003_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN0502003_29.addFeatures(features_ExpansoUrbanaLCN0502003_29);
var lyr_ExpansoUrbanaLCN0502003_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN0502003_29, 
                style: style_ExpansoUrbanaLCN0502003_29,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 050/ 2003',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN0502003_29.png" /> Expansão Urbana - L.C. Nº 050/ 2003'
            });
var format_ExpansoUrbanaLCN1402009_30 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN1402009_30 = format_ExpansoUrbanaLCN1402009_30.readFeatures(json_ExpansoUrbanaLCN1402009_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN1402009_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN1402009_30.addFeatures(features_ExpansoUrbanaLCN1402009_30);
var lyr_ExpansoUrbanaLCN1402009_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN1402009_30, 
                style: style_ExpansoUrbanaLCN1402009_30,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 140/ 2009',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN1402009_30.png" /> Expansão Urbana - L.C. Nº 140/ 2009'
            });
var format_ExpansoUrbanaLCN2352013_31 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN2352013_31 = format_ExpansoUrbanaLCN2352013_31.readFeatures(json_ExpansoUrbanaLCN2352013_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN2352013_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN2352013_31.addFeatures(features_ExpansoUrbanaLCN2352013_31);
var lyr_ExpansoUrbanaLCN2352013_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN2352013_31, 
                style: style_ExpansoUrbanaLCN2352013_31,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 235/ 2013',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN2352013_31.png" /> Expansão Urbana - L.C. Nº 235/ 2013'
            });
var format_ExpansoUrbanaLCN3242019_32 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN3242019_32 = format_ExpansoUrbanaLCN3242019_32.readFeatures(json_ExpansoUrbanaLCN3242019_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN3242019_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN3242019_32.addFeatures(features_ExpansoUrbanaLCN3242019_32);
var lyr_ExpansoUrbanaLCN3242019_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN3242019_32, 
                style: style_ExpansoUrbanaLCN3242019_32,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 324/ 2019',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN3242019_32.png" /> Expansão Urbana - L.C. Nº 324/ 2019'
            });
var format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.format.GeoJSON();
var features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.readFeatures(json_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.addFeatures(features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33);
var lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33, 
                style: style_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33,
                popuplayertitle: 'Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.png" /> Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006'
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
var format_PrprioPblicoMunicipalAtenoPrimria24unid_43 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalAtenoPrimria24unid_43 = format_PrprioPblicoMunicipalAtenoPrimria24unid_43.readFeatures(json_PrprioPblicoMunicipalAtenoPrimria24unid_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_43.addFeatures(features_PrprioPblicoMunicipalAtenoPrimria24unid_43);
var lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_43, 
                style: style_PrprioPblicoMunicipalAtenoPrimria24unid_43,
                popuplayertitle: 'Próprio Público Municipal - Atenção Primária (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalAtenoPrimria24unid_43.png" /> Próprio Público Municipal - Atenção Primária (24 unid.)'
            });
var format_PrprioPblicoMunicipalGestoAdministrativo3unid_44 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGestoAdministrativo3unid_44 = format_PrprioPblicoMunicipalGestoAdministrativo3unid_44.readFeatures(json_PrprioPblicoMunicipalGestoAdministrativo3unid_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_44.addFeatures(features_PrprioPblicoMunicipalGestoAdministrativo3unid_44);
var lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_44, 
                style: style_PrprioPblicoMunicipalGestoAdministrativo3unid_44,
                popuplayertitle: 'Próprio Público Municipal - Gestão / Administrativo (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGestoAdministrativo3unid_44.png" /> Próprio Público Municipal - Gestão / Administrativo (3 unid.)'
            });
var format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45 = format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.readFeatures(json_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.addFeatures(features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45);
var lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45, 
                style: style_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45,
                popuplayertitle: 'Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.png" /> Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)'
            });
var format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46 = format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.readFeatures(json_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.addFeatures(features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46);
var lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46, 
                style: style_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46,
                popuplayertitle: 'Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.png" /> Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)'
            });
var format_PrprioPblicoMunicipalVigilnciaemSade5unid_47 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalVigilnciaemSade5unid_47 = format_PrprioPblicoMunicipalVigilnciaemSade5unid_47.readFeatures(json_PrprioPblicoMunicipalVigilnciaemSade5unid_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_47.addFeatures(features_PrprioPblicoMunicipalVigilnciaemSade5unid_47);
var lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_47, 
                style: style_PrprioPblicoMunicipalVigilnciaemSade5unid_47,
                popuplayertitle: 'Próprio Público Municipal - Vigilância em Saúde (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalVigilnciaemSade5unid_47.png" /> Próprio Público Municipal - Vigilância em Saúde (5 unid.)'
            });
var format_PrprioPblicoMunicipalArena3unid_48 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalArena3unid_48 = format_PrprioPblicoMunicipalArena3unid_48.readFeatures(json_PrprioPblicoMunicipalArena3unid_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalArena3unid_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalArena3unid_48.addFeatures(features_PrprioPblicoMunicipalArena3unid_48);
var lyr_PrprioPblicoMunicipalArena3unid_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalArena3unid_48, 
                style: style_PrprioPblicoMunicipalArena3unid_48,
                popuplayertitle: 'Próprio Público Municipal - Arena (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalArena3unid_48.png" /> Próprio Público Municipal - Arena (3 unid.)'
            });
var format_PrprioPblicoMunicipalBiblioteca1unid_49 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalBiblioteca1unid_49 = format_PrprioPblicoMunicipalBiblioteca1unid_49.readFeatures(json_PrprioPblicoMunicipalBiblioteca1unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalBiblioteca1unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalBiblioteca1unid_49.addFeatures(features_PrprioPblicoMunicipalBiblioteca1unid_49);
var lyr_PrprioPblicoMunicipalBiblioteca1unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalBiblioteca1unid_49, 
                style: style_PrprioPblicoMunicipalBiblioteca1unid_49,
                popuplayertitle: 'Próprio Público Municipal - Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalBiblioteca1unid_49.png" /> Próprio Público Municipal - Biblioteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalCampo18unid_50 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo18unid_50 = format_PrprioPblicoMunicipalCampo18unid_50.readFeatures(json_PrprioPblicoMunicipalCampo18unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCampo18unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo18unid_50.addFeatures(features_PrprioPblicoMunicipalCampo18unid_50);
var lyr_PrprioPblicoMunicipalCampo18unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo18unid_50, 
                style: style_PrprioPblicoMunicipalCampo18unid_50,
                popuplayertitle: 'Próprio Público Municipal - Campo (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo18unid_50.png" /> Próprio Público Municipal - Campo (18 unid.)'
            });
var format_PrprioPblicoMunicipalCasa1unid_51 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCasa1unid_51 = format_PrprioPblicoMunicipalCasa1unid_51.readFeatures(json_PrprioPblicoMunicipalCasa1unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCasa1unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCasa1unid_51.addFeatures(features_PrprioPblicoMunicipalCasa1unid_51);
var lyr_PrprioPblicoMunicipalCasa1unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCasa1unid_51, 
                style: style_PrprioPblicoMunicipalCasa1unid_51,
                popuplayertitle: 'Próprio Público Municipal - Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCasa1unid_51.png" /> Próprio Público Municipal - Casa (1 unid.)'
            });
var format_PrprioPblicoMunicipalCentro4unid_52 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCentro4unid_52 = format_PrprioPblicoMunicipalCentro4unid_52.readFeatures(json_PrprioPblicoMunicipalCentro4unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCentro4unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCentro4unid_52.addFeatures(features_PrprioPblicoMunicipalCentro4unid_52);
var lyr_PrprioPblicoMunicipalCentro4unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCentro4unid_52, 
                style: style_PrprioPblicoMunicipalCentro4unid_52,
                popuplayertitle: 'Próprio Público Municipal - Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCentro4unid_52.png" /> Próprio Público Municipal - Centro (4 unid.)'
            });
var format_PrprioPblicoMunicipalCEPEL12unid_53 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCEPEL12unid_53 = format_PrprioPblicoMunicipalCEPEL12unid_53.readFeatures(json_PrprioPblicoMunicipalCEPEL12unid_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCEPEL12unid_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCEPEL12unid_53.addFeatures(features_PrprioPblicoMunicipalCEPEL12unid_53);
var lyr_PrprioPblicoMunicipalCEPEL12unid_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCEPEL12unid_53, 
                style: style_PrprioPblicoMunicipalCEPEL12unid_53,
                popuplayertitle: 'Próprio Público Municipal - CEPEL (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCEPEL12unid_53.png" /> Próprio Público Municipal - CEPEL (12 unid.)'
            });
var format_PrprioPblicoMunicipalConjunto4unid_54 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalConjunto4unid_54 = format_PrprioPblicoMunicipalConjunto4unid_54.readFeatures(json_PrprioPblicoMunicipalConjunto4unid_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalConjunto4unid_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalConjunto4unid_54.addFeatures(features_PrprioPblicoMunicipalConjunto4unid_54);
var lyr_PrprioPblicoMunicipalConjunto4unid_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalConjunto4unid_54, 
                style: style_PrprioPblicoMunicipalConjunto4unid_54,
                popuplayertitle: 'Próprio Público Municipal - Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalConjunto4unid_54.png" /> Próprio Público Municipal - Conjunto (4 unid.)'
            });
var format_PrprioPblicoMunicipalEstadio1unid_55 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalEstadio1unid_55 = format_PrprioPblicoMunicipalEstadio1unid_55.readFeatures(json_PrprioPblicoMunicipalEstadio1unid_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalEstadio1unid_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalEstadio1unid_55.addFeatures(features_PrprioPblicoMunicipalEstadio1unid_55);
var lyr_PrprioPblicoMunicipalEstadio1unid_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalEstadio1unid_55, 
                style: style_PrprioPblicoMunicipalEstadio1unid_55,
                popuplayertitle: 'Próprio Público Municipal - Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalEstadio1unid_55.png" /> Próprio Público Municipal - Estadio (1 unid.)'
            });
var format_PrprioPblicoMunicipalGinsio5unid_56 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGinsio5unid_56 = format_PrprioPblicoMunicipalGinsio5unid_56.readFeatures(json_PrprioPblicoMunicipalGinsio5unid_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGinsio5unid_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGinsio5unid_56.addFeatures(features_PrprioPblicoMunicipalGinsio5unid_56);
var lyr_PrprioPblicoMunicipalGinsio5unid_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGinsio5unid_56, 
                style: style_PrprioPblicoMunicipalGinsio5unid_56,
                popuplayertitle: 'Próprio Público Municipal - Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGinsio5unid_56.png" /> Próprio Público Municipal - Ginásio (5 unid.)'
            });
var format_PrprioPblicoMunicipalMuseu2unid_57 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalMuseu2unid_57 = format_PrprioPblicoMunicipalMuseu2unid_57.readFeatures(json_PrprioPblicoMunicipalMuseu2unid_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalMuseu2unid_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalMuseu2unid_57.addFeatures(features_PrprioPblicoMunicipalMuseu2unid_57);
var lyr_PrprioPblicoMunicipalMuseu2unid_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalMuseu2unid_57, 
                style: style_PrprioPblicoMunicipalMuseu2unid_57,
                popuplayertitle: 'Próprio Público Municipal - Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalMuseu2unid_57.png" /> Próprio Público Municipal - Museu (2 unid.)'
            });
var format_PrprioPblicoMunicipalParque2unid_58 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalParque2unid_58 = format_PrprioPblicoMunicipalParque2unid_58.readFeatures(json_PrprioPblicoMunicipalParque2unid_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalParque2unid_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalParque2unid_58.addFeatures(features_PrprioPblicoMunicipalParque2unid_58);
var lyr_PrprioPblicoMunicipalParque2unid_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalParque2unid_58, 
                style: style_PrprioPblicoMunicipalParque2unid_58,
                popuplayertitle: 'Próprio Público Municipal - Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalParque2unid_58.png" /> Próprio Público Municipal - Parque (2 unid.)'
            });
var format_PrprioPblicoMunicipalPavilho1unid_59 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPavilho1unid_59 = format_PrprioPblicoMunicipalPavilho1unid_59.readFeatures(json_PrprioPblicoMunicipalPavilho1unid_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPavilho1unid_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPavilho1unid_59.addFeatures(features_PrprioPblicoMunicipalPavilho1unid_59);
var lyr_PrprioPblicoMunicipalPavilho1unid_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPavilho1unid_59, 
                style: style_PrprioPblicoMunicipalPavilho1unid_59,
                popuplayertitle: 'Próprio Público Municipal - Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPavilho1unid_59.png" /> Próprio Público Municipal - Pavilhão (1 unid.)'
            });
var format_PrprioPblicoMunicipalPinacoteca1unid_60 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPinacoteca1unid_60 = format_PrprioPblicoMunicipalPinacoteca1unid_60.readFeatures(json_PrprioPblicoMunicipalPinacoteca1unid_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPinacoteca1unid_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPinacoteca1unid_60.addFeatures(features_PrprioPblicoMunicipalPinacoteca1unid_60);
var lyr_PrprioPblicoMunicipalPinacoteca1unid_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPinacoteca1unid_60, 
                style: style_PrprioPblicoMunicipalPinacoteca1unid_60,
                popuplayertitle: 'Próprio Público Municipal - Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPinacoteca1unid_60.png" /> Próprio Público Municipal - Pinacoteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalPiscina1unid_61 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPiscina1unid_61 = format_PrprioPblicoMunicipalPiscina1unid_61.readFeatures(json_PrprioPblicoMunicipalPiscina1unid_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPiscina1unid_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPiscina1unid_61.addFeatures(features_PrprioPblicoMunicipalPiscina1unid_61);
var lyr_PrprioPblicoMunicipalPiscina1unid_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPiscina1unid_61, 
                style: style_PrprioPblicoMunicipalPiscina1unid_61,
                popuplayertitle: 'Próprio Público Municipal - Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPiscina1unid_61.png" /> Próprio Público Municipal - Piscina (1 unid.)'
            });
var format_PrprioPblicoMunicipalPista1unid_62 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPista1unid_62 = format_PrprioPblicoMunicipalPista1unid_62.readFeatures(json_PrprioPblicoMunicipalPista1unid_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPista1unid_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPista1unid_62.addFeatures(features_PrprioPblicoMunicipalPista1unid_62);
var lyr_PrprioPblicoMunicipalPista1unid_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPista1unid_62, 
                style: style_PrprioPblicoMunicipalPista1unid_62,
                popuplayertitle: 'Próprio Público Municipal - Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPista1unid_62.png" /> Próprio Público Municipal - Pista (1 unid.)'
            });
var format_PrprioPblicoMunicipalPraa3unid_63 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPraa3unid_63 = format_PrprioPblicoMunicipalPraa3unid_63.readFeatures(json_PrprioPblicoMunicipalPraa3unid_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPraa3unid_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPraa3unid_63.addFeatures(features_PrprioPblicoMunicipalPraa3unid_63);
var lyr_PrprioPblicoMunicipalPraa3unid_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPraa3unid_63, 
                style: style_PrprioPblicoMunicipalPraa3unid_63,
                popuplayertitle: 'Próprio Público Municipal - Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPraa3unid_63.png" /> Próprio Público Municipal - Praça (3 unid.)'
            });
var format_PrprioPblicoMunicipalQuadra3unid_64 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalQuadra3unid_64 = format_PrprioPblicoMunicipalQuadra3unid_64.readFeatures(json_PrprioPblicoMunicipalQuadra3unid_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalQuadra3unid_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalQuadra3unid_64.addFeatures(features_PrprioPblicoMunicipalQuadra3unid_64);
var lyr_PrprioPblicoMunicipalQuadra3unid_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalQuadra3unid_64, 
                style: style_PrprioPblicoMunicipalQuadra3unid_64,
                popuplayertitle: 'Próprio Público Municipal - Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalQuadra3unid_64.png" /> Próprio Público Municipal - Quadra (3 unid.)'
            });
var format_PrprioPblicoMunicipalSecretaria1unid_65 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalSecretaria1unid_65 = format_PrprioPblicoMunicipalSecretaria1unid_65.readFeatures(json_PrprioPblicoMunicipalSecretaria1unid_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalSecretaria1unid_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalSecretaria1unid_65.addFeatures(features_PrprioPblicoMunicipalSecretaria1unid_65);
var lyr_PrprioPblicoMunicipalSecretaria1unid_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalSecretaria1unid_65, 
                style: style_PrprioPblicoMunicipalSecretaria1unid_65,
                popuplayertitle: 'Próprio Público Municipal - Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalSecretaria1unid_65.png" /> Próprio Público Municipal - Secretaria (1 unid.)'
            });
var format_PrprioPblicoMunicipalTeatro2unid_66 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalTeatro2unid_66 = format_PrprioPblicoMunicipalTeatro2unid_66.readFeatures(json_PrprioPblicoMunicipalTeatro2unid_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalTeatro2unid_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalTeatro2unid_66.addFeatures(features_PrprioPblicoMunicipalTeatro2unid_66);
var lyr_PrprioPblicoMunicipalTeatro2unid_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalTeatro2unid_66, 
                style: style_PrprioPblicoMunicipalTeatro2unid_66,
                popuplayertitle: 'Próprio Público Municipal - Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalTeatro2unid_66.png" /> Próprio Público Municipal - Teatro (2 unid.)'
            });
var format_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67 = new ol.format.GeoJSON();
var features_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67 = format_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.readFeatures(json_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.addFeatures(features_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67);
var lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67, 
                style: style_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67,
                popuplayertitle: 'Unidades Escolares - Alfabetizaçao de Jovens e Adultos (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.png" /> Unidades Escolares - Alfabetizaçao de Jovens e Adultos (15 unid.)'
            });
var format_UnidadesEscolaresAlmoxarifadoEducao1unid_68 = new ol.format.GeoJSON();
var features_UnidadesEscolaresAlmoxarifadoEducao1unid_68 = format_UnidadesEscolaresAlmoxarifadoEducao1unid_68.readFeatures(json_UnidadesEscolaresAlmoxarifadoEducao1unid_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_68.addFeatures(features_UnidadesEscolaresAlmoxarifadoEducao1unid_68);
var lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_68, 
                style: style_UnidadesEscolaresAlmoxarifadoEducao1unid_68,
                popuplayertitle: 'Unidades Escolares - Almoxarifado Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresAlmoxarifadoEducao1unid_68.png" /> Unidades Escolares - Almoxarifado Educação (1 unid.)'
            });
var format_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69 = format_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.readFeatures(json_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.addFeatures(features_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69);
var lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69, 
                style: style_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69,
                popuplayertitle: 'Unidades Escolares - CEI (Centro de Educação Integrada) Gustavo Chereghini Bichuette (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.png" /> Unidades Escolares - CEI (Centro de Educação Integrada) Gustavo Chereghini Bichuette (1 unid.)'
            });
var format_UnidadesEscolaresCreche35unid_70 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCreche35unid_70 = format_UnidadesEscolaresCreche35unid_70.readFeatures(json_UnidadesEscolaresCreche35unid_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCreche35unid_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCreche35unid_70.addFeatures(features_UnidadesEscolaresCreche35unid_70);
var lyr_UnidadesEscolaresCreche35unid_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCreche35unid_70, 
                style: style_UnidadesEscolaresCreche35unid_70,
                popuplayertitle: 'Unidades Escolares - Creche (35 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCreche35unid_70.png" /> Unidades Escolares - Creche (35 unid.)'
            });
var format_UnidadesEscolaresCrechePrEscola45unid_71 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCrechePrEscola45unid_71 = format_UnidadesEscolaresCrechePrEscola45unid_71.readFeatures(json_UnidadesEscolaresCrechePrEscola45unid_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCrechePrEscola45unid_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCrechePrEscola45unid_71.addFeatures(features_UnidadesEscolaresCrechePrEscola45unid_71);
var lyr_UnidadesEscolaresCrechePrEscola45unid_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCrechePrEscola45unid_71, 
                style: style_UnidadesEscolaresCrechePrEscola45unid_71,
                popuplayertitle: 'Unidades Escolares - Creche, Pré Escola (45 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCrechePrEscola45unid_71.png" /> Unidades Escolares - Creche, Pré Escola (45 unid.)'
            });
var format_UnidadesEscolaresEdInfantil9unid_72 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEdInfantil9unid_72 = format_UnidadesEscolaresEdInfantil9unid_72.readFeatures(json_UnidadesEscolaresEdInfantil9unid_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEdInfantil9unid_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEdInfantil9unid_72.addFeatures(features_UnidadesEscolaresEdInfantil9unid_72);
var lyr_UnidadesEscolaresEdInfantil9unid_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEdInfantil9unid_72, 
                style: style_UnidadesEscolaresEdInfantil9unid_72,
                popuplayertitle: 'Unidades Escolares - Ed. Infantil (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEdInfantil9unid_72.png" /> Unidades Escolares - Ed. Infantil (9 unid.)'
            });
var format_UnidadesEscolaresEdInfantilEnsFundamental39unid_73 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEdInfantilEnsFundamental39unid_73 = format_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.readFeatures(json_UnidadesEscolaresEdInfantilEnsFundamental39unid_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.addFeatures(features_UnidadesEscolaresEdInfantilEnsFundamental39unid_73);
var lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_73, 
                style: style_UnidadesEscolaresEdInfantilEnsFundamental39unid_73,
                popuplayertitle: 'Unidades Escolares - Ed. Infantil, Ens. Fundamental (39 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEdInfantilEnsFundamental39unid_73.png" /> Unidades Escolares - Ed. Infantil, Ens. Fundamental (39 unid.)'
            });
var format_UnidadesEscolaresEJA3unid_74 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEJA3unid_74 = format_UnidadesEscolaresEJA3unid_74.readFeatures(json_UnidadesEscolaresEJA3unid_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEJA3unid_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEJA3unid_74.addFeatures(features_UnidadesEscolaresEJA3unid_74);
var lyr_UnidadesEscolaresEJA3unid_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEJA3unid_74, 
                style: style_UnidadesEscolaresEJA3unid_74,
                popuplayertitle: 'Unidades Escolares - EJA (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEJA3unid_74.png" /> Unidades Escolares - EJA (3 unid.)'
            });
var format_UnidadesEscolaresEnsFundamental3unid_75 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEnsFundamental3unid_75 = format_UnidadesEscolaresEnsFundamental3unid_75.readFeatures(json_UnidadesEscolaresEnsFundamental3unid_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEnsFundamental3unid_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEnsFundamental3unid_75.addFeatures(features_UnidadesEscolaresEnsFundamental3unid_75);
var lyr_UnidadesEscolaresEnsFundamental3unid_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEnsFundamental3unid_75, 
                style: style_UnidadesEscolaresEnsFundamental3unid_75,
                popuplayertitle: 'Unidades Escolares - Ens. Fundamental (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEnsFundamental3unid_75.png" /> Unidades Escolares - Ens. Fundamental (3 unid.)'
            });
var format_UnidadesEscolaresEspaodeDifusoCientfica1unid_76 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEspaodeDifusoCientfica1unid_76 = format_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.readFeatures(json_UnidadesEscolaresEspaodeDifusoCientfica1unid_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.addFeatures(features_UnidadesEscolaresEspaodeDifusoCientfica1unid_76);
var lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_76, 
                style: style_UnidadesEscolaresEspaodeDifusoCientfica1unid_76,
                popuplayertitle: 'Unidades Escolares - Espaço de Difusão Científica (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEspaodeDifusoCientfica1unid_76.png" /> Unidades Escolares - Espaço de Difusão Científica (1 unid.)'
            });
var format_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77 = new ol.format.GeoJSON();
var features_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77 = format_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.readFeatures(json_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.addFeatures(features_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77);
var lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77, 
                style: style_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77,
                popuplayertitle: 'Unidades Escolares - Secretaria Municipal de Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.png" /> Unidades Escolares - Secretaria Municipal de Educação (1 unid.)'
            });
var format_UnidadesEscolaresSetordeMerenda1unid_78 = new ol.format.GeoJSON();
var features_UnidadesEscolaresSetordeMerenda1unid_78 = format_UnidadesEscolaresSetordeMerenda1unid_78.readFeatures(json_UnidadesEscolaresSetordeMerenda1unid_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresSetordeMerenda1unid_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresSetordeMerenda1unid_78.addFeatures(features_UnidadesEscolaresSetordeMerenda1unid_78);
var lyr_UnidadesEscolaresSetordeMerenda1unid_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresSetordeMerenda1unid_78, 
                style: style_UnidadesEscolaresSetordeMerenda1unid_78,
                popuplayertitle: 'Unidades Escolares - Setor de Merenda (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresSetordeMerenda1unid_78.png" /> Unidades Escolares - Setor de Merenda (1 unid.)'
            });
var format_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79 = new ol.format.GeoJSON();
var features_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79 = format_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.readFeatures(json_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.addFeatures(features_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79);
var lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79, 
                style: style_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79,
                popuplayertitle: 'Unidades Escolares - Universidade Aberta do Brasil - UAB (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.png" /> Unidades Escolares - Universidade Aberta do Brasil - UAB (1 unid.)'
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
var format_LotesImvelPrivado95unid_83 = new ol.format.GeoJSON();
var features_LotesImvelPrivado95unid_83 = format_LotesImvelPrivado95unid_83.readFeatures(json_LotesImvelPrivado95unid_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LotesImvelPrivado95unid_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado95unid_83.addFeatures(features_LotesImvelPrivado95unid_83);
var lyr_LotesImvelPrivado95unid_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado95unid_83, 
                style: style_LotesImvelPrivado95unid_83,
                popuplayertitle: 'Lotes - Imóvel Privado (95 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado95unid_83.png" /> Lotes - Imóvel Privado (95 unid.)'
            });
var format_ImvelPrivado95unid_84 = new ol.format.GeoJSON();
var features_ImvelPrivado95unid_84 = format_ImvelPrivado95unid_84.readFeatures(json_ImvelPrivado95unid_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPrivado95unid_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado95unid_84.addFeatures(features_ImvelPrivado95unid_84);
var lyr_ImvelPrivado95unid_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado95unid_84, 
                style: style_ImvelPrivado95unid_84,
                popuplayertitle: 'Imóvel Privado (95 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado95unid_84.png" /> Imóvel Privado (95 unid.)'
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
var format_ImvelPblico118unid_86 = new ol.format.GeoJSON();
var features_ImvelPblico118unid_86 = format_ImvelPblico118unid_86.readFeatures(json_ImvelPblico118unid_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico118unid_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico118unid_86.addFeatures(features_ImvelPblico118unid_86);
var lyr_ImvelPblico118unid_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico118unid_86, 
                style: style_ImvelPblico118unid_86,
                popuplayertitle: 'Imóvel Público (118 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico118unid_86.png" /> Imóvel Público (118 unid.)'
            });
var format_ParqueAmbientalLuprcioTaveira_87 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_87 = format_ParqueAmbientalLuprcioTaveira_87.readFeatures(json_ParqueAmbientalLuprcioTaveira_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_87.addFeatures(features_ParqueAmbientalLuprcioTaveira_87);
var lyr_ParqueAmbientalLuprcioTaveira_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_87, 
                style: style_ParqueAmbientalLuprcioTaveira_87,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_87.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_88 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_88 = format_ParqueAmbientalLuprcioTaveira_88.readFeatures(json_ParqueAmbientalLuprcioTaveira_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_88.addFeatures(features_ParqueAmbientalLuprcioTaveira_88);
var lyr_ParqueAmbientalLuprcioTaveira_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_88, 
                style: style_ParqueAmbientalLuprcioTaveira_88,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_88.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89 = new ol.format.GeoJSON();
var features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89 = format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.readFeatures(json_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.addFeatures(features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89);
var lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89, 
                style: style_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89,
                popuplayertitle: 'Parque Ambiental "Sebastião Alves Branquinho - Bosque dos Angicos"',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.png" /> Parque Ambiental "Sebastião Alves Branquinho - Bosque dos Angicos"'
            });
var format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90 = new ol.format.GeoJSON();
var features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90 = format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.readFeatures(json_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.addFeatures(features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90);
var lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90, 
                style: style_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90,
                popuplayertitle: 'Parque Ambiental "Sebastião Alves Branquinho - Bosque dos Angicos"',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.png" /> Parque Ambiental "Sebastião Alves Branquinho - Bosque dos Angicos"'
            });
var format_ParquedeExposiesFernandoCosta_91 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_91 = format_ParquedeExposiesFernandoCosta_91.readFeatures(json_ParquedeExposiesFernandoCosta_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_91.addFeatures(features_ParquedeExposiesFernandoCosta_91);
var lyr_ParquedeExposiesFernandoCosta_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_91, 
                style: style_ParquedeExposiesFernandoCosta_91,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_91.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_92 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_92 = format_ParquedeExposiesFernandoCosta_92.readFeatures(json_ParquedeExposiesFernandoCosta_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_92.addFeatures(features_ParquedeExposiesFernandoCosta_92);
var lyr_ParquedeExposiesFernandoCosta_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_92, 
                style: style_ParquedeExposiesFernandoCosta_92,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_92.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueCaxambu_93 = new ol.format.GeoJSON();
var features_ParqueCaxambu_93 = format_ParqueCaxambu_93.readFeatures(json_ParqueCaxambu_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_93.addFeatures(features_ParqueCaxambu_93);
var lyr_ParqueCaxambu_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_93, 
                style: style_ParqueCaxambu_93,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_93.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_94 = new ol.format.GeoJSON();
var features_ParqueCaxambu_94 = format_ParqueCaxambu_94.readFeatures(json_ParqueCaxambu_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_94.addFeatures(features_ParqueCaxambu_94);
var lyr_ParqueCaxambu_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_94, 
                style: style_ParqueCaxambu_94,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_94.png" /> Parque Caxambu'
            });
var format_ComplexoPoliesportivo_95 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_95 = format_ComplexoPoliesportivo_95.readFeatures(json_ComplexoPoliesportivo_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_95.addFeatures(features_ComplexoPoliesportivo_95);
var lyr_ComplexoPoliesportivo_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_95, 
                style: style_ComplexoPoliesportivo_95,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_95.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_96 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_96 = format_ComplexoPoliesportivo_96.readFeatures(json_ComplexoPoliesportivo_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_96.addFeatures(features_ComplexoPoliesportivo_96);
var lyr_ComplexoPoliesportivo_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_96, 
                style: style_ComplexoPoliesportivo_96,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_96.png" /> Complexo Poliesportivo'
            });
var format_ParquedosTrabalhadores_97 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_97 = format_ParquedosTrabalhadores_97.readFeatures(json_ParquedosTrabalhadores_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_97.addFeatures(features_ParquedosTrabalhadores_97);
var lyr_ParquedosTrabalhadores_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_97, 
                style: style_ParquedosTrabalhadores_97,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_97.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_98 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_98 = format_ParquedosTrabalhadores_98.readFeatures(json_ParquedosTrabalhadores_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_98.addFeatures(features_ParquedosTrabalhadores_98);
var lyr_ParquedosTrabalhadores_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_98, 
                style: style_ParquedosTrabalhadores_98,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_98.png" /> Parque dos Trabalhadores'
            });
var format_JardimZoobotnico_99 = new ol.format.GeoJSON();
var features_JardimZoobotnico_99 = format_JardimZoobotnico_99.readFeatures(json_JardimZoobotnico_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnico_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnico_99.addFeatures(features_JardimZoobotnico_99);
var lyr_JardimZoobotnico_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnico_99, 
                style: style_JardimZoobotnico_99,
                popuplayertitle: 'Jardim Zoobotânico',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnico_99.png" /> Jardim Zoobotânico'
            });
var format_JardimZoobotnico_100 = new ol.format.GeoJSON();
var features_JardimZoobotnico_100 = format_JardimZoobotnico_100.readFeatures(json_JardimZoobotnico_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnico_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnico_100.addFeatures(features_JardimZoobotnico_100);
var lyr_JardimZoobotnico_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnico_100, 
                style: style_JardimZoobotnico_100,
                popuplayertitle: 'Jardim Zoobotânico',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnico_100.png" /> Jardim Zoobotânico'
            });
var format_LoteamentosRegularizados9unid_101 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_101 = format_LoteamentosRegularizados9unid_101.readFeatures(json_LoteamentosRegularizados9unid_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_101.addFeatures(features_LoteamentosRegularizados9unid_101);
var lyr_LoteamentosRegularizados9unid_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_101, 
                style: style_LoteamentosRegularizados9unid_101,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_101.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_LoteamentosRegularizados9unid_102 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_102 = format_LoteamentosRegularizados9unid_102.readFeatures(json_LoteamentosRegularizados9unid_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_102.addFeatures(features_LoteamentosRegularizados9unid_102);
var lyr_LoteamentosRegularizados9unid_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_102, 
                style: style_LoteamentosRegularizados9unid_102,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_102.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_Vivenna_103 = new ol.format.GeoJSON();
var features_Vivenna_103 = format_Vivenna_103.readFeatures(json_Vivenna_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_103.addFeatures(features_Vivenna_103);
var lyr_Vivenna_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_103, 
                style: style_Vivenna_103,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_103_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_103_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_103_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_103_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_103_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_103_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_103_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_103_7.png" /> VIELA<br />' });
var format_Vivenna_104 = new ol.format.GeoJSON();
var features_Vivenna_104 = format_Vivenna_104.readFeatures(json_Vivenna_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_104.addFeatures(features_Vivenna_104);
var lyr_Vivenna_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_104, 
                style: style_Vivenna_104,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_104.png" /> Vivenna'
            });
var format_VittaSoVicente_105 = new ol.format.GeoJSON();
var features_VittaSoVicente_105 = format_VittaSoVicente_105.readFeatures(json_VittaSoVicente_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_105.addFeatures(features_VittaSoVicente_105);
var lyr_VittaSoVicente_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_105, 
                style: style_VittaSoVicente_105,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_105_0.png" /> Ruas<br />\
    <img src="styles/legend/VittaSoVicente_105_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/VittaSoVicente_105_2.png" /> Área Verde<br />\
    <img src="styles/legend/VittaSoVicente_105_3.png" /> Área Lazer<br />\
    <img src="styles/legend/VittaSoVicente_105_4.png" /> Passeio<br />\
    <img src="styles/legend/VittaSoVicente_105_5.png" /> Vagas de Estacionamento<br />' });
var format_VittaSoVicente_106 = new ol.format.GeoJSON();
var features_VittaSoVicente_106 = format_VittaSoVicente_106.readFeatures(json_VittaSoVicente_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_106.addFeatures(features_VittaSoVicente_106);
var lyr_VittaSoVicente_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_106, 
                style: style_VittaSoVicente_106,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_106.png" /> Vitta São Vicente'
            });
var format_VittaAlvorada_107 = new ol.format.GeoJSON();
var features_VittaAlvorada_107 = format_VittaAlvorada_107.readFeatures(json_VittaAlvorada_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_107.addFeatures(features_VittaAlvorada_107);
var lyr_VittaAlvorada_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_107, 
                style: style_VittaAlvorada_107,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_107_0.png" /> Ruas<br />\
    <img src="styles/legend/VittaAlvorada_107_1.png" /> Área Institucional<br />\
    <img src="styles/legend/VittaAlvorada_107_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/VittaAlvorada_107_3.png" /> Área Verde<br />\
    <img src="styles/legend/VittaAlvorada_107_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/VittaAlvorada_107_5.png" /> Passeio<br />' });
var format_VittaAlvorada_108 = new ol.format.GeoJSON();
var features_VittaAlvorada_108 = format_VittaAlvorada_108.readFeatures(json_VittaAlvorada_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_108.addFeatures(features_VittaAlvorada_108);
var lyr_VittaAlvorada_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_108, 
                style: style_VittaAlvorada_108,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_108.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_109 = new ol.format.GeoJSON();
var features_VilaDiEspanha_109 = format_VilaDiEspanha_109.readFeatures(json_VilaDiEspanha_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_109.addFeatures(features_VilaDiEspanha_109);
var lyr_VilaDiEspanha_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_109, 
                style: style_VilaDiEspanha_109,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_109_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_109_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_109_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_109_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_109_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_109_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_109_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_109_7.png" /> VIELA<br />' });
var format_VilaDiEspanha_110 = new ol.format.GeoJSON();
var features_VilaDiEspanha_110 = format_VilaDiEspanha_110.readFeatures(json_VilaDiEspanha_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_110.addFeatures(features_VilaDiEspanha_110);
var lyr_VilaDiEspanha_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_110, 
                style: style_VilaDiEspanha_110,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/VilaDiEspanha_110.png" /> Vila Di Espanha'
            });
var format_VillaPucci_111 = new ol.format.GeoJSON();
var features_VillaPucci_111 = format_VillaPucci_111.readFeatures(json_VillaPucci_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_111.addFeatures(features_VillaPucci_111);
var lyr_VillaPucci_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_111, 
                style: style_VillaPucci_111,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_111_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_111_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_111_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_111_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_111_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_111_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaPucci_111_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/VillaPucci_111_7.png" /> RUAS<br />' });
var format_VillaPucci_112 = new ol.format.GeoJSON();
var features_VillaPucci_112 = format_VillaPucci_112.readFeatures(json_VillaPucci_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_112.addFeatures(features_VillaPucci_112);
var lyr_VillaPucci_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_112, 
                style: style_VillaPucci_112,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_112.png" /> Villa Pucci'
            });
var format_VillaDoratta_113 = new ol.format.GeoJSON();
var features_VillaDoratta_113 = format_VillaDoratta_113.readFeatures(json_VillaDoratta_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_113.addFeatures(features_VillaDoratta_113);
var lyr_VillaDoratta_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_113, 
                style: style_VillaDoratta_113,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_113_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_113_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_113_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_113_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_113_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_113_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_113_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_113_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_113_8.png" /> APP<br />' });
var format_VillaDoratta_114 = new ol.format.GeoJSON();
var features_VillaDoratta_114 = format_VillaDoratta_114.readFeatures(json_VillaDoratta_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_114.addFeatures(features_VillaDoratta_114);
var lyr_VillaDoratta_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_114, 
                style: style_VillaDoratta_114,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_114.png" /> Villa Doratta'
            });
var format_VillaBella_115 = new ol.format.GeoJSON();
var features_VillaBella_115 = format_VillaBella_115.readFeatures(json_VillaBella_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_115.addFeatures(features_VillaBella_115);
var lyr_VillaBella_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_115, 
                style: style_VillaBella_115,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_115_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_115_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_115_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_115_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_115_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_115_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaBella_115_6.png" /> RUAS<br />' });
var format_VillaBella_116 = new ol.format.GeoJSON();
var features_VillaBella_116 = format_VillaBella_116.readFeatures(json_VillaBella_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_116.addFeatures(features_VillaBella_116);
var lyr_VillaBella_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_116, 
                style: style_VillaBella_116,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_116.png" /> Villa Bella'
            });
var format_Versalhes_117 = new ol.format.GeoJSON();
var features_Versalhes_117 = format_Versalhes_117.readFeatures(json_Versalhes_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_117.addFeatures(features_Versalhes_117);
var lyr_Versalhes_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_117, 
                style: style_Versalhes_117,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_117_0.png" /> Ruas<br />\
    <img src="styles/legend/Versalhes_117_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Versalhes_117_2.png" /> Área Verde<br />\
    <img src="styles/legend/Versalhes_117_3.png" /> Área Lazer<br />\
    <img src="styles/legend/Versalhes_117_4.png" /> Passeio<br />\
    <img src="styles/legend/Versalhes_117_5.png" /> Vagas de Estacionamento<br />' });
var format_Versalhes_118 = new ol.format.GeoJSON();
var features_Versalhes_118 = format_Versalhes_118.readFeatures(json_Versalhes_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_118.addFeatures(features_Versalhes_118);
var lyr_Versalhes_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_118, 
                style: style_Versalhes_118,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_118.png" /> Versalhes'
            });
var format_TorontoResidence_119 = new ol.format.GeoJSON();
var features_TorontoResidence_119 = format_TorontoResidence_119.readFeatures(json_TorontoResidence_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_119.addFeatures(features_TorontoResidence_119);
var lyr_TorontoResidence_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_119, 
                style: style_TorontoResidence_119,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_119_0.png" /> Ruas<br />\
    <img src="styles/legend/TorontoResidence_119_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/TorontoResidence_119_2.png" /> Área Verde<br />\
    <img src="styles/legend/TorontoResidence_119_3.png" /> Lazer<br />\
    <img src="styles/legend/TorontoResidence_119_4.png" /> Passeio<br />\
    <img src="styles/legend/TorontoResidence_119_5.png" /> Vagas de Estacionamento<br />' });
var format_TorontoResidence_120 = new ol.format.GeoJSON();
var features_TorontoResidence_120 = format_TorontoResidence_120.readFeatures(json_TorontoResidence_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_120.addFeatures(features_TorontoResidence_120);
var lyr_TorontoResidence_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_120, 
                style: style_TorontoResidence_120,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_120.png" /> Toronto Residence'
            });
var format_TerraNova_121 = new ol.format.GeoJSON();
var features_TerraNova_121 = format_TerraNova_121.readFeatures(json_TerraNova_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_121.addFeatures(features_TerraNova_121);
var lyr_TerraNova_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_121, 
                style: style_TerraNova_121,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_121_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_121_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_121_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_121_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TerraNova_121_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_121_5.png" /> RUAS<br />' });
var format_TerraNova_122 = new ol.format.GeoJSON();
var features_TerraNova_122 = format_TerraNova_122.readFeatures(json_TerraNova_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_122.addFeatures(features_TerraNova_122);
var lyr_TerraNova_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_122, 
                style: style_TerraNova_122,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_122.png" /> Terra Nova'
            });
var format_Sonetto_123 = new ol.format.GeoJSON();
var features_Sonetto_123 = format_Sonetto_123.readFeatures(json_Sonetto_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_123.addFeatures(features_Sonetto_123);
var lyr_Sonetto_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_123, 
                style: style_Sonetto_123,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_123.png" /> Sonetto'
            });
var format_Sonetto_124 = new ol.format.GeoJSON();
var features_Sonetto_124 = format_Sonetto_124.readFeatures(json_Sonetto_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_124.addFeatures(features_Sonetto_124);
var lyr_Sonetto_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_124, 
                style: style_Sonetto_124,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_124.png" /> Sonetto'
            });
var format_SoCarlosII_125 = new ol.format.GeoJSON();
var features_SoCarlosII_125 = format_SoCarlosII_125.readFeatures(json_SoCarlosII_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SoCarlosII_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCarlosII_125.addFeatures(features_SoCarlosII_125);
var lyr_SoCarlosII_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCarlosII_125, 
                style: style_SoCarlosII_125,
                popuplayertitle: 'São Carlos II',
                interactive: true,
    title: 'São Carlos II<br />\
    <img src="styles/legend/SoCarlosII_125_0.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/SoCarlosII_125_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/SoCarlosII_125_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SoCarlosII_125_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SoCarlosII_125_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/SoCarlosII_125_5.png" /> RUAS<br />' });
var format_SoCarlosII_126 = new ol.format.GeoJSON();
var features_SoCarlosII_126 = format_SoCarlosII_126.readFeatures(json_SoCarlosII_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SoCarlosII_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoCarlosII_126.addFeatures(features_SoCarlosII_126);
var lyr_SoCarlosII_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoCarlosII_126, 
                style: style_SoCarlosII_126,
                popuplayertitle: 'São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/SoCarlosII_126.png" /> São Carlos II'
            });
var format_ServidoRamal138kVFranca4Guanabara_127 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_127 = format_ServidoRamal138kVFranca4Guanabara_127.readFeatures(json_ServidoRamal138kVFranca4Guanabara_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_127.addFeatures(features_ServidoRamal138kVFranca4Guanabara_127);
var lyr_ServidoRamal138kVFranca4Guanabara_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_127, 
                style: style_ServidoRamal138kVFranca4Guanabara_127,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_127.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_128 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_128 = format_ServidoRamal138kVFranca4Guanabara_128.readFeatures(json_ServidoRamal138kVFranca4Guanabara_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_128.addFeatures(features_ServidoRamal138kVFranca4Guanabara_128);
var lyr_ServidoRamal138kVFranca4Guanabara_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_128, 
                style: style_ServidoRamal138kVFranca4Guanabara_128,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_128.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_129 = new ol.format.GeoJSON();
var features_SantaLina_129 = format_SantaLina_129.readFeatures(json_SantaLina_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_129.addFeatures(features_SantaLina_129);
var lyr_SantaLina_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_129, 
                style: style_SantaLina_129,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_129_0.png" /> Ruas<br />\
    <img src="styles/legend/SantaLina_129_1.png" /> Lotes/Quadras<br />' });
var format_SantaLina_130 = new ol.format.GeoJSON();
var features_SantaLina_130 = format_SantaLina_130.readFeatures(json_SantaLina_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_130.addFeatures(features_SantaLina_130);
var lyr_SantaLina_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_130, 
                style: style_SantaLina_130,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_130.png" /> Santa Lina'
            });
var format_ResidencialYasminTorres_131 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_131 = format_ResidencialYasminTorres_131.readFeatures(json_ResidencialYasminTorres_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_131.addFeatures(features_ResidencialYasminTorres_131);
var lyr_ResidencialYasminTorres_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_131, 
                style: style_ResidencialYasminTorres_131,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_131.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_132 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_132 = format_ResidencialYasminTorres_132.readFeatures(json_ResidencialYasminTorres_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_132.addFeatures(features_ResidencialYasminTorres_132);
var lyr_ResidencialYasminTorres_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_132, 
                style: style_ResidencialYasminTorres_132,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_132.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialSoCarlosI_133 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_133 = format_ResidencialSoCarlosI_133.readFeatures(json_ResidencialSoCarlosI_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_133.addFeatures(features_ResidencialSoCarlosI_133);
var lyr_ResidencialSoCarlosI_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_133, 
                style: style_ResidencialSoCarlosI_133,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_133_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSoCarlosI_133_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSoCarlosI_133_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSoCarlosI_133_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSoCarlosI_133_4.png" /> Passeio<br />' });
var format_ResidencialSoCarlosI_134 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_134 = format_ResidencialSoCarlosI_134.readFeatures(json_ResidencialSoCarlosI_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_134.addFeatures(features_ResidencialSoCarlosI_134);
var lyr_ResidencialSoCarlosI_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_134, 
                style: style_ResidencialSoCarlosI_134,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_134.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_135 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_135 = format_ResidencialSantaIns_135.readFeatures(json_ResidencialSantaIns_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_135.addFeatures(features_ResidencialSantaIns_135);
var lyr_ResidencialSantaIns_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_135, 
                style: style_ResidencialSantaIns_135,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_135_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSantaIns_135_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSantaIns_135_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSantaIns_135_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSantaIns_135_4.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialSantaIns_135_5.png" /> Passeio<br />' });
var format_ResidencialSantaIns_136 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_136 = format_ResidencialSantaIns_136.readFeatures(json_ResidencialSantaIns_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_136.addFeatures(features_ResidencialSantaIns_136);
var lyr_ResidencialSantaIns_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_136, 
                style: style_ResidencialSantaIns_136,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_136.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_137 = new ol.format.GeoJSON();
var features_ResidencialSantaF_137 = format_ResidencialSantaF_137.readFeatures(json_ResidencialSantaF_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_137.addFeatures(features_ResidencialSantaF_137);
var lyr_ResidencialSantaF_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_137, 
                style: style_ResidencialSantaF_137,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_137_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialSantaF_137_1.png" /> Canteiro<br />\
    <img src="styles/legend/ResidencialSantaF_137_2.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialSantaF_137_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialSantaF_137_4.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialSantaF_137_5.png" /> Passeio<br />' });
var format_ResidencialSantaF_138 = new ol.format.GeoJSON();
var features_ResidencialSantaF_138 = format_ResidencialSantaF_138.readFeatures(json_ResidencialSantaF_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_138.addFeatures(features_ResidencialSantaF_138);
var lyr_ResidencialSantaF_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_138, 
                style: style_ResidencialSantaF_138,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_138.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_139 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_139 = format_ResidencialQuintadosOitis_139.readFeatures(json_ResidencialQuintadosOitis_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_139.addFeatures(features_ResidencialQuintadosOitis_139);
var lyr_ResidencialQuintadosOitis_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_139, 
                style: style_ResidencialQuintadosOitis_139,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_4.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_139_5.png" /> Ruas<br />' });
var format_ResidencialQuintadosOitis_140 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_140 = format_ResidencialQuintadosOitis_140.readFeatures(json_ResidencialQuintadosOitis_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_140.addFeatures(features_ResidencialQuintadosOitis_140);
var lyr_ResidencialQuintadosOitis_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_140, 
                style: style_ResidencialQuintadosOitis_140,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_140.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_141 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_141 = format_ResidencialQuintadoSol_141.readFeatures(json_ResidencialQuintadoSol_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_141.addFeatures(features_ResidencialQuintadoSol_141);
var lyr_ResidencialQuintadoSol_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_141, 
                style: style_ResidencialQuintadoSol_141,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_141_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_142 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_142 = format_ResidencialQuintadoSol_142.readFeatures(json_ResidencialQuintadoSol_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_142.addFeatures(features_ResidencialQuintadoSol_142);
var lyr_ResidencialQuintadoSol_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_142, 
                style: style_ResidencialQuintadoSol_142,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_142.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_143 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_143 = format_ResidencialPousoAlegreII_143.readFeatures(json_ResidencialPousoAlegreII_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_143.addFeatures(features_ResidencialPousoAlegreII_143);
var lyr_ResidencialPousoAlegreII_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_143, 
                style: style_ResidencialPousoAlegreII_143,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_143_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_144 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_144 = format_ResidencialPousoAlegreII_144.readFeatures(json_ResidencialPousoAlegreII_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_144.addFeatures(features_ResidencialPousoAlegreII_144);
var lyr_ResidencialPousoAlegreII_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_144, 
                style: style_ResidencialPousoAlegreII_144,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_144.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_145 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_145 = format_ResidencialPousoAlegre_145.readFeatures(json_ResidencialPousoAlegre_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_145.addFeatures(features_ResidencialPousoAlegre_145);
var lyr_ResidencialPousoAlegre_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_145, 
                style: style_ResidencialPousoAlegre_145,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_0.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_1.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_3.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_4.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_5.png" /> Servidão<br />\
    <img src="styles/legend/ResidencialPousoAlegre_145_6.png" /> Viela<br />' });
var format_ResidencialPousoAlegre_146 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_146 = format_ResidencialPousoAlegre_146.readFeatures(json_ResidencialPousoAlegre_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_146.addFeatures(features_ResidencialPousoAlegre_146);
var lyr_ResidencialPousoAlegre_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_146, 
                style: style_ResidencialPousoAlegre_146,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_146.png" /> Residencial Pouso Alegre'
            });
var format_ResicencialNairRetuciII_147 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_147 = format_ResicencialNairRetuciII_147.readFeatures(json_ResicencialNairRetuciII_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_147.addFeatures(features_ResicencialNairRetuciII_147);
var lyr_ResicencialNairRetuciII_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_147, 
                style: style_ResicencialNairRetuciII_147,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_147_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_148 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_148 = format_ResicencialNairRetuciII_148.readFeatures(json_ResicencialNairRetuciII_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_148.addFeatures(features_ResicencialNairRetuciII_148);
var lyr_ResicencialNairRetuciII_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_148, 
                style: style_ResicencialNairRetuciII_148,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_148.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_149 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_149 = format_ResicencialNairRetuci_149.readFeatures(json_ResicencialNairRetuci_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_149.addFeatures(features_ResicencialNairRetuci_149);
var lyr_ResicencialNairRetuci_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_149, 
                style: style_ResicencialNairRetuci_149,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_0.png" /> Ciclovia<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_1.png" /> Ruas<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_2.png" /> Área Institucional<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_4.png" /> Área Verde<br />\
    <img src="styles/legend/ResicencialNairRetuci_149_5.png" /> Passeio<br />' });
var format_ResicencialNairRetuci_150 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_150 = format_ResicencialNairRetuci_150.readFeatures(json_ResicencialNairRetuci_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_150.addFeatures(features_ResicencialNairRetuci_150);
var lyr_ResicencialNairRetuci_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_150, 
                style: style_ResicencialNairRetuci_150,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_150.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_151 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_151 = format_ResidencialMoradadoBosque_151.readFeatures(json_ResidencialMoradadoBosque_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_151.addFeatures(features_ResidencialMoradadoBosque_151);
var lyr_ResidencialMoradadoBosque_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_151, 
                style: style_ResidencialMoradadoBosque_151,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_151_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_152 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_152 = format_ResidencialMoradadoBosque_152.readFeatures(json_ResidencialMoradadoBosque_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_152.addFeatures(features_ResidencialMoradadoBosque_152);
var lyr_ResidencialMoradadoBosque_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_152, 
                style: style_ResidencialMoradadoBosque_152,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_152.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_153 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_153 = format_ResidencialMarthaHelena_153.readFeatures(json_ResidencialMarthaHelena_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_153.addFeatures(features_ResidencialMarthaHelena_153);
var lyr_ResidencialMarthaHelena_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_153, 
                style: style_ResidencialMarthaHelena_153,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
    title: 'Residencial Martha Helena<br />\
    <img src="styles/legend/ResidencialMarthaHelena_153_0.png" /> 0<br />\
    <img src="styles/legend/ResidencialMarthaHelena_153_1.png" /> Zona de Uso Residencial<br />' });
var format_ResidencialMarthaHelena_154 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_154 = format_ResidencialMarthaHelena_154.readFeatures(json_ResidencialMarthaHelena_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_154.addFeatures(features_ResidencialMarthaHelena_154);
var lyr_ResidencialMarthaHelena_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_154, 
                style: style_ResidencialMarthaHelena_154,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_154.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_155 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_155 = format_ResidencialMarioTasso_155.readFeatures(json_ResidencialMarioTasso_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_155.addFeatures(features_ResidencialMarioTasso_155);
var lyr_ResidencialMarioTasso_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_155, 
                style: style_ResidencialMarioTasso_155,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_155_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialMarioTasso_155_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialMarioTasso_155_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialMarioTasso_155_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialMarioTasso_155_4.png" /> Passeio<br />' });
var format_ResidencialMarioTasso_156 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_156 = format_ResidencialMarioTasso_156.readFeatures(json_ResidencialMarioTasso_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_156.addFeatures(features_ResidencialMarioTasso_156);
var lyr_ResidencialMarioTasso_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_156, 
                style: style_ResidencialMarioTasso_156,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_156.png" /> Residencial Mario Tasso'
            });
var format_ResidencialJabuticabeiras_157 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_157 = format_ResidencialJabuticabeiras_157.readFeatures(json_ResidencialJabuticabeiras_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_157.addFeatures(features_ResidencialJabuticabeiras_157);
var lyr_ResidencialJabuticabeiras_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_157, 
                style: style_ResidencialJabuticabeiras_157,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_157_6.png" /> VIELA<br />' });
var format_ResidencialJabuticabeiras_158 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_158 = format_ResidencialJabuticabeiras_158.readFeatures(json_ResidencialJabuticabeiras_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_158.addFeatures(features_ResidencialJabuticabeiras_158);
var lyr_ResidencialJabuticabeiras_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_158, 
                style: style_ResidencialJabuticabeiras_158,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_158.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialDomingosJardini_159 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_159 = format_ResidencialDomingosJardini_159.readFeatures(json_ResidencialDomingosJardini_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_159.addFeatures(features_ResidencialDomingosJardini_159);
var lyr_ResidencialDomingosJardini_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_159, 
                style: style_ResidencialDomingosJardini_159,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_0.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_3.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_4.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialDomingosJardini_159_5.png" /> Passeio<br />' });
var format_ResidencialDomingosJardini_160 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_160 = format_ResidencialDomingosJardini_160.readFeatures(json_ResidencialDomingosJardini_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_160.addFeatures(features_ResidencialDomingosJardini_160);
var lyr_ResidencialDomingosJardini_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_160, 
                style: style_ResidencialDomingosJardini_160,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_160.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_161 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_161 = format_ResidencialCintraAlves_161.readFeatures(json_ResidencialCintraAlves_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_161.addFeatures(features_ResidencialCintraAlves_161);
var lyr_ResidencialCintraAlves_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_161, 
                style: style_ResidencialCintraAlves_161,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_0.png" /> Área Lazer<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_2.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_4.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_5.png" /> Ruas<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_6.png" /> Servidão<br />\
    <img src="styles/legend/ResidencialCintraAlves_161_7.png" /> Viela<br />' });
var format_ResidencialCintraAlves_162 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_162 = format_ResidencialCintraAlves_162.readFeatures(json_ResidencialCintraAlves_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_162.addFeatures(features_ResidencialCintraAlves_162);
var lyr_ResidencialCintraAlves_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_162, 
                style: style_ResidencialCintraAlves_162,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_162.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_163 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_163 = format_ResidencialBoaVista_163.readFeatures(json_ResidencialBoaVista_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_163.addFeatures(features_ResidencialBoaVista_163);
var lyr_ResidencialBoaVista_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_163, 
                style: style_ResidencialBoaVista_163,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_163_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_163_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_163_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_163_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_163_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_163_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_163_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_163_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_164 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_164 = format_ResidencialBoaVista_164.readFeatures(json_ResidencialBoaVista_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_164.addFeatures(features_ResidencialBoaVista_164);
var lyr_ResidencialBoaVista_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_164, 
                style: style_ResidencialBoaVista_164,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_164.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_165 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_165 = format_ResidencialAltodaFazenda_165.readFeatures(json_ResidencialAltodaFazenda_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_165.addFeatures(features_ResidencialAltodaFazenda_165);
var lyr_ResidencialAltodaFazenda_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_165, 
                style: style_ResidencialAltodaFazenda_165,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_165_0.png" /> Área Institucional<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_165_1.png" /> Área Verde<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_165_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_165_3.png" /> Passeio<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_165_4.png" /> Ruas<br />' });
var format_ResidencialAltodaFazenda_166 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_166 = format_ResidencialAltodaFazenda_166.readFeatures(json_ResidencialAltodaFazenda_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_166.addFeatures(features_ResidencialAltodaFazenda_166);
var lyr_ResidencialAltodaFazenda_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_166, 
                style: style_ResidencialAltodaFazenda_166,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_166.png" /> Residencial Alto da Fazenda'
            });
var format_RecantoMeneghetti_167 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_167 = format_RecantoMeneghetti_167.readFeatures(json_RecantoMeneghetti_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_167.addFeatures(features_RecantoMeneghetti_167);
var lyr_RecantoMeneghetti_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_167, 
                style: style_RecantoMeneghetti_167,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_167_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_167_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_167_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_167_3.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_167_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_167_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_167_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_167_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_167_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_167_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_168 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_168 = format_RecantoMeneghetti_168.readFeatures(json_RecantoMeneghetti_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_168.addFeatures(features_RecantoMeneghetti_168);
var lyr_RecantoMeneghetti_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_168, 
                style: style_RecantoMeneghetti_168,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_168.png" /> Recanto Meneghetti'
            });
var format_ParqueVillaLobos_169 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_169 = format_ParqueVillaLobos_169.readFeatures(json_ParqueVillaLobos_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_169.addFeatures(features_ParqueVillaLobos_169);
var lyr_ParqueVillaLobos_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_169, 
                style: style_ParqueVillaLobos_169,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_169_0.png" /> Ruas<br />\
    <img src="styles/legend/ParqueVillaLobos_169_1.png" /> Área Institucional<br />\
    <img src="styles/legend/ParqueVillaLobos_169_2.png" /> Área Verde<br />\
    <img src="styles/legend/ParqueVillaLobos_169_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/ParqueVillaLobos_169_4.png" /> Passeio<br />\
    <img src="styles/legend/ParqueVillaLobos_169_5.png" /> Lotes Residenciais<br />' });
var format_ParqueVillaLobos_170 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_170 = format_ParqueVillaLobos_170.readFeatures(json_ParqueVillaLobos_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_170.addFeatures(features_ParqueVillaLobos_170);
var lyr_ParqueVillaLobos_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_170, 
                style: style_ParqueVillaLobos_170,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_170.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_171 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_171 = format_ParquePalmeiraImperial_171.readFeatures(json_ParquePalmeiraImperial_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_171.addFeatures(features_ParquePalmeiraImperial_171);
var lyr_ParquePalmeiraImperial_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_171, 
                style: style_ParquePalmeiraImperial_171,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_171_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_172 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_172 = format_ParquePalmeiraImperial_172.readFeatures(json_ParquePalmeiraImperial_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_172.addFeatures(features_ParquePalmeiraImperial_172);
var lyr_ParquePalmeiraImperial_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_172, 
                style: style_ParquePalmeiraImperial_172,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_172.png" /> Parque Palmeira Imperial'
            });
var format_ParqueFlora_173 = new ol.format.GeoJSON();
var features_ParqueFlora_173 = format_ParqueFlora_173.readFeatures(json_ParqueFlora_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_173.addFeatures(features_ParqueFlora_173);
var lyr_ParqueFlora_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_173, 
                style: style_ParqueFlora_173,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_173_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_173_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_173_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_173_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_173_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/ParqueFlora_173_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_173_6.png" /> VIELA<br />' });
var format_ParqueFlora_174 = new ol.format.GeoJSON();
var features_ParqueFlora_174 = format_ParqueFlora_174.readFeatures(json_ParqueFlora_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_174.addFeatures(features_ParqueFlora_174);
var lyr_ParqueFlora_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_174, 
                style: style_ParqueFlora_174,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_174.png" /> Parque Flora'
            });
var format_ParquedosSabias_175 = new ol.format.GeoJSON();
var features_ParquedosSabias_175 = format_ParquedosSabias_175.readFeatures(json_ParquedosSabias_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_175.addFeatures(features_ParquedosSabias_175);
var lyr_ParquedosSabias_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_175, 
                style: style_ParquedosSabias_175,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_175_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_175_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_175_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_175_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_175_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_175_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/ParquedosSabias_175_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_175_7.png" /> VIELA<br />' });
var format_ParquedosSabias_176 = new ol.format.GeoJSON();
var features_ParquedosSabias_176 = format_ParquedosSabias_176.readFeatures(json_ParquedosSabias_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_176.addFeatures(features_ParquedosSabias_176);
var lyr_ParquedosSabias_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_176, 
                style: style_ParquedosSabias_176,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_176.png" /> Parque dos Sabias'
            });
var format_ParagonII_177 = new ol.format.GeoJSON();
var features_ParagonII_177 = format_ParagonII_177.readFeatures(json_ParagonII_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonII_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonII_177.addFeatures(features_ParagonII_177);
var lyr_ParagonII_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonII_177, 
                style: style_ParagonII_177,
                popuplayertitle: 'Paragon II',
                interactive: true,
    title: 'Paragon II<br />\
    <img src="styles/legend/ParagonII_177_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonII_177_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonII_177_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonII_177_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonII_177_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonII_177_5.png" /> RUAS<br />' });
var format_ParagonII_178 = new ol.format.GeoJSON();
var features_ParagonII_178 = format_ParagonII_178.readFeatures(json_ParagonII_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonII_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonII_178.addFeatures(features_ParagonII_178);
var lyr_ParagonII_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonII_178, 
                style: style_ParagonII_178,
                popuplayertitle: 'Paragon II',
                interactive: true,
                title: '<img src="styles/legend/ParagonII_178.png" /> Paragon II'
            });
var format_Paragon_179 = new ol.format.GeoJSON();
var features_Paragon_179 = format_Paragon_179.readFeatures(json_Paragon_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_179.addFeatures(features_Paragon_179);
var lyr_Paragon_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_179, 
                style: style_Paragon_179,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_179_0.png" /> Ruas<br />\
    <img src="styles/legend/Paragon_179_1.png" /> Área Institucional<br />\
    <img src="styles/legend/Paragon_179_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Paragon_179_3.png" /> Área Verde<br />\
    <img src="styles/legend/Paragon_179_4.png" /> Viela<br />\
    <img src="styles/legend/Paragon_179_5.png" /> Área Lazer<br />\
    <img src="styles/legend/Paragon_179_6.png" /> Passeio<br />' });
var format_Paragon_180 = new ol.format.GeoJSON();
var features_Paragon_180 = format_Paragon_180.readFeatures(json_Paragon_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_180.addFeatures(features_Paragon_180);
var lyr_Paragon_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_180, 
                style: style_Paragon_180,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_180.png" /> Paragon'
            });
var format_PalmeiraReal_181 = new ol.format.GeoJSON();
var features_PalmeiraReal_181 = format_PalmeiraReal_181.readFeatures(json_PalmeiraReal_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_181.addFeatures(features_PalmeiraReal_181);
var lyr_PalmeiraReal_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_181, 
                style: style_PalmeiraReal_181,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_181_0.png" /> Ruas<br />\
    <img src="styles/legend/PalmeiraReal_181_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/PalmeiraReal_181_2.png" /> Área Verde<br />\
    <img src="styles/legend/PalmeiraReal_181_3.png" /> Área Lazer<br />\
    <img src="styles/legend/PalmeiraReal_181_4.png" /> Passeio<br />\
    <img src="styles/legend/PalmeiraReal_181_5.png" /> Vagas de Estacionamento<br />' });
var format_PalmeiraReal_182 = new ol.format.GeoJSON();
var features_PalmeiraReal_182 = format_PalmeiraReal_182.readFeatures(json_PalmeiraReal_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_182.addFeatures(features_PalmeiraReal_182);
var lyr_PalmeiraReal_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_182, 
                style: style_PalmeiraReal_182,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_182.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_183 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_183 = format_MoradadoVerdeII_183.readFeatures(json_MoradadoVerdeII_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_183.addFeatures(features_MoradadoVerdeII_183);
var lyr_MoradadoVerdeII_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_183, 
                style: style_MoradadoVerdeII_183,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_183_0.png" /> Ruas<br />\
    <img src="styles/legend/MoradadoVerdeII_183_1.png" /> Área Institucional<br />\
    <img src="styles/legend/MoradadoVerdeII_183_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/MoradadoVerdeII_183_3.png" /> Área Verde<br />\
    <img src="styles/legend/MoradadoVerdeII_183_4.png" /> Área Lazer<br />\
    <img src="styles/legend/MoradadoVerdeII_183_5.png" /> Passeio<br />\
    <img src="styles/legend/MoradadoVerdeII_183_6.png" /> Lotes Mistos<br />' });
var format_MoradadoVerdeII_184 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_184 = format_MoradadoVerdeII_184.readFeatures(json_MoradadoVerdeII_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_184.addFeatures(features_MoradadoVerdeII_184);
var lyr_MoradadoVerdeII_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_184, 
                style: style_MoradadoVerdeII_184,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_184.png" /> Morada do Verde II'
            });
var format_MoradadaMata_185 = new ol.format.GeoJSON();
var features_MoradadaMata_185 = format_MoradadaMata_185.readFeatures(json_MoradadaMata_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_185.addFeatures(features_MoradadaMata_185);
var lyr_MoradadaMata_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_185, 
                style: style_MoradadaMata_185,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_185_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_185_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_185_2.png" /> ÁREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_185_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_185_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_185_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_185_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/MoradadaMata_185_7.png" /> RUAS<br />' });
var format_MoradadaMata_186 = new ol.format.GeoJSON();
var features_MoradadaMata_186 = format_MoradadaMata_186.readFeatures(json_MoradadaMata_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_186.addFeatures(features_MoradadaMata_186);
var lyr_MoradadaMata_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_186, 
                style: style_MoradadaMata_186,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_186.png" /> Morada da Mata'
            });
var format_Monti_187 = new ol.format.GeoJSON();
var features_Monti_187 = format_Monti_187.readFeatures(json_Monti_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_187.addFeatures(features_Monti_187);
var lyr_Monti_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_187, 
                style: style_Monti_187,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_187_0.png" /> Ruas<br />\
    <img src="styles/legend/Monti_187_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Monti_187_2.png" /> Área Verde<br />\
    <img src="styles/legend/Monti_187_3.png" /> Área Lazer<br />\
    <img src="styles/legend/Monti_187_4.png" /> Passeio<br />\
    <img src="styles/legend/Monti_187_5.png" /> Vagas de Estacionamento<br />' });
var format_Monti_188 = new ol.format.GeoJSON();
var features_Monti_188 = format_Monti_188.readFeatures(json_Monti_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_188.addFeatures(features_Monti_188);
var lyr_Monti_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_188, 
                style: style_Monti_188,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_188.png" /> Montié'
            });
var format_MontBlancResidence_189 = new ol.format.GeoJSON();
var features_MontBlancResidence_189 = format_MontBlancResidence_189.readFeatures(json_MontBlancResidence_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_189.addFeatures(features_MontBlancResidence_189);
var lyr_MontBlancResidence_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_189, 
                style: style_MontBlancResidence_189,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_189.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_190 = new ol.format.GeoJSON();
var features_MontBlancResidence_190 = format_MontBlancResidence_190.readFeatures(json_MontBlancResidence_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_190.addFeatures(features_MontBlancResidence_190);
var lyr_MontBlancResidence_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_190, 
                style: style_MontBlancResidence_190,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_190.png" /> Mont Blanc Residence'
            });
var format_MarianaAlarcon_191 = new ol.format.GeoJSON();
var features_MarianaAlarcon_191 = format_MarianaAlarcon_191.readFeatures(json_MarianaAlarcon_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MarianaAlarcon_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_191.addFeatures(features_MarianaAlarcon_191);
var lyr_MarianaAlarcon_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_191, 
                style: style_MarianaAlarcon_191,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
    title: 'Mariana Alarcon<br />\
    <img src="styles/legend/MarianaAlarcon_191_0.png" /> APP<br />\
    <img src="styles/legend/MarianaAlarcon_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MarianaAlarcon_191_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MarianaAlarcon_191_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MarianaAlarcon_191_4.png" /> LOTES<br />\
    <img src="styles/legend/MarianaAlarcon_191_5.png" /> PASSEIO<br />\
    <img src="styles/legend/MarianaAlarcon_191_6.png" /> RUAS<br />' });
var format_MarianaAlarcon_192 = new ol.format.GeoJSON();
var features_MarianaAlarcon_192 = format_MarianaAlarcon_192.readFeatures(json_MarianaAlarcon_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MarianaAlarcon_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_192.addFeatures(features_MarianaAlarcon_192);
var lyr_MarianaAlarcon_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_192, 
                style: style_MarianaAlarcon_192,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/MarianaAlarcon_192.png" /> Mariana Alarcon'
            });
var format_Loteamentolamo_193 = new ol.format.GeoJSON();
var features_Loteamentolamo_193 = format_Loteamentolamo_193.readFeatures(json_Loteamentolamo_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_193.addFeatures(features_Loteamentolamo_193);
var lyr_Loteamentolamo_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_193, 
                style: style_Loteamentolamo_193,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_193_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_193_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_193_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_193_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_193_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_193_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_193_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_193_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_193_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_193_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_193_10.png" /> VIELA<br />' });
var format_Loteamentolamo_194 = new ol.format.GeoJSON();
var features_Loteamentolamo_194 = format_Loteamentolamo_194.readFeatures(json_Loteamentolamo_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_194.addFeatures(features_Loteamentolamo_194);
var lyr_Loteamentolamo_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_194, 
                style: style_Loteamentolamo_194,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_194.png" /> Loteamento Álamo'
            });
var format_JardimMariaLuiza_195 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_195 = format_JardimMariaLuiza_195.readFeatures(json_JardimMariaLuiza_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_195.addFeatures(features_JardimMariaLuiza_195);
var lyr_JardimMariaLuiza_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_195, 
                style: style_JardimMariaLuiza_195,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_195_0.png" /> Ruas<br />\
    <img src="styles/legend/JardimMariaLuiza_195_1.png" /> Área Institucional<br />\
    <img src="styles/legend/JardimMariaLuiza_195_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/JardimMariaLuiza_195_3.png" /> Área Verde<br />\
    <img src="styles/legend/JardimMariaLuiza_195_4.png" /> Passeio<br />' });
var format_JardimMariaLuiza_196 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_196 = format_JardimMariaLuiza_196.readFeatures(json_JardimMariaLuiza_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_196.addFeatures(features_JardimMariaLuiza_196);
var lyr_JardimMariaLuiza_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_196, 
                style: style_JardimMariaLuiza_196,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_196.png" /> Jardim Maria Luiza'
            });
var format_JardimHorizonte_197 = new ol.format.GeoJSON();
var features_JardimHorizonte_197 = format_JardimHorizonte_197.readFeatures(json_JardimHorizonte_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_197.addFeatures(features_JardimHorizonte_197);
var lyr_JardimHorizonte_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_197, 
                style: style_JardimHorizonte_197,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_197_0.png" /> Ruas<br />\
    <img src="styles/legend/JardimHorizonte_197_1.png" /> Área Institucional<br />\
    <img src="styles/legend/JardimHorizonte_197_2.png" /> Área Verde<br />\
    <img src="styles/legend/JardimHorizonte_197_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/JardimHorizonte_197_4.png" /> Passeio<br />\
    <img src="styles/legend/JardimHorizonte_197_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/JardimHorizonte_197_6.png" /> Lotes Residenciais<br />' });
var format_JardimHorizonte_198 = new ol.format.GeoJSON();
var features_JardimHorizonte_198 = format_JardimHorizonte_198.readFeatures(json_JardimHorizonte_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_198.addFeatures(features_JardimHorizonte_198);
var lyr_JardimHorizonte_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_198, 
                style: style_JardimHorizonte_198,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_198.png" /> Jardim Horizonte'
            });
var format_JardimFlora_199 = new ol.format.GeoJSON();
var features_JardimFlora_199 = format_JardimFlora_199.readFeatures(json_JardimFlora_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_199.addFeatures(features_JardimFlora_199);
var lyr_JardimFlora_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_199, 
                style: style_JardimFlora_199,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_199_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_199_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_199_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_199_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_199_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_199_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_199_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_199_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_199_8.png" /> RUAS<br />' });
var format_JardimFlora_200 = new ol.format.GeoJSON();
var features_JardimFlora_200 = format_JardimFlora_200.readFeatures(json_JardimFlora_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_200.addFeatures(features_JardimFlora_200);
var lyr_JardimFlora_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_200, 
                style: style_JardimFlora_200,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_200.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_201 = new ol.format.GeoJSON();
var features_IrineuZanetiII_201 = format_IrineuZanetiII_201.readFeatures(json_IrineuZanetiII_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_201.addFeatures(features_IrineuZanetiII_201);
var lyr_IrineuZanetiII_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_201, 
                style: style_IrineuZanetiII_201,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_201_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_201_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_201_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_201_3.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_201_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/IrineuZanetiII_201_5.png" /> RUAS<br />' });
var format_IrineuZanetiII_202 = new ol.format.GeoJSON();
var features_IrineuZanetiII_202 = format_IrineuZanetiII_202.readFeatures(json_IrineuZanetiII_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_202.addFeatures(features_IrineuZanetiII_202);
var lyr_IrineuZanetiII_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_202, 
                style: style_IrineuZanetiII_202,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_202.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_203 = new ol.format.GeoJSON();
var features_Infratcnica_203 = format_Infratcnica_203.readFeatures(json_Infratcnica_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_203.addFeatures(features_Infratcnica_203);
var lyr_Infratcnica_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_203, 
                style: style_Infratcnica_203,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_203_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_203_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_203_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_203_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_203_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/Infratcnica_203_5.png" /> RUAS<br />' });
var format_Infratcnica_204 = new ol.format.GeoJSON();
var features_Infratcnica_204 = format_Infratcnica_204.readFeatures(json_Infratcnica_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_204.addFeatures(features_Infratcnica_204);
var lyr_Infratcnica_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_204, 
                style: style_Infratcnica_204,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_204.png" /> Infratécnica'
            });
var format_HorizResidence_205 = new ol.format.GeoJSON();
var features_HorizResidence_205 = format_HorizResidence_205.readFeatures(json_HorizResidence_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_205.addFeatures(features_HorizResidence_205);
var lyr_HorizResidence_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_205, 
                style: style_HorizResidence_205,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_205.png" /> Horiz Residence'
            });
var format_HorizResidence_206 = new ol.format.GeoJSON();
var features_HorizResidence_206 = format_HorizResidence_206.readFeatures(json_HorizResidence_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_206.addFeatures(features_HorizResidence_206);
var lyr_HorizResidence_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_206, 
                style: style_HorizResidence_206,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_206.png" /> Horiz Residence'
            });
var format_Ferracini_207 = new ol.format.GeoJSON();
var features_Ferracini_207 = format_Ferracini_207.readFeatures(json_Ferracini_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_207.addFeatures(features_Ferracini_207);
var lyr_Ferracini_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_207, 
                style: style_Ferracini_207,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_207_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_207_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_207_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_207_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_207_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_207_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/Ferracini_207_6.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_207_7.png" /> VIELA<br />' });
var format_Ferracini_208 = new ol.format.GeoJSON();
var features_Ferracini_208 = format_Ferracini_208.readFeatures(json_Ferracini_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_208.addFeatures(features_Ferracini_208);
var lyr_Ferracini_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_208, 
                style: style_Ferracini_208,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_208.png" /> Ferracini'
            });
var format_FazendaProgresso_209 = new ol.format.GeoJSON();
var features_FazendaProgresso_209 = format_FazendaProgresso_209.readFeatures(json_FazendaProgresso_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_209.addFeatures(features_FazendaProgresso_209);
var lyr_FazendaProgresso_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_209, 
                style: style_FazendaProgresso_209,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_209.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_210 = new ol.format.GeoJSON();
var features_FazendaProgresso_210 = format_FazendaProgresso_210.readFeatures(json_FazendaProgresso_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_210.addFeatures(features_FazendaProgresso_210);
var lyr_FazendaProgresso_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_210, 
                style: style_FazendaProgresso_210,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_210.png" /> Fazenda Progresso'
            });
var format_Essence_211 = new ol.format.GeoJSON();
var features_Essence_211 = format_Essence_211.readFeatures(json_Essence_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_211.addFeatures(features_Essence_211);
var lyr_Essence_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_211, 
                style: style_Essence_211,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_211.png" /> Essence'
            });
var format_Essence_212 = new ol.format.GeoJSON();
var features_Essence_212 = format_Essence_212.readFeatures(json_Essence_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_212.addFeatures(features_Essence_212);
var lyr_Essence_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_212, 
                style: style_Essence_212,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_212.png" /> Essence'
            });
var format_Elias_213 = new ol.format.GeoJSON();
var features_Elias_213 = format_Elias_213.readFeatures(json_Elias_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_213.addFeatures(features_Elias_213);
var lyr_Elias_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_213, 
                style: style_Elias_213,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_213_0.png" /> Ruas<br />\
    <img src="styles/legend/Elias_213_1.png" /> Área Institucional<br />\
    <img src="styles/legend/Elias_213_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/Elias_213_3.png" /> Área Verde<br />\
    <img src="styles/legend/Elias_213_4.png" /> Área Lazer<br />\
    <img src="styles/legend/Elias_213_5.png" /> Passeio<br />\
    <img src="styles/legend/Elias_213_6.png" /> Lotes mistos<br />' });
var format_Elias_214 = new ol.format.GeoJSON();
var features_Elias_214 = format_Elias_214.readFeatures(json_Elias_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_214.addFeatures(features_Elias_214);
var lyr_Elias_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_214, 
                style: style_Elias_214,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_214.png" /> Elias'
            });
var format_EdifcioSolNascente_215 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_215 = format_EdifcioSolNascente_215.readFeatures(json_EdifcioSolNascente_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_215.addFeatures(features_EdifcioSolNascente_215);
var lyr_EdifcioSolNascente_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_215, 
                style: style_EdifcioSolNascente_215,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_215.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_216 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_216 = format_EdifcioSolNascente_216.readFeatures(json_EdifcioSolNascente_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_216.addFeatures(features_EdifcioSolNascente_216);
var lyr_EdifcioSolNascente_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_216, 
                style: style_EdifcioSolNascente_216,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_216.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_217 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_217 = format_EdifcioRuadoSol_217.readFeatures(json_EdifcioRuadoSol_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_217.addFeatures(features_EdifcioRuadoSol_217);
var lyr_EdifcioRuadoSol_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_217, 
                style: style_EdifcioRuadoSol_217,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_217.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_218 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_218 = format_EdifcioRuadoSol_218.readFeatures(json_EdifcioRuadoSol_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_218.addFeatures(features_EdifcioRuadoSol_218);
var lyr_EdifcioRuadoSol_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_218, 
                style: style_EdifcioRuadoSol_218,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_218.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_219 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_219 = format_EdifcioResidencialHope_219.readFeatures(json_EdifcioResidencialHope_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_219.addFeatures(features_EdifcioResidencialHope_219);
var lyr_EdifcioResidencialHope_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_219, 
                style: style_EdifcioResidencialHope_219,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_219.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_220 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_220 = format_EdifcioResidencialHope_220.readFeatures(json_EdifcioResidencialHope_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_220.addFeatures(features_EdifcioResidencialHope_220);
var lyr_EdifcioResidencialHope_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_220, 
                style: style_EdifcioResidencialHope_220,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_220.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_221 = new ol.format.GeoJSON();
var features_DiocesedeFranca_221 = format_DiocesedeFranca_221.readFeatures(json_DiocesedeFranca_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_221.addFeatures(features_DiocesedeFranca_221);
var lyr_DiocesedeFranca_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_221, 
                style: style_DiocesedeFranca_221,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_221_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_221_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_221_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_221_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_221_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_221_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_221_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_222 = new ol.format.GeoJSON();
var features_DiocesedeFranca_222 = format_DiocesedeFranca_222.readFeatures(json_DiocesedeFranca_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_222.addFeatures(features_DiocesedeFranca_222);
var lyr_DiocesedeFranca_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_222, 
                style: style_DiocesedeFranca_222,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_222.png" /> Diocese de Franca'
            });
var format_DaVinci_223 = new ol.format.GeoJSON();
var features_DaVinci_223 = format_DaVinci_223.readFeatures(json_DaVinci_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_223.addFeatures(features_DaVinci_223);
var lyr_DaVinci_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_223, 
                style: style_DaVinci_223,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_223.png" /> Da Vinci'
            });
var format_DaVinci_224 = new ol.format.GeoJSON();
var features_DaVinci_224 = format_DaVinci_224.readFeatures(json_DaVinci_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_224.addFeatures(features_DaVinci_224);
var lyr_DaVinci_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_224, 
                style: style_DaVinci_224,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_224.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_225 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_225 = format_CondomnioIICityPetrpolis_225.readFeatures(json_CondomnioIICityPetrpolis_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_225.addFeatures(features_CondomnioIICityPetrpolis_225);
var lyr_CondomnioIICityPetrpolis_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_225, 
                style: style_CondomnioIICityPetrpolis_225,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_225_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_226 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_226 = format_CondomnioIICityPetrpolis_226.readFeatures(json_CondomnioIICityPetrpolis_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_226.addFeatures(features_CondomnioIICityPetrpolis_226);
var lyr_CondomnioIICityPetrpolis_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_226, 
                style: style_CondomnioIICityPetrpolis_226,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_226.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_227 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_227 = format_CondomnioICityPetrpolis_227.readFeatures(json_CondomnioICityPetrpolis_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_227.addFeatures(features_CondomnioICityPetrpolis_227);
var lyr_CondomnioICityPetrpolis_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_227, 
                style: style_CondomnioICityPetrpolis_227,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_227_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_228 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_228 = format_CondomnioICityPetrpolis_228.readFeatures(json_CondomnioICityPetrpolis_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_228.addFeatures(features_CondomnioICityPetrpolis_228);
var lyr_CondomnioICityPetrpolis_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_228, 
                style: style_CondomnioICityPetrpolis_228,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_228.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_229 = new ol.format.GeoJSON();
var features_Colorado_229 = format_Colorado_229.readFeatures(json_Colorado_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_229.addFeatures(features_Colorado_229);
var lyr_Colorado_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_229, 
                style: style_Colorado_229,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_229_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_229_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_229_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_229_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_229_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_229_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/Colorado_229_6.png" /> RUAS<br />' });
var format_Colorado_230 = new ol.format.GeoJSON();
var features_Colorado_230 = format_Colorado_230.readFeatures(json_Colorado_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_230.addFeatures(features_Colorado_230);
var lyr_Colorado_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_230, 
                style: style_Colorado_230,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_230.png" /> Colorado'
            });
var format_CidadeJardim_231 = new ol.format.GeoJSON();
var features_CidadeJardim_231 = format_CidadeJardim_231.readFeatures(json_CidadeJardim_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_231.addFeatures(features_CidadeJardim_231);
var lyr_CidadeJardim_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_231, 
                style: style_CidadeJardim_231,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_231_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_231_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_231_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_231_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_231_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_231_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_231_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_231_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_232 = new ol.format.GeoJSON();
var features_CidadeJardim_232 = format_CidadeJardim_232.readFeatures(json_CidadeJardim_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_232.addFeatures(features_CidadeJardim_232);
var lyr_CidadeJardim_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_232, 
                style: style_CidadeJardim_232,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_232.png" /> Cidade Jardim'
            });
var format_BordadaMata_233 = new ol.format.GeoJSON();
var features_BordadaMata_233 = format_BordadaMata_233.readFeatures(json_BordadaMata_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_233.addFeatures(features_BordadaMata_233);
var lyr_BordadaMata_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_233, 
                style: style_BordadaMata_233,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_233_0.png" /> Ruas<br />\
    <img src="styles/legend/BordadaMata_233_1.png" /> Área Institucional<br />\
    <img src="styles/legend/BordadaMata_233_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/BordadaMata_233_3.png" /> Área Verde<br />\
    <img src="styles/legend/BordadaMata_233_4.png" /> Área Lazer<br />\
    <img src="styles/legend/BordadaMata_233_5.png" /> Passeio<br />\
    <img src="styles/legend/BordadaMata_233_6.png" /> Represa<br />' });
var format_BordadaMata_234 = new ol.format.GeoJSON();
var features_BordadaMata_234 = format_BordadaMata_234.readFeatures(json_BordadaMata_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_234.addFeatures(features_BordadaMata_234);
var lyr_BordadaMata_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_234, 
                style: style_BordadaMata_234,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_234.png" /> Borda da Mata'
            });
var format_Arizona_235 = new ol.format.GeoJSON();
var features_Arizona_235 = format_Arizona_235.readFeatures(json_Arizona_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_235.addFeatures(features_Arizona_235);
var lyr_Arizona_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_235, 
                style: style_Arizona_235,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_235_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_235_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_235_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_235_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_235_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_235_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_235_6.png" /> VIELA<br />' });
var format_Arizona_236 = new ol.format.GeoJSON();
var features_Arizona_236 = format_Arizona_236.readFeatures(json_Arizona_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_236.addFeatures(features_Arizona_236);
var lyr_Arizona_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_236, 
                style: style_Arizona_236,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_236.png" /> Arizona'
            });
var format_Adonis_237 = new ol.format.GeoJSON();
var features_Adonis_237 = format_Adonis_237.readFeatures(json_Adonis_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Adonis_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adonis_237.addFeatures(features_Adonis_237);
var lyr_Adonis_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adonis_237, 
                style: style_Adonis_237,
                popuplayertitle: 'Adonis',
                interactive: true,
    title: 'Adonis<br />\
    <img src="styles/legend/Adonis_237_0.png" /> APP<br />\
    <img src="styles/legend/Adonis_237_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/Adonis_237_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/Adonis_237_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Adonis_237_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/Adonis_237_5.png" /> RUAS<br />' });
var format_Adonis_238 = new ol.format.GeoJSON();
var features_Adonis_238 = format_Adonis_238.readFeatures(json_Adonis_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Adonis_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adonis_238.addFeatures(features_Adonis_238);
var lyr_Adonis_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adonis_238, 
                style: style_Adonis_238,
                popuplayertitle: 'Adonis',
                interactive: true,
                title: '<img src="styles/legend/Adonis_238.png" /> Adonis'
            });
var format_AbuDhabiParadiseResortResidence_239 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_239 = format_AbuDhabiParadiseResortResidence_239.readFeatures(json_AbuDhabiParadiseResortResidence_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_239.addFeatures(features_AbuDhabiParadiseResortResidence_239);
var lyr_AbuDhabiParadiseResortResidence_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_239, 
                style: style_AbuDhabiParadiseResortResidence_239,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_0.png" /> Ruas<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_1.png" /> Área Institucional<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_3.png" /> Área Verde<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_5.png" /> Ciclovia<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_239_6.png" /> Passeio<br />' });
var format_AbuDhabiParadiseResortResidence_240 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_240 = format_AbuDhabiParadiseResortResidence_240.readFeatures(json_AbuDhabiParadiseResortResidence_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_240.addFeatures(features_AbuDhabiParadiseResortResidence_240);
var lyr_AbuDhabiParadiseResortResidence_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_240, 
                style: style_AbuDhabiParadiseResortResidence_240,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_240.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado27unid_241 = new ol.format.GeoJSON();
var features_EtapaAprovado27unid_241 = format_EtapaAprovado27unid_241.readFeatures(json_EtapaAprovado27unid_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado27unid_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado27unid_241.addFeatures(features_EtapaAprovado27unid_241);
var lyr_EtapaAprovado27unid_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado27unid_241, 
                style: style_EtapaAprovado27unid_241,
                popuplayertitle: 'Etapa: Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado27unid_241.png" /> Etapa: Aprovado (27 unid.)'
            });
var format_EtapaDiretriz8unid_242 = new ol.format.GeoJSON();
var features_EtapaDiretriz8unid_242 = format_EtapaDiretriz8unid_242.readFeatures(json_EtapaDiretriz8unid_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz8unid_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz8unid_242.addFeatures(features_EtapaDiretriz8unid_242);
var lyr_EtapaDiretriz8unid_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz8unid_242, 
                style: style_EtapaDiretriz8unid_242,
                popuplayertitle: 'Etapa: Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz8unid_242.png" /> Etapa: Diretriz (8 unid.)'
            });
var format_EtapaDefinitiva7unid_243 = new ol.format.GeoJSON();
var features_EtapaDefinitiva7unid_243 = format_EtapaDefinitiva7unid_243.readFeatures(json_EtapaDefinitiva7unid_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva7unid_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva7unid_243.addFeatures(features_EtapaDefinitiva7unid_243);
var lyr_EtapaDefinitiva7unid_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva7unid_243, 
                style: style_EtapaDefinitiva7unid_243,
                popuplayertitle: 'Etapa: Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva7unid_243.png" /> Etapa: Definitiva (7 unid.)'
            });
var format_EtapaPrvia24unid_244 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_244 = format_EtapaPrvia24unid_244.readFeatures(json_EtapaPrvia24unid_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_244.addFeatures(features_EtapaPrvia24unid_244);
var lyr_EtapaPrvia24unid_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_244, 
                style: style_EtapaPrvia24unid_244,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_244.png" /> Etapa: Prévia (24 unid.)'
            });
var format_LoteamentosClandestinos70unid_245 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos70unid_245 = format_LoteamentosClandestinos70unid_245.readFeatures(json_LoteamentosClandestinos70unid_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos70unid_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos70unid_245.addFeatures(features_LoteamentosClandestinos70unid_245);
var lyr_LoteamentosClandestinos70unid_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos70unid_245, 
                style: style_LoteamentosClandestinos70unid_245,
                popuplayertitle: 'Loteamentos Clandestinos (70 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos70unid_245.png" /> Loteamentos Clandestinos (70 unid.)'
            });
var format_LoteamentosClandestinos70unid_246 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos70unid_246 = format_LoteamentosClandestinos70unid_246.readFeatures(json_LoteamentosClandestinos70unid_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos70unid_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos70unid_246.addFeatures(features_LoteamentosClandestinos70unid_246);
var lyr_LoteamentosClandestinos70unid_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos70unid_246, 
                style: style_LoteamentosClandestinos70unid_246,
                popuplayertitle: 'Loteamentos Clandestinos (70 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos70unid_246.png" /> Loteamentos Clandestinos (70 unid.)'
            });
var format_APP1745unid_247 = new ol.format.GeoJSON();
var features_APP1745unid_247 = format_APP1745unid_247.readFeatures(json_APP1745unid_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_247.addFeatures(features_APP1745unid_247);
var lyr_APP1745unid_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_247, 
                style: style_APP1745unid_247,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_247.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_248 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_248 = format_RiosDuplos84unid_248.readFeatures(json_RiosDuplos84unid_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_248.addFeatures(features_RiosDuplos84unid_248);
var lyr_RiosDuplos84unid_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_248, 
                style: style_RiosDuplos84unid_248,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_248.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_249 = new ol.format.GeoJSON();
var features_MassasDgua270unid_249 = format_MassasDgua270unid_249.readFeatures(json_MassasDgua270unid_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_249.addFeatures(features_MassasDgua270unid_249);
var lyr_MassasDgua270unid_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_249, 
                style: style_MassasDgua270unid_249,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_249.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_250 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_250 = format_RiosSimples1842unid_250.readFeatures(json_RiosSimples1842unid_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_250.addFeatures(features_RiosSimples1842unid_250);
var lyr_RiosSimples1842unid_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_250, 
                style: style_RiosSimples1842unid_250,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_250.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_251 = new ol.format.GeoJSON();
var features_Nascentes821unid_251 = format_Nascentes821unid_251.readFeatures(json_Nascentes821unid_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_251.addFeatures(features_Nascentes821unid_251);
var lyr_Nascentes821unid_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_251, 
                style: style_Nascentes821unid_251,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_251.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_252 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_252 = format_AntigoAterrodaFazendaMunicipal_252.readFeatures(json_AntigoAterrodaFazendaMunicipal_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_252.addFeatures(features_AntigoAterrodaFazendaMunicipal_252);
var lyr_AntigoAterrodaFazendaMunicipal_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_252, 
                style: style_AntigoAterrodaFazendaMunicipal_252,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_252.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_257 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_257 = format_AntigoAterrodasMaritacas_257.readFeatures(json_AntigoAterrodasMaritacas_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_257.addFeatures(features_AntigoAterrodasMaritacas_257);
var lyr_AntigoAterrodasMaritacas_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_257, 
                style: style_AntigoAterrodasMaritacas_257,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_257.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_259 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_259 = format_ParqueZumbidosPalmares_259.readFeatures(json_ParqueZumbidosPalmares_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_259.addFeatures(features_ParqueZumbidosPalmares_259);
var lyr_ParqueZumbidosPalmares_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_259, 
                style: style_ParqueZumbidosPalmares_259,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_259.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_reaN2_262 = new ol.format.GeoJSON();
var features_reaN2_262 = format_reaN2_262.readFeatures(json_reaN2_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN2_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN2_262.addFeatures(features_reaN2_262);
var lyr_reaN2_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN2_262, 
                style: style_reaN2_262,
                popuplayertitle: 'Área N2',
                interactive: true,
                title: '<img src="styles/legend/reaN2_262.png" /> Área N2'
            });
var format_reaN1_263 = new ol.format.GeoJSON();
var features_reaN1_263 = format_reaN1_263.readFeatures(json_reaN1_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN1_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN1_263.addFeatures(features_reaN1_263);
var lyr_reaN1_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN1_263, 
                style: style_reaN1_263,
                popuplayertitle: 'Área N1',
                interactive: true,
                title: '<img src="styles/legend/reaN1_263.png" /> Área N1'
            });
var format_reaN_264 = new ol.format.GeoJSON();
var features_reaN_264 = format_reaN_264.readFeatures(json_reaN_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_264.addFeatures(features_reaN_264);
var lyr_reaN_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_264, 
                style: style_reaN_264,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_264.png" /> Área N'
            });
var format_ConjuntoHabitacional_265 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_265 = format_ConjuntoHabitacional_265.readFeatures(json_ConjuntoHabitacional_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_265.addFeatures(features_ConjuntoHabitacional_265);
var lyr_ConjuntoHabitacional_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_265, 
                style: style_ConjuntoHabitacional_265,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_265.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_266 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_266 = format_AvdeacessoaoHortoeColgioAgrcola_266.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_266.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_266);
var lyr_AvdeacessoaoHortoeColgioAgrcola_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_266, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_266,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_266.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_267 = new ol.format.GeoJSON();
var features_reaK_267 = format_reaK_267.readFeatures(json_reaK_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_267.addFeatures(features_reaK_267);
var lyr_reaK_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_267, 
                style: style_reaK_267,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_267.png" /> Área K'
            });
var format_reaJ_268 = new ol.format.GeoJSON();
var features_reaJ_268 = format_reaJ_268.readFeatures(json_reaJ_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_268.addFeatures(features_reaJ_268);
var lyr_reaJ_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_268, 
                style: style_reaJ_268,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_268.png" /> Área J'
            });
var format_reaI_269 = new ol.format.GeoJSON();
var features_reaI_269 = format_reaI_269.readFeatures(json_reaI_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_269.addFeatures(features_reaI_269);
var lyr_reaI_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_269, 
                style: style_reaI_269,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_269.png" /> Área I'
            });
var format_reaH_270 = new ol.format.GeoJSON();
var features_reaH_270 = format_reaH_270.readFeatures(json_reaH_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_270.addFeatures(features_reaH_270);
var lyr_reaH_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_270, 
                style: style_reaH_270,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_270.png" /> Área H'
            });
var format_reaG_271 = new ol.format.GeoJSON();
var features_reaG_271 = format_reaG_271.readFeatures(json_reaG_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_271.addFeatures(features_reaG_271);
var lyr_reaG_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_271, 
                style: style_reaG_271,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_271.png" /> Área G'
            });
var format_reaF_272 = new ol.format.GeoJSON();
var features_reaF_272 = format_reaF_272.readFeatures(json_reaF_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_272.addFeatures(features_reaF_272);
var lyr_reaF_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_272, 
                style: style_reaF_272,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_272.png" /> Área F'
            });
var format_reaE_273 = new ol.format.GeoJSON();
var features_reaE_273 = format_reaE_273.readFeatures(json_reaE_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_273.addFeatures(features_reaE_273);
var lyr_reaE_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_273, 
                style: style_reaE_273,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_273.png" /> Área E'
            });
var format_reaD_274 = new ol.format.GeoJSON();
var features_reaD_274 = format_reaD_274.readFeatures(json_reaD_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_274.addFeatures(features_reaD_274);
var lyr_reaD_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_274, 
                style: style_reaD_274,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_274.png" /> Área D'
            });
var format_reaC_275 = new ol.format.GeoJSON();
var features_reaC_275 = format_reaC_275.readFeatures(json_reaC_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_275.addFeatures(features_reaC_275);
var lyr_reaC_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_275, 
                style: style_reaC_275,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_275.png" /> Área C'
            });
var format_reaB_276 = new ol.format.GeoJSON();
var features_reaB_276 = format_reaB_276.readFeatures(json_reaB_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_276.addFeatures(features_reaB_276);
var lyr_reaB_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_276, 
                style: style_reaB_276,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_276.png" /> Área B'
            });
var format_reaA_277 = new ol.format.GeoJSON();
var features_reaA_277 = format_reaA_277.readFeatures(json_reaA_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_277.addFeatures(features_reaA_277);
var lyr_reaA_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_277, 
                style: style_reaA_277,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_277.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_278 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_278 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_278);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_278, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_278,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_278.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_279 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_279 = format_reaaseraverbadaPartedareaG_279.readFeatures(json_reaaseraverbadaPartedareaG_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_279.addFeatures(features_reaaseraverbadaPartedareaG_279);
var lyr_reaaseraverbadaPartedareaG_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_279, 
                style: style_reaaseraverbadaPartedareaG_279,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_279.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_Voorocas26unid_280 = new ol.format.GeoJSON();
var features_Voorocas26unid_280 = format_Voorocas26unid_280.readFeatures(json_Voorocas26unid_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_280.addFeatures(features_Voorocas26unid_280);
var lyr_Voorocas26unid_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_280, 
                style: style_Voorocas26unid_280,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_280.png" /> Voçorocas (26 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais12unid_281 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais12unid_281 = format_LocaisdeDifcilAcessoereasRurais12unid_281.readFeatures(json_LocaisdeDifcilAcessoereasRurais12unid_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisdeDifcilAcessoereasRurais12unid_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais12unid_281.addFeatures(features_LocaisdeDifcilAcessoereasRurais12unid_281);
var lyr_LocaisdeDifcilAcessoereasRurais12unid_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais12unid_281, 
                style: style_LocaisdeDifcilAcessoereasRurais12unid_281,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais12unid_281.png" /> Locais de Difícil Acesso e Áreas Rurais (12 unid.)'
            });
var format_Contineres286unid_282 = new ol.format.GeoJSON();
var features_Contineres286unid_282 = format_Contineres286unid_282.readFeatures(json_Contineres286unid_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_282.addFeatures(features_Contineres286unid_282);
var lyr_Contineres286unid_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_282, 
                style: style_Contineres286unid_282,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_282.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_283 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_283 = format_rvoreImuneaoCorte9unid_283.readFeatures(json_rvoreImuneaoCorte9unid_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_283.addFeatures(features_rvoreImuneaoCorte9unid_283);
var lyr_rvoreImuneaoCorte9unid_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_283, 
                style: style_rvoreImuneaoCorte9unid_283,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_283.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_AcademiasaoArLivre84unid_284 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_284 = format_AcademiasaoArLivre84unid_284.readFeatures(json_AcademiasaoArLivre84unid_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_284.addFeatures(features_AcademiasaoArLivre84unid_284);
var lyr_AcademiasaoArLivre84unid_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_284, 
                style: style_AcademiasaoArLivre84unid_284,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_284.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Gesso1unid_285 = new ol.format.GeoJSON();
var features_Gesso1unid_285 = format_Gesso1unid_285.readFeatures(json_Gesso1unid_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_285.addFeatures(features_Gesso1unid_285);
var lyr_Gesso1unid_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_285, 
                style: style_Gesso1unid_285,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_285.png" /> Gesso (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_286 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_286 = format_ResduosdeConstruoCivil7unid_286.readFeatures(json_ResduosdeConstruoCivil7unid_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_286.addFeatures(features_ResduosdeConstruoCivil7unid_286);
var lyr_ResduosdeConstruoCivil7unid_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_286, 
                style: style_ResduosdeConstruoCivil7unid_286,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_286.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_287 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_287 = format_ResduosVerdes1unid_287.readFeatures(json_ResduosVerdes1unid_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_287.addFeatures(features_ResduosVerdes1unid_287);
var lyr_ResduosVerdes1unid_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_287, 
                style: style_ResduosVerdes1unid_287,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_287.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_288 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_288 = format_ChapasdeRaioX1unid_288.readFeatures(json_ChapasdeRaioX1unid_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_288.addFeatures(features_ChapasdeRaioX1unid_288);
var lyr_ChapasdeRaioX1unid_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_288, 
                style: style_ChapasdeRaioX1unid_288,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_288.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_289 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_289 = format_Embalagensvaziasdeagrotxicos1unid_289.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_289.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_289);
var lyr_Embalagensvaziasdeagrotxicos1unid_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_289, 
                style: style_Embalagensvaziasdeagrotxicos1unid_289,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_289.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_290 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_290 = format_leodecozinhausado2unid_290.readFeatures(json_leodecozinhausado2unid_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_290.addFeatures(features_leodecozinhausado2unid_290);
var lyr_leodecozinhausado2unid_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_290, 
                style: style_leodecozinhausado2unid_290,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_290.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_291 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_291 = format_leolubrificanteusado1unid_291.readFeatures(json_leolubrificanteusado1unid_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_291.addFeatures(features_leolubrificanteusado1unid_291);
var lyr_leolubrificanteusado1unid_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_291, 
                style: style_leolubrificanteusado1unid_291,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_291.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_292 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_292 = format_Latasdetintametlicasvazias2unid_292.readFeatures(json_Latasdetintametlicasvazias2unid_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_292.addFeatures(features_Latasdetintametlicasvazias2unid_292);
var lyr_Latasdetintametlicasvazias2unid_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_292, 
                style: style_Latasdetintametlicasvazias2unid_292,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_292.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_293 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_293 = format_ResduosPerigosos1unid_293.readFeatures(json_ResduosPerigosos1unid_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_293.addFeatures(features_ResduosPerigosos1unid_293);
var lyr_ResduosPerigosos1unid_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_293, 
                style: style_ResduosPerigosos1unid_293,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_293.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_294 = new ol.format.GeoJSON();
var features_Madeiras1unid_294 = format_Madeiras1unid_294.readFeatures(json_Madeiras1unid_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_294.addFeatures(features_Madeiras1unid_294);
var lyr_Madeiras1unid_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_294, 
                style: style_Madeiras1unid_294,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_294.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_295 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_295 = format_ResduosdeServiosdeSade21unid_295.readFeatures(json_ResduosdeServiosdeSade21unid_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_295.addFeatures(features_ResduosdeServiosdeSade21unid_295);
var lyr_ResduosdeServiosdeSade21unid_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_295, 
                style: style_ResduosdeServiosdeSade21unid_295,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_295.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias17unid_296 = new ol.format.GeoJSON();
var features_PilhaseBaterias17unid_296 = format_PilhaseBaterias17unid_296.readFeatures(json_PilhaseBaterias17unid_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias17unid_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias17unid_296.addFeatures(features_PilhaseBaterias17unid_296);
var lyr_PilhaseBaterias17unid_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias17unid_296, 
                style: style_PilhaseBaterias17unid_296,
                popuplayertitle: 'Pilhas e Baterias (17 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias17unid_296.png" /> Pilhas e Baterias (17 unid.)'
            });
var format_Pneus1unid_297 = new ol.format.GeoJSON();
var features_Pneus1unid_297 = format_Pneus1unid_297.readFeatures(json_Pneus1unid_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_297.addFeatures(features_Pneus1unid_297);
var lyr_Pneus1unid_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_297, 
                style: style_Pneus1unid_297,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_297.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_298 = new ol.format.GeoJSON();
var features_Lmpadas4unid_298 = format_Lmpadas4unid_298.readFeatures(json_Lmpadas4unid_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_298.addFeatures(features_Lmpadas4unid_298);
var lyr_Lmpadas4unid_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_298, 
                style: style_Lmpadas4unid_298,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_298.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_299 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_299 = format_ResduosdeCouro1unid_299.readFeatures(json_ResduosdeCouro1unid_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_299.addFeatures(features_ResduosdeCouro1unid_299);
var lyr_ResduosdeCouro1unid_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_299, 
                style: style_ResduosdeCouro1unid_299,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_299.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_300 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_300 = format_ResduosEletrnicos2unid_300.readFeatures(json_ResduosEletrnicos2unid_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_300.addFeatures(features_ResduosEletrnicos2unid_300);
var lyr_ResduosEletrnicos2unid_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_300, 
                style: style_ResduosEletrnicos2unid_300,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_300.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_301 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_301 = format_ResduosReciclveis15unid_301.readFeatures(json_ResduosReciclveis15unid_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_301.addFeatures(features_ResduosReciclveis15unid_301);
var lyr_ResduosReciclveis15unid_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_301, 
                style: style_ResduosReciclveis15unid_301,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_301.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_302 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_302 = format_ResduosInservveis4unid_302.readFeatures(json_ResduosInservveis4unid_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_302.addFeatures(features_ResduosInservveis4unid_302);
var lyr_ResduosInservveis4unid_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_302, 
                style: style_ResduosInservveis4unid_302,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_302.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_303 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_303 = format_PBZPAEdifcioPrimeHELIPONTO_303.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_303.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_303);
var lyr_PBZPAEdifcioPrimeHELIPONTO_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_303, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_303,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_303.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_304 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_304 = format_PBZPAEdifcioPrimeHELIPONTO_304.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_304.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_304);
var lyr_PBZPAEdifcioPrimeHELIPONTO_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_304, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_304,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_304_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_304_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_305 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_305 = format_PBZPAHospitalHELIPONTO_305.readFeatures(json_PBZPAHospitalHELIPONTO_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_305.addFeatures(features_PBZPAHospitalHELIPONTO_305);
var lyr_PBZPAHospitalHELIPONTO_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_305, 
                style: style_PBZPAHospitalHELIPONTO_305,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_305_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_306_11.png" /> Transição<br />' });
var format_ClasseVB_307 = new ol.format.GeoJSON();
var features_ClasseVB_307 = format_ClasseVB_307.readFeatures(json_ClasseVB_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVB_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVB_307.addFeatures(features_ClasseVB_307);
var lyr_ClasseVB_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVB_307, 
                style: style_ClasseVB_307,
                popuplayertitle: 'Classe VB',
                interactive: true,
                title: '<img src="styles/legend/ClasseVB_307.png" /> Classe VB'
            });
var format_ClasseVA_308 = new ol.format.GeoJSON();
var features_ClasseVA_308 = format_ClasseVA_308.readFeatures(json_ClasseVA_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVA_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVA_308.addFeatures(features_ClasseVA_308);
var lyr_ClasseVA_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVA_308, 
                style: style_ClasseVA_308,
                popuplayertitle: 'Classe VA',
                interactive: true,
                title: '<img src="styles/legend/ClasseVA_308.png" /> Classe VA'
            });
var format_ClasseIVC_309 = new ol.format.GeoJSON();
var features_ClasseIVC_309 = format_ClasseIVC_309.readFeatures(json_ClasseIVC_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVC_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVC_309.addFeatures(features_ClasseIVC_309);
var lyr_ClasseIVC_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVC_309, 
                style: style_ClasseIVC_309,
                popuplayertitle: 'Classe IVC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVC_309.png" /> Classe IVC'
            });
var format_ClasseIVB_310 = new ol.format.GeoJSON();
var features_ClasseIVB_310 = format_ClasseIVB_310.readFeatures(json_ClasseIVB_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVB_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVB_310.addFeatures(features_ClasseIVB_310);
var lyr_ClasseIVB_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVB_310, 
                style: style_ClasseIVB_310,
                popuplayertitle: 'Classe IVB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVB_310.png" /> Classe IVB'
            });
var format_ClasseIVA_311 = new ol.format.GeoJSON();
var features_ClasseIVA_311 = format_ClasseIVA_311.readFeatures(json_ClasseIVA_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVA_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVA_311.addFeatures(features_ClasseIVA_311);
var lyr_ClasseIVA_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVA_311, 
                style: style_ClasseIVA_311,
                popuplayertitle: 'Classe IVA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVA_311.png" /> Classe IVA'
            });
var format_ClasseIIIC_312 = new ol.format.GeoJSON();
var features_ClasseIIIC_312 = format_ClasseIIIC_312.readFeatures(json_ClasseIIIC_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIC_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIC_312.addFeatures(features_ClasseIIIC_312);
var lyr_ClasseIIIC_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIC_312, 
                style: style_ClasseIIIC_312,
                popuplayertitle: 'Classe IIIC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIC_312.png" /> Classe IIIC'
            });
var format_ClasseIIIB_313 = new ol.format.GeoJSON();
var features_ClasseIIIB_313 = format_ClasseIIIB_313.readFeatures(json_ClasseIIIB_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIB_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIB_313.addFeatures(features_ClasseIIIB_313);
var lyr_ClasseIIIB_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIB_313, 
                style: style_ClasseIIIB_313,
                popuplayertitle: 'Classe IIIB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIB_313.png" /> Classe IIIB'
            });
var format_ClasseIIIA_314 = new ol.format.GeoJSON();
var features_ClasseIIIA_314 = format_ClasseIIIA_314.readFeatures(json_ClasseIIIA_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIA_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIA_314.addFeatures(features_ClasseIIIA_314);
var lyr_ClasseIIIA_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIA_314, 
                style: style_ClasseIIIA_314,
                popuplayertitle: 'Classe IIIA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIA_314.png" /> Classe IIIA'
            });
var format_ClasseII_315 = new ol.format.GeoJSON();
var features_ClasseII_315 = format_ClasseII_315.readFeatures(json_ClasseII_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseII_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseII_315.addFeatures(features_ClasseII_315);
var lyr_ClasseII_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseII_315, 
                style: style_ClasseII_315,
                popuplayertitle: 'Classe II',
                interactive: true,
                title: '<img src="styles/legend/ClasseII_315.png" /> Classe II'
            });
var format_ClasseI_316 = new ol.format.GeoJSON();
var features_ClasseI_316 = format_ClasseI_316.readFeatures(json_ClasseI_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseI_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseI_316.addFeatures(features_ClasseI_316);
var lyr_ClasseI_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseI_316, 
                style: style_ClasseI_316,
                popuplayertitle: 'Classe I',
                interactive: true,
                title: '<img src="styles/legend/ClasseI_316.png" /> Classe I'
            });
var format_RegioCentroLeste42unid675453694m_317 = new ol.format.GeoJSON();
var features_RegioCentroLeste42unid675453694m_317 = format_RegioCentroLeste42unid675453694m_317.readFeatures(json_RegioCentroLeste42unid675453694m_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioCentroLeste42unid675453694m_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioCentroLeste42unid675453694m_317.addFeatures(features_RegioCentroLeste42unid675453694m_317);
var lyr_RegioCentroLeste42unid675453694m_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioCentroLeste42unid675453694m_317, 
                style: style_RegioCentroLeste42unid675453694m_317,
                popuplayertitle: 'Região Centro Leste (42 unid. / 6.754.536,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioCentroLeste42unid675453694m_317.png" /> Região Centro Leste (42 unid. / 6.754.536,94 m²)'
            });
var format_RegioLesteNordeste50unid1233454938m_318 = new ol.format.GeoJSON();
var features_RegioLesteNordeste50unid1233454938m_318 = format_RegioLesteNordeste50unid1233454938m_318.readFeatures(json_RegioLesteNordeste50unid1233454938m_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioLesteNordeste50unid1233454938m_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioLesteNordeste50unid1233454938m_318.addFeatures(features_RegioLesteNordeste50unid1233454938m_318);
var lyr_RegioLesteNordeste50unid1233454938m_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioLesteNordeste50unid1233454938m_318, 
                style: style_RegioLesteNordeste50unid1233454938m_318,
                popuplayertitle: 'Região Leste Nordeste (50 unid. / 12.334.549,38 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioLesteNordeste50unid1233454938m_318.png" /> Região Leste Nordeste (50 unid. / 12.334.549,38 m²)'
            });
var format_RegioNorteI45unid1043752016m_319 = new ol.format.GeoJSON();
var features_RegioNorteI45unid1043752016m_319 = format_RegioNorteI45unid1043752016m_319.readFeatures(json_RegioNorteI45unid1043752016m_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteI45unid1043752016m_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteI45unid1043752016m_319.addFeatures(features_RegioNorteI45unid1043752016m_319);
var lyr_RegioNorteI45unid1043752016m_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteI45unid1043752016m_319, 
                style: style_RegioNorteI45unid1043752016m_319,
                popuplayertitle: 'Região Norte I (45 unid. / 10.437.520,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteI45unid1043752016m_319.png" /> Região Norte I (45 unid. / 10.437.520,16 m²)'
            });
var format_RegioNorteII36unid859331837m_320 = new ol.format.GeoJSON();
var features_RegioNorteII36unid859331837m_320 = format_RegioNorteII36unid859331837m_320.readFeatures(json_RegioNorteII36unid859331837m_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteII36unid859331837m_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteII36unid859331837m_320.addFeatures(features_RegioNorteII36unid859331837m_320);
var lyr_RegioNorteII36unid859331837m_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteII36unid859331837m_320, 
                style: style_RegioNorteII36unid859331837m_320,
                popuplayertitle: 'Região Norte II (36 unid. / 8.593.318,37 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteII36unid859331837m_320.png" /> Região Norte II (36 unid. / 8.593.318,37 m²)'
            });
var format_RegioOesteI65unid1245065890m_321 = new ol.format.GeoJSON();
var features_RegioOesteI65unid1245065890m_321 = format_RegioOesteI65unid1245065890m_321.readFeatures(json_RegioOesteI65unid1245065890m_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteI65unid1245065890m_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteI65unid1245065890m_321.addFeatures(features_RegioOesteI65unid1245065890m_321);
var lyr_RegioOesteI65unid1245065890m_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteI65unid1245065890m_321, 
                style: style_RegioOesteI65unid1245065890m_321,
                popuplayertitle: 'Região Oeste I (65 unid. / 12.450.658,90 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteI65unid1245065890m_321.png" /> Região Oeste I (65 unid. / 12.450.658,90 m²)'
            });
var format_RegioOesteII43unid599615871m_322 = new ol.format.GeoJSON();
var features_RegioOesteII43unid599615871m_322 = format_RegioOesteII43unid599615871m_322.readFeatures(json_RegioOesteII43unid599615871m_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteII43unid599615871m_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteII43unid599615871m_322.addFeatures(features_RegioOesteII43unid599615871m_322);
var lyr_RegioOesteII43unid599615871m_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteII43unid599615871m_322, 
                style: style_RegioOesteII43unid599615871m_322,
                popuplayertitle: 'Região Oeste II (43 unid. / 5.996.158,71 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteII43unid599615871m_322.png" /> Região Oeste II (43 unid. / 5.996.158,71 m²)'
            });
var format_RegioSudeste38unid579321135m_323 = new ol.format.GeoJSON();
var features_RegioSudeste38unid579321135m_323 = format_RegioSudeste38unid579321135m_323.readFeatures(json_RegioSudeste38unid579321135m_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudeste38unid579321135m_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudeste38unid579321135m_323.addFeatures(features_RegioSudeste38unid579321135m_323);
var lyr_RegioSudeste38unid579321135m_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudeste38unid579321135m_323, 
                style: style_RegioSudeste38unid579321135m_323,
                popuplayertitle: 'Região Sudeste (38 unid. / 5.793.211,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudeste38unid579321135m_323.png" /> Região Sudeste (38 unid. / 5.793.211,35 m²)'
            });
var format_RegioSudesteSul44unid830633497m_324 = new ol.format.GeoJSON();
var features_RegioSudesteSul44unid830633497m_324 = format_RegioSudesteSul44unid830633497m_324.readFeatures(json_RegioSudesteSul44unid830633497m_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudesteSul44unid830633497m_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudesteSul44unid830633497m_324.addFeatures(features_RegioSudesteSul44unid830633497m_324);
var lyr_RegioSudesteSul44unid830633497m_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudesteSul44unid830633497m_324, 
                style: style_RegioSudesteSul44unid830633497m_324,
                popuplayertitle: 'Região Sudeste Sul (44 unid. / 8.306.334,97 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudesteSul44unid830633497m_324.png" /> Região Sudeste Sul (44 unid. / 8.306.334,97 m²)'
            });
var format_RegioSul20unid639964086m_325 = new ol.format.GeoJSON();
var features_RegioSul20unid639964086m_325 = format_RegioSul20unid639964086m_325.readFeatures(json_RegioSul20unid639964086m_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSul20unid639964086m_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSul20unid639964086m_325.addFeatures(features_RegioSul20unid639964086m_325);
var lyr_RegioSul20unid639964086m_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSul20unid639964086m_325, 
                style: style_RegioSul20unid639964086m_325,
                popuplayertitle: 'Região Sul (20 unid. / 6.399.640,86 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSul20unid639964086m_325.png" /> Região Sul (20 unid. / 6.399.640,86 m²)'
            });
var format_APP156unid230392892m_326 = new ol.format.GeoJSON();
var features_APP156unid230392892m_326 = format_APP156unid230392892m_326.readFeatures(json_APP156unid230392892m_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP156unid230392892m_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP156unid230392892m_326.addFeatures(features_APP156unid230392892m_326);
var lyr_APP156unid230392892m_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP156unid230392892m_326, 
                style: style_APP156unid230392892m_326,
                popuplayertitle: 'APP (156 unid. / 2.303.928,92 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP156unid230392892m_326.png" /> APP (156 unid. / 2.303.928,92 m²)'
            });
var format_reaInstitucional224unid133042345m_327 = new ol.format.GeoJSON();
var features_reaInstitucional224unid133042345m_327 = format_reaInstitucional224unid133042345m_327.readFeatures(json_reaInstitucional224unid133042345m_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional224unid133042345m_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional224unid133042345m_327.addFeatures(features_reaInstitucional224unid133042345m_327);
var lyr_reaInstitucional224unid133042345m_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional224unid133042345m_327, 
                style: style_reaInstitucional224unid133042345m_327,
                popuplayertitle: 'Área Institucional (224 unid. / 1.330.423,45 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional224unid133042345m_327.png" /> Área Institucional (224 unid. / 1.330.423,45 m²)'
            });
var format_reaPatrimonial33unid15776685m_328 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15776685m_328 = format_reaPatrimonial33unid15776685m_328.readFeatures(json_reaPatrimonial33unid15776685m_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15776685m_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15776685m_328.addFeatures(features_reaPatrimonial33unid15776685m_328);
var lyr_reaPatrimonial33unid15776685m_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15776685m_328, 
                style: style_reaPatrimonial33unid15776685m_328,
                popuplayertitle: 'Área Patrimonial (33 unid. / 157.766,85 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15776685m_328.png" /> Área Patrimonial (33 unid. / 157.766,85 m²)'
            });
var format_reaVerde1946unid805735618m_329 = new ol.format.GeoJSON();
var features_reaVerde1946unid805735618m_329 = format_reaVerde1946unid805735618m_329.readFeatures(json_reaVerde1946unid805735618m_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde1946unid805735618m_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1946unid805735618m_329.addFeatures(features_reaVerde1946unid805735618m_329);
var lyr_reaVerde1946unid805735618m_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1946unid805735618m_329, 
                style: style_reaVerde1946unid805735618m_329,
                popuplayertitle: 'Área Verde (1.946 unid. / 8.057.356,18 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1946unid805735618m_329.png" /> Área Verde (1.946 unid. / 8.057.356,18 m²)'
            });
var format_readeUsoEspecial276unid271190268m_330 = new ol.format.GeoJSON();
var features_readeUsoEspecial276unid271190268m_330 = format_readeUsoEspecial276unid271190268m_330.readFeatures(json_readeUsoEspecial276unid271190268m_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial276unid271190268m_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial276unid271190268m_330.addFeatures(features_readeUsoEspecial276unid271190268m_330);
var lyr_readeUsoEspecial276unid271190268m_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial276unid271190268m_330, 
                style: style_readeUsoEspecial276unid271190268m_330,
                popuplayertitle: 'Área de Uso Especial (276 unid. / 2.711.902,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial276unid271190268m_330.png" /> Área de Uso Especial (276 unid. / 2.711.902,68 m²)'
            });
var format_LoteamentoFechado115unid52603608m_331 = new ol.format.GeoJSON();
var features_LoteamentoFechado115unid52603608m_331 = format_LoteamentoFechado115unid52603608m_331.readFeatures(json_LoteamentoFechado115unid52603608m_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado115unid52603608m_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado115unid52603608m_331.addFeatures(features_LoteamentoFechado115unid52603608m_331);
var lyr_LoteamentoFechado115unid52603608m_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado115unid52603608m_331, 
                style: style_LoteamentoFechado115unid52603608m_331,
                popuplayertitle: 'Loteamento Fechado (115 unid. / 526.036,08 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado115unid52603608m_331.png" /> Loteamento Fechado (115 unid. / 526.036,08 m²)'
            });
var format_Lote251unid7505210m_332 = new ol.format.GeoJSON();
var features_Lote251unid7505210m_332 = format_Lote251unid7505210m_332.readFeatures(json_Lote251unid7505210m_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid7505210m_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid7505210m_332.addFeatures(features_Lote251unid7505210m_332);
var lyr_Lote251unid7505210m_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid7505210m_332, 
                style: style_Lote251unid7505210m_332,
                popuplayertitle: 'Lote (251 unid. / 75.052,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid7505210m_332.png" /> Lote (251 unid. / 75.052,10 m²)'
            });
var format_Lote251unid_333 = new ol.format.GeoJSON();
var features_Lote251unid_333 = format_Lote251unid_333.readFeatures(json_Lote251unid_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid_333.addFeatures(features_Lote251unid_333);
var lyr_Lote251unid_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid_333, 
                style: style_Lote251unid_333,
                popuplayertitle: 'Lote (251 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid_333.png" /> Lote (251 unid.)'
            });
var format_LoteEdificao20unid508062m_334 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_334 = format_LoteEdificao20unid508062m_334.readFeatures(json_LoteEdificao20unid508062m_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_334.addFeatures(features_LoteEdificao20unid508062m_334);
var lyr_LoteEdificao20unid508062m_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_334, 
                style: style_LoteEdificao20unid508062m_334,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_334.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_335 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_335 = format_LoteEdificao20unid_335.readFeatures(json_LoteEdificao20unid_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_335.addFeatures(features_LoteEdificao20unid_335);
var lyr_LoteEdificao20unid_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_335, 
                style: style_LoteEdificao20unid_335,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_335.png" /> Lote/Edificação (20 unid.)'
            });
var format_LeiloLEIN97542025Homologado4unid334770m_336 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid334770m_336 = format_LeiloLEIN97542025Homologado4unid334770m_336.readFeatures(json_LeiloLEIN97542025Homologado4unid334770m_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid334770m_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid334770m_336.addFeatures(features_LeiloLEIN97542025Homologado4unid334770m_336);
var lyr_LeiloLEIN97542025Homologado4unid334770m_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid334770m_336, 
                style: style_LeiloLEIN97542025Homologado4unid334770m_336,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid334770m_336.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_LeiloLEIN97542025Homologado4unid_337 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid_337 = format_LeiloLEIN97542025Homologado4unid_337.readFeatures(json_LeiloLEIN97542025Homologado4unid_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid_337.addFeatures(features_LeiloLEIN97542025Homologado4unid_337);
var lyr_LeiloLEIN97542025Homologado4unid_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid_337, 
                style: style_LeiloLEIN97542025Homologado4unid_337,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid_337.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338 = format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid_339 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid_339 = format_LeiloLEIN97542025Proc35162004100002652520256922unid_339.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_339.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid_339);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_339, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid_339,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid_339.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340 = format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid_341 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid_341 = format_LeiloLEIN97542025Proc351620041000007954202537196unid_341.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_341.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid_341);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_341, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid_341,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid_341.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342 = format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid_343 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid_343 = format_LeiloLEIN97542025Proc35162004100002198620254518unid_343.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_343.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid_343);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_343, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid_343,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid_343.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)'
            });
var format_LoteEMDEF10unid218783m_344 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_344 = format_LoteEMDEF10unid218783m_344.readFeatures(json_LoteEMDEF10unid218783m_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_344.addFeatures(features_LoteEMDEF10unid218783m_344);
var lyr_LoteEMDEF10unid218783m_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_344, 
                style: style_LoteEMDEF10unid218783m_344,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_344.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_345 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_345 = format_LoteEMDEF10unid_345.readFeatures(json_LoteEMDEF10unid_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_345.addFeatures(features_LoteEMDEF10unid_345);
var lyr_LoteEMDEF10unid_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_345, 
                style: style_LoteEMDEF10unid_345,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_345.png" /> Lote EMDEF (10 unid.)'
            });
var format_TRPRLCETESB2unid_346 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_346 = format_TRPRLCETESB2unid_346.readFeatures(json_TRPRLCETESB2unid_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_346.addFeatures(features_TRPRLCETESB2unid_346);
var lyr_TRPRLCETESB2unid_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_346, 
                style: style_TRPRLCETESB2unid_346,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_346.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_347 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_347 = format_TRPRLCETESB2unid_347.readFeatures(json_TRPRLCETESB2unid_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_347.addFeatures(features_TRPRLCETESB2unid_347);
var lyr_TRPRLCETESB2unid_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_347, 
                style: style_TRPRLCETESB2unid_347,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_347.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TCRAMunicipal14unid_348 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_348 = format_TCRAMunicipal14unid_348.readFeatures(json_TCRAMunicipal14unid_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_348.addFeatures(features_TCRAMunicipal14unid_348);
var lyr_TCRAMunicipal14unid_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_348, 
                style: style_TCRAMunicipal14unid_348,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_348.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_349 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_349 = format_TCRAMunicipal14unid_349.readFeatures(json_TCRAMunicipal14unid_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_349.addFeatures(features_TCRAMunicipal14unid_349);
var lyr_TCRAMunicipal14unid_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_349, 
                style: style_TCRAMunicipal14unid_349,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_349.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_350 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_350 = format_TCRACETESBPARCELAMENTO32unid_350.readFeatures(json_TCRACETESBPARCELAMENTO32unid_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_350.addFeatures(features_TCRACETESBPARCELAMENTO32unid_350);
var lyr_TCRACETESBPARCELAMENTO32unid_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_350, 
                style: style_TCRACETESBPARCELAMENTO32unid_350,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_350.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_351 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_351 = format_TCRACETESBPARCELAMENTO32unid_351.readFeatures(json_TCRACETESBPARCELAMENTO32unid_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_351.addFeatures(features_TCRACETESBPARCELAMENTO32unid_351);
var lyr_TCRACETESBPARCELAMENTO32unid_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_351, 
                style: style_TCRACETESBPARCELAMENTO32unid_351,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_351.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESB28unid_352 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_352 = format_TCRACETESB28unid_352.readFeatures(json_TCRACETESB28unid_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_352.addFeatures(features_TCRACETESB28unid_352);
var lyr_TCRACETESB28unid_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_352, 
                style: style_TCRACETESB28unid_352,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_352.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_353 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_353 = format_TCRACETESB28unid_353.readFeatures(json_TCRACETESB28unid_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_353.addFeatures(features_TCRACETESB28unid_353);
var lyr_TCRACETESB28unid_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_353, 
                style: style_TCRACETESB28unid_353,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_353.png" /> TCRA CETESB (28 unid.)'
            });
var format_TACMinistrioPblico9unid_354 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_354 = format_TACMinistrioPblico9unid_354.readFeatures(json_TACMinistrioPblico9unid_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_354.addFeatures(features_TACMinistrioPblico9unid_354);
var lyr_TACMinistrioPblico9unid_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_354, 
                style: style_TACMinistrioPblico9unid_354,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_354.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_355 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_355 = format_TACMinistrioPblico9unid_355.readFeatures(json_TACMinistrioPblico9unid_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_355.addFeatures(features_TACMinistrioPblico9unid_355);
var lyr_TACMinistrioPblico9unid_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_355, 
                style: style_TACMinistrioPblico9unid_355,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_355.png" /> TAC Ministério Público (9 unid.)'
            });
var format_PlantioVoluntrio1unid_356 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_356 = format_PlantioVoluntrio1unid_356.readFeatures(json_PlantioVoluntrio1unid_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_356.addFeatures(features_PlantioVoluntrio1unid_356);
var lyr_PlantioVoluntrio1unid_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_356, 
                style: style_PlantioVoluntrio1unid_356,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_356.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_357 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_357 = format_PlantioVoluntrio1unid_357.readFeatures(json_PlantioVoluntrio1unid_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_357.addFeatures(features_PlantioVoluntrio1unid_357);
var lyr_PlantioVoluntrio1unid_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_357, 
                style: style_PlantioVoluntrio1unid_357,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_357.png" /> Plantio Voluntário (1 unid.)'
            });
var format_CartaAnuncia20unid_358 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_358 = format_CartaAnuncia20unid_358.readFeatures(json_CartaAnuncia20unid_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_358.addFeatures(features_CartaAnuncia20unid_358);
var lyr_CartaAnuncia20unid_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_358, 
                style: style_CartaAnuncia20unid_358,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_358.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia20unid_359 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_359 = format_CartaAnuncia20unid_359.readFeatures(json_CartaAnuncia20unid_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_359.addFeatures(features_CartaAnuncia20unid_359);
var lyr_CartaAnuncia20unid_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_359, 
                style: style_CartaAnuncia20unid_359,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_359.png" /> Carta Anuência (20 unid.)'
            });
var format_AoCivilPblica1unid_360 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_360 = format_AoCivilPblica1unid_360.readFeatures(json_AoCivilPblica1unid_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_360.addFeatures(features_AoCivilPblica1unid_360);
var lyr_AoCivilPblica1unid_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_360, 
                style: style_AoCivilPblica1unid_360,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_360.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_361 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_361 = format_AoCivilPblica1unid_361.readFeatures(json_AoCivilPblica1unid_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_361.addFeatures(features_AoCivilPblica1unid_361);
var lyr_AoCivilPblica1unid_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_361, 
                style: style_AoCivilPblica1unid_361,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_361.png" /> Ação Civil Pública (1 unid.)'
            });
var format_ProgramaAdoteUmaPraa315unid30277327m_362 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa315unid30277327m_362 = format_ProgramaAdoteUmaPraa315unid30277327m_362.readFeatures(json_ProgramaAdoteUmaPraa315unid30277327m_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProgramaAdoteUmaPraa315unid30277327m_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa315unid30277327m_362.addFeatures(features_ProgramaAdoteUmaPraa315unid30277327m_362);
var lyr_ProgramaAdoteUmaPraa315unid30277327m_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa315unid30277327m_362, 
                style: style_ProgramaAdoteUmaPraa315unid30277327m_362,
                popuplayertitle: 'Programa Adote Uma Praça (315 unid. / 302.773,27 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa315unid30277327m_362.png" /> Programa Adote Uma Praça (315 unid. / 302.773,27 m²)'
            });
var format_ComPlacaDilu161unid17007212m_363 = new ol.format.GeoJSON();
var features_ComPlacaDilu161unid17007212m_363 = format_ComPlacaDilu161unid17007212m_363.readFeatures(json_ComPlacaDilu161unid17007212m_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaDilu161unid17007212m_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu161unid17007212m_363.addFeatures(features_ComPlacaDilu161unid17007212m_363);
var lyr_ComPlacaDilu161unid17007212m_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu161unid17007212m_363, 
                style: style_ComPlacaDilu161unid17007212m_363,
                popuplayertitle: 'Com Placa - Dilu (161 unid. / 170.072,12 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu161unid17007212m_363.png" /> Com Placa - Dilu (161 unid. / 170.072,12 m²)'
            });
var format_ComPlacaEgnaldo134unid12211725m_364 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo134unid12211725m_364 = format_ComPlacaEgnaldo134unid12211725m_364.readFeatures(json_ComPlacaEgnaldo134unid12211725m_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaEgnaldo134unid12211725m_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo134unid12211725m_364.addFeatures(features_ComPlacaEgnaldo134unid12211725m_364);
var lyr_ComPlacaEgnaldo134unid12211725m_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo134unid12211725m_364, 
                style: style_ComPlacaEgnaldo134unid12211725m_364,
                popuplayertitle: 'Com Placa - Egnaldo (134 unid. / 122.117,25 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo134unid12211725m_364.png" /> Com Placa - Egnaldo (134 unid. / 122.117,25 m²)'
            });
var format_SemPlacaDilu16unid774541m_365 = new ol.format.GeoJSON();
var features_SemPlacaDilu16unid774541m_365 = format_SemPlacaDilu16unid774541m_365.readFeatures(json_SemPlacaDilu16unid774541m_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaDilu16unid774541m_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu16unid774541m_365.addFeatures(features_SemPlacaDilu16unid774541m_365);
var lyr_SemPlacaDilu16unid774541m_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu16unid774541m_365, 
                style: style_SemPlacaDilu16unid774541m_365,
                popuplayertitle: 'Sem Placa - Dilu (16 unid. / 7.745,41 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu16unid774541m_365.png" /> Sem Placa - Dilu (16 unid. / 7.745,41 m²)'
            });
var format_SemPlacaEgnaldo4unid86447m_366 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo4unid86447m_366 = format_SemPlacaEgnaldo4unid86447m_366.readFeatures(json_SemPlacaEgnaldo4unid86447m_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaEgnaldo4unid86447m_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo4unid86447m_366.addFeatures(features_SemPlacaEgnaldo4unid86447m_366);
var lyr_SemPlacaEgnaldo4unid86447m_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo4unid86447m_366, 
                style: style_SemPlacaEgnaldo4unid86447m_366,
                popuplayertitle: 'Sem Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo4unid86447m_366.png" /> Sem Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var group_AdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa315unid30277327m_362,lyr_ComPlacaDilu161unid17007212m_363,lyr_ComPlacaEgnaldo134unid12211725m_364,lyr_SemPlacaDilu16unid774541m_365,lyr_SemPlacaEgnaldo4unid86447m_366,],
                                fold: 'close',
                                title: 'Adote Uma Praça'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_TRPRLCETESB2unid_346,lyr_TRPRLCETESB2unid_347,lyr_TCRAMunicipal14unid_348,lyr_TCRAMunicipal14unid_349,lyr_TCRACETESBPARCELAMENTO32unid_350,lyr_TCRACETESBPARCELAMENTO32unid_351,lyr_TCRACETESB28unid_352,lyr_TCRACETESB28unid_353,lyr_TACMinistrioPblico9unid_354,lyr_TACMinistrioPblico9unid_355,lyr_PlantioVoluntrio1unid_356,lyr_PlantioVoluntrio1unid_357,lyr_CartaAnuncia20unid_358,lyr_CartaAnuncia20unid_359,lyr_AoCivilPblica1unid_360,lyr_AoCivilPblica1unid_361,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP156unid230392892m_326,lyr_reaInstitucional224unid133042345m_327,lyr_reaPatrimonial33unid15776685m_328,lyr_reaVerde1946unid805735618m_329,lyr_readeUsoEspecial276unid271190268m_330,lyr_LoteamentoFechado115unid52603608m_331,lyr_Lote251unid7505210m_332,lyr_Lote251unid_333,lyr_LoteEdificao20unid508062m_334,lyr_LoteEdificao20unid_335,lyr_LeiloLEIN97542025Homologado4unid334770m_336,lyr_LeiloLEIN97542025Homologado4unid_337,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343,lyr_LoteEMDEF10unid218783m_344,lyr_LoteEMDEF10unid_345,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_Bairros383unidRegies9unid = new ol.layer.Group({
                                layers: [lyr_RegioCentroLeste42unid675453694m_317,lyr_RegioLesteNordeste50unid1233454938m_318,lyr_RegioNorteI45unid1043752016m_319,lyr_RegioNorteII36unid859331837m_320,lyr_RegioOesteI65unid1245065890m_321,lyr_RegioOesteII43unid599615871m_322,lyr_RegioSudeste38unid579321135m_323,lyr_RegioSudesteSul44unid830633497m_324,lyr_RegioSul20unid639964086m_325,],
                                fold: 'close',
                                title: 'Bairros (383 unid.) / Regiões (9 unid.)'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_ClasseVB_307,lyr_ClasseVA_308,lyr_ClasseIVC_309,lyr_ClasseIVB_310,lyr_ClasseIVA_311,lyr_ClasseIIIC_312,lyr_ClasseIIIB_313,lyr_ClasseIIIA_314,lyr_ClasseII_315,lyr_ClasseI_316,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_303,lyr_PBZPAEdifcioPrimeHELIPONTO_304,lyr_PBZPAHospitalHELIPONTO_305,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306,],
                                fold: 'close',
                                title: 'Controle Aéreo – Plano Básico de Zona de Proteção de Aeródromo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_Gesso1unid_285,lyr_ResduosdeConstruoCivil7unid_286,lyr_ResduosVerdes1unid_287,lyr_ChapasdeRaioX1unid_288,lyr_Embalagensvaziasdeagrotxicos1unid_289,lyr_leodecozinhausado2unid_290,lyr_leolubrificanteusado1unid_291,lyr_Latasdetintametlicasvazias2unid_292,lyr_ResduosPerigosos1unid_293,lyr_Madeiras1unid_294,lyr_ResduosdeServiosdeSade21unid_295,lyr_PilhaseBaterias17unid_296,lyr_Pneus1unid_297,lyr_Lmpadas4unid_298,lyr_ResduosdeCouro1unid_299,lyr_ResduosEletrnicos2unid_300,lyr_ResduosReciclveis15unid_301,lyr_ResduosInservveis4unid_302,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_Voorocas26unid_280,lyr_LocaisdeDifcilAcessoereasRurais12unid_281,lyr_Contineres286unid_282,lyr_rvoreImuneaoCorte9unid_283,lyr_AcademiasaoArLivre84unid_284,],
                                fold: 'close',
                                title: 'Diversos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN2_262,lyr_reaN1_263,lyr_reaN_264,lyr_ConjuntoHabitacional_265,lyr_AvdeacessoaoHortoeColgioAgrcola_266,lyr_reaK_267,lyr_reaJ_268,lyr_reaI_269,lyr_reaH_270,lyr_reaG_271,lyr_reaF_272,lyr_reaE_273,lyr_reaD_274,lyr_reaC_275,lyr_reaB_276,lyr_reaA_277,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278,lyr_reaaseraverbadaPartedareaG_279,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazendaMunicipal_252,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256,lyr_AntigoAterrodasMaritacas_257,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258,lyr_ParqueZumbidosPalmares_259,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_247,lyr_RiosDuplos84unid_248,lyr_MassasDgua270unid_249,lyr_RiosSimples1842unid_250,lyr_Nascentes821unid_251,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos70unid = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinos70unid_245,lyr_LoteamentosClandestinos70unid_246,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos (70 unid.)'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_103,lyr_Vivenna_104,lyr_VittaSoVicente_105,lyr_VittaSoVicente_106,lyr_VittaAlvorada_107,lyr_VittaAlvorada_108,lyr_VilaDiEspanha_109,lyr_VilaDiEspanha_110,lyr_VillaPucci_111,lyr_VillaPucci_112,lyr_VillaDoratta_113,lyr_VillaDoratta_114,lyr_VillaBella_115,lyr_VillaBella_116,lyr_Versalhes_117,lyr_Versalhes_118,lyr_TorontoResidence_119,lyr_TorontoResidence_120,lyr_TerraNova_121,lyr_TerraNova_122,lyr_Sonetto_123,lyr_Sonetto_124,lyr_SoCarlosII_125,lyr_SoCarlosII_126,lyr_ServidoRamal138kVFranca4Guanabara_127,lyr_ServidoRamal138kVFranca4Guanabara_128,lyr_SantaLina_129,lyr_SantaLina_130,lyr_ResidencialYasminTorres_131,lyr_ResidencialYasminTorres_132,lyr_ResidencialSoCarlosI_133,lyr_ResidencialSoCarlosI_134,lyr_ResidencialSantaIns_135,lyr_ResidencialSantaIns_136,lyr_ResidencialSantaF_137,lyr_ResidencialSantaF_138,lyr_ResidencialQuintadosOitis_139,lyr_ResidencialQuintadosOitis_140,lyr_ResidencialQuintadoSol_141,lyr_ResidencialQuintadoSol_142,lyr_ResidencialPousoAlegreII_143,lyr_ResidencialPousoAlegreII_144,lyr_ResidencialPousoAlegre_145,lyr_ResidencialPousoAlegre_146,lyr_ResicencialNairRetuciII_147,lyr_ResicencialNairRetuciII_148,lyr_ResicencialNairRetuci_149,lyr_ResicencialNairRetuci_150,lyr_ResidencialMoradadoBosque_151,lyr_ResidencialMoradadoBosque_152,lyr_ResidencialMarthaHelena_153,lyr_ResidencialMarthaHelena_154,lyr_ResidencialMarioTasso_155,lyr_ResidencialMarioTasso_156,lyr_ResidencialJabuticabeiras_157,lyr_ResidencialJabuticabeiras_158,lyr_ResidencialDomingosJardini_159,lyr_ResidencialDomingosJardini_160,lyr_ResidencialCintraAlves_161,lyr_ResidencialCintraAlves_162,lyr_ResidencialBoaVista_163,lyr_ResidencialBoaVista_164,lyr_ResidencialAltodaFazenda_165,lyr_ResidencialAltodaFazenda_166,lyr_RecantoMeneghetti_167,lyr_RecantoMeneghetti_168,lyr_ParqueVillaLobos_169,lyr_ParqueVillaLobos_170,lyr_ParquePalmeiraImperial_171,lyr_ParquePalmeiraImperial_172,lyr_ParqueFlora_173,lyr_ParqueFlora_174,lyr_ParquedosSabias_175,lyr_ParquedosSabias_176,lyr_ParagonII_177,lyr_ParagonII_178,lyr_Paragon_179,lyr_Paragon_180,lyr_PalmeiraReal_181,lyr_PalmeiraReal_182,lyr_MoradadoVerdeII_183,lyr_MoradadoVerdeII_184,lyr_MoradadaMata_185,lyr_MoradadaMata_186,lyr_Monti_187,lyr_Monti_188,lyr_MontBlancResidence_189,lyr_MontBlancResidence_190,lyr_MarianaAlarcon_191,lyr_MarianaAlarcon_192,lyr_Loteamentolamo_193,lyr_Loteamentolamo_194,lyr_JardimMariaLuiza_195,lyr_JardimMariaLuiza_196,lyr_JardimHorizonte_197,lyr_JardimHorizonte_198,lyr_JardimFlora_199,lyr_JardimFlora_200,lyr_IrineuZanetiII_201,lyr_IrineuZanetiII_202,lyr_Infratcnica_203,lyr_Infratcnica_204,lyr_HorizResidence_205,lyr_HorizResidence_206,lyr_Ferracini_207,lyr_Ferracini_208,lyr_FazendaProgresso_209,lyr_FazendaProgresso_210,lyr_Essence_211,lyr_Essence_212,lyr_Elias_213,lyr_Elias_214,lyr_EdifcioSolNascente_215,lyr_EdifcioSolNascente_216,lyr_EdifcioRuadoSol_217,lyr_EdifcioRuadoSol_218,lyr_EdifcioResidencialHope_219,lyr_EdifcioResidencialHope_220,lyr_DiocesedeFranca_221,lyr_DiocesedeFranca_222,lyr_DaVinci_223,lyr_DaVinci_224,lyr_CondomnioIICityPetrpolis_225,lyr_CondomnioIICityPetrpolis_226,lyr_CondomnioICityPetrpolis_227,lyr_CondomnioICityPetrpolis_228,lyr_Colorado_229,lyr_Colorado_230,lyr_CidadeJardim_231,lyr_CidadeJardim_232,lyr_BordadaMata_233,lyr_BordadaMata_234,lyr_Arizona_235,lyr_Arizona_236,lyr_Adonis_237,lyr_Adonis_238,lyr_AbuDhabiParadiseResortResidence_239,lyr_AbuDhabiParadiseResortResidence_240,lyr_EtapaAprovado27unid_241,lyr_EtapaDiretriz8unid_242,lyr_EtapaDefinitiva7unid_243,lyr_EtapaPrvia24unid_244,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_LoteamentosRegularizados9unid_101,lyr_LoteamentosRegularizados9unid_102,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_ParqueAmbientalLuprcioTaveira_87,lyr_ParqueAmbientalLuprcioTaveira_88,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90,lyr_ParquedeExposiesFernandoCosta_91,lyr_ParquedeExposiesFernandoCosta_92,lyr_ParqueCaxambu_93,lyr_ParqueCaxambu_94,lyr_ComplexoPoliesportivo_95,lyr_ComplexoPoliesportivo_96,lyr_ParquedosTrabalhadores_97,lyr_ParquedosTrabalhadores_98,lyr_JardimZoobotnico_99,lyr_JardimZoobotnico_100,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado95unid_83,lyr_ImvelPrivado95unid_84,lyr_ImvelRural1unid_85,lyr_ImvelPblico118unid_86,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_80,lyr_EstradasRuraisMunicipais34unid_81,lyr_RodoviasMunicipais8unid_82,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_SecretariadeEducaoUnidadesEscolares = new ol.layer.Group({
                                layers: [lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67,lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68,lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69,lyr_UnidadesEscolaresCreche35unid_70,lyr_UnidadesEscolaresCrechePrEscola45unid_71,lyr_UnidadesEscolaresEdInfantil9unid_72,lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73,lyr_UnidadesEscolaresEJA3unid_74,lyr_UnidadesEscolaresEnsFundamental3unid_75,lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76,lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77,lyr_UnidadesEscolaresSetordeMerenda1unid_78,lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79,],
                                fold: 'close',
                                title: 'Secretaria de Educação - Unidades Escolares'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalArena3unid_48,lyr_PrprioPblicoMunicipalBiblioteca1unid_49,lyr_PrprioPblicoMunicipalCampo18unid_50,lyr_PrprioPblicoMunicipalCasa1unid_51,lyr_PrprioPblicoMunicipalCentro4unid_52,lyr_PrprioPblicoMunicipalCEPEL12unid_53,lyr_PrprioPblicoMunicipalConjunto4unid_54,lyr_PrprioPblicoMunicipalEstadio1unid_55,lyr_PrprioPblicoMunicipalGinsio5unid_56,lyr_PrprioPblicoMunicipalMuseu2unid_57,lyr_PrprioPblicoMunicipalParque2unid_58,lyr_PrprioPblicoMunicipalPavilho1unid_59,lyr_PrprioPblicoMunicipalPinacoteca1unid_60,lyr_PrprioPblicoMunicipalPiscina1unid_61,lyr_PrprioPblicoMunicipalPista1unid_62,lyr_PrprioPblicoMunicipalPraa3unid_63,lyr_PrprioPblicoMunicipalQuadra3unid_64,lyr_PrprioPblicoMunicipalSecretaria1unid_65,lyr_PrprioPblicoMunicipalTeatro2unid_66,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43,lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44,lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45,lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46,lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_SistemaVirioExpansodosistemavirio_34,lyr_SistemaVirioRodovias_35,lyr_SistemaVirioRodoviasViasarteriais_36,lyr_SistemaVirioSistemavirioprincipal_37,lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38,lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39,lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40,lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41,lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21,lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22,lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23,lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24,lyr_MacrozonasMacrozonadoRioCanoas_25,lyr_MacrozonasSubMacrozonadeExpansoUrbana_26,lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27,lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28,lyr_ExpansoUrbanaLCN0502003_29,lyr_ExpansoUrbanaLCN1402009_30,lyr_ExpansoUrbanaLCN2352013_31,lyr_ExpansoUrbanaLCN3242019_32,lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_5,lyr_AROreadeAmortecimento_6,lyr_AROFaixadeCuestas_7,lyr_AROAPP_8,lyr_ARAIncongrunciasemAPP_9,lyr_ARAETELagoas_10,lyr_ARAAterros_11,lyr_AODreaUrbanaConsolidada_12,lyr_AODBaixaDensidadeNvel3_13,lyr_AODBaixaDensidadeNvel2_14,lyr_AODBaixaDensidadeNvel1_15,lyr_AODAUSFase2_16,lyr_AODAUSFase1_17,lyr_LimitedaBaciadoRioCanoasLeiC4322024_18,lyr_LimitedaBaciadoRioCanoasLeiC1002006_19,lyr_DelimitaodaBaciadoRibeirodaOna_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_ZonaCartogrficaMapaBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_ARORemanescentesFlorestais_5.setVisible(false);lyr_AROreadeAmortecimento_6.setVisible(false);lyr_AROFaixadeCuestas_7.setVisible(false);lyr_AROAPP_8.setVisible(false);lyr_ARAIncongrunciasemAPP_9.setVisible(false);lyr_ARAETELagoas_10.setVisible(false);lyr_ARAAterros_11.setVisible(false);lyr_AODreaUrbanaConsolidada_12.setVisible(false);lyr_AODBaixaDensidadeNvel3_13.setVisible(false);lyr_AODBaixaDensidadeNvel2_14.setVisible(false);lyr_AODBaixaDensidadeNvel1_15.setVisible(false);lyr_AODAUSFase2_16.setVisible(false);lyr_AODAUSFase1_17.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_20.setVisible(false);lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.setVisible(false);lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.setVisible(false);lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.setVisible(false);lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.setVisible(false);lyr_MacrozonasMacrozonadoRioCanoas_25.setVisible(false);lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.setVisible(false);lyr_ExpansoUrbanaLCN0502003_29.setVisible(false);lyr_ExpansoUrbanaLCN1402009_30.setVisible(false);lyr_ExpansoUrbanaLCN2352013_31.setVisible(false);lyr_ExpansoUrbanaLCN3242019_32.setVisible(false);lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_34.setVisible(false);lyr_SistemaVirioRodovias_35.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_36.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_37.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.setVisible(false);lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43.setVisible(false);lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44.setVisible(false);lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.setVisible(false);lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.setVisible(false);lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47.setVisible(false);lyr_PrprioPblicoMunicipalArena3unid_48.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_49.setVisible(false);lyr_PrprioPblicoMunicipalCampo18unid_50.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_51.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_52.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL12unid_53.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_54.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_55.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_56.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_57.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_58.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_59.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_60.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_61.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_62.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_63.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_64.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_65.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_66.setVisible(false);lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.setVisible(false);lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68.setVisible(false);lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.setVisible(false);lyr_UnidadesEscolaresCreche35unid_70.setVisible(false);lyr_UnidadesEscolaresCrechePrEscola45unid_71.setVisible(false);lyr_UnidadesEscolaresEdInfantil9unid_72.setVisible(false);lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.setVisible(false);lyr_UnidadesEscolaresEJA3unid_74.setVisible(false);lyr_UnidadesEscolaresEnsFundamental3unid_75.setVisible(false);lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.setVisible(false);lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.setVisible(false);lyr_UnidadesEscolaresSetordeMerenda1unid_78.setVisible(false);lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.setVisible(false);lyr_RodoviasEstaduais4unid_80.setVisible(false);lyr_EstradasRuraisMunicipais34unid_81.setVisible(false);lyr_RodoviasMunicipais8unid_82.setVisible(false);lyr_LotesImvelPrivado95unid_83.setVisible(false);lyr_ImvelPrivado95unid_84.setVisible(false);lyr_ImvelRural1unid_85.setVisible(false);lyr_ImvelPblico118unid_86.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_87.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_88.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.setVisible(false);lyr_ParquedeExposiesFernandoCosta_91.setVisible(false);lyr_ParquedeExposiesFernandoCosta_92.setVisible(false);lyr_ParqueCaxambu_93.setVisible(false);lyr_ParqueCaxambu_94.setVisible(false);lyr_ComplexoPoliesportivo_95.setVisible(false);lyr_ComplexoPoliesportivo_96.setVisible(false);lyr_ParquedosTrabalhadores_97.setVisible(false);lyr_ParquedosTrabalhadores_98.setVisible(false);lyr_JardimZoobotnico_99.setVisible(false);lyr_JardimZoobotnico_100.setVisible(false);lyr_LoteamentosRegularizados9unid_101.setVisible(false);lyr_LoteamentosRegularizados9unid_102.setVisible(false);lyr_Vivenna_103.setVisible(false);lyr_Vivenna_104.setVisible(false);lyr_VittaSoVicente_105.setVisible(false);lyr_VittaSoVicente_106.setVisible(false);lyr_VittaAlvorada_107.setVisible(false);lyr_VittaAlvorada_108.setVisible(false);lyr_VilaDiEspanha_109.setVisible(false);lyr_VilaDiEspanha_110.setVisible(false);lyr_VillaPucci_111.setVisible(false);lyr_VillaPucci_112.setVisible(false);lyr_VillaDoratta_113.setVisible(false);lyr_VillaDoratta_114.setVisible(false);lyr_VillaBella_115.setVisible(false);lyr_VillaBella_116.setVisible(false);lyr_Versalhes_117.setVisible(false);lyr_Versalhes_118.setVisible(false);lyr_TorontoResidence_119.setVisible(false);lyr_TorontoResidence_120.setVisible(false);lyr_TerraNova_121.setVisible(false);lyr_TerraNova_122.setVisible(false);lyr_Sonetto_123.setVisible(false);lyr_Sonetto_124.setVisible(false);lyr_SoCarlosII_125.setVisible(false);lyr_SoCarlosII_126.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_127.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_128.setVisible(false);lyr_SantaLina_129.setVisible(false);lyr_SantaLina_130.setVisible(false);lyr_ResidencialYasminTorres_131.setVisible(false);lyr_ResidencialYasminTorres_132.setVisible(false);lyr_ResidencialSoCarlosI_133.setVisible(false);lyr_ResidencialSoCarlosI_134.setVisible(false);lyr_ResidencialSantaIns_135.setVisible(false);lyr_ResidencialSantaIns_136.setVisible(false);lyr_ResidencialSantaF_137.setVisible(false);lyr_ResidencialSantaF_138.setVisible(false);lyr_ResidencialQuintadosOitis_139.setVisible(false);lyr_ResidencialQuintadosOitis_140.setVisible(false);lyr_ResidencialQuintadoSol_141.setVisible(false);lyr_ResidencialQuintadoSol_142.setVisible(false);lyr_ResidencialPousoAlegreII_143.setVisible(false);lyr_ResidencialPousoAlegreII_144.setVisible(false);lyr_ResidencialPousoAlegre_145.setVisible(false);lyr_ResidencialPousoAlegre_146.setVisible(false);lyr_ResicencialNairRetuciII_147.setVisible(false);lyr_ResicencialNairRetuciII_148.setVisible(false);lyr_ResicencialNairRetuci_149.setVisible(false);lyr_ResicencialNairRetuci_150.setVisible(false);lyr_ResidencialMoradadoBosque_151.setVisible(false);lyr_ResidencialMoradadoBosque_152.setVisible(false);lyr_ResidencialMarthaHelena_153.setVisible(false);lyr_ResidencialMarthaHelena_154.setVisible(false);lyr_ResidencialMarioTasso_155.setVisible(false);lyr_ResidencialMarioTasso_156.setVisible(false);lyr_ResidencialJabuticabeiras_157.setVisible(false);lyr_ResidencialJabuticabeiras_158.setVisible(false);lyr_ResidencialDomingosJardini_159.setVisible(false);lyr_ResidencialDomingosJardini_160.setVisible(false);lyr_ResidencialCintraAlves_161.setVisible(false);lyr_ResidencialCintraAlves_162.setVisible(false);lyr_ResidencialBoaVista_163.setVisible(false);lyr_ResidencialBoaVista_164.setVisible(false);lyr_ResidencialAltodaFazenda_165.setVisible(false);lyr_ResidencialAltodaFazenda_166.setVisible(false);lyr_RecantoMeneghetti_167.setVisible(false);lyr_RecantoMeneghetti_168.setVisible(false);lyr_ParqueVillaLobos_169.setVisible(false);lyr_ParqueVillaLobos_170.setVisible(false);lyr_ParquePalmeiraImperial_171.setVisible(false);lyr_ParquePalmeiraImperial_172.setVisible(false);lyr_ParqueFlora_173.setVisible(false);lyr_ParqueFlora_174.setVisible(false);lyr_ParquedosSabias_175.setVisible(false);lyr_ParquedosSabias_176.setVisible(false);lyr_ParagonII_177.setVisible(false);lyr_ParagonII_178.setVisible(false);lyr_Paragon_179.setVisible(false);lyr_Paragon_180.setVisible(false);lyr_PalmeiraReal_181.setVisible(false);lyr_PalmeiraReal_182.setVisible(false);lyr_MoradadoVerdeII_183.setVisible(false);lyr_MoradadoVerdeII_184.setVisible(false);lyr_MoradadaMata_185.setVisible(false);lyr_MoradadaMata_186.setVisible(false);lyr_Monti_187.setVisible(false);lyr_Monti_188.setVisible(false);lyr_MontBlancResidence_189.setVisible(false);lyr_MontBlancResidence_190.setVisible(false);lyr_MarianaAlarcon_191.setVisible(false);lyr_MarianaAlarcon_192.setVisible(false);lyr_Loteamentolamo_193.setVisible(false);lyr_Loteamentolamo_194.setVisible(false);lyr_JardimMariaLuiza_195.setVisible(false);lyr_JardimMariaLuiza_196.setVisible(false);lyr_JardimHorizonte_197.setVisible(false);lyr_JardimHorizonte_198.setVisible(false);lyr_JardimFlora_199.setVisible(false);lyr_JardimFlora_200.setVisible(false);lyr_IrineuZanetiII_201.setVisible(false);lyr_IrineuZanetiII_202.setVisible(false);lyr_Infratcnica_203.setVisible(false);lyr_Infratcnica_204.setVisible(false);lyr_HorizResidence_205.setVisible(false);lyr_HorizResidence_206.setVisible(false);lyr_Ferracini_207.setVisible(false);lyr_Ferracini_208.setVisible(false);lyr_FazendaProgresso_209.setVisible(false);lyr_FazendaProgresso_210.setVisible(false);lyr_Essence_211.setVisible(false);lyr_Essence_212.setVisible(false);lyr_Elias_213.setVisible(false);lyr_Elias_214.setVisible(false);lyr_EdifcioSolNascente_215.setVisible(false);lyr_EdifcioSolNascente_216.setVisible(false);lyr_EdifcioRuadoSol_217.setVisible(false);lyr_EdifcioRuadoSol_218.setVisible(false);lyr_EdifcioResidencialHope_219.setVisible(false);lyr_EdifcioResidencialHope_220.setVisible(false);lyr_DiocesedeFranca_221.setVisible(false);lyr_DiocesedeFranca_222.setVisible(false);lyr_DaVinci_223.setVisible(false);lyr_DaVinci_224.setVisible(false);lyr_CondomnioIICityPetrpolis_225.setVisible(false);lyr_CondomnioIICityPetrpolis_226.setVisible(false);lyr_CondomnioICityPetrpolis_227.setVisible(false);lyr_CondomnioICityPetrpolis_228.setVisible(false);lyr_Colorado_229.setVisible(false);lyr_Colorado_230.setVisible(false);lyr_CidadeJardim_231.setVisible(false);lyr_CidadeJardim_232.setVisible(false);lyr_BordadaMata_233.setVisible(false);lyr_BordadaMata_234.setVisible(false);lyr_Arizona_235.setVisible(false);lyr_Arizona_236.setVisible(false);lyr_Adonis_237.setVisible(false);lyr_Adonis_238.setVisible(false);lyr_AbuDhabiParadiseResortResidence_239.setVisible(false);lyr_AbuDhabiParadiseResortResidence_240.setVisible(false);lyr_EtapaAprovado27unid_241.setVisible(false);lyr_EtapaDiretriz8unid_242.setVisible(false);lyr_EtapaDefinitiva7unid_243.setVisible(false);lyr_EtapaPrvia24unid_244.setVisible(false);lyr_LoteamentosClandestinos70unid_245.setVisible(false);lyr_LoteamentosClandestinos70unid_246.setVisible(false);lyr_APP1745unid_247.setVisible(false);lyr_RiosDuplos84unid_248.setVisible(false);lyr_MassasDgua270unid_249.setVisible(false);lyr_RiosSimples1842unid_250.setVisible(false);lyr_Nascentes821unid_251.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_252.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.setVisible(false);lyr_AntigoAterrodasMaritacas_257.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.setVisible(false);lyr_ParqueZumbidosPalmares_259.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.setVisible(false);lyr_reaN2_262.setVisible(false);lyr_reaN1_263.setVisible(false);lyr_reaN_264.setVisible(false);lyr_ConjuntoHabitacional_265.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_266.setVisible(false);lyr_reaK_267.setVisible(false);lyr_reaJ_268.setVisible(false);lyr_reaI_269.setVisible(false);lyr_reaH_270.setVisible(false);lyr_reaG_271.setVisible(false);lyr_reaF_272.setVisible(false);lyr_reaE_273.setVisible(false);lyr_reaD_274.setVisible(false);lyr_reaC_275.setVisible(false);lyr_reaB_276.setVisible(false);lyr_reaA_277.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.setVisible(false);lyr_reaaseraverbadaPartedareaG_279.setVisible(false);lyr_Voorocas26unid_280.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais12unid_281.setVisible(false);lyr_Contineres286unid_282.setVisible(false);lyr_rvoreImuneaoCorte9unid_283.setVisible(false);lyr_AcademiasaoArLivre84unid_284.setVisible(false);lyr_Gesso1unid_285.setVisible(false);lyr_ResduosdeConstruoCivil7unid_286.setVisible(false);lyr_ResduosVerdes1unid_287.setVisible(false);lyr_ChapasdeRaioX1unid_288.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_289.setVisible(false);lyr_leodecozinhausado2unid_290.setVisible(false);lyr_leolubrificanteusado1unid_291.setVisible(false);lyr_Latasdetintametlicasvazias2unid_292.setVisible(false);lyr_ResduosPerigosos1unid_293.setVisible(false);lyr_Madeiras1unid_294.setVisible(false);lyr_ResduosdeServiosdeSade21unid_295.setVisible(false);lyr_PilhaseBaterias17unid_296.setVisible(false);lyr_Pneus1unid_297.setVisible(false);lyr_Lmpadas4unid_298.setVisible(false);lyr_ResduosdeCouro1unid_299.setVisible(false);lyr_ResduosEletrnicos2unid_300.setVisible(false);lyr_ResduosReciclveis15unid_301.setVisible(false);lyr_ResduosInservveis4unid_302.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_303.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_304.setVisible(false);lyr_PBZPAHospitalHELIPONTO_305.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.setVisible(false);lyr_ClasseVB_307.setVisible(false);lyr_ClasseVA_308.setVisible(false);lyr_ClasseIVC_309.setVisible(false);lyr_ClasseIVB_310.setVisible(false);lyr_ClasseIVA_311.setVisible(false);lyr_ClasseIIIC_312.setVisible(false);lyr_ClasseIIIB_313.setVisible(false);lyr_ClasseIIIA_314.setVisible(false);lyr_ClasseII_315.setVisible(false);lyr_ClasseI_316.setVisible(false);lyr_RegioCentroLeste42unid675453694m_317.setVisible(false);lyr_RegioLesteNordeste50unid1233454938m_318.setVisible(false);lyr_RegioNorteI45unid1043752016m_319.setVisible(false);lyr_RegioNorteII36unid859331837m_320.setVisible(false);lyr_RegioOesteI65unid1245065890m_321.setVisible(false);lyr_RegioOesteII43unid599615871m_322.setVisible(false);lyr_RegioSudeste38unid579321135m_323.setVisible(false);lyr_RegioSudesteSul44unid830633497m_324.setVisible(false);lyr_RegioSul20unid639964086m_325.setVisible(false);lyr_APP156unid230392892m_326.setVisible(false);lyr_reaInstitucional224unid133042345m_327.setVisible(false);lyr_reaPatrimonial33unid15776685m_328.setVisible(false);lyr_reaVerde1946unid805735618m_329.setVisible(false);lyr_readeUsoEspecial276unid271190268m_330.setVisible(false);lyr_LoteamentoFechado115unid52603608m_331.setVisible(false);lyr_Lote251unid7505210m_332.setVisible(false);lyr_Lote251unid_333.setVisible(false);lyr_LoteEdificao20unid508062m_334.setVisible(false);lyr_LoteEdificao20unid_335.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid334770m_336.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid_337.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343.setVisible(false);lyr_LoteEMDEF10unid218783m_344.setVisible(false);lyr_LoteEMDEF10unid_345.setVisible(false);lyr_TRPRLCETESB2unid_346.setVisible(false);lyr_TRPRLCETESB2unid_347.setVisible(false);lyr_TCRAMunicipal14unid_348.setVisible(false);lyr_TCRAMunicipal14unid_349.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_350.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_351.setVisible(false);lyr_TCRACETESB28unid_352.setVisible(false);lyr_TCRACETESB28unid_353.setVisible(false);lyr_TACMinistrioPblico9unid_354.setVisible(false);lyr_TACMinistrioPblico9unid_355.setVisible(false);lyr_PlantioVoluntrio1unid_356.setVisible(false);lyr_PlantioVoluntrio1unid_357.setVisible(false);lyr_CartaAnuncia20unid_358.setVisible(false);lyr_CartaAnuncia20unid_359.setVisible(false);lyr_AoCivilPblica1unid_360.setVisible(false);lyr_AoCivilPblica1unid_361.setVisible(false);lyr_ProgramaAdoteUmaPraa315unid30277327m_362.setVisible(false);lyr_ComPlacaDilu161unid17007212m_363.setVisible(false);lyr_ComPlacaEgnaldo134unid12211725m_364.setVisible(false);lyr_SemPlacaDilu16unid774541m_365.setVisible(false);lyr_SemPlacaEgnaldo4unid86447m_366.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_SecretariadeSade,group_SecretariadeEsporteeCultura,group_SecretariadeEducaoUnidadesEscolares,group_RodoviaseEstradas,group_PontosViciados,group_ParquesdeFranca,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos70unid,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Diversos,group_DescarteCorretodeResduos,group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo,group_ClassesdeRiscoIPT,group_Bairros383unidRegies9unid,group_reasPblicas,group_reasCompromissadas,group_AdoteUmaPraa];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_ARORemanescentesFlorestais_5.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_6.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_7.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AROAPP_8.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_9.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_ARAETELagoas_10.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_ARAAterros_11.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_12.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODAUSFase2_16.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_AODAUSFase1_17.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição - Subclasse', 'desc_class': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodovias_35.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalArena3unid_48.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_49.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCampo18unid_50.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCasa1unid_51.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCentro4unid_52.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCEPEL12unid_53.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalConjunto4unid_54.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalEstadio1unid_55.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalGinsio5unid_56.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalMuseu2unid_57.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalParque2unid_58.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPavilho1unid_59.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_60.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPiscina1unid_61.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPista1unid_62.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPraa3unid_63.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalQuadra3unid_64.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalSecretaria1unid_65.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalTeatro2unid_66.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCreche35unid_70.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCrechePrEscola45unid_71.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEdInfantil9unid_72.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEJA3unid_74.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEnsFundamental3unid_75.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresSetordeMerenda1unid_78.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_RodoviasEstaduais4unid_80.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_82.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_LotesImvelPrivado95unid_83.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', '_BAIRRO': '_BAIRRO', '_RUA': '_RUA', '_processo_seinfra': 'Processo SEINFRA', '_processo_sms': 'Processo SMS', '_processo_mp': 'Pocesso MP', '_processo_smseg': 'Processo SMSEG', '_outros_processos': 'Outos Processos', '_data_inclusao': 'Data de Inclusão', });
lyr_ImvelPrivado95unid_84.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelRural1unid_85.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelPblico118unid_86.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParqueCaxambu_93.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParqueCaxambu_94.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ComplexoPoliesportivo_95.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ComplexoPoliesportivo_96.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParquedosTrabalhadores_97.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_ParquedosTrabalhadores_98.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_JardimZoobotnico_99.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_JardimZoobotnico_100.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'Nome': 'Nome', 'Descriçã': 'Descrição', 'layer': 'layer', 'path': 'path', });
lyr_LoteamentosRegularizados9unid_101.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosRegularizados9unid_102.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_Vivenna_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_VittaAlvorada_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_VilaDiEspanha_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_TorontoResidence_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_124.set('fieldAliases', {'fid': 'fid', });
lyr_SoCarlosII_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SoCarlosII_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_127.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_128.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSoCarlosI_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSantaIns_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialSantaF_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialQuintadoSol_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_ResidencialMarioTasso_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_166.set('fieldAliases', {'fid': 'fid', });
lyr_RecantoMeneghetti_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonII_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonII_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_MoradadoVerdeII_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_MontBlancResidence_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MarianaAlarcon_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MarianaAlarcon_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EdifcioSolNascente_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EdifcioRuadoSol_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Adonis_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Adonis_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado27unid_241.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz8unid_242.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva7unid_243.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_244.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_LoteamentosClandestinos70unid_245.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinos70unid_246.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_APP1745unid_247.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_248.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_249.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_250.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_251.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazendaMunicipal_252.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_257.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_259.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_reaN2_262.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN1_263.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN_264.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_265.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_266.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_267.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_268.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_269.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_270.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_271.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_272.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_273.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_274.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_275.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_276.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_277.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_279.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_Voorocas26unid_280.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_281.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_Contineres286unid_282.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_283.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_AcademiasaoArLivre84unid_284.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_Gesso1unid_285.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_286.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_287.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_288.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_289.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_290.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_291.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_292.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_293.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_294.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_295.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias17unid_296.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_297.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_298.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_299.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_300.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_301.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_302.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PBZPAEdifcioPrimeHELIPONTO_303.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_304.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_305.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_ClasseVB_307.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseVA_308.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVC_309.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVB_310.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVA_311.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIC_312.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIB_313.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIA_314.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseII_315.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseI_316.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_RegioCentroLeste42unid675453694m_317.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioLesteNordeste50unid1233454938m_318.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteI45unid1043752016m_319.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteII36unid859331837m_320.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteI65unid1245065890m_321.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteII43unid599615871m_322.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudeste38unid579321135m_323.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudesteSul44unid830633497m_324.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSul20unid639964086m_325.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_APP156unid230392892m_326.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional224unid133042345m_327.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial33unid15776685m_328.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaVerde1946unid805735618m_329.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_readeUsoEspecial276unid271190268m_330.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado115unid52603608m_331.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid7505210m_332.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid_333.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LoteEdificao20unid508062m_334.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_335.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LeiloLEIN97542025Homologado4unid334770m_336.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Homologado4unid_337.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LoteEMDEF10unid218783m_344.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_345.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_TRPRLCETESB2unid_346.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_347.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_348.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_349.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRACETESBPARCELAMENTO32unid_350.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO32unid_351.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRACETESB28unid_352.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_353.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TACMinistrioPblico9unid_354.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_355.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_PlantioVoluntrio1unid_356.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_357.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_CartaAnuncia20unid_358.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia20unid_359.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_AoCivilPblica1unid_360.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_361.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_362.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu161unid17007212m_363.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_ComPlacaEgnaldo134unid12211725m_364.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaDilu16unid774541m_365.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaEgnaldo4unid86447m_366.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_ARORemanescentesFlorestais_5.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROreadeAmortecimento_6.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROFaixadeCuestas_7.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROAPP_8.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAIncongrunciasemAPP_9.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAETELagoas_10.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAAterros_11.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODreaUrbanaConsolidada_12.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODAUSFase2_16.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODAUSFase1_17.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldImages', {'fid': 'TextEdit', 'macrozona_urbana': 'TextEdit', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodovias_35.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalArena3unid_48.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_49.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCampo18unid_50.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCasa1unid_51.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCentro4unid_52.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCEPEL12unid_53.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalConjunto4unid_54.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalEstadio1unid_55.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalGinsio5unid_56.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalMuseu2unid_57.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalParque2unid_58.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPavilho1unid_59.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_60.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPiscina1unid_61.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPista1unid_62.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPraa3unid_63.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalQuadra3unid_64.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalSecretaria1unid_65.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalTeatro2unid_66.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCreche35unid_70.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCrechePrEscola45unid_71.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEdInfantil9unid_72.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEJA3unid_74.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEnsFundamental3unid_75.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresSetordeMerenda1unid_78.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_RodoviasEstaduais4unid_80.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_82.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_LotesImvelPrivado95unid_83.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', '_BAIRRO': 'TextEdit', '_RUA': 'TextEdit', '_processo_seinfra': 'TextEdit', '_processo_sms': 'TextEdit', '_processo_mp': 'TextEdit', '_processo_smseg': 'TextEdit', '_outros_processos': 'TextEdit', '_data_inclusao': 'DateTime', });
lyr_ImvelPrivado95unid_84.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelRural1unid_85.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelPblico118unid_86.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', 'data_inclusao': '', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParqueCaxambu_93.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParqueCaxambu_94.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ComplexoPoliesportivo_95.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ComplexoPoliesportivo_96.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParquedosTrabalhadores_97.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParquedosTrabalhadores_98.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JardimZoobotnico_99.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JardimZoobotnico_100.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Nome': 'TextEdit', 'Descriçã': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LoteamentosRegularizados9unid_101.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosRegularizados9unid_102.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_Vivenna_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_106.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_VittaAlvorada_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_108.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_VilaDiEspanha_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_118.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_TorontoResidence_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_124.set('fieldImages', {'fid': '', });
lyr_SoCarlosII_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SoCarlosII_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_127.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_128.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_132.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSoCarlosI_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_134.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSantaIns_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_136.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialSantaF_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_140.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialQuintadoSol_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_154.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_ResidencialMarioTasso_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_166.set('fieldImages', {'fid': '', });
lyr_RecantoMeneghetti_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_171.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonII_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonII_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_182.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_MoradadoVerdeII_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_188.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_MontBlancResidence_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MarianaAlarcon_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MarianaAlarcon_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_213.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Elias_214.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EdifcioSolNascente_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_216.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EdifcioRuadoSol_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Adonis_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Adonis_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado27unid_241.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz8unid_242.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva7unid_243.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_244.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_LoteamentosClandestinos70unid_245.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinos70unid_246.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_APP1745unid_247.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_248.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_249.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_250.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_251.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_252.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_257.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_259.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reaN2_262.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN1_263.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN_264.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_265.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_266.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_267.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_268.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_269.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_270.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_271.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_272.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_273.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_274.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_275.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_276.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_277.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_279.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_Voorocas26unid_280.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_281.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_Contineres286unid_282.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_283.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_284.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_Gesso1unid_285.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_286.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_287.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_288.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_289.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_290.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_291.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_292.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_293.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_294.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_295.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias17unid_296.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_297.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_298.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeCouro1unid_299.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_300.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_301.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosInservveis4unid_302.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_303.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_304.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_305.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_ClasseVB_307.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseVA_308.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVC_309.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVB_310.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVA_311.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIC_312.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIB_313.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIA_314.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseII_315.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseI_316.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_RegioCentroLeste42unid675453694m_317.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioLesteNordeste50unid1233454938m_318.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteI45unid1043752016m_319.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteII36unid859331837m_320.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteI65unid1245065890m_321.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteII43unid599615871m_322.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudeste38unid579321135m_323.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudesteSul44unid830633497m_324.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSul20unid639964086m_325.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_APP156unid230392892m_326.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaInstitucional224unid133042345m_327.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaPatrimonial33unid15776685m_328.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaVerde1946unid805735618m_329.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_readeUsoEspecial276unid271190268m_330.set('fieldImages', {'fid': '', 'Classe': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'descricao': '', 'm2': '', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteamentoFechado115unid52603608m_331.set('fieldImages', {'fid': '', 'Classe': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'descricao': '', 'm2': '', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote251unid7505210m_332.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_Lote251unid_333.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_LoteEdificao20unid508062m_334.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_335.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LeiloLEIN97542025Homologado4unid334770m_336.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Homologado4unid_337.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_344.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteEMDEF10unid_345.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_TRPRLCETESB2unid_346.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_347.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_348.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_349.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO32unid_350.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO32unid_351.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_352.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_353.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TACMinistrioPblico9unid_354.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_355.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_PlantioVoluntrio1unid_356.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_357.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_CartaAnuncia20unid_358.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia20unid_359.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_AoCivilPblica1unid_360.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_361.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_362.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu161unid17007212m_363.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_ComPlacaEgnaldo134unid12211725m_364.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SemPlacaDilu16unid774541m_365.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_SemPlacaEgnaldo4unid86447m_366.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_5.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_6.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_7.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AROAPP_8.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_9.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_ARAETELagoas_10.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_ARAAterros_11.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_12.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODAUSFase2_16.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_AODAUSFase1_17.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_MacrozonasMacrozonadoRioCanoas_25.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN0502003_29.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN1402009_30.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN2352013_31.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN3242019_32.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_SistemaVirioExpansodosistemavirio_34.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodovias_35.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodoviasViasarteriais_36.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioSistemavirioprincipal_37.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalArena3unid_48.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_49.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCampo18unid_50.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCasa1unid_51.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCentro4unid_52.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCEPEL12unid_53.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalConjunto4unid_54.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalEstadio1unid_55.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalGinsio5unid_56.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalMuseu2unid_57.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalParque2unid_58.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPavilho1unid_59.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_60.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPiscina1unid_61.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPista1unid_62.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPraa3unid_63.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalQuadra3unid_64.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalSecretaria1unid_65.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalTeatro2unid_66.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCreche35unid_70.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCrechePrEscola45unid_71.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEdInfantil9unid_72.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEJA3unid_74.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEnsFundamental3unid_75.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresSetordeMerenda1unid_78.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_80.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_81.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_82.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_LotesImvelPrivado95unid_83.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', '_BAIRRO': 'inline label - visible with data', '_RUA': 'inline label - visible with data', '_processo_seinfra': 'inline label - visible with data', '_processo_sms': 'inline label - visible with data', '_processo_mp': 'inline label - visible with data', '_processo_smseg': 'inline label - visible with data', '_outros_processos': 'inline label - visible with data', '_data_inclusao': 'inline label - visible with data', });
lyr_ImvelPrivado95unid_84.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ImvelRural1unid_85.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ImvelPblico118unid_86.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParqueCaxambu_93.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParqueCaxambu_94.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ComplexoPoliesportivo_95.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ComplexoPoliesportivo_96.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParquedosTrabalhadores_97.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParquedosTrabalhadores_98.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_JardimZoobotnico_99.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_JardimZoobotnico_100.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'Nome': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_LoteamentosRegularizados9unid_101.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosRegularizados9unid_102.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_Vivenna_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_VittaAlvorada_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_VilaDiEspanha_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_TorontoResidence_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_124.set('fieldLabels', {'fid': 'hidden field', });
lyr_SoCarlosII_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SoCarlosII_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_127.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_128.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSoCarlosI_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSantaIns_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialSantaF_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialQuintadoSol_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_143.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_ResidencialMarioTasso_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_166.set('fieldLabels', {'fid': 'hidden field', });
lyr_RecantoMeneghetti_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonII_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonII_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_MoradadoVerdeII_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_MontBlancResidence_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MarianaAlarcon_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MarianaAlarcon_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EdifcioSolNascente_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EdifcioRuadoSol_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Adonis_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Adonis_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado27unid_241.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz8unid_242.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva7unid_243.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_244.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_LoteamentosClandestinos70unid_245.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinos70unid_246.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_APP1745unid_247.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_248.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_249.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_250.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_251.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipal_252.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_253.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_254.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_255.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_256.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_257.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_258.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_259.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_260.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_261.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_reaN2_262.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN1_263.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN_264.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_265.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_266.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_267.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_268.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_269.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_270.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_271.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_272.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_273.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_274.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_275.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_276.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_277.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_278.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_279.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_Voorocas26unid_280.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_281.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_Contineres286unid_282.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_283.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_284.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_Gesso1unid_285.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_286.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_287.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_288.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_289.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_290.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_291.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_292.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_293.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_294.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_295.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias17unid_296.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_297.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_298.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_299.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_300.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_301.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_302.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_303.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_304.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_305.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_306.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_ClasseVB_307.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseVA_308.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVC_309.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVB_310.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVA_311.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIC_312.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIB_313.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIA_314.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseII_315.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseI_316.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_RegioCentroLeste42unid675453694m_317.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioLesteNordeste50unid1233454938m_318.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteI45unid1043752016m_319.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteII36unid859331837m_320.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteI65unid1245065890m_321.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteII43unid599615871m_322.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudeste38unid579321135m_323.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudesteSul44unid830633497m_324.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSul20unid639964086m_325.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_APP156unid230392892m_326.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional224unid133042345m_327.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15776685m_328.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde1946unid805735618m_329.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial276unid271190268m_330.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_LoteamentoFechado115unid52603608m_331.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_Lote251unid7505210m_332.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid_333.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_LoteEdificao20unid508062m_334.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_335.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid334770m_336.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid_337.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_338.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_339.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_340.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_341.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_342.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_343.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_344.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'no label', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_345.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_346.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_347.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_348.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_349.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_350.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_351.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_352.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_353.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_354.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_355.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_356.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_357.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_358.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_359.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_360.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_361.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_362.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu161unid17007212m_363.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo134unid12211725m_364.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaDilu16unid774541m_365.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_366.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_366.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});