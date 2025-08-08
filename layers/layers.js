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
var format_FazendaMunicipalPousoAlto_13 = new ol.format.GeoJSON();
var features_FazendaMunicipalPousoAlto_13 = format_FazendaMunicipalPousoAlto_13.readFeatures(json_FazendaMunicipalPousoAlto_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaMunicipalPousoAlto_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaMunicipalPousoAlto_13.addFeatures(features_FazendaMunicipalPousoAlto_13);
var lyr_FazendaMunicipalPousoAlto_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaMunicipalPousoAlto_13, 
                style: style_FazendaMunicipalPousoAlto_13,
                popuplayertitle: 'Fazenda Municipal Pouso Alto',
                interactive: true,
    title: 'Fazenda Municipal Pouso Alto<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_0.png" /> Área A<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_1.png" /> Área a ser averbada (Parte da Área G)<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_2.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_3.png" /> Área B<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_4.png" /> Área C<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_5.png" /> Área D<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_6.png" /> Área E<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_7.png" /> Área F<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_8.png" /> Área G (Remanescente)<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_9.png" /> Área H<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_10.png" /> Área I<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_11.png" /> Área J<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_12.png" /> Área K<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_13.png" /> Av. de acesso ao Horto e Colégio Agrícola<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_14.png" /> Conjunto Habitacional<br />\
    <img src="styles/legend/FazendaMunicipalPousoAlto_13_15.png" /> Remanescente da Matrícula 11419<br />' });
var format_LotesParticulares_14 = new ol.format.GeoJSON();
var features_LotesParticulares_14 = format_LotesParticulares_14.readFeatures(json_LotesParticulares_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesParticulares_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesParticulares_14.addFeatures(features_LotesParticulares_14);
var lyr_LotesParticulares_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesParticulares_14, 
                style: style_LotesParticulares_14,
                popuplayertitle: 'Lotes Particulares',
                interactive: true,
                title: '<img src="styles/legend/LotesParticulares_14.png" /> Lotes Particulares'
            });
var format_GerenciamentodereasContaminadas_15 = new ol.format.GeoJSON();
var features_GerenciamentodereasContaminadas_15 = format_GerenciamentodereasContaminadas_15.readFeatures(json_GerenciamentodereasContaminadas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerenciamentodereasContaminadas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerenciamentodereasContaminadas_15.addFeatures(features_GerenciamentodereasContaminadas_15);
var lyr_GerenciamentodereasContaminadas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GerenciamentodereasContaminadas_15, 
                style: style_GerenciamentodereasContaminadas_15,
                popuplayertitle: 'Gerenciamento de Áreas Contaminadas',
                interactive: true,
                title: '<img src="styles/legend/GerenciamentodereasContaminadas_15.png" /> Gerenciamento de Áreas Contaminadas'
            });
var format_AoCivilPblica_16 = new ol.format.GeoJSON();
var features_AoCivilPblica_16 = format_AoCivilPblica_16.readFeatures(json_AoCivilPblica_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_16.addFeatures(features_AoCivilPblica_16);
var lyr_AoCivilPblica_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_16, 
                style: style_AoCivilPblica_16,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_16.png" /> Ação Civil Pública'
            });
var format_CartaAnuncia_17 = new ol.format.GeoJSON();
var features_CartaAnuncia_17 = format_CartaAnuncia_17.readFeatures(json_CartaAnuncia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_17.addFeatures(features_CartaAnuncia_17);
var lyr_CartaAnuncia_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_17, 
                style: style_CartaAnuncia_17,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_17.png" /> Carta Anuência'
            });
var format_PlantioVoluntrio_18 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_18 = format_PlantioVoluntrio_18.readFeatures(json_PlantioVoluntrio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_18.addFeatures(features_PlantioVoluntrio_18);
var lyr_PlantioVoluntrio_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_18, 
                style: style_PlantioVoluntrio_18,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_18.png" /> Plantio Voluntário'
            });
var format_TACMinistrioPblico_19 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_19 = format_TACMinistrioPblico_19.readFeatures(json_TACMinistrioPblico_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_19.addFeatures(features_TACMinistrioPblico_19);
var lyr_TACMinistrioPblico_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_19, 
                style: style_TACMinistrioPblico_19,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_19.png" /> TAC Ministério Público'
            });
var format_TCRACETESB_20 = new ol.format.GeoJSON();
var features_TCRACETESB_20 = format_TCRACETESB_20.readFeatures(json_TCRACETESB_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_20.addFeatures(features_TCRACETESB_20);
var lyr_TCRACETESB_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_20, 
                style: style_TCRACETESB_20,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_20.png" /> TCRA CETESB'
            });
var format_TCRAMunicipal_21 = new ol.format.GeoJSON();
var features_TCRAMunicipal_21 = format_TCRAMunicipal_21.readFeatures(json_TCRAMunicipal_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_21.addFeatures(features_TCRAMunicipal_21);
var lyr_TCRAMunicipal_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_21, 
                style: style_TCRAMunicipal_21,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_21.png" /> TCRA Municipal'
            });
var format_TRPRLCETESB_22 = new ol.format.GeoJSON();
var features_TRPRLCETESB_22 = format_TRPRLCETESB_22.readFeatures(json_TRPRLCETESB_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_22.addFeatures(features_TRPRLCETESB_22);
var lyr_TRPRLCETESB_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_22, 
                style: style_TRPRLCETESB_22,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_22.png" /> TRPRL CETESB'
            });
var format_AoCivilPblica_23 = new ol.format.GeoJSON();
var features_AoCivilPblica_23 = format_AoCivilPblica_23.readFeatures(json_AoCivilPblica_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_23.addFeatures(features_AoCivilPblica_23);
var lyr_AoCivilPblica_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_23, 
                style: style_AoCivilPblica_23,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_23.png" /> Ação Civil Pública'
            });
var format_CartaAnuncia_24 = new ol.format.GeoJSON();
var features_CartaAnuncia_24 = format_CartaAnuncia_24.readFeatures(json_CartaAnuncia_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_24.addFeatures(features_CartaAnuncia_24);
var lyr_CartaAnuncia_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_24, 
                style: style_CartaAnuncia_24,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_24.png" /> Carta Anuência'
            });
var format_PlantioVoluntrio_25 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_25 = format_PlantioVoluntrio_25.readFeatures(json_PlantioVoluntrio_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_25.addFeatures(features_PlantioVoluntrio_25);
var lyr_PlantioVoluntrio_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_25, 
                style: style_PlantioVoluntrio_25,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_25.png" /> Plantio Voluntário'
            });
