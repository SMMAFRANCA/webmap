ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([223215.000737, 7699987.750491, 287069.426201, 7741660.188040]);
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
var format_PrprioPblicoMunicipalCampo25unid_50 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo25unid_50 = format_PrprioPblicoMunicipalCampo25unid_50.readFeatures(json_PrprioPblicoMunicipalCampo25unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCampo25unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo25unid_50.addFeatures(features_PrprioPblicoMunicipalCampo25unid_50);
var lyr_PrprioPblicoMunicipalCampo25unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo25unid_50, 
                style: style_PrprioPblicoMunicipalCampo25unid_50,
                popuplayertitle: 'Próprio Público Municipal - Campo (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo25unid_50.png" /> Próprio Público Municipal - Campo (25 unid.)'
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
var format_ImvelPblico123unid_86 = new ol.format.GeoJSON();
var features_ImvelPblico123unid_86 = format_ImvelPblico123unid_86.readFeatures(json_ImvelPblico123unid_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico123unid_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico123unid_86.addFeatures(features_ImvelPblico123unid_86);
var lyr_ImvelPblico123unid_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico123unid_86, 
                style: style_ImvelPblico123unid_86,
                popuplayertitle: 'Imóvel Público (123 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico123unid_86.png" /> Imóvel Público (123 unid.)'
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
var format_UBSdaVilaSantaTerezinha_101 = new ol.format.GeoJSON();
var features_UBSdaVilaSantaTerezinha_101 = format_UBSdaVilaSantaTerezinha_101.readFeatures(json_UBSdaVilaSantaTerezinha_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdaVilaSantaTerezinha_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdaVilaSantaTerezinha_101.addFeatures(features_UBSdaVilaSantaTerezinha_101);
var lyr_UBSdaVilaSantaTerezinha_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdaVilaSantaTerezinha_101, 
                style: style_UBSdaVilaSantaTerezinha_101,
                popuplayertitle: 'UBS da Vila Santa Terezinha',
                interactive: true,
                title: '<img src="styles/legend/UBSdaVilaSantaTerezinha_101.png" /> UBS da Vila Santa Terezinha'
            });
var format_UBSdoResidencialPeresElias_102 = new ol.format.GeoJSON();
var features_UBSdoResidencialPeresElias_102 = format_UBSdoResidencialPeresElias_102.readFeatures(json_UBSdoResidencialPeresElias_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoResidencialPeresElias_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoResidencialPeresElias_102.addFeatures(features_UBSdoResidencialPeresElias_102);
var lyr_UBSdoResidencialPeresElias_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoResidencialPeresElias_102, 
                style: style_UBSdoResidencialPeresElias_102,
                popuplayertitle: 'UBS do Residencial Peres Elias',
                interactive: true,
                title: '<img src="styles/legend/UBSdoResidencialPeresElias_102.png" /> UBS do Residencial Peres Elias'
            });
var format_UBSdoParquedoHorto_103 = new ol.format.GeoJSON();
var features_UBSdoParquedoHorto_103 = format_UBSdoParquedoHorto_103.readFeatures(json_UBSdoParquedoHorto_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoParquedoHorto_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoParquedoHorto_103.addFeatures(features_UBSdoParquedoHorto_103);
var lyr_UBSdoParquedoHorto_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoParquedoHorto_103, 
                style: style_UBSdoParquedoHorto_103,
                popuplayertitle: 'UBS do Parque do Horto',
                interactive: true,
                title: '<img src="styles/legend/UBSdoParquedoHorto_103.png" /> UBS do Parque do Horto'
            });
var format_UBSdoJardimPalma_104 = new ol.format.GeoJSON();
var features_UBSdoJardimPalma_104 = format_UBSdoJardimPalma_104.readFeatures(json_UBSdoJardimPalma_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UBSdoJardimPalma_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoJardimPalma_104.addFeatures(features_UBSdoJardimPalma_104);
var lyr_UBSdoJardimPalma_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoJardimPalma_104, 
                style: style_UBSdoJardimPalma_104,
                popuplayertitle: 'UBS do Jardim Palma',
                interactive: true,
                title: '<img src="styles/legend/UBSdoJardimPalma_104.png" /> UBS do Jardim Palma'
            });
var format_RevitalizaodaEstaoFerroviria_105 = new ol.format.GeoJSON();
var features_RevitalizaodaEstaoFerroviria_105 = format_RevitalizaodaEstaoFerroviria_105.readFeatures(json_RevitalizaodaEstaoFerroviria_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RevitalizaodaEstaoFerroviria_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RevitalizaodaEstaoFerroviria_105.addFeatures(features_RevitalizaodaEstaoFerroviria_105);
var lyr_RevitalizaodaEstaoFerroviria_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RevitalizaodaEstaoFerroviria_105, 
                style: style_RevitalizaodaEstaoFerroviria_105,
                popuplayertitle: 'Revitalização da Estação Ferroviária',
                interactive: true,
                title: '<img src="styles/legend/RevitalizaodaEstaoFerroviria_105.png" /> Revitalização da Estação Ferroviária'
            });
var format_readeLazerdoParqueContinental_106 = new ol.format.GeoJSON();
var features_readeLazerdoParqueContinental_106 = format_readeLazerdoParqueContinental_106.readFeatures(json_readeLazerdoParqueContinental_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoParqueContinental_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoParqueContinental_106.addFeatures(features_readeLazerdoParqueContinental_106);
var lyr_readeLazerdoParqueContinental_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoParqueContinental_106, 
                style: style_readeLazerdoParqueContinental_106,
                popuplayertitle: 'Área de Lazer do Parque Continental',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoParqueContinental_106.png" /> Área de Lazer do Parque Continental'
            });
var format_readeLazerdoJardimPortinari_107 = new ol.format.GeoJSON();
var features_readeLazerdoJardimPortinari_107 = format_readeLazerdoJardimPortinari_107.readFeatures(json_readeLazerdoJardimPortinari_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoJardimPortinari_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoJardimPortinari_107.addFeatures(features_readeLazerdoJardimPortinari_107);
var lyr_readeLazerdoJardimPortinari_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoJardimPortinari_107, 
                style: style_readeLazerdoJardimPortinari_107,
                popuplayertitle: 'Área de Lazer do Jardim Portinari',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoJardimPortinari_107.png" /> Área de Lazer do Jardim Portinari'
            });
var format_readeLazerdoParquedasEsmeraldas_108 = new ol.format.GeoJSON();
var features_readeLazerdoParquedasEsmeraldas_108 = format_readeLazerdoParquedasEsmeraldas_108.readFeatures(json_readeLazerdoParquedasEsmeraldas_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeLazerdoParquedasEsmeraldas_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeLazerdoParquedasEsmeraldas_108.addFeatures(features_readeLazerdoParquedasEsmeraldas_108);
var lyr_readeLazerdoParquedasEsmeraldas_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeLazerdoParquedasEsmeraldas_108, 
                style: style_readeLazerdoParquedasEsmeraldas_108,
                popuplayertitle: 'Área de Lazer do Parque das Esmeraldas',
                interactive: true,
                title: '<img src="styles/legend/readeLazerdoParquedasEsmeraldas_108.png" /> Área de Lazer do Parque das Esmeraldas'
            });
var format_ReforoEstruturaldoColgioChampagnat_109 = new ol.format.GeoJSON();
var features_ReforoEstruturaldoColgioChampagnat_109 = format_ReforoEstruturaldoColgioChampagnat_109.readFeatures(json_ReforoEstruturaldoColgioChampagnat_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ReforoEstruturaldoColgioChampagnat_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReforoEstruturaldoColgioChampagnat_109.addFeatures(features_ReforoEstruturaldoColgioChampagnat_109);
var lyr_ReforoEstruturaldoColgioChampagnat_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReforoEstruturaldoColgioChampagnat_109, 
                style: style_ReforoEstruturaldoColgioChampagnat_109,
                popuplayertitle: 'Reforço Estrutural do Colégio Champagnat',
                interactive: true,
                title: '<img src="styles/legend/ReforoEstruturaldoColgioChampagnat_109.png" /> Reforço Estrutural do Colégio Champagnat'
            });
var format_ProntoSocorrolvaroAzzuz_110 = new ol.format.GeoJSON();
var features_ProntoSocorrolvaroAzzuz_110 = format_ProntoSocorrolvaroAzzuz_110.readFeatures(json_ProntoSocorrolvaroAzzuz_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProntoSocorrolvaroAzzuz_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProntoSocorrolvaroAzzuz_110.addFeatures(features_ProntoSocorrolvaroAzzuz_110);
var lyr_ProntoSocorrolvaroAzzuz_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProntoSocorrolvaroAzzuz_110, 
                style: style_ProntoSocorrolvaroAzzuz_110,
                popuplayertitle: 'Pronto Socorro Álvaro Azzuz',
                interactive: true,
                title: '<img src="styles/legend/ProntoSocorrolvaroAzzuz_110.png" /> Pronto Socorro Álvaro Azzuz'
            });
var format_Policlnica_111 = new ol.format.GeoJSON();
var features_Policlnica_111 = format_Policlnica_111.readFeatures(json_Policlnica_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Policlnica_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Policlnica_111.addFeatures(features_Policlnica_111);
var lyr_Policlnica_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Policlnica_111, 
                style: style_Policlnica_111,
                popuplayertitle: 'Policlínica',
                interactive: true,
                title: '<img src="styles/legend/Policlnica_111.png" /> Policlínica'
            });
var format_RecapeamentodoJardimMartins_112 = new ol.format.GeoJSON();
var features_RecapeamentodoJardimMartins_112 = format_RecapeamentodoJardimMartins_112.readFeatures(json_RecapeamentodoJardimMartins_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecapeamentodoJardimMartins_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecapeamentodoJardimMartins_112.addFeatures(features_RecapeamentodoJardimMartins_112);
var lyr_RecapeamentodoJardimMartins_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecapeamentodoJardimMartins_112, 
                style: style_RecapeamentodoJardimMartins_112,
                popuplayertitle: 'Recapeamento do Jardim Martins',
                interactive: true,
                title: '<img src="styles/legend/RecapeamentodoJardimMartins_112.png" /> Recapeamento do Jardim Martins'
            });
var format_NovoNGA_113 = new ol.format.GeoJSON();
var features_NovoNGA_113 = format_NovoNGA_113.readFeatures(json_NovoNGA_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_NovoNGA_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovoNGA_113.addFeatures(features_NovoNGA_113);
var lyr_NovoNGA_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovoNGA_113, 
                style: style_NovoNGA_113,
                popuplayertitle: 'Novo NGA',
                interactive: true,
                title: '<img src="styles/legend/NovoNGA_113.png" /> Novo NGA'
            });
var format_EstabilizaodeTaludenoJardimBrasilndia_114 = new ol.format.GeoJSON();
var features_EstabilizaodeTaludenoJardimBrasilndia_114 = format_EstabilizaodeTaludenoJardimBrasilndia_114.readFeatures(json_EstabilizaodeTaludenoJardimBrasilndia_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstabilizaodeTaludenoJardimBrasilndia_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstabilizaodeTaludenoJardimBrasilndia_114.addFeatures(features_EstabilizaodeTaludenoJardimBrasilndia_114);
var lyr_EstabilizaodeTaludenoJardimBrasilndia_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstabilizaodeTaludenoJardimBrasilndia_114, 
                style: style_EstabilizaodeTaludenoJardimBrasilndia_114,
                popuplayertitle: 'Estabilização de Talude no Jardim Brasilândia',
                interactive: true,
                title: '<img src="styles/legend/EstabilizaodeTaludenoJardimBrasilndia_114.png" /> Estabilização de Talude no Jardim Brasilândia'
            });
var format_EscolaJooLiporoni_115 = new ol.format.GeoJSON();
var features_EscolaJooLiporoni_115 = format_EscolaJooLiporoni_115.readFeatures(json_EscolaJooLiporoni_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EscolaJooLiporoni_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaJooLiporoni_115.addFeatures(features_EscolaJooLiporoni_115);
var lyr_EscolaJooLiporoni_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscolaJooLiporoni_115, 
                style: style_EscolaJooLiporoni_115,
                popuplayertitle: 'Escola João Liporoni',
                interactive: true,
                title: '<img src="styles/legend/EscolaJooLiporoni_115.png" /> Escola João Liporoni'
            });
var format_DrenagemdoCrregodosBagres_116 = new ol.format.GeoJSON();
var features_DrenagemdoCrregodosBagres_116 = format_DrenagemdoCrregodosBagres_116.readFeatures(json_DrenagemdoCrregodosBagres_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoCrregodosBagres_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoCrregodosBagres_116.addFeatures(features_DrenagemdoCrregodosBagres_116);
var lyr_DrenagemdoCrregodosBagres_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoCrregodosBagres_116, 
                style: style_DrenagemdoCrregodosBagres_116,
                popuplayertitle: 'Drenagem do Córrego dos Bagres',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoCrregodosBagres_116.png" /> Drenagem do Córrego dos Bagres'
            });
var format_DrenagemdoCrregoCubato_117 = new ol.format.GeoJSON();
var features_DrenagemdoCrregoCubato_117 = format_DrenagemdoCrregoCubato_117.readFeatures(json_DrenagemdoCrregoCubato_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoCrregoCubato_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoCrregoCubato_117.addFeatures(features_DrenagemdoCrregoCubato_117);
var lyr_DrenagemdoCrregoCubato_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoCrregoCubato_117, 
                style: style_DrenagemdoCrregoCubato_117,
                popuplayertitle: 'Drenagem do Córrego Cubatão',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoCrregoCubato_117.png" /> Drenagem do Córrego Cubatão'
            });
var format_DrenagemdoJardimPalmeiras_118 = new ol.format.GeoJSON();
var features_DrenagemdoJardimPalmeiras_118 = format_DrenagemdoJardimPalmeiras_118.readFeatures(json_DrenagemdoJardimPalmeiras_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagemdoJardimPalmeiras_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagemdoJardimPalmeiras_118.addFeatures(features_DrenagemdoJardimPalmeiras_118);
var lyr_DrenagemdoJardimPalmeiras_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagemdoJardimPalmeiras_118, 
                style: style_DrenagemdoJardimPalmeiras_118,
                popuplayertitle: 'Drenagem do Jardim Palmeiras',
                interactive: true,
                title: '<img src="styles/legend/DrenagemdoJardimPalmeiras_118.png" /> Drenagem do Jardim Palmeiras'
            });
var format_CrechedoSamelPark_119 = new ol.format.GeoJSON();
var features_CrechedoSamelPark_119 = format_CrechedoSamelPark_119.readFeatures(json_CrechedoSamelPark_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CrechedoSamelPark_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrechedoSamelPark_119.addFeatures(features_CrechedoSamelPark_119);
var lyr_CrechedoSamelPark_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrechedoSamelPark_119, 
                style: style_CrechedoSamelPark_119,
                popuplayertitle: 'Creche do Samel Park',
                interactive: true,
                title: '<img src="styles/legend/CrechedoSamelPark_119.png" /> Creche do Samel Park'
            });
var format_CRASOeste_120 = new ol.format.GeoJSON();
var features_CRASOeste_120 = format_CRASOeste_120.readFeatures(json_CRASOeste_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRASOeste_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRASOeste_120.addFeatures(features_CRASOeste_120);
var lyr_CRASOeste_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRASOeste_120, 
                style: style_CRASOeste_120,
                popuplayertitle: 'CRAS Oeste',
                interactive: true,
                title: '<img src="styles/legend/CRASOeste_120.png" /> CRAS Oeste'
            });
var format_CRASNorte_121 = new ol.format.GeoJSON();
var features_CRASNorte_121 = format_CRASNorte_121.readFeatures(json_CRASNorte_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CRASNorte_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRASNorte_121.addFeatures(features_CRASNorte_121);
var lyr_CRASNorte_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRASNorte_121, 
                style: style_CRASNorte_121,
                popuplayertitle: 'CRAS Norte',
                interactive: true,
                title: '<img src="styles/legend/CRASNorte_121.png" /> CRAS Norte'
            });
var format_CorpodeBombeiros_122 = new ol.format.GeoJSON();
var features_CorpodeBombeiros_122 = format_CorpodeBombeiros_122.readFeatures(json_CorpodeBombeiros_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CorpodeBombeiros_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorpodeBombeiros_122.addFeatures(features_CorpodeBombeiros_122);
var lyr_CorpodeBombeiros_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorpodeBombeiros_122, 
                style: style_CorpodeBombeiros_122,
                popuplayertitle: 'Corpo de Bombeiros',
                interactive: true,
                title: '<img src="styles/legend/CorpodeBombeiros_122.png" /> Corpo de Bombeiros'
            });
var format_ContenoViria_123 = new ol.format.GeoJSON();
var features_ContenoViria_123 = format_ContenoViria_123.readFeatures(json_ContenoViria_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ContenoViria_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContenoViria_123.addFeatures(features_ContenoViria_123);
var lyr_ContenoViria_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContenoViria_123, 
                style: style_ContenoViria_123,
                popuplayertitle: 'Contenção Viária',
                interactive: true,
                title: '<img src="styles/legend/ContenoViria_123.png" /> Contenção Viária'
            });
var format_CAPSInfantil_124 = new ol.format.GeoJSON();
var features_CAPSInfantil_124 = format_CAPSInfantil_124.readFeatures(json_CAPSInfantil_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CAPSInfantil_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPSInfantil_124.addFeatures(features_CAPSInfantil_124);
var lyr_CAPSInfantil_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPSInfantil_124, 
                style: style_CAPSInfantil_124,
                popuplayertitle: 'CAPS Infantil',
                interactive: true,
                title: '<img src="styles/legend/CAPSInfantil_124.png" /> CAPS Infantil'
            });
var format_ObrasPblicas_125 = new ol.format.GeoJSON();
var features_ObrasPblicas_125 = format_ObrasPblicas_125.readFeatures(json_ObrasPblicas_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ObrasPblicas_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasPblicas_125.addFeatures(features_ObrasPblicas_125);
var lyr_ObrasPblicas_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasPblicas_125, 
                style: style_ObrasPblicas_125,
                popuplayertitle: 'Obras Públicas',
                interactive: true,
                title: '<img src="styles/legend/ObrasPblicas_125.png" /> Obras Públicas'
            });
var format_LoteamentosRegularizados9unid_126 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_126 = format_LoteamentosRegularizados9unid_126.readFeatures(json_LoteamentosRegularizados9unid_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_126.addFeatures(features_LoteamentosRegularizados9unid_126);
var lyr_LoteamentosRegularizados9unid_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_126, 
                style: style_LoteamentosRegularizados9unid_126,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_126.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_LoteamentosRegularizados9unid_127 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_127 = format_LoteamentosRegularizados9unid_127.readFeatures(json_LoteamentosRegularizados9unid_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_127.addFeatures(features_LoteamentosRegularizados9unid_127);
var lyr_LoteamentosRegularizados9unid_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_127, 
                style: style_LoteamentosRegularizados9unid_127,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_127.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_Vivenna_128 = new ol.format.GeoJSON();
var features_Vivenna_128 = format_Vivenna_128.readFeatures(json_Vivenna_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Vivenna_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_128.addFeatures(features_Vivenna_128);
var lyr_Vivenna_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_128, 
                style: style_Vivenna_128,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_128_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_128_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_128_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_128_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_128_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_128_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_128_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_128_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/Vivenna_129.png" /> Vivenna'
            });
var format_VittaSoVicente_130 = new ol.format.GeoJSON();
var features_VittaSoVicente_130 = format_VittaSoVicente_130.readFeatures(json_VittaSoVicente_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaSoVicente_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_130.addFeatures(features_VittaSoVicente_130);
var lyr_VittaSoVicente_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_130, 
                style: style_VittaSoVicente_130,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_130_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_130_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_130_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_130_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_130_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_130_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
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
                title: '<img src="styles/legend/VittaSoVicente_131.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_132 = new ol.format.GeoJSON();
var features_VittaJardimSimes_132 = format_VittaJardimSimes_132.readFeatures(json_VittaJardimSimes_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaJardimSimes_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_132.addFeatures(features_VittaJardimSimes_132);
var lyr_VittaJardimSimes_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_132, 
                style: style_VittaJardimSimes_132,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_132_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_132_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_132_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_132_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_132_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_132_5.png" /> RUAS<br />' });
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
                title: '<img src="styles/legend/VittaJardimSimes_133.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_134 = new ol.format.GeoJSON();
var features_VittaAlvorada_134 = format_VittaAlvorada_134.readFeatures(json_VittaAlvorada_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VittaAlvorada_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_134.addFeatures(features_VittaAlvorada_134);
var lyr_VittaAlvorada_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_134, 
                style: style_VittaAlvorada_134,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_134_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_134_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_134_2.png" /> LOTES<br />\
    <img src="styles/legend/VittaAlvorada_134_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_134_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaAlvorada_134_5.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VittaAlvorada_135.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_136 = new ol.format.GeoJSON();
var features_VilaDiEspanha_136 = format_VilaDiEspanha_136.readFeatures(json_VilaDiEspanha_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VilaDiEspanha_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_136.addFeatures(features_VilaDiEspanha_136);
var lyr_VilaDiEspanha_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_136, 
                style: style_VilaDiEspanha_136,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_136_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_136_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_136_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_136_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_136_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_136_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_136_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_136_7.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VilaDiEspanha_137.png" /> Vila Di Espanha'
            });
var format_VillaPucci_138 = new ol.format.GeoJSON();
var features_VillaPucci_138 = format_VillaPucci_138.readFeatures(json_VillaPucci_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaPucci_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_138.addFeatures(features_VillaPucci_138);
var lyr_VillaPucci_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_138, 
                style: style_VillaPucci_138,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_138_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_138_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_138_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_138_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_138_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_138_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_138_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_138_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_138_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_138_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_138_10.png" /> VIELA<br />' });
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
                title: '<img src="styles/legend/VillaPucci_139.png" /> Villa Pucci'
            });
var format_VillaDoratta_140 = new ol.format.GeoJSON();
var features_VillaDoratta_140 = format_VillaDoratta_140.readFeatures(json_VillaDoratta_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_140.addFeatures(features_VillaDoratta_140);
var lyr_VillaDoratta_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_140, 
                style: style_VillaDoratta_140,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_140_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_140_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_140_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_140_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_140_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_140_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_140_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_140_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_140_8.png" /> APP<br />' });
var format_VillaDoratta_141 = new ol.format.GeoJSON();
var features_VillaDoratta_141 = format_VillaDoratta_141.readFeatures(json_VillaDoratta_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaDoratta_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_141.addFeatures(features_VillaDoratta_141);
var lyr_VillaDoratta_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_141, 
                style: style_VillaDoratta_141,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_141.png" /> Villa Doratta'
            });
var format_VillaBella_142 = new ol.format.GeoJSON();
var features_VillaBella_142 = format_VillaBella_142.readFeatures(json_VillaBella_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_142.addFeatures(features_VillaBella_142);
var lyr_VillaBella_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_142, 
                style: style_VillaBella_142,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_142_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_142_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_142_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_142_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_142_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_142_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_142_6.png" /> PASSEIO<br />' });
var format_VillaBella_143 = new ol.format.GeoJSON();
var features_VillaBella_143 = format_VillaBella_143.readFeatures(json_VillaBella_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_VillaBella_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_143.addFeatures(features_VillaBella_143);
var lyr_VillaBella_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_143, 
                style: style_VillaBella_143,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_143.png" /> Villa Bella'
            });
var format_Versalhes_144 = new ol.format.GeoJSON();
var features_Versalhes_144 = format_Versalhes_144.readFeatures(json_Versalhes_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_144.addFeatures(features_Versalhes_144);
var lyr_Versalhes_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_144, 
                style: style_Versalhes_144,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_144_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_144_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_144_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_144_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_144_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_144_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Versalhes_145 = new ol.format.GeoJSON();
var features_Versalhes_145 = format_Versalhes_145.readFeatures(json_Versalhes_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Versalhes_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_145.addFeatures(features_Versalhes_145);
var lyr_Versalhes_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_145, 
                style: style_Versalhes_145,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_145.png" /> Versalhes'
            });
var format_TorontoResidence_146 = new ol.format.GeoJSON();
var features_TorontoResidence_146 = format_TorontoResidence_146.readFeatures(json_TorontoResidence_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_146.addFeatures(features_TorontoResidence_146);
var lyr_TorontoResidence_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_146, 
                style: style_TorontoResidence_146,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_146_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_146_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_146_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_146_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_146_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_146_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TorontoResidence_147 = new ol.format.GeoJSON();
var features_TorontoResidence_147 = format_TorontoResidence_147.readFeatures(json_TorontoResidence_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TorontoResidence_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_147.addFeatures(features_TorontoResidence_147);
var lyr_TorontoResidence_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_147, 
                style: style_TorontoResidence_147,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_147.png" /> Toronto Residence'
            });
var format_TerraNova_148 = new ol.format.GeoJSON();
var features_TerraNova_148 = format_TerraNova_148.readFeatures(json_TerraNova_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_148.addFeatures(features_TerraNova_148);
var lyr_TerraNova_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_148, 
                style: style_TerraNova_148,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_148_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_148_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_148_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_148_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_148_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_148_5.png" /> RUAS<br />' });
var format_TerraNova_149 = new ol.format.GeoJSON();
var features_TerraNova_149 = format_TerraNova_149.readFeatures(json_TerraNova_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerraNova_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_149.addFeatures(features_TerraNova_149);
var lyr_TerraNova_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_149, 
                style: style_TerraNova_149,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_149.png" /> Terra Nova'
            });
var format_Sonetto_150 = new ol.format.GeoJSON();
var features_Sonetto_150 = format_Sonetto_150.readFeatures(json_Sonetto_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_150.addFeatures(features_Sonetto_150);
var lyr_Sonetto_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_150, 
                style: style_Sonetto_150,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_150.png" /> Sonetto'
            });
var format_Sonetto_151 = new ol.format.GeoJSON();
var features_Sonetto_151 = format_Sonetto_151.readFeatures(json_Sonetto_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Sonetto_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_151.addFeatures(features_Sonetto_151);
var lyr_Sonetto_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_151, 
                style: style_Sonetto_151,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_151.png" /> Sonetto'
            });
