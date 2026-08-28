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
var format_ARORemanescentesFlorestais_5 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_5 = format_ARORemanescentesFlorestais_5.readFeatures(json_ARORemanescentesFlorestais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
var format_FazendaBarroPretoeBambus_43 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_43 = format_FazendaBarroPretoeBambus_43.readFeatures(json_FazendaBarroPretoeBambus_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaBarroPretoeBambus_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_43.addFeatures(features_FazendaBarroPretoeBambus_43);
var lyr_FazendaBarroPretoeBambus_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_43, 
                style: style_FazendaBarroPretoeBambus_43,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_43.png" /> Fazenda Barro Preto e Bambus'
            });
var format_Matrcula106206_44 = new ol.format.GeoJSON();
var features_Matrcula106206_44 = format_Matrcula106206_44.readFeatures(json_Matrcula106206_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matrcula106206_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matrcula106206_44.addFeatures(features_Matrcula106206_44);
var lyr_Matrcula106206_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matrcula106206_44, 
                style: style_Matrcula106206_44,
                popuplayertitle: 'Matrícula 106.206',
                interactive: true,
                title: '<img src="styles/legend/Matrcula106206_44.png" /> Matrícula 106.206'
            });
var format_RecantoEmanuelMatrcula95782_45 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95782_45 = format_RecantoEmanuelMatrcula95782_45.readFeatures(json_RecantoEmanuelMatrcula95782_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecantoEmanuelMatrcula95782_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95782_45.addFeatures(features_RecantoEmanuelMatrcula95782_45);
var lyr_RecantoEmanuelMatrcula95782_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95782_45, 
                style: style_RecantoEmanuelMatrcula95782_45,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.782',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95782_45.png" /> Recanto Emanuel - Matrícula 95.782'
            });
var format_RecantoEmanuelMatrcula95783_46 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95783_46 = format_RecantoEmanuelMatrcula95783_46.readFeatures(json_RecantoEmanuelMatrcula95783_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecantoEmanuelMatrcula95783_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95783_46.addFeatures(features_RecantoEmanuelMatrcula95783_46);
var lyr_RecantoEmanuelMatrcula95783_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95783_46, 
                style: style_RecantoEmanuelMatrcula95783_46,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.783',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95783_46.png" /> Recanto Emanuel - Matrícula 95.783'
            });
var format_PortaldosIndaias_47 = new ol.format.GeoJSON();
var features_PortaldosIndaias_47 = format_PortaldosIndaias_47.readFeatures(json_PortaldosIndaias_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortaldosIndaias_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortaldosIndaias_47.addFeatures(features_PortaldosIndaias_47);
var lyr_PortaldosIndaias_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortaldosIndaias_47, 
                style: style_PortaldosIndaias_47,
                popuplayertitle: 'Portal dos Indaias',
                interactive: true,
                title: '<img src="styles/legend/PortaldosIndaias_47.png" /> Portal dos Indaias'
            });
var format_StioNossaSenhoraAparecida_48 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_48 = format_StioNossaSenhoraAparecida_48.readFeatures(json_StioNossaSenhoraAparecida_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StioNossaSenhoraAparecida_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_48.addFeatures(features_StioNossaSenhoraAparecida_48);
var lyr_StioNossaSenhoraAparecida_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_48, 
                style: style_StioNossaSenhoraAparecida_48,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_48.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_LoteamentosClandestinos3unid_49 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos3unid_49 = format_LoteamentosClandestinos3unid_49.readFeatures(json_LoteamentosClandestinos3unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentosClandestinos3unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos3unid_49.addFeatures(features_LoteamentosClandestinos3unid_49);
var lyr_LoteamentosClandestinos3unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos3unid_49, 
                style: style_LoteamentosClandestinos3unid_49,
                popuplayertitle: 'Loteamentos Clandestinos (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos3unid_49.png" /> Loteamentos Clandestinos (3 unid.)'
            });
var format_UBSdoResidencialPeresElias_50 = new ol.format.GeoJSON();
var features_UBSdoResidencialPeresElias_50 = format_UBSdoResidencialPeresElias_50.readFeatures(json_UBSdoResidencialPeresElias_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBSdoResidencialPeresElias_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoResidencialPeresElias_50.addFeatures(features_UBSdoResidencialPeresElias_50);
var lyr_UBSdoResidencialPeresElias_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoResidencialPeresElias_50, 
                style: style_UBSdoResidencialPeresElias_50,
                popuplayertitle: 'UBS do Residencial Peres Elias',
                interactive: true,
                title: '<img src="styles/legend/UBSdoResidencialPeresElias_50.png" /> UBS do Residencial Peres Elias'
            });
var format_UBSdoResidencialPeresElias_51 = new ol.format.GeoJSON();
var features_UBSdoResidencialPeresElias_51 = format_UBSdoResidencialPeresElias_51.readFeatures(json_UBSdoResidencialPeresElias_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBSdoResidencialPeresElias_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBSdoResidencialPeresElias_51.addFeatures(features_UBSdoResidencialPeresElias_51);
var lyr_UBSdoResidencialPeresElias_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBSdoResidencialPeresElias_51, 
                style: style_UBSdoResidencialPeresElias_51,
                popuplayertitle: 'UBS do Residencial Peres Elias',
                interactive: true,
                title: '<img src="styles/legend/UBSdoResidencialPeresElias_51.png" /> UBS do Residencial Peres Elias'
            });
var format_LoteamentosClandestinosRegularizado9unid_52 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosRegularizado9unid_52 = format_LoteamentosClandestinosRegularizado9unid_52.readFeatures(json_LoteamentosClandestinosRegularizado9unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentosClandestinosRegularizado9unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosRegularizado9unid_52.addFeatures(features_LoteamentosClandestinosRegularizado9unid_52);
var lyr_LoteamentosClandestinosRegularizado9unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosRegularizado9unid_52, 
                style: style_LoteamentosClandestinosRegularizado9unid_52,
                popuplayertitle: 'Loteamentos Clandestinos - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosRegularizado9unid_52.png" /> Loteamentos Clandestinos - Regularizado (9 unid.)'
            });
var format_LoteamentosClandestinosRegularizado9unid_53 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosRegularizado9unid_53 = format_LoteamentosClandestinosRegularizado9unid_53.readFeatures(json_LoteamentosClandestinosRegularizado9unid_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentosClandestinosRegularizado9unid_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosRegularizado9unid_53.addFeatures(features_LoteamentosClandestinosRegularizado9unid_53);
var lyr_LoteamentosClandestinosRegularizado9unid_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosRegularizado9unid_53, 
                style: style_LoteamentosClandestinosRegularizado9unid_53,
                popuplayertitle: 'Loteamentos Clandestinos - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosRegularizado9unid_53.png" /> Loteamentos Clandestinos - Regularizado (9 unid.)'
            });
var format_Vivenna_54 = new ol.format.GeoJSON();
var features_Vivenna_54 = format_Vivenna_54.readFeatures(json_Vivenna_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vivenna_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_54.addFeatures(features_Vivenna_54);
var lyr_Vivenna_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_54, 
                style: style_Vivenna_54,
                popuplayertitle: 'Vivenna',
                interactive: true,
    title: 'Vivenna<br />\
    <img src="styles/legend/Vivenna_54_0.png" /> APP<br />\
    <img src="styles/legend/Vivenna_54_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Vivenna_54_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Vivenna_54_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Vivenna_54_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Vivenna_54_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Vivenna_54_6.png" /> RUAS<br />\
    <img src="styles/legend/Vivenna_54_7.png" /> VIELA<br />' });
var format_Vivenna_55 = new ol.format.GeoJSON();
var features_Vivenna_55 = format_Vivenna_55.readFeatures(json_Vivenna_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vivenna_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivenna_55.addFeatures(features_Vivenna_55);
var lyr_Vivenna_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivenna_55, 
                style: style_Vivenna_55,
                popuplayertitle: 'Vivenna',
                interactive: true,
                title: '<img src="styles/legend/Vivenna_55.png" /> Vivenna'
            });
var format_VittaSoVicente_56 = new ol.format.GeoJSON();
var features_VittaSoVicente_56 = format_VittaSoVicente_56.readFeatures(json_VittaSoVicente_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaSoVicente_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_56.addFeatures(features_VittaSoVicente_56);
var lyr_VittaSoVicente_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_56, 
                style: style_VittaSoVicente_56,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
    title: 'Vitta São Vicente<br />\
    <img src="styles/legend/VittaSoVicente_56_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/VittaSoVicente_56_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaSoVicente_56_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaSoVicente_56_3.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaSoVicente_56_4.png" /> RUAS<br />\
    <img src="styles/legend/VittaSoVicente_56_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_VittaSoVicente_57 = new ol.format.GeoJSON();
var features_VittaSoVicente_57 = format_VittaSoVicente_57.readFeatures(json_VittaSoVicente_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaSoVicente_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaSoVicente_57.addFeatures(features_VittaSoVicente_57);
var lyr_VittaSoVicente_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaSoVicente_57, 
                style: style_VittaSoVicente_57,
                popuplayertitle: 'Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/VittaSoVicente_57.png" /> Vitta São Vicente'
            });
var format_VittaJardimSimes_58 = new ol.format.GeoJSON();
var features_VittaJardimSimes_58 = format_VittaJardimSimes_58.readFeatures(json_VittaJardimSimes_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaJardimSimes_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_58.addFeatures(features_VittaJardimSimes_58);
var lyr_VittaJardimSimes_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_58, 
                style: style_VittaJardimSimes_58,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
    title: 'Vitta Jardim Simões<br />\
    <img src="styles/legend/VittaJardimSimes_58_0.png" /> APP<br />\
    <img src="styles/legend/VittaJardimSimes_58_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaJardimSimes_58_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaJardimSimes_58_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VittaJardimSimes_58_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaJardimSimes_58_5.png" /> RUAS<br />' });
var format_VittaJardimSimes_59 = new ol.format.GeoJSON();
var features_VittaJardimSimes_59 = format_VittaJardimSimes_59.readFeatures(json_VittaJardimSimes_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaJardimSimes_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaJardimSimes_59.addFeatures(features_VittaJardimSimes_59);
var lyr_VittaJardimSimes_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaJardimSimes_59, 
                style: style_VittaJardimSimes_59,
                popuplayertitle: 'Vitta Jardim Simões',
                interactive: true,
                title: '<img src="styles/legend/VittaJardimSimes_59.png" /> Vitta Jardim Simões'
            });
var format_VittaAlvorada_60 = new ol.format.GeoJSON();
var features_VittaAlvorada_60 = format_VittaAlvorada_60.readFeatures(json_VittaAlvorada_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaAlvorada_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_60.addFeatures(features_VittaAlvorada_60);
var lyr_VittaAlvorada_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_60, 
                style: style_VittaAlvorada_60,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
    title: 'Vitta Alvorada<br />\
    <img src="styles/legend/VittaAlvorada_60_0.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/VittaAlvorada_60_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VittaAlvorada_60_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VittaAlvorada_60_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VittaAlvorada_60_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VittaAlvorada_60_5.png" /> RUAS<br />' });
var format_VittaAlvorada_61 = new ol.format.GeoJSON();
var features_VittaAlvorada_61 = format_VittaAlvorada_61.readFeatures(json_VittaAlvorada_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VittaAlvorada_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VittaAlvorada_61.addFeatures(features_VittaAlvorada_61);
var lyr_VittaAlvorada_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VittaAlvorada_61, 
                style: style_VittaAlvorada_61,
                popuplayertitle: 'Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/VittaAlvorada_61.png" /> Vitta Alvorada'
            });
var format_VilaDiEspanha_62 = new ol.format.GeoJSON();
var features_VilaDiEspanha_62 = format_VilaDiEspanha_62.readFeatures(json_VilaDiEspanha_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilaDiEspanha_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_62.addFeatures(features_VilaDiEspanha_62);
var lyr_VilaDiEspanha_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_62, 
                style: style_VilaDiEspanha_62,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
    title: 'Vila Di Espanha<br />\
    <img src="styles/legend/VilaDiEspanha_62_0.png" /> APP<br />\
    <img src="styles/legend/VilaDiEspanha_62_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VilaDiEspanha_62_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VilaDiEspanha_62_3.png" /> LOTES<br />\
    <img src="styles/legend/VilaDiEspanha_62_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VilaDiEspanha_62_5.png" /> PASSEIO<br />\
    <img src="styles/legend/VilaDiEspanha_62_6.png" /> RUAS<br />\
    <img src="styles/legend/VilaDiEspanha_62_7.png" /> VIELA<br />' });
var format_VilaDiEspanha_63 = new ol.format.GeoJSON();
var features_VilaDiEspanha_63 = format_VilaDiEspanha_63.readFeatures(json_VilaDiEspanha_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilaDiEspanha_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaDiEspanha_63.addFeatures(features_VilaDiEspanha_63);
var lyr_VilaDiEspanha_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilaDiEspanha_63, 
                style: style_VilaDiEspanha_63,
                popuplayertitle: 'Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/VilaDiEspanha_63.png" /> Vila Di Espanha'
            });
var format_VillaPucci_64 = new ol.format.GeoJSON();
var features_VillaPucci_64 = format_VillaPucci_64.readFeatures(json_VillaPucci_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaPucci_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_64.addFeatures(features_VillaPucci_64);
var lyr_VillaPucci_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_64, 
                style: style_VillaPucci_64,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
    title: 'Villa Pucci<br />\
    <img src="styles/legend/VillaPucci_64_0.png" /> APP<br />\
    <img src="styles/legend/VillaPucci_64_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaPucci_64_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaPucci_64_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/VillaPucci_64_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaPucci_64_5.png" /> LOTES<br />\
    <img src="styles/legend/VillaPucci_64_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaPucci_64_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/VillaPucci_64_8.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaPucci_64_9.png" /> RUAS<br />\
    <img src="styles/legend/VillaPucci_64_10.png" /> VIELA<br />' });
var format_VillaPucci_65 = new ol.format.GeoJSON();
var features_VillaPucci_65 = format_VillaPucci_65.readFeatures(json_VillaPucci_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaPucci_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaPucci_65.addFeatures(features_VillaPucci_65);
var lyr_VillaPucci_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaPucci_65, 
                style: style_VillaPucci_65,
                popuplayertitle: 'Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/VillaPucci_65.png" /> Villa Pucci'
            });
var format_VillaDoratta_66 = new ol.format.GeoJSON();
var features_VillaDoratta_66 = format_VillaDoratta_66.readFeatures(json_VillaDoratta_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaDoratta_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_66.addFeatures(features_VillaDoratta_66);
var lyr_VillaDoratta_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_66, 
                style: style_VillaDoratta_66,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
    title: 'Villa Doratta<br />\
    <img src="styles/legend/VillaDoratta_66_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaDoratta_66_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaDoratta_66_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaDoratta_66_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/VillaDoratta_66_4.png" /> PASSEIO<br />\
    <img src="styles/legend/VillaDoratta_66_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaDoratta_66_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/VillaDoratta_66_7.png" /> VIELA<br />\
    <img src="styles/legend/VillaDoratta_66_8.png" /> APP<br />' });
var format_VillaDoratta_67 = new ol.format.GeoJSON();
var features_VillaDoratta_67 = format_VillaDoratta_67.readFeatures(json_VillaDoratta_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaDoratta_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaDoratta_67.addFeatures(features_VillaDoratta_67);
var lyr_VillaDoratta_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaDoratta_67, 
                style: style_VillaDoratta_67,
                popuplayertitle: 'Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/VillaDoratta_67.png" /> Villa Doratta'
            });
var format_VillaBella_68 = new ol.format.GeoJSON();
var features_VillaBella_68 = format_VillaBella_68.readFeatures(json_VillaBella_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaBella_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_68.addFeatures(features_VillaBella_68);
var lyr_VillaBella_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_68, 
                style: style_VillaBella_68,
                popuplayertitle: 'Villa Bella',
                interactive: true,
    title: 'Villa Bella<br />\
    <img src="styles/legend/VillaBella_68_0.png" /> APP<br />\
    <img src="styles/legend/VillaBella_68_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/VillaBella_68_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/VillaBella_68_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/VillaBella_68_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/VillaBella_68_5.png" /> RUAS<br />\
    <img src="styles/legend/VillaBella_68_6.png" /> PASSEIO<br />' });
var format_VillaBella_69 = new ol.format.GeoJSON();
var features_VillaBella_69 = format_VillaBella_69.readFeatures(json_VillaBella_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaBella_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaBella_69.addFeatures(features_VillaBella_69);
var lyr_VillaBella_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillaBella_69, 
                style: style_VillaBella_69,
                popuplayertitle: 'Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/VillaBella_69.png" /> Villa Bella'
            });
var format_Versalhes_70 = new ol.format.GeoJSON();
var features_Versalhes_70 = format_Versalhes_70.readFeatures(json_Versalhes_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Versalhes_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_70.addFeatures(features_Versalhes_70);
var lyr_Versalhes_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_70, 
                style: style_Versalhes_70,
                popuplayertitle: 'Versalhes',
                interactive: true,
    title: 'Versalhes<br />\
    <img src="styles/legend/Versalhes_70_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Versalhes_70_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Versalhes_70_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Versalhes_70_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Versalhes_70_4.png" /> RUAS<br />\
    <img src="styles/legend/Versalhes_70_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Versalhes_71 = new ol.format.GeoJSON();
var features_Versalhes_71 = format_Versalhes_71.readFeatures(json_Versalhes_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Versalhes_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Versalhes_71.addFeatures(features_Versalhes_71);
var lyr_Versalhes_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Versalhes_71, 
                style: style_Versalhes_71,
                popuplayertitle: 'Versalhes',
                interactive: true,
                title: '<img src="styles/legend/Versalhes_71.png" /> Versalhes'
            });
var format_TorontoResidence_72 = new ol.format.GeoJSON();
var features_TorontoResidence_72 = format_TorontoResidence_72.readFeatures(json_TorontoResidence_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorontoResidence_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_72.addFeatures(features_TorontoResidence_72);
var lyr_TorontoResidence_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_72, 
                style: style_TorontoResidence_72,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
    title: 'Toronto Residence<br />\
    <img src="styles/legend/TorontoResidence_72_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/TorontoResidence_72_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/TorontoResidence_72_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/TorontoResidence_72_3.png" /> PASSEIO<br />\
    <img src="styles/legend/TorontoResidence_72_4.png" /> RUAS<br />\
    <img src="styles/legend/TorontoResidence_72_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_TorontoResidence_73 = new ol.format.GeoJSON();
var features_TorontoResidence_73 = format_TorontoResidence_73.readFeatures(json_TorontoResidence_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorontoResidence_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorontoResidence_73.addFeatures(features_TorontoResidence_73);
var lyr_TorontoResidence_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorontoResidence_73, 
                style: style_TorontoResidence_73,
                popuplayertitle: 'Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/TorontoResidence_73.png" /> Toronto Residence'
            });
var format_TerraNova_74 = new ol.format.GeoJSON();
var features_TerraNova_74 = format_TerraNova_74.readFeatures(json_TerraNova_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerraNova_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_74.addFeatures(features_TerraNova_74);
var lyr_TerraNova_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_74, 
                style: style_TerraNova_74,
                popuplayertitle: 'Terra Nova',
                interactive: true,
    title: 'Terra Nova<br />\
    <img src="styles/legend/TerraNova_74_0.png" /> APP<br />\
    <img src="styles/legend/TerraNova_74_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/TerraNova_74_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/TerraNova_74_3.png" /> LOTES<br />\
    <img src="styles/legend/TerraNova_74_4.png" /> PASSEIO<br />\
    <img src="styles/legend/TerraNova_74_5.png" /> RUAS<br />' });
var format_TerraNova_75 = new ol.format.GeoJSON();
var features_TerraNova_75 = format_TerraNova_75.readFeatures(json_TerraNova_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerraNova_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerraNova_75.addFeatures(features_TerraNova_75);
var lyr_TerraNova_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerraNova_75, 
                style: style_TerraNova_75,
                popuplayertitle: 'Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/TerraNova_75.png" /> Terra Nova'
            });
var format_Sonetto_76 = new ol.format.GeoJSON();
var features_Sonetto_76 = format_Sonetto_76.readFeatures(json_Sonetto_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sonetto_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_76.addFeatures(features_Sonetto_76);
var lyr_Sonetto_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_76, 
                style: style_Sonetto_76,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_76.png" /> Sonetto'
            });
var format_Sonetto_77 = new ol.format.GeoJSON();
var features_Sonetto_77 = format_Sonetto_77.readFeatures(json_Sonetto_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sonetto_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sonetto_77.addFeatures(features_Sonetto_77);
var lyr_Sonetto_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sonetto_77, 
                style: style_Sonetto_77,
                popuplayertitle: 'Sonetto',
                interactive: true,
                title: '<img src="styles/legend/Sonetto_77.png" /> Sonetto'
            });
var format_SMARTFRANCAEIXORESIDENCIAL2_78 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_78 = format_SMARTFRANCAEIXORESIDENCIAL2_78.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_78.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_78);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_78, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_78,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 2<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_78_7.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL2_79 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL2_79 = format_SMARTFRANCAEIXORESIDENCIAL2_79.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL2_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL2_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL2_79.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL2_79);
var lyr_SMARTFRANCAEIXORESIDENCIAL2_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL2_79, 
                style: style_SMARTFRANCAEIXORESIDENCIAL2_79,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 2',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL2_79.png" /> SMART FRANCA - EIXO RESIDENCIAL 2'
            });
var format_SMARTFRANCAEIXORESIDENCIAL1_80 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_80 = format_SMARTFRANCAEIXORESIDENCIAL1_80.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_80.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_80);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_80, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_80,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
    title: 'SMART FRANCA - EIXO RESIDENCIAL 1<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_0.png" /> APP<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_7.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_80_8.png" /> RUAS<br />' });
var format_SMARTFRANCAEIXORESIDENCIAL1_81 = new ol.format.GeoJSON();
var features_SMARTFRANCAEIXORESIDENCIAL1_81 = format_SMARTFRANCAEIXORESIDENCIAL1_81.readFeatures(json_SMARTFRANCAEIXORESIDENCIAL1_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTFRANCAEIXORESIDENCIAL1_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTFRANCAEIXORESIDENCIAL1_81.addFeatures(features_SMARTFRANCAEIXORESIDENCIAL1_81);
var lyr_SMARTFRANCAEIXORESIDENCIAL1_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTFRANCAEIXORESIDENCIAL1_81, 
                style: style_SMARTFRANCAEIXORESIDENCIAL1_81,
                popuplayertitle: 'SMART FRANCA - EIXO RESIDENCIAL 1',
                interactive: true,
                title: '<img src="styles/legend/SMARTFRANCAEIXORESIDENCIAL1_81.png" /> SMART FRANCA - EIXO RESIDENCIAL 1'
            });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_82 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_82 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_82.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_82.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_82);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_82, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_82,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
    title: 'SMART CITY FRANCA - EIXO EMPRESARIAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_0.png" /> APP<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_6.png" /> PASSEIO<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_7.png" /> RUAS<br />\
    <img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_82_8.png" /> VIELA<br />' });
var format_SMARTCITYFRANCAEIXOEMPRESARIAL_83 = new ol.format.GeoJSON();
var features_SMARTCITYFRANCAEIXOEMPRESARIAL_83 = format_SMARTCITYFRANCAEIXOEMPRESARIAL_83.readFeatures(json_SMARTCITYFRANCAEIXOEMPRESARIAL_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_83.addFeatures(features_SMARTCITYFRANCAEIXOEMPRESARIAL_83);
var lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMARTCITYFRANCAEIXOEMPRESARIAL_83, 
                style: style_SMARTCITYFRANCAEIXOEMPRESARIAL_83,
                popuplayertitle: 'SMART CITY FRANCA - EIXO EMPRESARIAL',
                interactive: true,
                title: '<img src="styles/legend/SMARTCITYFRANCAEIXOEMPRESARIAL_83.png" /> SMART CITY FRANCA - EIXO EMPRESARIAL'
            });
var format_ServidoRamal138kVFranca4Guanabara_84 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_84 = format_ServidoRamal138kVFranca4Guanabara_84.readFeatures(json_ServidoRamal138kVFranca4Guanabara_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_84.addFeatures(features_ServidoRamal138kVFranca4Guanabara_84);
var lyr_ServidoRamal138kVFranca4Guanabara_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_84, 
                style: style_ServidoRamal138kVFranca4Guanabara_84,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_84.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_85 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_85 = format_ServidoRamal138kVFranca4Guanabara_85.readFeatures(json_ServidoRamal138kVFranca4Guanabara_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_85.addFeatures(features_ServidoRamal138kVFranca4Guanabara_85);
var lyr_ServidoRamal138kVFranca4Guanabara_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_85, 
                style: style_ServidoRamal138kVFranca4Guanabara_85,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_85.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_SantaLina_86 = new ol.format.GeoJSON();
var features_SantaLina_86 = format_SantaLina_86.readFeatures(json_SantaLina_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaLina_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_86.addFeatures(features_SantaLina_86);
var lyr_SantaLina_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_86, 
                style: style_SantaLina_86,
                popuplayertitle: 'Santa Lina',
                interactive: true,
    title: 'Santa Lina<br />\
    <img src="styles/legend/SantaLina_86_0.png" /> LOTES<br />\
    <img src="styles/legend/SantaLina_86_1.png" /> PASSEIO<br />\
    <img src="styles/legend/SantaLina_86_2.png" /> RUAS<br />' });
var format_SantaLina_87 = new ol.format.GeoJSON();
var features_SantaLina_87 = format_SantaLina_87.readFeatures(json_SantaLina_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaLina_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaLina_87.addFeatures(features_SantaLina_87);
var lyr_SantaLina_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaLina_87, 
                style: style_SantaLina_87,
                popuplayertitle: 'Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/SantaLina_87.png" /> Santa Lina'
            });