var format_TACMinistrioPblico_26 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_26 = format_TACMinistrioPblico_26.readFeatures(json_TACMinistrioPblico_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_26.addFeatures(features_TACMinistrioPblico_26);
var lyr_TACMinistrioPblico_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_26, 
                style: style_TACMinistrioPblico_26,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_26.png" /> TAC Ministério Público'
            });
var format_TCRACETESB_27 = new ol.format.GeoJSON();
var features_TCRACETESB_27 = format_TCRACETESB_27.readFeatures(json_TCRACETESB_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_27.addFeatures(features_TCRACETESB_27);
var lyr_TCRACETESB_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_27, 
                style: style_TCRACETESB_27,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_27.png" /> TCRA CETESB'
            });
var format_TCRAMunicipal_28 = new ol.format.GeoJSON();
var features_TCRAMunicipal_28 = format_TCRAMunicipal_28.readFeatures(json_TCRAMunicipal_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_28.addFeatures(features_TCRAMunicipal_28);
var lyr_TCRAMunicipal_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_28, 
                style: style_TCRAMunicipal_28,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_28.png" /> TCRA Municipal'
            });
var format_TRPRLCETESB_29 = new ol.format.GeoJSON();
var features_TRPRLCETESB_29 = format_TRPRLCETESB_29.readFeatures(json_TRPRLCETESB_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_29.addFeatures(features_TRPRLCETESB_29);
var lyr_TRPRLCETESB_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_29, 
                style: style_TRPRLCETESB_29,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_29.png" /> TRPRL CETESB'
            });
var format_ARORemanescentesFlorestais_30 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_30 = format_ARORemanescentesFlorestais_30.readFeatures(json_ARORemanescentesFlorestais_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_30.addFeatures(features_ARORemanescentesFlorestais_30);
var lyr_ARORemanescentesFlorestais_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_30, 
                style: style_ARORemanescentesFlorestais_30,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_30.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_31 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_31 = format_AROreadeAmortecimento_31.readFeatures(json_AROreadeAmortecimento_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_31.addFeatures(features_AROreadeAmortecimento_31);
var lyr_AROreadeAmortecimento_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_31, 
                style: style_AROreadeAmortecimento_31,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_31.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_32 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_32 = format_AROFaixadeCuestas_32.readFeatures(json_AROFaixadeCuestas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_32.addFeatures(features_AROFaixadeCuestas_32);
var lyr_AROFaixadeCuestas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_32, 
                style: style_AROFaixadeCuestas_32,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_32.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_33 = new ol.format.GeoJSON();
var features_AROAPP_33 = format_AROAPP_33.readFeatures(json_AROAPP_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_33.addFeatures(features_AROAPP_33);
var lyr_AROAPP_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_33, 
                style: style_AROAPP_33,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_33.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_34 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_34 = format_ARAIncongrunciasemAPP_34.readFeatures(json_ARAIncongrunciasemAPP_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_34.addFeatures(features_ARAIncongrunciasemAPP_34);
var lyr_ARAIncongrunciasemAPP_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_34, 
                style: style_ARAIncongrunciasemAPP_34,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_34.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_35 = new ol.format.GeoJSON();
var features_ARAETELagoas_35 = format_ARAETELagoas_35.readFeatures(json_ARAETELagoas_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_35.addFeatures(features_ARAETELagoas_35);
var lyr_ARAETELagoas_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_35, 
                style: style_ARAETELagoas_35,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_35.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_36 = new ol.format.GeoJSON();
var features_ARAAterros_36 = format_ARAAterros_36.readFeatures(json_ARAAterros_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_36.addFeatures(features_ARAAterros_36);
var lyr_ARAAterros_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_36, 
                style: style_ARAAterros_36,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_36.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_37 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_37 = format_AODreaUrbanaConsolidada_37.readFeatures(json_AODreaUrbanaConsolidada_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_37.addFeatures(features_AODreaUrbanaConsolidada_37);
var lyr_AODreaUrbanaConsolidada_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_37, 
                style: style_AODreaUrbanaConsolidada_37,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_37.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_38 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_38 = format_AODBaixaDensidadeNvel3_38.readFeatures(json_AODBaixaDensidadeNvel3_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_38.addFeatures(features_AODBaixaDensidadeNvel3_38);
var lyr_AODBaixaDensidadeNvel3_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_38, 
                style: style_AODBaixaDensidadeNvel3_38,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_38.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_39 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_39 = format_AODBaixaDensidadeNvel2_39.readFeatures(json_AODBaixaDensidadeNvel2_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_39.addFeatures(features_AODBaixaDensidadeNvel2_39);
var lyr_AODBaixaDensidadeNvel2_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_39, 
                style: style_AODBaixaDensidadeNvel2_39,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_39.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_40 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_40 = format_AODBaixaDensidadeNvel1_40.readFeatures(json_AODBaixaDensidadeNvel1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_40.addFeatures(features_AODBaixaDensidadeNvel1_40);
var lyr_AODBaixaDensidadeNvel1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_40, 
                style: style_AODBaixaDensidadeNvel1_40,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_40.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_41 = new ol.format.GeoJSON();
var features_AODAUSFase2_41 = format_AODAUSFase2_41.readFeatures(json_AODAUSFase2_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_41.addFeatures(features_AODAUSFase2_41);
var lyr_AODAUSFase2_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_41, 
                style: style_AODAUSFase2_41,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_41.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_42 = new ol.format.GeoJSON();
var features_AODAUSFase1_42 = format_AODAUSFase1_42.readFeatures(json_AODAUSFase1_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_42.addFeatures(features_AODAUSFase1_42);
var lyr_AODAUSFase1_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_42, 
                style: style_AODAUSFase1_42,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_42.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoas2023_43 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoas2023_43 = format_LimitedaBaciadoRioCanoas2023_43.readFeatures(json_LimitedaBaciadoRioCanoas2023_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoas2023_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoas2023_43.addFeatures(features_LimitedaBaciadoRioCanoas2023_43);
var lyr_LimitedaBaciadoRioCanoas2023_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoas2023_43, 
                style: style_LimitedaBaciadoRioCanoas2023_43,
                popuplayertitle: 'Limite da Bacia do Rio Canoas 2023',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoas2023_43.png" /> Limite da Bacia do Rio Canoas 2023'
            });
var format_LimitedaBaciadoRioCanoasLei2006_44 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLei2006_44 = format_LimitedaBaciadoRioCanoasLei2006_44.readFeatures(json_LimitedaBaciadoRioCanoasLei2006_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLei2006_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLei2006_44.addFeatures(features_LimitedaBaciadoRioCanoasLei2006_44);
var lyr_LimitedaBaciadoRioCanoasLei2006_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLei2006_44, 
                style: style_LimitedaBaciadoRioCanoasLei2006_44,
                popuplayertitle: 'Limite da Bacia do Rio Canoas Lei 2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLei2006_44.png" /> Limite da Bacia do Rio Canoas Lei 2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_45 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_45 = format_DelimitaodaBaciadoRibeirodaOna_45.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_45.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_45);
var lyr_DelimitaodaBaciadoRibeirodaOna_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_45, 
                style: style_DelimitaodaBaciadoRibeirodaOna_45,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_45.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP_46 = new ol.format.GeoJSON();
var features_APP_46 = format_APP_46.readFeatures(json_APP_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_46.addFeatures(features_APP_46);
var lyr_APP_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_46, 
                style: style_APP_46,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_46.png" /> APP'
            });
var format_RiosDuplos_47 = new ol.format.GeoJSON();
var features_RiosDuplos_47 = format_RiosDuplos_47.readFeatures(json_RiosDuplos_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos_47.addFeatures(features_RiosDuplos_47);
var lyr_RiosDuplos_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos_47, 
                style: style_RiosDuplos_47,
                popuplayertitle: 'Rios Duplos',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos_47.png" /> Rios Duplos'
            });
var format_MassasDgua_48 = new ol.format.GeoJSON();
var features_MassasDgua_48 = format_MassasDgua_48.readFeatures(json_MassasDgua_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua_48.addFeatures(features_MassasDgua_48);
var lyr_MassasDgua_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua_48, 
                style: style_MassasDgua_48,
                popuplayertitle: 'Massas D\'água',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua_48.png" /> Massas D\'água'
            });
var format_RiosSimples_49 = new ol.format.GeoJSON();
var features_RiosSimples_49 = format_RiosSimples_49.readFeatures(json_RiosSimples_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples_49.addFeatures(features_RiosSimples_49);
var lyr_RiosSimples_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples_49, 
                style: style_RiosSimples_49,
                popuplayertitle: 'Rios Simples',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples_49.png" /> Rios Simples'
            });
var format_Nascentes_50 = new ol.format.GeoJSON();
var features_Nascentes_50 = format_Nascentes_50.readFeatures(json_Nascentes_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_50.addFeatures(features_Nascentes_50);
var lyr_Nascentes_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes_50, 
                style: style_Nascentes_50,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_50.png" /> Nascentes'
            });
var format_R01S01_51 = new ol.format.GeoJSON();
var features_R01S01_51 = format_R01S01_51.readFeatures(json_R01S01_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_51.addFeatures(features_R01S01_51);
var lyr_R01S01_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_51, 
                style: style_R01S01_51,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_51.png" /> R01S01'
            });
var format_R01S02_52 = new ol.format.GeoJSON();
var features_R01S02_52 = format_R01S02_52.readFeatures(json_R01S02_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_52.addFeatures(features_R01S02_52);
var lyr_R01S02_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_52, 
                style: style_R01S02_52,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_52.png" /> R01S02'
            });
var format_R01S03_53 = new ol.format.GeoJSON();
var features_R01S03_53 = format_R01S03_53.readFeatures(json_R01S03_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_53.addFeatures(features_R01S03_53);
var lyr_R01S03_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_53, 
                style: style_R01S03_53,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_53.png" /> R01S03'
            });
var format_R01S04_54 = new ol.format.GeoJSON();
var features_R01S04_54 = format_R01S04_54.readFeatures(json_R01S04_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_54.addFeatures(features_R01S04_54);
var lyr_R01S04_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_54, 
                style: style_R01S04_54,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_54.png" /> R01S04'
            });
var format_R01S05_55 = new ol.format.GeoJSON();
var features_R01S05_55 = format_R01S05_55.readFeatures(json_R01S05_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_55.addFeatures(features_R01S05_55);
var lyr_R01S05_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_55, 
                style: style_R01S05_55,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_55.png" /> R01S05'
            });
var format_R01S06_56 = new ol.format.GeoJSON();
var features_R01S06_56 = format_R01S06_56.readFeatures(json_R01S06_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_56.addFeatures(features_R01S06_56);
var lyr_R01S06_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_56, 
                style: style_R01S06_56,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_56.png" /> R01S06'
            });
var format_R01S07_57 = new ol.format.GeoJSON();
var features_R01S07_57 = format_R01S07_57.readFeatures(json_R01S07_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_57.addFeatures(features_R01S07_57);
var lyr_R01S07_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_57, 
                style: style_R01S07_57,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_57.png" /> R01S07'
            });
var format_R01S08_58 = new ol.format.GeoJSON();
var features_R01S08_58 = format_R01S08_58.readFeatures(json_R01S08_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_58.addFeatures(features_R01S08_58);
var lyr_R01S08_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_58, 
                style: style_R01S08_58,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_58.png" /> R01S08'
            });
