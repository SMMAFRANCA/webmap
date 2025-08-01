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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/reaUrbanadeFranca_4.png" /> Área Urbana de Franca'
            });
var format_LoteEMDEF_5 = new ol.format.GeoJSON();
var features_LoteEMDEF_5 = format_LoteEMDEF_5.readFeatures(json_LoteEMDEF_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF_5.addFeatures(features_LoteEMDEF_5);
var lyr_LoteEMDEF_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF_5, 
                style: style_LoteEMDEF_5,
                popuplayertitle: 'Lote EMDEF',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF_5.png" /> Lote EMDEF'
            });
var format_ProgramaAdoteUmaPraa_6 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa_6 = format_ProgramaAdoteUmaPraa_6.readFeatures(json_ProgramaAdoteUmaPraa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa_6.addFeatures(features_ProgramaAdoteUmaPraa_6);
var lyr_ProgramaAdoteUmaPraa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa_6, 
                style: style_ProgramaAdoteUmaPraa_6,
                popuplayertitle: 'Programa Adote Uma Praça',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa_6.png" /> Programa Adote Uma Praça'
            });
var format_Lote_7 = new ol.format.GeoJSON();
var features_Lote_7 = format_Lote_7.readFeatures(json_Lote_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_7.addFeatures(features_Lote_7);
var lyr_Lote_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_7, 
                style: style_Lote_7,
                popuplayertitle: 'Lote',
                interactive: true,
                title: '<img src="styles/legend/Lote_7.png" /> Lote'
            });
var format_reaVerde_8 = new ol.format.GeoJSON();
var features_reaVerde_8 = format_reaVerde_8.readFeatures(json_reaVerde_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde_8.addFeatures(features_reaVerde_8);
var lyr_reaVerde_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde_8, 
                style: style_reaVerde_8,
                popuplayertitle: 'Área Verde',
                interactive: true,
                title: '<img src="styles/legend/reaVerde_8.png" /> Área Verde'
            });
var format_reaPatrimonial_9 = new ol.format.GeoJSON();
var features_reaPatrimonial_9 = format_reaPatrimonial_9.readFeatures(json_reaPatrimonial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial_9.addFeatures(features_reaPatrimonial_9);
var lyr_reaPatrimonial_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial_9, 
                style: style_reaPatrimonial_9,
                popuplayertitle: 'Área Patrimonial',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial_9.png" /> Área Patrimonial'
            });
var format_reaInstitucional_10 = new ol.format.GeoJSON();
var features_reaInstitucional_10 = format_reaInstitucional_10.readFeatures(json_reaInstitucional_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional_10.addFeatures(features_reaInstitucional_10);
var lyr_reaInstitucional_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional_10, 
                style: style_reaInstitucional_10,
                popuplayertitle: 'Área Institucional',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional_10.png" /> Área Institucional'
            });
var format_readeUsoEspecial_11 = new ol.format.GeoJSON();
var features_readeUsoEspecial_11 = format_readeUsoEspecial_11.readFeatures(json_readeUsoEspecial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial_11.addFeatures(features_readeUsoEspecial_11);
var lyr_readeUsoEspecial_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial_11, 
                style: style_readeUsoEspecial_11,
                popuplayertitle: 'Área de Uso Especial',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial_11.png" /> Área de Uso Especial'
            });
var format_APP_12 = new ol.format.GeoJSON();
var features_APP_12 = format_APP_12.readFeatures(json_APP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_12.addFeatures(features_APP_12);
var lyr_APP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_12, 
                style: style_APP_12,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_12.png" /> APP'
            });
var format_GerenciamentodereasContaminadas_13 = new ol.format.GeoJSON();
var features_GerenciamentodereasContaminadas_13 = format_GerenciamentodereasContaminadas_13.readFeatures(json_GerenciamentodereasContaminadas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerenciamentodereasContaminadas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerenciamentodereasContaminadas_13.addFeatures(features_GerenciamentodereasContaminadas_13);
var lyr_GerenciamentodereasContaminadas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GerenciamentodereasContaminadas_13, 
                style: style_GerenciamentodereasContaminadas_13,
                popuplayertitle: 'Gerenciamento de Áreas Contaminadas',
                interactive: true,
                title: '<img src="styles/legend/GerenciamentodereasContaminadas_13.png" /> Gerenciamento de Áreas Contaminadas'
            });
var format_AoCivilPblica_14 = new ol.format.GeoJSON();
var features_AoCivilPblica_14 = format_AoCivilPblica_14.readFeatures(json_AoCivilPblica_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_14.addFeatures(features_AoCivilPblica_14);
var lyr_AoCivilPblica_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_14, 
                style: style_AoCivilPblica_14,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_14.png" /> Ação Civil Pública'
            });
var format_CartaAnuncia_15 = new ol.format.GeoJSON();
var features_CartaAnuncia_15 = format_CartaAnuncia_15.readFeatures(json_CartaAnuncia_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_15.addFeatures(features_CartaAnuncia_15);
var lyr_CartaAnuncia_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_15, 
                style: style_CartaAnuncia_15,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_15.png" /> Carta Anuência'
            });
var format_PlantioVoluntrio_16 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_16 = format_PlantioVoluntrio_16.readFeatures(json_PlantioVoluntrio_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_16.addFeatures(features_PlantioVoluntrio_16);
var lyr_PlantioVoluntrio_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_16, 
                style: style_PlantioVoluntrio_16,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_16.png" /> Plantio Voluntário'
            });
var format_TACMinistrioPblico_17 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_17 = format_TACMinistrioPblico_17.readFeatures(json_TACMinistrioPblico_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_17.addFeatures(features_TACMinistrioPblico_17);
var lyr_TACMinistrioPblico_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_17, 
                style: style_TACMinistrioPblico_17,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_17.png" /> TAC Ministério Público'
            });