var format_SantAnita_88 = new ol.format.GeoJSON();
var features_SantAnita_88 = format_SantAnita_88.readFeatures(json_SantAnita_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAnita_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_88.addFeatures(features_SantAnita_88);
var lyr_SantAnita_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_88, 
                style: style_SantAnita_88,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_88.png" /> Sant\'Anita'
            });
var format_SantAnita_89 = new ol.format.GeoJSON();
var features_SantAnita_89 = format_SantAnita_89.readFeatures(json_SantAnita_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAnita_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAnita_89.addFeatures(features_SantAnita_89);
var lyr_SantAnita_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAnita_89, 
                style: style_SantAnita_89,
                popuplayertitle: 'Sant\'Anita',
                interactive: true,
                title: '<img src="styles/legend/SantAnita_89.png" /> Sant\'Anita'
            });
var format_RuaAlfioBenedini_90 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_90 = format_RuaAlfioBenedini_90.readFeatures(json_RuaAlfioBenedini_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuaAlfioBenedini_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_90.addFeatures(features_RuaAlfioBenedini_90);
var lyr_RuaAlfioBenedini_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_90, 
                style: style_RuaAlfioBenedini_90,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_90.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_91 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_91 = format_RuaAlfioBenedini_91.readFeatures(json_RuaAlfioBenedini_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuaAlfioBenedini_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_91.addFeatures(features_RuaAlfioBenedini_91);
var lyr_RuaAlfioBenedini_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_91, 
                style: style_RuaAlfioBenedini_91,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_91.png" /> Rua Alfio Benedini'
            });
var format_RuaAlfioBenedini_92 = new ol.format.GeoJSON();
var features_RuaAlfioBenedini_92 = format_RuaAlfioBenedini_92.readFeatures(json_RuaAlfioBenedini_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuaAlfioBenedini_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuaAlfioBenedini_92.addFeatures(features_RuaAlfioBenedini_92);
var lyr_RuaAlfioBenedini_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuaAlfioBenedini_92, 
                style: style_RuaAlfioBenedini_92,
                popuplayertitle: 'Rua Alfio Benedini',
                interactive: true,
                title: '<img src="styles/legend/RuaAlfioBenedini_92.png" /> Rua Alfio Benedini'
            });
var format_ResidencialValeVerde_93 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_93 = format_ResidencialValeVerde_93.readFeatures(json_ResidencialValeVerde_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialValeVerde_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_93.addFeatures(features_ResidencialValeVerde_93);
var lyr_ResidencialValeVerde_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_93, 
                style: style_ResidencialValeVerde_93,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
    title: 'Residencial Vale Verde<br />\
    <img src="styles/legend/ResidencialValeVerde_93_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialValeVerde_93_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialValeVerde_93_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialValeVerde_93_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialValeVerde_93_4.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialValeVerde_93_5.png" /> PASSEIO<br />' });
var format_ResidencialValeVerde_94 = new ol.format.GeoJSON();
var features_ResidencialValeVerde_94 = format_ResidencialValeVerde_94.readFeatures(json_ResidencialValeVerde_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialValeVerde_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialValeVerde_94.addFeatures(features_ResidencialValeVerde_94);
var lyr_ResidencialValeVerde_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialValeVerde_94, 
                style: style_ResidencialValeVerde_94,
                popuplayertitle: 'Residencial Vale Verde',
                interactive: true,
                title: '<img src="styles/legend/ResidencialValeVerde_94.png" /> Residencial Vale Verde'
            });
var format_ResidencialYasminTorres_95 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_95 = format_ResidencialYasminTorres_95.readFeatures(json_ResidencialYasminTorres_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialYasminTorres_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_95.addFeatures(features_ResidencialYasminTorres_95);
var lyr_ResidencialYasminTorres_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_95, 
                style: style_ResidencialYasminTorres_95,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_95.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialYasminTorres_96 = new ol.format.GeoJSON();
var features_ResidencialYasminTorres_96 = format_ResidencialYasminTorres_96.readFeatures(json_ResidencialYasminTorres_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialYasminTorres_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialYasminTorres_96.addFeatures(features_ResidencialYasminTorres_96);
var lyr_ResidencialYasminTorres_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialYasminTorres_96, 
                style: style_ResidencialYasminTorres_96,
                popuplayertitle: 'Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/ResidencialYasminTorres_96.png" /> Residencial Yasmin Torres'
            });
var format_ResidencialSoCarlosII_97 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_97 = format_ResidencialSoCarlosII_97.readFeatures(json_ResidencialSoCarlosII_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSoCarlosII_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_97.addFeatures(features_ResidencialSoCarlosII_97);
var lyr_ResidencialSoCarlosII_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_97, 
                style: style_ResidencialSoCarlosII_97,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
    title: 'Residencial São Carlos II<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosII_97_5.png" /> RUAS<br />' });
var format_ResidencialSoCarlosII_98 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosII_98 = format_ResidencialSoCarlosII_98.readFeatures(json_ResidencialSoCarlosII_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSoCarlosII_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosII_98.addFeatures(features_ResidencialSoCarlosII_98);
var lyr_ResidencialSoCarlosII_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosII_98, 
                style: style_ResidencialSoCarlosII_98,
                popuplayertitle: 'Residencial São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosII_98.png" /> Residencial São Carlos II'
            });
var format_ResidencialSoCarlosI_99 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_99 = format_ResidencialSoCarlosI_99.readFeatures(json_ResidencialSoCarlosI_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSoCarlosI_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_99.addFeatures(features_ResidencialSoCarlosI_99);
var lyr_ResidencialSoCarlosI_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_99, 
                style: style_ResidencialSoCarlosI_99,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
    title: 'Residencial São Carlos I<br />\
    <img src="styles/legend/ResidencialSoCarlosI_99_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSoCarlosI_99_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSoCarlosI_99_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialSoCarlosI_99_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSoCarlosI_99_4.png" /> RUAS<br />' });
var format_ResidencialSoCarlosI_100 = new ol.format.GeoJSON();
var features_ResidencialSoCarlosI_100 = format_ResidencialSoCarlosI_100.readFeatures(json_ResidencialSoCarlosI_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSoCarlosI_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSoCarlosI_100.addFeatures(features_ResidencialSoCarlosI_100);
var lyr_ResidencialSoCarlosI_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSoCarlosI_100, 
                style: style_ResidencialSoCarlosI_100,
                popuplayertitle: 'Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSoCarlosI_100.png" /> Residencial São Carlos I'
            });
var format_ResidencialSantaIns_101 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_101 = format_ResidencialSantaIns_101.readFeatures(json_ResidencialSantaIns_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSantaIns_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_101.addFeatures(features_ResidencialSantaIns_101);
var lyr_ResidencialSantaIns_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_101, 
                style: style_ResidencialSantaIns_101,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
    title: 'Residencial Santa Inês<br />\
    <img src="styles/legend/ResidencialSantaIns_101_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaIns_101_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialSantaIns_101_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaIns_101_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialSantaIns_101_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaIns_101_5.png" /> RUAS<br />' });
var format_ResidencialSantaIns_102 = new ol.format.GeoJSON();
var features_ResidencialSantaIns_102 = format_ResidencialSantaIns_102.readFeatures(json_ResidencialSantaIns_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSantaIns_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaIns_102.addFeatures(features_ResidencialSantaIns_102);
var lyr_ResidencialSantaIns_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaIns_102, 
                style: style_ResidencialSantaIns_102,
                popuplayertitle: 'Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaIns_102.png" /> Residencial Santa Inês'
            });
var format_ResidencialSantaF_103 = new ol.format.GeoJSON();
var features_ResidencialSantaF_103 = format_ResidencialSantaF_103.readFeatures(json_ResidencialSantaF_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSantaF_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_103.addFeatures(features_ResidencialSantaF_103);
var lyr_ResidencialSantaF_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_103, 
                style: style_ResidencialSantaF_103,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
    title: 'Residencial Santa Fé<br />\
    <img src="styles/legend/ResidencialSantaF_103_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialSantaF_103_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialSantaF_103_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialSantaF_103_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialSantaF_103_4.png" /> RUAS<br />' });
var format_ResidencialSantaF_104 = new ol.format.GeoJSON();
var features_ResidencialSantaF_104 = format_ResidencialSantaF_104.readFeatures(json_ResidencialSantaF_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialSantaF_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialSantaF_104.addFeatures(features_ResidencialSantaF_104);
var lyr_ResidencialSantaF_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialSantaF_104, 
                style: style_ResidencialSantaF_104,
                popuplayertitle: 'Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/ResidencialSantaF_104.png" /> Residencial Santa Fé'
            });
var format_ResidencialQuintadosOitis_105 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_105 = format_ResidencialQuintadosOitis_105.readFeatures(json_ResidencialQuintadosOitis_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialQuintadosOitis_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_105.addFeatures(features_ResidencialQuintadosOitis_105);
var lyr_ResidencialQuintadosOitis_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_105, 
                style: style_ResidencialQuintadosOitis_105,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_105_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_105_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_105_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_105_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadosOitis_105_4.png" /> RUAS<br />' });
var format_ResidencialQuintadosOitis_106 = new ol.format.GeoJSON();
var features_ResidencialQuintadosOitis_106 = format_ResidencialQuintadosOitis_106.readFeatures(json_ResidencialQuintadosOitis_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialQuintadosOitis_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadosOitis_106.addFeatures(features_ResidencialQuintadosOitis_106);
var lyr_ResidencialQuintadosOitis_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadosOitis_106, 
                style: style_ResidencialQuintadosOitis_106,
                popuplayertitle: 'Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadosOitis_106.png" /> Residencial Quinta dos Oitis'
            });
var format_ResidencialQuintadoSol_107 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_107 = format_ResidencialQuintadoSol_107.readFeatures(json_ResidencialQuintadoSol_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialQuintadoSol_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_107.addFeatures(features_ResidencialQuintadoSol_107);
var lyr_ResidencialQuintadoSol_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_107, 
                style: style_ResidencialQuintadoSol_107,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
    title: 'Residencial Quinta do Sol<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialQuintadoSol_107_6.png" /> RUAS<br />' });
var format_ResidencialQuintadoSol_108 = new ol.format.GeoJSON();
var features_ResidencialQuintadoSol_108 = format_ResidencialQuintadoSol_108.readFeatures(json_ResidencialQuintadoSol_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialQuintadoSol_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialQuintadoSol_108.addFeatures(features_ResidencialQuintadoSol_108);
var lyr_ResidencialQuintadoSol_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialQuintadoSol_108, 
                style: style_ResidencialQuintadoSol_108,
                popuplayertitle: 'Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/ResidencialQuintadoSol_108.png" /> Residencial Quinta do Sol'
            });
var format_ResidencialPousoAlegreII_109 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_109 = format_ResidencialPousoAlegreII_109.readFeatures(json_ResidencialPousoAlegreII_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialPousoAlegreII_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_109.addFeatures(features_ResidencialPousoAlegreII_109);
var lyr_ResidencialPousoAlegreII_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_109, 
                style: style_ResidencialPousoAlegreII_109,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
    title: 'Residencial Pouso Alegre II<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegreII_109_7.png" /> SERVIDAO<br />' });
var format_ResidencialPousoAlegreII_110 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegreII_110 = format_ResidencialPousoAlegreII_110.readFeatures(json_ResidencialPousoAlegreII_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialPousoAlegreII_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegreII_110.addFeatures(features_ResidencialPousoAlegreII_110);
var lyr_ResidencialPousoAlegreII_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegreII_110, 
                style: style_ResidencialPousoAlegreII_110,
                popuplayertitle: 'Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegreII_110.png" /> Residencial Pouso Alegre II'
            });
var format_ResidencialPousoAlegre_111 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_111 = format_ResidencialPousoAlegre_111.readFeatures(json_ResidencialPousoAlegre_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialPousoAlegre_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_111.addFeatures(features_ResidencialPousoAlegre_111);
var lyr_ResidencialPousoAlegre_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_111, 
                style: style_ResidencialPousoAlegre_111,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
    title: 'Residencial Pouso Alegre<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_6.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialPousoAlegre_111_7.png" /> VIELA<br />' });
var format_ResidencialPousoAlegre_112 = new ol.format.GeoJSON();
var features_ResidencialPousoAlegre_112 = format_ResidencialPousoAlegre_112.readFeatures(json_ResidencialPousoAlegre_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialPousoAlegre_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialPousoAlegre_112.addFeatures(features_ResidencialPousoAlegre_112);
var lyr_ResidencialPousoAlegre_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialPousoAlegre_112, 
                style: style_ResidencialPousoAlegre_112,
                popuplayertitle: 'Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/ResidencialPousoAlegre_112.png" /> Residencial Pouso Alegre'
            });
var format_ResicencialNairRetuciII_113 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_113 = format_ResicencialNairRetuciII_113.readFeatures(json_ResicencialNairRetuciII_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResicencialNairRetuciII_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_113.addFeatures(features_ResicencialNairRetuciII_113);
var lyr_ResicencialNairRetuciII_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_113, 
                style: style_ResicencialNairRetuciII_113,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
    title: 'Resicencial Nair Retuci II<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_0.png" /> APP<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuciII_113_6.png" /> RUAS<br />' });
var format_ResicencialNairRetuciII_114 = new ol.format.GeoJSON();
var features_ResicencialNairRetuciII_114 = format_ResicencialNairRetuciII_114.readFeatures(json_ResicencialNairRetuciII_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResicencialNairRetuciII_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuciII_114.addFeatures(features_ResicencialNairRetuciII_114);
var lyr_ResicencialNairRetuciII_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuciII_114, 
                style: style_ResicencialNairRetuciII_114,
                popuplayertitle: 'Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuciII_114.png" /> Resicencial Nair Retuci II'
            });
var format_ResicencialNairRetuci_115 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_115 = format_ResicencialNairRetuci_115.readFeatures(json_ResicencialNairRetuci_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResicencialNairRetuci_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_115.addFeatures(features_ResicencialNairRetuci_115);
var lyr_ResicencialNairRetuci_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_115, 
                style: style_ResicencialNairRetuci_115,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
    title: 'Resicencial Nair Retuci<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResicencialNairRetuci_115_5.png" /> RUAS<br />' });
var format_ResicencialNairRetuci_116 = new ol.format.GeoJSON();
var features_ResicencialNairRetuci_116 = format_ResicencialNairRetuci_116.readFeatures(json_ResicencialNairRetuci_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResicencialNairRetuci_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResicencialNairRetuci_116.addFeatures(features_ResicencialNairRetuci_116);
var lyr_ResicencialNairRetuci_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResicencialNairRetuci_116, 
                style: style_ResicencialNairRetuci_116,
                popuplayertitle: 'Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/ResicencialNairRetuci_116.png" /> Resicencial Nair Retuci'
            });
var format_ResidencialMoradadoBosque_117 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_117 = format_ResidencialMoradadoBosque_117.readFeatures(json_ResidencialMoradadoBosque_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMoradadoBosque_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_117.addFeatures(features_ResidencialMoradadoBosque_117);
var lyr_ResidencialMoradadoBosque_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_117, 
                style: style_ResidencialMoradadoBosque_117,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
    title: 'Residencial Morada do Bosque<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMoradadoBosque_117_6.png" /> RUAS<br />' });
var format_ResidencialMoradadoBosque_118 = new ol.format.GeoJSON();
var features_ResidencialMoradadoBosque_118 = format_ResidencialMoradadoBosque_118.readFeatures(json_ResidencialMoradadoBosque_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMoradadoBosque_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMoradadoBosque_118.addFeatures(features_ResidencialMoradadoBosque_118);
var lyr_ResidencialMoradadoBosque_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMoradadoBosque_118, 
                style: style_ResidencialMoradadoBosque_118,
                popuplayertitle: 'Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMoradadoBosque_118.png" /> Residencial Morada do Bosque'
            });
var format_ResidencialMarthaHelena_119 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_119 = format_ResidencialMarthaHelena_119.readFeatures(json_ResidencialMarthaHelena_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMarthaHelena_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_119.addFeatures(features_ResidencialMarthaHelena_119);
var lyr_ResidencialMarthaHelena_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_119, 
                style: style_ResidencialMarthaHelena_119,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_119.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarthaHelena_120 = new ol.format.GeoJSON();
var features_ResidencialMarthaHelena_120 = format_ResidencialMarthaHelena_120.readFeatures(json_ResidencialMarthaHelena_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMarthaHelena_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarthaHelena_120.addFeatures(features_ResidencialMarthaHelena_120);
var lyr_ResidencialMarthaHelena_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarthaHelena_120, 
                style: style_ResidencialMarthaHelena_120,
                popuplayertitle: 'Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarthaHelena_120.png" /> Residencial Martha Helena'
            });
var format_ResidencialMarioTasso_121 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_121 = format_ResidencialMarioTasso_121.readFeatures(json_ResidencialMarioTasso_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMarioTasso_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_121.addFeatures(features_ResidencialMarioTasso_121);
var lyr_ResidencialMarioTasso_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_121, 
                style: style_ResidencialMarioTasso_121,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
    title: 'Residencial Mario Tasso<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialMarioTasso_121_5.png" /> RUAS<br />' });
var format_ResidencialMarioTasso_122 = new ol.format.GeoJSON();
var features_ResidencialMarioTasso_122 = format_ResidencialMarioTasso_122.readFeatures(json_ResidencialMarioTasso_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialMarioTasso_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialMarioTasso_122.addFeatures(features_ResidencialMarioTasso_122);
var lyr_ResidencialMarioTasso_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialMarioTasso_122, 
                style: style_ResidencialMarioTasso_122,
                popuplayertitle: 'Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialMarioTasso_122.png" /> Residencial Mario Tasso'
            });
var format_ResidencialJardimCanada_123 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_123 = format_ResidencialJardimCanada_123.readFeatures(json_ResidencialJardimCanada_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialJardimCanada_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_123.addFeatures(features_ResidencialJardimCanada_123);
var lyr_ResidencialJardimCanada_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_123, 
                style: style_ResidencialJardimCanada_123,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_123.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJardimCanada_124 = new ol.format.GeoJSON();
var features_ResidencialJardimCanada_124 = format_ResidencialJardimCanada_124.readFeatures(json_ResidencialJardimCanada_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialJardimCanada_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJardimCanada_124.addFeatures(features_ResidencialJardimCanada_124);
var lyr_ResidencialJardimCanada_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJardimCanada_124, 
                style: style_ResidencialJardimCanada_124,
                popuplayertitle: 'Residencial Jardim Canada',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJardimCanada_124.png" /> Residencial Jardim Canada'
            });
var format_ResidencialJabuticabeiras_125 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_125 = format_ResidencialJabuticabeiras_125.readFeatures(json_ResidencialJabuticabeiras_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialJabuticabeiras_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_125.addFeatures(features_ResidencialJabuticabeiras_125);
var lyr_ResidencialJabuticabeiras_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_125, 
                style: style_ResidencialJabuticabeiras_125,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
    title: 'Residencial Jabuticabeiras<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialJabuticabeiras_125_6.png" /> VIELA<br />' });
var format_ResidencialJabuticabeiras_126 = new ol.format.GeoJSON();
var features_ResidencialJabuticabeiras_126 = format_ResidencialJabuticabeiras_126.readFeatures(json_ResidencialJabuticabeiras_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialJabuticabeiras_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialJabuticabeiras_126.addFeatures(features_ResidencialJabuticabeiras_126);
var lyr_ResidencialJabuticabeiras_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialJabuticabeiras_126, 
                style: style_ResidencialJabuticabeiras_126,
                popuplayertitle: 'Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/ResidencialJabuticabeiras_126.png" /> Residencial Jabuticabeiras'
            });
var format_ResidencialFrutuoso_127 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_127 = format_ResidencialFrutuoso_127.readFeatures(json_ResidencialFrutuoso_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialFrutuoso_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_127.addFeatures(features_ResidencialFrutuoso_127);
var lyr_ResidencialFrutuoso_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_127, 
                style: style_ResidencialFrutuoso_127,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
    title: 'Residencial Frutuoso<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialFrutuoso_127_6.png" /> RUAS<br />' });
var format_ResidencialFrutuoso_128 = new ol.format.GeoJSON();
var features_ResidencialFrutuoso_128 = format_ResidencialFrutuoso_128.readFeatures(json_ResidencialFrutuoso_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialFrutuoso_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialFrutuoso_128.addFeatures(features_ResidencialFrutuoso_128);
var lyr_ResidencialFrutuoso_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialFrutuoso_128, 
                style: style_ResidencialFrutuoso_128,
                popuplayertitle: 'Residencial Frutuoso',
                interactive: true,
                title: '<img src="styles/legend/ResidencialFrutuoso_128.png" /> Residencial Frutuoso'
            });
var format_ResidencialEssenza_129 = new ol.format.GeoJSON();
var features_ResidencialEssenza_129 = format_ResidencialEssenza_129.readFeatures(json_ResidencialEssenza_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialEssenza_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_129.addFeatures(features_ResidencialEssenza_129);
var lyr_ResidencialEssenza_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_129, 
                style: style_ResidencialEssenza_129,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
    title: 'Residencial Essenza<br />\
    <img src="styles/legend/ResidencialEssenza_129_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialEssenza_129_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialEssenza_129_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialEssenza_129_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialEssenza_129_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialEssenza_129_5.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialEssenza_129_6.png" /> PASSEIO<br />' });
var format_ResidencialEssenza_130 = new ol.format.GeoJSON();
var features_ResidencialEssenza_130 = format_ResidencialEssenza_130.readFeatures(json_ResidencialEssenza_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialEssenza_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialEssenza_130.addFeatures(features_ResidencialEssenza_130);
var lyr_ResidencialEssenza_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialEssenza_130, 
                style: style_ResidencialEssenza_130,
                popuplayertitle: 'Residencial Essenza',
                interactive: true,
                title: '<img src="styles/legend/ResidencialEssenza_130.png" /> Residencial Essenza'
            });
var format_ResidencialDomingosJardini_131 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_131 = format_ResidencialDomingosJardini_131.readFeatures(json_ResidencialDomingosJardini_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialDomingosJardini_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_131.addFeatures(features_ResidencialDomingosJardini_131);
var lyr_ResidencialDomingosJardini_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_131, 
                style: style_ResidencialDomingosJardini_131,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
    title: 'Residencial Domingos Jardini<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialDomingosJardini_131_5.png" /> RUAS<br />' });
var format_ResidencialDomingosJardini_132 = new ol.format.GeoJSON();
var features_ResidencialDomingosJardini_132 = format_ResidencialDomingosJardini_132.readFeatures(json_ResidencialDomingosJardini_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialDomingosJardini_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialDomingosJardini_132.addFeatures(features_ResidencialDomingosJardini_132);
var lyr_ResidencialDomingosJardini_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialDomingosJardini_132, 
                style: style_ResidencialDomingosJardini_132,
                popuplayertitle: 'Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/ResidencialDomingosJardini_132.png" /> Residencial Domingos Jardini'
            });
var format_ResidencialCintraAlves_133 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_133 = format_ResidencialCintraAlves_133.readFeatures(json_ResidencialCintraAlves_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialCintraAlves_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_133.addFeatures(features_ResidencialCintraAlves_133);
var lyr_ResidencialCintraAlves_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_133, 
                style: style_ResidencialCintraAlves_133,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
    title: 'Residencial Cintra Alves<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_4.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_6.png" /> RUAS<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_7.png" /> SERVIDAO<br />\
    <img src="styles/legend/ResidencialCintraAlves_133_8.png" /> VIELA<br />' });
var format_ResidencialCintraAlves_134 = new ol.format.GeoJSON();
var features_ResidencialCintraAlves_134 = format_ResidencialCintraAlves_134.readFeatures(json_ResidencialCintraAlves_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialCintraAlves_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialCintraAlves_134.addFeatures(features_ResidencialCintraAlves_134);
var lyr_ResidencialCintraAlves_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialCintraAlves_134, 
                style: style_ResidencialCintraAlves_134,
                popuplayertitle: 'Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/ResidencialCintraAlves_134.png" /> Residencial Cintra Alves'
            });
var format_ResidencialBoaVista_135 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_135 = format_ResidencialBoaVista_135.readFeatures(json_ResidencialBoaVista_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialBoaVista_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_135.addFeatures(features_ResidencialBoaVista_135);
var lyr_ResidencialBoaVista_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_135, 
                style: style_ResidencialBoaVista_135,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
    title: 'Residencial Boa Vista<br />\
    <img src="styles/legend/ResidencialBoaVista_135_0.png" /> APP<br />\
    <img src="styles/legend/ResidencialBoaVista_135_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialBoaVista_135_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialBoaVista_135_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialBoaVista_135_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ResidencialBoaVista_135_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ResidencialBoaVista_135_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialBoaVista_135_7.png" /> RUAS<br />' });
var format_ResidencialBoaVista_136 = new ol.format.GeoJSON();
var features_ResidencialBoaVista_136 = format_ResidencialBoaVista_136.readFeatures(json_ResidencialBoaVista_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialBoaVista_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialBoaVista_136.addFeatures(features_ResidencialBoaVista_136);
var lyr_ResidencialBoaVista_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialBoaVista_136, 
                style: style_ResidencialBoaVista_136,
                popuplayertitle: 'Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/ResidencialBoaVista_136.png" /> Residencial Boa Vista'
            });
var format_ResidencialAltodaFazenda_137 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_137 = format_ResidencialAltodaFazenda_137.readFeatures(json_ResidencialAltodaFazenda_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialAltodaFazenda_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_137.addFeatures(features_ResidencialAltodaFazenda_137);
var lyr_ResidencialAltodaFazenda_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_137, 
                style: style_ResidencialAltodaFazenda_137,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
    title: 'Residencial Alto da Fazenda<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_3.png" /> LOTES<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ResidencialAltodaFazenda_137_5.png" /> RUAS<br />' });