var format_R02S01_59 = new ol.format.GeoJSON();
var features_R02S01_59 = format_R02S01_59.readFeatures(json_R02S01_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_59.addFeatures(features_R02S01_59);
var lyr_R02S01_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_59, 
                style: style_R02S01_59,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_59.png" /> R02S01'
            });
var format_R02S02_60 = new ol.format.GeoJSON();
var features_R02S02_60 = format_R02S02_60.readFeatures(json_R02S02_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_60.addFeatures(features_R02S02_60);
var lyr_R02S02_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_60, 
                style: style_R02S02_60,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_60.png" /> R02S02'
            });
var format_R02S03_61 = new ol.format.GeoJSON();
var features_R02S03_61 = format_R02S03_61.readFeatures(json_R02S03_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_61.addFeatures(features_R02S03_61);
var lyr_R02S03_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_61, 
                style: style_R02S03_61,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_61.png" /> R02S03'
            });
var format_R02S04_62 = new ol.format.GeoJSON();
var features_R02S04_62 = format_R02S04_62.readFeatures(json_R02S04_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_62.addFeatures(features_R02S04_62);
var lyr_R02S04_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_62, 
                style: style_R02S04_62,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_62.png" /> R02S04'
            });
var format_R02S05_63 = new ol.format.GeoJSON();
var features_R02S05_63 = format_R02S05_63.readFeatures(json_R02S05_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_63.addFeatures(features_R02S05_63);
var lyr_R02S05_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_63, 
                style: style_R02S05_63,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_63.png" /> R02S05'
            });