var format_TCRACETESB_18 = new ol.format.GeoJSON();
var features_TCRACETESB_18 = format_TCRACETESB_18.readFeatures(json_TCRACETESB_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_18.addFeatures(features_TCRACETESB_18);
var lyr_TCRACETESB_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_18, 
                style: style_TCRACETESB_18,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_18.png" /> TCRA CETESB'
            });
var format_TCRAMunicipal_19 = new ol.format.GeoJSON();
var features_TCRAMunicipal_19 = format_TCRAMunicipal_19.readFeatures(json_TCRAMunicipal_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_19.addFeatures(features_TCRAMunicipal_19);
var lyr_TCRAMunicipal_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_19, 
                style: style_TCRAMunicipal_19,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_19.png" /> TCRA Municipal'
            });
var format_TRPRLCETESB_20 = new ol.format.GeoJSON();
var features_TRPRLCETESB_20 = format_TRPRLCETESB_20.readFeatures(json_TRPRLCETESB_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_20.addFeatures(features_TRPRLCETESB_20);
var lyr_TRPRLCETESB_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_20, 
                style: style_TRPRLCETESB_20,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_20.png" /> TRPRL CETESB'
            });
var format_AoCivilPblica_21 = new ol.format.GeoJSON();
var features_AoCivilPblica_21 = format_AoCivilPblica_21.readFeatures(json_AoCivilPblica_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_21.addFeatures(features_AoCivilPblica_21);
var lyr_AoCivilPblica_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_21, 
                style: style_AoCivilPblica_21,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_21.png" /> Ação Civil Pública'
            });
var format_CartaAnuncia_22 = new ol.format.GeoJSON();
var features_CartaAnuncia_22 = format_CartaAnuncia_22.readFeatures(json_CartaAnuncia_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_22.addFeatures(features_CartaAnuncia_22);
var lyr_CartaAnuncia_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_22, 
                style: style_CartaAnuncia_22,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_22.png" /> Carta Anuência'
            });
var format_PlantioVoluntrio_23 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_23 = format_PlantioVoluntrio_23.readFeatures(json_PlantioVoluntrio_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_23.addFeatures(features_PlantioVoluntrio_23);
var lyr_PlantioVoluntrio_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_23, 
                style: style_PlantioVoluntrio_23,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_23.png" /> Plantio Voluntário'
            });
var format_TACMinistrioPblico_24 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_24 = format_TACMinistrioPblico_24.readFeatures(json_TACMinistrioPblico_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_24.addFeatures(features_TACMinistrioPblico_24);
var lyr_TACMinistrioPblico_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_24, 
                style: style_TACMinistrioPblico_24,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_24.png" /> TAC Ministério Público'
            });
var format_TCRACETESB_25 = new ol.format.GeoJSON();
var features_TCRACETESB_25 = format_TCRACETESB_25.readFeatures(json_TCRACETESB_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_25.addFeatures(features_TCRACETESB_25);
var lyr_TCRACETESB_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_25, 
                style: style_TCRACETESB_25,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_25.png" /> TCRA CETESB'
            });
var format_TCRAMunicipal_26 = new ol.format.GeoJSON();
var features_TCRAMunicipal_26 = format_TCRAMunicipal_26.readFeatures(json_TCRAMunicipal_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_26.addFeatures(features_TCRAMunicipal_26);
var lyr_TCRAMunicipal_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_26, 
                style: style_TCRAMunicipal_26,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_26.png" /> TCRA Municipal'
            });
var format_TRPRLCETESB_27 = new ol.format.GeoJSON();
var features_TRPRLCETESB_27 = format_TRPRLCETESB_27.readFeatures(json_TRPRLCETESB_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_27.addFeatures(features_TRPRLCETESB_27);
var lyr_TRPRLCETESB_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_27, 
                style: style_TRPRLCETESB_27,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_27.png" /> TRPRL CETESB'
            });