var format_ResidencialAltodaFazenda_138 = new ol.format.GeoJSON();
var features_ResidencialAltodaFazenda_138 = format_ResidencialAltodaFazenda_138.readFeatures(json_ResidencialAltodaFazenda_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidencialAltodaFazenda_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidencialAltodaFazenda_138.addFeatures(features_ResidencialAltodaFazenda_138);
var lyr_ResidencialAltodaFazenda_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidencialAltodaFazenda_138, 
                style: style_ResidencialAltodaFazenda_138,
                popuplayertitle: 'Residencial Alto da Fazenda',
                interactive: true,
                title: '<img src="styles/legend/ResidencialAltodaFazenda_138.png" /> Residencial Alto da Fazenda'
            });
var format_RecantoMeneghetti_139 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_139 = format_RecantoMeneghetti_139.readFeatures(json_RecantoMeneghetti_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecantoMeneghetti_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_139.addFeatures(features_RecantoMeneghetti_139);
var lyr_RecantoMeneghetti_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_139, 
                style: style_RecantoMeneghetti_139,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
    title: 'Recanto Meneghetti<br />\
    <img src="styles/legend/RecantoMeneghetti_139_0.png" /> APP<br />\
    <img src="styles/legend/RecantoMeneghetti_139_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/RecantoMeneghetti_139_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/RecantoMeneghetti_139_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/RecantoMeneghetti_139_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/RecantoMeneghetti_139_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/RecantoMeneghetti_139_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/RecantoMeneghetti_139_7.png" /> PASSEIO<br />\
    <img src="styles/legend/RecantoMeneghetti_139_8.png" /> RUAS<br />\
    <img src="styles/legend/RecantoMeneghetti_139_9.png" /> VIELA<br />' });
var format_RecantoMeneghetti_140 = new ol.format.GeoJSON();
var features_RecantoMeneghetti_140 = format_RecantoMeneghetti_140.readFeatures(json_RecantoMeneghetti_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecantoMeneghetti_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoMeneghetti_140.addFeatures(features_RecantoMeneghetti_140);
var lyr_RecantoMeneghetti_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoMeneghetti_140, 
                style: style_RecantoMeneghetti_140,
                popuplayertitle: 'Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/RecantoMeneghetti_140.png" /> Recanto Meneghetti'
            });
var format_Quadra18VilaExposio_141 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_141 = format_Quadra18VilaExposio_141.readFeatures(json_Quadra18VilaExposio_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quadra18VilaExposio_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_141.addFeatures(features_Quadra18VilaExposio_141);
var lyr_Quadra18VilaExposio_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_141, 
                style: style_Quadra18VilaExposio_141,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
    title: 'Quadra 18 Vila Exposição<br />\
    <img src="styles/legend/Quadra18VilaExposio_141_0.png" /> LOTES<br />\
    <img src="styles/legend/Quadra18VilaExposio_141_1.png" /> RUAS<br />\
    <img src="styles/legend/Quadra18VilaExposio_141_2.png" /> PASSEIO<br />' });
var format_Quadra18VilaExposio_142 = new ol.format.GeoJSON();
var features_Quadra18VilaExposio_142 = format_Quadra18VilaExposio_142.readFeatures(json_Quadra18VilaExposio_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quadra18VilaExposio_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quadra18VilaExposio_142.addFeatures(features_Quadra18VilaExposio_142);
var lyr_Quadra18VilaExposio_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quadra18VilaExposio_142, 
                style: style_Quadra18VilaExposio_142,
                popuplayertitle: 'Quadra 18 Vila Exposição',
                interactive: true,
                title: '<img src="styles/legend/Quadra18VilaExposio_142.png" /> Quadra 18 Vila Exposição'
            });
var format_ProlongamentoSamelPark_143 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_143 = format_ProlongamentoSamelPark_143.readFeatures(json_ProlongamentoSamelPark_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProlongamentoSamelPark_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_143.addFeatures(features_ProlongamentoSamelPark_143);
var lyr_ProlongamentoSamelPark_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_143, 
                style: style_ProlongamentoSamelPark_143,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
    title: 'Prolongamento Samel Park<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_0.png" /> APP<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_6.png" /> RUAS<br />\
    <img src="styles/legend/ProlongamentoSamelPark_143_7.png" /> PASSEIO<br />' });
var format_ProlongamentoSamelPark_144 = new ol.format.GeoJSON();
var features_ProlongamentoSamelPark_144 = format_ProlongamentoSamelPark_144.readFeatures(json_ProlongamentoSamelPark_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProlongamentoSamelPark_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProlongamentoSamelPark_144.addFeatures(features_ProlongamentoSamelPark_144);
var lyr_ProlongamentoSamelPark_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProlongamentoSamelPark_144, 
                style: style_ProlongamentoSamelPark_144,
                popuplayertitle: 'Prolongamento Samel Park',
                interactive: true,
                title: '<img src="styles/legend/ProlongamentoSamelPark_144.png" /> Prolongamento Samel Park'
            });
var format_ParqueVillaLobos_145 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_145 = format_ParqueVillaLobos_145.readFeatures(json_ParqueVillaLobos_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueVillaLobos_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_145.addFeatures(features_ParqueVillaLobos_145);
var lyr_ParqueVillaLobos_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_145, 
                style: style_ParqueVillaLobos_145,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
    title: 'Parque Villa-Lobos<br />\
    <img src="styles/legend/ParqueVillaLobos_145_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueVillaLobos_145_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueVillaLobos_145_2.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_145_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueVillaLobos_145_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueVillaLobos_145_5.png" /> RUAS<br />' });
var format_ParqueVillaLobos_146 = new ol.format.GeoJSON();
var features_ParqueVillaLobos_146 = format_ParqueVillaLobos_146.readFeatures(json_ParqueVillaLobos_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueVillaLobos_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueVillaLobos_146.addFeatures(features_ParqueVillaLobos_146);
var lyr_ParqueVillaLobos_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueVillaLobos_146, 
                style: style_ParqueVillaLobos_146,
                popuplayertitle: 'Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/ParqueVillaLobos_146.png" /> Parque Villa-Lobos'
            });
var format_ParquePalmeiraImperial_147 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_147 = format_ParquePalmeiraImperial_147.readFeatures(json_ParquePalmeiraImperial_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquePalmeiraImperial_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_147.addFeatures(features_ParquePalmeiraImperial_147);
var lyr_ParquePalmeiraImperial_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_147, 
                style: style_ParquePalmeiraImperial_147,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
    title: 'Parque Palmeira Imperial<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_0.png" /> APP<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_5.png" /> LOTES<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquePalmeiraImperial_147_7.png" /> RUAS<br />' });
var format_ParquePalmeiraImperial_148 = new ol.format.GeoJSON();
var features_ParquePalmeiraImperial_148 = format_ParquePalmeiraImperial_148.readFeatures(json_ParquePalmeiraImperial_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquePalmeiraImperial_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquePalmeiraImperial_148.addFeatures(features_ParquePalmeiraImperial_148);
var lyr_ParquePalmeiraImperial_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquePalmeiraImperial_148, 
                style: style_ParquePalmeiraImperial_148,
                popuplayertitle: 'Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/ParquePalmeiraImperial_148.png" /> Parque Palmeira Imperial'
            });
var format_ParqueJacarand_149 = new ol.format.GeoJSON();
var features_ParqueJacarand_149 = format_ParqueJacarand_149.readFeatures(json_ParqueJacarand_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueJacarand_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_149.addFeatures(features_ParqueJacarand_149);
var lyr_ParqueJacarand_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_149, 
                style: style_ParqueJacarand_149,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
    title: 'Parque Jacarandá<br />\
    <img src="styles/legend/ParqueJacarand_149_0.png" /> APP<br />\
    <img src="styles/legend/ParqueJacarand_149_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueJacarand_149_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParqueJacarand_149_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueJacarand_149_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/ParqueJacarand_149_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParqueJacarand_149_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueJacarand_149_7.png" /> RUAS<br />' });
var format_ParqueJacarand_150 = new ol.format.GeoJSON();
var features_ParqueJacarand_150 = format_ParqueJacarand_150.readFeatures(json_ParqueJacarand_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueJacarand_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueJacarand_150.addFeatures(features_ParqueJacarand_150);
var lyr_ParqueJacarand_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueJacarand_150, 
                style: style_ParqueJacarand_150,
                popuplayertitle: 'Parque Jacarandá',
                interactive: true,
                title: '<img src="styles/legend/ParqueJacarand_150.png" /> Parque Jacarandá'
            });
var format_ParqueFlora_151 = new ol.format.GeoJSON();
var features_ParqueFlora_151 = format_ParqueFlora_151.readFeatures(json_ParqueFlora_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueFlora_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_151.addFeatures(features_ParqueFlora_151);
var lyr_ParqueFlora_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_151, 
                style: style_ParqueFlora_151,
                popuplayertitle: 'Parque Flora',
                interactive: true,
    title: 'Parque Flora<br />\
    <img src="styles/legend/ParqueFlora_151_0.png" /> APP<br />\
    <img src="styles/legend/ParqueFlora_151_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParqueFlora_151_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParqueFlora_151_3.png" /> LOTES<br />\
    <img src="styles/legend/ParqueFlora_151_4.png" /> PASSEIO<br />\
    <img src="styles/legend/ParqueFlora_151_5.png" /> RUAS<br />\
    <img src="styles/legend/ParqueFlora_151_6.png" /> VIELA<br />' });
var format_ParqueFlora_152 = new ol.format.GeoJSON();
var features_ParqueFlora_152 = format_ParqueFlora_152.readFeatures(json_ParqueFlora_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueFlora_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueFlora_152.addFeatures(features_ParqueFlora_152);
var lyr_ParqueFlora_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueFlora_152, 
                style: style_ParqueFlora_152,
                popuplayertitle: 'Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/ParqueFlora_152.png" /> Parque Flora'
            });
var format_ParquedosSabias_153 = new ol.format.GeoJSON();
var features_ParquedosSabias_153 = format_ParquedosSabias_153.readFeatures(json_ParquedosSabias_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosSabias_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_153.addFeatures(features_ParquedosSabias_153);
var lyr_ParquedosSabias_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_153, 
                style: style_ParquedosSabias_153,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
    title: 'Parque dos Sabias<br />\
    <img src="styles/legend/ParquedosSabias_153_0.png" /> APP<br />\
    <img src="styles/legend/ParquedosSabias_153_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParquedosSabias_153_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParquedosSabias_153_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_153_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParquedosSabias_153_5.png" /> PASSEIO<br />\
    <img src="styles/legend/ParquedosSabias_153_6.png" /> RUAS<br />\
    <img src="styles/legend/ParquedosSabias_153_7.png" /> VIELA<br />' });
var format_ParquedosSabias_154 = new ol.format.GeoJSON();
var features_ParquedosSabias_154 = format_ParquedosSabias_154.readFeatures(json_ParquedosSabias_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosSabias_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosSabias_154.addFeatures(features_ParquedosSabias_154);
var lyr_ParquedosSabias_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosSabias_154, 
                style: style_ParquedosSabias_154,
                popuplayertitle: 'Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/ParquedosSabias_154.png" /> Parque dos Sabias'
            });
var format_ParagonFaseII_155 = new ol.format.GeoJSON();
var features_ParagonFaseII_155 = format_ParagonFaseII_155.readFeatures(json_ParagonFaseII_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParagonFaseII_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_155.addFeatures(features_ParagonFaseII_155);
var lyr_ParagonFaseII_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_155, 
                style: style_ParagonFaseII_155,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
    title: 'Paragon Fase II<br />\
    <img src="styles/legend/ParagonFaseII_155_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/ParagonFaseII_155_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/ParagonFaseII_155_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/ParagonFaseII_155_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/ParagonFaseII_155_4.png" /> LOTES<br />\
    <img src="styles/legend/ParagonFaseII_155_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/ParagonFaseII_155_6.png" /> PASSEIO<br />\
    <img src="styles/legend/ParagonFaseII_155_7.png" /> RUAS<br />\
    <img src="styles/legend/ParagonFaseII_155_8.png" /> VIELA<br />' });
var format_ParagonFaseII_156 = new ol.format.GeoJSON();
var features_ParagonFaseII_156 = format_ParagonFaseII_156.readFeatures(json_ParagonFaseII_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParagonFaseII_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParagonFaseII_156.addFeatures(features_ParagonFaseII_156);
var lyr_ParagonFaseII_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParagonFaseII_156, 
                style: style_ParagonFaseII_156,
                popuplayertitle: 'Paragon Fase II',
                interactive: true,
                title: '<img src="styles/legend/ParagonFaseII_156.png" /> Paragon Fase II'
            });
var format_Paragon_157 = new ol.format.GeoJSON();
var features_Paragon_157 = format_Paragon_157.readFeatures(json_Paragon_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paragon_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_157.addFeatures(features_Paragon_157);
var lyr_Paragon_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_157, 
                style: style_Paragon_157,
                popuplayertitle: 'Paragon',
                interactive: true,
    title: 'Paragon<br />\
    <img src="styles/legend/Paragon_157_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Paragon_157_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/Paragon_157_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Paragon_157_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Paragon_157_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Paragon_157_5.png" /> RUAS<br />\
    <img src="styles/legend/Paragon_157_6.png" /> VIELA<br />' });
var format_Paragon_158 = new ol.format.GeoJSON();
var features_Paragon_158 = format_Paragon_158.readFeatures(json_Paragon_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paragon_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paragon_158.addFeatures(features_Paragon_158);
var lyr_Paragon_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paragon_158, 
                style: style_Paragon_158,
                popuplayertitle: 'Paragon',
                interactive: true,
                title: '<img src="styles/legend/Paragon_158.png" /> Paragon'
            });
var format_PalmeiraReal_159 = new ol.format.GeoJSON();
var features_PalmeiraReal_159 = format_PalmeiraReal_159.readFeatures(json_PalmeiraReal_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PalmeiraReal_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_159.addFeatures(features_PalmeiraReal_159);
var lyr_PalmeiraReal_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_159, 
                style: style_PalmeiraReal_159,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
    title: 'Palmeira Real<br />\
    <img src="styles/legend/PalmeiraReal_159_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/PalmeiraReal_159_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PalmeiraReal_159_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/PalmeiraReal_159_3.png" /> PASSEIO<br />\
    <img src="styles/legend/PalmeiraReal_159_4.png" /> RUAS<br />\
    <img src="styles/legend/PalmeiraReal_159_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_PalmeiraReal_160 = new ol.format.GeoJSON();
var features_PalmeiraReal_160 = format_PalmeiraReal_160.readFeatures(json_PalmeiraReal_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PalmeiraReal_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalmeiraReal_160.addFeatures(features_PalmeiraReal_160);
var lyr_PalmeiraReal_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalmeiraReal_160, 
                style: style_PalmeiraReal_160,
                popuplayertitle: 'Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/PalmeiraReal_160.png" /> Palmeira Real'
            });
var format_MoradadoVerdeII_161 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_161 = format_MoradadoVerdeII_161.readFeatures(json_MoradadoVerdeII_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoradadoVerdeII_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_161.addFeatures(features_MoradadoVerdeII_161);
var lyr_MoradadoVerdeII_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_161, 
                style: style_MoradadoVerdeII_161,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
    title: 'Morada do Verde II<br />\
    <img src="styles/legend/MoradadoVerdeII_161_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadoVerdeII_161_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadoVerdeII_161_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadoVerdeII_161_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MoradadoVerdeII_161_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/MoradadoVerdeII_161_5.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadoVerdeII_161_6.png" /> RUAS<br />' });
var format_MoradadoVerdeII_162 = new ol.format.GeoJSON();
var features_MoradadoVerdeII_162 = format_MoradadoVerdeII_162.readFeatures(json_MoradadoVerdeII_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoradadoVerdeII_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadoVerdeII_162.addFeatures(features_MoradadoVerdeII_162);
var lyr_MoradadoVerdeII_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadoVerdeII_162, 
                style: style_MoradadoVerdeII_162,
                popuplayertitle: 'Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/MoradadoVerdeII_162.png" /> Morada do Verde II'
            });
var format_MoradadaMata_163 = new ol.format.GeoJSON();
var features_MoradadaMata_163 = format_MoradadaMata_163.readFeatures(json_MoradadaMata_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoradadaMata_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_163.addFeatures(features_MoradadaMata_163);
var lyr_MoradadaMata_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_163, 
                style: style_MoradadaMata_163,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
    title: 'Morada da Mata<br />\
    <img src="styles/legend/MoradadaMata_163_0.png" /> APP<br />\
    <img src="styles/legend/MoradadaMata_163_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MoradadaMata_163_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MoradadaMata_163_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MoradadaMata_163_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MoradadaMata_163_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MoradadaMata_163_6.png" /> PASSEIO<br />\
    <img src="styles/legend/MoradadaMata_163_7.png" /> RUAS<br />' });
var format_MoradadaMata_164 = new ol.format.GeoJSON();
var features_MoradadaMata_164 = format_MoradadaMata_164.readFeatures(json_MoradadaMata_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoradadaMata_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoradadaMata_164.addFeatures(features_MoradadaMata_164);
var lyr_MoradadaMata_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoradadaMata_164, 
                style: style_MoradadaMata_164,
                popuplayertitle: 'Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/MoradadaMata_164.png" /> Morada da Mata'
            });
var format_Monti_165 = new ol.format.GeoJSON();
var features_Monti_165 = format_Monti_165.readFeatures(json_Monti_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monti_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_165.addFeatures(features_Monti_165);
var lyr_Monti_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_165, 
                style: style_Monti_165,
                popuplayertitle: 'Montié',
                interactive: true,
    title: 'Montié<br />\
    <img src="styles/legend/Monti_165_0.png" /> AREA LAZER<br />\
    <img src="styles/legend/Monti_165_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/Monti_165_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Monti_165_3.png" /> PASSEIO<br />\
    <img src="styles/legend/Monti_165_4.png" /> RUAS<br />\
    <img src="styles/legend/Monti_165_5.png" /> VAGAS DE ESTACIONAMENTO<br />' });
var format_Monti_166 = new ol.format.GeoJSON();
var features_Monti_166 = format_Monti_166.readFeatures(json_Monti_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monti_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monti_166.addFeatures(features_Monti_166);
var lyr_Monti_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monti_166, 
                style: style_Monti_166,
                popuplayertitle: 'Montié',
                interactive: true,
                title: '<img src="styles/legend/Monti_166.png" /> Montié'
            });
var format_MontBlancResidence_167 = new ol.format.GeoJSON();
var features_MontBlancResidence_167 = format_MontBlancResidence_167.readFeatures(json_MontBlancResidence_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontBlancResidence_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_167.addFeatures(features_MontBlancResidence_167);
var lyr_MontBlancResidence_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_167, 
                style: style_MontBlancResidence_167,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_167.png" /> Mont Blanc Residence'
            });
var format_MontBlancResidence_168 = new ol.format.GeoJSON();
var features_MontBlancResidence_168 = format_MontBlancResidence_168.readFeatures(json_MontBlancResidence_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontBlancResidence_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontBlancResidence_168.addFeatures(features_MontBlancResidence_168);
var lyr_MontBlancResidence_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontBlancResidence_168, 
                style: style_MontBlancResidence_168,
                popuplayertitle: 'Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/MontBlancResidence_168.png" /> Mont Blanc Residence'
            });
var format_MasterplanDespaschoal_169 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_169 = format_MasterplanDespaschoal_169.readFeatures(json_MasterplanDespaschoal_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterplanDespaschoal_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_169.addFeatures(features_MasterplanDespaschoal_169);
var lyr_MasterplanDespaschoal_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_169, 
                style: style_MasterplanDespaschoal_169,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
    title: 'Masterplan Despaschoal <br />\
    <img src="styles/legend/MasterplanDespaschoal_169_0.png" /> APP<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_3.png" /> FUNCACAO<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_4.png" /> INDUSTRIAL<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_8.png" /> PASSEIO<br />\
    <img src="styles/legend/MasterplanDespaschoal_169_9.png" /> RUAS<br />' });
var format_MasterplanDespaschoal_170 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_170 = format_MasterplanDespaschoal_170.readFeatures(json_MasterplanDespaschoal_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterplanDespaschoal_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_170.addFeatures(features_MasterplanDespaschoal_170);
var lyr_MasterplanDespaschoal_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_170, 
                style: style_MasterplanDespaschoal_170,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_170.png" /> Masterplan Despaschoal '
            });
var format_MasterplanDespaschoal_171 = new ol.format.GeoJSON();
var features_MasterplanDespaschoal_171 = format_MasterplanDespaschoal_171.readFeatures(json_MasterplanDespaschoal_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterplanDespaschoal_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanDespaschoal_171.addFeatures(features_MasterplanDespaschoal_171);
var lyr_MasterplanDespaschoal_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanDespaschoal_171, 
                style: style_MasterplanDespaschoal_171,
                popuplayertitle: 'Masterplan Despaschoal ',
                interactive: true,
                title: '<img src="styles/legend/MasterplanDespaschoal_171.png" /> Masterplan Despaschoal '
            });
var format_MasteplanBildVitta_172 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_172 = format_MasteplanBildVitta_172.readFeatures(json_MasteplanBildVitta_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasteplanBildVitta_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_172.addFeatures(features_MasteplanBildVitta_172);
var lyr_MasteplanBildVitta_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_172, 
                style: style_MasteplanBildVitta_172,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
    title: 'Masteplan Bild/Vitta<br />\
    <img src="styles/legend/MasteplanBildVitta_172_0.png" /> APP<br />\
    <img src="styles/legend/MasteplanBildVitta_172_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MasteplanBildVitta_172_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MasteplanBildVitta_172_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/MasteplanBildVitta_172_4.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/MasteplanBildVitta_172_5.png" /> AREA VERDE<br />\
    <img src="styles/legend/MasteplanBildVitta_172_6.png" /> DESMEMBRAMENTO DOACAO<br />\
    <img src="styles/legend/MasteplanBildVitta_172_7.png" /> EIXOS<br />\
    <img src="styles/legend/MasteplanBildVitta_172_8.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_172_9.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/MasteplanBildVitta_172_10.png" /> PASSEIO<br />\
    <img src="styles/legend/MasteplanBildVitta_172_11.png" /> RUAS<br />\
    <img src="styles/legend/MasteplanBildVitta_172_12.png" /> SERVIDAO<br />' });
var format_MasteplanBildVitta_173 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_173 = format_MasteplanBildVitta_173.readFeatures(json_MasteplanBildVitta_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasteplanBildVitta_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_173.addFeatures(features_MasteplanBildVitta_173);
var lyr_MasteplanBildVitta_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_173, 
                style: style_MasteplanBildVitta_173,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_173.png" /> Masteplan Bild/Vitta'
            });
var format_MasteplanBildVitta_174 = new ol.format.GeoJSON();
var features_MasteplanBildVitta_174 = format_MasteplanBildVitta_174.readFeatures(json_MasteplanBildVitta_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasteplanBildVitta_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasteplanBildVitta_174.addFeatures(features_MasteplanBildVitta_174);
var lyr_MasteplanBildVitta_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasteplanBildVitta_174, 
                style: style_MasteplanBildVitta_174,
                popuplayertitle: 'Masteplan Bild/Vitta',
                interactive: true,
                title: '<img src="styles/legend/MasteplanBildVitta_174.png" /> Masteplan Bild/Vitta'
            });
var format_MarianaAlarcon_175 = new ol.format.GeoJSON();
var features_MarianaAlarcon_175 = format_MarianaAlarcon_175.readFeatures(json_MarianaAlarcon_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarianaAlarcon_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_175.addFeatures(features_MarianaAlarcon_175);
var lyr_MarianaAlarcon_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_175, 
                style: style_MarianaAlarcon_175,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
    title: 'Mariana Alarcon<br />\
    <img src="styles/legend/MarianaAlarcon_175_0.png" /> APP<br />\
    <img src="styles/legend/MarianaAlarcon_175_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/MarianaAlarcon_175_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/MarianaAlarcon_175_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/MarianaAlarcon_175_4.png" /> LOTES<br />\
    <img src="styles/legend/MarianaAlarcon_175_5.png" /> PASSEIO<br />\
    <img src="styles/legend/MarianaAlarcon_175_6.png" /> RUAS<br />' });
var format_MarianaAlarcon_176 = new ol.format.GeoJSON();
var features_MarianaAlarcon_176 = format_MarianaAlarcon_176.readFeatures(json_MarianaAlarcon_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarianaAlarcon_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianaAlarcon_176.addFeatures(features_MarianaAlarcon_176);
var lyr_MarianaAlarcon_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianaAlarcon_176, 
                style: style_MarianaAlarcon_176,
                popuplayertitle: 'Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/MarianaAlarcon_176.png" /> Mariana Alarcon'
            });
var format_Loteamentolamo_177 = new ol.format.GeoJSON();
var features_Loteamentolamo_177 = format_Loteamentolamo_177.readFeatures(json_Loteamentolamo_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loteamentolamo_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_177.addFeatures(features_Loteamentolamo_177);
var lyr_Loteamentolamo_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_177, 
                style: style_Loteamentolamo_177,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
    title: 'Loteamento Álamo<br />\
    <img src="styles/legend/Loteamentolamo_177_0.png" /> APP<br />\
    <img src="styles/legend/Loteamentolamo_177_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Loteamentolamo_177_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Loteamentolamo_177_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/Loteamentolamo_177_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/Loteamentolamo_177_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_177_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/Loteamentolamo_177_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/Loteamentolamo_177_8.png" /> PASSEIO<br />\
    <img src="styles/legend/Loteamentolamo_177_9.png" /> RUAS<br />\
    <img src="styles/legend/Loteamentolamo_177_10.png" /> VIELA<br />' });
var format_Loteamentolamo_178 = new ol.format.GeoJSON();
var features_Loteamentolamo_178 = format_Loteamentolamo_178.readFeatures(json_Loteamentolamo_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loteamentolamo_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteamentolamo_178.addFeatures(features_Loteamentolamo_178);
var lyr_Loteamentolamo_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteamentolamo_178, 
                style: style_Loteamentolamo_178,
                popuplayertitle: 'Loteamento Álamo',
                interactive: true,
                title: '<img src="styles/legend/Loteamentolamo_178.png" /> Loteamento Álamo'
            });