var format_SMARTFRANCAEIXORESIDENCIAL2_152 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_152 = format_SMARTFRANCAEIXORESIDENCIAL2_152.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_152.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_152);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_152, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_152,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_152_7.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL2_153 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_153 = format_SMARTFRANCAEIXORESIDENCIAL2_153.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_153.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_153);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_153, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_153,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_153.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_154 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_154 = format_SMARTFRANCAEIXORESIDENCIAL1_154.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_154.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_154);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_154, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_154,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_154_8.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL1_155 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_155 = format_SMARTFRANCAEIXORESIDENCIAL1_155.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_155.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_155);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_155, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_155,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_155.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_156 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_156 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_156.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_156.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_156);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_156, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_156,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_156_8.png" /> VIELA<br />' });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_157 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_157 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_157.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_157.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_157);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_157, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_157,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_157.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_158 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_158 = format_ServidoRamal138kVFranca4Guanabara_158.readFeatures(json_ServidoRamal138kVFranca4Guanabara_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_158.addFeatures(features_ServidoRamal138kVFranca4Guanabara_158);
var lyr_ServidoRamal138kVFranca4Guanabara_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_158, 
                style: style_ServidoRamal138kVFranca4Guanabara_158,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_158.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_159 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_159 = format_ServidoRamal138kVFranca4Guanabara_159.readFeatures(json_ServidoRamal138kVFranca4Guanabara_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_159.addFeatures(features_ServidoRamal138kVFranca4Guanabara_159);
var lyr_ServidoRamal138kVFranca4Guanabara_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_159, 
                style: style_ServidoRamal138kVFranca4Guanabara_159,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_159.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_160 = new ol.format.GeoJSON();
var features_SantaLina_160 = format_SantaLina_160.readFeatures(json_SantaLina_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_160.addFeatures(features_SantaLina_160);
var lyr_SantaLina_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_160, 
                style: style_SantaLina_160,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_160_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_160_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_160_2.png" /> RUAS<br />' });
var format_SantaLina_161 = new ol.format.GeoJSON();
var features_SantaLina_161 = format_SantaLina_161.readFeatures(json_SantaLina_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantaLina_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_161.addFeatures(features_SantaLina_161);
var lyr_SantaLina_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_161, 
                style: style_SantaLina_161,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_161.png" /> Santa Lina'
            });
var format_SantAnita_162 = new ol.format.GeoJSON();
var features_SantAnita_162 = format_SantAnita_162.readFeatures(json_SantAnita_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_162.addFeatures(features_SantAnita_162);
var lyr_SantAnita_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_162, 
                style: style_SantAnita_162,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_162.png" /> Sant\'Anita'
            });
var format_SantAnita_163 = new ol.format.GeoJSON();
var features_SantAnita_163 = format_SantAnita_163.readFeatures(json_SantAnita_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SantAnita_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_163.addFeatures(features_SantAnita_163);
var lyr_SantAnita_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_163, 
                style: style_SantAnita_163,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_163.png" /> Sant\'Anita'
            });