var format_ARORemanescentesFlorestais_28 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_28 = format_ARORemanescentesFlorestais_28.readFeatures(json_ARORemanescentesFlorestais_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_28.addFeatures(features_ARORemanescentesFlorestais_28);
var lyr_ARORemanescentesFlorestais_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_28, 
                style: style_ARORemanescentesFlorestais_28,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_28.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_29 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_29 = format_AROreadeAmortecimento_29.readFeatures(json_AROreadeAmortecimento_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_29.addFeatures(features_AROreadeAmortecimento_29);
var lyr_AROreadeAmortecimento_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_29, 
                style: style_AROreadeAmortecimento_29,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_29.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_30 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_30 = format_AROFaixadeCuestas_30.readFeatures(json_AROFaixadeCuestas_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_30.addFeatures(features_AROFaixadeCuestas_30);
var lyr_AROFaixadeCuestas_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_30, 
                style: style_AROFaixadeCuestas_30,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_30.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_31 = new ol.format.GeoJSON();
var features_AROAPP_31 = format_AROAPP_31.readFeatures(json_AROAPP_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_31.addFeatures(features_AROAPP_31);
var lyr_AROAPP_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_31, 
                style: style_AROAPP_31,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_31.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_32 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_32 = format_ARAIncongrunciasemAPP_32.readFeatures(json_ARAIncongrunciasemAPP_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_32.addFeatures(features_ARAIncongrunciasemAPP_32);
var lyr_ARAIncongrunciasemAPP_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_32, 
                style: style_ARAIncongrunciasemAPP_32,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_32.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_33 = new ol.format.GeoJSON();
var features_ARAETELagoas_33 = format_ARAETELagoas_33.readFeatures(json_ARAETELagoas_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_33.addFeatures(features_ARAETELagoas_33);
var lyr_ARAETELagoas_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_33, 
                style: style_ARAETELagoas_33,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_33.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_34 = new ol.format.GeoJSON();
var features_ARAAterros_34 = format_ARAAterros_34.readFeatures(json_ARAAterros_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_34.addFeatures(features_ARAAterros_34);
var lyr_ARAAterros_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_34, 
                style: style_ARAAterros_34,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_34.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_35 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_35 = format_AODreaUrbanaConsolidada_35.readFeatures(json_AODreaUrbanaConsolidada_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_35.addFeatures(features_AODreaUrbanaConsolidada_35);
var lyr_AODreaUrbanaConsolidada_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_35, 
                style: style_AODreaUrbanaConsolidada_35,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_35.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_36 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_36 = format_AODBaixaDensidadeNvel3_36.readFeatures(json_AODBaixaDensidadeNvel3_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_36.addFeatures(features_AODBaixaDensidadeNvel3_36);
var lyr_AODBaixaDensidadeNvel3_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_36, 
                style: style_AODBaixaDensidadeNvel3_36,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_36.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_37 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_37 = format_AODBaixaDensidadeNvel2_37.readFeatures(json_AODBaixaDensidadeNvel2_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_37.addFeatures(features_AODBaixaDensidadeNvel2_37);
var lyr_AODBaixaDensidadeNvel2_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_37, 
                style: style_AODBaixaDensidadeNvel2_37,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_37.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_38 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_38 = format_AODBaixaDensidadeNvel1_38.readFeatures(json_AODBaixaDensidadeNvel1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_38.addFeatures(features_AODBaixaDensidadeNvel1_38);
var lyr_AODBaixaDensidadeNvel1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_38, 
                style: style_AODBaixaDensidadeNvel1_38,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_38.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_39 = new ol.format.GeoJSON();
var features_AODAUSFase2_39 = format_AODAUSFase2_39.readFeatures(json_AODAUSFase2_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_39.addFeatures(features_AODAUSFase2_39);
var lyr_AODAUSFase2_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_39, 
                style: style_AODAUSFase2_39,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_39.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_40 = new ol.format.GeoJSON();
var features_AODAUSFase1_40 = format_AODAUSFase1_40.readFeatures(json_AODAUSFase1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_40.addFeatures(features_AODAUSFase1_40);
var lyr_AODAUSFase1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_40, 
                style: style_AODAUSFase1_40,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_40.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoas2023_41 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoas2023_41 = format_LimitedaBaciadoRioCanoas2023_41.readFeatures(json_LimitedaBaciadoRioCanoas2023_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoas2023_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoas2023_41.addFeatures(features_LimitedaBaciadoRioCanoas2023_41);
var lyr_LimitedaBaciadoRioCanoas2023_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoas2023_41, 
                style: style_LimitedaBaciadoRioCanoas2023_41,
                popuplayertitle: 'Limite da Bacia do Rio Canoas 2023',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoas2023_41.png" /> Limite da Bacia do Rio Canoas 2023'
            });
var format_LimitedaBaciadoRioCanoasLei2006_42 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLei2006_42 = format_LimitedaBaciadoRioCanoasLei2006_42.readFeatures(json_LimitedaBaciadoRioCanoasLei2006_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLei2006_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLei2006_42.addFeatures(features_LimitedaBaciadoRioCanoasLei2006_42);
var lyr_LimitedaBaciadoRioCanoasLei2006_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLei2006_42, 
                style: style_LimitedaBaciadoRioCanoasLei2006_42,
                popuplayertitle: 'Limite da Bacia do Rio Canoas Lei 2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLei2006_42.png" /> Limite da Bacia do Rio Canoas Lei 2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_43 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_43 = format_DelimitaodaBaciadoRibeirodaOna_43.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_43.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_43);
var lyr_DelimitaodaBaciadoRibeirodaOna_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_43, 
                style: style_DelimitaodaBaciadoRibeirodaOna_43,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_43.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP_44 = new ol.format.GeoJSON();
var features_APP_44 = format_APP_44.readFeatures(json_APP_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_44.addFeatures(features_APP_44);
var lyr_APP_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_44, 
                style: style_APP_44,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_44.png" /> APP'
            });
var format_RiosDuplos_45 = new ol.format.GeoJSON();
var features_RiosDuplos_45 = format_RiosDuplos_45.readFeatures(json_RiosDuplos_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos_45.addFeatures(features_RiosDuplos_45);
var lyr_RiosDuplos_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos_45, 
                style: style_RiosDuplos_45,
                popuplayertitle: 'Rios Duplos',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos_45.png" /> Rios Duplos'
            });
var format_MassasDgua_46 = new ol.format.GeoJSON();
var features_MassasDgua_46 = format_MassasDgua_46.readFeatures(json_MassasDgua_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua_46.addFeatures(features_MassasDgua_46);
var lyr_MassasDgua_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua_46, 
                style: style_MassasDgua_46,
                popuplayertitle: 'Massas D\'água',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua_46.png" /> Massas D\'água'
            });
var format_RiosSimples_47 = new ol.format.GeoJSON();
var features_RiosSimples_47 = format_RiosSimples_47.readFeatures(json_RiosSimples_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples_47.addFeatures(features_RiosSimples_47);
var lyr_RiosSimples_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples_47, 
                style: style_RiosSimples_47,
                popuplayertitle: 'Rios Simples',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples_47.png" /> Rios Simples'
            });
var format_Nascentes_48 = new ol.format.GeoJSON();
var features_Nascentes_48 = format_Nascentes_48.readFeatures(json_Nascentes_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_48.addFeatures(features_Nascentes_48);
var lyr_Nascentes_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes_48, 
                style: style_Nascentes_48,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_48.png" /> Nascentes'
            });
var format_R01S01_49 = new ol.format.GeoJSON();
var features_R01S01_49 = format_R01S01_49.readFeatures(json_R01S01_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_49.addFeatures(features_R01S01_49);
var lyr_R01S01_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_49, 
                style: style_R01S01_49,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_49.png" /> R01S01'
            });
var format_R01S02_50 = new ol.format.GeoJSON();
var features_R01S02_50 = format_R01S02_50.readFeatures(json_R01S02_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_50.addFeatures(features_R01S02_50);
var lyr_R01S02_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_50, 
                style: style_R01S02_50,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_50.png" /> R01S02'
            });
var format_R01S03_51 = new ol.format.GeoJSON();
var features_R01S03_51 = format_R01S03_51.readFeatures(json_R01S03_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_51.addFeatures(features_R01S03_51);
var lyr_R01S03_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_51, 
                style: style_R01S03_51,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_51.png" /> R01S03'
            });
var format_R01S04_52 = new ol.format.GeoJSON();
var features_R01S04_52 = format_R01S04_52.readFeatures(json_R01S04_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_52.addFeatures(features_R01S04_52);
var lyr_R01S04_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_52, 
                style: style_R01S04_52,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_52.png" /> R01S04'
            });
var format_R01S05_53 = new ol.format.GeoJSON();
var features_R01S05_53 = format_R01S05_53.readFeatures(json_R01S05_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_53.addFeatures(features_R01S05_53);
var lyr_R01S05_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_53, 
                style: style_R01S05_53,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_53.png" /> R01S05'
            });
var format_R01S06_54 = new ol.format.GeoJSON();
var features_R01S06_54 = format_R01S06_54.readFeatures(json_R01S06_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_54.addFeatures(features_R01S06_54);
var lyr_R01S06_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_54, 
                style: style_R01S06_54,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_54.png" /> R01S06'
            });
var format_R01S07_55 = new ol.format.GeoJSON();
var features_R01S07_55 = format_R01S07_55.readFeatures(json_R01S07_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_55.addFeatures(features_R01S07_55);
var lyr_R01S07_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_55, 
                style: style_R01S07_55,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_55.png" /> R01S07'
            });
var format_R01S08_56 = new ol.format.GeoJSON();
var features_R01S08_56 = format_R01S08_56.readFeatures(json_R01S08_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_56.addFeatures(features_R01S08_56);
var lyr_R01S08_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_56, 
                style: style_R01S08_56,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_56.png" /> R01S08'
            });