var format_JardimPherola_179 = new ol.format.GeoJSON();
var features_JardimPherola_179 = format_JardimPherola_179.readFeatures(json_JardimPherola_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimPherola_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_179.addFeatures(features_JardimPherola_179);
var lyr_JardimPherola_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_179, 
                style: style_JardimPherola_179,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_179.png" /> Jardim Pherola'
            });
var format_JardimPherola_180 = new ol.format.GeoJSON();
var features_JardimPherola_180 = format_JardimPherola_180.readFeatures(json_JardimPherola_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimPherola_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPherola_180.addFeatures(features_JardimPherola_180);
var lyr_JardimPherola_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimPherola_180, 
                style: style_JardimPherola_180,
                popuplayertitle: 'Jardim Pherola',
                interactive: true,
                title: '<img src="styles/legend/JardimPherola_180.png" /> Jardim Pherola'
            });
var format_JardimMariaLuiza_181 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_181 = format_JardimMariaLuiza_181.readFeatures(json_JardimMariaLuiza_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimMariaLuiza_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_181.addFeatures(features_JardimMariaLuiza_181);
var lyr_JardimMariaLuiza_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_181, 
                style: style_JardimMariaLuiza_181,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
    title: 'Jardim Maria Luiza<br />\
    <img src="styles/legend/JardimMariaLuiza_181_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimMariaLuiza_181_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimMariaLuiza_181_2.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/JardimMariaLuiza_181_3.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimMariaLuiza_181_4.png" /> RUAS<br />' });
var format_JardimMariaLuiza_182 = new ol.format.GeoJSON();
var features_JardimMariaLuiza_182 = format_JardimMariaLuiza_182.readFeatures(json_JardimMariaLuiza_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimMariaLuiza_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimMariaLuiza_182.addFeatures(features_JardimMariaLuiza_182);
var lyr_JardimMariaLuiza_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimMariaLuiza_182, 
                style: style_JardimMariaLuiza_182,
                popuplayertitle: 'Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/JardimMariaLuiza_182.png" /> Jardim Maria Luiza'
            });
var format_JardimHorizonte_183 = new ol.format.GeoJSON();
var features_JardimHorizonte_183 = format_JardimHorizonte_183.readFeatures(json_JardimHorizonte_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimHorizonte_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_183.addFeatures(features_JardimHorizonte_183);
var lyr_JardimHorizonte_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_183, 
                style: style_JardimHorizonte_183,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
    title: 'Jardim Horizonte<br />\
    <img src="styles/legend/JardimHorizonte_183_0.png" /> APP<br />\
    <img src="styles/legend/JardimHorizonte_183_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimHorizonte_183_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimHorizonte_183_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_183_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimHorizonte_183_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/JardimHorizonte_183_6.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimHorizonte_183_7.png" /> RUAS<br />\
    <img src="styles/legend/JardimHorizonte_183_8.png" /> VIELA<br />' });
var format_JardimHorizonte_184 = new ol.format.GeoJSON();
var features_JardimHorizonte_184 = format_JardimHorizonte_184.readFeatures(json_JardimHorizonte_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimHorizonte_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimHorizonte_184.addFeatures(features_JardimHorizonte_184);
var lyr_JardimHorizonte_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimHorizonte_184, 
                style: style_JardimHorizonte_184,
                popuplayertitle: 'Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/JardimHorizonte_184.png" /> Jardim Horizonte'
            });
var format_JardimFlora_185 = new ol.format.GeoJSON();
var features_JardimFlora_185 = format_JardimFlora_185.readFeatures(json_JardimFlora_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimFlora_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_185.addFeatures(features_JardimFlora_185);
var lyr_JardimFlora_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_185, 
                style: style_JardimFlora_185,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
    title: 'Jardim Flora<br />\
    <img src="styles/legend/JardimFlora_185_0.png" /> APP<br />\
    <img src="styles/legend/JardimFlora_185_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/JardimFlora_185_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/JardimFlora_185_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/JardimFlora_185_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/JardimFlora_185_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/JardimFlora_185_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/JardimFlora_185_7.png" /> PASSEIO<br />\
    <img src="styles/legend/JardimFlora_185_8.png" /> RUAS<br />' });
var format_JardimFlora_186 = new ol.format.GeoJSON();
var features_JardimFlora_186 = format_JardimFlora_186.readFeatures(json_JardimFlora_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimFlora_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimFlora_186.addFeatures(features_JardimFlora_186);
var lyr_JardimFlora_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimFlora_186, 
                style: style_JardimFlora_186,
                popuplayertitle: 'Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/JardimFlora_186.png" /> Jardim Flora'
            });
var format_IrineuZanetiII_187 = new ol.format.GeoJSON();
var features_IrineuZanetiII_187 = format_IrineuZanetiII_187.readFeatures(json_IrineuZanetiII_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrineuZanetiII_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_187.addFeatures(features_IrineuZanetiII_187);
var lyr_IrineuZanetiII_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_187, 
                style: style_IrineuZanetiII_187,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
    title: 'Irineu Zaneti II<br />\
    <img src="styles/legend/IrineuZanetiII_187_0.png" /> APP<br />\
    <img src="styles/legend/IrineuZanetiII_187_1.png" /> LOTES<br />\
    <img src="styles/legend/IrineuZanetiII_187_2.png" /> RUAS<br />\
    <img src="styles/legend/IrineuZanetiII_187_3.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/IrineuZanetiII_187_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/IrineuZanetiII_187_5.png" /> PASSEIO<br />' });
var format_IrineuZanetiII_188 = new ol.format.GeoJSON();
var features_IrineuZanetiII_188 = format_IrineuZanetiII_188.readFeatures(json_IrineuZanetiII_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrineuZanetiII_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrineuZanetiII_188.addFeatures(features_IrineuZanetiII_188);
var lyr_IrineuZanetiII_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrineuZanetiII_188, 
                style: style_IrineuZanetiII_188,
                popuplayertitle: 'Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/IrineuZanetiII_188.png" /> Irineu Zaneti II'
            });
var format_Infratcnica_189 = new ol.format.GeoJSON();
var features_Infratcnica_189 = format_Infratcnica_189.readFeatures(json_Infratcnica_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infratcnica_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_189.addFeatures(features_Infratcnica_189);
var lyr_Infratcnica_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_189, 
                style: style_Infratcnica_189,
                popuplayertitle: 'Infratécnica',
                interactive: true,
    title: 'Infratécnica<br />\
    <img src="styles/legend/Infratcnica_189_0.png" /> APP<br />\
    <img src="styles/legend/Infratcnica_189_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Infratcnica_189_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Infratcnica_189_3.png" /> LOTES<br />\
    <img src="styles/legend/Infratcnica_189_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Infratcnica_189_5.png" /> RUAS<br />' });
var format_Infratcnica_190 = new ol.format.GeoJSON();
var features_Infratcnica_190 = format_Infratcnica_190.readFeatures(json_Infratcnica_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infratcnica_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infratcnica_190.addFeatures(features_Infratcnica_190);
var lyr_Infratcnica_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infratcnica_190, 
                style: style_Infratcnica_190,
                popuplayertitle: 'Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/Infratcnica_190.png" /> Infratécnica'
            });
var format_HorizResidence_191 = new ol.format.GeoJSON();
var features_HorizResidence_191 = format_HorizResidence_191.readFeatures(json_HorizResidence_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HorizResidence_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_191.addFeatures(features_HorizResidence_191);
var lyr_HorizResidence_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_191, 
                style: style_HorizResidence_191,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_191.png" /> Horiz Residence'
            });
var format_HorizResidence_192 = new ol.format.GeoJSON();
var features_HorizResidence_192 = format_HorizResidence_192.readFeatures(json_HorizResidence_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HorizResidence_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorizResidence_192.addFeatures(features_HorizResidence_192);
var lyr_HorizResidence_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HorizResidence_192, 
                style: style_HorizResidence_192,
                popuplayertitle: 'Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/HorizResidence_192.png" /> Horiz Residence'
            });
var format_GlebaNossaSenhoraAuxiliadora_193 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_193 = format_GlebaNossaSenhoraAuxiliadora_193.readFeatures(json_GlebaNossaSenhoraAuxiliadora_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_193.addFeatures(features_GlebaNossaSenhoraAuxiliadora_193);
var lyr_GlebaNossaSenhoraAuxiliadora_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_193, 
                style: style_GlebaNossaSenhoraAuxiliadora_193,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_193.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_GlebaNossaSenhoraAuxiliadora_194 = new ol.format.GeoJSON();
var features_GlebaNossaSenhoraAuxiliadora_194 = format_GlebaNossaSenhoraAuxiliadora_194.readFeatures(json_GlebaNossaSenhoraAuxiliadora_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlebaNossaSenhoraAuxiliadora_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlebaNossaSenhoraAuxiliadora_194.addFeatures(features_GlebaNossaSenhoraAuxiliadora_194);
var lyr_GlebaNossaSenhoraAuxiliadora_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlebaNossaSenhoraAuxiliadora_194, 
                style: style_GlebaNossaSenhoraAuxiliadora_194,
                popuplayertitle: 'Gleba Nossa Senhora Auxiliadora',
                interactive: true,
                title: '<img src="styles/legend/GlebaNossaSenhoraAuxiliadora_194.png" /> Gleba Nossa Senhora Auxiliadora'
            });
var format_Ferracini_195 = new ol.format.GeoJSON();
var features_Ferracini_195 = format_Ferracini_195.readFeatures(json_Ferracini_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferracini_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_195.addFeatures(features_Ferracini_195);
var lyr_Ferracini_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_195, 
                style: style_Ferracini_195,
                popuplayertitle: 'Ferracini',
                interactive: true,
    title: 'Ferracini<br />\
    <img src="styles/legend/Ferracini_195_0.png" /> APP<br />\
    <img src="styles/legend/Ferracini_195_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Ferracini_195_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Ferracini_195_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Ferracini_195_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Ferracini_195_5.png" /> RUAS<br />\
    <img src="styles/legend/Ferracini_195_6.png" /> VIELA<br />\
    <img src="styles/legend/Ferracini_195_7.png" /> PASSEIO<br />' });
var format_Ferracini_196 = new ol.format.GeoJSON();
var features_Ferracini_196 = format_Ferracini_196.readFeatures(json_Ferracini_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferracini_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferracini_196.addFeatures(features_Ferracini_196);
var lyr_Ferracini_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferracini_196, 
                style: style_Ferracini_196,
                popuplayertitle: 'Ferracini',
                interactive: true,
                title: '<img src="styles/legend/Ferracini_196.png" /> Ferracini'
            });
var format_FrancaB6_197 = new ol.format.GeoJSON();
var features_FrancaB6_197 = format_FrancaB6_197.readFeatures(json_FrancaB6_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancaB6_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_197.addFeatures(features_FrancaB6_197);
var lyr_FrancaB6_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_197, 
                style: style_FrancaB6_197,
                popuplayertitle: 'Franca B6',
                interactive: true,
    title: 'Franca B6<br />\
    <img src="styles/legend/FrancaB6_197_0.png" /> APP<br />\
    <img src="styles/legend/FrancaB6_197_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/FrancaB6_197_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/FrancaB6_197_3.png" /> LOTES<br />\
    <img src="styles/legend/FrancaB6_197_4.png" /> RUAS<br />\
    <img src="styles/legend/FrancaB6_197_5.png" /> PASSEIO<br />' });
var format_FrancaB6_198 = new ol.format.GeoJSON();
var features_FrancaB6_198 = format_FrancaB6_198.readFeatures(json_FrancaB6_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancaB6_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancaB6_198.addFeatures(features_FrancaB6_198);
var lyr_FrancaB6_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancaB6_198, 
                style: style_FrancaB6_198,
                popuplayertitle: 'Franca B6',
                interactive: true,
                title: '<img src="styles/legend/FrancaB6_198.png" /> Franca B6'
            });
var format_FazendaProgresso_199 = new ol.format.GeoJSON();
var features_FazendaProgresso_199 = format_FazendaProgresso_199.readFeatures(json_FazendaProgresso_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaProgresso_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_199.addFeatures(features_FazendaProgresso_199);
var lyr_FazendaProgresso_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_199, 
                style: style_FazendaProgresso_199,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_199.png" /> Fazenda Progresso'
            });
var format_FazendaProgresso_200 = new ol.format.GeoJSON();
var features_FazendaProgresso_200 = format_FazendaProgresso_200.readFeatures(json_FazendaProgresso_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaProgresso_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaProgresso_200.addFeatures(features_FazendaProgresso_200);
var lyr_FazendaProgresso_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaProgresso_200, 
                style: style_FazendaProgresso_200,
                popuplayertitle: 'Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/FazendaProgresso_200.png" /> Fazenda Progresso'
            });
var format_FazendaeGranjaSantaRita2_201 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_201 = format_FazendaeGranjaSantaRita2_201.readFeatures(json_FazendaeGranjaSantaRita2_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaeGranjaSantaRita2_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_201.addFeatures(features_FazendaeGranjaSantaRita2_201);
var lyr_FazendaeGranjaSantaRita2_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_201, 
                style: style_FazendaeGranjaSantaRita2_201,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_201.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita2_202 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita2_202 = format_FazendaeGranjaSantaRita2_202.readFeatures(json_FazendaeGranjaSantaRita2_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaeGranjaSantaRita2_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita2_202.addFeatures(features_FazendaeGranjaSantaRita2_202);
var lyr_FazendaeGranjaSantaRita2_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita2_202, 
                style: style_FazendaeGranjaSantaRita2_202,
                popuplayertitle: 'Fazenda e Granja Santa Rita 2',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita2_202.png" /> Fazenda e Granja Santa Rita 2'
            });
var format_FazendaeGranjaSantaRita_203 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_203 = format_FazendaeGranjaSantaRita_203.readFeatures(json_FazendaeGranjaSantaRita_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaeGranjaSantaRita_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_203.addFeatures(features_FazendaeGranjaSantaRita_203);
var lyr_FazendaeGranjaSantaRita_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_203, 
                style: style_FazendaeGranjaSantaRita_203,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_203.png" /> Fazenda e Granja Santa Rita'
            });
var format_FazendaeGranjaSantaRita_204 = new ol.format.GeoJSON();
var features_FazendaeGranjaSantaRita_204 = format_FazendaeGranjaSantaRita_204.readFeatures(json_FazendaeGranjaSantaRita_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaeGranjaSantaRita_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaeGranjaSantaRita_204.addFeatures(features_FazendaeGranjaSantaRita_204);
var lyr_FazendaeGranjaSantaRita_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaeGranjaSantaRita_204, 
                style: style_FazendaeGranjaSantaRita_204,
                popuplayertitle: 'Fazenda e Granja Santa Rita',
                interactive: true,
                title: '<img src="styles/legend/FazendaeGranjaSantaRita_204.png" /> Fazenda e Granja Santa Rita'
            });
var format_Essence_205 = new ol.format.GeoJSON();
var features_Essence_205 = format_Essence_205.readFeatures(json_Essence_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Essence_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_205.addFeatures(features_Essence_205);
var lyr_Essence_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_205, 
                style: style_Essence_205,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_205.png" /> Essence'
            });
var format_Essence_206 = new ol.format.GeoJSON();
var features_Essence_206 = format_Essence_206.readFeatures(json_Essence_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Essence_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Essence_206.addFeatures(features_Essence_206);
var lyr_Essence_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Essence_206, 
                style: style_Essence_206,
                popuplayertitle: 'Essence',
                interactive: true,
                title: '<img src="styles/legend/Essence_206.png" /> Essence'
            });
var format_Elias_207 = new ol.format.GeoJSON();
var features_Elias_207 = format_Elias_207.readFeatures(json_Elias_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elias_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_207.addFeatures(features_Elias_207);
var lyr_Elias_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_207, 
                style: style_Elias_207,
                popuplayertitle: 'Elias',
                interactive: true,
    title: 'Elias<br />\
    <img src="styles/legend/Elias_207_0.png" /> Lotes mistos<br />\
    <img src="styles/legend/Elias_207_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Elias_207_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Elias_207_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Elias_207_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Elias_207_5.png" /> PASSEIO<br />\
    <img src="styles/legend/Elias_207_6.png" /> RUAS<br />' });
var format_Elias_208 = new ol.format.GeoJSON();
var features_Elias_208 = format_Elias_208.readFeatures(json_Elias_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elias_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elias_208.addFeatures(features_Elias_208);
var lyr_Elias_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elias_208, 
                style: style_Elias_208,
                popuplayertitle: 'Elias',
                interactive: true,
                title: '<img src="styles/legend/Elias_208.png" /> Elias'
            });
var format_EdifcioSolNascente_209 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_209 = format_EdifcioSolNascente_209.readFeatures(json_EdifcioSolNascente_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioSolNascente_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_209.addFeatures(features_EdifcioSolNascente_209);
var lyr_EdifcioSolNascente_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_209, 
                style: style_EdifcioSolNascente_209,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_209.png" /> Edifício Sol Nascente'
            });
var format_EdifcioSolNascente_210 = new ol.format.GeoJSON();
var features_EdifcioSolNascente_210 = format_EdifcioSolNascente_210.readFeatures(json_EdifcioSolNascente_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioSolNascente_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioSolNascente_210.addFeatures(features_EdifcioSolNascente_210);
var lyr_EdifcioSolNascente_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioSolNascente_210, 
                style: style_EdifcioSolNascente_210,
                popuplayertitle: 'Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EdifcioSolNascente_210.png" /> Edifício Sol Nascente'
            });
var format_EdifcioRuadoSol_211 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_211 = format_EdifcioRuadoSol_211.readFeatures(json_EdifcioRuadoSol_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioRuadoSol_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_211.addFeatures(features_EdifcioRuadoSol_211);
var lyr_EdifcioRuadoSol_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_211, 
                style: style_EdifcioRuadoSol_211,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_211.png" /> Edifício Rua do Sol'
            });
var format_EdifcioRuadoSol_212 = new ol.format.GeoJSON();
var features_EdifcioRuadoSol_212 = format_EdifcioRuadoSol_212.readFeatures(json_EdifcioRuadoSol_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioRuadoSol_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioRuadoSol_212.addFeatures(features_EdifcioRuadoSol_212);
var lyr_EdifcioRuadoSol_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioRuadoSol_212, 
                style: style_EdifcioRuadoSol_212,
                popuplayertitle: 'Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EdifcioRuadoSol_212.png" /> Edifício Rua do Sol'
            });
var format_EdifcioResidencialHope_213 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_213 = format_EdifcioResidencialHope_213.readFeatures(json_EdifcioResidencialHope_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioResidencialHope_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_213.addFeatures(features_EdifcioResidencialHope_213);
var lyr_EdifcioResidencialHope_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_213, 
                style: style_EdifcioResidencialHope_213,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_213.png" /> Edifício Residencial Hope'
            });
var format_EdifcioResidencialHope_214 = new ol.format.GeoJSON();
var features_EdifcioResidencialHope_214 = format_EdifcioResidencialHope_214.readFeatures(json_EdifcioResidencialHope_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdifcioResidencialHope_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdifcioResidencialHope_214.addFeatures(features_EdifcioResidencialHope_214);
var lyr_EdifcioResidencialHope_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdifcioResidencialHope_214, 
                style: style_EdifcioResidencialHope_214,
                popuplayertitle: 'Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EdifcioResidencialHope_214.png" /> Edifício Residencial Hope'
            });
var format_DiocesedeFranca_215 = new ol.format.GeoJSON();
var features_DiocesedeFranca_215 = format_DiocesedeFranca_215.readFeatures(json_DiocesedeFranca_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiocesedeFranca_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_215.addFeatures(features_DiocesedeFranca_215);
var lyr_DiocesedeFranca_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_215, 
                style: style_DiocesedeFranca_215,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
    title: 'Diocese de Franca<br />\
    <img src="styles/legend/DiocesedeFranca_215_0.png" /> APP<br />\
    <img src="styles/legend/DiocesedeFranca_215_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/DiocesedeFranca_215_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/DiocesedeFranca_215_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_215_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/DiocesedeFranca_215_5.png" /> PASSEIO<br />\
    <img src="styles/legend/DiocesedeFranca_215_6.png" /> RUAS<br />' });
var format_DiocesedeFranca_216 = new ol.format.GeoJSON();
var features_DiocesedeFranca_216 = format_DiocesedeFranca_216.readFeatures(json_DiocesedeFranca_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiocesedeFranca_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiocesedeFranca_216.addFeatures(features_DiocesedeFranca_216);
var lyr_DiocesedeFranca_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiocesedeFranca_216, 
                style: style_DiocesedeFranca_216,
                popuplayertitle: 'Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/DiocesedeFranca_216.png" /> Diocese de Franca'
            });
var format_DaVinci_217 = new ol.format.GeoJSON();
var features_DaVinci_217 = format_DaVinci_217.readFeatures(json_DaVinci_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaVinci_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_217.addFeatures(features_DaVinci_217);
var lyr_DaVinci_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_217, 
                style: style_DaVinci_217,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_217.png" /> Da Vinci'
            });
var format_DaVinci_218 = new ol.format.GeoJSON();
var features_DaVinci_218 = format_DaVinci_218.readFeatures(json_DaVinci_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaVinci_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaVinci_218.addFeatures(features_DaVinci_218);
var lyr_DaVinci_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaVinci_218, 
                style: style_DaVinci_218,
                popuplayertitle: 'Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/DaVinci_218.png" /> Da Vinci'
            });
var format_CondomnioIICityPetrpolis_219 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_219 = format_CondomnioIICityPetrpolis_219.readFeatures(json_CondomnioIICityPetrpolis_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CondomnioIICityPetrpolis_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_219.addFeatures(features_CondomnioIICityPetrpolis_219);
var lyr_CondomnioIICityPetrpolis_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_219, 
                style: style_CondomnioIICityPetrpolis_219,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_219_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_220 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_220 = format_CondomnioIICityPetrpolis_220.readFeatures(json_CondomnioIICityPetrpolis_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CondomnioIICityPetrpolis_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_220.addFeatures(features_CondomnioIICityPetrpolis_220);
var lyr_CondomnioIICityPetrpolis_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_220, 
                style: style_CondomnioIICityPetrpolis_220,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_220.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_221 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_221 = format_CondomnioICityPetrpolis_221.readFeatures(json_CondomnioICityPetrpolis_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CondomnioICityPetrpolis_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_221.addFeatures(features_CondomnioICityPetrpolis_221);
var lyr_CondomnioICityPetrpolis_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_221, 
                style: style_CondomnioICityPetrpolis_221,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_221_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_222 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_222 = format_CondomnioICityPetrpolis_222.readFeatures(json_CondomnioICityPetrpolis_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CondomnioICityPetrpolis_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_222.addFeatures(features_CondomnioICityPetrpolis_222);
var lyr_CondomnioICityPetrpolis_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_222, 
                style: style_CondomnioICityPetrpolis_222,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_222.png" /> Condomínio I City Petrópolis'
            });
var format_Colorado_223 = new ol.format.GeoJSON();
var features_Colorado_223 = format_Colorado_223.readFeatures(json_Colorado_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colorado_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_223.addFeatures(features_Colorado_223);
var lyr_Colorado_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_223, 
                style: style_Colorado_223,
                popuplayertitle: 'Colorado',
                interactive: true,
    title: 'Colorado<br />\
    <img src="styles/legend/Colorado_223_0.png" /> APP<br />\
    <img src="styles/legend/Colorado_223_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Colorado_223_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/Colorado_223_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/Colorado_223_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Colorado_223_5.png" /> RUAS<br />\
    <img src="styles/legend/Colorado_223_6.png" /> PASSEIO<br />' });
var format_Colorado_224 = new ol.format.GeoJSON();
var features_Colorado_224 = format_Colorado_224.readFeatures(json_Colorado_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colorado_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colorado_224.addFeatures(features_Colorado_224);
var lyr_Colorado_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colorado_224, 
                style: style_Colorado_224,
                popuplayertitle: 'Colorado',
                interactive: true,
                title: '<img src="styles/legend/Colorado_224.png" /> Colorado'
            });
var format_CidadeJardim_225 = new ol.format.GeoJSON();
var features_CidadeJardim_225 = format_CidadeJardim_225.readFeatures(json_CidadeJardim_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CidadeJardim_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_225.addFeatures(features_CidadeJardim_225);
var lyr_CidadeJardim_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_225, 
                style: style_CidadeJardim_225,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
    title: 'Cidade Jardim<br />\
    <img src="styles/legend/CidadeJardim_225_0.png" /> APP<br />\
    <img src="styles/legend/CidadeJardim_225_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CidadeJardim_225_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/CidadeJardim_225_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/CidadeJardim_225_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CidadeJardim_225_5.png" /> PASSEIO<br />\
    <img src="styles/legend/CidadeJardim_225_6.png" /> RUAS<br />\
    <img src="styles/legend/CidadeJardim_225_7.png" /> SERVIDAO<br />' });
var format_CidadeJardim_226 = new ol.format.GeoJSON();
var features_CidadeJardim_226 = format_CidadeJardim_226.readFeatures(json_CidadeJardim_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CidadeJardim_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeJardim_226.addFeatures(features_CidadeJardim_226);
var lyr_CidadeJardim_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CidadeJardim_226, 
                style: style_CidadeJardim_226,
                popuplayertitle: 'Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/CidadeJardim_226.png" /> Cidade Jardim'
            });
var format_ChacaraOlaria_227 = new ol.format.GeoJSON();
var features_ChacaraOlaria_227 = format_ChacaraOlaria_227.readFeatures(json_ChacaraOlaria_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChacaraOlaria_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_227.addFeatures(features_ChacaraOlaria_227);
var lyr_ChacaraOlaria_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_227, 
                style: style_ChacaraOlaria_227,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_227.png" /> Chacara Olaria'
            });