var format_R02S06_64 = new ol.format.GeoJSON();
var features_R02S06_64 = format_R02S06_64.readFeatures(json_R02S06_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_64.addFeatures(features_R02S06_64);
var lyr_R02S06_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_64, 
                style: style_R02S06_64,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_64.png" /> R02S06'
            });
var format_R02S07_65 = new ol.format.GeoJSON();
var features_R02S07_65 = format_R02S07_65.readFeatures(json_R02S07_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_65.addFeatures(features_R02S07_65);
var lyr_R02S07_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_65, 
                style: style_R02S07_65,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_65.png" /> R02S07'
            });
var format_R02S08_66 = new ol.format.GeoJSON();
var features_R02S08_66 = format_R02S08_66.readFeatures(json_R02S08_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_66.addFeatures(features_R02S08_66);
var lyr_R02S08_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_66, 
                style: style_R02S08_66,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_66.png" /> R02S08'
            });
var format_R03S01_67 = new ol.format.GeoJSON();
var features_R03S01_67 = format_R03S01_67.readFeatures(json_R03S01_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_67.addFeatures(features_R03S01_67);
var lyr_R03S01_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_67, 
                style: style_R03S01_67,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_67.png" /> R03S01'
            });
var format_R03S02_68 = new ol.format.GeoJSON();
var features_R03S02_68 = format_R03S02_68.readFeatures(json_R03S02_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_68.addFeatures(features_R03S02_68);
var lyr_R03S02_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_68, 
                style: style_R03S02_68,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_68.png" /> R03S02'
            });
var format_R03S03_69 = new ol.format.GeoJSON();
var features_R03S03_69 = format_R03S03_69.readFeatures(json_R03S03_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_69.addFeatures(features_R03S03_69);
var lyr_R03S03_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_69, 
                style: style_R03S03_69,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_69.png" /> R03S03'
            });
var format_R03S04_70 = new ol.format.GeoJSON();
var features_R03S04_70 = format_R03S04_70.readFeatures(json_R03S04_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_70.addFeatures(features_R03S04_70);
var lyr_R03S04_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_70, 
                style: style_R03S04_70,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_70.png" /> R03S04'
            });
var format_R03S05_71 = new ol.format.GeoJSON();
var features_R03S05_71 = format_R03S05_71.readFeatures(json_R03S05_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_71.addFeatures(features_R03S05_71);
var lyr_R03S05_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_71, 
                style: style_R03S05_71,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_71.png" /> R03S05'
            });
var format_R03S06_72 = new ol.format.GeoJSON();
var features_R03S06_72 = format_R03S06_72.readFeatures(json_R03S06_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_72.addFeatures(features_R03S06_72);
var lyr_R03S06_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_72, 
                style: style_R03S06_72,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_72.png" /> R03S06'
            });
var format_R03S07_73 = new ol.format.GeoJSON();
var features_R03S07_73 = format_R03S07_73.readFeatures(json_R03S07_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_73.addFeatures(features_R03S07_73);
var lyr_R03S07_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_73, 
                style: style_R03S07_73,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_73.png" /> R03S07'
            });
var format_R03S08_74 = new ol.format.GeoJSON();
var features_R03S08_74 = format_R03S08_74.readFeatures(json_R03S08_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_74.addFeatures(features_R03S08_74);
var lyr_R03S08_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_74, 
                style: style_R03S08_74,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_74.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraa275_75 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa275_75 = format_ProgramaAdoteUmaPraa275_75.readFeatures(json_ProgramaAdoteUmaPraa275_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa275_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa275_75.addFeatures(features_ProgramaAdoteUmaPraa275_75);
var lyr_ProgramaAdoteUmaPraa275_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa275_75, 
                style: style_ProgramaAdoteUmaPraa275_75,
                popuplayertitle: 'Programa Adote Uma Praça (275)',
                interactive: true,
    title: 'Programa Adote Uma Praça (275)<br />\
    <img src="styles/legend/ProgramaAdoteUmaPraa275_75_0.png" /> Com Placa<br />\
    <img src="styles/legend/ProgramaAdoteUmaPraa275_75_1.png" /> Sem Placa<br />' });
var format_Contineres286_76 = new ol.format.GeoJSON();
var features_Contineres286_76 = format_Contineres286_76.readFeatures(json_Contineres286_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286_76.addFeatures(features_Contineres286_76);
var lyr_Contineres286_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286_76, 
                style: style_Contineres286_76,
                popuplayertitle: 'Contêineres (286)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286_76.png" /> Contêineres (286)'
            });
var format_PrpriosPblicos_77 = new ol.format.GeoJSON();
var features_PrpriosPblicos_77 = format_PrpriosPblicos_77.readFeatures(json_PrpriosPblicos_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrpriosPblicos_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrpriosPblicos_77.addFeatures(features_PrpriosPblicos_77);
var lyr_PrpriosPblicos_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrpriosPblicos_77, 
                style: style_PrpriosPblicos_77,
                popuplayertitle: 'Próprios Públicos',
                interactive: true,
    title: 'Próprios Públicos<br />\
    <img src="styles/legend/PrpriosPblicos_77_0.png" /> CONTRATO ESSE<br />\
    <img src="styles/legend/PrpriosPblicos_77_1.png" /> CONTRATO VPN<br />' });
var format_PontosViciadosapsset202413_78 = new ol.format.GeoJSON();
var features_PontosViciadosapsset202413_78 = format_PontosViciadosapsset202413_78.readFeatures(json_PontosViciadosapsset202413_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosapsset202413_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosapsset202413_78.addFeatures(features_PontosViciadosapsset202413_78);
var lyr_PontosViciadosapsset202413_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosapsset202413_78, 
                style: style_PontosViciadosapsset202413_78,
                popuplayertitle: 'Pontos Viciados após set/2024 (13)',
                interactive: true,
    title: 'Pontos Viciados após set/2024 (13)<br />\
    <img src="styles/legend/PontosViciadosapsset202413_78_0.png" /> Imóvel Privado (2)<br />\
    <img src="styles/legend/PontosViciadosapsset202413_78_1.png" /> Imóvel Público (11)<br />' });
var format_PontosViciadosatset2024126_79 = new ol.format.GeoJSON();
var features_PontosViciadosatset2024126_79 = format_PontosViciadosatset2024126_79.readFeatures(json_PontosViciadosatset2024126_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosatset2024126_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosatset2024126_79.addFeatures(features_PontosViciadosatset2024126_79);
var lyr_PontosViciadosatset2024126_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosatset2024126_79, 
                style: style_PontosViciadosatset2024126_79,
                popuplayertitle: 'Pontos Viciados até set/2024 (126)',
                interactive: true,
    title: 'Pontos Viciados até set/2024 (126)<br />\
    <img src="styles/legend/PontosViciadosatset2024126_79_0.png" /> Imóvel Privado (30)<br />\
    <img src="styles/legend/PontosViciadosatset2024126_79_1.png" /> Imóvel Público (96)<br />' });