var format_R02S01_57 = new ol.format.GeoJSON();
var features_R02S01_57 = format_R02S01_57.readFeatures(json_R02S01_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_57.addFeatures(features_R02S01_57);
var lyr_R02S01_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_57, 
                style: style_R02S01_57,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_57.png" /> R02S01'
            });
var format_R02S02_58 = new ol.format.GeoJSON();
var features_R02S02_58 = format_R02S02_58.readFeatures(json_R02S02_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_58.addFeatures(features_R02S02_58);
var lyr_R02S02_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_58, 
                style: style_R02S02_58,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_58.png" /> R02S02'
            });
var format_R02S03_59 = new ol.format.GeoJSON();
var features_R02S03_59 = format_R02S03_59.readFeatures(json_R02S03_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_59.addFeatures(features_R02S03_59);
var lyr_R02S03_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_59, 
                style: style_R02S03_59,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_59.png" /> R02S03'
            });
var format_R02S04_60 = new ol.format.GeoJSON();
var features_R02S04_60 = format_R02S04_60.readFeatures(json_R02S04_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_60.addFeatures(features_R02S04_60);
var lyr_R02S04_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_60, 
                style: style_R02S04_60,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_60.png" /> R02S04'
            });
var format_R02S05_61 = new ol.format.GeoJSON();
var features_R02S05_61 = format_R02S05_61.readFeatures(json_R02S05_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_61.addFeatures(features_R02S05_61);
var lyr_R02S05_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_61, 
                style: style_R02S05_61,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_61.png" /> R02S05'
            });
var format_R02S06_62 = new ol.format.GeoJSON();
var features_R02S06_62 = format_R02S06_62.readFeatures(json_R02S06_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_62.addFeatures(features_R02S06_62);
var lyr_R02S06_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_62, 
                style: style_R02S06_62,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_62.png" /> R02S06'
            });
var format_R02S07_63 = new ol.format.GeoJSON();
var features_R02S07_63 = format_R02S07_63.readFeatures(json_R02S07_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_63.addFeatures(features_R02S07_63);
var lyr_R02S07_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_63, 
                style: style_R02S07_63,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_63.png" /> R02S07'
            });
var format_R02S08_64 = new ol.format.GeoJSON();
var features_R02S08_64 = format_R02S08_64.readFeatures(json_R02S08_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_64.addFeatures(features_R02S08_64);
var lyr_R02S08_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_64, 
                style: style_R02S08_64,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_64.png" /> R02S08'
            });
var format_R03S01_65 = new ol.format.GeoJSON();
var features_R03S01_65 = format_R03S01_65.readFeatures(json_R03S01_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_65.addFeatures(features_R03S01_65);
var lyr_R03S01_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_65, 
                style: style_R03S01_65,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_65.png" /> R03S01'
            });
var format_R03S02_66 = new ol.format.GeoJSON();
var features_R03S02_66 = format_R03S02_66.readFeatures(json_R03S02_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_66.addFeatures(features_R03S02_66);
var lyr_R03S02_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_66, 
                style: style_R03S02_66,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_66.png" /> R03S02'
            });