var format_ChacaraOlaria_228 = new ol.format.GeoJSON();
var features_ChacaraOlaria_228 = format_ChacaraOlaria_228.readFeatures(json_ChacaraOlaria_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChacaraOlaria_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraOlaria_228.addFeatures(features_ChacaraOlaria_228);
var lyr_ChacaraOlaria_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraOlaria_228, 
                style: style_ChacaraOlaria_228,
                popuplayertitle: 'Chacara Olaria',
                interactive: true,
                title: '<img src="styles/legend/ChacaraOlaria_228.png" /> Chacara Olaria'
            });
var format_ChacaraBelaVista_229 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_229 = format_ChacaraBelaVista_229.readFeatures(json_ChacaraBelaVista_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChacaraBelaVista_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_229.addFeatures(features_ChacaraBelaVista_229);
var lyr_ChacaraBelaVista_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_229, 
                style: style_ChacaraBelaVista_229,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
    title: 'Chacara Bela Vista<br />\
    <img src="styles/legend/ChacaraBelaVista_229_0.png" /> APP<br />\
    <img src="styles/legend/ChacaraBelaVista_229_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/ChacaraBelaVista_229_2.png" /> LOTES<br />\
    <img src="styles/legend/ChacaraBelaVista_229_3.png" /> PASSEIO<br />\
    <img src="styles/legend/ChacaraBelaVista_229_4.png" /> RUAS<br />' });
var format_ChacaraBelaVista_230 = new ol.format.GeoJSON();
var features_ChacaraBelaVista_230 = format_ChacaraBelaVista_230.readFeatures(json_ChacaraBelaVista_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChacaraBelaVista_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChacaraBelaVista_230.addFeatures(features_ChacaraBelaVista_230);
var lyr_ChacaraBelaVista_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChacaraBelaVista_230, 
                style: style_ChacaraBelaVista_230,
                popuplayertitle: 'Chacara Bela Vista',
                interactive: true,
                title: '<img src="styles/legend/ChacaraBelaVista_230.png" /> Chacara Bela Vista'
            });
var format_BordadaMata_231 = new ol.format.GeoJSON();
var features_BordadaMata_231 = format_BordadaMata_231.readFeatures(json_BordadaMata_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BordadaMata_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_231.addFeatures(features_BordadaMata_231);
var lyr_BordadaMata_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_231, 
                style: style_BordadaMata_231,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
    title: 'Borda da Mata<br />\
    <img src="styles/legend/BordadaMata_231_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/BordadaMata_231_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/BordadaMata_231_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/BordadaMata_231_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/BordadaMata_231_4.png" /> PASSEIO<br />\
    <img src="styles/legend/BordadaMata_231_5.png" /> REPRESA<br />\
    <img src="styles/legend/BordadaMata_231_6.png" /> RUAS<br />' });
var format_BordadaMata_232 = new ol.format.GeoJSON();
var features_BordadaMata_232 = format_BordadaMata_232.readFeatures(json_BordadaMata_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BordadaMata_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BordadaMata_232.addFeatures(features_BordadaMata_232);
var lyr_BordadaMata_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BordadaMata_232, 
                style: style_BordadaMata_232,
                popuplayertitle: 'Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/BordadaMata_232.png" /> Borda da Mata'
            });
var format_Arteris_233 = new ol.format.GeoJSON();
var features_Arteris_233 = format_Arteris_233.readFeatures(json_Arteris_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arteris_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_233.addFeatures(features_Arteris_233);
var lyr_Arteris_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_233, 
                style: style_Arteris_233,
                popuplayertitle: 'Arteris',
                interactive: true,
    title: 'Arteris<br />\
    <img src="styles/legend/Arteris_233_0.png" /> OAE EXISTENTE<br />\
    <img src="styles/legend/Arteris_233_1.png" /> OAE PROJETADA<br />\
    <img src="styles/legend/Arteris_233_2.png" /> PASSARELA EXISTENTE<br />\
    <img src="styles/legend/Arteris_233_3.png" /> PASSEIO PROJETADO<br />\
    <img src="styles/legend/Arteris_233_4.png" /> PAVIMENTO DO DISPOSITIVO<br />\
    <img src="styles/legend/Arteris_233_5.png" /> PAVIMENTO EXISTENTE<br />\
    <img src="styles/legend/Arteris_233_6.png" /> PAVIMENTO PREFEITURA<br />\
    <img src="styles/legend/Arteris_233_7.png" /> AREA DESAPROPRIADA<br />' });
var format_Arteris_234 = new ol.format.GeoJSON();
var features_Arteris_234 = format_Arteris_234.readFeatures(json_Arteris_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arteris_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arteris_234.addFeatures(features_Arteris_234);
var lyr_Arteris_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arteris_234, 
                style: style_Arteris_234,
                popuplayertitle: 'Arteris',
                interactive: true,
                title: '<img src="styles/legend/Arteris_234.png" /> Arteris'
            });
var format_ArterisFaixadeDomnioFrancaSP_3342_235 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3342_235 = format_ArterisFaixadeDomnioFrancaSP_3342_235.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3342_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3342_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3342_235.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3342_235);
var lyr_ArterisFaixadeDomnioFrancaSP_3342_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3342_235, 
                style: style_ArterisFaixadeDomnioFrancaSP_3342_235,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_334 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3342_235.png" /> Arteris Faixa de Domínio Franca — SP_334 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSP_3452_236 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSP_3452_236 = format_ArterisFaixadeDomnioFrancaSP_3452_236.readFeatures(json_ArterisFaixadeDomnioFrancaSP_3452_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArterisFaixadeDomnioFrancaSP_3452_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSP_3452_236.addFeatures(features_ArterisFaixadeDomnioFrancaSP_3452_236);
var lyr_ArterisFaixadeDomnioFrancaSP_3452_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSP_3452_236, 
                style: style_ArterisFaixadeDomnioFrancaSP_3452_236,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SP_345 (#2)',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSP_3452_236.png" /> Arteris Faixa de Domínio Franca — SP_345 (#2)'
            });
var format_ArterisFaixadeDomnioFrancaSPA_397334_237 = new ol.format.GeoJSON();
var features_ArterisFaixadeDomnioFrancaSPA_397334_237 = format_ArterisFaixadeDomnioFrancaSPA_397334_237.readFeatures(json_ArterisFaixadeDomnioFrancaSPA_397334_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_237.addFeatures(features_ArterisFaixadeDomnioFrancaSPA_397334_237);
var lyr_ArterisFaixadeDomnioFrancaSPA_397334_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArterisFaixadeDomnioFrancaSPA_397334_237, 
                style: style_ArterisFaixadeDomnioFrancaSPA_397334_237,
                popuplayertitle: 'Arteris Faixa de Domínio Franca — SPA_397/334',
                interactive: true,
                title: '<img src="styles/legend/ArterisFaixadeDomnioFrancaSPA_397334_237.png" /> Arteris Faixa de Domínio Franca — SPA_397/334'
            });
var format_Arizona_238 = new ol.format.GeoJSON();
var features_Arizona_238 = format_Arizona_238.readFeatures(json_Arizona_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arizona_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_238.addFeatures(features_Arizona_238);
var lyr_Arizona_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_238, 
                style: style_Arizona_238,
                popuplayertitle: 'Arizona',
                interactive: true,
    title: 'Arizona<br />\
    <img src="styles/legend/Arizona_238_0.png" /> APP<br />\
    <img src="styles/legend/Arizona_238_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/Arizona_238_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/Arizona_238_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/Arizona_238_4.png" /> PASSEIO<br />\
    <img src="styles/legend/Arizona_238_5.png" /> RUAS<br />\
    <img src="styles/legend/Arizona_238_6.png" /> VIELA<br />' });
var format_Arizona_239 = new ol.format.GeoJSON();
var features_Arizona_239 = format_Arizona_239.readFeatures(json_Arizona_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arizona_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_239.addFeatures(features_Arizona_239);
var lyr_Arizona_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arizona_239, 
                style: style_Arizona_239,
                popuplayertitle: 'Arizona',
                interactive: true,
                title: '<img src="styles/legend/Arizona_239.png" /> Arizona'
            });
var format_AbuDhabiParadiseResortResidence_240 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_240 = format_AbuDhabiParadiseResortResidence_240.readFeatures(json_AbuDhabiParadiseResortResidence_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
    title: 'Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_2.png" /> CICLOVIA<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_3.png" /> LOTES<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_4.png" /> PASSEIO<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_5.png" /> RUAS<br />\
    <img src="styles/legend/AbuDhabiParadiseResortResidence_240_6.png" /> VIELA<br />' });
var format_AbuDhabiParadiseResortResidence_241 = new ol.format.GeoJSON();
var features_AbuDhabiParadiseResortResidence_241 = format_AbuDhabiParadiseResortResidence_241.readFeatures(json_AbuDhabiParadiseResortResidence_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbuDhabiParadiseResortResidence_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbuDhabiParadiseResortResidence_241.addFeatures(features_AbuDhabiParadiseResortResidence_241);
var lyr_AbuDhabiParadiseResortResidence_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbuDhabiParadiseResortResidence_241, 
                style: style_AbuDhabiParadiseResortResidence_241,
                popuplayertitle: 'Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/AbuDhabiParadiseResortResidence_241.png" /> Abu Dhabi Paradise Resort Residence'
            });
var format_EtapaAprovado26unid_242 = new ol.format.GeoJSON();
var features_EtapaAprovado26unid_242 = format_EtapaAprovado26unid_242.readFeatures(json_EtapaAprovado26unid_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EtapaAprovado26unid_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaAprovado26unid_242.addFeatures(features_EtapaAprovado26unid_242);
var lyr_EtapaAprovado26unid_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaAprovado26unid_242, 
                style: style_EtapaAprovado26unid_242,
                popuplayertitle: 'Etapa: Aprovado (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaAprovado26unid_242.png" /> Etapa: Aprovado (26 unid.)'
            });
var format_EtapaDiretriz22unid_243 = new ol.format.GeoJSON();
var features_EtapaDiretriz22unid_243 = format_EtapaDiretriz22unid_243.readFeatures(json_EtapaDiretriz22unid_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EtapaDiretriz22unid_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDiretriz22unid_243.addFeatures(features_EtapaDiretriz22unid_243);
var lyr_EtapaDiretriz22unid_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDiretriz22unid_243, 
                style: style_EtapaDiretriz22unid_243,
                popuplayertitle: 'Etapa: Diretriz (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDiretriz22unid_243.png" /> Etapa: Diretriz (22 unid.)'
            });
var format_EtapaDefinitiva11unid_244 = new ol.format.GeoJSON();
var features_EtapaDefinitiva11unid_244 = format_EtapaDefinitiva11unid_244.readFeatures(json_EtapaDefinitiva11unid_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EtapaDefinitiva11unid_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaDefinitiva11unid_244.addFeatures(features_EtapaDefinitiva11unid_244);
var lyr_EtapaDefinitiva11unid_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaDefinitiva11unid_244, 
                style: style_EtapaDefinitiva11unid_244,
                popuplayertitle: 'Etapa: Definitiva 11 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaDefinitiva11unid_244.png" /> Etapa: Definitiva 11 unid.)'
            });
var format_EtapaPrvia24unid_245 = new ol.format.GeoJSON();
var features_EtapaPrvia24unid_245 = format_EtapaPrvia24unid_245.readFeatures(json_EtapaPrvia24unid_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EtapaPrvia24unid_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EtapaPrvia24unid_245.addFeatures(features_EtapaPrvia24unid_245);
var lyr_EtapaPrvia24unid_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EtapaPrvia24unid_245, 
                style: style_EtapaPrvia24unid_245,
                popuplayertitle: 'Etapa: Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EtapaPrvia24unid_245.png" /> Etapa: Prévia (24 unid.)'
            });
var format_LoteamentosClandestinos69unid_246 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_246 = format_LoteamentosClandestinos69unid_246.readFeatures(json_LoteamentosClandestinos69unid_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentosClandestinos69unid_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_246.addFeatures(features_LoteamentosClandestinos69unid_246);
var lyr_LoteamentosClandestinos69unid_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_246, 
                style: style_LoteamentosClandestinos69unid_246,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_246.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_LoteamentosClandestinos69unid_247 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos69unid_247 = format_LoteamentosClandestinos69unid_247.readFeatures(json_LoteamentosClandestinos69unid_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentosClandestinos69unid_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos69unid_247.addFeatures(features_LoteamentosClandestinos69unid_247);
var lyr_LoteamentosClandestinos69unid_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos69unid_247, 
                style: style_LoteamentosClandestinos69unid_247,
                popuplayertitle: 'Loteamentos Clandestinos (69 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos69unid_247.png" /> Loteamentos Clandestinos (69 unid.)'
            });
var format_FazendaPalestina105unid_248 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_248 = format_FazendaPalestina105unid_248.readFeatures(json_FazendaPalestina105unid_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaPalestina105unid_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_248.addFeatures(features_FazendaPalestina105unid_248);
var lyr_FazendaPalestina105unid_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_248, 
                style: style_FazendaPalestina105unid_248,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_248.png" /> Fazenda Palestina (105 unid.)'
            });
var format_FazendaPalestina105unid_249 = new ol.format.GeoJSON();
var features_FazendaPalestina105unid_249 = format_FazendaPalestina105unid_249.readFeatures(json_FazendaPalestina105unid_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaPalestina105unid_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaPalestina105unid_249.addFeatures(features_FazendaPalestina105unid_249);
var lyr_FazendaPalestina105unid_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaPalestina105unid_249, 
                style: style_FazendaPalestina105unid_249,
                popuplayertitle: 'Fazenda Palestina (105 unid.)',
                interactive: true,
                title: '<img src="styles/legend/FazendaPalestina105unid_249.png" /> Fazenda Palestina (105 unid.)'
            });
var format_APP1745unid_250 = new ol.format.GeoJSON();
var features_APP1745unid_250 = format_APP1745unid_250.readFeatures(json_APP1745unid_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP1745unid_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_250.addFeatures(features_APP1745unid_250);
var lyr_APP1745unid_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_250, 
                style: style_APP1745unid_250,
                popuplayertitle: 'APP (1.745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_250.png" /> APP (1.745 unid.)'
            });
var format_RiosDuplos84unid_251 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_251 = format_RiosDuplos84unid_251.readFeatures(json_RiosDuplos84unid_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos84unid_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_251.addFeatures(features_RiosDuplos84unid_251);
var lyr_RiosDuplos84unid_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_251, 
                style: style_RiosDuplos84unid_251,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_251.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_252 = new ol.format.GeoJSON();
var features_MassasDgua270unid_252 = format_MassasDgua270unid_252.readFeatures(json_MassasDgua270unid_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua270unid_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_252.addFeatures(features_MassasDgua270unid_252);
var lyr_MassasDgua270unid_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_252, 
                style: style_MassasDgua270unid_252,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_252.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_253 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_253 = format_RiosSimples1842unid_253.readFeatures(json_RiosSimples1842unid_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples1842unid_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_253.addFeatures(features_RiosSimples1842unid_253);
var lyr_RiosSimples1842unid_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_253, 
                style: style_RiosSimples1842unid_253,
                popuplayertitle: 'Rios Simples (1.842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_253.png" /> Rios Simples (1.842 unid.)'
            });
var format_Nascentes821unid_254 = new ol.format.GeoJSON();
var features_Nascentes821unid_254 = format_Nascentes821unid_254.readFeatures(json_Nascentes821unid_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes821unid_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_254.addFeatures(features_Nascentes821unid_254);
var lyr_Nascentes821unid_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_254, 
                style: style_Nascentes821unid_254,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_254.png" /> Nascentes (821 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_255 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_255 = format_AntigoAterrodaFazendaMunicipal_255.readFeatures(json_AntigoAterrodaFazendaMunicipal_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipal_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_255.addFeatures(features_AntigoAterrodaFazendaMunicipal_255);
var lyr_AntigoAterrodaFazendaMunicipal_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_255, 
                style: style_AntigoAterrodaFazendaMunicipal_255,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_255.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256 = format_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256);
var lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256, 
                style: style_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Gás/Avatz (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.png" /> Antigo Aterro da Fazenda Municipal - PMs-Gás/Avatz (15 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257 = format_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257);
var lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257, 
                style: style_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Água/Avatz (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.png" /> Antigo Aterro da Fazenda Municipal - PMs-Água/Avatz (18 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258 = format_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.readFeatures(json_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.addFeatures(features_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258);
var lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258, 
                style: style_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - PMs-Água/Geo-Analítica (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.png" /> Antigo Aterro da Fazenda Municipal - PMs-Água/Geo-Analítica (15 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodasMaritacas_261 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_261 = format_AntigoAterrodasMaritacas_261.readFeatures(json_AntigoAterrodasMaritacas_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacas_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_261.addFeatures(features_AntigoAterrodasMaritacas_261);
var lyr_AntigoAterrodasMaritacas_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_261, 
                style: style_AntigoAterrodasMaritacas_261,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_261.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_ParqueZumbidosPalmares_263 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_263 = format_ParqueZumbidosPalmares_263.readFeatures(json_ParqueZumbidosPalmares_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueZumbidosPalmares_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_263.addFeatures(features_ParqueZumbidosPalmares_263);
var lyr_ParqueZumbidosPalmares_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_263, 
                style: style_ParqueZumbidosPalmares_263,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_263.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_reaN2_266 = new ol.format.GeoJSON();
var features_reaN2_266 = format_reaN2_266.readFeatures(json_reaN2_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaN2_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN2_266.addFeatures(features_reaN2_266);
var lyr_reaN2_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN2_266, 
                style: style_reaN2_266,
                popuplayertitle: 'Área N2',
                interactive: true,
                title: '<img src="styles/legend/reaN2_266.png" /> Área N2'
            });
var format_reaN1_267 = new ol.format.GeoJSON();
var features_reaN1_267 = format_reaN1_267.readFeatures(json_reaN1_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaN1_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN1_267.addFeatures(features_reaN1_267);
var lyr_reaN1_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN1_267, 
                style: style_reaN1_267,
                popuplayertitle: 'Área N1',
                interactive: true,
                title: '<img src="styles/legend/reaN1_267.png" /> Área N1'
            });
var format_reaN_268 = new ol.format.GeoJSON();
var features_reaN_268 = format_reaN_268.readFeatures(json_reaN_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaN_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_268.addFeatures(features_reaN_268);
var lyr_reaN_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_268, 
                style: style_reaN_268,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_268.png" /> Área N'
            });
var format_ConjuntoHabitacional_269 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_269 = format_ConjuntoHabitacional_269.readFeatures(json_ConjuntoHabitacional_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConjuntoHabitacional_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_269.addFeatures(features_ConjuntoHabitacional_269);
var lyr_ConjuntoHabitacional_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_269, 
                style: style_ConjuntoHabitacional_269,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_269.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_270 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_270 = format_AvdeacessoaoHortoeColgioAgrcola_270.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_270.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_270);
var lyr_AvdeacessoaoHortoeColgioAgrcola_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_270, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_270,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_270.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_271 = new ol.format.GeoJSON();
var features_reaK_271 = format_reaK_271.readFeatures(json_reaK_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaK_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_271.addFeatures(features_reaK_271);
var lyr_reaK_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_271, 
                style: style_reaK_271,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_271.png" /> Área K'
            });
var format_reaJ_272 = new ol.format.GeoJSON();
var features_reaJ_272 = format_reaJ_272.readFeatures(json_reaJ_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaJ_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_272.addFeatures(features_reaJ_272);
var lyr_reaJ_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_272, 
                style: style_reaJ_272,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_272.png" /> Área J'
            });
var format_reaI_273 = new ol.format.GeoJSON();
var features_reaI_273 = format_reaI_273.readFeatures(json_reaI_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaI_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_273.addFeatures(features_reaI_273);
var lyr_reaI_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_273, 
                style: style_reaI_273,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_273.png" /> Área I'
            });
var format_reaH_274 = new ol.format.GeoJSON();
var features_reaH_274 = format_reaH_274.readFeatures(json_reaH_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaH_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_274.addFeatures(features_reaH_274);
var lyr_reaH_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_274, 
                style: style_reaH_274,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_274.png" /> Área H'
            });
var format_reaG_275 = new ol.format.GeoJSON();
var features_reaG_275 = format_reaG_275.readFeatures(json_reaG_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaG_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_275.addFeatures(features_reaG_275);
var lyr_reaG_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_275, 
                style: style_reaG_275,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_275.png" /> Área G'
            });
var format_reaF_276 = new ol.format.GeoJSON();
var features_reaF_276 = format_reaF_276.readFeatures(json_reaF_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaF_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_276.addFeatures(features_reaF_276);
var lyr_reaF_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_276, 
                style: style_reaF_276,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_276.png" /> Área F'
            });
var format_reaE_277 = new ol.format.GeoJSON();
var features_reaE_277 = format_reaE_277.readFeatures(json_reaE_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaE_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_277.addFeatures(features_reaE_277);
var lyr_reaE_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_277, 
                style: style_reaE_277,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_277.png" /> Área E'
            });
var format_reaD_278 = new ol.format.GeoJSON();
var features_reaD_278 = format_reaD_278.readFeatures(json_reaD_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaD_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_278.addFeatures(features_reaD_278);
var lyr_reaD_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_278, 
                style: style_reaD_278,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_278.png" /> Área D'
            });
var format_reaC_279 = new ol.format.GeoJSON();
var features_reaC_279 = format_reaC_279.readFeatures(json_reaC_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaC_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_279.addFeatures(features_reaC_279);
var lyr_reaC_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_279, 
                style: style_reaC_279,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_279.png" /> Área C'
            });
var format_reaB_280 = new ol.format.GeoJSON();
var features_reaB_280 = format_reaB_280.readFeatures(json_reaB_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaB_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_280.addFeatures(features_reaB_280);
var lyr_reaB_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_280, 
                style: style_reaB_280,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_280.png" /> Área B'
            });
var format_reaA_281 = new ol.format.GeoJSON();
var features_reaA_281 = format_reaA_281.readFeatures(json_reaA_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaA_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_281.addFeatures(features_reaA_281);
var lyr_reaA_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_281, 
                style: style_reaA_281,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_281.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_282 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_282 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_282);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_282, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_282,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_282.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_283 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_283 = format_reaaseraverbadaPartedareaG_283.readFeatures(json_reaaseraverbadaPartedareaG_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaaseraverbadaPartedareaG_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_283.addFeatures(features_reaaseraverbadaPartedareaG_283);
var lyr_reaaseraverbadaPartedareaG_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_283, 
                style: style_reaaseraverbadaPartedareaG_283,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_283.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_DrenagensExistentes_284 = new ol.format.GeoJSON();
var features_DrenagensExistentes_284 = format_DrenagensExistentes_284.readFeatures(json_DrenagensExistentes_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrenagensExistentes_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_284.addFeatures(features_DrenagensExistentes_284);
var lyr_DrenagensExistentes_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_284, 
                style: style_DrenagensExistentes_284,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_284_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_284_1.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_284_2.png" /> DISSIPADOR<br />' });
var format_DrenagensExistentes_285 = new ol.format.GeoJSON();
var features_DrenagensExistentes_285 = format_DrenagensExistentes_285.readFeatures(json_DrenagensExistentes_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrenagensExistentes_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenagensExistentes_285.addFeatures(features_DrenagensExistentes_285);
var lyr_DrenagensExistentes_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrenagensExistentes_285, 
                style: style_DrenagensExistentes_285,
                popuplayertitle: 'Drenagens Existentes',
                interactive: true,
    title: 'Drenagens Existentes<br />\
    <img src="styles/legend/DrenagensExistentes_285_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/DrenagensExistentes_285_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/DrenagensExistentes_285_2.png" /> CAIXA<br />\
    <img src="styles/legend/DrenagensExistentes_285_3.png" /> CANALETA<br />\
    <img src="styles/legend/DrenagensExistentes_285_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/DrenagensExistentes_285_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/DrenagensExistentes_285_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/DrenagensExistentes_285_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/DrenagensExistentes_285_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/DrenagensExistentes_285_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/DrenagensExistentes_285_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/DrenagensExistentes_285_11.png" /> PV<br />' });
var format_Drenagens_286 = new ol.format.GeoJSON();
var features_Drenagens_286 = format_Drenagens_286.readFeatures(json_Drenagens_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenagens_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_286.addFeatures(features_Drenagens_286);
var lyr_Drenagens_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_286, 
                style: style_Drenagens_286,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_286_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_286_1.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_286_2.png" /> DISSIPADOR<br />' });
var format_Drenagens_287 = new ol.format.GeoJSON();
var features_Drenagens_287 = format_Drenagens_287.readFeatures(json_Drenagens_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenagens_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagens_287.addFeatures(features_Drenagens_287);
var lyr_Drenagens_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagens_287, 
                style: style_Drenagens_287,
                popuplayertitle: 'Drenagens',
                interactive: true,
    title: 'Drenagens<br />\
    <img src="styles/legend/Drenagens_287_0.png" /> BACIA CONTENCAO<br />\
    <img src="styles/legend/Drenagens_287_1.png" /> BOCA DE LOBO<br />\
    <img src="styles/legend/Drenagens_287_2.png" /> CAIXA<br />\
    <img src="styles/legend/Drenagens_287_3.png" /> CANALETA<br />\
    <img src="styles/legend/Drenagens_287_4.png" /> DIAMETRO 1000<br />\
    <img src="styles/legend/Drenagens_287_5.png" /> DIAMETRO 1200<br />\
    <img src="styles/legend/Drenagens_287_6.png" /> DIAMETRO 1500<br />\
    <img src="styles/legend/Drenagens_287_7.png" /> DIAMETRO 400<br />\
    <img src="styles/legend/Drenagens_287_8.png" /> DIAMETRO 600<br />\
    <img src="styles/legend/Drenagens_287_9.png" /> DIAMETRO 800<br />\
    <img src="styles/legend/Drenagens_287_10.png" /> DISSIPADOR<br />\
    <img src="styles/legend/Drenagens_287_11.png" /> PV<br />' });
var format_rvoreImuneaoCorte9unid_288 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_288 = format_rvoreImuneaoCorte9unid_288.readFeatures(json_rvoreImuneaoCorte9unid_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte9unid_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_288.addFeatures(features_rvoreImuneaoCorte9unid_288);
var lyr_rvoreImuneaoCorte9unid_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_288, 
                style: style_rvoreImuneaoCorte9unid_288,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_288.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_Voorocas27unid_289 = new ol.format.GeoJSON();
var features_Voorocas27unid_289 = format_Voorocas27unid_289.readFeatures(json_Voorocas27unid_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voorocas27unid_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas27unid_289.addFeatures(features_Voorocas27unid_289);
var lyr_Voorocas27unid_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas27unid_289, 
                style: style_Voorocas27unid_289,
                popuplayertitle: 'Voçorocas (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas27unid_289.png" /> Voçorocas (27 unid.)'
            });
var format_DeclividadeZonaUrbanaCopernicus30m_290 = new ol.format.GeoJSON();
var features_DeclividadeZonaUrbanaCopernicus30m_290 = format_DeclividadeZonaUrbanaCopernicus30m_290.readFeatures(json_DeclividadeZonaUrbanaCopernicus30m_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeclividadeZonaUrbanaCopernicus30m_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaUrbanaCopernicus30m_290.addFeatures(features_DeclividadeZonaUrbanaCopernicus30m_290);
var lyr_DeclividadeZonaUrbanaCopernicus30m_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaUrbanaCopernicus30m_290, 
                style: style_DeclividadeZonaUrbanaCopernicus30m_290,
                popuplayertitle: 'Declividade - Zona Urbana (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Urbana (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaUrbanaCopernicus30m_290_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralSulCopernicus30m_291 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralSulCopernicus30m_291 = format_DeclividadeZonaRuralSulCopernicus30m_291.readFeatures(json_DeclividadeZonaRuralSulCopernicus30m_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeclividadeZonaRuralSulCopernicus30m_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralSulCopernicus30m_291.addFeatures(features_DeclividadeZonaRuralSulCopernicus30m_291);
var lyr_DeclividadeZonaRuralSulCopernicus30m_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralSulCopernicus30m_291, 
                style: style_DeclividadeZonaRuralSulCopernicus30m_291,
                popuplayertitle: 'Declividade - Zona Rural - Sul (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Sul (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralSulCopernicus30m_291_8.png" /> 101 - 114%<br />' });