var format_rvoreImuneaoCorte8_80 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8_80 = format_rvoreImuneaoCorte8_80.readFeatures(json_rvoreImuneaoCorte8_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8_80.addFeatures(features_rvoreImuneaoCorte8_80);
var lyr_rvoreImuneaoCorte8_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8_80, 
                style: style_rvoreImuneaoCorte8_80,
                popuplayertitle: 'Árvore Imune ao Corte (8)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8_80.png" /> Árvore Imune ao Corte (8)'
            });
var format_LocaisdeDifcilAcessoereasRurais20_81 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20_81 = format_LocaisdeDifcilAcessoereasRurais20_81.readFeatures(json_LocaisdeDifcilAcessoereasRurais20_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20_81.addFeatures(features_LocaisdeDifcilAcessoereasRurais20_81);
var lyr_LocaisdeDifcilAcessoereasRurais20_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20_81, 
                style: style_LocaisdeDifcilAcessoereasRurais20_81,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20_81.png" /> Locais de Difícil Acesso e Áreas Rurais (20)'
            });
var format_ResduosdeConstruoCivil7_82 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7_82 = format_ResduosdeConstruoCivil7_82.readFeatures(json_ResduosdeConstruoCivil7_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeConstruoCivil7_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7_82.addFeatures(features_ResduosdeConstruoCivil7_82);
var lyr_ResduosdeConstruoCivil7_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7_82, 
                style: style_ResduosdeConstruoCivil7_82,
                popuplayertitle: 'Resíduos de Construção Civil (7)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7_82.png" /> Resíduos de Construção Civil (7)'
            });
var format_ResduosVerdes1_83 = new ol.format.GeoJSON();
var features_ResduosVerdes1_83 = format_ResduosVerdes1_83.readFeatures(json_ResduosVerdes1_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosVerdes1_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1_83.addFeatures(features_ResduosVerdes1_83);
var lyr_ResduosVerdes1_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1_83, 
                style: style_ResduosVerdes1_83,
                popuplayertitle: 'Resíduos "Verdes" (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1_83.png" /> Resíduos "Verdes" (1)'
            });
var format_ChapasdeRaioX1_84 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1_84 = format_ChapasdeRaioX1_84.readFeatures(json_ChapasdeRaioX1_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapasdeRaioX1_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1_84.addFeatures(features_ChapasdeRaioX1_84);
var lyr_ChapasdeRaioX1_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1_84, 
                style: style_ChapasdeRaioX1_84,
                popuplayertitle: 'Chapas de Raio-X (1)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1_84.png" /> Chapas de Raio-X (1)'
            });
var format_Embalagensvaziasdeagrotxicos1_85 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1_85 = format_Embalagensvaziasdeagrotxicos1_85.readFeatures(json_Embalagensvaziasdeagrotxicos1_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalagensvaziasdeagrotxicos1_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1_85.addFeatures(features_Embalagensvaziasdeagrotxicos1_85);
var lyr_Embalagensvaziasdeagrotxicos1_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1_85, 
                style: style_Embalagensvaziasdeagrotxicos1_85,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1_85.png" /> Embalagens vazias de agrotóxicos (1)'
            });
var format_leodecozinhausado2_86 = new ol.format.GeoJSON();
var features_leodecozinhausado2_86 = format_leodecozinhausado2_86.readFeatures(json_leodecozinhausado2_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leodecozinhausado2_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2_86.addFeatures(features_leodecozinhausado2_86);
var lyr_leodecozinhausado2_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2_86, 
                style: style_leodecozinhausado2_86,
                popuplayertitle: 'Óleo de cozinha usado (2)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2_86.png" /> Óleo de cozinha usado (2)'
            });
var format_leolubrificanteusado1_87 = new ol.format.GeoJSON();
var features_leolubrificanteusado1_87 = format_leolubrificanteusado1_87.readFeatures(json_leolubrificanteusado1_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leolubrificanteusado1_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1_87.addFeatures(features_leolubrificanteusado1_87);
var lyr_leolubrificanteusado1_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1_87, 
                style: style_leolubrificanteusado1_87,
                popuplayertitle: 'Óleo lubrificante usado (1)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1_87.png" /> Óleo lubrificante usado (1)'
            });
var format_Latasdetintametlicasvazias2_88 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2_88 = format_Latasdetintametlicasvazias2_88.readFeatures(json_Latasdetintametlicasvazias2_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latasdetintametlicasvazias2_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2_88.addFeatures(features_Latasdetintametlicasvazias2_88);
var lyr_Latasdetintametlicasvazias2_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2_88, 
                style: style_Latasdetintametlicasvazias2_88,
                popuplayertitle: 'Latas de tinta metálicas vazias (2)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2_88.png" /> Latas de tinta metálicas vazias (2)'
            });
var format_ResduosPerigosos1_89 = new ol.format.GeoJSON();
var features_ResduosPerigosos1_89 = format_ResduosPerigosos1_89.readFeatures(json_ResduosPerigosos1_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosPerigosos1_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1_89.addFeatures(features_ResduosPerigosos1_89);
var lyr_ResduosPerigosos1_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1_89, 
                style: style_ResduosPerigosos1_89,
                popuplayertitle: 'Resíduos Perigosos (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1_89.png" /> Resíduos Perigosos (1)'
            });
var format_Madeiras1_90 = new ol.format.GeoJSON();
var features_Madeiras1_90 = format_Madeiras1_90.readFeatures(json_Madeiras1_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madeiras1_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1_90.addFeatures(features_Madeiras1_90);
var lyr_Madeiras1_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1_90, 
                style: style_Madeiras1_90,
                popuplayertitle: 'Madeiras (1)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1_90.png" /> Madeiras (1)'
            });
var format_ResduosdeServiosdeSade21_91 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21_91 = format_ResduosdeServiosdeSade21_91.readFeatures(json_ResduosdeServiosdeSade21_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeServiosdeSade21_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21_91.addFeatures(features_ResduosdeServiosdeSade21_91);
var lyr_ResduosdeServiosdeSade21_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21_91, 
                style: style_ResduosdeServiosdeSade21_91,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21_91.png" /> Resíduos de Serviços de Saúde (21)'
            });