var format_R03S03_67 = new ol.format.GeoJSON();
var features_R03S03_67 = format_R03S03_67.readFeatures(json_R03S03_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_67.addFeatures(features_R03S03_67);
var lyr_R03S03_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_67, 
                style: style_R03S03_67,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_67.png" /> R03S03'
            });
var format_R03S04_68 = new ol.format.GeoJSON();
var features_R03S04_68 = format_R03S04_68.readFeatures(json_R03S04_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_68.addFeatures(features_R03S04_68);
var lyr_R03S04_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_68, 
                style: style_R03S04_68,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_68.png" /> R03S04'
            });
var format_R03S05_69 = new ol.format.GeoJSON();
var features_R03S05_69 = format_R03S05_69.readFeatures(json_R03S05_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_69.addFeatures(features_R03S05_69);
var lyr_R03S05_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_69, 
                style: style_R03S05_69,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_69.png" /> R03S05'
            });
var format_R03S06_70 = new ol.format.GeoJSON();
var features_R03S06_70 = format_R03S06_70.readFeatures(json_R03S06_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_70.addFeatures(features_R03S06_70);
var lyr_R03S06_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_70, 
                style: style_R03S06_70,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_70.png" /> R03S06'
            });
var format_R03S07_71 = new ol.format.GeoJSON();
var features_R03S07_71 = format_R03S07_71.readFeatures(json_R03S07_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_71.addFeatures(features_R03S07_71);
var lyr_R03S07_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_71, 
                style: style_R03S07_71,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_71.png" /> R03S07'
            });
var format_R03S08_72 = new ol.format.GeoJSON();
var features_R03S08_72 = format_R03S08_72.readFeatures(json_R03S08_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_72.addFeatures(features_R03S08_72);
var lyr_R03S08_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_72, 
                style: style_R03S08_72,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_72.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraa275_73 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa275_73 = format_ProgramaAdoteUmaPraa275_73.readFeatures(json_ProgramaAdoteUmaPraa275_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa275_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa275_73.addFeatures(features_ProgramaAdoteUmaPraa275_73);
var lyr_ProgramaAdoteUmaPraa275_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa275_73, 
                style: style_ProgramaAdoteUmaPraa275_73,
                popuplayertitle: 'Programa Adote Uma Praça (275)',
                interactive: true,
    title: 'Programa Adote Uma Praça (275)<br />\
    <img src="styles/legend/ProgramaAdoteUmaPraa275_73_0.png" /> Com Placa<br />\
    <img src="styles/legend/ProgramaAdoteUmaPraa275_73_1.png" /> Sem Placa<br />' });
var format_Contineres286_74 = new ol.format.GeoJSON();
var features_Contineres286_74 = format_Contineres286_74.readFeatures(json_Contineres286_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286_74.addFeatures(features_Contineres286_74);
var lyr_Contineres286_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286_74, 
                style: style_Contineres286_74,
                popuplayertitle: 'Contêineres (286)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286_74.png" /> Contêineres (286)'
            });
var format_ContineresSubterrneos9_75 = new ol.format.GeoJSON();
var features_ContineresSubterrneos9_75 = format_ContineresSubterrneos9_75.readFeatures(json_ContineresSubterrneos9_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContineresSubterrneos9_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContineresSubterrneos9_75.addFeatures(features_ContineresSubterrneos9_75);
var lyr_ContineresSubterrneos9_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContineresSubterrneos9_75, 
                style: style_ContineresSubterrneos9_75,
                popuplayertitle: 'Contêineres Subterrâneos (9)',
                interactive: true,
                title: '<img src="styles/legend/ContineresSubterrneos9_75.png" /> Contêineres Subterrâneos (9)'
            });
var format_PrpriosPblicos_76 = new ol.format.GeoJSON();
var features_PrpriosPblicos_76 = format_PrpriosPblicos_76.readFeatures(json_PrpriosPblicos_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrpriosPblicos_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrpriosPblicos_76.addFeatures(features_PrpriosPblicos_76);
var lyr_PrpriosPblicos_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrpriosPblicos_76, 
                style: style_PrpriosPblicos_76,
                popuplayertitle: 'Próprios Públicos',
                interactive: true,
    title: 'Próprios Públicos<br />\
    <img src="styles/legend/PrpriosPblicos_76_0.png" /> CONTRATO ESSE<br />\
    <img src="styles/legend/PrpriosPblicos_76_1.png" /> CONTRATO VPN<br />' });
var format_PontosViciadosapsset202412_77 = new ol.format.GeoJSON();
var features_PontosViciadosapsset202412_77 = format_PontosViciadosapsset202412_77.readFeatures(json_PontosViciadosapsset202412_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosapsset202412_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosapsset202412_77.addFeatures(features_PontosViciadosapsset202412_77);
var lyr_PontosViciadosapsset202412_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosapsset202412_77, 
                style: style_PontosViciadosapsset202412_77,
                popuplayertitle: 'Pontos Viciados após set/2024 (12)',
                interactive: true,
    title: 'Pontos Viciados após set/2024 (12)<br />\
    <img src="styles/legend/PontosViciadosapsset202412_77_0.png" /> Imóvel Privado<br />\
    <img src="styles/legend/PontosViciadosapsset202412_77_1.png" /> Imóvel Público<br />' });