var format_DeclividadeZonaRuralNorteCopernicus30m_292 = new ol.format.GeoJSON();
var features_DeclividadeZonaRuralNorteCopernicus30m_292 = format_DeclividadeZonaRuralNorteCopernicus30m_292.readFeatures(json_DeclividadeZonaRuralNorteCopernicus30m_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeclividadeZonaRuralNorteCopernicus30m_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeZonaRuralNorteCopernicus30m_292.addFeatures(features_DeclividadeZonaRuralNorteCopernicus30m_292);
var lyr_DeclividadeZonaRuralNorteCopernicus30m_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeZonaRuralNorteCopernicus30m_292, 
                style: style_DeclividadeZonaRuralNorteCopernicus30m_292,
                popuplayertitle: 'Declividade - Zona Rural - Norte (Copernicus 30m)',
                interactive: true,
    title: 'Declividade - Zona Rural - Norte (Copernicus 30m)<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_0.png" /> 0 - 13%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_1.png" /> 13 - 25%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_2.png" /> 25 - 38%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_3.png" /> 38 - 51%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_4.png" /> 51 - 63%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_5.png" /> 63 - 76%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_6.png" /> 76 - 89%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_7.png" /> 89 - 101%<br />\
    <img src="styles/legend/DeclividadeZonaRuralNorteCopernicus30m_292_8.png" /> 101 - 114%<br />' });
var format_PBZPAEdifcioPrimeHELIPONTO_293 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_293 = format_PBZPAEdifcioPrimeHELIPONTO_293.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_293.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_293);
var lyr_PBZPAEdifcioPrimeHELIPONTO_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_293, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_293,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_293.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_294 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_294 = format_PBZPAEdifcioPrimeHELIPONTO_294.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_294.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_294);
var lyr_PBZPAEdifcioPrimeHELIPONTO_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_294, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_294,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_294_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_294_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_295 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_295 = format_PBZPAHospitalHELIPONTO_295.readFeatures(json_PBZPAHospitalHELIPONTO_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PBZPAHospitalHELIPONTO_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_295.addFeatures(features_PBZPAHospitalHELIPONTO_295);
var lyr_PBZPAHospitalHELIPONTO_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_295, 
                style: style_PBZPAHospitalHELIPONTO_295,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_295_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_296_11.png" /> Transição<br />' });
var format_ClasseVB_297 = new ol.format.GeoJSON();
var features_ClasseVB_297 = format_ClasseVB_297.readFeatures(json_ClasseVB_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseVB_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVB_297.addFeatures(features_ClasseVB_297);
var lyr_ClasseVB_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVB_297, 
                style: style_ClasseVB_297,
                popuplayertitle: 'Classe VB',
                interactive: true,
                title: '<img src="styles/legend/ClasseVB_297.png" /> Classe VB'
            });
var format_ClasseVA_298 = new ol.format.GeoJSON();
var features_ClasseVA_298 = format_ClasseVA_298.readFeatures(json_ClasseVA_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseVA_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseVA_298.addFeatures(features_ClasseVA_298);
var lyr_ClasseVA_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseVA_298, 
                style: style_ClasseVA_298,
                popuplayertitle: 'Classe VA',
                interactive: true,
                title: '<img src="styles/legend/ClasseVA_298.png" /> Classe VA'
            });
var format_ClasseIVC_299 = new ol.format.GeoJSON();
var features_ClasseIVC_299 = format_ClasseIVC_299.readFeatures(json_ClasseIVC_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIVC_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVC_299.addFeatures(features_ClasseIVC_299);
var lyr_ClasseIVC_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVC_299, 
                style: style_ClasseIVC_299,
                popuplayertitle: 'Classe IVC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVC_299.png" /> Classe IVC'
            });
var format_ClasseIVB_300 = new ol.format.GeoJSON();
var features_ClasseIVB_300 = format_ClasseIVB_300.readFeatures(json_ClasseIVB_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIVB_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVB_300.addFeatures(features_ClasseIVB_300);
var lyr_ClasseIVB_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVB_300, 
                style: style_ClasseIVB_300,
                popuplayertitle: 'Classe IVB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVB_300.png" /> Classe IVB'
            });
var format_ClasseIVA_301 = new ol.format.GeoJSON();
var features_ClasseIVA_301 = format_ClasseIVA_301.readFeatures(json_ClasseIVA_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIVA_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIVA_301.addFeatures(features_ClasseIVA_301);
var lyr_ClasseIVA_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIVA_301, 
                style: style_ClasseIVA_301,
                popuplayertitle: 'Classe IVA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIVA_301.png" /> Classe IVA'
            });
var format_ClasseIIIC_302 = new ol.format.GeoJSON();
var features_ClasseIIIC_302 = format_ClasseIIIC_302.readFeatures(json_ClasseIIIC_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIIIC_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIC_302.addFeatures(features_ClasseIIIC_302);
var lyr_ClasseIIIC_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIC_302, 
                style: style_ClasseIIIC_302,
                popuplayertitle: 'Classe IIIC',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIC_302.png" /> Classe IIIC'
            });
var format_ClasseIIIB_303 = new ol.format.GeoJSON();
var features_ClasseIIIB_303 = format_ClasseIIIB_303.readFeatures(json_ClasseIIIB_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIIIB_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIB_303.addFeatures(features_ClasseIIIB_303);
var lyr_ClasseIIIB_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIB_303, 
                style: style_ClasseIIIB_303,
                popuplayertitle: 'Classe IIIB',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIB_303.png" /> Classe IIIB'
            });
var format_ClasseIIIA_304 = new ol.format.GeoJSON();
var features_ClasseIIIA_304 = format_ClasseIIIA_304.readFeatures(json_ClasseIIIA_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseIIIA_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseIIIA_304.addFeatures(features_ClasseIIIA_304);
var lyr_ClasseIIIA_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseIIIA_304, 
                style: style_ClasseIIIA_304,
                popuplayertitle: 'Classe IIIA',
                interactive: true,
                title: '<img src="styles/legend/ClasseIIIA_304.png" /> Classe IIIA'
            });
var format_ClasseII_305 = new ol.format.GeoJSON();
var features_ClasseII_305 = format_ClasseII_305.readFeatures(json_ClasseII_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseII_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseII_305.addFeatures(features_ClasseII_305);
var lyr_ClasseII_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseII_305, 
                style: style_ClasseII_305,
                popuplayertitle: 'Classe II',
                interactive: true,
                title: '<img src="styles/legend/ClasseII_305.png" /> Classe II'
            });
var format_ClasseI_306 = new ol.format.GeoJSON();
var features_ClasseI_306 = format_ClasseI_306.readFeatures(json_ClasseI_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasseI_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasseI_306.addFeatures(features_ClasseI_306);
var lyr_ClasseI_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasseI_306, 
                style: style_ClasseI_306,
                popuplayertitle: 'Classe I',
                interactive: true,
                title: '<img src="styles/legend/ClasseI_306.png" /> Classe I'
            });
var format_APP169unid239527816m_307 = new ol.format.GeoJSON();
var features_APP169unid239527816m_307 = format_APP169unid239527816m_307.readFeatures(json_APP169unid239527816m_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP169unid239527816m_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid239527816m_307.addFeatures(features_APP169unid239527816m_307);
var lyr_APP169unid239527816m_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid239527816m_307, 
                style: style_APP169unid239527816m_307,
                popuplayertitle: 'APP (169 unid. / 2.395.278,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid239527816m_307.png" /> APP (169 unid. / 2.395.278,16 m²)'
            });
var format_reaInstitucional371unid208395759m_308 = new ol.format.GeoJSON();
var features_reaInstitucional371unid208395759m_308 = format_reaInstitucional371unid208395759m_308.readFeatures(json_reaInstitucional371unid208395759m_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional371unid208395759m_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional371unid208395759m_308.addFeatures(features_reaInstitucional371unid208395759m_308);
var lyr_reaInstitucional371unid208395759m_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional371unid208395759m_308, 
                style: style_reaInstitucional371unid208395759m_308,
                popuplayertitle: 'Área Institucional  (371 unid. / 2.083.957,59 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional371unid208395759m_308.png" /> Área Institucional  (371 unid. / 2.083.957,59 m²)'
            });
var format_reaPatrimonial65unid121924073m_309 = new ol.format.GeoJSON();
var features_reaPatrimonial65unid121924073m_309 = format_reaPatrimonial65unid121924073m_309.readFeatures(json_reaPatrimonial65unid121924073m_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial65unid121924073m_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial65unid121924073m_309.addFeatures(features_reaPatrimonial65unid121924073m_309);
var lyr_reaPatrimonial65unid121924073m_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial65unid121924073m_309, 
                style: style_reaPatrimonial65unid121924073m_309,
                popuplayertitle: 'Área Patrimonial (65 unid. / 1.219.240,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial65unid121924073m_309.png" /> Área Patrimonial (65 unid. / 1.219.240,73 m²)'
            });
var format_reaVerde2115unid881290721m_310 = new ol.format.GeoJSON();
var features_reaVerde2115unid881290721m_310 = format_reaVerde2115unid881290721m_310.readFeatures(json_reaVerde2115unid881290721m_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde2115unid881290721m_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2115unid881290721m_310.addFeatures(features_reaVerde2115unid881290721m_310);
var lyr_reaVerde2115unid881290721m_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2115unid881290721m_310, 
                style: style_reaVerde2115unid881290721m_310,
                popuplayertitle: 'Área Verde (2115 unid. / 8.812.907,21 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2115unid881290721m_310.png" /> Área Verde (2115 unid. / 8.812.907,21 m²)'
            });
var format_readeUsoEspecial278unid271349968m_311 = new ol.format.GeoJSON();
var features_readeUsoEspecial278unid271349968m_311 = format_readeUsoEspecial278unid271349968m_311.readFeatures(json_readeUsoEspecial278unid271349968m_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial278unid271349968m_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial278unid271349968m_311.addFeatures(features_readeUsoEspecial278unid271349968m_311);
var lyr_readeUsoEspecial278unid271349968m_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial278unid271349968m_311, 
                style: style_readeUsoEspecial278unid271349968m_311,
                popuplayertitle: 'Área de Uso Especial (278 unid. / 2.713.499,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial278unid271349968m_311.png" /> Área de Uso Especial (278 unid. / 2.713.499,68 m²)'
            });
var format_LoteamentoFechado146unid70632440m_312 = new ol.format.GeoJSON();
var features_LoteamentoFechado146unid70632440m_312 = format_LoteamentoFechado146unid70632440m_312.readFeatures(json_LoteamentoFechado146unid70632440m_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteamentoFechado146unid70632440m_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado146unid70632440m_312.addFeatures(features_LoteamentoFechado146unid70632440m_312);
var lyr_LoteamentoFechado146unid70632440m_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado146unid70632440m_312, 
                style: style_LoteamentoFechado146unid70632440m_312,
                popuplayertitle: 'Loteamento Fechado (146 unid. / 706.324,40 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado146unid70632440m_312.png" /> Loteamento Fechado (146 unid. / 706.324,40 m²)'
            });
var format_Lote251unid7505210m_313 = new ol.format.GeoJSON();
var features_Lote251unid7505210m_313 = format_Lote251unid7505210m_313.readFeatures(json_Lote251unid7505210m_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote251unid7505210m_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid7505210m_313.addFeatures(features_Lote251unid7505210m_313);
var lyr_Lote251unid7505210m_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid7505210m_313, 
                style: style_Lote251unid7505210m_313,
                popuplayertitle: 'Lote (251 unid. / 75.052,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid7505210m_313.png" /> Lote (251 unid. / 75.052,10 m²)'
            });
var format_Lote251unid_314 = new ol.format.GeoJSON();
var features_Lote251unid_314 = format_Lote251unid_314.readFeatures(json_Lote251unid_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote251unid_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid_314.addFeatures(features_Lote251unid_314);
var lyr_Lote251unid_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid_314, 
                style: style_Lote251unid_314,
                popuplayertitle: 'Lote (251 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid_314.png" /> Lote (251 unid.)'
            });
var format_LoteEdificao20unid508062m_315 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_315 = format_LoteEdificao20unid508062m_315.readFeatures(json_LoteEdificao20unid508062m_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEdificao20unid508062m_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_315.addFeatures(features_LoteEdificao20unid508062m_315);
var lyr_LoteEdificao20unid508062m_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_315, 
                style: style_LoteEdificao20unid508062m_315,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_315.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_316 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_316 = format_LoteEdificao20unid_316.readFeatures(json_LoteEdificao20unid_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEdificao20unid_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_316.addFeatures(features_LoteEdificao20unid_316);
var lyr_LoteEdificao20unid_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_316, 
                style: style_LoteEdificao20unid_316,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_316.png" /> Lote/Edificação (20 unid.)'
            });
var format_LeiloLEIN97542025Homologado4unid334770m_317 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid334770m_317 = format_LeiloLEIN97542025Homologado4unid334770m_317.readFeatures(json_LeiloLEIN97542025Homologado4unid334770m_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Homologado4unid334770m_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid334770m_317.addFeatures(features_LeiloLEIN97542025Homologado4unid334770m_317);
var lyr_LeiloLEIN97542025Homologado4unid334770m_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid334770m_317, 
                style: style_LeiloLEIN97542025Homologado4unid334770m_317,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid334770m_317.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid. / 3.347,70 m²)'
            });
var format_LeiloLEIN97542025Homologado4unid_318 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Homologado4unid_318 = format_LeiloLEIN97542025Homologado4unid_318.readFeatures(json_LeiloLEIN97542025Homologado4unid_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Homologado4unid_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Homologado4unid_318.addFeatures(features_LeiloLEIN97542025Homologado4unid_318);
var lyr_LeiloLEIN97542025Homologado4unid_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Homologado4unid_318, 
                style: style_LeiloLEIN97542025Homologado4unid_318,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Homologado4unid_318.png" /> Leilão - LEI Nº 9.754/2025 - Homologado (4 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319 = format_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid. / 3.520,00 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002652520256922unid_320 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002652520256922unid_320 = format_LeiloLEIN97542025Proc35162004100002652520256922unid_320.readFeatures(json_LeiloLEIN97542025Proc35162004100002652520256922unid_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_320.addFeatures(features_LeiloLEIN97542025Proc35162004100002652520256922unid_320);
var lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002652520256922unid_320, 
                style: style_LeiloLEIN97542025Proc35162004100002652520256922unid_320,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002652520256922unid_320.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00026525/2025-69 (22 unid.)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321 = format_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid. / 32.404,62 m²)'
            });
var format_LeiloLEIN97542025Proc351620041000007954202537196unid_322 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc351620041000007954202537196unid_322 = format_LeiloLEIN97542025Proc351620041000007954202537196unid_322.readFeatures(json_LeiloLEIN97542025Proc351620041000007954202537196unid_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_322.addFeatures(features_LeiloLEIN97542025Proc351620041000007954202537196unid_322);
var lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc351620041000007954202537196unid_322, 
                style: style_LeiloLEIN97542025Proc351620041000007954202537196unid_322,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc351620041000007954202537196unid_322.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00007954/2025-37 (196 unid.)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323 = format_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid. / 20.920,83 m²)'
            });
var format_LeiloLEIN97542025Proc35162004100002198620254518unid_324 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025Proc35162004100002198620254518unid_324 = format_LeiloLEIN97542025Proc35162004100002198620254518unid_324.readFeatures(json_LeiloLEIN97542025Proc35162004100002198620254518unid_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_324.addFeatures(features_LeiloLEIN97542025Proc35162004100002198620254518unid_324);
var lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025Proc35162004100002198620254518unid_324, 
                style: style_LeiloLEIN97542025Proc35162004100002198620254518unid_324,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025Proc35162004100002198620254518unid_324.png" /> Leilão - LEI Nº 9.754/2025 - Proc 3516200.410.00021986/2025-45 (18 unid.)'
            });
var format_LoteEMDEF10unid218783m_325 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_325 = format_LoteEMDEF10unid218783m_325.readFeatures(json_LoteEMDEF10unid218783m_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid218783m_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_325.addFeatures(features_LoteEMDEF10unid218783m_325);
var lyr_LoteEMDEF10unid218783m_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_325, 
                style: style_LoteEMDEF10unid218783m_325,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_325.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_326 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_326 = format_LoteEMDEF10unid_326.readFeatures(json_LoteEMDEF10unid_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_326.addFeatures(features_LoteEMDEF10unid_326);
var lyr_LoteEMDEF10unid_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_326, 
                style: style_LoteEMDEF10unid_326,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_326.png" /> Lote EMDEF (10 unid.)'
            });
var format_TRPRLCETESB2unid_327 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_327 = format_TRPRLCETESB2unid_327.readFeatures(json_TRPRLCETESB2unid_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_327.addFeatures(features_TRPRLCETESB2unid_327);
var lyr_TRPRLCETESB2unid_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_327, 
                style: style_TRPRLCETESB2unid_327,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_327.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_328 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_328 = format_TRPRLCETESB2unid_328.readFeatures(json_TRPRLCETESB2unid_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_328.addFeatures(features_TRPRLCETESB2unid_328);
var lyr_TRPRLCETESB2unid_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_328, 
                style: style_TRPRLCETESB2unid_328,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_328.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TCRAMunicipal14unid_329 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_329 = format_TCRAMunicipal14unid_329.readFeatures(json_TCRAMunicipal14unid_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal14unid_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_329.addFeatures(features_TCRAMunicipal14unid_329);
var lyr_TCRAMunicipal14unid_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_329, 
                style: style_TCRAMunicipal14unid_329,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_329.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_330 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_330 = format_TCRAMunicipal14unid_330.readFeatures(json_TCRAMunicipal14unid_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal14unid_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_330.addFeatures(features_TCRAMunicipal14unid_330);
var lyr_TCRAMunicipal14unid_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_330, 
                style: style_TCRAMunicipal14unid_330,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_330.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_331 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_331 = format_TCRACETESBPARCELAMENTO32unid_331.readFeatures(json_TCRACETESBPARCELAMENTO32unid_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_331.addFeatures(features_TCRACETESBPARCELAMENTO32unid_331);
var lyr_TCRACETESBPARCELAMENTO32unid_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_331, 
                style: style_TCRACETESBPARCELAMENTO32unid_331,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_331.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESBPARCELAMENTO32unid_332 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO32unid_332 = format_TCRACETESBPARCELAMENTO32unid_332.readFeatures(json_TCRACETESBPARCELAMENTO32unid_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESBPARCELAMENTO32unid_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO32unid_332.addFeatures(features_TCRACETESBPARCELAMENTO32unid_332);
var lyr_TCRACETESBPARCELAMENTO32unid_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO32unid_332, 
                style: style_TCRACETESBPARCELAMENTO32unid_332,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (32 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO32unid_332.png" /> TCRA CETESB / PARCELAMENTO (32 unid.)'
            });
var format_TCRACETESB30unid_333 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_333 = format_TCRACETESB30unid_333.readFeatures(json_TCRACETESB30unid_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB30unid_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_333.addFeatures(features_TCRACETESB30unid_333);
var lyr_TCRACETESB30unid_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_333, 
                style: style_TCRACETESB30unid_333,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_333.png" /> TCRA CETESB (30 unid.)'
            });
var format_TCRACETESB30unid_334 = new ol.format.GeoJSON();
var features_TCRACETESB30unid_334 = format_TCRACETESB30unid_334.readFeatures(json_TCRACETESB30unid_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB30unid_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB30unid_334.addFeatures(features_TCRACETESB30unid_334);
var lyr_TCRACETESB30unid_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB30unid_334, 
                style: style_TCRACETESB30unid_334,
                popuplayertitle: 'TCRA CETESB (30 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB30unid_334.png" /> TCRA CETESB (30 unid.)'
            });
var format_TACMinistrioPblico9unid_335 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_335 = format_TACMinistrioPblico9unid_335.readFeatures(json_TACMinistrioPblico9unid_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_335.addFeatures(features_TACMinistrioPblico9unid_335);
var lyr_TACMinistrioPblico9unid_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_335, 
                style: style_TACMinistrioPblico9unid_335,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_335.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_336 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_336 = format_TACMinistrioPblico9unid_336.readFeatures(json_TACMinistrioPblico9unid_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_336.addFeatures(features_TACMinistrioPblico9unid_336);
var lyr_TACMinistrioPblico9unid_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_336, 
                style: style_TACMinistrioPblico9unid_336,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_336.png" /> TAC Ministério Público (9 unid.)'
            });
var format_PlantioVoluntrio1unid_337 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_337 = format_PlantioVoluntrio1unid_337.readFeatures(json_PlantioVoluntrio1unid_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_337.addFeatures(features_PlantioVoluntrio1unid_337);
var lyr_PlantioVoluntrio1unid_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_337, 
                style: style_PlantioVoluntrio1unid_337,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_337.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_338 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_338 = format_PlantioVoluntrio1unid_338.readFeatures(json_PlantioVoluntrio1unid_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_338.addFeatures(features_PlantioVoluntrio1unid_338);
var lyr_PlantioVoluntrio1unid_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_338, 
                style: style_PlantioVoluntrio1unid_338,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_338.png" /> Plantio Voluntário (1 unid.)'
            });
var format_CartaAnuncia21unid_339 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_339 = format_CartaAnuncia21unid_339.readFeatures(json_CartaAnuncia21unid_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia21unid_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_339.addFeatures(features_CartaAnuncia21unid_339);
var lyr_CartaAnuncia21unid_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_339, 
                style: style_CartaAnuncia21unid_339,
                popuplayertitle: 'Carta Anuência (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_339.png" /> Carta Anuência (21 unid.)'
            });
var format_CartaAnuncia21unid_340 = new ol.format.GeoJSON();
var features_CartaAnuncia21unid_340 = format_CartaAnuncia21unid_340.readFeatures(json_CartaAnuncia21unid_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia21unid_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia21unid_340.addFeatures(features_CartaAnuncia21unid_340);
var lyr_CartaAnuncia21unid_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia21unid_340, 
                style: style_CartaAnuncia21unid_340,
                popuplayertitle: 'Carta Anuência (21unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia21unid_340.png" /> Carta Anuência (21unid.)'
            });
var format_AoCivilPblica1unid_341 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_341 = format_AoCivilPblica1unid_341.readFeatures(json_AoCivilPblica1unid_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_341.addFeatures(features_AoCivilPblica1unid_341);
var lyr_AoCivilPblica1unid_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_341, 
                style: style_AoCivilPblica1unid_341,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_341.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_342 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_342 = format_AoCivilPblica1unid_342.readFeatures(json_AoCivilPblica1unid_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_342.addFeatures(features_AoCivilPblica1unid_342);
var lyr_AoCivilPblica1unid_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_342, 
                style: style_AoCivilPblica1unid_342,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_342.png" /> Ação Civil Pública (1 unid.)'
            });
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_TRPRLCETESB2unid_327,lyr_TRPRLCETESB2unid_328,lyr_TCRAMunicipal14unid_329,lyr_TCRAMunicipal14unid_330,lyr_TCRACETESBPARCELAMENTO32unid_331,lyr_TCRACETESBPARCELAMENTO32unid_332,lyr_TCRACETESB30unid_333,lyr_TCRACETESB30unid_334,lyr_TACMinistrioPblico9unid_335,lyr_TACMinistrioPblico9unid_336,lyr_PlantioVoluntrio1unid_337,lyr_PlantioVoluntrio1unid_338,lyr_CartaAnuncia21unid_339,lyr_CartaAnuncia21unid_340,lyr_AoCivilPblica1unid_341,lyr_AoCivilPblica1unid_342,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_APP169unid239527816m_307,lyr_reaInstitucional371unid208395759m_308,lyr_reaPatrimonial65unid121924073m_309,lyr_reaVerde2115unid881290721m_310,lyr_readeUsoEspecial278unid271349968m_311,lyr_LoteamentoFechado146unid70632440m_312,lyr_Lote251unid7505210m_313,lyr_Lote251unid_314,lyr_LoteEdificao20unid508062m_315,lyr_LoteEdificao20unid_316,lyr_LeiloLEIN97542025Homologado4unid334770m_317,lyr_LeiloLEIN97542025Homologado4unid_318,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319,lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321,lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323,lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324,lyr_LoteEMDEF10unid218783m_325,lyr_LoteEMDEF10unid_326,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_ClassesdeRiscoIPT = new ol.layer.Group({
                                layers: [lyr_ClasseVB_297,lyr_ClasseVA_298,lyr_ClasseIVC_299,lyr_ClasseIVB_300,lyr_ClasseIVA_301,lyr_ClasseIIIC_302,lyr_ClasseIIIB_303,lyr_ClasseIIIA_304,lyr_ClasseII_305,lyr_ClasseI_306,],
                                fold: 'close',
                                title: 'Classes de Risco IPT'});
var group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_293,lyr_PBZPAEdifcioPrimeHELIPONTO_294,lyr_PBZPAHospitalHELIPONTO_295,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296,],
                                fold: 'close',
                                title: 'Controle Aéreo – Plano Básico de Zona de Proteção de Aeródromo'});