var format_PilhaseBaterias16_92 = new ol.format.GeoJSON();
var features_PilhaseBaterias16_92 = format_PilhaseBaterias16_92.readFeatures(json_PilhaseBaterias16_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilhaseBaterias16_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16_92.addFeatures(features_PilhaseBaterias16_92);
var lyr_PilhaseBaterias16_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16_92, 
                style: style_PilhaseBaterias16_92,
                popuplayertitle: 'Pilhas e Baterias (16)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16_92.png" /> Pilhas e Baterias (16)'
            });
var format_Pneus1_93 = new ol.format.GeoJSON();
var features_Pneus1_93 = format_Pneus1_93.readFeatures(json_Pneus1_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pneus1_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1_93.addFeatures(features_Pneus1_93);
var lyr_Pneus1_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1_93, 
                style: style_Pneus1_93,
                popuplayertitle: 'Pneus (1)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1_93.png" /> Pneus (1)'
            });
var format_Lmpadas4_94 = new ol.format.GeoJSON();
var features_Lmpadas4_94 = format_Lmpadas4_94.readFeatures(json_Lmpadas4_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmpadas4_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4_94.addFeatures(features_Lmpadas4_94);
var lyr_Lmpadas4_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4_94, 
                style: style_Lmpadas4_94,
                popuplayertitle: 'Lâmpadas (4)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4_94.png" /> Lâmpadas (4)'
            });
var format_ResduosdeCouro1_95 = new ol.format.GeoJSON();
var features_ResduosdeCouro1_95 = format_ResduosdeCouro1_95.readFeatures(json_ResduosdeCouro1_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeCouro1_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1_95.addFeatures(features_ResduosdeCouro1_95);
var lyr_ResduosdeCouro1_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1_95, 
                style: style_ResduosdeCouro1_95,
                popuplayertitle: 'Resíduos de Couro (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1_95.png" /> Resíduos de Couro (1)'
            });
var format_ResduosEletrnicos2_96 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2_96 = format_ResduosEletrnicos2_96.readFeatures(json_ResduosEletrnicos2_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosEletrnicos2_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2_96.addFeatures(features_ResduosEletrnicos2_96);
var lyr_ResduosEletrnicos2_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2_96, 
                style: style_ResduosEletrnicos2_96,
                popuplayertitle: 'Resíduos Eletrônicos (2)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2_96.png" /> Resíduos Eletrônicos (2)'
            });
var format_ResduosReciclveis15_97 = new ol.format.GeoJSON();
var features_ResduosReciclveis15_97 = format_ResduosReciclveis15_97.readFeatures(json_ResduosReciclveis15_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosReciclveis15_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15_97.addFeatures(features_ResduosReciclveis15_97);
var lyr_ResduosReciclveis15_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15_97, 
                style: style_ResduosReciclveis15_97,
                popuplayertitle: 'Resíduos Recicláveis (15)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15_97.png" /> Resíduos Recicláveis (15)'
            });