var format_RuaAlfioBenedini_164 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_164 = format_RuaAlfioBenedini_164.readFeatures(json_RuaAlfioBenedini_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_164.addFeatures(features_RuaAlfioBenedini_164);
var lyr_RuaAlfioBenedini_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_164, 
                style: style_RuaAlfioBenedini_164,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_164.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_165 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_165 = format_RuaAlfioBenedini_165.readFeatures(json_RuaAlfioBenedini_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_165.addFeatures(features_RuaAlfioBenedini_165);
var lyr_RuaAlfioBenedini_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_165, 
                style: style_RuaAlfioBenedini_165,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_165.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_166 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_166 = format_RuaAlfioBenedini_166.readFeatures(json_RuaAlfioBenedini_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RuaAlfioBenedini_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_166.addFeatures(features_RuaAlfioBenedini_166);
var lyr_RuaAlfioBenedini_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_166, 
                style: style_RuaAlfioBenedini_166,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_166.png" /> Rua Alfio Benedini'
            });
var format_ResidencialValeVerde_167 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_167 = format_ResidencialValeVerde_167.readFeatures(json_ResidencialValeVerde_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_167.addFeatures(features_ResidencialValeVerde_167);
var lyr_ResidencialValeVerde_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_167, 
                style: style_ResidencialValeVerde_167,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_167_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_167_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_167_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_167_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_167_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_167_5.png" /> PASSEIO<br />' });
var format_ResidencialValeVerde_168 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_168 = format_ResidencialValeVerde_168.readFeatures(json_ResidencialValeVerde_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialValeVerde_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_168.addFeatures(features_ResidencialValeVerde_168);
var lyr_ResidencialValeVerde_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_168, 
                style: style_ResidencialValeVerde_168,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
                title: '<img src="styles/legend/ResidencialValeVerde_168.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_169 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_169 = format_ResidencialYasminTorres_169.readFeatures(json_ResidencialYasminTorres_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_169.addFeatures(features_ResidencialYasminTorres_169);
var lyr_ResidencialYasminTorres_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_169, 
                style: style_ResidencialYasminTorres_169,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_169.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_170 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_170 = format_ResidencialYasminTorres_170.readFeatures(json_ResidencialYasminTorres_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialYasminTorres_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_170.addFeatures(features_ResidencialYasminTorres_170);
var lyr_ResidencialYasminTorres_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_170, 
                style: style_ResidencialYasminTorres_170,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_170.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialSoCarlosII_171 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_171 = format_ResidencialSoCarlosII_171.readFeatures(json_ResidencialSoCarlosII_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_171.addFeatures(features_ResidencialSoCarlosII_171);
var lyr_ResidencialSoCarlosII_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_171, 
                style: style_ResidencialSoCarlosII_171,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_171_5.png" /> RUAS<br />' });
var format_ResidencialSoCarlosII_172 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_172 = format_ResidencialSoCarlosII_172.readFeatures(json_ResidencialSoCarlosII_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosII_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_172.addFeatures(features_ResidencialSoCarlosII_172);
var lyr_ResidencialSoCarlosII_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_172, 
                style: style_ResidencialSoCarlosII_172,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosII_172.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_173 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_173 = format_ResidencialSoCarlosI_173.readFeatures(json_ResidencialSoCarlosI_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_173.addFeatures(features_ResidencialSoCarlosI_173);
var lyr_ResidencialSoCarlosI_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_173, 
                style: style_ResidencialSoCarlosI_173,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_1.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_7.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_173_8.png" /> VIELA<br />' });
var format_ResidencialSoCarlosI_174 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_174 = format_ResidencialSoCarlosI_174.readFeatures(json_ResidencialSoCarlosI_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSoCarlosI_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_174.addFeatures(features_ResidencialSoCarlosI_174);
var lyr_ResidencialSoCarlosI_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_174, 
                style: style_ResidencialSoCarlosI_174,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_174.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_175 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_175 = format_ResidencialSantaIns_175.readFeatures(json_ResidencialSantaIns_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_175.addFeatures(features_ResidencialSantaIns_175);
var lyr_ResidencialSantaIns_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_175, 
                style: style_ResidencialSantaIns_175,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_175_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_175_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_175_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_175_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaIns_175_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_175_5.png" /> RUAS<br />' });
var format_ResidencialSantaIns_176 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_176 = format_ResidencialSantaIns_176.readFeatures(json_ResidencialSantaIns_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaIns_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_176.addFeatures(features_ResidencialSantaIns_176);
var lyr_ResidencialSantaIns_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_176, 
                style: style_ResidencialSantaIns_176,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_176.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_177 = new ol.format.GeoJSON();
var features_ResidencialSantaF_177 = format_ResidencialSantaF_177.readFeatures(json_ResidencialSantaF_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_177.addFeatures(features_ResidencialSantaF_177);
var lyr_ResidencialSantaF_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_177, 
                style: style_ResidencialSantaF_177,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_177_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialSantaF_177_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_177_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_177_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialSantaF_177_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_177_5.png" /> RUAS<br />' });
var format_ResidencialSantaF_178 = new ol.format.GeoJSON();
var features_ResidencialSantaF_178 = format_ResidencialSantaF_178.readFeatures(json_ResidencialSantaF_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialSantaF_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_178.addFeatures(features_ResidencialSantaF_178);
var lyr_ResidencialSantaF_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_178, 
                style: style_ResidencialSantaF_178,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_178.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_179 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_179 = format_ResidencialQuintadosOitis_179.readFeatures(json_ResidencialQuintadosOitis_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_179.addFeatures(features_ResidencialQuintadosOitis_179);
var lyr_ResidencialQuintadosOitis_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_179, 
                style: style_ResidencialQuintadosOitis_179,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_5.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_179_7.png" /> RUAS<br />' });
var format_ResidencialQuintadosOitis_180 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_180 = format_ResidencialQuintadosOitis_180.readFeatures(json_ResidencialQuintadosOitis_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadosOitis_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_180.addFeatures(features_ResidencialQuintadosOitis_180);
var lyr_ResidencialQuintadosOitis_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_180, 
                style: style_ResidencialQuintadosOitis_180,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_180.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_181 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_181 = format_ResidencialQuintadoSol_181.readFeatures(json_ResidencialQuintadoSol_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_181.addFeatures(features_ResidencialQuintadoSol_181);
var lyr_ResidencialQuintadoSol_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_181, 
                style: style_ResidencialQuintadoSol_181,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_181_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_182 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_182 = format_ResidencialQuintadoSol_182.readFeatures(json_ResidencialQuintadoSol_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialQuintadoSol_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_182.addFeatures(features_ResidencialQuintadoSol_182);
var lyr_ResidencialQuintadoSol_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_182, 
                style: style_ResidencialQuintadoSol_182,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_182.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_183 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_183 = format_ResidencialPousoAlegreII_183.readFeatures(json_ResidencialPousoAlegreII_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_183.addFeatures(features_ResidencialPousoAlegreII_183);
var lyr_ResidencialPousoAlegreII_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_183, 
                style: style_ResidencialPousoAlegreII_183,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_183_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_184 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_184 = format_ResidencialPousoAlegreII_184.readFeatures(json_ResidencialPousoAlegreII_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegreII_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_184.addFeatures(features_ResidencialPousoAlegreII_184);
var lyr_ResidencialPousoAlegreII_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_184, 
                style: style_ResidencialPousoAlegreII_184,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_184.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_185 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_185 = format_ResidencialPousoAlegre_185.readFeatures(json_ResidencialPousoAlegre_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_185.addFeatures(features_ResidencialPousoAlegre_185);
var lyr_ResidencialPousoAlegre_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_185, 
                style: style_ResidencialPousoAlegre_185,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_185_7.png" /> VIELA<br />' });
var format_ResidencialPousoAlegre_186 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_186 = format_ResidencialPousoAlegre_186.readFeatures(json_ResidencialPousoAlegre_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialPousoAlegre_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_186.addFeatures(features_ResidencialPousoAlegre_186);
var lyr_ResidencialPousoAlegre_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_186, 
                style: style_ResidencialPousoAlegre_186,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_186.png" /> Residencial Pouso Alegre'
            });
var format_ResicencialNairRetuciII_187 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_187 = format_ResicencialNairRetuciII_187.readFeatures(json_ResicencialNairRetuciII_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_187.addFeatures(features_ResicencialNairRetuciII_187);
var lyr_ResicencialNairRetuciII_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_187, 
                style: style_ResicencialNairRetuciII_187,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_187_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_188 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_188 = format_ResicencialNairRetuciII_188.readFeatures(json_ResicencialNairRetuciII_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuciII_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_188.addFeatures(features_ResicencialNairRetuciII_188);
var lyr_ResicencialNairRetuciII_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_188, 
                style: style_ResicencialNairRetuciII_188,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_188.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_189 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_189 = format_ResicencialNairRetuci_189.readFeatures(json_ResicencialNairRetuci_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_189.addFeatures(features_ResicencialNairRetuci_189);
var lyr_ResicencialNairRetuci_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_189, 
                style: style_ResicencialNairRetuci_189,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_4.png" /> LOTES<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_6.png" /> RUAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_189_7.png" /> VIELA<br />' });
var format_ResicencialNairRetuci_190 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_190 = format_ResicencialNairRetuci_190.readFeatures(json_ResicencialNairRetuci_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResicencialNairRetuci_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_190.addFeatures(features_ResicencialNairRetuci_190);
var lyr_ResicencialNairRetuci_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_190, 
                style: style_ResicencialNairRetuci_190,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_190.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_191 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_191 = format_ResidencialMoradadoBosque_191.readFeatures(json_ResidencialMoradadoBosque_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_191.addFeatures(features_ResidencialMoradadoBosque_191);
var lyr_ResidencialMoradadoBosque_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_191, 
                style: style_ResidencialMoradadoBosque_191,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_191_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_192 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_192 = format_ResidencialMoradadoBosque_192.readFeatures(json_ResidencialMoradadoBosque_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMoradadoBosque_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_192.addFeatures(features_ResidencialMoradadoBosque_192);
var lyr_ResidencialMoradadoBosque_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_192, 
                style: style_ResidencialMoradadoBosque_192,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_192.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_193 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_193 = format_ResidencialMarthaHelena_193.readFeatures(json_ResidencialMarthaHelena_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_193.addFeatures(features_ResidencialMarthaHelena_193);
var lyr_ResidencialMarthaHelena_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_193, 
                style: style_ResidencialMarthaHelena_193,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_193.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarthaHelena_194 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_194 = format_ResidencialMarthaHelena_194.readFeatures(json_ResidencialMarthaHelena_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarthaHelena_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_194.addFeatures(features_ResidencialMarthaHelena_194);
var lyr_ResidencialMarthaHelena_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_194, 
                style: style_ResidencialMarthaHelena_194,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_194.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_195 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_195 = format_ResidencialMarioTasso_195.readFeatures(json_ResidencialMarioTasso_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_195.addFeatures(features_ResidencialMarioTasso_195);
var lyr_ResidencialMarioTasso_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_195, 
                style: style_ResidencialMarioTasso_195,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_195_5.png" /> RUAS<br />' });
var format_ResidencialMarioTasso_196 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_196 = format_ResidencialMarioTasso_196.readFeatures(json_ResidencialMarioTasso_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarioTasso_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_196.addFeatures(features_ResidencialMarioTasso_196);
var lyr_ResidencialMarioTasso_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_196, 
                style: style_ResidencialMarioTasso_196,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_196.png" /> Residencial Mario Tasso'
            });
var format_ResidencialMarianaAlarcon_197 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_197 = format_ResidencialMarianaAlarcon_197.readFeatures(json_ResidencialMarianaAlarcon_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_197.addFeatures(features_ResidencialMarianaAlarcon_197);
var lyr_ResidencialMarianaAlarcon_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_197, 
                style: style_ResidencialMarianaAlarcon_197,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
    title: 'Residencial Mariana Alarcon <br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialMarianaAlarcon_197_8.png" /> VIELA<br />' });
var format_ResidencialMarianaAlarcon_198 = new ol.format.GeoJSON();
var features_ResidencialMarianaAlarcon_198 = format_ResidencialMarianaAlarcon_198.readFeatures(json_ResidencialMarianaAlarcon_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialMarianaAlarcon_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarianaAlarcon_198.addFeatures(features_ResidencialMarianaAlarcon_198);
var lyr_ResidencialMarianaAlarcon_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarianaAlarcon_198, 
                style: style_ResidencialMarianaAlarcon_198,
                popuplayertitle: 'Residencial Mariana Alarcon ',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarianaAlarcon_198.png" /> Residencial Mariana Alarcon '
            });
var format_ResidencialJardimCanada_199 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_199 = format_ResidencialJardimCanada_199.readFeatures(json_ResidencialJardimCanada_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_199.addFeatures(features_ResidencialJardimCanada_199);
var lyr_ResidencialJardimCanada_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_199, 
                style: style_ResidencialJardimCanada_199,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_199.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJardimCanada_200 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_200 = format_ResidencialJardimCanada_200.readFeatures(json_ResidencialJardimCanada_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJardimCanada_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_200.addFeatures(features_ResidencialJardimCanada_200);
var lyr_ResidencialJardimCanada_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_200, 
                style: style_ResidencialJardimCanada_200,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_200.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJabuticabeiras_201 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_201 = format_ResidencialJabuticabeiras_201.readFeatures(json_ResidencialJabuticabeiras_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_201.addFeatures(features_ResidencialJabuticabeiras_201);
var lyr_ResidencialJabuticabeiras_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_201, 
                style: style_ResidencialJabuticabeiras_201,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_201_6.png" /> RUAS<br />' });
var format_ResidencialJabuticabeiras_202 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_202 = format_ResidencialJabuticabeiras_202.readFeatures(json_ResidencialJabuticabeiras_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialJabuticabeiras_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_202.addFeatures(features_ResidencialJabuticabeiras_202);
var lyr_ResidencialJabuticabeiras_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_202, 
                style: style_ResidencialJabuticabeiras_202,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_202.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialFrutuoso_203 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_203 = format_ResidencialFrutuoso_203.readFeatures(json_ResidencialFrutuoso_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_203.addFeatures(features_ResidencialFrutuoso_203);
var lyr_ResidencialFrutuoso_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_203, 
                style: style_ResidencialFrutuoso_203,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_203_6.png" /> RUAS<br />' });
var format_ResidencialFrutuoso_204 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_204 = format_ResidencialFrutuoso_204.readFeatures(json_ResidencialFrutuoso_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialFrutuoso_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_204.addFeatures(features_ResidencialFrutuoso_204);
var lyr_ResidencialFrutuoso_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_204, 
                style: style_ResidencialFrutuoso_204,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFrutuoso_204.png" /> Residencial Frutuoso'
            });
var format_ResidencialEssenza_205 = new ol.format.GeoJSON();
var features_ResidencialEssenza_205 = format_ResidencialEssenza_205.readFeatures(json_ResidencialEssenza_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_205.addFeatures(features_ResidencialEssenza_205);
var lyr_ResidencialEssenza_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_205, 
                style: style_ResidencialEssenza_205,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_205_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_205_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_205_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_205_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_205_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_205_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_205_6.png" /> PASSEIO<br />' });
var format_ResidencialEssenza_206 = new ol.format.GeoJSON();
var features_ResidencialEssenza_206 = format_ResidencialEssenza_206.readFeatures(json_ResidencialEssenza_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialEssenza_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_206.addFeatures(features_ResidencialEssenza_206);
var lyr_ResidencialEssenza_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_206, 
                style: style_ResidencialEssenza_206,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
                title: '<img src="styles/legend/ResidencialEssenza_206.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_207 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_207 = format_ResidencialDomingosJardini_207.readFeatures(json_ResidencialDomingosJardini_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_207.addFeatures(features_ResidencialDomingosJardini_207);
var lyr_ResidencialDomingosJardini_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_207, 
                style: style_ResidencialDomingosJardini_207,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_207_5.png" /> RUAS<br />' });
var format_ResidencialDomingosJardini_208 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_208 = format_ResidencialDomingosJardini_208.readFeatures(json_ResidencialDomingosJardini_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialDomingosJardini_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_208.addFeatures(features_ResidencialDomingosJardini_208);
var lyr_ResidencialDomingosJardini_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_208, 
                style: style_ResidencialDomingosJardini_208,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_208.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_209 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_209 = format_ResidencialCintraAlves_209.readFeatures(json_ResidencialCintraAlves_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_209.addFeatures(features_ResidencialCintraAlves_209);
var lyr_ResidencialCintraAlves_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_209, 
                style: style_ResidencialCintraAlves_209,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_209_8.png" /> VIELA<br />' });
var format_ResidencialCintraAlves_210 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_210 = format_ResidencialCintraAlves_210.readFeatures(json_ResidencialCintraAlves_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialCintraAlves_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_210.addFeatures(features_ResidencialCintraAlves_210);
var lyr_ResidencialCintraAlves_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_210, 
                style: style_ResidencialCintraAlves_210,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_210.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_211 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_211 = format_ResidencialBoaVista_211.readFeatures(json_ResidencialBoaVista_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_211.addFeatures(features_ResidencialBoaVista_211);
var lyr_ResidencialBoaVista_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_211, 
                style: style_ResidencialBoaVista_211,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_211_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_211_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_211_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_211_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_211_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_211_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_211_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_211_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_212 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_212 = format_ResidencialBoaVista_212.readFeatures(json_ResidencialBoaVista_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialBoaVista_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_212.addFeatures(features_ResidencialBoaVista_212);
var lyr_ResidencialBoaVista_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_212, 
                style: style_ResidencialBoaVista_212,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_212.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_213 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_213 = format_ResidencialAltodaFazenda_213.readFeatures(json_ResidencialAltodaFazenda_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_213.addFeatures(features_ResidencialAltodaFazenda_213);
var lyr_ResidencialAltodaFazenda_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_213, 
                style: style_ResidencialAltodaFazenda_213,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_213_5.png" /> RUAS<br />' });
var format_ResidencialAltodaFazenda_214 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_214 = format_ResidencialAltodaFazenda_214.readFeatures(json_ResidencialAltodaFazenda_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResidencialAltodaFazenda_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_214.addFeatures(features_ResidencialAltodaFazenda_214);
var lyr_ResidencialAltodaFazenda_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_214, 
                style: style_ResidencialAltodaFazenda_214,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_214.png" /> Residencial Alto da Fazenda'
            });
var format_RecantoMeneghetti_215 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_215 = format_RecantoMeneghetti_215.readFeatures(json_RecantoMeneghetti_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_215.addFeatures(features_RecantoMeneghetti_215);
var lyr_RecantoMeneghetti_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_215, 
                style: style_RecantoMeneghetti_215,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_215_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_215_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_215_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_215_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_215_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_215_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_215_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_215_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_215_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_215_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_216 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_216 = format_RecantoMeneghetti_216.readFeatures(json_RecantoMeneghetti_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoMeneghetti_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_216.addFeatures(features_RecantoMeneghetti_216);
var lyr_RecantoMeneghetti_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_216, 
                style: style_RecantoMeneghetti_216,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_216.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_217 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_217 = format_Quadra18VilaExposio_217.readFeatures(json_Quadra18VilaExposio_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_217.addFeatures(features_Quadra18VilaExposio_217);
var lyr_Quadra18VilaExposio_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_217, 
                style: style_Quadra18VilaExposio_217,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_217_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_217_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_217_2.png" /> PASSEIO<br />' });
var format_Quadra18VilaExposio_218 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_218 = format_Quadra18VilaExposio_218.readFeatures(json_Quadra18VilaExposio_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quadra18VilaExposio_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_218.addFeatures(features_Quadra18VilaExposio_218);
var lyr_Quadra18VilaExposio_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_218, 
                style: style_Quadra18VilaExposio_218,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
                title: '<img src="styles/legend/Quadra18VilaExposio_218.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_219 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_219 = format_ProlongamentoSamelPark_219.readFeatures(json_ProlongamentoSamelPark_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_219.addFeatures(features_ProlongamentoSamelPark_219);
var lyr_ProlongamentoSamelPark_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_219, 
                style: style_ProlongamentoSamelPark_219,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_219_7.png" /> PASSEIO<br />' });
var format_ProlongamentoSamelPark_220 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_220 = format_ProlongamentoSamelPark_220.readFeatures(json_ProlongamentoSamelPark_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProlongamentoSamelPark_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_220.addFeatures(features_ProlongamentoSamelPark_220);
var lyr_ProlongamentoSamelPark_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_220, 
                style: style_ProlongamentoSamelPark_220,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
                title: '<img src="styles/legend/ProlongamentoSamelPark_220.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_221 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_221 = format_ParqueVillaLobos_221.readFeatures(json_ParqueVillaLobos_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_221.addFeatures(features_ParqueVillaLobos_221);
var lyr_ParqueVillaLobos_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_221, 
                style: style_ParqueVillaLobos_221,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_221_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_221_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_221_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_221_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_221_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_221_5.png" /> RUAS<br />' });
var format_ParqueVillaLobos_222 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_222 = format_ParqueVillaLobos_222.readFeatures(json_ParqueVillaLobos_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueVillaLobos_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_222.addFeatures(features_ParqueVillaLobos_222);
var lyr_ParqueVillaLobos_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_222, 
                style: style_ParqueVillaLobos_222,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_222.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_223 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_223 = format_ParquePalmeiraImperial_223.readFeatures(json_ParquePalmeiraImperial_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_223.addFeatures(features_ParquePalmeiraImperial_223);
var lyr_ParquePalmeiraImperial_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_223, 
                style: style_ParquePalmeiraImperial_223,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_223_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_224 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_224 = format_ParquePalmeiraImperial_224.readFeatures(json_ParquePalmeiraImperial_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquePalmeiraImperial_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_224.addFeatures(features_ParquePalmeiraImperial_224);
var lyr_ParquePalmeiraImperial_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_224, 
                style: style_ParquePalmeiraImperial_224,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_224.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_225 = new ol.format.GeoJSON();
var features_ParqueJacarand_225 = format_ParqueJacarand_225.readFeatures(json_ParqueJacarand_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_225.addFeatures(features_ParqueJacarand_225);
var lyr_ParqueJacarand_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_225, 
                style: style_ParqueJacarand_225,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_225_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_225_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_225_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_225_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_225_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_225_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_225_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_225_7.png" /> RUAS<br />' });
var format_ParqueJacarand_226 = new ol.format.GeoJSON();
var features_ParqueJacarand_226 = format_ParqueJacarand_226.readFeatures(json_ParqueJacarand_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueJacarand_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_226.addFeatures(features_ParqueJacarand_226);
var lyr_ParqueJacarand_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_226, 
                style: style_ParqueJacarand_226,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
                title: '<img src="styles/legend/ParqueJacarand_226.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_227 = new ol.format.GeoJSON();
var features_ParqueFlora_227 = format_ParqueFlora_227.readFeatures(json_ParqueFlora_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_227.addFeatures(features_ParqueFlora_227);
var lyr_ParqueFlora_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_227, 
                style: style_ParqueFlora_227,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_227_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_227_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_227_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_227_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_227_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_227_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_227_6.png" /> VIELA<br />' });
var format_ParqueFlora_228 = new ol.format.GeoJSON();
var features_ParqueFlora_228 = format_ParqueFlora_228.readFeatures(json_ParqueFlora_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueFlora_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_228.addFeatures(features_ParqueFlora_228);
var lyr_ParqueFlora_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_228, 
                style: style_ParqueFlora_228,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_228.png" /> Parque Flora'
            });
var format_ParquedosSabias_229 = new ol.format.GeoJSON();
var features_ParquedosSabias_229 = format_ParquedosSabias_229.readFeatures(json_ParquedosSabias_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_229.addFeatures(features_ParquedosSabias_229);
var lyr_ParquedosSabias_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_229, 
                style: style_ParquedosSabias_229,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_229_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_229_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_229_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_229_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_229_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_229_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_229_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_229_7.png" /> VIELA<br />' });
var format_ParquedosSabias_230 = new ol.format.GeoJSON();
var features_ParquedosSabias_230 = format_ParquedosSabias_230.readFeatures(json_ParquedosSabias_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosSabias_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_230.addFeatures(features_ParquedosSabias_230);
var lyr_ParquedosSabias_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_230, 
                style: style_ParquedosSabias_230,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_230.png" /> Parque dos Sabias'
            });
var format_ParagonFaseII_231 = new ol.format.GeoJSON();
var features_ParagonFaseII_231 = format_ParagonFaseII_231.readFeatures(json_ParagonFaseII_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_231.addFeatures(features_ParagonFaseII_231);
var lyr_ParagonFaseII_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_231, 
                style: style_ParagonFaseII_231,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_231_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_231_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_231_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_231_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_231_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_231_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_231_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_231_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_231_8.png" /> VIELA<br />' });
var format_ParagonFaseII_232 = new ol.format.GeoJSON();
var features_ParagonFaseII_232 = format_ParagonFaseII_232.readFeatures(json_ParagonFaseII_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParagonFaseII_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_232.addFeatures(features_ParagonFaseII_232);
var lyr_ParagonFaseII_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_232, 
                style: style_ParagonFaseII_232,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
                title: '<img src="styles/legend/ParagonFaseII_232.png" /> Paragon Fase II'
            });
var format_Paragon_233 = new ol.format.GeoJSON();
var features_Paragon_233 = format_Paragon_233.readFeatures(json_Paragon_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_233.addFeatures(features_Paragon_233);
var lyr_Paragon_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_233, 
                style: style_Paragon_233,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_233_0.png" /> APP<br />\
    <img src="styles/legend/Paragon_233_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_233_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_233_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Paragon_233_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_233_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Paragon_233_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Paragon_233_7.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_233_8.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_233_9.png" /> VIELA<br />' });
var format_Paragon_234 = new ol.format.GeoJSON();
var features_Paragon_234 = format_Paragon_234.readFeatures(json_Paragon_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Paragon_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_234.addFeatures(features_Paragon_234);
var lyr_Paragon_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_234, 
                style: style_Paragon_234,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_234.png" /> Paragon'
            });
var format_PalmeiraReal_235 = new ol.format.GeoJSON();
var features_PalmeiraReal_235 = format_PalmeiraReal_235.readFeatures(json_PalmeiraReal_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_235.addFeatures(features_PalmeiraReal_235);
var lyr_PalmeiraReal_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_235, 
                style: style_PalmeiraReal_235,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_235_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_235_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_235_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_235_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_235_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_235_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_PalmeiraReal_236 = new ol.format.GeoJSON();
var features_PalmeiraReal_236 = format_PalmeiraReal_236.readFeatures(json_PalmeiraReal_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PalmeiraReal_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_236.addFeatures(features_PalmeiraReal_236);
var lyr_PalmeiraReal_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_236, 
                style: style_PalmeiraReal_236,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_236.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_237 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_237 = format_MoradadoVerdeII_237.readFeatures(json_MoradadoVerdeII_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_237.addFeatures(features_MoradadoVerdeII_237);
var lyr_MoradadoVerdeII_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_237, 
                style: style_MoradadoVerdeII_237,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_237_0.png" /> APP<br />\
    <img src="styles/legend/MoradadoVerdeII_237_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_237_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_237_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/MoradadoVerdeII_237_4.png" /> LOTES<br />\
    <img src="styles/legend/MoradadoVerdeII_237_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_237_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_237_7.png" /> RUAS<br />' });
var format_MoradadoVerdeII_238 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_238 = format_MoradadoVerdeII_238.readFeatures(json_MoradadoVerdeII_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadoVerdeII_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_238.addFeatures(features_MoradadoVerdeII_238);
var lyr_MoradadoVerdeII_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_238, 
                style: style_MoradadoVerdeII_238,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_238.png" /> Morada do Verde II'
            });
var format_MoradadaMata_239 = new ol.format.GeoJSON();
var features_MoradadaMata_239 = format_MoradadaMata_239.readFeatures(json_MoradadaMata_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_239.addFeatures(features_MoradadaMata_239);
var lyr_MoradadaMata_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_239, 
                style: style_MoradadaMata_239,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_239_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_239_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_239_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_239_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_239_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_239_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_239_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_239_7.png" /> RUAS<br />' });
var format_MoradadaMata_240 = new ol.format.GeoJSON();
var features_MoradadaMata_240 = format_MoradadaMata_240.readFeatures(json_MoradadaMata_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MoradadaMata_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_240.addFeatures(features_MoradadaMata_240);
var lyr_MoradadaMata_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_240, 
                style: style_MoradadaMata_240,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_240.png" /> Morada da Mata'
            });
var format_Monti_241 = new ol.format.GeoJSON();
var features_Monti_241 = format_Monti_241.readFeatures(json_Monti_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_241.addFeatures(features_Monti_241);
var lyr_Monti_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_241, 
                style: style_Monti_241,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_241_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_241_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_241_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_241_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_241_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_241_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Monti_242 = new ol.format.GeoJSON();
var features_Monti_242 = format_Monti_242.readFeatures(json_Monti_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Monti_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_242.addFeatures(features_Monti_242);
var lyr_Monti_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_242, 
                style: style_Monti_242,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_242.png" /> Montié'
            });
var format_MontBlancResidence_243 = new ol.format.GeoJSON();
var features_MontBlancResidence_243 = format_MontBlancResidence_243.readFeatures(json_MontBlancResidence_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_243.addFeatures(features_MontBlancResidence_243);
var lyr_MontBlancResidence_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_243, 
                style: style_MontBlancResidence_243,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_243.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_244 = new ol.format.GeoJSON();
var features_MontBlancResidence_244 = format_MontBlancResidence_244.readFeatures(json_MontBlancResidence_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MontBlancResidence_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_244.addFeatures(features_MontBlancResidence_244);
var lyr_MontBlancResidence_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_244, 
                style: style_MontBlancResidence_244,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_244.png" /> Mont Blanc Residence'
            });
var format_MasterplanDespaschoal_245 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_245 = format_MasterplanDespaschoal_245.readFeatures(json_MasterplanDespaschoal_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_245.addFeatures(features_MasterplanDespaschoal_245);
var lyr_MasterplanDespaschoal_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_245, 
                style: style_MasterplanDespaschoal_245,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_245_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_245_9.png" /> RUAS<br />' });
var format_MasterplanDespaschoal_246 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_246 = format_MasterplanDespaschoal_246.readFeatures(json_MasterplanDespaschoal_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_246.addFeatures(features_MasterplanDespaschoal_246);
var lyr_MasterplanDespaschoal_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_246, 
                style: style_MasterplanDespaschoal_246,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_246.png" /> Masterplan Despaschoal '
            });
var format_MasterplanDespaschoal_247 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_247 = format_MasterplanDespaschoal_247.readFeatures(json_MasterplanDespaschoal_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasterplanDespaschoal_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_247.addFeatures(features_MasterplanDespaschoal_247);
var lyr_MasterplanDespaschoal_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_247, 
                style: style_MasterplanDespaschoal_247,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_247.png" /> Masterplan Despaschoal '
            });
var format_MasteplanBildVitta_248 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_248 = format_MasteplanBildVitta_248.readFeatures(json_MasteplanBildVitta_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_248.addFeatures(features_MasteplanBildVitta_248);
var lyr_MasteplanBildVitta_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_248, 
                style: style_MasteplanBildVitta_248,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_248_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_248_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_248_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_248_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_248_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_248_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_248_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_248_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_248_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_248_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_248_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_248_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_248_12.png" /> SERVIDAO<br />' });
var format_MasteplanBildVitta_249 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_249 = format_MasteplanBildVitta_249.readFeatures(json_MasteplanBildVitta_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_249.addFeatures(features_MasteplanBildVitta_249);
var lyr_MasteplanBildVitta_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_249, 
                style: style_MasteplanBildVitta_249,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_249.png" /> Masteplan Bild/Vitta'
            });
var format_MasteplanBildVitta_250 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_250 = format_MasteplanBildVitta_250.readFeatures(json_MasteplanBildVitta_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MasteplanBildVitta_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_250.addFeatures(features_MasteplanBildVitta_250);
var lyr_MasteplanBildVitta_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_250, 
                style: style_MasteplanBildVitta_250,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_250.png" /> Masteplan Bild/Vitta'
            });
var format_Loteamentolamo_251 = new ol.format.GeoJSON();
var features_Loteamentolamo_251 = format_Loteamentolamo_251.readFeatures(json_Loteamentolamo_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_251.addFeatures(features_Loteamentolamo_251);
var lyr_Loteamentolamo_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_251, 
                style: style_Loteamentolamo_251,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_251_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_251_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_251_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_251_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_251_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_251_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_251_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_251_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_251_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_251_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_251_10.png" /> VIELA<br />' });
var format_Loteamentolamo_252 = new ol.format.GeoJSON();
var features_Loteamentolamo_252 = format_Loteamentolamo_252.readFeatures(json_Loteamentolamo_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Loteamentolamo_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_252.addFeatures(features_Loteamentolamo_252);
var lyr_Loteamentolamo_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_252, 
                style: style_Loteamentolamo_252,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_252.png" /> Loteamento Álamo'
            });
var format_JardimPherola_253 = new ol.format.GeoJSON();
var features_JardimPherola_253 = format_JardimPherola_253.readFeatures(json_JardimPherola_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_253.addFeatures(features_JardimPherola_253);
var lyr_JardimPherola_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_253, 
                style: style_JardimPherola_253,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_253.png" /> Jardim Pherola'
            });
var format_JardimPherola_254 = new ol.format.GeoJSON();
var features_JardimPherola_254 = format_JardimPherola_254.readFeatures(json_JardimPherola_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimPherola_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_254.addFeatures(features_JardimPherola_254);
var lyr_JardimPherola_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_254, 
                style: style_JardimPherola_254,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_254.png" /> Jardim Pherola'
            });
var format_JardimMariaLuiza_255 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_255 = format_JardimMariaLuiza_255.readFeatures(json_JardimMariaLuiza_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_255.addFeatures(features_JardimMariaLuiza_255);
var lyr_JardimMariaLuiza_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_255, 
                style: style_JardimMariaLuiza_255,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_255_0.png" /> APP<br />\
    <img src="styles/legend/JardimMariaLuiza_255_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_255_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimMariaLuiza_255_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_255_4.png" /> LOTES<br />\
    <img src="styles/legend/JardimMariaLuiza_255_5.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_255_6.png" /> RUAS<br />\
    <img src="styles/legend/JardimMariaLuiza_255_7.png" /> VIELA<br />' });
var format_JardimMariaLuiza_256 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_256 = format_JardimMariaLuiza_256.readFeatures(json_JardimMariaLuiza_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimMariaLuiza_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_256.addFeatures(features_JardimMariaLuiza_256);
var lyr_JardimMariaLuiza_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_256, 
                style: style_JardimMariaLuiza_256,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_256.png" /> Jardim Maria Luiza'
            });
var format_JardimHorizonte_257 = new ol.format.GeoJSON();
var features_JardimHorizonte_257 = format_JardimHorizonte_257.readFeatures(json_JardimHorizonte_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_257.addFeatures(features_JardimHorizonte_257);
var lyr_JardimHorizonte_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_257, 
                style: style_JardimHorizonte_257,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_257_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_257_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_257_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_257_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_257_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_257_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_257_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_257_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_257_8.png" /> VIELA<br />' });
var format_JardimHorizonte_258 = new ol.format.GeoJSON();
var features_JardimHorizonte_258 = format_JardimHorizonte_258.readFeatures(json_JardimHorizonte_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimHorizonte_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_258.addFeatures(features_JardimHorizonte_258);
var lyr_JardimHorizonte_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_258, 
                style: style_JardimHorizonte_258,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_258.png" /> Jardim Horizonte'
            });
var format_JardimFlora_259 = new ol.format.GeoJSON();
var features_JardimFlora_259 = format_JardimFlora_259.readFeatures(json_JardimFlora_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_259.addFeatures(features_JardimFlora_259);
var lyr_JardimFlora_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_259, 
                style: style_JardimFlora_259,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_259_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_259_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_259_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_259_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_259_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_259_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_259_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_259_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_259_8.png" /> RUAS<br />' });
var format_JardimFlora_260 = new ol.format.GeoJSON();
var features_JardimFlora_260 = format_JardimFlora_260.readFeatures(json_JardimFlora_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimFlora_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_260.addFeatures(features_JardimFlora_260);
var lyr_JardimFlora_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_260, 
                style: style_JardimFlora_260,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_260.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_261 = new ol.format.GeoJSON();
var features_IrineuZanetiII_261 = format_IrineuZanetiII_261.readFeatures(json_IrineuZanetiII_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_261.addFeatures(features_IrineuZanetiII_261);
var lyr_IrineuZanetiII_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_261, 
                style: style_IrineuZanetiII_261,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_261_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_261_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_261_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_261_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_261_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_261_5.png" /> PASSEIO<br />' });
var format_IrineuZanetiII_262 = new ol.format.GeoJSON();
var features_IrineuZanetiII_262 = format_IrineuZanetiII_262.readFeatures(json_IrineuZanetiII_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_IrineuZanetiII_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_262.addFeatures(features_IrineuZanetiII_262);
var lyr_IrineuZanetiII_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_262, 
                style: style_IrineuZanetiII_262,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_262.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_263 = new ol.format.GeoJSON();
var features_Infratcnica_263 = format_Infratcnica_263.readFeatures(json_Infratcnica_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_263.addFeatures(features_Infratcnica_263);
var lyr_Infratcnica_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_263, 
                style: style_Infratcnica_263,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_263_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_263_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_263_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_263_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_263_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_263_5.png" /> RUAS<br />' });
var format_Infratcnica_264 = new ol.format.GeoJSON();
var features_Infratcnica_264 = format_Infratcnica_264.readFeatures(json_Infratcnica_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Infratcnica_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_264.addFeatures(features_Infratcnica_264);
var lyr_Infratcnica_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_264, 
                style: style_Infratcnica_264,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_264.png" /> Infratécnica'
            });
var format_HorizResidence_265 = new ol.format.GeoJSON();
var features_HorizResidence_265 = format_HorizResidence_265.readFeatures(json_HorizResidence_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_265.addFeatures(features_HorizResidence_265);
var lyr_HorizResidence_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_265, 
                style: style_HorizResidence_265,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_265.png" /> Horiz Residence'
            });
var format_HorizResidence_266 = new ol.format.GeoJSON();
var features_HorizResidence_266 = format_HorizResidence_266.readFeatures(json_HorizResidence_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_HorizResidence_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_266.addFeatures(features_HorizResidence_266);
var lyr_HorizResidence_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_266, 
                style: style_HorizResidence_266,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_266.png" /> Horiz Residence'
            });
var format_GlebaNossaSenhoraAuxiliadora_267 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_267 = format_GlebaNossaSenhoraAuxiliadora_267.readFeatures(json_GlebaNossaSenhoraAuxiliadora_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_267.addFeatures(features_GlebaNossaSenhoraAuxiliadora_267);
var lyr_GlebaNossaSenhoraAuxiliadora_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_267, 
                style: style_GlebaNossaSenhoraAuxiliadora_267,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_267.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_GlebaNossaSenhoraAuxiliadora_268 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_268 = format_GlebaNossaSenhoraAuxiliadora_268.readFeatures(json_GlebaNossaSenhoraAuxiliadora_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_268.addFeatures(features_GlebaNossaSenhoraAuxiliadora_268);
var lyr_GlebaNossaSenhoraAuxiliadora_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_268, 
                style: style_GlebaNossaSenhoraAuxiliadora_268,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_268.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_Ferracini_269 = new ol.format.GeoJSON();
var features_Ferracini_269 = format_Ferracini_269.readFeatures(json_Ferracini_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_269.addFeatures(features_Ferracini_269);
var lyr_Ferracini_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_269, 
                style: style_Ferracini_269,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_269_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_269_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_269_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_269_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_269_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_269_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_269_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_269_7.png" /> PASSEIO<br />' });
var format_Ferracini_270 = new ol.format.GeoJSON();
var features_Ferracini_270 = format_Ferracini_270.readFeatures(json_Ferracini_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Ferracini_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_270.addFeatures(features_Ferracini_270);
var lyr_Ferracini_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_270, 
                style: style_Ferracini_270,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_270.png" /> Ferracini'
            });
var format_FrancaB6_271 = new ol.format.GeoJSON();
var features_FrancaB6_271 = format_FrancaB6_271.readFeatures(json_FrancaB6_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_271.addFeatures(features_FrancaB6_271);
var lyr_FrancaB6_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_271, 
                style: style_FrancaB6_271,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_271_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_271_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_271_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_271_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_271_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_271_5.png" /> PASSEIO<br />' });
var format_FrancaB6_272 = new ol.format.GeoJSON();
var features_FrancaB6_272 = format_FrancaB6_272.readFeatures(json_FrancaB6_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FrancaB6_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_272.addFeatures(features_FrancaB6_272);
var lyr_FrancaB6_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_272, 
                style: style_FrancaB6_272,
                popuplayertitle: 'Franca B6',
                interactive: true,
                title: '<img src="styles/legend/FrancaB6_272.png" /> Franca B6'
            });
var format_FazendaProgresso_273 = new ol.format.GeoJSON();
var features_FazendaProgresso_273 = format_FazendaProgresso_273.readFeatures(json_FazendaProgresso_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_273.addFeatures(features_FazendaProgresso_273);
var lyr_FazendaProgresso_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_273, 
                style: style_FazendaProgresso_273,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_273.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_274 = new ol.format.GeoJSON();
var features_FazendaProgresso_274 = format_FazendaProgresso_274.readFeatures(json_FazendaProgresso_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaProgresso_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_274.addFeatures(features_FazendaProgresso_274);
var lyr_FazendaProgresso_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_274, 
                style: style_FazendaProgresso_274,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_274.png" /> Fazenda Progresso'
            });
var format_FazendaeGranjaSantaRita2_275 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_275 = format_FazendaeGranjaSantaRita2_275.readFeatures(json_FazendaeGranjaSantaRita2_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_275.addFeatures(features_FazendaeGranjaSantaRita2_275);
var lyr_FazendaeGranjaSantaRita2_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_275, 
                style: style_FazendaeGranjaSantaRita2_275,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_275.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita2_276 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_276 = format_FazendaeGranjaSantaRita2_276.readFeatures(json_FazendaeGranjaSantaRita2_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita2_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_276.addFeatures(features_FazendaeGranjaSantaRita2_276);
var lyr_FazendaeGranjaSantaRita2_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_276, 
                style: style_FazendaeGranjaSantaRita2_276,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_276.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita_277 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_277 = format_FazendaeGranjaSantaRita_277.readFeatures(json_FazendaeGranjaSantaRita_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_277.addFeatures(features_FazendaeGranjaSantaRita_277);
var lyr_FazendaeGranjaSantaRita_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_277, 
                style: style_FazendaeGranjaSantaRita_277,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_277.png" /> Fazenda e Granja Santa Rita'
            });
var format_FazendaeGranjaSantaRita_278 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_278 = format_FazendaeGranjaSantaRita_278.readFeatures(json_FazendaeGranjaSantaRita_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaeGranjaSantaRita_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_278.addFeatures(features_FazendaeGranjaSantaRita_278);
var lyr_FazendaeGranjaSantaRita_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_278, 
                style: style_FazendaeGranjaSantaRita_278,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_278.png" /> Fazenda e Granja Santa Rita'
            });
var format_Essence_279 = new ol.format.GeoJSON();
var features_Essence_279 = format_Essence_279.readFeatures(json_Essence_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_279.addFeatures(features_Essence_279);
var lyr_Essence_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_279, 
                style: style_Essence_279,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_279.png" /> Essence'
            });
var format_Essence_280 = new ol.format.GeoJSON();
var features_Essence_280 = format_Essence_280.readFeatures(json_Essence_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Essence_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_280.addFeatures(features_Essence_280);
var lyr_Essence_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_280, 
                style: style_Essence_280,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_280.png" /> Essence'
            });
var format_Elias_281 = new ol.format.GeoJSON();
var features_Elias_281 = format_Elias_281.readFeatures(json_Elias_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_281.addFeatures(features_Elias_281);
var lyr_Elias_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_281, 
                style: style_Elias_281,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_281_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_281_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_281_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_281_3.png" /> CICLOVIA<br />\
    <img src="styles/legend/Elias_281_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Elias_281_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Elias_281_6.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_281_7.png" /> RUAS<br />' });
var format_Elias_282 = new ol.format.GeoJSON();
var features_Elias_282 = format_Elias_282.readFeatures(json_Elias_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Elias_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_282.addFeatures(features_Elias_282);
var lyr_Elias_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_282, 
                style: style_Elias_282,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_282.png" /> Elias'
            });
var format_EdifcioSolNascente_283 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_283 = format_EdifcioSolNascente_283.readFeatures(json_EdifcioSolNascente_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_283.addFeatures(features_EdifcioSolNascente_283);
var lyr_EdifcioSolNascente_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_283, 
                style: style_EdifcioSolNascente_283,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_283.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_284 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_284 = format_EdifcioSolNascente_284.readFeatures(json_EdifcioSolNascente_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioSolNascente_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_284.addFeatures(features_EdifcioSolNascente_284);
var lyr_EdifcioSolNascente_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_284, 
                style: style_EdifcioSolNascente_284,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_284.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_285 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_285 = format_EdifcioRuadoSol_285.readFeatures(json_EdifcioRuadoSol_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_285.addFeatures(features_EdifcioRuadoSol_285);
var lyr_EdifcioRuadoSol_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_285, 
                style: style_EdifcioRuadoSol_285,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_285.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_286 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_286 = format_EdifcioRuadoSol_286.readFeatures(json_EdifcioRuadoSol_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioRuadoSol_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_286.addFeatures(features_EdifcioRuadoSol_286);
var lyr_EdifcioRuadoSol_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_286, 
                style: style_EdifcioRuadoSol_286,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_286.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_287 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_287 = format_EdifcioResidencialHope_287.readFeatures(json_EdifcioResidencialHope_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_287.addFeatures(features_EdifcioResidencialHope_287);
var lyr_EdifcioResidencialHope_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_287, 
                style: style_EdifcioResidencialHope_287,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_287.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_288 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_288 = format_EdifcioResidencialHope_288.readFeatures(json_EdifcioResidencialHope_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EdifcioResidencialHope_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_288.addFeatures(features_EdifcioResidencialHope_288);
var lyr_EdifcioResidencialHope_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_288, 
                style: style_EdifcioResidencialHope_288,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_288.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_289 = new ol.format.GeoJSON();
var features_DiocesedeFranca_289 = format_DiocesedeFranca_289.readFeatures(json_DiocesedeFranca_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_289.addFeatures(features_DiocesedeFranca_289);
var lyr_DiocesedeFranca_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_289, 
                style: style_DiocesedeFranca_289,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_289_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_289_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_289_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_289_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_289_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_289_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_289_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_290 = new ol.format.GeoJSON();
var features_DiocesedeFranca_290 = format_DiocesedeFranca_290.readFeatures(json_DiocesedeFranca_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DiocesedeFranca_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_290.addFeatures(features_DiocesedeFranca_290);
var lyr_DiocesedeFranca_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_290, 
                style: style_DiocesedeFranca_290,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_290.png" /> Diocese de Franca'
            });
var format_DaVinci_291 = new ol.format.GeoJSON();
var features_DaVinci_291 = format_DaVinci_291.readFeatures(json_DaVinci_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_291.addFeatures(features_DaVinci_291);
var lyr_DaVinci_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_291, 
                style: style_DaVinci_291,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_291.png" /> Da Vinci'
            });
var format_DaVinci_292 = new ol.format.GeoJSON();
var features_DaVinci_292 = format_DaVinci_292.readFeatures(json_DaVinci_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DaVinci_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_292.addFeatures(features_DaVinci_292);
var lyr_DaVinci_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_292, 
                style: style_DaVinci_292,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_292.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_293 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_293 = format_CondomnioIICityPetrpolis_293.readFeatures(json_CondomnioIICityPetrpolis_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_293.addFeatures(features_CondomnioIICityPetrpolis_293);
var lyr_CondomnioIICityPetrpolis_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_293, 
                style: style_CondomnioIICityPetrpolis_293,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_293_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_294 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_294 = format_CondomnioIICityPetrpolis_294.readFeatures(json_CondomnioIICityPetrpolis_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_294.addFeatures(features_CondomnioIICityPetrpolis_294);
var lyr_CondomnioIICityPetrpolis_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_294, 
                style: style_CondomnioIICityPetrpolis_294,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_294.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_295 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_295 = format_CondomnioICityPetrpolis_295.readFeatures(json_CondomnioICityPetrpolis_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_295.addFeatures(features_CondomnioICityPetrpolis_295);
var lyr_CondomnioICityPetrpolis_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_295, 
                style: style_CondomnioICityPetrpolis_295,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_295_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_296 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_296 = format_CondomnioICityPetrpolis_296.readFeatures(json_CondomnioICityPetrpolis_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_296.addFeatures(features_CondomnioICityPetrpolis_296);
var lyr_CondomnioICityPetrpolis_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_296, 
                style: style_CondomnioICityPetrpolis_296,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_296.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_297 = new ol.format.GeoJSON();
var features_Colorado_297 = format_Colorado_297.readFeatures(json_Colorado_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_297.addFeatures(features_Colorado_297);
var lyr_Colorado_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_297, 
                style: style_Colorado_297,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_297_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_297_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_297_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_297_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_297_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_297_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_297_6.png" /> PASSEIO<br />' });
var format_Colorado_298 = new ol.format.GeoJSON();
var features_Colorado_298 = format_Colorado_298.readFeatures(json_Colorado_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Colorado_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_298.addFeatures(features_Colorado_298);
var lyr_Colorado_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_298, 
                style: style_Colorado_298,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_298.png" /> Colorado'
            });
var format_CidadeJardim_299 = new ol.format.GeoJSON();
var features_CidadeJardim_299 = format_CidadeJardim_299.readFeatures(json_CidadeJardim_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_299.addFeatures(features_CidadeJardim_299);
var lyr_CidadeJardim_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_299, 
                style: style_CidadeJardim_299,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_299_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_299_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_299_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_299_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_299_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_299_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_299_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_299_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_300 = new ol.format.GeoJSON();
var features_CidadeJardim_300 = format_CidadeJardim_300.readFeatures(json_CidadeJardim_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CidadeJardim_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_300.addFeatures(features_CidadeJardim_300);
var lyr_CidadeJardim_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_300, 
                style: style_CidadeJardim_300,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_300.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_301 = new ol.format.GeoJSON();
var features_ChacaraOlaria_301 = format_ChacaraOlaria_301.readFeatures(json_ChacaraOlaria_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_301.addFeatures(features_ChacaraOlaria_301);
var lyr_ChacaraOlaria_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_301, 
                style: style_ChacaraOlaria_301,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_301.png" /> Chacara Olaria'
            });
var format_ChacaraOlaria_302 = new ol.format.GeoJSON();
var features_ChacaraOlaria_302 = format_ChacaraOlaria_302.readFeatures(json_ChacaraOlaria_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraOlaria_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_302.addFeatures(features_ChacaraOlaria_302);
var lyr_ChacaraOlaria_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_302, 
                style: style_ChacaraOlaria_302,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_302.png" /> Chacara Olaria'
            });
var format_ChacaraBelaVista_303 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_303 = format_ChacaraBelaVista_303.readFeatures(json_ChacaraBelaVista_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_303.addFeatures(features_ChacaraBelaVista_303);
var lyr_ChacaraBelaVista_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_303, 
                style: style_ChacaraBelaVista_303,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_303_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_303_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_303_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_303_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_303_4.png" /> RUAS<br />' });
var format_ChacaraBelaVista_304 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_304 = format_ChacaraBelaVista_304.readFeatures(json_ChacaraBelaVista_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChacaraBelaVista_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_304.addFeatures(features_ChacaraBelaVista_304);
var lyr_ChacaraBelaVista_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_304, 
                style: style_ChacaraBelaVista_304,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
                title: '<img src="styles/legend/ChacaraBelaVista_304.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_305 = new ol.format.GeoJSON();
var features_BordadaMata_305 = format_BordadaMata_305.readFeatures(json_BordadaMata_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_305.addFeatures(features_BordadaMata_305);
var lyr_BordadaMata_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_305, 
                style: style_BordadaMata_305,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_305_0.png" /> APP<br />\
    <img src="styles/legend/BordadaMata_305_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_305_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_305_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_305_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/BordadaMata_305_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/BordadaMata_305_6.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_305_7.png" /> RUAS<br />\
    <img src="styles/legend/BordadaMata_305_8.png" /> SERVIDAO<br />' });
var format_BordadaMata_306 = new ol.format.GeoJSON();
var features_BordadaMata_306 = format_BordadaMata_306.readFeatures(json_BordadaMata_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BordadaMata_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_306.addFeatures(features_BordadaMata_306);
var lyr_BordadaMata_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_306, 
                style: style_BordadaMata_306,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_306.png" /> Borda da Mata'
            });
var format_Arteris_307 = new ol.format.GeoJSON();
var features_Arteris_307 = format_Arteris_307.readFeatures(json_Arteris_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_307.addFeatures(features_Arteris_307);
var lyr_Arteris_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_307, 
                style: style_Arteris_307,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_307_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_307_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_307_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_307_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_307_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_307_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_307_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_307_7.png" /> AREA DESAPROPRIADA<br />' });
var format_Arteris_308 = new ol.format.GeoJSON();
var features_Arteris_308 = format_Arteris_308.readFeatures(json_Arteris_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arteris_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_308.addFeatures(features_Arteris_308);
var lyr_Arteris_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_308, 
                style: style_Arteris_308,
                popuplayertitle: 'Arteris',
                interactive: true,
                title: '<img src="styles/legend/Arteris_308.png" /> Arteris'
            });
var format_ArterisFaixadeDomnioFrancaSP_3342_309 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3342_309 = format_ArterisFaixadeDomnioFrancaSP_3342_309.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3342_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3342_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3342_309.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3342_309);
var lyr_ArterisFaixadeDomnioFrancaSP_3342_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3342_309, 
                style: style_ArterisFaixadeDomnioFrancaSP_3342_309,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_334 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3342_309.png" /> Arteris Faixa de Domínio Franca — SP_334 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSP_3452_310 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3452_310 = format_ArterisFaixadeDomnioFrancaSP_3452_310.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3452_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3452_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3452_310.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3452_310);
var lyr_ArterisFaixadeDomnioFrancaSP_3452_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3452_310, 
                style: style_ArterisFaixadeDomnioFrancaSP_3452_310,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_345 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3452_310.png" /> Arteris Faixa de Domínio Franca — SP_345 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSPA_397334_311 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSPA_397334_311 = format_ArterisFaixadeDomnioFrancaSPA_397334_311.readFeatures(json_ArterisFaixadeDomnioFrancaSPA_397334_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_311.addFeatures(features_ArterisFaixadeDomnioFrancaSPA_397334_311);
var lyr_ArterisFaixadeDomnioFrancaSPA_397334_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_311, 
                style: style_ArterisFaixadeDomnioFrancaSPA_397334_311,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSPA_397334_311.png" /> Arteris Faixa de Domínio Franca — SPA_397/334'
            });
var format_Arizona_312 = new ol.format.GeoJSON();
var features_Arizona_312 = format_Arizona_312.readFeatures(json_Arizona_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_312.addFeatures(features_Arizona_312);
var lyr_Arizona_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_312, 
                style: style_Arizona_312,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_312_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_312_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_312_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_312_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_312_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_312_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_312_6.png" /> VIELA<br />' });
var format_Arizona_313 = new ol.format.GeoJSON();
var features_Arizona_313 = format_Arizona_313.readFeatures(json_Arizona_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Arizona_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_313.addFeatures(features_Arizona_313);
var lyr_Arizona_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_313, 
                style: style_Arizona_313,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_313.png" /> Arizona'
            });
var format_AbuDhabiParadiseResortResidence_314 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_314 = format_AbuDhabiParadiseResortResidence_314.readFeatures(json_AbuDhabiParadiseResortResidence_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_314.addFeatures(features_AbuDhabiParadiseResortResidence_314);
var lyr_AbuDhabiParadiseResortResidence_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_314, 
                style: style_AbuDhabiParadiseResortResidence_314,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_3.png" /> LOTES<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_4.png" /> PASSEIO<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_5.png" /> RUAS<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_314_6.png" /> VIELA<br />' });
var format_AbuDhabiParadiseResortResidence_315 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_315 = format_AbuDhabiParadiseResortResidence_315.readFeatures(json_AbuDhabiParadiseResortResidence_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AbuDhabiParadiseResortResidence_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_315.addFeatures(features_AbuDhabiParadiseResortResidence_315);
var lyr_AbuDhabiParadiseResortResidence_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_315, 
                style: style_AbuDhabiParadiseResortResidence_315,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_315.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado27unid_316 = new ol.format.GeoJSON();
var features_EtapaAprovado27unid_316 = format_EtapaAprovado27unid_316.readFeatures(json_EtapaAprovado27unid_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaAprovado27unid_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado27unid_316.addFeatures(features_EtapaAprovado27unid_316);
var lyr_EtapaAprovado27unid_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado27unid_316, 
                style: style_EtapaAprovado27unid_316,
                popuplayertitle: 'Etapa: Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado27unid_316.png" /> Etapa: Aprovado (27 unid.)'
            });
var format_EtapaDiretriz22unid_317 = new ol.format.GeoJSON();
var features_EtapaDiretriz22unid_317 = format_EtapaDiretriz22unid_317.readFeatures(json_EtapaDiretriz22unid_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDiretriz22unid_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz22unid_317.addFeatures(features_EtapaDiretriz22unid_317);
var lyr_EtapaDiretriz22unid_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz22unid_317, 
                style: style_EtapaDiretriz22unid_317,
                popuplayertitle: 'Etapa: Diretriz (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz22unid_317.png" /> Etapa: Diretriz (22 unid.)'
            });
var format_EtapaDefinitiva10unid_318 = new ol.format.GeoJSON();
var features_EtapaDefinitiva10unid_318 = format_EtapaDefinitiva10unid_318.readFeatures(json_EtapaDefinitiva10unid_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaDefinitiva10unid_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva10unid_318.addFeatures(features_EtapaDefinitiva10unid_318);
var lyr_EtapaDefinitiva10unid_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva10unid_318, 
                style: style_EtapaDefinitiva10unid_318,
                popuplayertitle: 'Etapa: Definitiva 10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva10unid_318.png" /> Etapa: Definitiva 10 unid.)'
            });
var format_EtapaPrvia24unid_319 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_319 = format_EtapaPrvia24unid_319.readFeatures(json_EtapaPrvia24unid_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EtapaPrvia24unid_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_319.addFeatures(features_EtapaPrvia24unid_319);
var lyr_EtapaPrvia24unid_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_319, 
                style: style_EtapaPrvia24unid_319,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_319.png" /> Etapa: Prévia (24 unid.)'
            });
var format_LoteamentosClandestinos69unid_320 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_320 = format_LoteamentosClandestinos69unid_320.readFeatures(json_LoteamentosClandestinos69unid_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos69unid_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_320.addFeatures(features_LoteamentosClandestinos69unid_320);
var lyr_LoteamentosClandestinos69unid_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_320, 
                style: style_LoteamentosClandestinos69unid_320,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_320.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_LoteamentosClandestinos69unid_321 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_321 = format_LoteamentosClandestinos69unid_321.readFeatures(json_LoteamentosClandestinos69unid_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos69unid_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_321.addFeatures(features_LoteamentosClandestinos69unid_321);
var lyr_LoteamentosClandestinos69unid_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_321, 
                style: style_LoteamentosClandestinos69unid_321,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_321.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_FazendaPalestina105unid_322 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_322 = format_FazendaPalestina105unid_322.readFeatures(json_FazendaPalestina105unid_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaPalestina105unid_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_322.addFeatures(features_FazendaPalestina105unid_322);
var lyr_FazendaPalestina105unid_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_322, 
                style: style_FazendaPalestina105unid_322,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_322.png" /> Fazenda Palestina (105 unid.)'
            });
var format_FazendaPalestina105unid_323 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_323 = format_FazendaPalestina105unid_323.readFeatures(json_FazendaPalestina105unid_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaPalestina105unid_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_323.addFeatures(features_FazendaPalestina105unid_323);
var lyr_FazendaPalestina105unid_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_323, 
                style: style_FazendaPalestina105unid_323,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_323.png" /> Fazenda Palestina (105 unid.)'
            });
var format_APP1745unid_324 = new ol.format.GeoJSON();
var features_APP1745unid_324 = format_APP1745unid_324.readFeatures(json_APP1745unid_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_324.addFeatures(features_APP1745unid_324);
var lyr_APP1745unid_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_324, 
                style: style_APP1745unid_324,
                popuplayertitle: 'APP (1.745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_324.png" /> APP (1.745 unid.)'
            });
var format_RiosDuplos84unid_325 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_325 = format_RiosDuplos84unid_325.readFeatures(json_RiosDuplos84unid_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_325.addFeatures(features_RiosDuplos84unid_325);
var lyr_RiosDuplos84unid_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_325, 
                style: style_RiosDuplos84unid_325,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_325.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_326 = new ol.format.GeoJSON();
var features_MassasDgua270unid_326 = format_MassasDgua270unid_326.readFeatures(json_MassasDgua270unid_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_326.addFeatures(features_MassasDgua270unid_326);
var lyr_MassasDgua270unid_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_326, 
                style: style_MassasDgua270unid_326,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_326.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_327 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_327 = format_RiosSimples1842unid_327.readFeatures(json_RiosSimples1842unid_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_327.addFeatures(features_RiosSimples1842unid_327);
var lyr_RiosSimples1842unid_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_327, 
                style: style_RiosSimples1842unid_327,
                popuplayertitle: 'Rios Simples (1.842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_327.png" /> Rios Simples (1.842 unid.)'
            });
var format_Nascentes821unid_328 = new ol.format.GeoJSON();
var features_Nascentes821unid_328 = format_Nascentes821unid_328.readFeatures(json_Nascentes821unid_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_328.addFeatures(features_Nascentes821unid_328);
var lyr_Nascentes821unid_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_328, 
                style: style_Nascentes821unid_328,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_328.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_329 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_329 = format_AntigoAterrodaFazendaMunicipal_329.readFeatures(json_AntigoAterrodaFazendaMunicipal_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_329.addFeatures(features_AntigoAterrodaFazendaMunicipal_329);
var lyr_AntigoAterrodaFazendaMunicipal_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_329, 
                style: style_AntigoAterrodaFazendaMunicipal_329,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_329.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330 = format_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330);
var lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330, 
                style: style_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Gás/Avatz (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.png" /> Antigo Aterro da Fazenda Municipal - PMs-Gás/Avatz (15 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331 = format_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331);
var lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331, 
                style: style_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Água/Avatz (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.png" /> Antigo Aterro da Fazenda Municipal - PMs-Água/Avatz (18 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332 = format_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332);
var lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332, 
                style: style_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Água/Geo-Analítica (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.png" /> Antigo Aterro da Fazenda Municipal - PMs-Água/Geo-Analítica (15 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_335 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_335 = format_AntigoAterrodasMaritacas_335.readFeatures(json_AntigoAterrodasMaritacas_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_335.addFeatures(features_AntigoAterrodasMaritacas_335);
var lyr_AntigoAterrodasMaritacas_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_335, 
                style: style_AntigoAterrodasMaritacas_335,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_335.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_337 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_337 = format_ParqueZumbidosPalmares_337.readFeatures(json_ParqueZumbidosPalmares_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_337.addFeatures(features_ParqueZumbidosPalmares_337);
var lyr_ParqueZumbidosPalmares_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_337, 
                style: style_ParqueZumbidosPalmares_337,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_337.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_reaN2_340 = new ol.format.GeoJSON();
var features_reaN2_340 = format_reaN2_340.readFeatures(json_reaN2_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN2_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN2_340.addFeatures(features_reaN2_340);
var lyr_reaN2_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN2_340, 
                style: style_reaN2_340,
                popuplayertitle: 'Área N2',
                interactive: true,
                title: '<img src="styles/legend/reaN2_340.png" /> Área N2'
            });
var format_reaN1_341 = new ol.format.GeoJSON();
var features_reaN1_341 = format_reaN1_341.readFeatures(json_reaN1_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN1_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN1_341.addFeatures(features_reaN1_341);
var lyr_reaN1_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN1_341, 
                style: style_reaN1_341,
                popuplayertitle: 'Área N1',
                interactive: true,
                title: '<img src="styles/legend/reaN1_341.png" /> Área N1'
            });
var format_reaN_342 = new ol.format.GeoJSON();
var features_reaN_342 = format_reaN_342.readFeatures(json_reaN_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_342.addFeatures(features_reaN_342);
var lyr_reaN_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_342, 
                style: style_reaN_342,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_342.png" /> Área N'
            });
var format_ConjuntoHabitacional_343 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_343 = format_ConjuntoHabitacional_343.readFeatures(json_ConjuntoHabitacional_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_343.addFeatures(features_ConjuntoHabitacional_343);
var lyr_ConjuntoHabitacional_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_343, 
                style: style_ConjuntoHabitacional_343,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_343.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_344 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_344 = format_AvdeacessoaoHortoeColgioAgrcola_344.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_344.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_344);
var lyr_AvdeacessoaoHortoeColgioAgrcola_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_344, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_344,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_344.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_345 = new ol.format.GeoJSON();
var features_reaK_345 = format_reaK_345.readFeatures(json_reaK_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_345.addFeatures(features_reaK_345);
var lyr_reaK_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_345, 
                style: style_reaK_345,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_345.png" /> Área K'
            });
var format_reaJ_346 = new ol.format.GeoJSON();
var features_reaJ_346 = format_reaJ_346.readFeatures(json_reaJ_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_346.addFeatures(features_reaJ_346);
var lyr_reaJ_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_346, 
                style: style_reaJ_346,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_346.png" /> Área J'
            });
var format_reaI_347 = new ol.format.GeoJSON();
var features_reaI_347 = format_reaI_347.readFeatures(json_reaI_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_347.addFeatures(features_reaI_347);
var lyr_reaI_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_347, 
                style: style_reaI_347,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_347.png" /> Área I'
            });
var format_reaH_348 = new ol.format.GeoJSON();
var features_reaH_348 = format_reaH_348.readFeatures(json_reaH_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_348.addFeatures(features_reaH_348);
var lyr_reaH_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_348, 
                style: style_reaH_348,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_348.png" /> Área H'
            });
var format_reaG_349 = new ol.format.GeoJSON();
var features_reaG_349 = format_reaG_349.readFeatures(json_reaG_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_349.addFeatures(features_reaG_349);
var lyr_reaG_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_349, 
                style: style_reaG_349,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_349.png" /> Área G'
            });
var format_reaF_350 = new ol.format.GeoJSON();
var features_reaF_350 = format_reaF_350.readFeatures(json_reaF_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_350.addFeatures(features_reaF_350);
var lyr_reaF_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_350, 
                style: style_reaF_350,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_350.png" /> Área F'
            });
var format_reaE_351 = new ol.format.GeoJSON();
var features_reaE_351 = format_reaE_351.readFeatures(json_reaE_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_351.addFeatures(features_reaE_351);
var lyr_reaE_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_351, 
                style: style_reaE_351,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_351.png" /> Área E'
            });
var format_reaD_352 = new ol.format.GeoJSON();
var features_reaD_352 = format_reaD_352.readFeatures(json_reaD_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_352.addFeatures(features_reaD_352);
var lyr_reaD_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_352, 
                style: style_reaD_352,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_352.png" /> Área D'
            });
var format_reaC_353 = new ol.format.GeoJSON();
var features_reaC_353 = format_reaC_353.readFeatures(json_reaC_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_353.addFeatures(features_reaC_353);
var lyr_reaC_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_353, 
                style: style_reaC_353,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_353.png" /> Área C'
            });
var format_reaB_354 = new ol.format.GeoJSON();
var features_reaB_354 = format_reaB_354.readFeatures(json_reaB_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_354.addFeatures(features_reaB_354);
var lyr_reaB_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_354, 
                style: style_reaB_354,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_354.png" /> Área B'
            });
var format_reaA_355 = new ol.format.GeoJSON();
var features_reaA_355 = format_reaA_355.readFeatures(json_reaA_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_355.addFeatures(features_reaA_355);
var lyr_reaA_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_355, 
                style: style_reaA_355,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_355.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_356 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_356 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_356);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_356, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_356,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_356.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_357 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_357 = format_reaaseraverbadaPartedareaG_357.readFeatures(json_reaaseraverbadaPartedareaG_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_357.addFeatures(features_reaaseraverbadaPartedareaG_357);
var lyr_reaaseraverbadaPartedareaG_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_357, 
                style: style_reaaseraverbadaPartedareaG_357,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_357.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_Proposto2unid_358 = new ol.format.GeoJSON();
var features_Proposto2unid_358 = format_Proposto2unid_358.readFeatures(json_Proposto2unid_358, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Proposto2unid_358 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposto2unid_358.addFeatures(features_Proposto2unid_358);
var lyr_Proposto2unid_358 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposto2unid_358, 
                style: style_Proposto2unid_358,
                popuplayertitle: 'Proposto (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Proposto2unid_358.png" /> Proposto (2 unid.)'
            });
var format_Emconstruo2unid_359 = new ol.format.GeoJSON();
var features_Emconstruo2unid_359 = format_Emconstruo2unid_359.readFeatures(json_Emconstruo2unid_359, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Emconstruo2unid_359 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emconstruo2unid_359.addFeatures(features_Emconstruo2unid_359);
var lyr_Emconstruo2unid_359 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emconstruo2unid_359, 
                style: style_Emconstruo2unid_359,
                popuplayertitle: 'Em construção (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Emconstruo2unid_359.png" /> Em construção (2 unid.)'
            });
var format_Emfuncionamento4unid_360 = new ol.format.GeoJSON();
var features_Emfuncionamento4unid_360 = format_Emfuncionamento4unid_360.readFeatures(json_Emfuncionamento4unid_360, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Emfuncionamento4unid_360 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emfuncionamento4unid_360.addFeatures(features_Emfuncionamento4unid_360);
var lyr_Emfuncionamento4unid_360 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emfuncionamento4unid_360, 
                style: style_Emfuncionamento4unid_360,
                popuplayertitle: 'Em funcionamento (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Emfuncionamento4unid_360.png" /> Em funcionamento (4 unid.)'
            });
var format_DrenagensExistentes_361 = new ol.format.GeoJSON();
var features_DrenagensExistentes_361 = format_DrenagensExistentes_361.readFeatures(json_DrenagensExistentes_361, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_361 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_361.addFeatures(features_DrenagensExistentes_361);
var lyr_DrenagensExistentes_361 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_361, 
                style: style_DrenagensExistentes_361,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_361_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_361_1.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_361_2.png" /> DISSIPADOR<br />' });
var format_DrenagensExistentes_362 = new ol.format.GeoJSON();
var features_DrenagensExistentes_362 = format_DrenagensExistentes_362.readFeatures(json_DrenagensExistentes_362, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DrenagensExistentes_362 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_362.addFeatures(features_DrenagensExistentes_362);
var lyr_DrenagensExistentes_362 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_362, 
                style: style_DrenagensExistentes_362,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_362_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_362_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_362_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_362_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_362_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_362_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_362_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_362_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_362_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_362_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_362_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_362_11.png" /> PV<br />' });
var format_Drenagens_363 = new ol.format.GeoJSON();
var features_Drenagens_363 = format_Drenagens_363.readFeatures(json_Drenagens_363, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Drenagens_363 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_363.addFeatures(features_Drenagens_363);
var lyr_Drenagens_363 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_363, 
                style: style_Drenagens_363,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_363_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_363_1.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_363_2.png" /> DISSIPADOR<br />' });
var format_Drenagens_364 = new ol.format.GeoJSON();
var features_Drenagens_364 = format_Drenagens_364.readFeatures(json_Drenagens_364, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Drenagens_364 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_364.addFeatures(features_Drenagens_364);
var lyr_Drenagens_364 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_364, 
                style: style_Drenagens_364,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_364_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_364_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/Drenagens_364_2.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_364_3.png" /> CANALETA<br />\
    <img src="styles/legend/Drenagens_364_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/Drenagens_364_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/Drenagens_364_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/Drenagens_364_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/Drenagens_364_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/Drenagens_364_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/Drenagens_364_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/Drenagens_364_11.png" /> PV<br />' });
var format_Voorocas27unid_365 = new ol.format.GeoJSON();
var features_Voorocas27unid_365 = format_Voorocas27unid_365.readFeatures(json_Voorocas27unid_365, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas27unid_365 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas27unid_365.addFeatures(features_Voorocas27unid_365);
var lyr_Voorocas27unid_365 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas27unid_365, 
                style: style_Voorocas27unid_365,
                popuplayertitle: 'Voçorocas (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas27unid_365.png" /> Voçorocas (27 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais12unid_366 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais12unid_366 = format_LocaisdeDifcilAcessoereasRurais12unid_366.readFeatures(json_LocaisdeDifcilAcessoereasRurais12unid_366, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisdeDifcilAcessoereasRurais12unid_366 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais12unid_366.addFeatures(features_LocaisdeDifcilAcessoereasRurais12unid_366);
var lyr_LocaisdeDifcilAcessoereasRurais12unid_366 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais12unid_366, 
                style: style_LocaisdeDifcilAcessoereasRurais12unid_366,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais12unid_366.png" /> Locais de Difícil Acesso e Áreas Rurais (12 unid.)'
            });
var format_Contineres286unid_367 = new ol.format.GeoJSON();
var features_Contineres286unid_367 = format_Contineres286unid_367.readFeatures(json_Contineres286unid_367, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_367 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_367.addFeatures(features_Contineres286unid_367);
var lyr_Contineres286unid_367 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_367, 
                style: style_Contineres286unid_367,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_367.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_368 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_368 = format_rvoreImuneaoCorte9unid_368.readFeatures(json_rvoreImuneaoCorte9unid_368, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_368 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_368.addFeatures(features_rvoreImuneaoCorte9unid_368);
var lyr_rvoreImuneaoCorte9unid_368 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_368, 
                style: style_rvoreImuneaoCorte9unid_368,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_368.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_AcademiasaoArLivre84unid_369 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_369 = format_AcademiasaoArLivre84unid_369.readFeatures(json_AcademiasaoArLivre84unid_369, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_369 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_369.addFeatures(features_AcademiasaoArLivre84unid_369);
var lyr_AcademiasaoArLivre84unid_369 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_369, 
                style: style_AcademiasaoArLivre84unid_369,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_369.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Gesso1unid_370 = new ol.format.GeoJSON();
var features_Gesso1unid_370 = format_Gesso1unid_370.readFeatures(json_Gesso1unid_370, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_370 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_370.addFeatures(features_Gesso1unid_370);
var lyr_Gesso1unid_370 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_370, 
                style: style_Gesso1unid_370,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_370.png" /> Gesso (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_371 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_371 = format_ResduosdeConstruoCivil7unid_371.readFeatures(json_ResduosdeConstruoCivil7unid_371, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_371 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_371.addFeatures(features_ResduosdeConstruoCivil7unid_371);
var lyr_ResduosdeConstruoCivil7unid_371 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_371, 
                style: style_ResduosdeConstruoCivil7unid_371,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_371.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_372 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_372 = format_ResduosVerdes1unid_372.readFeatures(json_ResduosVerdes1unid_372, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_372 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_372.addFeatures(features_ResduosVerdes1unid_372);
var lyr_ResduosVerdes1unid_372 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_372, 
                style: style_ResduosVerdes1unid_372,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_372.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_373 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_373 = format_ChapasdeRaioX1unid_373.readFeatures(json_ChapasdeRaioX1unid_373, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_373 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_373.addFeatures(features_ChapasdeRaioX1unid_373);
var lyr_ChapasdeRaioX1unid_373 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_373, 
                style: style_ChapasdeRaioX1unid_373,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_373.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_374 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_374 = format_Embalagensvaziasdeagrotxicos1unid_374.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_374, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_374 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_374.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_374);
var lyr_Embalagensvaziasdeagrotxicos1unid_374 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_374, 
                style: style_Embalagensvaziasdeagrotxicos1unid_374,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_374.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_375 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_375 = format_leodecozinhausado2unid_375.readFeatures(json_leodecozinhausado2unid_375, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_375 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_375.addFeatures(features_leodecozinhausado2unid_375);
var lyr_leodecozinhausado2unid_375 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_375, 
                style: style_leodecozinhausado2unid_375,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_375.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_376 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_376 = format_leolubrificanteusado1unid_376.readFeatures(json_leolubrificanteusado1unid_376, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_376 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_376.addFeatures(features_leolubrificanteusado1unid_376);
var lyr_leolubrificanteusado1unid_376 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_376, 
                style: style_leolubrificanteusado1unid_376,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_376.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_377 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_377 = format_Latasdetintametlicasvazias2unid_377.readFeatures(json_Latasdetintametlicasvazias2unid_377, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_377 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_377.addFeatures(features_Latasdetintametlicasvazias2unid_377);
var lyr_Latasdetintametlicasvazias2unid_377 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_377, 
                style: style_Latasdetintametlicasvazias2unid_377,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_377.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_378 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_378 = format_ResduosPerigosos1unid_378.readFeatures(json_ResduosPerigosos1unid_378, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_378 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_378.addFeatures(features_ResduosPerigosos1unid_378);
var lyr_ResduosPerigosos1unid_378 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_378, 
                style: style_ResduosPerigosos1unid_378,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_378.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_379 = new ol.format.GeoJSON();
var features_Madeiras1unid_379 = format_Madeiras1unid_379.readFeatures(json_Madeiras1unid_379, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_379 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_379.addFeatures(features_Madeiras1unid_379);
var lyr_Madeiras1unid_379 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_379, 
                style: style_Madeiras1unid_379,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_379.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_380 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_380 = format_ResduosdeServiosdeSade21unid_380.readFeatures(json_ResduosdeServiosdeSade21unid_380, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_380 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_380.addFeatures(features_ResduosdeServiosdeSade21unid_380);
var lyr_ResduosdeServiosdeSade21unid_380 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_380, 
                style: style_ResduosdeServiosdeSade21unid_380,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_380.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias17unid_381 = new ol.format.GeoJSON();
var features_PilhaseBaterias17unid_381 = format_PilhaseBaterias17unid_381.readFeatures(json_PilhaseBaterias17unid_381, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias17unid_381 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias17unid_381.addFeatures(features_PilhaseBaterias17unid_381);
var lyr_PilhaseBaterias17unid_381 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias17unid_381, 
                style: style_PilhaseBaterias17unid_381,
                popuplayertitle: 'Pilhas e Baterias (17 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias17unid_381.png" /> Pilhas e Baterias (17 unid.)'
            });
var format_Pneus1unid_382 = new ol.format.GeoJSON();
var features_Pneus1unid_382 = format_Pneus1unid_382.readFeatures(json_Pneus1unid_382, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_382 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_382.addFeatures(features_Pneus1unid_382);
var lyr_Pneus1unid_382 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_382, 
                style: style_Pneus1unid_382,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_382.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_383 = new ol.format.GeoJSON();
var features_Lmpadas4unid_383 = format_Lmpadas4unid_383.readFeatures(json_Lmpadas4unid_383, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_383 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_383.addFeatures(features_Lmpadas4unid_383);
var lyr_Lmpadas4unid_383 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_383, 
                style: style_Lmpadas4unid_383,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_383.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_384 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_384 = format_ResduosdeCouro1unid_384.readFeatures(json_ResduosdeCouro1unid_384, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_384 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_384.addFeatures(features_ResduosdeCouro1unid_384);
var lyr_ResduosdeCouro1unid_384 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_384, 
                style: style_ResduosdeCouro1unid_384,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_384.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_385 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_385 = format_ResduosEletrnicos2unid_385.readFeatures(json_ResduosEletrnicos2unid_385, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_385 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_385.addFeatures(features_ResduosEletrnicos2unid_385);
var lyr_ResduosEletrnicos2unid_385 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_385, 
                style: style_ResduosEletrnicos2unid_385,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_385.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_386 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_386 = format_ResduosReciclveis15unid_386.readFeatures(json_ResduosReciclveis15unid_386, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_386 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_386.addFeatures(features_ResduosReciclveis15unid_386);
var lyr_ResduosReciclveis15unid_386 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_386, 
                style: style_ResduosReciclveis15unid_386,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_386.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_387 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_387 = format_ResduosInservveis4unid_387.readFeatures(json_ResduosInservveis4unid_387, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_387 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_387.addFeatures(features_ResduosInservveis4unid_387);
var lyr_ResduosInservveis4unid_387 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_387, 
                style: style_ResduosInservveis4unid_387,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_387.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_388 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_388 = format_PBZPAEdifcioPrimeHELIPONTO_388.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_388, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_388 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_388.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_388);
var lyr_PBZPAEdifcioPrimeHELIPONTO_388 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_388, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_388,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_388.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_389 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_389 = format_PBZPAEdifcioPrimeHELIPONTO_389.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_389, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_389 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_389.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_389);
var lyr_PBZPAEdifcioPrimeHELIPONTO_389 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_389, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_389,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_389_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_389_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_390 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_390 = format_PBZPAHospitalHELIPONTO_390.readFeatures(json_PBZPAHospitalHELIPONTO_390, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_390 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_390.addFeatures(features_PBZPAHospitalHELIPONTO_390);
var lyr_PBZPAHospitalHELIPONTO_390 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_390, 
                style: style_PBZPAHospitalHELIPONTO_390,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_390_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_391_11.png" /> Transição<br />' });
var format_ClasseVB_392 = new ol.format.GeoJSON();
var features_ClasseVB_392 = format_ClasseVB_392.readFeatures(json_ClasseVB_392, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVB_392 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVB_392.addFeatures(features_ClasseVB_392);
var lyr_ClasseVB_392 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVB_392, 
                style: style_ClasseVB_392,
                popuplayertitle: 'Classe VB',
                interactive: true,
                title: '<img src="styles/legend/ClasseVB_392.png" /> Classe VB'
            });
var format_ClasseVA_393 = new ol.format.GeoJSON();
var features_ClasseVA_393 = format_ClasseVA_393.readFeatures(json_ClasseVA_393, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseVA_393 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVA_393.addFeatures(features_ClasseVA_393);
var lyr_ClasseVA_393 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVA_393, 
                style: style_ClasseVA_393,
                popuplayertitle: 'Classe VA',
                interactive: true,
                title: '<img src="styles/legend/ClasseVA_393.png" /> Classe VA'
            });
var format_ClasseIVC_394 = new ol.format.GeoJSON();
var features_ClasseIVC_394 = format_ClasseIVC_394.readFeatures(json_ClasseIVC_394, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVC_394 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVC_394.addFeatures(features_ClasseIVC_394);
var lyr_ClasseIVC_394 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVC_394, 
                style: style_ClasseIVC_394,
                popuplayertitle: 'Classe IVC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVC_394.png" /> Classe IVC'
            });
var format_ClasseIVB_395 = new ol.format.GeoJSON();
var features_ClasseIVB_395 = format_ClasseIVB_395.readFeatures(json_ClasseIVB_395, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVB_395 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVB_395.addFeatures(features_ClasseIVB_395);
var lyr_ClasseIVB_395 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVB_395, 
                style: style_ClasseIVB_395,
                popuplayertitle: 'Classe IVB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVB_395.png" /> Classe IVB'
            });
var format_ClasseIVA_396 = new ol.format.GeoJSON();
var features_ClasseIVA_396 = format_ClasseIVA_396.readFeatures(json_ClasseIVA_396, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIVA_396 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVA_396.addFeatures(features_ClasseIVA_396);
var lyr_ClasseIVA_396 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVA_396, 
                style: style_ClasseIVA_396,
                popuplayertitle: 'Classe IVA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVA_396.png" /> Classe IVA'
            });
var format_ClasseIIIC_397 = new ol.format.GeoJSON();
var features_ClasseIIIC_397 = format_ClasseIIIC_397.readFeatures(json_ClasseIIIC_397, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIC_397 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIC_397.addFeatures(features_ClasseIIIC_397);
var lyr_ClasseIIIC_397 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIC_397, 
                style: style_ClasseIIIC_397,
                popuplayertitle: 'Classe IIIC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIC_397.png" /> Classe IIIC'
            });
var format_ClasseIIIB_398 = new ol.format.GeoJSON();
var features_ClasseIIIB_398 = format_ClasseIIIB_398.readFeatures(json_ClasseIIIB_398, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIB_398 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIB_398.addFeatures(features_ClasseIIIB_398);
var lyr_ClasseIIIB_398 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIB_398, 
                style: style_ClasseIIIB_398,
                popuplayertitle: 'Classe IIIB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIB_398.png" /> Classe IIIB'
            });
var format_ClasseIIIA_399 = new ol.format.GeoJSON();
var features_ClasseIIIA_399 = format_ClasseIIIA_399.readFeatures(json_ClasseIIIA_399, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseIIIA_399 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIA_399.addFeatures(features_ClasseIIIA_399);
var lyr_ClasseIIIA_399 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIA_399, 
                style: style_ClasseIIIA_399,
                popuplayertitle: 'Classe IIIA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIA_399.png" /> Classe IIIA'
            });
var format_ClasseII_400 = new ol.format.GeoJSON();
var features_ClasseII_400 = format_ClasseII_400.readFeatures(json_ClasseII_400, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseII_400 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseII_400.addFeatures(features_ClasseII_400);
var lyr_ClasseII_400 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseII_400, 
                style: style_ClasseII_400,
                popuplayertitle: 'Classe II',
                interactive: true,
                title: '<img src="styles/legend/ClasseII_400.png" /> Classe II'
            });
var format_ClasseI_401 = new ol.format.GeoJSON();
var features_ClasseI_401 = format_ClasseI_401.readFeatures(json_ClasseI_401, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ClasseI_401 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseI_401.addFeatures(features_ClasseI_401);
var lyr_ClasseI_401 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseI_401, 
                style: style_ClasseI_401,
                popuplayertitle: 'Classe I',
                interactive: true,
                title: '<img src="styles/legend/ClasseI_401.png" /> Classe I'
            });
var format_RegioCentroLeste42unid675453694m_402 = new ol.format.GeoJSON();
var features_RegioCentroLeste42unid675453694m_402 = format_RegioCentroLeste42unid675453694m_402.readFeatures(json_RegioCentroLeste42unid675453694m_402, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioCentroLeste42unid675453694m_402 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioCentroLeste42unid675453694m_402.addFeatures(features_RegioCentroLeste42unid675453694m_402);
var lyr_RegioCentroLeste42unid675453694m_402 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioCentroLeste42unid675453694m_402, 
                style: style_RegioCentroLeste42unid675453694m_402,
                popuplayertitle: 'Região Centro Leste (42 unid. / 6.754.536,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioCentroLeste42unid675453694m_402.png" /> Região Centro Leste (42 unid. / 6.754.536,94 m²)'
            });
var format_RegioLesteNordeste50unid1233454938m_403 = new ol.format.GeoJSON();
var features_RegioLesteNordeste50unid1233454938m_403 = format_RegioLesteNordeste50unid1233454938m_403.readFeatures(json_RegioLesteNordeste50unid1233454938m_403, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioLesteNordeste50unid1233454938m_403 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioLesteNordeste50unid1233454938m_403.addFeatures(features_RegioLesteNordeste50unid1233454938m_403);
var lyr_RegioLesteNordeste50unid1233454938m_403 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioLesteNordeste50unid1233454938m_403, 
                style: style_RegioLesteNordeste50unid1233454938m_403,
                popuplayertitle: 'Região Leste Nordeste (50 unid. / 12.334.549,38 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioLesteNordeste50unid1233454938m_403.png" /> Região Leste Nordeste (50 unid. / 12.334.549,38 m²)'
            });
var format_RegioNorteI45unid1043752016m_404 = new ol.format.GeoJSON();
var features_RegioNorteI45unid1043752016m_404 = format_RegioNorteI45unid1043752016m_404.readFeatures(json_RegioNorteI45unid1043752016m_404, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteI45unid1043752016m_404 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteI45unid1043752016m_404.addFeatures(features_RegioNorteI45unid1043752016m_404);
var lyr_RegioNorteI45unid1043752016m_404 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteI45unid1043752016m_404, 
                style: style_RegioNorteI45unid1043752016m_404,
                popuplayertitle: 'Região Norte I (45 unid. / 10.437.520,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteI45unid1043752016m_404.png" /> Região Norte I (45 unid. / 10.437.520,16 m²)'
            });
var format_RegioNorteII36unid859331837m_405 = new ol.format.GeoJSON();
var features_RegioNorteII36unid859331837m_405 = format_RegioNorteII36unid859331837m_405.readFeatures(json_RegioNorteII36unid859331837m_405, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteII36unid859331837m_405 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteII36unid859331837m_405.addFeatures(features_RegioNorteII36unid859331837m_405);
var lyr_RegioNorteII36unid859331837m_405 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteII36unid859331837m_405, 
                style: style_RegioNorteII36unid859331837m_405,
                popuplayertitle: 'Região Norte II (36 unid. / 8.593.318,37 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteII36unid859331837m_405.png" /> Região Norte II (36 unid. / 8.593.318,37 m²)'
            });
var format_RegioOesteI65unid1245065890m_406 = new ol.format.GeoJSON();
var features_RegioOesteI65unid1245065890m_406 = format_RegioOesteI65unid1245065890m_406.readFeatures(json_RegioOesteI65unid1245065890m_406, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteI65unid1245065890m_406 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteI65unid1245065890m_406.addFeatures(features_RegioOesteI65unid1245065890m_406);
var lyr_RegioOesteI65unid1245065890m_406 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteI65unid1245065890m_406, 
                style: style_RegioOesteI65unid1245065890m_406,
                popuplayertitle: 'Região Oeste I (65 unid. / 12.450.658,90 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteI65unid1245065890m_406.png" /> Região Oeste I (65 unid. / 12.450.658,90 m²)'
            });
var format_RegioOesteII43unid599615871m_407 = new ol.format.GeoJSON();
var features_RegioOesteII43unid599615871m_407 = format_RegioOesteII43unid599615871m_407.readFeatures(json_RegioOesteII43unid599615871m_407, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteII43unid599615871m_407 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteII43unid599615871m_407.addFeatures(features_RegioOesteII43unid599615871m_407);
var lyr_RegioOesteII43unid599615871m_407 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteII43unid599615871m_407, 
                style: style_RegioOesteII43unid599615871m_407,
                popuplayertitle: 'Região Oeste II (43 unid. / 5.996.158,71 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteII43unid599615871m_407.png" /> Região Oeste II (43 unid. / 5.996.158,71 m²)'
            });
var format_RegioSudeste38unid579321135m_408 = new ol.format.GeoJSON();
var features_RegioSudeste38unid579321135m_408 = format_RegioSudeste38unid579321135m_408.readFeatures(json_RegioSudeste38unid579321135m_408, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudeste38unid579321135m_408 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudeste38unid579321135m_408.addFeatures(features_RegioSudeste38unid579321135m_408);
var lyr_RegioSudeste38unid579321135m_408 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudeste38unid579321135m_408, 
                style: style_RegioSudeste38unid579321135m_408,
                popuplayertitle: 'Região Sudeste (38 unid. / 5.793.211,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudeste38unid579321135m_408.png" /> Região Sudeste (38 unid. / 5.793.211,35 m²)'
            });
var format_RegioSudesteSul44unid830633497m_409 = new ol.format.GeoJSON();
var features_RegioSudesteSul44unid830633497m_409 = format_RegioSudesteSul44unid830633497m_409.readFeatures(json_RegioSudesteSul44unid830633497m_409, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudesteSul44unid830633497m_409 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudesteSul44unid830633497m_409.addFeatures(features_RegioSudesteSul44unid830633497m_409);
var lyr_RegioSudesteSul44unid830633497m_409 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudesteSul44unid830633497m_409, 
                style: style_RegioSudesteSul44unid830633497m_409,
                popuplayertitle: 'Região Sudeste Sul (44 unid. / 8.306.334,97 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudesteSul44unid830633497m_409.png" /> Região Sudeste Sul (44 unid. / 8.306.334,97 m²)'
            });
var format_RegioSul20unid639964086m_410 = new ol.format.GeoJSON();
var features_RegioSul20unid639964086m_410 = format_RegioSul20unid639964086m_410.readFeatures(json_RegioSul20unid639964086m_410, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSul20unid639964086m_410 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSul20unid639964086m_410.addFeatures(features_RegioSul20unid639964086m_410);
var lyr_RegioSul20unid639964086m_410 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSul20unid639964086m_410, 
                style: style_RegioSul20unid639964086m_410,
                popuplayertitle: 'Região Sul (20 unid. / 6.399.640,86 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSul20unid639964086m_410.png" /> Região Sul (20 unid. / 6.399.640,86 m²)'
            });
var format_APP169unid239527816m_411 = new ol.format.GeoJSON();
var features_APP169unid239527816m_411 = format_APP169unid239527816m_411.readFeatures(json_APP169unid239527816m_411, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid239527816m_411 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid239527816m_411.addFeatures(features_APP169unid239527816m_411);
var lyr_APP169unid239527816m_411 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid239527816m_411, 
                style: style_APP169unid239527816m_411,
                popuplayertitle: 'APP (169 unid. / 2.395.278,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid239527816m_411.png" /> APP (169 unid. / 2.395.278,16 m²)'
            });
var format_reaInstitucional371unid208395759m_412 = new ol.format.GeoJSON();
var features_reaInstitucional371unid208395759m_412 = format_reaInstitucional371unid208395759m_412.readFeatures(json_reaInstitucional371unid208395759m_412, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional371unid208395759m_412 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional371unid208395759m_412.addFeatures(features_reaInstitucional371unid208395759m_412);
var lyr_reaInstitucional371unid208395759m_412 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional371unid208395759m_412, 
                style: style_reaInstitucional371unid208395759m_412,
                popuplayertitle: 'Área Institucional  (371 unid. / 2.083.957,59 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional371unid208395759m_412.png" /> Área Institucional  (371 unid. / 2.083.957,59 m²)'
            });
var format_reaPatrimonial69unid121924073m_413 = new ol.format.GeoJSON();
var features_reaPatrimonial69unid121924073m_413 = format_reaPatrimonial69unid121924073m_413.readFeatures(json_reaPatrimonial69unid121924073m_413, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial69unid121924073m_413 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial69unid121924073m_413.addFeatures(features_reaPatrimonial69unid121924073m_413);
var lyr_reaPatrimonial69unid121924073m_413 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial69unid121924073m_413, 
                style: style_reaPatrimonial69unid121924073m_413,
                popuplayertitle: 'Área Patrimonial (69 unid. / 1.219.240,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial69unid121924073m_413.png" /> Área Patrimonial (69 unid. / 1.219.240,73 m²)'
            });
var format_reaVerde2115unid881290721m_414 = new ol.format.GeoJSON();
var features_reaVerde2115unid881290721m_414 = format_reaVerde2115unid881290721m_414.readFeatures(json_reaVerde2115unid881290721m_414, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2115unid881290721m_414 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2115unid881290721m_414.addFeatures(features_reaVerde2115unid881290721m_414);
var lyr_reaVerde2115unid881290721m_414 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2115unid881290721m_414, 
                style: style_reaVerde2115unid881290721m_414,
                popuplayertitle: 'Área Verde (2115 unid. / 8.812.907,21 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2115unid881290721m_414.png" /> Área Verde (2115 unid. / 8.812.907,21 m²)'
            });
var format_readeUsoEspecial279unid271349968m_415 = new ol.format.GeoJSON();
var features_readeUsoEspecial279unid271349968m_415 = format_readeUsoEspecial279unid271349968m_415.readFeatures(json_readeUsoEspecial279unid271349968m_415, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial279unid271349968m_415 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial279unid271349968m_415.addFeatures(features_readeUsoEspecial279unid271349968m_415);
var lyr_readeUsoEspecial279unid271349968m_415 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial279unid271349968m_415, 
                style: style_readeUsoEspecial279unid271349968m_415,
                popuplayertitle: 'Área de Uso Especial (279 unid. / 2.713.499,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial279unid271349968m_415.png" /> Área de Uso Especial (279 unid. / 2.713.499,68 m²)'
            });
var format_LoteamentoFechado146unid70632440m_416 = new ol.format.GeoJSON();
var features_LoteamentoFechado146unid70632440m_416 = format_LoteamentoFechado146unid70632440m_416.readFeatures(json_LoteamentoFechado146unid70632440m_416, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado146unid70632440m_416 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado146unid70632440m_416.addFeatures(features_LoteamentoFechado146unid70632440m_416);
var lyr_LoteamentoFechado146unid70632440m_416 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado146unid70632440m_416, 
                style: style_LoteamentoFechado146unid70632440m_416,
                popuplayertitle: 'Loteamento Fechado (146 unid. / 706.324,40 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado146unid70632440m_416.png" /> Loteamento Fechado (146 unid. / 706.324,40 m²)'
            });
var format_Lote252unid7530210m_417 = new ol.format.GeoJSON();
var features_Lote252unid7530210m_417 = format_Lote252unid7530210m_417.readFeatures(json_Lote252unid7530210m_417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid7530210m_417 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid7530210m_417.addFeatures(features_Lote252unid7530210m_417);
var lyr_Lote252unid7530210m_417 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid7530210m_417, 
                style: style_Lote252unid7530210m_417,
                popuplayertitle: 'Lote (252 unid. / 75.302,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid7530210m_417.png" /> Lote (252 unid. / 75.302,10 m²)'
            });
var format_Lote252unid_418 = new ol.format.GeoJSON();
var features_Lote252unid_418 = format_Lote252unid_418.readFeatures(json_Lote252unid_418, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote252unid_418 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote252unid_418.addFeatures(features_Lote252unid_418);
var lyr_Lote252unid_418 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote252unid_418, 
                style: style_Lote252unid_418,
                popuplayertitle: 'Lote (252 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote252unid_418.png" /> Lote (252 unid.)'
            });
var format_LoteEdificao20unid508062m_419 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_419 = format_LoteEdificao20unid508062m_419.readFeatures(json_LoteEdificao20unid508062m_419, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_419 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_419.addFeatures(features_LoteEdificao20unid508062m_419);
var lyr_LoteEdificao20unid508062m_419 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_419, 
                style: style_LoteEdificao20unid508062m_419,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_419.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_420 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_420 = format_LoteEdificao20unid_420.readFeatures(json_LoteEdificao20unid_420, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_420 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_420.addFeatures(features_LoteEdificao20unid_420);
var lyr_LoteEdificao20unid_420 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_420, 
                style: style_LoteEdificao20unid_420,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_420.png" /> Lote/Edificação (20 unid.)'
            });
var format_LeiloLEIN97542025Homologado4unid334770m_421 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid334770m_421 = format_LeiloLEIN97542025Homologado4unid334770m_421.readFeatures(json_LeiloLEIN97542025Homologado4unid334770m_421, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid334770m_421 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid334770m_421.addFeatures(features_LeiloLEIN97542025Homologado4unid334770m_421);
var lyr_LeiloLEIN97542025Homologado4unid334770m_421 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid334770m_421, 
                style: style_LeiloLEIN97542025Homologado4unid334770m_421,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid334770m_421.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_LeiloLEIN97542025Homologado4unid_422 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid_422 = format_LeiloLEIN97542025Homologado4unid_422.readFeatures(json_LeiloLEIN97542025Homologado4unid_422, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Homologado4unid_422 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid_422.addFeatures(features_LeiloLEIN97542025Homologado4unid_422);
var lyr_LeiloLEIN97542025Homologado4unid_422 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid_422, 
                style: style_LeiloLEIN97542025Homologado4unid_422,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid_422.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423 = format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid_424 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid_424 = format_LeiloLEIN97542025Proc35162004100002652520256922unid_424.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid_424, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_424 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_424.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid_424);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_424, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid_424,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid_424.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425 = format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid_426 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid_426 = format_LeiloLEIN97542025Proc351620041000007954202537196unid_426.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid_426, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_426 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_426.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid_426);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_426, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid_426,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid_426.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427 = format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid_428 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid_428 = format_LeiloLEIN97542025Proc35162004100002198620254518unid_428.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid_428, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_428 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_428.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid_428);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_428, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid_428,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid_428.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)'
            });
var format_LoteEMDEF10unid218783m_429 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_429 = format_LoteEMDEF10unid218783m_429.readFeatures(json_LoteEMDEF10unid218783m_429, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_429 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_429.addFeatures(features_LoteEMDEF10unid218783m_429);
var lyr_LoteEMDEF10unid218783m_429 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_429, 
                style: style_LoteEMDEF10unid218783m_429,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_429.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_430 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_430 = format_LoteEMDEF10unid_430.readFeatures(json_LoteEMDEF10unid_430, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_430 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_430.addFeatures(features_LoteEMDEF10unid_430);
var lyr_LoteEMDEF10unid_430 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_430, 
                style: style_LoteEMDEF10unid_430,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_430.png" /> Lote EMDEF (10 unid.)'
            });
var format_TRPRLCETESB2unid_431 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_431 = format_TRPRLCETESB2unid_431.readFeatures(json_TRPRLCETESB2unid_431, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_431 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_431.addFeatures(features_TRPRLCETESB2unid_431);
var lyr_TRPRLCETESB2unid_431 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_431, 
                style: style_TRPRLCETESB2unid_431,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_431.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_432 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_432 = format_TRPRLCETESB2unid_432.readFeatures(json_TRPRLCETESB2unid_432, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_432 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_432.addFeatures(features_TRPRLCETESB2unid_432);
var lyr_TRPRLCETESB2unid_432 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_432, 
                style: style_TRPRLCETESB2unid_432,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_432.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TCRAMunicipal14unid_433 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_433 = format_TCRAMunicipal14unid_433.readFeatures(json_TCRAMunicipal14unid_433, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_433 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_433.addFeatures(features_TCRAMunicipal14unid_433);
var lyr_TCRAMunicipal14unid_433 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_433, 
                style: style_TCRAMunicipal14unid_433,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_433.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_434 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_434 = format_TCRAMunicipal14unid_434.readFeatures(json_TCRAMunicipal14unid_434, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_434 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_434.addFeatures(features_TCRAMunicipal14unid_434);
var lyr_TCRAMunicipal14unid_434 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_434, 
                style: style_TCRAMunicipal14unid_434,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_434.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_435 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_435 = format_TCRACETESBPARCELAMENTO32unid_435.readFeatures(json_TCRACETESBPARCELAMENTO32unid_435, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_435 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_435.addFeatures(features_TCRACETESBPARCELAMENTO32unid_435);
var lyr_TCRACETESBPARCELAMENTO32unid_435 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_435, 
                style: style_TCRACETESBPARCELAMENTO32unid_435,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_435.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_436 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_436 = format_TCRACETESBPARCELAMENTO32unid_436.readFeatures(json_TCRACETESBPARCELAMENTO32unid_436, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_436 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_436.addFeatures(features_TCRACETESBPARCELAMENTO32unid_436);
var lyr_TCRACETESBPARCELAMENTO32unid_436 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_436, 
                style: style_TCRACETESBPARCELAMENTO32unid_436,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_436.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESB30unid_437 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_437 = format_TCRACETESB30unid_437.readFeatures(json_TCRACETESB30unid_437, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB30unid_437 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_437.addFeatures(features_TCRACETESB30unid_437);
var lyr_TCRACETESB30unid_437 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_437, 
                style: style_TCRACETESB30unid_437,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_437.png" /> TCRA CETESB (30 unid.)'
            });
var format_TCRACETESB30unid_438 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_438 = format_TCRACETESB30unid_438.readFeatures(json_TCRACETESB30unid_438, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB30unid_438 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_438.addFeatures(features_TCRACETESB30unid_438);
var lyr_TCRACETESB30unid_438 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_438, 
                style: style_TCRACETESB30unid_438,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_438.png" /> TCRA CETESB (30 unid.)'
            });
var format_TACMinistrioPblico9unid_439 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_439 = format_TACMinistrioPblico9unid_439.readFeatures(json_TACMinistrioPblico9unid_439, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_439 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_439.addFeatures(features_TACMinistrioPblico9unid_439);
var lyr_TACMinistrioPblico9unid_439 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_439, 
                style: style_TACMinistrioPblico9unid_439,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_439.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_440 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_440 = format_TACMinistrioPblico9unid_440.readFeatures(json_TACMinistrioPblico9unid_440, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_440 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_440.addFeatures(features_TACMinistrioPblico9unid_440);
var lyr_TACMinistrioPblico9unid_440 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_440, 
                style: style_TACMinistrioPblico9unid_440,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_440.png" /> TAC Ministério Público (9 unid.)'
            });
var format_PlantioVoluntrio1unid_441 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_441 = format_PlantioVoluntrio1unid_441.readFeatures(json_PlantioVoluntrio1unid_441, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_441 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_441.addFeatures(features_PlantioVoluntrio1unid_441);
var lyr_PlantioVoluntrio1unid_441 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_441, 
                style: style_PlantioVoluntrio1unid_441,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_441.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_442 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_442 = format_PlantioVoluntrio1unid_442.readFeatures(json_PlantioVoluntrio1unid_442, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_442 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_442.addFeatures(features_PlantioVoluntrio1unid_442);
var lyr_PlantioVoluntrio1unid_442 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_442, 
                style: style_PlantioVoluntrio1unid_442,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_442.png" /> Plantio Voluntário (1 unid.)'
            });
var format_CartaAnuncia21unid_443 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_443 = format_CartaAnuncia21unid_443.readFeatures(json_CartaAnuncia21unid_443, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia21unid_443 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_443.addFeatures(features_CartaAnuncia21unid_443);
var lyr_CartaAnuncia21unid_443 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_443, 
                style: style_CartaAnuncia21unid_443,
                popuplayertitle: 'Carta Anuência (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_443.png" /> Carta Anuência (21 unid.)'
            });
var format_CartaAnuncia21unid_444 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_444 = format_CartaAnuncia21unid_444.readFeatures(json_CartaAnuncia21unid_444, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia21unid_444 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_444.addFeatures(features_CartaAnuncia21unid_444);
var lyr_CartaAnuncia21unid_444 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_444, 
                style: style_CartaAnuncia21unid_444,
                popuplayertitle: 'Carta Anuência (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_444.png" /> Carta Anuência (21 unid.)'
            });
var format_AoCivilPblica1unid_445 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_445 = format_AoCivilPblica1unid_445.readFeatures(json_AoCivilPblica1unid_445, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_445 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_445.addFeatures(features_AoCivilPblica1unid_445);
var lyr_AoCivilPblica1unid_445 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_445, 
                style: style_AoCivilPblica1unid_445,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_445.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_446 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_446 = format_AoCivilPblica1unid_446.readFeatures(json_AoCivilPblica1unid_446, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_446 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_446.addFeatures(features_AoCivilPblica1unid_446);
var lyr_AoCivilPblica1unid_446 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_446, 
                style: style_AoCivilPblica1unid_446,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_446.png" /> Ação Civil Pública (1 unid.)'
            });
var format_ProgramaAdoteUmaPraa379unid37432463m_447 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa379unid37432463m_447 = format_ProgramaAdoteUmaPraa379unid37432463m_447.readFeatures(json_ProgramaAdoteUmaPraa379unid37432463m_447, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProgramaAdoteUmaPraa379unid37432463m_447 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa379unid37432463m_447.addFeatures(features_ProgramaAdoteUmaPraa379unid37432463m_447);
var lyr_ProgramaAdoteUmaPraa379unid37432463m_447 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa379unid37432463m_447, 
                style: style_ProgramaAdoteUmaPraa379unid37432463m_447,
                popuplayertitle: 'Programa Adote Uma Praça (379 unid. / 374.324,63 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa379unid37432463m_447.png" /> Programa Adote Uma Praça (379 unid. / 374.324,63 m²)'
            });
var format_ComPlacaDilu155unid16172973m_448 = new ol.format.GeoJSON();
var features_ComPlacaDilu155unid16172973m_448 = format_ComPlacaDilu155unid16172973m_448.readFeatures(json_ComPlacaDilu155unid16172973m_448, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaDilu155unid16172973m_448 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu155unid16172973m_448.addFeatures(features_ComPlacaDilu155unid16172973m_448);
var lyr_ComPlacaDilu155unid16172973m_448 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu155unid16172973m_448, 
                style: style_ComPlacaDilu155unid16172973m_448,
                popuplayertitle: 'Com Placa - Dilu (155 unid. / 161.729,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu155unid16172973m_448.png" /> Com Placa - Dilu (155 unid. / 161.729,73 m²)'
            });
var format_ComPlacaEgnaldo205unid21276697m_449 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo205unid21276697m_449 = format_ComPlacaEgnaldo205unid21276697m_449.readFeatures(json_ComPlacaEgnaldo205unid21276697m_449, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaEgnaldo205unid21276697m_449 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo205unid21276697m_449.addFeatures(features_ComPlacaEgnaldo205unid21276697m_449);
var lyr_ComPlacaEgnaldo205unid21276697m_449 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo205unid21276697m_449, 
                style: style_ComPlacaEgnaldo205unid21276697m_449,
                popuplayertitle: 'Com Placa - Egnaldo (205 unid. / 212.766,97 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo205unid21276697m_449.png" /> Com Placa - Egnaldo (205 unid. / 212.766,97 m²)'
            });
var format_SemPlacaDilu15unid751060m_450 = new ol.format.GeoJSON();
var features_SemPlacaDilu15unid751060m_450 = format_SemPlacaDilu15unid751060m_450.readFeatures(json_SemPlacaDilu15unid751060m_450, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaDilu15unid751060m_450 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu15unid751060m_450.addFeatures(features_SemPlacaDilu15unid751060m_450);
var lyr_SemPlacaDilu15unid751060m_450 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu15unid751060m_450, 
                style: style_SemPlacaDilu15unid751060m_450,
                popuplayertitle: 'Sem Placa - Dilu (15 unid. / 7.510,60 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu15unid751060m_450.png" /> Sem Placa - Dilu (15 unid. / 7.510,60 m²)'
            });
var format_SemPlacaEgnaldo4unid86447m_451 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo4unid86447m_451 = format_SemPlacaEgnaldo4unid86447m_451.readFeatures(json_SemPlacaEgnaldo4unid86447m_451, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaEgnaldo4unid86447m_451 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo4unid86447m_451.addFeatures(features_SemPlacaEgnaldo4unid86447m_451);
var lyr_SemPlacaEgnaldo4unid86447m_451 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo4unid86447m_451, 
                style: style_SemPlacaEgnaldo4unid86447m_451,
                popuplayertitle: 'Sem Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo4unid86447m_451.png" /> Sem Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var group_AdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa379unid37432463m_447,lyr_ComPlacaDilu155unid16172973m_448,lyr_ComPlacaEgnaldo205unid21276697m_449,lyr_SemPlacaDilu15unid751060m_450,lyr_SemPlacaEgnaldo4unid86447m_451,],
                                fold: 'close',
                                title: 'Adote Uma Praça'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_TRPRLCETESB2unid_431,lyr_TRPRLCETESB2unid_432,lyr_TCRAMunicipal14unid_433,lyr_TCRAMunicipal14unid_434,lyr_TCRACETESBPARCELAMENTO32unid_435,lyr_TCRACETESBPARCELAMENTO32unid_436,lyr_TCRACETESB30unid_437,lyr_TCRACETESB30unid_438,lyr_TACMinistrioPblico9unid_439,lyr_TACMinistrioPblico9unid_440,lyr_PlantioVoluntrio1unid_441,lyr_PlantioVoluntrio1unid_442,lyr_CartaAnuncia21unid_443,lyr_CartaAnuncia21unid_444,lyr_AoCivilPblica1unid_445,lyr_AoCivilPblica1unid_446,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP169unid239527816m_411,lyr_reaInstitucional371unid208395759m_412,lyr_reaPatrimonial69unid121924073m_413,lyr_reaVerde2115unid881290721m_414,lyr_readeUsoEspecial279unid271349968m_415,lyr_LoteamentoFechado146unid70632440m_416,lyr_Lote252unid7530210m_417,lyr_Lote252unid_418,lyr_LoteEdificao20unid508062m_419,lyr_LoteEdificao20unid_420,lyr_LeiloLEIN97542025Homologado4unid334770m_421,lyr_LeiloLEIN97542025Homologado4unid_422,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428,lyr_LoteEMDEF10unid218783m_429,lyr_LoteEMDEF10unid_430,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_Bairros383unidRegies9unid = new ol.layer.Group({
                                layers: [lyr_RegioCentroLeste42unid675453694m_402,lyr_RegioLesteNordeste50unid1233454938m_403,lyr_RegioNorteI45unid1043752016m_404,lyr_RegioNorteII36unid859331837m_405,lyr_RegioOesteI65unid1245065890m_406,lyr_RegioOesteII43unid599615871m_407,lyr_RegioSudeste38unid579321135m_408,lyr_RegioSudesteSul44unid830633497m_409,lyr_RegioSul20unid639964086m_410,],
                                fold: 'close',
                                title: 'Bairros (383 unid.) / Regiões (9 unid.)'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_ClasseVB_392,lyr_ClasseVA_393,lyr_ClasseIVC_394,lyr_ClasseIVB_395,lyr_ClasseIVA_396,lyr_ClasseIIIC_397,lyr_ClasseIIIB_398,lyr_ClasseIIIA_399,lyr_ClasseII_400,lyr_ClasseI_401,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_388,lyr_PBZPAEdifcioPrimeHELIPONTO_389,lyr_PBZPAHospitalHELIPONTO_390,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391,],
                                fold: 'close',
                                title: 'Controle Aéreo – Plano Básico de Zona de Proteção de Aeródromo'});
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_Gesso1unid_370,lyr_ResduosdeConstruoCivil7unid_371,lyr_ResduosVerdes1unid_372,lyr_ChapasdeRaioX1unid_373,lyr_Embalagensvaziasdeagrotxicos1unid_374,lyr_leodecozinhausado2unid_375,lyr_leolubrificanteusado1unid_376,lyr_Latasdetintametlicasvazias2unid_377,lyr_ResduosPerigosos1unid_378,lyr_Madeiras1unid_379,lyr_ResduosdeServiosdeSade21unid_380,lyr_PilhaseBaterias17unid_381,lyr_Pneus1unid_382,lyr_Lmpadas4unid_383,lyr_ResduosdeCouro1unid_384,lyr_ResduosEletrnicos2unid_385,lyr_ResduosReciclveis15unid_386,lyr_ResduosInservveis4unid_387,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_Voorocas27unid_365,lyr_LocaisdeDifcilAcessoereasRurais12unid_366,lyr_Contineres286unid_367,lyr_rvoreImuneaoCorte9unid_368,lyr_AcademiasaoArLivre84unid_369,],
                                fold: 'close',
                                title: 'Diversos'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_361,lyr_DrenagensExistentes_362,lyr_Drenagens_363,lyr_Drenagens_364,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_Ecopontos = new ol.layer.Group({
                                layers: [lyr_Proposto2unid_358,lyr_Emconstruo2unid_359,lyr_Emfuncionamento4unid_360,],
                                fold: 'close',
                                title: 'Ecopontos'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN2_340,lyr_reaN1_341,lyr_reaN_342,lyr_ConjuntoHabitacional_343,lyr_AvdeacessoaoHortoeColgioAgrcola_344,lyr_reaK_345,lyr_reaJ_346,lyr_reaI_347,lyr_reaH_348,lyr_reaG_349,lyr_reaF_350,lyr_reaE_351,lyr_reaD_352,lyr_reaC_353,lyr_reaB_354,lyr_reaA_355,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356,lyr_reaaseraverbadaPartedareaG_357,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazendaMunicipal_329,lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330,lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331,lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334,lyr_AntigoAterrodasMaritacas_335,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336,lyr_ParqueZumbidosPalmares_337,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_324,lyr_RiosDuplos84unid_325,lyr_MassasDgua270unid_326,lyr_RiosSimples1842unid_327,lyr_Nascentes821unid_328,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinos69unid_320,lyr_LoteamentosClandestinos69unid_321,lyr_FazendaPalestina105unid_322,lyr_FazendaPalestina105unid_323,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_128,lyr_Vivenna_129,lyr_VittaSoVicente_130,lyr_VittaSoVicente_131,lyr_VittaJardimSimes_132,lyr_VittaJardimSimes_133,lyr_VittaAlvorada_134,lyr_VittaAlvorada_135,lyr_VilaDiEspanha_136,lyr_VilaDiEspanha_137,lyr_VillaPucci_138,lyr_VillaPucci_139,lyr_VillaDoratta_140,lyr_VillaDoratta_141,lyr_VillaBella_142,lyr_VillaBella_143,lyr_Versalhes_144,lyr_Versalhes_145,lyr_TorontoResidence_146,lyr_TorontoResidence_147,lyr_TerraNova_148,lyr_TerraNova_149,lyr_Sonetto_150,lyr_Sonetto_151,lyr_SMARTFRANCAEIXORESIDENCIAL2_152,lyr_SMARTFRANCAEIXORESIDENCIAL2_153,lyr_SMARTFRANCAEIXORESIDENCIAL1_154,lyr_SMARTFRANCAEIXORESIDENCIAL1_155,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157,lyr_ServidoRamal138kVFranca4Guanabara_158,lyr_ServidoRamal138kVFranca4Guanabara_159,lyr_SantaLina_160,lyr_SantaLina_161,lyr_SantAnita_162,lyr_SantAnita_163,lyr_RuaAlfioBenedini_164,lyr_RuaAlfioBenedini_165,lyr_RuaAlfioBenedini_166,lyr_ResidencialValeVerde_167,lyr_ResidencialValeVerde_168,lyr_ResidencialYasminTorres_169,lyr_ResidencialYasminTorres_170,lyr_ResidencialSoCarlosII_171,lyr_ResidencialSoCarlosII_172,lyr_ResidencialSoCarlosI_173,lyr_ResidencialSoCarlosI_174,lyr_ResidencialSantaIns_175,lyr_ResidencialSantaIns_176,lyr_ResidencialSantaF_177,lyr_ResidencialSantaF_178,lyr_ResidencialQuintadosOitis_179,lyr_ResidencialQuintadosOitis_180,lyr_ResidencialQuintadoSol_181,lyr_ResidencialQuintadoSol_182,lyr_ResidencialPousoAlegreII_183,lyr_ResidencialPousoAlegreII_184,lyr_ResidencialPousoAlegre_185,lyr_ResidencialPousoAlegre_186,lyr_ResicencialNairRetuciII_187,lyr_ResicencialNairRetuciII_188,lyr_ResicencialNairRetuci_189,lyr_ResicencialNairRetuci_190,lyr_ResidencialMoradadoBosque_191,lyr_ResidencialMoradadoBosque_192,lyr_ResidencialMarthaHelena_193,lyr_ResidencialMarthaHelena_194,lyr_ResidencialMarioTasso_195,lyr_ResidencialMarioTasso_196,lyr_ResidencialMarianaAlarcon_197,lyr_ResidencialMarianaAlarcon_198,lyr_ResidencialJardimCanada_199,lyr_ResidencialJardimCanada_200,lyr_ResidencialJabuticabeiras_201,lyr_ResidencialJabuticabeiras_202,lyr_ResidencialFrutuoso_203,lyr_ResidencialFrutuoso_204,lyr_ResidencialEssenza_205,lyr_ResidencialEssenza_206,lyr_ResidencialDomingosJardini_207,lyr_ResidencialDomingosJardini_208,lyr_ResidencialCintraAlves_209,lyr_ResidencialCintraAlves_210,lyr_ResidencialBoaVista_211,lyr_ResidencialBoaVista_212,lyr_ResidencialAltodaFazenda_213,lyr_ResidencialAltodaFazenda_214,lyr_RecantoMeneghetti_215,lyr_RecantoMeneghetti_216,lyr_Quadra18VilaExposio_217,lyr_Quadra18VilaExposio_218,lyr_ProlongamentoSamelPark_219,lyr_ProlongamentoSamelPark_220,lyr_ParqueVillaLobos_221,lyr_ParqueVillaLobos_222,lyr_ParquePalmeiraImperial_223,lyr_ParquePalmeiraImperial_224,lyr_ParqueJacarand_225,lyr_ParqueJacarand_226,lyr_ParqueFlora_227,lyr_ParqueFlora_228,lyr_ParquedosSabias_229,lyr_ParquedosSabias_230,lyr_ParagonFaseII_231,lyr_ParagonFaseII_232,lyr_Paragon_233,lyr_Paragon_234,lyr_PalmeiraReal_235,lyr_PalmeiraReal_236,lyr_MoradadoVerdeII_237,lyr_MoradadoVerdeII_238,lyr_MoradadaMata_239,lyr_MoradadaMata_240,lyr_Monti_241,lyr_Monti_242,lyr_MontBlancResidence_243,lyr_MontBlancResidence_244,lyr_MasterplanDespaschoal_245,lyr_MasterplanDespaschoal_246,lyr_MasterplanDespaschoal_247,lyr_MasteplanBildVitta_248,lyr_MasteplanBildVitta_249,lyr_MasteplanBildVitta_250,lyr_Loteamentolamo_251,lyr_Loteamentolamo_252,lyr_JardimPherola_253,lyr_JardimPherola_254,lyr_JardimMariaLuiza_255,lyr_JardimMariaLuiza_256,lyr_JardimHorizonte_257,lyr_JardimHorizonte_258,lyr_JardimFlora_259,lyr_JardimFlora_260,lyr_IrineuZanetiII_261,lyr_IrineuZanetiII_262,lyr_Infratcnica_263,lyr_Infratcnica_264,lyr_HorizResidence_265,lyr_HorizResidence_266,lyr_GlebaNossaSenhoraAuxiliadora_267,lyr_GlebaNossaSenhoraAuxiliadora_268,lyr_Ferracini_269,lyr_Ferracini_270,lyr_FrancaB6_271,lyr_FrancaB6_272,lyr_FazendaProgresso_273,lyr_FazendaProgresso_274,lyr_FazendaeGranjaSantaRita2_275,lyr_FazendaeGranjaSantaRita2_276,lyr_FazendaeGranjaSantaRita_277,lyr_FazendaeGranjaSantaRita_278,lyr_Essence_279,lyr_Essence_280,lyr_Elias_281,lyr_Elias_282,lyr_EdifcioSolNascente_283,lyr_EdifcioSolNascente_284,lyr_EdifcioRuadoSol_285,lyr_EdifcioRuadoSol_286,lyr_EdifcioResidencialHope_287,lyr_EdifcioResidencialHope_288,lyr_DiocesedeFranca_289,lyr_DiocesedeFranca_290,lyr_DaVinci_291,lyr_DaVinci_292,lyr_CondomnioIICityPetrpolis_293,lyr_CondomnioIICityPetrpolis_294,lyr_CondomnioICityPetrpolis_295,lyr_CondomnioICityPetrpolis_296,lyr_Colorado_297,lyr_Colorado_298,lyr_CidadeJardim_299,lyr_CidadeJardim_300,lyr_ChacaraOlaria_301,lyr_ChacaraOlaria_302,lyr_ChacaraBelaVista_303,lyr_ChacaraBelaVista_304,lyr_BordadaMata_305,lyr_BordadaMata_306,lyr_Arteris_307,lyr_Arteris_308,lyr_ArterisFaixadeDomnioFrancaSP_3342_309,lyr_ArterisFaixadeDomnioFrancaSP_3452_310,lyr_ArterisFaixadeDomnioFrancaSPA_397334_311,lyr_Arizona_312,lyr_Arizona_313,lyr_AbuDhabiParadiseResortResidence_314,lyr_AbuDhabiParadiseResortResidence_315,lyr_EtapaAprovado27unid_316,lyr_EtapaDiretriz22unid_317,lyr_EtapaDefinitiva10unid_318,lyr_EtapaPrvia24unid_319,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_LoteamentosRegularizados9unid_126,lyr_LoteamentosRegularizados9unid_127,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBSdaVilaSantaTerezinha_101,lyr_UBSdoResidencialPeresElias_102,lyr_UBSdoParquedoHorto_103,lyr_UBSdoJardimPalma_104,lyr_RevitalizaodaEstaoFerroviria_105,lyr_readeLazerdoParqueContinental_106,lyr_readeLazerdoJardimPortinari_107,lyr_readeLazerdoParquedasEsmeraldas_108,lyr_ReforoEstruturaldoColgioChampagnat_109,lyr_ProntoSocorrolvaroAzzuz_110,lyr_Policlnica_111,lyr_RecapeamentodoJardimMartins_112,lyr_NovoNGA_113,lyr_EstabilizaodeTaludenoJardimBrasilndia_114,lyr_EscolaJooLiporoni_115,lyr_DrenagemdoCrregodosBagres_116,lyr_DrenagemdoCrregoCubato_117,lyr_DrenagemdoJardimPalmeiras_118,lyr_CrechedoSamelPark_119,lyr_CRASOeste_120,lyr_CRASNorte_121,lyr_CorpodeBombeiros_122,lyr_ContenoViria_123,lyr_CAPSInfantil_124,lyr_ObrasPblicas_125,],
                                fold: 'close',
                                title: 'Obras Públicas'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_ParqueAmbientalLuprcioTaveira_87,lyr_ParqueAmbientalLuprcioTaveira_88,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90,lyr_ParquedeExposiesFernandoCosta_91,lyr_ParquedeExposiesFernandoCosta_92,lyr_ParqueCaxambu_93,lyr_ParqueCaxambu_94,lyr_ComplexoPoliesportivo_95,lyr_ComplexoPoliesportivo_96,lyr_ParquedosTrabalhadores_97,lyr_ParquedosTrabalhadores_98,lyr_JardimZoobotnico_99,lyr_JardimZoobotnico_100,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado96unid_83,lyr_ImvelPrivado96unid_84,lyr_ImvelRural1unid_85,lyr_ImvelPblico123unid_86,],
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
                                layers: [lyr_PrprioPblicoMunicipalArena3unid_48,lyr_PrprioPblicoMunicipalBiblioteca1unid_49,lyr_PrprioPblicoMunicipalCampo25unid_50,lyr_PrprioPblicoMunicipalCasa1unid_51,lyr_PrprioPblicoMunicipalCentro4unid_52,lyr_PrprioPblicoMunicipalCEPEL12unid_53,lyr_PrprioPblicoMunicipalConjunto4unid_54,lyr_PrprioPblicoMunicipalEstadio1unid_55,lyr_PrprioPblicoMunicipalGinsio5unid_56,lyr_PrprioPblicoMunicipalMuseu2unid_57,lyr_PrprioPblicoMunicipalParque2unid_58,lyr_PrprioPblicoMunicipalPavilho1unid_59,lyr_PrprioPblicoMunicipalPinacoteca1unid_60,lyr_PrprioPblicoMunicipalPiscina1unid_61,lyr_PrprioPblicoMunicipalPista1unid_62,lyr_PrprioPblicoMunicipalPraa3unid_63,lyr_PrprioPblicoMunicipalQuadra3unid_64,lyr_PrprioPblicoMunicipalSecretaria1unid_65,lyr_PrprioPblicoMunicipalTeatro2unid_66,],
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
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleSatellite_2,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,],
                                fold: 'close',
                                title: 'Zona Cartográfica / Mapa Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_ARORemanescentesFlorestais_5.setVisible(false);lyr_AROreadeAmortecimento_6.setVisible(false);lyr_AROFaixadeCuestas_7.setVisible(false);lyr_AROAPP_8.setVisible(false);lyr_ARAIncongrunciasemAPP_9.setVisible(false);lyr_ARAETELagoas_10.setVisible(false);lyr_ARAAterros_11.setVisible(false);lyr_AODreaUrbanaConsolidada_12.setVisible(false);lyr_AODBaixaDensidadeNvel3_13.setVisible(false);lyr_AODBaixaDensidadeNvel2_14.setVisible(false);lyr_AODBaixaDensidadeNvel1_15.setVisible(false);lyr_AODAUSFase2_16.setVisible(false);lyr_AODAUSFase1_17.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_20.setVisible(false);lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.setVisible(false);lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.setVisible(false);lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.setVisible(false);lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.setVisible(false);lyr_MacrozonasMacrozonadoRioCanoas_25.setVisible(false);lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.setVisible(false);lyr_ExpansoUrbanaLCN0502003_29.setVisible(false);lyr_ExpansoUrbanaLCN1402009_30.setVisible(false);lyr_ExpansoUrbanaLCN2352013_31.setVisible(false);lyr_ExpansoUrbanaLCN3242019_32.setVisible(false);lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_34.setVisible(false);lyr_SistemaVirioRodovias_35.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_36.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_37.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.setVisible(false);lyr_PrprioPblicoMunicipalAtenoPrimria24unid_43.setVisible(false);lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_44.setVisible(false);lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_45.setVisible(false);lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_46.setVisible(false);lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_47.setVisible(false);lyr_PrprioPblicoMunicipalArena3unid_48.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_49.setVisible(false);lyr_PrprioPblicoMunicipalCampo25unid_50.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_51.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_52.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL12unid_53.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_54.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_55.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_56.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_57.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_58.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_59.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_60.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_61.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_62.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_63.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_64.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_65.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_66.setVisible(false);lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_67.setVisible(false);lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_68.setVisible(false);lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_69.setVisible(false);lyr_UnidadesEscolaresCreche35unid_70.setVisible(false);lyr_UnidadesEscolaresCrechePrEscola45unid_71.setVisible(false);lyr_UnidadesEscolaresEdInfantil9unid_72.setVisible(false);lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_73.setVisible(false);lyr_UnidadesEscolaresEJA3unid_74.setVisible(false);lyr_UnidadesEscolaresEnsFundamental3unid_75.setVisible(false);lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_76.setVisible(false);lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_77.setVisible(false);lyr_UnidadesEscolaresSetordeMerenda1unid_78.setVisible(false);lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_79.setVisible(false);lyr_RodoviasEstaduais4unid_80.setVisible(false);lyr_EstradasRuraisMunicipais34unid_81.setVisible(false);lyr_RodoviasMunicipais8unid_82.setVisible(false);lyr_LotesImvelPrivado96unid_83.setVisible(false);lyr_ImvelPrivado96unid_84.setVisible(false);lyr_ImvelRural1unid_85.setVisible(false);lyr_ImvelPblico123unid_86.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_87.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_88.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.setVisible(false);lyr_ParquedeExposiesFernandoCosta_91.setVisible(false);lyr_ParquedeExposiesFernandoCosta_92.setVisible(false);lyr_ParqueCaxambu_93.setVisible(false);lyr_ParqueCaxambu_94.setVisible(false);lyr_ComplexoPoliesportivo_95.setVisible(false);lyr_ComplexoPoliesportivo_96.setVisible(false);lyr_ParquedosTrabalhadores_97.setVisible(false);lyr_ParquedosTrabalhadores_98.setVisible(false);lyr_JardimZoobotnico_99.setVisible(false);lyr_JardimZoobotnico_100.setVisible(false);lyr_UBSdaVilaSantaTerezinha_101.setVisible(false);lyr_UBSdoResidencialPeresElias_102.setVisible(false);lyr_UBSdoParquedoHorto_103.setVisible(false);lyr_UBSdoJardimPalma_104.setVisible(false);lyr_RevitalizaodaEstaoFerroviria_105.setVisible(false);lyr_readeLazerdoParqueContinental_106.setVisible(false);lyr_readeLazerdoJardimPortinari_107.setVisible(false);lyr_readeLazerdoParquedasEsmeraldas_108.setVisible(false);lyr_ReforoEstruturaldoColgioChampagnat_109.setVisible(false);lyr_ProntoSocorrolvaroAzzuz_110.setVisible(false);lyr_Policlnica_111.setVisible(false);lyr_RecapeamentodoJardimMartins_112.setVisible(false);lyr_NovoNGA_113.setVisible(false);lyr_EstabilizaodeTaludenoJardimBrasilndia_114.setVisible(false);lyr_EscolaJooLiporoni_115.setVisible(false);lyr_DrenagemdoCrregodosBagres_116.setVisible(false);lyr_DrenagemdoCrregoCubato_117.setVisible(false);lyr_DrenagemdoJardimPalmeiras_118.setVisible(false);lyr_CrechedoSamelPark_119.setVisible(false);lyr_CRASOeste_120.setVisible(false);lyr_CRASNorte_121.setVisible(false);lyr_CorpodeBombeiros_122.setVisible(false);lyr_ContenoViria_123.setVisible(false);lyr_CAPSInfantil_124.setVisible(false);lyr_ObrasPblicas_125.setVisible(false);lyr_LoteamentosRegularizados9unid_126.setVisible(false);lyr_LoteamentosRegularizados9unid_127.setVisible(false);lyr_Vivenna_128.setVisible(false);lyr_Vivenna_129.setVisible(false);lyr_VittaSoVicente_130.setVisible(false);lyr_VittaSoVicente_131.setVisible(false);lyr_VittaJardimSimes_132.setVisible(false);lyr_VittaJardimSimes_133.setVisible(false);lyr_VittaAlvorada_134.setVisible(false);lyr_VittaAlvorada_135.setVisible(false);lyr_VilaDiEspanha_136.setVisible(false);lyr_VilaDiEspanha_137.setVisible(false);lyr_VillaPucci_138.setVisible(false);lyr_VillaPucci_139.setVisible(false);lyr_VillaDoratta_140.setVisible(false);lyr_VillaDoratta_141.setVisible(false);lyr_VillaBella_142.setVisible(false);lyr_VillaBella_143.setVisible(false);lyr_Versalhes_144.setVisible(false);lyr_Versalhes_145.setVisible(false);lyr_TorontoResidence_146.setVisible(false);lyr_TorontoResidence_147.setVisible(false);lyr_TerraNova_148.setVisible(false);lyr_TerraNova_149.setVisible(false);lyr_Sonetto_150.setVisible(false);lyr_Sonetto_151.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_152.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_153.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_154.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_155.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_158.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_159.setVisible(false);lyr_SantaLina_160.setVisible(false);lyr_SantaLina_161.setVisible(false);lyr_SantAnita_162.setVisible(false);lyr_SantAnita_163.setVisible(false);lyr_RuaAlfioBenedini_164.setVisible(false);lyr_RuaAlfioBenedini_165.setVisible(false);lyr_RuaAlfioBenedini_166.setVisible(false);lyr_ResidencialValeVerde_167.setVisible(false);lyr_ResidencialValeVerde_168.setVisible(false);lyr_ResidencialYasminTorres_169.setVisible(false);lyr_ResidencialYasminTorres_170.setVisible(false);lyr_ResidencialSoCarlosII_171.setVisible(false);lyr_ResidencialSoCarlosII_172.setVisible(false);lyr_ResidencialSoCarlosI_173.setVisible(false);lyr_ResidencialSoCarlosI_174.setVisible(false);lyr_ResidencialSantaIns_175.setVisible(false);lyr_ResidencialSantaIns_176.setVisible(false);lyr_ResidencialSantaF_177.setVisible(false);lyr_ResidencialSantaF_178.setVisible(false);lyr_ResidencialQuintadosOitis_179.setVisible(false);lyr_ResidencialQuintadosOitis_180.setVisible(false);lyr_ResidencialQuintadoSol_181.setVisible(false);lyr_ResidencialQuintadoSol_182.setVisible(false);lyr_ResidencialPousoAlegreII_183.setVisible(false);lyr_ResidencialPousoAlegreII_184.setVisible(false);lyr_ResidencialPousoAlegre_185.setVisible(false);lyr_ResidencialPousoAlegre_186.setVisible(false);lyr_ResicencialNairRetuciII_187.setVisible(false);lyr_ResicencialNairRetuciII_188.setVisible(false);lyr_ResicencialNairRetuci_189.setVisible(false);lyr_ResicencialNairRetuci_190.setVisible(false);lyr_ResidencialMoradadoBosque_191.setVisible(false);lyr_ResidencialMoradadoBosque_192.setVisible(false);lyr_ResidencialMarthaHelena_193.setVisible(false);lyr_ResidencialMarthaHelena_194.setVisible(false);lyr_ResidencialMarioTasso_195.setVisible(false);lyr_ResidencialMarioTasso_196.setVisible(false);lyr_ResidencialMarianaAlarcon_197.setVisible(false);lyr_ResidencialMarianaAlarcon_198.setVisible(false);lyr_ResidencialJardimCanada_199.setVisible(false);lyr_ResidencialJardimCanada_200.setVisible(false);lyr_ResidencialJabuticabeiras_201.setVisible(false);lyr_ResidencialJabuticabeiras_202.setVisible(false);lyr_ResidencialFrutuoso_203.setVisible(false);lyr_ResidencialFrutuoso_204.setVisible(false);lyr_ResidencialEssenza_205.setVisible(false);lyr_ResidencialEssenza_206.setVisible(false);lyr_ResidencialDomingosJardini_207.setVisible(false);lyr_ResidencialDomingosJardini_208.setVisible(false);lyr_ResidencialCintraAlves_209.setVisible(false);lyr_ResidencialCintraAlves_210.setVisible(false);lyr_ResidencialBoaVista_211.setVisible(false);lyr_ResidencialBoaVista_212.setVisible(false);lyr_ResidencialAltodaFazenda_213.setVisible(false);lyr_ResidencialAltodaFazenda_214.setVisible(false);lyr_RecantoMeneghetti_215.setVisible(false);lyr_RecantoMeneghetti_216.setVisible(false);lyr_Quadra18VilaExposio_217.setVisible(false);lyr_Quadra18VilaExposio_218.setVisible(false);lyr_ProlongamentoSamelPark_219.setVisible(false);lyr_ProlongamentoSamelPark_220.setVisible(false);lyr_ParqueVillaLobos_221.setVisible(false);lyr_ParqueVillaLobos_222.setVisible(false);lyr_ParquePalmeiraImperial_223.setVisible(false);lyr_ParquePalmeiraImperial_224.setVisible(false);lyr_ParqueJacarand_225.setVisible(false);lyr_ParqueJacarand_226.setVisible(false);lyr_ParqueFlora_227.setVisible(false);lyr_ParqueFlora_228.setVisible(false);lyr_ParquedosSabias_229.setVisible(false);lyr_ParquedosSabias_230.setVisible(false);lyr_ParagonFaseII_231.setVisible(false);lyr_ParagonFaseII_232.setVisible(false);lyr_Paragon_233.setVisible(false);lyr_Paragon_234.setVisible(false);lyr_PalmeiraReal_235.setVisible(false);lyr_PalmeiraReal_236.setVisible(false);lyr_MoradadoVerdeII_237.setVisible(false);lyr_MoradadoVerdeII_238.setVisible(false);lyr_MoradadaMata_239.setVisible(false);lyr_MoradadaMata_240.setVisible(false);lyr_Monti_241.setVisible(false);lyr_Monti_242.setVisible(false);lyr_MontBlancResidence_243.setVisible(false);lyr_MontBlancResidence_244.setVisible(false);lyr_MasterplanDespaschoal_245.setVisible(false);lyr_MasterplanDespaschoal_246.setVisible(false);lyr_MasterplanDespaschoal_247.setVisible(false);lyr_MasteplanBildVitta_248.setVisible(false);lyr_MasteplanBildVitta_249.setVisible(false);lyr_MasteplanBildVitta_250.setVisible(false);lyr_Loteamentolamo_251.setVisible(false);lyr_Loteamentolamo_252.setVisible(false);lyr_JardimPherola_253.setVisible(false);lyr_JardimPherola_254.setVisible(false);lyr_JardimMariaLuiza_255.setVisible(false);lyr_JardimMariaLuiza_256.setVisible(false);lyr_JardimHorizonte_257.setVisible(false);lyr_JardimHorizonte_258.setVisible(false);lyr_JardimFlora_259.setVisible(false);lyr_JardimFlora_260.setVisible(false);lyr_IrineuZanetiII_261.setVisible(false);lyr_IrineuZanetiII_262.setVisible(false);lyr_Infratcnica_263.setVisible(false);lyr_Infratcnica_264.setVisible(false);lyr_HorizResidence_265.setVisible(false);lyr_HorizResidence_266.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_267.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_268.setVisible(false);lyr_Ferracini_269.setVisible(false);lyr_Ferracini_270.setVisible(false);lyr_FrancaB6_271.setVisible(false);lyr_FrancaB6_272.setVisible(false);lyr_FazendaProgresso_273.setVisible(false);lyr_FazendaProgresso_274.setVisible(false);lyr_FazendaeGranjaSantaRita2_275.setVisible(false);lyr_FazendaeGranjaSantaRita2_276.setVisible(false);lyr_FazendaeGranjaSantaRita_277.setVisible(false);lyr_FazendaeGranjaSantaRita_278.setVisible(false);lyr_Essence_279.setVisible(false);lyr_Essence_280.setVisible(false);lyr_Elias_281.setVisible(false);lyr_Elias_282.setVisible(false);lyr_EdifcioSolNascente_283.setVisible(false);lyr_EdifcioSolNascente_284.setVisible(false);lyr_EdifcioRuadoSol_285.setVisible(false);lyr_EdifcioRuadoSol_286.setVisible(false);lyr_EdifcioResidencialHope_287.setVisible(false);lyr_EdifcioResidencialHope_288.setVisible(false);lyr_DiocesedeFranca_289.setVisible(false);lyr_DiocesedeFranca_290.setVisible(false);lyr_DaVinci_291.setVisible(false);lyr_DaVinci_292.setVisible(false);lyr_CondomnioIICityPetrpolis_293.setVisible(false);lyr_CondomnioIICityPetrpolis_294.setVisible(false);lyr_CondomnioICityPetrpolis_295.setVisible(false);lyr_CondomnioICityPetrpolis_296.setVisible(false);lyr_Colorado_297.setVisible(false);lyr_Colorado_298.setVisible(false);lyr_CidadeJardim_299.setVisible(false);lyr_CidadeJardim_300.setVisible(false);lyr_ChacaraOlaria_301.setVisible(false);lyr_ChacaraOlaria_302.setVisible(false);lyr_ChacaraBelaVista_303.setVisible(false);lyr_ChacaraBelaVista_304.setVisible(false);lyr_BordadaMata_305.setVisible(false);lyr_BordadaMata_306.setVisible(false);lyr_Arteris_307.setVisible(false);lyr_Arteris_308.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3342_309.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3452_310.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSPA_397334_311.setVisible(false);lyr_Arizona_312.setVisible(false);lyr_Arizona_313.setVisible(false);lyr_AbuDhabiParadiseResortResidence_314.setVisible(false);lyr_AbuDhabiParadiseResortResidence_315.setVisible(false);lyr_EtapaAprovado27unid_316.setVisible(false);lyr_EtapaDiretriz22unid_317.setVisible(false);lyr_EtapaDefinitiva10unid_318.setVisible(false);lyr_EtapaPrvia24unid_319.setVisible(false);lyr_LoteamentosClandestinos69unid_320.setVisible(false);lyr_LoteamentosClandestinos69unid_321.setVisible(false);lyr_FazendaPalestina105unid_322.setVisible(false);lyr_FazendaPalestina105unid_323.setVisible(false);lyr_APP1745unid_324.setVisible(false);lyr_RiosDuplos84unid_325.setVisible(false);lyr_MassasDgua270unid_326.setVisible(false);lyr_RiosSimples1842unid_327.setVisible(false);lyr_Nascentes821unid_328.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_329.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.setVisible(false);lyr_AntigoAterrodasMaritacas_335.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.setVisible(false);lyr_ParqueZumbidosPalmares_337.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.setVisible(false);lyr_reaN2_340.setVisible(false);lyr_reaN1_341.setVisible(false);lyr_reaN_342.setVisible(false);lyr_ConjuntoHabitacional_343.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_344.setVisible(false);lyr_reaK_345.setVisible(false);lyr_reaJ_346.setVisible(false);lyr_reaI_347.setVisible(false);lyr_reaH_348.setVisible(false);lyr_reaG_349.setVisible(false);lyr_reaF_350.setVisible(false);lyr_reaE_351.setVisible(false);lyr_reaD_352.setVisible(false);lyr_reaC_353.setVisible(false);lyr_reaB_354.setVisible(false);lyr_reaA_355.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.setVisible(false);lyr_reaaseraverbadaPartedareaG_357.setVisible(false);lyr_Proposto2unid_358.setVisible(false);lyr_Emconstruo2unid_359.setVisible(false);lyr_Emfuncionamento4unid_360.setVisible(false);lyr_DrenagensExistentes_361.setVisible(false);lyr_DrenagensExistentes_362.setVisible(false);lyr_Drenagens_363.setVisible(false);lyr_Drenagens_364.setVisible(false);lyr_Voorocas27unid_365.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais12unid_366.setVisible(false);lyr_Contineres286unid_367.setVisible(false);lyr_rvoreImuneaoCorte9unid_368.setVisible(false);lyr_AcademiasaoArLivre84unid_369.setVisible(false);lyr_Gesso1unid_370.setVisible(false);lyr_ResduosdeConstruoCivil7unid_371.setVisible(false);lyr_ResduosVerdes1unid_372.setVisible(false);lyr_ChapasdeRaioX1unid_373.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_374.setVisible(false);lyr_leodecozinhausado2unid_375.setVisible(false);lyr_leolubrificanteusado1unid_376.setVisible(false);lyr_Latasdetintametlicasvazias2unid_377.setVisible(false);lyr_ResduosPerigosos1unid_378.setVisible(false);lyr_Madeiras1unid_379.setVisible(false);lyr_ResduosdeServiosdeSade21unid_380.setVisible(false);lyr_PilhaseBaterias17unid_381.setVisible(false);lyr_Pneus1unid_382.setVisible(false);lyr_Lmpadas4unid_383.setVisible(false);lyr_ResduosdeCouro1unid_384.setVisible(false);lyr_ResduosEletrnicos2unid_385.setVisible(false);lyr_ResduosReciclveis15unid_386.setVisible(false);lyr_ResduosInservveis4unid_387.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_388.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_389.setVisible(false);lyr_PBZPAHospitalHELIPONTO_390.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.setVisible(false);lyr_ClasseVB_392.setVisible(false);lyr_ClasseVA_393.setVisible(false);lyr_ClasseIVC_394.setVisible(false);lyr_ClasseIVB_395.setVisible(false);lyr_ClasseIVA_396.setVisible(false);lyr_ClasseIIIC_397.setVisible(false);lyr_ClasseIIIB_398.setVisible(false);lyr_ClasseIIIA_399.setVisible(false);lyr_ClasseII_400.setVisible(false);lyr_ClasseI_401.setVisible(false);lyr_RegioCentroLeste42unid675453694m_402.setVisible(false);lyr_RegioLesteNordeste50unid1233454938m_403.setVisible(false);lyr_RegioNorteI45unid1043752016m_404.setVisible(false);lyr_RegioNorteII36unid859331837m_405.setVisible(false);lyr_RegioOesteI65unid1245065890m_406.setVisible(false);lyr_RegioOesteII43unid599615871m_407.setVisible(false);lyr_RegioSudeste38unid579321135m_408.setVisible(false);lyr_RegioSudesteSul44unid830633497m_409.setVisible(false);lyr_RegioSul20unid639964086m_410.setVisible(false);lyr_APP169unid239527816m_411.setVisible(false);lyr_reaInstitucional371unid208395759m_412.setVisible(false);lyr_reaPatrimonial69unid121924073m_413.setVisible(false);lyr_reaVerde2115unid881290721m_414.setVisible(false);lyr_readeUsoEspecial279unid271349968m_415.setVisible(false);lyr_LoteamentoFechado146unid70632440m_416.setVisible(false);lyr_Lote252unid7530210m_417.setVisible(false);lyr_Lote252unid_418.setVisible(false);lyr_LoteEdificao20unid508062m_419.setVisible(false);lyr_LoteEdificao20unid_420.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid334770m_421.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid_422.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428.setVisible(false);lyr_LoteEMDEF10unid218783m_429.setVisible(false);lyr_LoteEMDEF10unid_430.setVisible(false);lyr_TRPRLCETESB2unid_431.setVisible(false);lyr_TRPRLCETESB2unid_432.setVisible(false);lyr_TCRAMunicipal14unid_433.setVisible(false);lyr_TCRAMunicipal14unid_434.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_435.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_436.setVisible(false);lyr_TCRACETESB30unid_437.setVisible(false);lyr_TCRACETESB30unid_438.setVisible(false);lyr_TACMinistrioPblico9unid_439.setVisible(false);lyr_TACMinistrioPblico9unid_440.setVisible(false);lyr_PlantioVoluntrio1unid_441.setVisible(false);lyr_PlantioVoluntrio1unid_442.setVisible(false);lyr_CartaAnuncia21unid_443.setVisible(false);lyr_CartaAnuncia21unid_444.setVisible(false);lyr_AoCivilPblica1unid_445.setVisible(false);lyr_AoCivilPblica1unid_446.setVisible(false);lyr_ProgramaAdoteUmaPraa379unid37432463m_447.setVisible(false);lyr_ComPlacaDilu155unid16172973m_448.setVisible(false);lyr_ComPlacaEgnaldo205unid21276697m_449.setVisible(false);lyr_SemPlacaDilu15unid751060m_450.setVisible(false);lyr_SemPlacaEgnaldo4unid86447m_451.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_SecretariadeSade,group_SecretariadeEsporteeCultura,group_SecretariadeEducaoUnidadesEscolares,group_RodoviaseEstradas,group_PontosViciados,group_ParquesdeFranca,group_ObrasPblicas,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Ecopontos,group_Drenagem,group_Diversos,group_DescarteCorretodeResduos,group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo,group_ClassesdeRiscoIPT,group_Bairros383unidRegies9unid,group_reasPblicas,group_reasCompromissadas,group_AdoteUmaPraa];
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
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldAliases', {'fid': 'fid', 'area_km2': 'area_km2', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldAliases', {'fid': 'fid', 'area_km2': 'area_km2', });
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
lyr_PrprioPblicoMunicipalCampo25unid_50.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
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
lyr_LotesImvelPrivado96unid_83.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', '_BAIRRO': '_BAIRRO', '_RUA': '_RUA', '_processo_seinfra': 'Processo SEINFRA', '_processo_sms': 'Processo SMS', '_processo_mp': 'Pocesso MP', '_processo_smseg': 'Processo SMSEG', '_outros_processos': 'Outos Processos', '_data_inclusao': 'Data de Inclusão', });
lyr_ImvelPrivado96unid_84.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelRural1unid_85.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelPblico123unid_86.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParqueCaxambu_93.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParqueCaxambu_94.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ComplexoPoliesportivo_95.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ComplexoPoliesportivo_96.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParquedosTrabalhadores_97.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_ParquedosTrabalhadores_98.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descrição', });
lyr_JardimZoobotnico_99.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descricao', });
lyr_JardimZoobotnico_100.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descricao': 'Descricao', });
lyr_UBSdaVilaSantaTerezinha_101.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoResidencialPeresElias_102.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoParquedoHorto_103.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_UBSdoJardimPalma_104.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_RevitalizaodaEstaoFerroviria_105.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoParqueContinental_106.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoJardimPortinari_107.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_readeLazerdoParquedasEsmeraldas_108.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ReforoEstruturaldoColgioChampagnat_109.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ProntoSocorrolvaroAzzuz_110.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_Policlnica_111.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_RecapeamentodoJardimMartins_112.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_NovoNGA_113.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_114.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_EscolaJooLiporoni_115.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoCrregodosBagres_116.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoCrregoCubato_117.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_DrenagemdoJardimPalmeiras_118.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CrechedoSamelPark_119.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CRASOeste_120.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CRASNorte_121.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CorpodeBombeiros_122.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ContenoViria_123.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_CAPSInfantil_124.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_ObrasPblicas_125.set('fieldAliases', {'fid': 'fid', 'Obra': 'Obra', 'Contrato': 'Contrato', 'Empresa_Contratada': 'Empresa_Contratada', 'Porcentagem_de_Execucao': 'Porcentagem_de_Execucao', 'Inicio_da_Obra': 'Inicio_da_Obra', 'Prazo_Inicial': 'Prazo_Inicial', 'Valor_da_Obra': 'Valor_da_Obra', });
lyr_LoteamentosRegularizados9unid_126.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosRegularizados9unid_127.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_Vivenna_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_158.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_159.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_166.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarianaAlarcon_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_235.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_236.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_237.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_242.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_243.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_244.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_245.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_246.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_247.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_248.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_249.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_250.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_Loteamentolamo_251.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_252.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_253.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_254.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_255.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_256.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_257.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_258.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_259.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_260.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_261.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_262.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_263.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_264.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_265.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_266.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_267.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_268.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_269.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_270.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_271.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_272.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_273.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_274.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_275.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_276.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_277.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_278.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_279.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_280.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_281.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_282.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_283.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_288.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_289.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_290.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_291.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_292.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_293.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_294.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_295.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_296.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_297.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_298.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_299.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_300.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_301.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_302.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_303.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_304.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_305.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_306.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_307.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_308.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_309.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_310.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_311.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_Arizona_312.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_313.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_314.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_315.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado27unid_316.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_317.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva10unid_318.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_319.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_LoteamentosClandestinos69unid_320.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinos69unid_321.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_FazendaPalestina105unid_322.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_FazendaPalestina105unid_323.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_APP1745unid_324.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_325.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_326.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_327.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_328.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazendaMunicipal_329.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_335.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_337.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_reaN2_340.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN1_341.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN_342.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_343.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_344.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_345.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_346.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_347.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_348.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_349.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_350.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_351.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_352.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_353.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_354.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_355.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_357.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_Proposto2unid_358.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_Emconstruo2unid_359.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_Emfuncionamento4unid_360.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', 'Status': 'Status', });
lyr_DrenagensExistentes_361.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DrenagensExistentes_362.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_363.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_364.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Voorocas27unid_365.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_366.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_Contineres286unid_367.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_368.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_AcademiasaoArLivre84unid_369.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_Gesso1unid_370.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_371.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_372.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_373.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_374.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_375.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_376.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_377.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_378.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_379.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_380.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias17unid_381.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_382.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_383.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_384.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_385.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_386.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_387.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PBZPAEdifcioPrimeHELIPONTO_388.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_389.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_390.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_ClasseVB_392.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseVA_393.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVC_394.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVB_395.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVA_396.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIC_397.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIB_398.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIA_399.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseII_400.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseI_401.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_RegioCentroLeste42unid675453694m_402.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioLesteNordeste50unid1233454938m_403.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteI45unid1043752016m_404.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteII36unid859331837m_405.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteI65unid1245065890m_406.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteII43unid599615871m_407.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudeste38unid579321135m_408.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudesteSul44unid830633497m_409.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSul20unid639964086m_410.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_APP169unid239527816m_411.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional371unid208395759m_412.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial69unid121924073m_413.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaVerde2115unid881290721m_414.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_readeUsoEspecial279unid271349968m_415.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado146unid70632440m_416.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid7530210m_417.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote252unid_418.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LoteEdificao20unid508062m_419.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_420.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LeiloLEIN97542025Homologado4unid334770m_421.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Homologado4unid_422.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'Status', 'processo': 'Processo', });
lyr_LoteEMDEF10unid218783m_429.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_430.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_TRPRLCETESB2unid_431.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_432.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_433.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_434.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRACETESBPARCELAMENTO32unid_435.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO32unid_436.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRACETESB30unid_437.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TCRACETESB30unid_438.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TACMinistrioPblico9unid_439.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_440.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_PlantioVoluntrio1unid_441.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_442.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_CartaAnuncia21unid_443.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia21unid_444.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_AoCivilPblica1unid_445.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_446.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_ProgramaAdoteUmaPraa379unid37432463m_447.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu155unid16172973m_448.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_ComPlacaEgnaldo205unid21276697m_449.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaDilu15unid751060m_450.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaEgnaldo4unid86447m_451.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
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
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldImages', {'fid': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': 'TextEdit', 'area_km2': 'TextEdit', });
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
lyr_PrprioPblicoMunicipalCampo25unid_50.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
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
lyr_LotesImvelPrivado96unid_83.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', '_BAIRRO': 'TextEdit', '_RUA': 'TextEdit', '_processo_seinfra': 'TextEdit', '_processo_sms': 'TextEdit', '_processo_mp': 'TextEdit', '_processo_smseg': 'TextEdit', '_outros_processos': 'TextEdit', '_data_inclusao': 'DateTime', });
lyr_ImvelPrivado96unid_84.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelRural1unid_85.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelPblico123unid_86.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', 'data_inclusao': '', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParqueCaxambu_93.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParqueCaxambu_94.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ComplexoPoliesportivo_95.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ComplexoPoliesportivo_96.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParquedosTrabalhadores_97.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_ParquedosTrabalhadores_98.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_JardimZoobotnico_99.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_JardimZoobotnico_100.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descricao': '', });
lyr_UBSdaVilaSantaTerezinha_101.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoResidencialPeresElias_102.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoParquedoHorto_103.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_UBSdoJardimPalma_104.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_RevitalizaodaEstaoFerroviria_105.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoParqueContinental_106.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoJardimPortinari_107.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_readeLazerdoParquedasEsmeraldas_108.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ReforoEstruturaldoColgioChampagnat_109.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ProntoSocorrolvaroAzzuz_110.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_Policlnica_111.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_RecapeamentodoJardimMartins_112.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_NovoNGA_113.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_114.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_EscolaJooLiporoni_115.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoCrregodosBagres_116.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoCrregoCubato_117.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_DrenagemdoJardimPalmeiras_118.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CrechedoSamelPark_119.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CRASOeste_120.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CRASNorte_121.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CorpodeBombeiros_122.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ContenoViria_123.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_CAPSInfantil_124.set('fieldImages', {'fid': '', 'Obra': '', 'Contrato': '', 'Empresa_Contratada': '', 'Porcentagem_de_Execucao': '', 'Inicio_da_Obra': '', 'Prazo_Inicial': '', 'Valor_da_Obra': '', });
lyr_ObrasPblicas_125.set('fieldImages', {'fid': 'TextEdit', 'Obra': 'TextEdit', 'Contrato': 'TextEdit', 'Empresa_Contratada': 'TextEdit', 'Porcentagem_de_Execucao': 'TextEdit', 'Inicio_da_Obra': 'DateTime', 'Prazo_Inicial': 'TextEdit', 'Valor_da_Obra': 'TextEdit', });
lyr_LoteamentosRegularizados9unid_126.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosRegularizados9unid_127.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_Vivenna_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_158.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_159.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_163.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_165.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_166.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_171.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarianaAlarcon_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_233.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_235.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_236.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_237.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_242.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_243.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_244.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_245.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_246.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_247.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_248.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_249.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_250.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_Loteamentolamo_251.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_252.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_253.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_254.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_255.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_256.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_257.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_258.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_259.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_260.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_261.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_262.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_263.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_264.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_265.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_266.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_267.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_268.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_269.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_270.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_271.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_272.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_273.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_274.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_275.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_276.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_277.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_278.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_279.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_280.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_281.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_282.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_283.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_286.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_287.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_288.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_289.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_290.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_291.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_292.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_293.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_294.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_295.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_296.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_297.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_298.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_299.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_300.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_301.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_302.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_303.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_304.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_305.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_306.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_307.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_308.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_309.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_310.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_311.set('fieldImages', {'fid': '', 'description': '', });
lyr_Arizona_312.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_313.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_314.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_315.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado27unid_316.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_317.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva10unid_318.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_319.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_320.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_321.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_FazendaPalestina105unid_322.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_FazendaPalestina105unid_323.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_APP1745unid_324.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_325.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_326.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_327.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_328.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_329.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_335.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_337.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reaN2_340.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN1_341.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN_342.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_343.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_344.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_345.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_346.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_347.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_348.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_349.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_350.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_351.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_352.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_353.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_354.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_355.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_357.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_Proposto2unid_358.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_Emconstruo2unid_359.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_Emfuncionamento4unid_360.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', 'Status': 'TextEdit', });
lyr_DrenagensExistentes_361.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DrenagensExistentes_362.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Drenagens_363.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Drenagens_364.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Voorocas27unid_365.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_366.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_Contineres286unid_367.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_368.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_369.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_Gesso1unid_370.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_371.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_372.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_373.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_374.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_375.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_376.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_377.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_378.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_379.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_380.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias17unid_381.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_382.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_383.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeCouro1unid_384.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_385.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_386.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosInservveis4unid_387.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_388.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_389.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_390.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_ClasseVB_392.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseVA_393.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVC_394.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVB_395.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVA_396.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIC_397.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIB_398.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIA_399.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseII_400.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseI_401.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_RegioCentroLeste42unid675453694m_402.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioLesteNordeste50unid1233454938m_403.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteI45unid1043752016m_404.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteII36unid859331837m_405.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteI65unid1245065890m_406.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteII43unid599615871m_407.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudeste38unid579321135m_408.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudesteSul44unid830633497m_409.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSul20unid639964086m_410.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_APP169unid239527816m_411.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaInstitucional371unid208395759m_412.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaPatrimonial69unid121924073m_413.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaVerde2115unid881290721m_414.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_readeUsoEspecial279unid271349968m_415.set('fieldImages', {'fid': '', 'Classe': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'descricao': '', 'm2': '', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteamentoFechado146unid70632440m_416.set('fieldImages', {'fid': '', 'Classe': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'descricao': '', 'm2': '', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote252unid7530210m_417.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_Lote252unid_418.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_LoteEdificao20unid508062m_419.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_420.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LeiloLEIN97542025Homologado4unid334770m_421.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Homologado4unid_422.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_429.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteEMDEF10unid_430.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_TRPRLCETESB2unid_431.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_432.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_433.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_434.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO32unid_435.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO32unid_436.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB30unid_437.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', 'situacao': '', });
lyr_TCRACETESB30unid_438.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', 'situacao': '', });
lyr_TACMinistrioPblico9unid_439.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_440.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_PlantioVoluntrio1unid_441.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_442.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_CartaAnuncia21unid_443.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia21unid_444.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_AoCivilPblica1unid_445.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_446.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_ProgramaAdoteUmaPraa379unid37432463m_447.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu155unid16172973m_448.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_ComPlacaEgnaldo205unid21276697m_449.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SemPlacaDilu15unid751060m_450.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_SemPlacaEgnaldo4unid86447m_451.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
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
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldLabels', {'fid': 'hidden field', 'area_km2': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldLabels', {'fid': 'hidden field', 'area_km2': 'inline label - visible with data', });
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
lyr_PrprioPblicoMunicipalCampo25unid_50.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
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
lyr_LotesImvelPrivado96unid_83.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', '_BAIRRO': 'inline label - visible with data', '_RUA': 'inline label - visible with data', '_processo_seinfra': 'inline label - visible with data', '_processo_sms': 'inline label - visible with data', '_processo_mp': 'inline label - visible with data', '_processo_smseg': 'inline label - visible with data', '_outros_processos': 'inline label - visible with data', '_data_inclusao': 'hidden field', });
lyr_ImvelPrivado96unid_84.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', });
lyr_ImvelRural1unid_85.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', });
lyr_ImvelPblico123unid_86.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'hidden field', });
lyr_ParqueAmbientalLuprcioTaveira_87.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_88.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_89.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_90.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_91.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_92.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParqueCaxambu_93.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParqueCaxambu_94.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_95.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_96.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_97.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_98.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_JardimZoobotnico_99.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_JardimZoobotnico_100.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_UBSdaVilaSantaTerezinha_101.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoResidencialPeresElias_102.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoParquedoHorto_103.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_UBSdoJardimPalma_104.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_RevitalizaodaEstaoFerroviria_105.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoParqueContinental_106.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoJardimPortinari_107.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_readeLazerdoParquedasEsmeraldas_108.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ReforoEstruturaldoColgioChampagnat_109.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ProntoSocorrolvaroAzzuz_110.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_Policlnica_111.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_RecapeamentodoJardimMartins_112.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_NovoNGA_113.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_EstabilizaodeTaludenoJardimBrasilndia_114.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_EscolaJooLiporoni_115.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoCrregodosBagres_116.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoCrregoCubato_117.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_DrenagemdoJardimPalmeiras_118.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CrechedoSamelPark_119.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CRASOeste_120.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CRASNorte_121.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CorpodeBombeiros_122.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ContenoViria_123.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_CAPSInfantil_124.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_ObrasPblicas_125.set('fieldLabels', {'fid': 'hidden field', 'Obra': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Empresa_Contratada': 'inline label - visible with data', 'Porcentagem_de_Execucao': 'inline label - visible with data', 'Inicio_da_Obra': 'inline label - visible with data', 'Prazo_Inicial': 'inline label - visible with data', 'Valor_da_Obra': 'inline label - visible with data', });
lyr_LoteamentosRegularizados9unid_126.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosRegularizados9unid_127.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_Vivenna_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_158.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_159.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_166.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_183.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarianaAlarcon_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_235.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_236.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_237.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_242.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_243.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_244.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_245.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_246.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_247.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_248.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_249.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_250.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_Loteamentolamo_251.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_252.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_253.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_254.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_255.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_256.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_257.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_258.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_259.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_260.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_261.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_262.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_263.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_264.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_265.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_266.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_267.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_268.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_269.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_270.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_271.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_272.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_273.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_274.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_275.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_276.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_277.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_278.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_279.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_280.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_281.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_282.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_283.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_288.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_289.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_290.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_291.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_292.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_293.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_294.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_295.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_296.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_297.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_298.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_299.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_300.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_301.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_302.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_303.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_304.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_305.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_306.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_307.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_308.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_309.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_310.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_311.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_Arizona_312.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_313.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_314.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_315.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado27unid_316.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_317.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva10unid_318.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_319.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_320.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_321.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_FazendaPalestina105unid_322.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'no label', });
lyr_FazendaPalestina105unid_323.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'no label', });
lyr_APP1745unid_324.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_325.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_326.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_327.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_328.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipal_329.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_330.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_331.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_332.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_333.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_334.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_335.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_336.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_337.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_338.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_339.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_reaN2_340.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN1_341.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN_342.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_343.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_344.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_345.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_346.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_347.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_348.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_349.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_350.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_351.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_352.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_353.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_354.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_355.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_356.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_357.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_Proposto2unid_358.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Emconstruo2unid_359.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Emfuncionamento4unid_360.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_DrenagensExistentes_361.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DrenagensExistentes_362.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_363.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_364.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Voorocas27unid_365.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais12unid_366.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_Contineres286unid_367.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_368.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_369.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_Gesso1unid_370.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_371.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_372.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_373.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_374.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_375.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_376.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_377.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_378.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_379.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_380.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias17unid_381.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_382.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_383.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_384.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_385.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_386.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_387.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_388.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_389.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_390.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_391.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_ClasseVB_392.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseVA_393.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVC_394.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVB_395.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVA_396.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIC_397.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIB_398.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIA_399.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseII_400.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseI_401.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_RegioCentroLeste42unid675453694m_402.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioLesteNordeste50unid1233454938m_403.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteI45unid1043752016m_404.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteII36unid859331837m_405.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteI65unid1245065890m_406.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteII43unid599615871m_407.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudeste38unid579321135m_408.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudesteSul44unid830633497m_409.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSul20unid639964086m_410.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_APP169unid239527816m_411.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional371unid208395759m_412.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial69unid121924073m_413.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde2115unid881290721m_414.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial279unid271349968m_415.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteamentoFechado146unid70632440m_416.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'hidden field', });
lyr_Lote252unid7530210m_417.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote252unid_418.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_LoteEdificao20unid508062m_419.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_420.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid334770m_421.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid_422.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_423.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_424.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_425.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_426.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_427.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_428.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_429.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_430.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_431.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_432.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_433.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_434.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_435.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_436.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB30unid_437.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_TCRACETESB30unid_438.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_439.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_440.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_441.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_442.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_443.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_444.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_445.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_446.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa379unid37432463m_447.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu155unid16172973m_448.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo205unid21276697m_449.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaDilu15unid751060m_450.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_451.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_451.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});