var format_PontosViciadosatset2024109_78 = new ol.format.GeoJSON();
var features_PontosViciadosatset2024109_78 = format_PontosViciadosatset2024109_78.readFeatures(json_PontosViciadosatset2024109_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosatset2024109_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosatset2024109_78.addFeatures(features_PontosViciadosatset2024109_78);
var lyr_PontosViciadosatset2024109_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosatset2024109_78, 
                style: style_PontosViciadosatset2024109_78,
                popuplayertitle: 'Pontos Viciados até set/2024 (109)',
                interactive: true,
    title: 'Pontos Viciados até set/2024 (109)<br />\
    <img src="styles/legend/PontosViciadosatset2024109_78_0.png" /> Imóvel Privado<br />\
    <img src="styles/legend/PontosViciadosatset2024109_78_1.png" /> Imóvel Público<br />' });
var format_rvoreImuneaoCorte8_79 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8_79 = format_rvoreImuneaoCorte8_79.readFeatures(json_rvoreImuneaoCorte8_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8_79.addFeatures(features_rvoreImuneaoCorte8_79);
var lyr_rvoreImuneaoCorte8_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8_79, 
                style: style_rvoreImuneaoCorte8_79,
                popuplayertitle: 'Árvore Imune ao Corte (8)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8_79.png" /> Árvore Imune ao Corte (8)'
            });
var format_LocaisdeDifcilAcessoereasRurais20_80 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20_80 = format_LocaisdeDifcilAcessoereasRurais20_80.readFeatures(json_LocaisdeDifcilAcessoereasRurais20_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20_80.addFeatures(features_LocaisdeDifcilAcessoereasRurais20_80);
var lyr_LocaisdeDifcilAcessoereasRurais20_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20_80, 
                style: style_LocaisdeDifcilAcessoereasRurais20_80,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20_80.png" /> Locais de Difícil Acesso e Áreas Rurais (20)'
            });
var format_ServiosPAGOSDisponveis_81 = new ol.format.GeoJSON();
var features_ServiosPAGOSDisponveis_81 = format_ServiosPAGOSDisponveis_81.readFeatures(json_ServiosPAGOSDisponveis_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiosPAGOSDisponveis_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosPAGOSDisponveis_81.addFeatures(features_ServiosPAGOSDisponveis_81);
var lyr_ServiosPAGOSDisponveis_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiosPAGOSDisponveis_81, 
                style: style_ServiosPAGOSDisponveis_81,
                popuplayertitle: 'Serviços PAGOS Disponíveis',
                interactive: true,
                title: '<img src="styles/legend/ServiosPAGOSDisponveis_81.png" /> Serviços PAGOS Disponíveis'
            });