var group_Declividade = new ol.layer.Group({
                                layers: [lyr_DeclividadeZonaUrbanaCopernicus30m_290,lyr_DeclividadeZonaRuralSulCopernicus30m_291,lyr_DeclividadeZonaRuralNorteCopernicus30m_292,],
                                fold: 'close',
                                title: 'Declividade'});
var group_Diversos = new ol.layer.Group({
                                layers: [lyr_rvoreImuneaoCorte9unid_288,lyr_Voorocas27unid_289,],
                                fold: 'close',
                                title: 'Diversos'});
var group_Drenagem = new ol.layer.Group({
                                layers: [lyr_DrenagensExistentes_284,lyr_DrenagensExistentes_285,lyr_Drenagens_286,lyr_Drenagens_287,],
                                fold: 'close',
                                title: 'Drenagem'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN2_266,lyr_reaN1_267,lyr_reaN_268,lyr_ConjuntoHabitacional_269,lyr_AvdeacessoaoHortoeColgioAgrcola_270,lyr_reaK_271,lyr_reaJ_272,lyr_reaI_273,lyr_reaH_274,lyr_reaG_275,lyr_reaF_276,lyr_reaE_277,lyr_reaD_278,lyr_reaC_279,lyr_reaB_280,lyr_reaA_281,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282,lyr_reaaseraverbadaPartedareaG_283,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_AntigoAterrodaFazendaMunicipal_255,lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256,lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257,lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260,lyr_AntigoAterrodasMaritacas_261,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262,lyr_ParqueZumbidosPalmares_263,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_250,lyr_RiosDuplos84unid_251,lyr_MassasDgua270unid_252,lyr_RiosSimples1842unid_253,lyr_Nascentes821unid_254,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinos69unid_246,lyr_LoteamentosClandestinos69unid_247,lyr_FazendaPalestina105unid_248,lyr_FazendaPalestina105unid_249,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_Vivenna_54,lyr_Vivenna_55,lyr_VittaSoVicente_56,lyr_VittaSoVicente_57,lyr_VittaJardimSimes_58,lyr_VittaJardimSimes_59,lyr_VittaAlvorada_60,lyr_VittaAlvorada_61,lyr_VilaDiEspanha_62,lyr_VilaDiEspanha_63,lyr_VillaPucci_64,lyr_VillaPucci_65,lyr_VillaDoratta_66,lyr_VillaDoratta_67,lyr_VillaBella_68,lyr_VillaBella_69,lyr_Versalhes_70,lyr_Versalhes_71,lyr_TorontoResidence_72,lyr_TorontoResidence_73,lyr_TerraNova_74,lyr_TerraNova_75,lyr_Sonetto_76,lyr_Sonetto_77,lyr_SMARTFRANCAEIXORESIDENCIAL2_78,lyr_SMARTFRANCAEIXORESIDENCIAL2_79,lyr_SMARTFRANCAEIXORESIDENCIAL1_80,lyr_SMARTFRANCAEIXORESIDENCIAL1_81,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82,lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83,lyr_ServidoRamal138kVFranca4Guanabara_84,lyr_ServidoRamal138kVFranca4Guanabara_85,lyr_SantaLina_86,lyr_SantaLina_87,lyr_SantAnita_88,lyr_SantAnita_89,lyr_RuaAlfioBenedini_90,lyr_RuaAlfioBenedini_91,lyr_RuaAlfioBenedini_92,lyr_ResidencialValeVerde_93,lyr_ResidencialValeVerde_94,lyr_ResidencialYasminTorres_95,lyr_ResidencialYasminTorres_96,lyr_ResidencialSoCarlosII_97,lyr_ResidencialSoCarlosII_98,lyr_ResidencialSoCarlosI_99,lyr_ResidencialSoCarlosI_100,lyr_ResidencialSantaIns_101,lyr_ResidencialSantaIns_102,lyr_ResidencialSantaF_103,lyr_ResidencialSantaF_104,lyr_ResidencialQuintadosOitis_105,lyr_ResidencialQuintadosOitis_106,lyr_ResidencialQuintadoSol_107,lyr_ResidencialQuintadoSol_108,lyr_ResidencialPousoAlegreII_109,lyr_ResidencialPousoAlegreII_110,lyr_ResidencialPousoAlegre_111,lyr_ResidencialPousoAlegre_112,lyr_ResicencialNairRetuciII_113,lyr_ResicencialNairRetuciII_114,lyr_ResicencialNairRetuci_115,lyr_ResicencialNairRetuci_116,lyr_ResidencialMoradadoBosque_117,lyr_ResidencialMoradadoBosque_118,lyr_ResidencialMarthaHelena_119,lyr_ResidencialMarthaHelena_120,lyr_ResidencialMarioTasso_121,lyr_ResidencialMarioTasso_122,lyr_ResidencialJardimCanada_123,lyr_ResidencialJardimCanada_124,lyr_ResidencialJabuticabeiras_125,lyr_ResidencialJabuticabeiras_126,lyr_ResidencialFrutuoso_127,lyr_ResidencialFrutuoso_128,lyr_ResidencialEssenza_129,lyr_ResidencialEssenza_130,lyr_ResidencialDomingosJardini_131,lyr_ResidencialDomingosJardini_132,lyr_ResidencialCintraAlves_133,lyr_ResidencialCintraAlves_134,lyr_ResidencialBoaVista_135,lyr_ResidencialBoaVista_136,lyr_ResidencialAltodaFazenda_137,lyr_ResidencialAltodaFazenda_138,lyr_RecantoMeneghetti_139,lyr_RecantoMeneghetti_140,lyr_Quadra18VilaExposio_141,lyr_Quadra18VilaExposio_142,lyr_ProlongamentoSamelPark_143,lyr_ProlongamentoSamelPark_144,lyr_ParqueVillaLobos_145,lyr_ParqueVillaLobos_146,lyr_ParquePalmeiraImperial_147,lyr_ParquePalmeiraImperial_148,lyr_ParqueJacarand_149,lyr_ParqueJacarand_150,lyr_ParqueFlora_151,lyr_ParqueFlora_152,lyr_ParquedosSabias_153,lyr_ParquedosSabias_154,lyr_ParagonFaseII_155,lyr_ParagonFaseII_156,lyr_Paragon_157,lyr_Paragon_158,lyr_PalmeiraReal_159,lyr_PalmeiraReal_160,lyr_MoradadoVerdeII_161,lyr_MoradadoVerdeII_162,lyr_MoradadaMata_163,lyr_MoradadaMata_164,lyr_Monti_165,lyr_Monti_166,lyr_MontBlancResidence_167,lyr_MontBlancResidence_168,lyr_MasterplanDespaschoal_169,lyr_MasterplanDespaschoal_170,lyr_MasterplanDespaschoal_171,lyr_MasteplanBildVitta_172,lyr_MasteplanBildVitta_173,lyr_MasteplanBildVitta_174,lyr_MarianaAlarcon_175,lyr_MarianaAlarcon_176,lyr_Loteamentolamo_177,lyr_Loteamentolamo_178,lyr_JardimPherola_179,lyr_JardimPherola_180,lyr_JardimMariaLuiza_181,lyr_JardimMariaLuiza_182,lyr_JardimHorizonte_183,lyr_JardimHorizonte_184,lyr_JardimFlora_185,lyr_JardimFlora_186,lyr_IrineuZanetiII_187,lyr_IrineuZanetiII_188,lyr_Infratcnica_189,lyr_Infratcnica_190,lyr_HorizResidence_191,lyr_HorizResidence_192,lyr_GlebaNossaSenhoraAuxiliadora_193,lyr_GlebaNossaSenhoraAuxiliadora_194,lyr_Ferracini_195,lyr_Ferracini_196,lyr_FrancaB6_197,lyr_FrancaB6_198,lyr_FazendaProgresso_199,lyr_FazendaProgresso_200,lyr_FazendaeGranjaSantaRita2_201,lyr_FazendaeGranjaSantaRita2_202,lyr_FazendaeGranjaSantaRita_203,lyr_FazendaeGranjaSantaRita_204,lyr_Essence_205,lyr_Essence_206,lyr_Elias_207,lyr_Elias_208,lyr_EdifcioSolNascente_209,lyr_EdifcioSolNascente_210,lyr_EdifcioRuadoSol_211,lyr_EdifcioRuadoSol_212,lyr_EdifcioResidencialHope_213,lyr_EdifcioResidencialHope_214,lyr_DiocesedeFranca_215,lyr_DiocesedeFranca_216,lyr_DaVinci_217,lyr_DaVinci_218,lyr_CondomnioIICityPetrpolis_219,lyr_CondomnioIICityPetrpolis_220,lyr_CondomnioICityPetrpolis_221,lyr_CondomnioICityPetrpolis_222,lyr_Colorado_223,lyr_Colorado_224,lyr_CidadeJardim_225,lyr_CidadeJardim_226,lyr_ChacaraOlaria_227,lyr_ChacaraOlaria_228,lyr_ChacaraBelaVista_229,lyr_ChacaraBelaVista_230,lyr_BordadaMata_231,lyr_BordadaMata_232,lyr_Arteris_233,lyr_Arteris_234,lyr_ArterisFaixadeDomnioFrancaSP_3342_235,lyr_ArterisFaixadeDomnioFrancaSP_3452_236,lyr_ArterisFaixadeDomnioFrancaSPA_397334_237,lyr_Arizona_238,lyr_Arizona_239,lyr_AbuDhabiParadiseResortResidence_240,lyr_AbuDhabiParadiseResortResidence_241,lyr_EtapaAprovado26unid_242,lyr_EtapaDiretriz22unid_243,lyr_EtapaDefinitiva11unid_244,lyr_EtapaPrvia24unid_245,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinosRegularizado9unid_52,lyr_LoteamentosClandestinosRegularizado9unid_53,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_ObrasPblicas = new ol.layer.Group({
                                layers: [lyr_UBSdoResidencialPeresElias_50,lyr_UBSdoResidencialPeresElias_51,],
                                fold: 'close',
                                title: 'Obras Públicas'});
var group_RelatrioAmbiental = new ol.layer.Group({
                                layers: [lyr_FazendaBarroPretoeBambus_43,lyr_Matrcula106206_44,lyr_RecantoEmanuelMatrcula95782_45,lyr_RecantoEmanuelMatrcula95783_46,lyr_PortaldosIndaias_47,lyr_StioNossaSenhoraAparecida_48,lyr_LoteamentosClandestinos3unid_49,],
                                fold: 'close',
                                title: 'Relatório Ambiental'});
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_ARORemanescentesFlorestais_5.setVisible(false);lyr_AROreadeAmortecimento_6.setVisible(false);lyr_AROFaixadeCuestas_7.setVisible(false);lyr_AROAPP_8.setVisible(false);lyr_ARAIncongrunciasemAPP_9.setVisible(false);lyr_ARAETELagoas_10.setVisible(false);lyr_ARAAterros_11.setVisible(false);lyr_AODreaUrbanaConsolidada_12.setVisible(false);lyr_AODBaixaDensidadeNvel3_13.setVisible(false);lyr_AODBaixaDensidadeNvel2_14.setVisible(false);lyr_AODBaixaDensidadeNvel1_15.setVisible(false);lyr_AODAUSFase2_16.setVisible(false);lyr_AODAUSFase1_17.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_20.setVisible(false);lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_21.setVisible(false);lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_22.setVisible(false);lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_23.setVisible(false);lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_24.setVisible(false);lyr_MacrozonasMacrozonadoRioCanoas_25.setVisible(false);lyr_MacrozonasSubMacrozonadeExpansoUrbana_26.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_27.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoRestrita_28.setVisible(false);lyr_ExpansoUrbanaLCN0502003_29.setVisible(false);lyr_ExpansoUrbanaLCN1402009_30.setVisible(false);lyr_ExpansoUrbanaLCN2352013_31.setVisible(false);lyr_ExpansoUrbanaLCN3242019_32.setVisible(false);lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_33.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_34.setVisible(false);lyr_SistemaVirioRodovias_35.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_36.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_37.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_38.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_39.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_40.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_41.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_42.setVisible(false);lyr_FazendaBarroPretoeBambus_43.setVisible(false);lyr_Matrcula106206_44.setVisible(false);lyr_RecantoEmanuelMatrcula95782_45.setVisible(false);lyr_RecantoEmanuelMatrcula95783_46.setVisible(false);lyr_PortaldosIndaias_47.setVisible(false);lyr_StioNossaSenhoraAparecida_48.setVisible(false);lyr_LoteamentosClandestinos3unid_49.setVisible(false);lyr_UBSdoResidencialPeresElias_50.setVisible(false);lyr_UBSdoResidencialPeresElias_51.setVisible(false);lyr_LoteamentosClandestinosRegularizado9unid_52.setVisible(false);lyr_LoteamentosClandestinosRegularizado9unid_53.setVisible(false);lyr_Vivenna_54.setVisible(false);lyr_Vivenna_55.setVisible(false);lyr_VittaSoVicente_56.setVisible(false);lyr_VittaSoVicente_57.setVisible(false);lyr_VittaJardimSimes_58.setVisible(false);lyr_VittaJardimSimes_59.setVisible(false);lyr_VittaAlvorada_60.setVisible(false);lyr_VittaAlvorada_61.setVisible(false);lyr_VilaDiEspanha_62.setVisible(false);lyr_VilaDiEspanha_63.setVisible(false);lyr_VillaPucci_64.setVisible(false);lyr_VillaPucci_65.setVisible(false);lyr_VillaDoratta_66.setVisible(false);lyr_VillaDoratta_67.setVisible(false);lyr_VillaBella_68.setVisible(false);lyr_VillaBella_69.setVisible(false);lyr_Versalhes_70.setVisible(false);lyr_Versalhes_71.setVisible(false);lyr_TorontoResidence_72.setVisible(false);lyr_TorontoResidence_73.setVisible(false);lyr_TerraNova_74.setVisible(false);lyr_TerraNova_75.setVisible(false);lyr_Sonetto_76.setVisible(false);lyr_Sonetto_77.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_78.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL2_79.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_80.setVisible(false);lyr_SMARTFRANCAEIXORESIDENCIAL1_81.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82.setVisible(false);lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_84.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_85.setVisible(false);lyr_SantaLina_86.setVisible(false);lyr_SantaLina_87.setVisible(false);lyr_SantAnita_88.setVisible(false);lyr_SantAnita_89.setVisible(false);lyr_RuaAlfioBenedini_90.setVisible(false);lyr_RuaAlfioBenedini_91.setVisible(false);lyr_RuaAlfioBenedini_92.setVisible(false);lyr_ResidencialValeVerde_93.setVisible(false);lyr_ResidencialValeVerde_94.setVisible(false);lyr_ResidencialYasminTorres_95.setVisible(false);lyr_ResidencialYasminTorres_96.setVisible(false);lyr_ResidencialSoCarlosII_97.setVisible(false);lyr_ResidencialSoCarlosII_98.setVisible(false);lyr_ResidencialSoCarlosI_99.setVisible(false);lyr_ResidencialSoCarlosI_100.setVisible(false);lyr_ResidencialSantaIns_101.setVisible(false);lyr_ResidencialSantaIns_102.setVisible(false);lyr_ResidencialSantaF_103.setVisible(false);lyr_ResidencialSantaF_104.setVisible(false);lyr_ResidencialQuintadosOitis_105.setVisible(false);lyr_ResidencialQuintadosOitis_106.setVisible(false);lyr_ResidencialQuintadoSol_107.setVisible(false);lyr_ResidencialQuintadoSol_108.setVisible(false);lyr_ResidencialPousoAlegreII_109.setVisible(false);lyr_ResidencialPousoAlegreII_110.setVisible(false);lyr_ResidencialPousoAlegre_111.setVisible(false);lyr_ResidencialPousoAlegre_112.setVisible(false);lyr_ResicencialNairRetuciII_113.setVisible(false);lyr_ResicencialNairRetuciII_114.setVisible(false);lyr_ResicencialNairRetuci_115.setVisible(false);lyr_ResicencialNairRetuci_116.setVisible(false);lyr_ResidencialMoradadoBosque_117.setVisible(false);lyr_ResidencialMoradadoBosque_118.setVisible(false);lyr_ResidencialMarthaHelena_119.setVisible(false);lyr_ResidencialMarthaHelena_120.setVisible(false);lyr_ResidencialMarioTasso_121.setVisible(false);lyr_ResidencialMarioTasso_122.setVisible(false);lyr_ResidencialJardimCanada_123.setVisible(false);lyr_ResidencialJardimCanada_124.setVisible(false);lyr_ResidencialJabuticabeiras_125.setVisible(false);lyr_ResidencialJabuticabeiras_126.setVisible(false);lyr_ResidencialFrutuoso_127.setVisible(false);lyr_ResidencialFrutuoso_128.setVisible(false);lyr_ResidencialEssenza_129.setVisible(false);lyr_ResidencialEssenza_130.setVisible(false);lyr_ResidencialDomingosJardini_131.setVisible(false);lyr_ResidencialDomingosJardini_132.setVisible(false);lyr_ResidencialCintraAlves_133.setVisible(false);lyr_ResidencialCintraAlves_134.setVisible(false);lyr_ResidencialBoaVista_135.setVisible(false);lyr_ResidencialBoaVista_136.setVisible(false);lyr_ResidencialAltodaFazenda_137.setVisible(false);lyr_ResidencialAltodaFazenda_138.setVisible(false);lyr_RecantoMeneghetti_139.setVisible(false);lyr_RecantoMeneghetti_140.setVisible(false);lyr_Quadra18VilaExposio_141.setVisible(false);lyr_Quadra18VilaExposio_142.setVisible(false);lyr_ProlongamentoSamelPark_143.setVisible(false);lyr_ProlongamentoSamelPark_144.setVisible(false);lyr_ParqueVillaLobos_145.setVisible(false);lyr_ParqueVillaLobos_146.setVisible(false);lyr_ParquePalmeiraImperial_147.setVisible(false);lyr_ParquePalmeiraImperial_148.setVisible(false);lyr_ParqueJacarand_149.setVisible(false);lyr_ParqueJacarand_150.setVisible(false);lyr_ParqueFlora_151.setVisible(false);lyr_ParqueFlora_152.setVisible(false);lyr_ParquedosSabias_153.setVisible(false);lyr_ParquedosSabias_154.setVisible(false);lyr_ParagonFaseII_155.setVisible(false);lyr_ParagonFaseII_156.setVisible(false);lyr_Paragon_157.setVisible(false);lyr_Paragon_158.setVisible(false);lyr_PalmeiraReal_159.setVisible(false);lyr_PalmeiraReal_160.setVisible(false);lyr_MoradadoVerdeII_161.setVisible(false);lyr_MoradadoVerdeII_162.setVisible(false);lyr_MoradadaMata_163.setVisible(false);lyr_MoradadaMata_164.setVisible(false);lyr_Monti_165.setVisible(false);lyr_Monti_166.setVisible(false);lyr_MontBlancResidence_167.setVisible(false);lyr_MontBlancResidence_168.setVisible(false);lyr_MasterplanDespaschoal_169.setVisible(false);lyr_MasterplanDespaschoal_170.setVisible(false);lyr_MasterplanDespaschoal_171.setVisible(false);lyr_MasteplanBildVitta_172.setVisible(false);lyr_MasteplanBildVitta_173.setVisible(false);lyr_MasteplanBildVitta_174.setVisible(false);lyr_MarianaAlarcon_175.setVisible(false);lyr_MarianaAlarcon_176.setVisible(false);lyr_Loteamentolamo_177.setVisible(false);lyr_Loteamentolamo_178.setVisible(false);lyr_JardimPherola_179.setVisible(false);lyr_JardimPherola_180.setVisible(false);lyr_JardimMariaLuiza_181.setVisible(false);lyr_JardimMariaLuiza_182.setVisible(false);lyr_JardimHorizonte_183.setVisible(false);lyr_JardimHorizonte_184.setVisible(false);lyr_JardimFlora_185.setVisible(false);lyr_JardimFlora_186.setVisible(false);lyr_IrineuZanetiII_187.setVisible(false);lyr_IrineuZanetiII_188.setVisible(false);lyr_Infratcnica_189.setVisible(false);lyr_Infratcnica_190.setVisible(false);lyr_HorizResidence_191.setVisible(false);lyr_HorizResidence_192.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_193.setVisible(false);lyr_GlebaNossaSenhoraAuxiliadora_194.setVisible(false);lyr_Ferracini_195.setVisible(false);lyr_Ferracini_196.setVisible(false);lyr_FrancaB6_197.setVisible(false);lyr_FrancaB6_198.setVisible(false);lyr_FazendaProgresso_199.setVisible(false);lyr_FazendaProgresso_200.setVisible(false);lyr_FazendaeGranjaSantaRita2_201.setVisible(false);lyr_FazendaeGranjaSantaRita2_202.setVisible(false);lyr_FazendaeGranjaSantaRita_203.setVisible(false);lyr_FazendaeGranjaSantaRita_204.setVisible(false);lyr_Essence_205.setVisible(false);lyr_Essence_206.setVisible(false);lyr_Elias_207.setVisible(false);lyr_Elias_208.setVisible(false);lyr_EdifcioSolNascente_209.setVisible(false);lyr_EdifcioSolNascente_210.setVisible(false);lyr_EdifcioRuadoSol_211.setVisible(false);lyr_EdifcioRuadoSol_212.setVisible(false);lyr_EdifcioResidencialHope_213.setVisible(false);lyr_EdifcioResidencialHope_214.setVisible(false);lyr_DiocesedeFranca_215.setVisible(false);lyr_DiocesedeFranca_216.setVisible(false);lyr_DaVinci_217.setVisible(false);lyr_DaVinci_218.setVisible(false);lyr_CondomnioIICityPetrpolis_219.setVisible(false);lyr_CondomnioIICityPetrpolis_220.setVisible(false);lyr_CondomnioICityPetrpolis_221.setVisible(false);lyr_CondomnioICityPetrpolis_222.setVisible(false);lyr_Colorado_223.setVisible(false);lyr_Colorado_224.setVisible(false);lyr_CidadeJardim_225.setVisible(false);lyr_CidadeJardim_226.setVisible(false);lyr_ChacaraOlaria_227.setVisible(false);lyr_ChacaraOlaria_228.setVisible(false);lyr_ChacaraBelaVista_229.setVisible(false);lyr_ChacaraBelaVista_230.setVisible(false);lyr_BordadaMata_231.setVisible(false);lyr_BordadaMata_232.setVisible(false);lyr_Arteris_233.setVisible(false);lyr_Arteris_234.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3342_235.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSP_3452_236.setVisible(false);lyr_ArterisFaixadeDomnioFrancaSPA_397334_237.setVisible(false);lyr_Arizona_238.setVisible(false);lyr_Arizona_239.setVisible(false);lyr_AbuDhabiParadiseResortResidence_240.setVisible(false);lyr_AbuDhabiParadiseResortResidence_241.setVisible(false);lyr_EtapaAprovado26unid_242.setVisible(false);lyr_EtapaDiretriz22unid_243.setVisible(false);lyr_EtapaDefinitiva11unid_244.setVisible(false);lyr_EtapaPrvia24unid_245.setVisible(false);lyr_LoteamentosClandestinos69unid_246.setVisible(false);lyr_LoteamentosClandestinos69unid_247.setVisible(false);lyr_FazendaPalestina105unid_248.setVisible(false);lyr_FazendaPalestina105unid_249.setVisible(false);lyr_APP1745unid_250.setVisible(false);lyr_RiosDuplos84unid_251.setVisible(false);lyr_MassasDgua270unid_252.setVisible(false);lyr_RiosSimples1842unid_253.setVisible(false);lyr_Nascentes821unid_254.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_255.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.setVisible(false);lyr_AntigoAterrodasMaritacas_261.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.setVisible(false);lyr_ParqueZumbidosPalmares_263.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.setVisible(false);lyr_reaN2_266.setVisible(false);lyr_reaN1_267.setVisible(false);lyr_reaN_268.setVisible(false);lyr_ConjuntoHabitacional_269.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_270.setVisible(false);lyr_reaK_271.setVisible(false);lyr_reaJ_272.setVisible(false);lyr_reaI_273.setVisible(false);lyr_reaH_274.setVisible(false);lyr_reaG_275.setVisible(false);lyr_reaF_276.setVisible(false);lyr_reaE_277.setVisible(false);lyr_reaD_278.setVisible(false);lyr_reaC_279.setVisible(false);lyr_reaB_280.setVisible(false);lyr_reaA_281.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.setVisible(false);lyr_reaaseraverbadaPartedareaG_283.setVisible(false);lyr_DrenagensExistentes_284.setVisible(false);lyr_DrenagensExistentes_285.setVisible(false);lyr_Drenagens_286.setVisible(false);lyr_Drenagens_287.setVisible(false);lyr_rvoreImuneaoCorte9unid_288.setVisible(false);lyr_Voorocas27unid_289.setVisible(false);lyr_DeclividadeZonaUrbanaCopernicus30m_290.setVisible(false);lyr_DeclividadeZonaRuralSulCopernicus30m_291.setVisible(false);lyr_DeclividadeZonaRuralNorteCopernicus30m_292.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_293.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_294.setVisible(false);lyr_PBZPAHospitalHELIPONTO_295.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.setVisible(false);lyr_ClasseVB_297.setVisible(false);lyr_ClasseVA_298.setVisible(false);lyr_ClasseIVC_299.setVisible(false);lyr_ClasseIVB_300.setVisible(false);lyr_ClasseIVA_301.setVisible(false);lyr_ClasseIIIC_302.setVisible(false);lyr_ClasseIIIB_303.setVisible(false);lyr_ClasseIIIA_304.setVisible(false);lyr_ClasseII_305.setVisible(false);lyr_ClasseI_306.setVisible(false);lyr_APP169unid239527816m_307.setVisible(false);lyr_reaInstitucional371unid208395759m_308.setVisible(false);lyr_reaPatrimonial65unid121924073m_309.setVisible(false);lyr_reaVerde2115unid881290721m_310.setVisible(false);lyr_readeUsoEspecial278unid271349968m_311.setVisible(false);lyr_LoteamentoFechado146unid70632440m_312.setVisible(false);lyr_Lote251unid7505210m_313.setVisible(false);lyr_Lote251unid_314.setVisible(false);lyr_LoteEdificao20unid508062m_315.setVisible(false);lyr_LoteEdificao20unid_316.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid334770m_317.setVisible(false);lyr_LeiloLEIN97542025Homologado4unid_318.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.setVisible(false);lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.setVisible(false);lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324.setVisible(false);lyr_LoteEMDEF10unid218783m_325.setVisible(false);lyr_LoteEMDEF10unid_326.setVisible(false);lyr_TRPRLCETESB2unid_327.setVisible(false);lyr_TRPRLCETESB2unid_328.setVisible(false);lyr_TCRAMunicipal14unid_329.setVisible(false);lyr_TCRAMunicipal14unid_330.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_331.setVisible(false);lyr_TCRACETESBPARCELAMENTO32unid_332.setVisible(false);lyr_TCRACETESB30unid_333.setVisible(false);lyr_TCRACETESB30unid_334.setVisible(false);lyr_TACMinistrioPblico9unid_335.setVisible(false);lyr_TACMinistrioPblico9unid_336.setVisible(false);lyr_PlantioVoluntrio1unid_337.setVisible(false);lyr_PlantioVoluntrio1unid_338.setVisible(false);lyr_CartaAnuncia21unid_339.setVisible(false);lyr_CartaAnuncia21unid_340.setVisible(false);lyr_AoCivilPblica1unid_341.setVisible(false);lyr_AoCivilPblica1unid_342.setVisible(false);
var layersList = [group_ZonaCartogrficaMapaBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_Zoneamento,group_SistemaVirio,group_RelatrioAmbiental,group_ObrasPblicas,group_LoteamentosRegularizadosREURB,group_LoteamentosCondomniosParcelamentodoSolo,group_LoteamentosClandestinos,group_HidrografiaFBDS2025,group_GerenciamentodereasContaminadas,group_FazendaMunicipalPousoAlto,group_Drenagem,group_Diversos,group_Declividade,group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo,group_ClassesdeRiscoIPT,group_reasPblicas,group_reasCompromissadas];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_ARORemanescentesFlorestais_5.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AROreadeAmortecimento_6.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AROFaixadeCuestas_7.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AROAPP_8.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_ARAIncongrunciasemAPP_9.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_ARAETELagoas_10.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_ARAAterros_11.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODreaUrbanaConsolidada_12.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'area_m2', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODAUSFase2_16.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
lyr_AODAUSFase1_17.set('fieldAliases', {'fid': 'fid', 'subclasse': 'Subclasse', 'area_m2': 'Área (m²)', 'classe': 'Classe', 'desc_subcl': 'Descrição Subclasse', 'desc_class': 'Descrição Classe', });
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
lyr_FazendaBarroPretoeBambus_43.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Matrcula106206_44.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_PortaldosIndaias_47.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioNossaSenhoraAparecida_48.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos3unid_49.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_UBSdoResidencialPeresElias_50.set('fieldAliases', {'fid': 'fid', 'obra': 'Obra', 'contrato': 'Contrato', 'empresa_contratada': 'Empresa Contratada', 'porcentagem_execucao': 'Porcentagem de Execução', 'data_inicio': 'Início da Obra', 'prazo_inicial': 'Prazo Inicial', 'valor_obra': 'Valor da Obra', });
lyr_UBSdoResidencialPeresElias_51.set('fieldAliases', {'fid': 'fid', 'obra': 'obra', 'contrato': 'contrato', 'empresa_contratada': 'empresa_contratada', 'porcentagem_execucao': 'porcentagem_execucao', 'data_inicio': 'data_inicio', 'prazo_inicial': 'prazo_inicial', 'valor_obra': 'valor_obra', });
lyr_LoteamentosClandestinosRegularizado9unid_52.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosRegularizado9unid_53.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_Vivenna_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Vivenna_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaSoVicente_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaJardimSimes_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VittaAlvorada_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VilaDiEspanha_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaPucci_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaDoratta_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_VillaBella_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Versalhes_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TorontoResidence_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_TerraNova_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Sonetto_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_84.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_85.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SantaLina_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantaLina_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_SantAnita_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RuaAlfioBenedini_92.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', });
lyr_ResidencialValeVerde_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialValeVerde_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialYasminTorres_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosII_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSoCarlosI_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaIns_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialSantaF_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadosOitis_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialQuintadoSol_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegreII_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialPousoAlegre_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuciII_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResicencialNairRetuci_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMoradadoBosque_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarthaHelena_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialMarioTasso_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJardimCanada_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialJabuticabeiras_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialFrutuoso_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialEssenza_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialDomingosJardini_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialCintraAlves_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialBoaVista_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ResidencialAltodaFazenda_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_RecantoMeneghetti_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Quadra18VilaExposio_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ProlongamentoSamelPark_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueVillaLobos_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquePalmeiraImperial_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueJacarand_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParqueFlora_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParquedosSabias_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ParagonFaseII_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Paragon_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_PalmeiraReal_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadoVerdeII_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MoradadaMata_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Monti_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MontBlancResidence_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasterplanDespaschoal_171.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MasteplanBildVitta_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MasteplanBildVitta_174.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_MarianaAlarcon_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_MarianaAlarcon_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Loteamentolamo_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimPherola_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimMariaLuiza_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimHorizonte_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_JardimFlora_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_IrineuZanetiII_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Infratcnica_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_HorizResidence_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_GlebaNossaSenhoraAuxiliadora_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Ferracini_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FrancaB6_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaProgresso_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita2_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_FazendaeGranjaSantaRita_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Essence_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Elias_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioSolNascente_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioRuadoSol_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EdifcioResidencialHope_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DiocesedeFranca_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DaVinci_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Colorado_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CidadeJardim_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraOlaria_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ChacaraBelaVista_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_BordadaMata_232.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_233.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arteris_234.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_235.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_236.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_237.set('fieldAliases', {'fid': 'fid', 'description': 'description', });
lyr_Arizona_238.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Arizona_239.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_AbuDhabiParadiseResortResidence_241.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EtapaAprovado26unid_242.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDiretriz22unid_243.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaDefinitiva11unid_244.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EtapaPrvia24unid_245.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_LoteamentosClandestinos69unid_246.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinos69unid_247.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_FazendaPalestina105unid_248.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_FazendaPalestina105unid_249.set('fieldAliases', {'fid': 'fid', 'matricula': 'Matrícula', 'nome_loteamento': 'Nome do Loteamento', });
lyr_APP1745unid_250.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_251.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_252.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_253.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_254.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_AntigoAterrodaFazendaMunicipal_255.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.set('fieldAliases', {'fid': 'fid', 'poco': 'Poço', 'coordenada_y': 'Coordenada N (m)', 'coordenada_x': 'Coordenada E (m)', 'cota': 'Cota (m)', 'tipo': 'Tipo do poço', 'situacao': 'Situação', 'empresa': 'Empresa', 'ano': 'Ano', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodasMaritacas_261.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_ParqueZumbidosPalmares_263.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_reaN2_266.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN1_267.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaN_268.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_269.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_270.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_271.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_272.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_273.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_274.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_275.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_276.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_277.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_278.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_279.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_280.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_281.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_283.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_DrenagensExistentes_284.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_DrenagensExistentes_285.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_286.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_Drenagens_287.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_rvoreImuneaoCorte9unid_288.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_Voorocas27unid_289.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_DeclividadeZonaUrbanaCopernicus30m_290.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralSulCopernicus30m_291.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_292.set('fieldAliases', {'fid': 'fid', 'DEC': 'Declividade (%)', });
lyr_PBZPAEdifcioPrimeHELIPONTO_293.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_294.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_295.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_ClasseVB_297.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseVA_298.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVC_299.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVB_300.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIVA_301.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIC_302.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIB_303.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseIIIA_304.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseII_305.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_ClasseI_306.set('fieldAliases', {'fid': 'fid', 'classe': 'Classe', 'risco_eros': 'Risco Potencial de Erosão', 'suscetibil': 'Suscetibilidade à Erosão', 'uso_solo': 'Uso do Solo Predominante', 'setores_re': 'Setores do Relevo', 'solos_pred': 'Solos Predominantes', 'substrato_': 'Substrato Rochoso', 'processos_': 'Processos Erosivos/Problemas Existentes e Esperados', 'recomendac': 'Recomendações Gerais para Ocupação Urbana', });
lyr_APP169unid239527816m_307.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional371unid208395759m_308.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial65unid121924073m_309.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_reaVerde2115unid881290721m_310.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial278unid271349968m_311.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado146unid70632440m_312.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid7505210m_313.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_Lote251unid_314.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LoteEdificao20unid508062m_315.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_316.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_LeiloLEIN97542025Homologado4unid334770m_317.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Homologado4unid_318.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'status_leilao': 'status_leilao', 'processo': 'Processo', });
lyr_LoteEMDEF10unid218783m_325.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'status_leilao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_326.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_TRPRLCETESB2unid_327.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_328.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_329.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_330.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRACETESBPARCELAMENTO32unid_331.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO32unid_332.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRACETESB30unid_333.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TCRACETESB30unid_334.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', 'situacao': 'Situação', });
lyr_TACMinistrioPblico9unid_335.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_336.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_PlantioVoluntrio1unid_337.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_338.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_CartaAnuncia21unid_339.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia21unid_340.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_AoCivilPblica1unid_341.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_342.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_ARORemanescentesFlorestais_5.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROreadeAmortecimento_6.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROFaixadeCuestas_7.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AROAPP_8.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAIncongrunciasemAPP_9.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAETELagoas_10.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_ARAAterros_11.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODreaUrbanaConsolidada_12.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel3_13.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel2_14.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODBaixaDensidadeNvel1_15.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODAUSFase2_16.set('fieldImages', {'fid': '', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_AODAUSFase1_17.set('fieldImages', {'fid': 'TextEdit', 'subclasse': 'TextEdit', 'area_m2': 'TextEdit', 'classe': 'TextEdit', 'desc_subcl': 'TextEdit', 'desc_class': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_18.set('fieldImages', {'fid': '', 'area_km2': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': '', 'area_km2': '', });
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
lyr_FazendaBarroPretoeBambus_43.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Matrcula106206_44.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_PortaldosIndaias_47.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_48.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos3unid_49.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_UBSdoResidencialPeresElias_50.set('fieldImages', {'fid': 'TextEdit', 'obra': 'TextEdit', 'contrato': 'TextEdit', 'empresa_contratada': 'TextEdit', 'porcentagem_execucao': 'TextEdit', 'data_inicio': 'DateTime', 'prazo_inicial': 'TextEdit', 'valor_obra': 'TextEdit', });
lyr_UBSdoResidencialPeresElias_51.set('fieldImages', {'fid': 'TextEdit', 'obra': 'TextEdit', 'contrato': 'TextEdit', 'empresa_contratada': 'TextEdit', 'porcentagem_execucao': 'TextEdit', 'data_inicio': 'DateTime', 'prazo_inicial': 'TextEdit', 'valor_obra': 'TextEdit', });
lyr_LoteamentosClandestinosRegularizado9unid_52.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosRegularizado9unid_53.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_Vivenna_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Vivenna_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaSoVicente_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaJardimSimes_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VittaAlvorada_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VilaDiEspanha_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaPucci_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaDoratta_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_VillaBella_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Versalhes_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TorontoResidence_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_TerraNova_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Sonetto_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_84.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_85.set('fieldImages', {'fid': '', 'id': '', });
lyr_SantaLina_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantaLina_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_88.set('fieldImages', {'fid': '', 'layer': '', });
lyr_SantAnita_89.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RuaAlfioBenedini_91.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_RuaAlfioBenedini_92.set('fieldImages', {'fid': 'TextEdit', 'nome': '', });
lyr_ResidencialValeVerde_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialValeVerde_94.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialYasminTorres_96.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosII_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSoCarlosI_100.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaIns_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialSantaF_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadosOitis_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialQuintadoSol_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegreII_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialPousoAlegre_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuciII_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResicencialNairRetuci_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMoradadoBosque_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarthaHelena_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialMarioTasso_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJardimCanada_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialJabuticabeiras_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialFrutuoso_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialEssenza_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialDomingosJardini_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialCintraAlves_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialBoaVista_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ResidencialAltodaFazenda_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_RecantoMeneghetti_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Quadra18VilaExposio_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ProlongamentoSamelPark_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueVillaLobos_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquePalmeiraImperial_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueJacarand_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParqueFlora_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParquedosSabias_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ParagonFaseII_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Paragon_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_PalmeiraReal_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadoVerdeII_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MoradadaMata_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Monti_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MontBlancResidence_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_169.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasterplanDespaschoal_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasterplanDespaschoal_171.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MasteplanBildVitta_172.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_MasteplanBildVitta_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MasteplanBildVitta_174.set('fieldImages', {'fid': '', 'Nome': '', });
lyr_MarianaAlarcon_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_MarianaAlarcon_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Loteamentolamo_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimPherola_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimMariaLuiza_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimHorizonte_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_JardimFlora_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_IrineuZanetiII_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Infratcnica_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_HorizResidence_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_GlebaNossaSenhoraAuxiliadora_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Ferracini_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FrancaB6_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaProgresso_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita2_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_FazendaeGranjaSantaRita_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Essence_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Elias_207.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Elias_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioSolNascente_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioRuadoSol_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EdifcioResidencialHope_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DiocesedeFranca_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DaVinci_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Colorado_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CidadeJardim_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraOlaria_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ChacaraBelaVista_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_BordadaMata_232.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arteris_233.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arteris_234.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_235.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_236.set('fieldImages', {'fid': '', 'description': '', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_237.set('fieldImages', {'fid': '', 'description': '', });
lyr_Arizona_238.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Arizona_239.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldImages', {'fid': '', 'layer': '', });
lyr_AbuDhabiParadiseResortResidence_241.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EtapaAprovado26unid_242.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDiretriz22unid_243.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaDefinitiva11unid_244.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EtapaPrvia24unid_245.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_246.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinos69unid_247.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_FazendaPalestina105unid_248.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_FazendaPalestina105unid_249.set('fieldImages', {'fid': 'TextEdit', 'matricula': 'TextEdit', 'nome_loteamento': 'TextEdit', });
lyr_APP1745unid_250.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_251.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_252.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_253.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_254.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_255.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.set('fieldImages', {'fid': 'TextEdit', 'poco': 'TextEdit', 'coordenada_y': 'TextEdit', 'coordenada_x': 'TextEdit', 'cota': 'TextEdit', 'tipo': 'TextEdit', 'situacao': 'TextEdit', 'empresa': 'TextEdit', 'ano': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_261.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_ParqueZumbidosPalmares_263.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_reaN2_266.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN1_267.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaN_268.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_269.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_270.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_271.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_272.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_273.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_274.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_275.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_276.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_277.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_278.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_279.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_280.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_281.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_283.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_DrenagensExistentes_284.set('fieldImages', {'fid': '', 'layer': '', });
lyr_DrenagensExistentes_285.set('fieldImages', {'fid': '', 'layer': '', });
lyr_Drenagens_286.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_Drenagens_287.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_rvoreImuneaoCorte9unid_288.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_Voorocas27unid_289.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_DeclividadeZonaUrbanaCopernicus30m_290.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralSulCopernicus30m_291.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_292.set('fieldImages', {'fid': '', 'DEC': '', });
lyr_PBZPAEdifcioPrimeHELIPONTO_293.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_294.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_295.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_ClasseVB_297.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseVA_298.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVC_299.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVB_300.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIVA_301.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIC_302.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIB_303.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseIIIA_304.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseII_305.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_ClasseI_306.set('fieldImages', {'fid': 'TextEdit', 'classe': 'TextEdit', 'risco_eros': 'TextEdit', 'suscetibil': 'TextEdit', 'uso_solo': 'TextEdit', 'setores_re': 'TextEdit', 'solos_pred': 'TextEdit', 'substrato_': 'TextEdit', 'processos_': 'TextEdit', 'recomendac': 'TextEdit', });
lyr_APP169unid239527816m_307.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaInstitucional371unid208395759m_308.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaPatrimonial65unid121924073m_309.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_reaVerde2115unid881290721m_310.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_readeUsoEspecial278unid271349968m_311.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteamentoFechado146unid70632440m_312.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote251unid7505210m_313.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_Lote251unid_314.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_LoteEdificao20unid508062m_315.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_316.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LeiloLEIN97542025Homologado4unid334770m_317.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Homologado4unid_318.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'status_leilao': '', 'processo': 'TextEdit', });
lyr_LoteEMDEF10unid218783m_325.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'status_leilao': '', 'processo': '', });
lyr_LoteEMDEF10unid_326.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_TRPRLCETESB2unid_327.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_328.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_329.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_330.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO32unid_331.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO32unid_332.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB30unid_333.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', 'situacao': '', });
lyr_TCRACETESB30unid_334.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', 'situacao': '', });
lyr_TACMinistrioPblico9unid_335.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_336.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_PlantioVoluntrio1unid_337.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_338.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_CartaAnuncia21unid_339.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia21unid_340.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_AoCivilPblica1unid_341.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_342.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
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
lyr_AODBaixaDensidadeNvel2_14.set('fieldLabels', {'fid': 'hidden field', 'subclasse': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'classe': 'inline label - visible with data', 'desc_subcl': 'inline label - visible with data', 'desc_class': 'inline label - visible with data', });
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
lyr_FazendaBarroPretoeBambus_43.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Matrcula106206_44.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95782_45.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95783_46.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_PortaldosIndaias_47.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_48.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos3unid_49.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_UBSdoResidencialPeresElias_50.set('fieldLabels', {'fid': 'hidden field', 'obra': 'inline label - visible with data', 'contrato': 'inline label - visible with data', 'empresa_contratada': 'inline label - visible with data', 'porcentagem_execucao': 'inline label - visible with data', 'data_inicio': 'inline label - visible with data', 'prazo_inicial': 'inline label - visible with data', 'valor_obra': 'inline label - visible with data', });
lyr_UBSdoResidencialPeresElias_51.set('fieldLabels', {'fid': 'hidden field', 'obra': 'inline label - visible with data', 'contrato': 'inline label - visible with data', 'empresa_contratada': 'inline label - visible with data', 'porcentagem_execucao': 'inline label - visible with data', 'data_inicio': 'inline label - visible with data', 'prazo_inicial': 'inline label - visible with data', 'valor_obra': 'inline label - visible with data', });
lyr_LoteamentosClandestinosRegularizado9unid_52.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosRegularizado9unid_53.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_Vivenna_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Vivenna_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaSoVicente_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaJardimSimes_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VittaAlvorada_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VilaDiEspanha_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaPucci_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaDoratta_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_VillaBella_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Versalhes_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TorontoResidence_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_TerraNova_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Sonetto_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL2_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTFRANCAEIXORESIDENCIAL1_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SMARTCITYFRANCAEIXOEMPRESARIAL_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_84.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_85.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_SantaLina_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantaLina_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_SantAnita_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RuaAlfioBenedini_92.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', });
lyr_ResidencialValeVerde_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialValeVerde_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialYasminTorres_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosII_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSoCarlosI_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaIns_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialSantaF_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadosOitis_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialQuintadoSol_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_109.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegreII_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialPousoAlegre_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuciII_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResicencialNairRetuci_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMoradadoBosque_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarthaHelena_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialMarioTasso_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJardimCanada_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialJabuticabeiras_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialFrutuoso_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialEssenza_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialDomingosJardini_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialCintraAlves_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialBoaVista_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ResidencialAltodaFazenda_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_RecantoMeneghetti_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Quadra18VilaExposio_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ProlongamentoSamelPark_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueVillaLobos_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquePalmeiraImperial_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueJacarand_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParqueFlora_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParquedosSabias_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ParagonFaseII_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Paragon_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_PalmeiraReal_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadoVerdeII_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MoradadaMata_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Monti_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MontBlancResidence_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasterplanDespaschoal_171.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MasteplanBildVitta_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MasteplanBildVitta_174.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_MarianaAlarcon_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_MarianaAlarcon_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Loteamentolamo_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimPherola_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimMariaLuiza_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimHorizonte_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_JardimFlora_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_IrineuZanetiII_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Infratcnica_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_HorizResidence_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_GlebaNossaSenhoraAuxiliadora_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Ferracini_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FrancaB6_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaProgresso_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita2_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_FazendaeGranjaSantaRita_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Essence_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Elias_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioSolNascente_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioRuadoSol_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EdifcioResidencialHope_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DiocesedeFranca_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DaVinci_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Colorado_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CidadeJardim_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraOlaria_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ChacaraBelaVista_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_BordadaMata_232.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_233.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arteris_234.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3342_235.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSP_3452_236.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_ArterisFaixadeDomnioFrancaSPA_397334_237.set('fieldLabels', {'fid': 'hidden field', 'description': 'inline label - visible with data', });
lyr_Arizona_238.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Arizona_239.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_240.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_AbuDhabiParadiseResortResidence_241.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EtapaAprovado26unid_242.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDiretriz22unid_243.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaDefinitiva11unid_244.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EtapaPrvia24unid_245.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_246.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinos69unid_247.set('fieldLabels', {'fid': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_FazendaPalestina105unid_248.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', });
lyr_FazendaPalestina105unid_249.set('fieldLabels', {'fid': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', });
lyr_APP1745unid_250.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_251.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_252.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_253.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_254.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipal_255.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsGsAvatz15unid_256.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaAvatz18unid_257.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPMsguaGeoAnaltica15unid_258.set('fieldLabels', {'fid': 'hidden field', 'poco': 'inline label - visible with data', 'coordenada_y': 'inline label - visible with data', 'coordenada_x': 'inline label - visible with data', 'cota': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'situacao': 'inline label - visible with data', 'empresa': 'inline label - visible with data', 'ano': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_259.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_260.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodasMaritacas_261.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_262.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_ParqueZumbidosPalmares_263.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_264.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_265.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_reaN2_266.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN1_267.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaN_268.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_269.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_270.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_271.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_272.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_273.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_274.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_275.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_276.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_277.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_278.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_279.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_280.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_281.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_282.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_283.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_DrenagensExistentes_284.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_DrenagensExistentes_285.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_286.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_Drenagens_287.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_288.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_Voorocas27unid_289.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_DeclividadeZonaUrbanaCopernicus30m_290.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralSulCopernicus30m_291.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_DeclividadeZonaRuralNorteCopernicus30m_292.set('fieldLabels', {'fid': 'hidden field', 'DEC': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_293.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_294.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_295.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_296.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_ClasseVB_297.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseVA_298.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVC_299.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVB_300.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIVA_301.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIC_302.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIB_303.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseIIIA_304.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseII_305.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_ClasseI_306.set('fieldLabels', {'fid': 'hidden field', 'classe': 'inline label - visible with data', 'risco_eros': 'inline label - visible with data', 'suscetibil': 'inline label - visible with data', 'uso_solo': 'inline label - visible with data', 'setores_re': 'inline label - visible with data', 'solos_pred': 'inline label - visible with data', 'substrato_': 'inline label - visible with data', 'processos_': 'inline label - visible with data', 'recomendac': 'inline label - visible with data', });
lyr_APP169unid239527816m_307.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional371unid208395759m_308.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial65unid121924073m_309.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde2115unid881290721m_310.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial278unid271349968m_311.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteamentoFechado146unid70632440m_312.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid7505210m_313.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid_314.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_LoteEdificao20unid508062m_315.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_316.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid334770m_317.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Homologado4unid_318.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid352000m_319.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002652520256922unid_320.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid3240462m_321.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc351620041000007954202537196unid_322.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid2092083m_323.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025Proc35162004100002198620254518unid_324.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_325.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'hidden field', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'status_leilao': 'inline label - visible with data', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_326.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_327.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_328.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_329.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_330.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_331.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO32unid_332.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB30unid_333.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'hidden field', });
lyr_TCRACETESB30unid_334.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', 'situacao': 'hidden field', });
lyr_TACMinistrioPblico9unid_335.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_336.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_337.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_338.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_339.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia21unid_340.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_341.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_342.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_342.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});