var format_ResduosInservveis4_98 = new ol.format.GeoJSON();
var features_ResduosInservveis4_98 = format_ResduosInservveis4_98.readFeatures(json_ResduosInservveis4_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosInservveis4_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4_98.addFeatures(features_ResduosInservveis4_98);
var lyr_ResduosInservveis4_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4_98, 
                style: style_ResduosInservveis4_98,
                popuplayertitle: 'Resíduos Inservíveis (4)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4_98.png" /> Resíduos Inservíveis (4)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosdeConstruoCivil7_82,lyr_ResduosVerdes1_83,lyr_ChapasdeRaioX1_84,lyr_Embalagensvaziasdeagrotxicos1_85,lyr_leodecozinhausado2_86,lyr_leolubrificanteusado1_87,lyr_Latasdetintametlicasvazias2_88,lyr_ResduosPerigosos1_89,lyr_Madeiras1_90,lyr_ResduosdeServiosdeSade21_91,lyr_PilhaseBaterias16_92,lyr_Pneus1_93,lyr_Lmpadas4_94,lyr_ResduosdeCouro1_95,lyr_ResduosEletrnicos2_96,lyr_ResduosReciclveis15_97,lyr_ResduosInservveis4_98,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_ServiodeContinerContratoESSE = new ol.layer.Group({
                                layers: [lyr_Contineres286_76,],
                                fold: 'close',
                                title: 'Serviço de Contêiner - Contrato ESSE'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_51,lyr_R01S02_52,lyr_R01S03_53,lyr_R01S04_54,lyr_R01S05_55,lyr_R01S06_56,lyr_R01S07_57,lyr_R01S08_58,lyr_R02S01_59,lyr_R02S02_60,lyr_R02S03_61,lyr_R02S04_62,lyr_R02S05_63,lyr_R02S06_64,lyr_R02S07_65,lyr_R02S08_66,lyr_R03S01_67,lyr_R03S02_68,lyr_R03S03_69,lyr_R03S04_70,lyr_R03S05_71,lyr_R03S06_72,lyr_R03S07_73,lyr_R03S08_74,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP_46,lyr_RiosDuplos_47,lyr_MassasDgua_48,lyr_RiosSimples_49,lyr_Nascentes_50,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_30,lyr_AROreadeAmortecimento_31,lyr_AROFaixadeCuestas_32,lyr_AROAPP_33,lyr_ARAIncongrunciasemAPP_34,lyr_ARAETELagoas_35,lyr_ARAAterros_36,lyr_AODreaUrbanaConsolidada_37,lyr_AODBaixaDensidadeNvel3_38,lyr_AODBaixaDensidadeNvel2_39,lyr_AODBaixaDensidadeNvel1_40,lyr_AODAUSFase2_41,lyr_AODAUSFase1_42,lyr_LimitedaBaciadoRioCanoas2023_43,lyr_LimitedaBaciadoRioCanoasLei2006_44,lyr_DelimitaodaBaciadoRibeirodaOna_45,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica_16,lyr_CartaAnuncia_17,lyr_PlantioVoluntrio_18,lyr_TACMinistrioPblico_19,lyr_TCRACETESB_20,lyr_TCRAMunicipal_21,lyr_TRPRLCETESB_22,lyr_AoCivilPblica_23,lyr_CartaAnuncia_24,lyr_PlantioVoluntrio_25,lyr_TACMinistrioPblico_26,lyr_TCRACETESB_27,lyr_TCRAMunicipal_28,lyr_TRPRLCETESB_29,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF_5,lyr_ProgramaAdoteUmaPraa_6,lyr_Lote_7,lyr_reaVerde_8,lyr_reaPatrimonial_9,lyr_reaInstitucional_10,lyr_readeUsoEspecial_11,lyr_APP_12,lyr_FazendaMunicipalPousoAlto_13,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_LoteEMDEF_5.setVisible(true);lyr_ProgramaAdoteUmaPraa_6.setVisible(true);lyr_Lote_7.setVisible(true);lyr_reaVerde_8.setVisible(true);lyr_reaPatrimonial_9.setVisible(true);lyr_reaInstitucional_10.setVisible(true);lyr_readeUsoEspecial_11.setVisible(true);lyr_APP_12.setVisible(true);lyr_FazendaMunicipalPousoAlto_13.setVisible(true);lyr_LotesParticulares_14.setVisible(true);lyr_GerenciamentodereasContaminadas_15.setVisible(false);lyr_AoCivilPblica_16.setVisible(false);lyr_CartaAnuncia_17.setVisible(false);lyr_PlantioVoluntrio_18.setVisible(false);lyr_TACMinistrioPblico_19.setVisible(false);lyr_TCRACETESB_20.setVisible(false);lyr_TCRAMunicipal_21.setVisible(false);lyr_TRPRLCETESB_22.setVisible(false);lyr_AoCivilPblica_23.setVisible(false);lyr_CartaAnuncia_24.setVisible(false);lyr_PlantioVoluntrio_25.setVisible(false);lyr_TACMinistrioPblico_26.setVisible(false);lyr_TCRACETESB_27.setVisible(false);lyr_TCRAMunicipal_28.setVisible(false);lyr_TRPRLCETESB_29.setVisible(false);lyr_ARORemanescentesFlorestais_30.setVisible(false);lyr_AROreadeAmortecimento_31.setVisible(false);lyr_AROFaixadeCuestas_32.setVisible(false);lyr_AROAPP_33.setVisible(false);lyr_ARAIncongrunciasemAPP_34.setVisible(false);lyr_ARAETELagoas_35.setVisible(false);lyr_ARAAterros_36.setVisible(false);lyr_AODreaUrbanaConsolidada_37.setVisible(false);lyr_AODBaixaDensidadeNvel3_38.setVisible(false);lyr_AODBaixaDensidadeNvel2_39.setVisible(false);lyr_AODBaixaDensidadeNvel1_40.setVisible(false);lyr_AODAUSFase2_41.setVisible(false);lyr_AODAUSFase1_42.setVisible(false);lyr_LimitedaBaciadoRioCanoas2023_43.setVisible(false);lyr_LimitedaBaciadoRioCanoasLei2006_44.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_45.setVisible(false);lyr_APP_46.setVisible(false);lyr_RiosDuplos_47.setVisible(false);lyr_MassasDgua_48.setVisible(false);lyr_RiosSimples_49.setVisible(false);lyr_Nascentes_50.setVisible(false);lyr_R01S01_51.setVisible(false);lyr_R01S02_52.setVisible(false);lyr_R01S03_53.setVisible(false);lyr_R01S04_54.setVisible(false);lyr_R01S05_55.setVisible(false);lyr_R01S06_56.setVisible(false);lyr_R01S07_57.setVisible(false);lyr_R01S08_58.setVisible(false);lyr_R02S01_59.setVisible(false);lyr_R02S02_60.setVisible(false);lyr_R02S03_61.setVisible(false);lyr_R02S04_62.setVisible(false);lyr_R02S05_63.setVisible(false);lyr_R02S06_64.setVisible(false);lyr_R02S07_65.setVisible(false);lyr_R02S08_66.setVisible(false);lyr_R03S01_67.setVisible(false);lyr_R03S02_68.setVisible(false);lyr_R03S03_69.setVisible(false);lyr_R03S04_70.setVisible(false);lyr_R03S05_71.setVisible(false);lyr_R03S06_72.setVisible(false);lyr_R03S07_73.setVisible(false);lyr_R03S08_74.setVisible(false);lyr_ProgramaAdoteUmaPraa275_75.setVisible(false);lyr_Contineres286_76.setVisible(false);lyr_PrpriosPblicos_77.setVisible(false);lyr_PontosViciadosapsset202413_78.setVisible(false);lyr_PontosViciadosatset2024126_79.setVisible(false);lyr_rvoreImuneaoCorte8_80.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20_81.setVisible(false);lyr_ResduosdeConstruoCivil7_82.setVisible(false);lyr_ResduosVerdes1_83.setVisible(false);lyr_ChapasdeRaioX1_84.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1_85.setVisible(false);lyr_leodecozinhausado2_86.setVisible(false);lyr_leolubrificanteusado1_87.setVisible(false);lyr_Latasdetintametlicasvazias2_88.setVisible(false);lyr_ResduosPerigosos1_89.setVisible(false);lyr_Madeiras1_90.setVisible(false);lyr_ResduosdeServiosdeSade21_91.setVisible(false);lyr_PilhaseBaterias16_92.setVisible(false);lyr_Pneus1_93.setVisible(false);lyr_Lmpadas4_94.setVisible(false);lyr_ResduosdeCouro1_95.setVisible(false);lyr_ResduosEletrnicos2_96.setVisible(false);lyr_ResduosReciclveis15_97.setVisible(false);lyr_ResduosInservveis4_98.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_reasPblicas,lyr_LotesParticulares_14,lyr_GerenciamentodereasContaminadas_15,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_SubregiesContratoESSE,lyr_ProgramaAdoteUmaPraa275_75,group_ServiodeContinerContratoESSE,lyr_PrpriosPblicos_77,lyr_PontosViciadosapsset202413_78,lyr_PontosViciadosatset2024126_79,lyr_rvoreImuneaoCorte8_80,lyr_LocaisdeDifcilAcessoereasRurais20_81,group_DescarteCorretodeResduos];
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
lyr_FazendaMunicipalPousoAlto_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propried': 'Propriedade', 'Area': 'Área', 'Matricula': 'Matrícula', 'M²': 'Área (m²)', 'ha': 'Área (ha)', });
lyr_LotesParticulares_14.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_GerenciamentodereasContaminadas_15.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area_m2': 'Área (m²)', });
lyr_AoCivilPblica_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_CartaAnuncia_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_AoCivilPblica_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB_29.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_30.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_31.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_32.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_33.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_34.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_35.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_36.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_37.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_38.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_39.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_40.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_41.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_42.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoas2023_43.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLei2006_44.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_45.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP_46.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos_47.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua_48.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples_49.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes_50.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_R01S01_51.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_52.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_53.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_54.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_55.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_56.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_57.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_58.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_59.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_60.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_61.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_62.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_63.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_64.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_65.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_66.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_67.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_68.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_69.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_70.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_71.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_72.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_73.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_74.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraa275_75.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'm2', });
lyr_Contineres286_76.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_PrpriosPblicos_77.set('fieldAliases', {'fid': 'fid', 'proprio_publico': 'Próprio Público', 'area': 'Área (m²)', 'terceirizacao': 'Terceirização', });
lyr_PontosViciadosapsset202413_78.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'classif_imovel': 'CLASSIFICAÇÃO DO IMÓVEL', 'frequencia_limpeza': 'FREQUÊNCIA DE LIMPEZA', 'quadra': 'QUADRA', 'lote': 'LOTE', 'processo': 'PROCESSO', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_PontosViciadosatset2024126_79.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO_IMOBILIARIO': 'CADASTRO IMOBILIÁRIO', 'classif_imovel': 'CLASSIFICAÇÃO DO IMÓVEL', 'frequencia_limpeza': 'FREQUÊNCIA DE LIMPEZA', 'quadra': 'QUADRA', 'lote': 'LOTE', 'processo': 'PROCESSO', });
lyr_rvoreImuneaoCorte8_80.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20_81.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_ResduosdeConstruoCivil7_82.set('fieldAliases', {'fid': 'fid', 'categoria': 'categoria', 'local': 'local', 'descricao': 'Descrição', 'endereco': 'Endereço', 'contato': 'contato', });
lyr_ResduosVerdes1_83.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1_84.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1_85.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2_86.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1_87.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2_88.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1_89.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1_90.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21_91.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16_92.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1_93.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4_94.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1_95.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2_96.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15_97.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4_98.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
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
lyr_FazendaMunicipalPousoAlto_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Propried': 'TextEdit', 'Area': 'TextEdit', 'Matricula': 'TextEdit', 'M²': 'TextEdit', 'ha': 'TextEdit', });
lyr_LotesParticulares_14.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_GerenciamentodereasContaminadas_15.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_AoCivilPblica_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_PlantioVoluntrio_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRAMunicipal_21.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TRPRLCETESB_22.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_AoCivilPblica_23.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'proc_municipal': '', });
lyr_CartaAnuncia_24.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'doc_origem': '', });
lyr_PlantioVoluntrio_25.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', });
lyr_TACMinistrioPblico_26.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'ic': '', 'proc_municipal': '', });
lyr_TCRACETESB_27.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRAMunicipal_28.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'autorizacao': '', });
lyr_TRPRLCETESB_29.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_ARORemanescentesFlorestais_30.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_31.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_32.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_33.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_34.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_35.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_36.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_37.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_38.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_39.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_40.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_41.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_42.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoas2023_43.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLei2006_44.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_45.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP_46.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos_47.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua_48.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples_49.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes_50.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_R01S01_51.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_52.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_53.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_54.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_55.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_56.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_57.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_58.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_59.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_60.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_61.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_62.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_63.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_64.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_65.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_66.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_67.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_68.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_69.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_70.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_71.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_72.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_73.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_74.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraa275_75.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', });
lyr_Contineres286_76.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_PrpriosPblicos_77.set('fieldImages', {'fid': 'TextEdit', 'proprio_publico': 'TextEdit', 'area': 'TextEdit', 'terceirizacao': 'TextEdit', });
lyr_PontosViciadosapsset202413_78.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'classif_imovel': 'TextEdit', 'frequencia_limpeza': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'processo': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_PontosViciadosatset2024126_79.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'classif_imovel': 'TextEdit', 'frequencia_limpeza': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'processo': 'TextEdit', });
lyr_rvoreImuneaoCorte8_80.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LocaisdeDifcilAcessoereasRurais20_81.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_ResduosdeConstruoCivil7_82.set('fieldImages', {'fid': '', 'categoria': '', 'local': '', 'descricao': '', 'endereco': '', 'contato': '', });
lyr_ResduosVerdes1_83.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ChapasdeRaioX1_84.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Embalagensvaziasdeagrotxicos1_85.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leodecozinhausado2_86.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leolubrificanteusado1_87.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Latasdetintametlicasvazias2_88.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosPerigosos1_89.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Madeiras1_90.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeServiosdeSade21_91.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_PilhaseBaterias16_92.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Pneus1_93.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Lmpadas4_94.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1_95.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosEletrnicos2_96.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15_97.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosInservveis4_98.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LoteEMDEF_5.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa_6.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_Lote_7.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaVerde_8.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaPatrimonial_9.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaInstitucional_10.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_readeUsoEspecial_11.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_APP_12.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_FazendaMunicipalPousoAlto_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propried': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Matricula': 'inline label - visible with data', 'M²': 'inline label - visible with data', 'ha': 'inline label - visible with data', });
lyr_LotesParticulares_14.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_GerenciamentodereasContaminadas_15.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_AoCivilPblica_16.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia_17.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio_18.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico_19.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal_21.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB_22.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_AoCivilPblica_23.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia_24.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio_25.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico_26.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB_27.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal_28.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB_29.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_30.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_31.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_32.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_33.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_34.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_35.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_36.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_37.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_38.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_39.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_40.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_41.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_42.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoas2023_43.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLei2006_44.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_45.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP_46.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos_47.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua_48.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples_49.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes_50.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_R01S01_51.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_52.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_53.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_54.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_55.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_56.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_57.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_58.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_59.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_60.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_61.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_62.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_63.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_64.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_65.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_66.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_67.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_68.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_69.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_70.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_71.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_72.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_73.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_74.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa275_75.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_Contineres286_76.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PrpriosPblicos_77.set('fieldLabels', {'fid': 'hidden field', 'proprio_publico': 'inline label - visible with data', 'area': 'inline label - visible with data', 'terceirizacao': 'inline label - visible with data', });
lyr_PontosViciadosapsset202413_78.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'classif_imovel': 'inline label - visible with data', 'frequencia_limpeza': 'inline label - visible with data', 'quadra': 'no label', 'lote': 'no label', 'processo': 'no label', 'cadastro_imobiliario': 'no label', });
lyr_PontosViciadosatset2024126_79.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'hidden field', 'classif_imovel': 'inline label - visible with data', 'frequencia_limpeza': 'inline label - visible with data', 'quadra': 'no label', 'lote': 'no label', 'processo': 'no label', });
lyr_rvoreImuneaoCorte8_80.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20_81.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7_82.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - visible with data', 'local': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'contato': 'inline label - visible with data', });
lyr_ResduosVerdes1_83.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1_84.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1_85.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2_86.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1_87.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2_88.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1_89.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1_90.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21_91.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16_92.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1_93.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4_94.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1_95.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2_96.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15_97.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4_98.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4_98.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});