var format_ServiosGRATUITOSDisponveis_82 = new ol.format.GeoJSON();
var features_ServiosGRATUITOSDisponveis_82 = format_ServiosGRATUITOSDisponveis_82.readFeatures(json_ServiosGRATUITOSDisponveis_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiosGRATUITOSDisponveis_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosGRATUITOSDisponveis_82.addFeatures(features_ServiosGRATUITOSDisponveis_82);
var lyr_ServiosGRATUITOSDisponveis_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiosGRATUITOSDisponveis_82, 
                style: style_ServiosGRATUITOSDisponveis_82,
                popuplayertitle: 'Serviços GRATUITOS Disponíveis',
                interactive: true,
                title: '<img src="styles/legend/ServiosGRATUITOSDisponveis_82.png" /> Serviços GRATUITOS Disponíveis'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ServiosPAGOSDisponveis_81,lyr_ServiosGRATUITOSDisponveis_82,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_ServiodeContinerContratoESSE = new ol.layer.Group({
                                layers: [lyr_Contineres286_74,lyr_ContineresSubterrneos9_75,],
                                fold: 'close',
                                title: 'Serviço de Contêiner - Contrato ESSE'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_49,lyr_R01S02_50,lyr_R01S03_51,lyr_R01S04_52,lyr_R01S05_53,lyr_R01S06_54,lyr_R01S07_55,lyr_R01S08_56,lyr_R02S01_57,lyr_R02S02_58,lyr_R02S03_59,lyr_R02S04_60,lyr_R02S05_61,lyr_R02S06_62,lyr_R02S07_63,lyr_R02S08_64,lyr_R03S01_65,lyr_R03S02_66,lyr_R03S03_67,lyr_R03S04_68,lyr_R03S05_69,lyr_R03S06_70,lyr_R03S07_71,lyr_R03S08_72,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP_44,lyr_RiosDuplos_45,lyr_MassasDgua_46,lyr_RiosSimples_47,lyr_Nascentes_48,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_28,lyr_AROreadeAmortecimento_29,lyr_AROFaixadeCuestas_30,lyr_AROAPP_31,lyr_ARAIncongrunciasemAPP_32,lyr_ARAETELagoas_33,lyr_ARAAterros_34,lyr_AODreaUrbanaConsolidada_35,lyr_AODBaixaDensidadeNvel3_36,lyr_AODBaixaDensidadeNvel2_37,lyr_AODBaixaDensidadeNvel1_38,lyr_AODAUSFase2_39,lyr_AODAUSFase1_40,lyr_LimitedaBaciadoRioCanoas2023_41,lyr_LimitedaBaciadoRioCanoasLei2006_42,lyr_DelimitaodaBaciadoRibeirodaOna_43,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica_14,lyr_CartaAnuncia_15,lyr_PlantioVoluntrio_16,lyr_TACMinistrioPblico_17,lyr_TCRACETESB_18,lyr_TCRAMunicipal_19,lyr_TRPRLCETESB_20,lyr_AoCivilPblica_21,lyr_CartaAnuncia_22,lyr_PlantioVoluntrio_23,lyr_TACMinistrioPblico_24,lyr_TCRACETESB_25,lyr_TCRAMunicipal_26,lyr_TRPRLCETESB_27,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF_5,lyr_ProgramaAdoteUmaPraa_6,lyr_Lote_7,lyr_reaVerde_8,lyr_reaPatrimonial_9,lyr_reaInstitucional_10,lyr_readeUsoEspecial_11,lyr_APP_12,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_LoteEMDEF_5.setVisible(true);lyr_ProgramaAdoteUmaPraa_6.setVisible(true);lyr_Lote_7.setVisible(true);lyr_reaVerde_8.setVisible(true);lyr_reaPatrimonial_9.setVisible(true);lyr_reaInstitucional_10.setVisible(true);lyr_readeUsoEspecial_11.setVisible(true);lyr_APP_12.setVisible(true);lyr_GerenciamentodereasContaminadas_13.setVisible(false);lyr_AoCivilPblica_14.setVisible(false);lyr_CartaAnuncia_15.setVisible(false);lyr_PlantioVoluntrio_16.setVisible(false);lyr_TACMinistrioPblico_17.setVisible(false);lyr_TCRACETESB_18.setVisible(false);lyr_TCRAMunicipal_19.setVisible(false);lyr_TRPRLCETESB_20.setVisible(false);lyr_AoCivilPblica_21.setVisible(false);lyr_CartaAnuncia_22.setVisible(false);lyr_PlantioVoluntrio_23.setVisible(false);lyr_TACMinistrioPblico_24.setVisible(false);lyr_TCRACETESB_25.setVisible(false);lyr_TCRAMunicipal_26.setVisible(false);lyr_TRPRLCETESB_27.setVisible(false);lyr_ARORemanescentesFlorestais_28.setVisible(false);lyr_AROreadeAmortecimento_29.setVisible(false);lyr_AROFaixadeCuestas_30.setVisible(false);lyr_AROAPP_31.setVisible(false);lyr_ARAIncongrunciasemAPP_32.setVisible(false);lyr_ARAETELagoas_33.setVisible(false);lyr_ARAAterros_34.setVisible(false);lyr_AODreaUrbanaConsolidada_35.setVisible(false);lyr_AODBaixaDensidadeNvel3_36.setVisible(false);lyr_AODBaixaDensidadeNvel2_37.setVisible(false);lyr_AODBaixaDensidadeNvel1_38.setVisible(false);lyr_AODAUSFase2_39.setVisible(false);lyr_AODAUSFase1_40.setVisible(false);lyr_LimitedaBaciadoRioCanoas2023_41.setVisible(false);lyr_LimitedaBaciadoRioCanoasLei2006_42.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_43.setVisible(false);lyr_APP_44.setVisible(false);lyr_RiosDuplos_45.setVisible(false);lyr_MassasDgua_46.setVisible(false);lyr_RiosSimples_47.setVisible(false);lyr_Nascentes_48.setVisible(false);lyr_R01S01_49.setVisible(false);lyr_R01S02_50.setVisible(false);lyr_R01S03_51.setVisible(false);lyr_R01S04_52.setVisible(false);lyr_R01S05_53.setVisible(false);lyr_R01S06_54.setVisible(false);lyr_R01S07_55.setVisible(false);lyr_R01S08_56.setVisible(false);lyr_R02S01_57.setVisible(false);lyr_R02S02_58.setVisible(false);lyr_R02S03_59.setVisible(false);lyr_R02S04_60.setVisible(false);lyr_R02S05_61.setVisible(false);lyr_R02S06_62.setVisible(false);lyr_R02S07_63.setVisible(false);lyr_R02S08_64.setVisible(false);lyr_R03S01_65.setVisible(false);lyr_R03S02_66.setVisible(false);lyr_R03S03_67.setVisible(false);lyr_R03S04_68.setVisible(false);lyr_R03S05_69.setVisible(false);lyr_R03S06_70.setVisible(false);lyr_R03S07_71.setVisible(false);lyr_R03S08_72.setVisible(false);lyr_ProgramaAdoteUmaPraa275_73.setVisible(false);lyr_Contineres286_74.setVisible(false);lyr_ContineresSubterrneos9_75.setVisible(false);lyr_PrpriosPblicos_76.setVisible(false);lyr_PontosViciadosapsset202412_77.setVisible(false);lyr_PontosViciadosatset2024109_78.setVisible(false);lyr_rvoreImuneaoCorte8_79.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20_80.setVisible(false);lyr_ServiosPAGOSDisponveis_81.setVisible(false);lyr_ServiosGRATUITOSDisponveis_82.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_reasPblicas,lyr_GerenciamentodereasContaminadas_13,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_SubregiesContratoESSE,lyr_ProgramaAdoteUmaPraa275_73,group_ServiodeContinerContratoESSE,lyr_PrpriosPblicos_76,lyr_PontosViciadosapsset202412_77,lyr_PontosViciadosatset2024109_78,lyr_rvoreImuneaoCorte8_79,lyr_LocaisdeDifcilAcessoereasRurais20_80,group_DescarteCorretodeResduos];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_LoteEMDEF_5.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_ProgramaAdoteUmaPraa_6.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_Lote_7.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaVerde_8.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaPatrimonial_9.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaInstitucional_10.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_readeUsoEspecial_11.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP_12.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_GerenciamentodereasContaminadas_13.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area_m2': 'Área (m²)', });
lyr_AoCivilPblica_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_CartaAnuncia_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_AoCivilPblica_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_28.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_29.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_30.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_31.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_32.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_33.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_34.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_35.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_36.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_37.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_38.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_39.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_40.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoas2023_41.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLei2006_42.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_43.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP_44.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos_45.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua_46.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples_47.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes_48.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_R01S01_49.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_50.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_51.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_52.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_53.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_54.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_55.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_56.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_57.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_58.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_59.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_60.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_61.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_62.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_63.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_64.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_65.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_66.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_67.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_68.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_69.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_70.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_71.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_72.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraa275_73.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'm2', });
lyr_Contineres286_74.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_ContineresSubterrneos9_75.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Tipo': 'Tipo', 'Descrição': 'Descrição', });
lyr_PrpriosPblicos_76.set('fieldAliases', {'fid': 'fid', 'proprio_publico': 'Próprio Público', 'area': 'Área (m²)', 'terceirizacao': 'Terceirização', });
lyr_PontosViciadosapsset202412_77.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'classif_imovel': 'CLASSIFICAÇÃO DO IMÓVEL', 'frequencia_limpeza': 'FREQUÊNCIA DE LIMPEZA', });
lyr_PontosViciadosatset2024109_78.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO_IMOBILIARIO': 'CADASTRO IMOBILIÁRIO', 'classif_imovel': 'CLASSIFICAÇÃO DO IMÓVEL', 'frequencia_limpeza': 'FREQUÊNCIA DE LIMPEZA', });
lyr_rvoreImuneaoCorte8_79.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20_80.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_ServiosPAGOSDisponveis_81.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'descri____o': 'Descrição', 'tipo': 'Tipo', });
lyr_ServiosGRATUITOSDisponveis_82.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'tipo': 'Tipo', 'descri____o': 'Descrição', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_LoteEMDEF_5.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', });
lyr_ProgramaAdoteUmaPraa_6.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_Lote_7.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaVerde_8.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaPatrimonial_9.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaInstitucional_10.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_readeUsoEspecial_11.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_APP_12.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_GerenciamentodereasContaminadas_13.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_AoCivilPblica_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_PlantioVoluntrio_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRAMunicipal_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TRPRLCETESB_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_AoCivilPblica_21.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'proc_municipal': '', });
lyr_CartaAnuncia_22.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'doc_origem': '', });
lyr_PlantioVoluntrio_23.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', });
lyr_TACMinistrioPblico_24.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'ic': '', 'proc_municipal': '', });
lyr_TCRACETESB_25.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRAMunicipal_26.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'autorizacao': '', });
lyr_TRPRLCETESB_27.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_ARORemanescentesFlorestais_28.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_29.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_30.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_31.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_32.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_33.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_34.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_35.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_36.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_37.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_38.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_39.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_40.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoas2023_41.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLei2006_42.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_43.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP_44.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos_45.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua_46.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples_47.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes_48.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_R01S01_49.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_50.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_51.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_52.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_53.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_54.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_55.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_56.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_57.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_58.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_59.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_60.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_61.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_62.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_63.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_64.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_65.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_66.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_67.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_68.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_69.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_70.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_71.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_72.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraa275_73.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', });
lyr_Contineres286_74.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ContineresSubterrneos9_75.set('fieldImages', {'fid': '', 'Nome': '', 'Tipo': '', 'Descrição': '', });
lyr_PrpriosPblicos_76.set('fieldImages', {'fid': 'TextEdit', 'proprio_publico': 'TextEdit', 'area': 'TextEdit', 'terceirizacao': 'TextEdit', });
lyr_PontosViciadosapsset202412_77.set('fieldImages', {'fid': '', 'BAIRRO': '', 'RUA': '', 'LONGITUDE': '', 'LATITUDE': '', 'classif_imovel': '', 'frequencia_limpeza': '', });
lyr_PontosViciadosatset2024109_78.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'classif_imovel': 'TextEdit', 'frequencia_limpeza': 'TextEdit', });
lyr_rvoreImuneaoCorte8_79.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LocaisdeDifcilAcessoereasRurais20_80.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_ServiosPAGOSDisponveis_81.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descri____o': 'TextEdit', 'tipo': 'TextEdit', });
lyr_ServiosGRATUITOSDisponveis_82.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'tipo': 'TextEdit', 'descri____o': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LoteEMDEF_5.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa_6.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_Lote_7.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_reaVerde_8.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_reaPatrimonial_9.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_reaInstitucional_10.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_readeUsoEspecial_11.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_APP_12.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_GerenciamentodereasContaminadas_13.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_AoCivilPblica_14.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia_15.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio_16.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico_17.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB_18.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal_19.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_AoCivilPblica_21.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia_22.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio_23.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico_24.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB_25.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal_26.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB_27.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_28.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_29.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_30.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_31.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_32.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_33.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_34.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_35.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_36.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_37.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_38.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_39.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_40.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoas2023_41.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLei2006_42.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_43.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP_44.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos_45.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua_46.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples_47.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes_48.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_R01S01_49.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_50.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_51.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_52.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_53.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_54.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_55.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_56.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_57.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_58.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_59.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_60.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_61.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_62.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_63.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_64.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_65.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_66.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_67.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_68.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_69.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_70.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_71.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_72.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa275_73.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_Contineres286_74.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_ContineresSubterrneos9_75.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_PrpriosPblicos_76.set('fieldLabels', {'fid': 'hidden field', 'proprio_publico': 'inline label - visible with data', 'area': 'inline label - visible with data', 'terceirizacao': 'inline label - visible with data', });
lyr_PontosViciadosapsset202412_77.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'classif_imovel': 'inline label - visible with data', 'frequencia_limpeza': 'inline label - visible with data', });
lyr_PontosViciadosatset2024109_78.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'hidden field', 'classif_imovel': 'inline label - visible with data', 'frequencia_limpeza': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8_79.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20_80.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_ServiosPAGOSDisponveis_81.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'descri____o': 'inline label - visible with data', 'tipo': 'inline label - visible with data', });
lyr_ServiosGRATUITOSDisponveis_82.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'descri____o': 'inline label - visible with data', });
lyr_ServiosGRATUITOSDisponveis_82.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});