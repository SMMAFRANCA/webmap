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
var format_RemanescentedaMatrcula11419_5 = new ol.format.GeoJSON();
var features_RemanescentedaMatrcula11419_5 = format_RemanescentedaMatrcula11419_5.readFeatures(json_RemanescentedaMatrcula11419_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RemanescentedaMatrcula11419_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescentedaMatrcula11419_5.addFeatures(features_RemanescentedaMatrcula11419_5);
var lyr_RemanescentedaMatrcula11419_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemanescentedaMatrcula11419_5, 
                style: style_RemanescentedaMatrcula11419_5,
                popuplayertitle: 'Remanescente da Matrícula 11419',
                interactive: true,
                title: '<img src="styles/legend/RemanescentedaMatrcula11419_5.png" /> Remanescente da Matrícula 11419'
            });
var format_ConjuntoHabitacional_6 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_6 = format_ConjuntoHabitacional_6.readFeatures(json_ConjuntoHabitacional_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConjuntoHabitacional_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_6.addFeatures(features_ConjuntoHabitacional_6);
var lyr_ConjuntoHabitacional_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_6, 
                style: style_ConjuntoHabitacional_6,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_6.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_7 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_7 = format_AvdeacessoaoHortoeColgioAgrcola_7.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_7.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_7);
var lyr_AvdeacessoaoHortoeColgioAgrcola_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_7, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_7,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_7.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_8 = new ol.format.GeoJSON();
var features_reaK_8 = format_reaK_8.readFeatures(json_reaK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_8.addFeatures(features_reaK_8);
var lyr_reaK_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_8, 
                style: style_reaK_8,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_8.png" /> Área K'
            });
var format_reaJ_9 = new ol.format.GeoJSON();
var features_reaJ_9 = format_reaJ_9.readFeatures(json_reaJ_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaJ_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_9.addFeatures(features_reaJ_9);
var lyr_reaJ_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_9, 
                style: style_reaJ_9,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_9.png" /> Área J'
            });
var format_reaI_10 = new ol.format.GeoJSON();
var features_reaI_10 = format_reaI_10.readFeatures(json_reaI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_10.addFeatures(features_reaI_10);
var lyr_reaI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_10, 
                style: style_reaI_10,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_10.png" /> Área I'
            });
var format_reaH_11 = new ol.format.GeoJSON();
var features_reaH_11 = format_reaH_11.readFeatures(json_reaH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_11.addFeatures(features_reaH_11);
var lyr_reaH_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_11, 
                style: style_reaH_11,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_11.png" /> Área H'
            });
var format_reaG_12 = new ol.format.GeoJSON();
var features_reaG_12 = format_reaG_12.readFeatures(json_reaG_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_12.addFeatures(features_reaG_12);
var lyr_reaG_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_12, 
                style: style_reaG_12,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_12.png" /> Área G'
            });
var format_reaF_13 = new ol.format.GeoJSON();
var features_reaF_13 = format_reaF_13.readFeatures(json_reaF_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaF_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_13.addFeatures(features_reaF_13);
var lyr_reaF_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_13, 
                style: style_reaF_13,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_13.png" /> Área F'
            });
var format_reaE_14 = new ol.format.GeoJSON();
var features_reaE_14 = format_reaE_14.readFeatures(json_reaE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_14.addFeatures(features_reaE_14);
var lyr_reaE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_14, 
                style: style_reaE_14,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_14.png" /> Área E'
            });
var format_reaD_15 = new ol.format.GeoJSON();
var features_reaD_15 = format_reaD_15.readFeatures(json_reaD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_15.addFeatures(features_reaD_15);
var lyr_reaD_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_15, 
                style: style_reaD_15,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_15.png" /> Área D'
            });
var format_reaC_16 = new ol.format.GeoJSON();
var features_reaC_16 = format_reaC_16.readFeatures(json_reaC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_16.addFeatures(features_reaC_16);
var lyr_reaC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_16, 
                style: style_reaC_16,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_16.png" /> Área C'
            });
var format_reaB_17 = new ol.format.GeoJSON();
var features_reaB_17 = format_reaB_17.readFeatures(json_reaB_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaB_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_17.addFeatures(features_reaB_17);
var lyr_reaB_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_17, 
                style: style_reaB_17,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_17.png" /> Área B'
            });
var format_reaA_18 = new ol.format.GeoJSON();
var features_reaA_18 = format_reaA_18.readFeatures(json_reaA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_18.addFeatures(features_reaA_18);
var lyr_reaA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_18, 
                style: style_reaA_18,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_18.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_19 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_19 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_19);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_19, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_19,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_19.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_20 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_20 = format_reaaseraverbadaPartedareaG_20.readFeatures(json_reaaseraverbadaPartedareaG_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaaseraverbadaPartedareaG_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_20.addFeatures(features_reaaseraverbadaPartedareaG_20);
var lyr_reaaseraverbadaPartedareaG_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_20, 
                style: style_reaaseraverbadaPartedareaG_20,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_20.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF_21 = new ol.format.GeoJSON();
var features_LoteEMDEF_21 = format_LoteEMDEF_21.readFeatures(json_LoteEMDEF_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF_21.addFeatures(features_LoteEMDEF_21);
var lyr_LoteEMDEF_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF_21, 
                style: style_LoteEMDEF_21,
                popuplayertitle: 'Lote EMDEF',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF_21.png" /> Lote EMDEF'
            });
var format_LoteEMDEF_22 = new ol.format.GeoJSON();
var features_LoteEMDEF_22 = format_LoteEMDEF_22.readFeatures(json_LoteEMDEF_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF_22.addFeatures(features_LoteEMDEF_22);
var lyr_LoteEMDEF_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF_22, 
                style: style_LoteEMDEF_22,
                popuplayertitle: 'Lote EMDEF',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF_22.png" /> Lote EMDEF'
            });
var format_ProgramaAdoteUmaPraa_23 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa_23 = format_ProgramaAdoteUmaPraa_23.readFeatures(json_ProgramaAdoteUmaPraa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa_23.addFeatures(features_ProgramaAdoteUmaPraa_23);
var lyr_ProgramaAdoteUmaPraa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa_23, 
                style: style_ProgramaAdoteUmaPraa_23,
                popuplayertitle: 'Programa Adote Uma Praça',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa_23.png" /> Programa Adote Uma Praça'
            });
var format_Lote_24 = new ol.format.GeoJSON();
var features_Lote_24 = format_Lote_24.readFeatures(json_Lote_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_24.addFeatures(features_Lote_24);
var lyr_Lote_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_24, 
                style: style_Lote_24,
                popuplayertitle: 'Lote',
                interactive: true,
                title: '<img src="styles/legend/Lote_24.png" /> Lote'
            });
var format_Lote_25 = new ol.format.GeoJSON();
var features_Lote_25 = format_Lote_25.readFeatures(json_Lote_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_25.addFeatures(features_Lote_25);
var lyr_Lote_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_25, 
                style: style_Lote_25,
                popuplayertitle: 'Lote',
                interactive: true,
                title: '<img src="styles/legend/Lote_25.png" /> Lote'
            });
var format_reaVerde_26 = new ol.format.GeoJSON();
var features_reaVerde_26 = format_reaVerde_26.readFeatures(json_reaVerde_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde_26.addFeatures(features_reaVerde_26);
var lyr_reaVerde_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde_26, 
                style: style_reaVerde_26,
                popuplayertitle: 'Área Verde',
                interactive: true,
                title: '<img src="styles/legend/reaVerde_26.png" /> Área Verde'
            });
var format_reaPatrimonial_27 = new ol.format.GeoJSON();
var features_reaPatrimonial_27 = format_reaPatrimonial_27.readFeatures(json_reaPatrimonial_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial_27.addFeatures(features_reaPatrimonial_27);
var lyr_reaPatrimonial_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial_27, 
                style: style_reaPatrimonial_27,
                popuplayertitle: 'Área Patrimonial',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial_27.png" /> Área Patrimonial'
            });
var format_reaInstitucional_28 = new ol.format.GeoJSON();
var features_reaInstitucional_28 = format_reaInstitucional_28.readFeatures(json_reaInstitucional_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional_28.addFeatures(features_reaInstitucional_28);
var lyr_reaInstitucional_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional_28, 
                style: style_reaInstitucional_28,
                popuplayertitle: 'Área Institucional',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional_28.png" /> Área Institucional'
            });
var format_readeUsoEspecial_29 = new ol.format.GeoJSON();
var features_readeUsoEspecial_29 = format_readeUsoEspecial_29.readFeatures(json_readeUsoEspecial_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial_29.addFeatures(features_readeUsoEspecial_29);
var lyr_readeUsoEspecial_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial_29, 
                style: style_readeUsoEspecial_29,
                popuplayertitle: 'Área de Uso Especial',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial_29.png" /> Área de Uso Especial'
            });
var format_APP_30 = new ol.format.GeoJSON();
var features_APP_30 = format_APP_30.readFeatures(json_APP_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_30.addFeatures(features_APP_30);
var lyr_APP_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_30, 
                style: style_APP_30,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_30.png" /> APP'
            });
var format_LotesParticulares_31 = new ol.format.GeoJSON();
var features_LotesParticulares_31 = format_LotesParticulares_31.readFeatures(json_LotesParticulares_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesParticulares_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesParticulares_31.addFeatures(features_LotesParticulares_31);
var lyr_LotesParticulares_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesParticulares_31, 
                style: style_LotesParticulares_31,
                popuplayertitle: 'Lotes Particulares',
                interactive: true,
                title: '<img src="styles/legend/LotesParticulares_31.png" /> Lotes Particulares'
            });
var format_ParqueZumbidosPalmares_32 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_32 = format_ParqueZumbidosPalmares_32.readFeatures(json_ParqueZumbidosPalmares_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueZumbidosPalmares_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_32.addFeatures(features_ParqueZumbidosPalmares_32);
var lyr_ParqueZumbidosPalmares_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_32, 
                style: style_ParqueZumbidosPalmares_32,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_32.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacas_33 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_33 = format_AntigoAterrodasMaritacas_33.readFeatures(json_AntigoAterrodasMaritacas_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacas_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_33.addFeatures(features_AntigoAterrodasMaritacas_33);
var lyr_AntigoAterrodasMaritacas_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_33, 
                style: style_AntigoAterrodasMaritacas_33,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_33.png" /> Antigo Aterro das Maritacas'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_AntigoAterrodaFazendaMunicipal_35 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_35 = format_AntigoAterrodaFazendaMunicipal_35.readFeatures(json_AntigoAterrodaFazendaMunicipal_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipal_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_35.addFeatures(features_AntigoAterrodaFazendaMunicipal_35);
var lyr_AntigoAterrodaFazendaMunicipal_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_35, 
                style: style_AntigoAterrodaFazendaMunicipal_35,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_35.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AoCivilPblica_36 = new ol.format.GeoJSON();
var features_AoCivilPblica_36 = format_AoCivilPblica_36.readFeatures(json_AoCivilPblica_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_36.addFeatures(features_AoCivilPblica_36);
var lyr_AoCivilPblica_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_36, 
                style: style_AoCivilPblica_36,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_36.png" /> Ação Civil Pública'
            });
var format_AoCivilPblica_37 = new ol.format.GeoJSON();
var features_AoCivilPblica_37 = format_AoCivilPblica_37.readFeatures(json_AoCivilPblica_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica_37.addFeatures(features_AoCivilPblica_37);
var lyr_AoCivilPblica_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica_37, 
                style: style_AoCivilPblica_37,
                popuplayertitle: 'Ação Civil Pública',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica_37.png" /> Ação Civil Pública'
            });
var format_CartaAnuncia_38 = new ol.format.GeoJSON();
var features_CartaAnuncia_38 = format_CartaAnuncia_38.readFeatures(json_CartaAnuncia_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_38.addFeatures(features_CartaAnuncia_38);
var lyr_CartaAnuncia_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_38, 
                style: style_CartaAnuncia_38,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_38.png" /> Carta Anuência'
            });
var format_CartaAnuncia_39 = new ol.format.GeoJSON();
var features_CartaAnuncia_39 = format_CartaAnuncia_39.readFeatures(json_CartaAnuncia_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia_39.addFeatures(features_CartaAnuncia_39);
var lyr_CartaAnuncia_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia_39, 
                style: style_CartaAnuncia_39,
                popuplayertitle: 'Carta Anuência',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia_39.png" /> Carta Anuência'
            });
var format_PlantioVoluntrio_40 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_40 = format_PlantioVoluntrio_40.readFeatures(json_PlantioVoluntrio_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_40.addFeatures(features_PlantioVoluntrio_40);
var lyr_PlantioVoluntrio_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_40, 
                style: style_PlantioVoluntrio_40,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_40.png" /> Plantio Voluntário'
            });
var format_PlantioVoluntrio_41 = new ol.format.GeoJSON();
var features_PlantioVoluntrio_41 = format_PlantioVoluntrio_41.readFeatures(json_PlantioVoluntrio_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio_41.addFeatures(features_PlantioVoluntrio_41);
var lyr_PlantioVoluntrio_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio_41, 
                style: style_PlantioVoluntrio_41,
                popuplayertitle: 'Plantio Voluntário',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio_41.png" /> Plantio Voluntário'
            });
var format_TACMinistrioPblico_42 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_42 = format_TACMinistrioPblico_42.readFeatures(json_TACMinistrioPblico_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_42.addFeatures(features_TACMinistrioPblico_42);
var lyr_TACMinistrioPblico_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_42, 
                style: style_TACMinistrioPblico_42,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_42.png" /> TAC Ministério Público'
            });
var format_TACMinistrioPblico_43 = new ol.format.GeoJSON();
var features_TACMinistrioPblico_43 = format_TACMinistrioPblico_43.readFeatures(json_TACMinistrioPblico_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico_43.addFeatures(features_TACMinistrioPblico_43);
var lyr_TACMinistrioPblico_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico_43, 
                style: style_TACMinistrioPblico_43,
                popuplayertitle: 'TAC Ministério Público',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico_43.png" /> TAC Ministério Público'
            });
var format_TCRACETESB_44 = new ol.format.GeoJSON();
var features_TCRACETESB_44 = format_TCRACETESB_44.readFeatures(json_TCRACETESB_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_44.addFeatures(features_TCRACETESB_44);
var lyr_TCRACETESB_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_44, 
                style: style_TCRACETESB_44,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_44.png" /> TCRA CETESB'
            });
var format_TCRACETESB_45 = new ol.format.GeoJSON();
var features_TCRACETESB_45 = format_TCRACETESB_45.readFeatures(json_TCRACETESB_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB_45.addFeatures(features_TCRACETESB_45);
var lyr_TCRACETESB_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB_45, 
                style: style_TCRACETESB_45,
                popuplayertitle: 'TCRA CETESB',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB_45.png" /> TCRA CETESB'
            });
var format_TCRAMunicipal_46 = new ol.format.GeoJSON();
var features_TCRAMunicipal_46 = format_TCRAMunicipal_46.readFeatures(json_TCRAMunicipal_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_46.addFeatures(features_TCRAMunicipal_46);
var lyr_TCRAMunicipal_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_46, 
                style: style_TCRAMunicipal_46,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_46.png" /> TCRA Municipal'
            });
var format_TCRAMunicipal_47 = new ol.format.GeoJSON();
var features_TCRAMunicipal_47 = format_TCRAMunicipal_47.readFeatures(json_TCRAMunicipal_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal_47.addFeatures(features_TCRAMunicipal_47);
var lyr_TCRAMunicipal_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal_47, 
                style: style_TCRAMunicipal_47,
                popuplayertitle: 'TCRA Municipal',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal_47.png" /> TCRA Municipal'
            });
var format_TRPRLCETESB_48 = new ol.format.GeoJSON();
var features_TRPRLCETESB_48 = format_TRPRLCETESB_48.readFeatures(json_TRPRLCETESB_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_48.addFeatures(features_TRPRLCETESB_48);
var lyr_TRPRLCETESB_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_48, 
                style: style_TRPRLCETESB_48,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_48.png" /> TRPRL CETESB'
            });
var format_TRPRLCETESB_49 = new ol.format.GeoJSON();
var features_TRPRLCETESB_49 = format_TRPRLCETESB_49.readFeatures(json_TRPRLCETESB_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB_49.addFeatures(features_TRPRLCETESB_49);
var lyr_TRPRLCETESB_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB_49, 
                style: style_TRPRLCETESB_49,
                popuplayertitle: 'TRPRL CETESB',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB_49.png" /> TRPRL CETESB'
            });
var format_ARORemanescentesFlorestais_50 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_50 = format_ARORemanescentesFlorestais_50.readFeatures(json_ARORemanescentesFlorestais_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_50.addFeatures(features_ARORemanescentesFlorestais_50);
var lyr_ARORemanescentesFlorestais_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_50, 
                style: style_ARORemanescentesFlorestais_50,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_50.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_51 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_51 = format_AROreadeAmortecimento_51.readFeatures(json_AROreadeAmortecimento_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_51.addFeatures(features_AROreadeAmortecimento_51);
var lyr_AROreadeAmortecimento_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_51, 
                style: style_AROreadeAmortecimento_51,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_51.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_52 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_52 = format_AROFaixadeCuestas_52.readFeatures(json_AROFaixadeCuestas_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_52.addFeatures(features_AROFaixadeCuestas_52);
var lyr_AROFaixadeCuestas_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_52, 
                style: style_AROFaixadeCuestas_52,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_52.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_53 = new ol.format.GeoJSON();
var features_AROAPP_53 = format_AROAPP_53.readFeatures(json_AROAPP_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_53.addFeatures(features_AROAPP_53);
var lyr_AROAPP_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_53, 
                style: style_AROAPP_53,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_53.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_54 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_54 = format_ARAIncongrunciasemAPP_54.readFeatures(json_ARAIncongrunciasemAPP_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_54.addFeatures(features_ARAIncongrunciasemAPP_54);
var lyr_ARAIncongrunciasemAPP_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_54, 
                style: style_ARAIncongrunciasemAPP_54,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_54.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_55 = new ol.format.GeoJSON();
var features_ARAETELagoas_55 = format_ARAETELagoas_55.readFeatures(json_ARAETELagoas_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_55.addFeatures(features_ARAETELagoas_55);
var lyr_ARAETELagoas_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_55, 
                style: style_ARAETELagoas_55,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_55.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_56 = new ol.format.GeoJSON();
var features_ARAAterros_56 = format_ARAAterros_56.readFeatures(json_ARAAterros_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_56.addFeatures(features_ARAAterros_56);
var lyr_ARAAterros_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_56, 
                style: style_ARAAterros_56,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_56.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_57 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_57 = format_AODreaUrbanaConsolidada_57.readFeatures(json_AODreaUrbanaConsolidada_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_57.addFeatures(features_AODreaUrbanaConsolidada_57);
var lyr_AODreaUrbanaConsolidada_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_57, 
                style: style_AODreaUrbanaConsolidada_57,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_57.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_58 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_58 = format_AODBaixaDensidadeNvel3_58.readFeatures(json_AODBaixaDensidadeNvel3_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_58.addFeatures(features_AODBaixaDensidadeNvel3_58);
var lyr_AODBaixaDensidadeNvel3_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_58, 
                style: style_AODBaixaDensidadeNvel3_58,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_58.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_59 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_59 = format_AODBaixaDensidadeNvel2_59.readFeatures(json_AODBaixaDensidadeNvel2_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_59.addFeatures(features_AODBaixaDensidadeNvel2_59);
var lyr_AODBaixaDensidadeNvel2_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_59, 
                style: style_AODBaixaDensidadeNvel2_59,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_59.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_60 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_60 = format_AODBaixaDensidadeNvel1_60.readFeatures(json_AODBaixaDensidadeNvel1_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_60.addFeatures(features_AODBaixaDensidadeNvel1_60);
var lyr_AODBaixaDensidadeNvel1_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_60, 
                style: style_AODBaixaDensidadeNvel1_60,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_60.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_61 = new ol.format.GeoJSON();
var features_AODAUSFase2_61 = format_AODAUSFase2_61.readFeatures(json_AODAUSFase2_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_61.addFeatures(features_AODAUSFase2_61);
var lyr_AODAUSFase2_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_61, 
                style: style_AODAUSFase2_61,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_61.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_62 = new ol.format.GeoJSON();
var features_AODAUSFase1_62 = format_AODAUSFase1_62.readFeatures(json_AODAUSFase1_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_62.addFeatures(features_AODAUSFase1_62);
var lyr_AODAUSFase1_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_62, 
                style: style_AODAUSFase1_62,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_62.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_63 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_63 = format_LimitedaBaciadoRioCanoasLeiC4322024_63.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_63.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_63);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_63, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_63,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_63.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_64 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_64 = format_LimitedaBaciadoRioCanoasLeiC1002006_64.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_64.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_64);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_64, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_64,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_64.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_65 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_65 = format_DelimitaodaBaciadoRibeirodaOna_65.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_65.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_65);
var lyr_DelimitaodaBaciadoRibeirodaOna_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_65, 
                style: style_DelimitaodaBaciadoRibeirodaOna_65,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_65.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP_66 = new ol.format.GeoJSON();
var features_APP_66 = format_APP_66.readFeatures(json_APP_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_66.addFeatures(features_APP_66);
var lyr_APP_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_66, 
                style: style_APP_66,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_66.png" /> APP'
            });
var format_RiosDuplos_67 = new ol.format.GeoJSON();
var features_RiosDuplos_67 = format_RiosDuplos_67.readFeatures(json_RiosDuplos_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos_67.addFeatures(features_RiosDuplos_67);
var lyr_RiosDuplos_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos_67, 
                style: style_RiosDuplos_67,
                popuplayertitle: 'Rios Duplos',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos_67.png" /> Rios Duplos'
            });
var format_MassasDgua_68 = new ol.format.GeoJSON();
var features_MassasDgua_68 = format_MassasDgua_68.readFeatures(json_MassasDgua_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua_68.addFeatures(features_MassasDgua_68);
var lyr_MassasDgua_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua_68, 
                style: style_MassasDgua_68,
                popuplayertitle: 'Massas D\'água',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua_68.png" /> Massas D\'água'
            });
var format_RiosSimples_69 = new ol.format.GeoJSON();
var features_RiosSimples_69 = format_RiosSimples_69.readFeatures(json_RiosSimples_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples_69.addFeatures(features_RiosSimples_69);
var lyr_RiosSimples_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples_69, 
                style: style_RiosSimples_69,
                popuplayertitle: 'Rios Simples',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples_69.png" /> Rios Simples'
            });
var format_Nascentes_70 = new ol.format.GeoJSON();
var features_Nascentes_70 = format_Nascentes_70.readFeatures(json_Nascentes_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_70.addFeatures(features_Nascentes_70);
var lyr_Nascentes_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes_70, 
                style: style_Nascentes_70,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_70.png" /> Nascentes'
            });
var format_JardimZoobotnico_71 = new ol.format.GeoJSON();
var features_JardimZoobotnico_71 = format_JardimZoobotnico_71.readFeatures(json_JardimZoobotnico_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnico_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnico_71.addFeatures(features_JardimZoobotnico_71);
var lyr_JardimZoobotnico_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnico_71, 
                style: style_JardimZoobotnico_71,
                popuplayertitle: 'Jardim Zoobotânico',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnico_71.png" /> Jardim Zoobotânico'
            });
var format_JardimZoobotnico_72 = new ol.format.GeoJSON();
var features_JardimZoobotnico_72 = format_JardimZoobotnico_72.readFeatures(json_JardimZoobotnico_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnico_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnico_72.addFeatures(features_JardimZoobotnico_72);
var lyr_JardimZoobotnico_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnico_72, 
                style: style_JardimZoobotnico_72,
                popuplayertitle: 'Jardim Zoobotânico',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnico_72.png" /> Jardim Zoobotânico'
            });
var format_ParquedosTrabalhadores_73 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_73 = format_ParquedosTrabalhadores_73.readFeatures(json_ParquedosTrabalhadores_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_73.addFeatures(features_ParquedosTrabalhadores_73);
var lyr_ParquedosTrabalhadores_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_73, 
                style: style_ParquedosTrabalhadores_73,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_73.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_74 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_74 = format_ParquedosTrabalhadores_74.readFeatures(json_ParquedosTrabalhadores_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_74.addFeatures(features_ParquedosTrabalhadores_74);
var lyr_ParquedosTrabalhadores_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_74, 
                style: style_ParquedosTrabalhadores_74,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_74.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_75 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_75 = format_ComplexoPoliesportivo_75.readFeatures(json_ComplexoPoliesportivo_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_75.addFeatures(features_ComplexoPoliesportivo_75);
var lyr_ComplexoPoliesportivo_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_75, 
                style: style_ComplexoPoliesportivo_75,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_75.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_76 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_76 = format_ComplexoPoliesportivo_76.readFeatures(json_ComplexoPoliesportivo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_76.addFeatures(features_ComplexoPoliesportivo_76);
var lyr_ComplexoPoliesportivo_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_76, 
                style: style_ComplexoPoliesportivo_76,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_76.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_77 = new ol.format.GeoJSON();
var features_ParqueCaxambu_77 = format_ParqueCaxambu_77.readFeatures(json_ParqueCaxambu_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_77.addFeatures(features_ParqueCaxambu_77);
var lyr_ParqueCaxambu_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_77, 
                style: style_ParqueCaxambu_77,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_77.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_78 = new ol.format.GeoJSON();
var features_ParqueCaxambu_78 = format_ParqueCaxambu_78.readFeatures(json_ParqueCaxambu_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_78.addFeatures(features_ParqueCaxambu_78);
var lyr_ParqueCaxambu_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_78, 
                style: style_ParqueCaxambu_78,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_78.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_79 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_79 = format_ParquedeExposiesFernandoCosta_79.readFeatures(json_ParquedeExposiesFernandoCosta_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_79.addFeatures(features_ParquedeExposiesFernandoCosta_79);
var lyr_ParquedeExposiesFernandoCosta_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_79, 
                style: style_ParquedeExposiesFernandoCosta_79,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_79.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_80 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_80 = format_ParquedeExposiesFernandoCosta_80.readFeatures(json_ParquedeExposiesFernandoCosta_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_80.addFeatures(features_ParquedeExposiesFernandoCosta_80);
var lyr_ParquedeExposiesFernandoCosta_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_80, 
                style: style_ParquedeExposiesFernandoCosta_80,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_80.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_81 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_81 = format_ParqueAmbientalLuprcioTaveira_81.readFeatures(json_ParqueAmbientalLuprcioTaveira_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_81.addFeatures(features_ParqueAmbientalLuprcioTaveira_81);
var lyr_ParqueAmbientalLuprcioTaveira_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_81, 
                style: style_ParqueAmbientalLuprcioTaveira_81,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_81.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_82 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_82 = format_ParqueAmbientalLuprcioTaveira_82.readFeatures(json_ParqueAmbientalLuprcioTaveira_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_82.addFeatures(features_ParqueAmbientalLuprcioTaveira_82);
var lyr_ParqueAmbientalLuprcioTaveira_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_82, 
                style: style_ParqueAmbientalLuprcioTaveira_82,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_82.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_R01S01_83 = new ol.format.GeoJSON();
var features_R01S01_83 = format_R01S01_83.readFeatures(json_R01S01_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_83.addFeatures(features_R01S01_83);
var lyr_R01S01_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_83, 
                style: style_R01S01_83,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_83.png" /> R01S01'
            });
var format_R01S02_84 = new ol.format.GeoJSON();
var features_R01S02_84 = format_R01S02_84.readFeatures(json_R01S02_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_84.addFeatures(features_R01S02_84);
var lyr_R01S02_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_84, 
                style: style_R01S02_84,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_84.png" /> R01S02'
            });
var format_R01S03_85 = new ol.format.GeoJSON();
var features_R01S03_85 = format_R01S03_85.readFeatures(json_R01S03_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_85.addFeatures(features_R01S03_85);
var lyr_R01S03_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_85, 
                style: style_R01S03_85,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_85.png" /> R01S03'
            });
var format_R01S04_86 = new ol.format.GeoJSON();
var features_R01S04_86 = format_R01S04_86.readFeatures(json_R01S04_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_86.addFeatures(features_R01S04_86);
var lyr_R01S04_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_86, 
                style: style_R01S04_86,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_86.png" /> R01S04'
            });
var format_R01S05_87 = new ol.format.GeoJSON();
var features_R01S05_87 = format_R01S05_87.readFeatures(json_R01S05_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_87.addFeatures(features_R01S05_87);
var lyr_R01S05_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_87, 
                style: style_R01S05_87,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_87.png" /> R01S05'
            });
var format_R01S06_88 = new ol.format.GeoJSON();
var features_R01S06_88 = format_R01S06_88.readFeatures(json_R01S06_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_88.addFeatures(features_R01S06_88);
var lyr_R01S06_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_88, 
                style: style_R01S06_88,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_88.png" /> R01S06'
            });
var format_R01S07_89 = new ol.format.GeoJSON();
var features_R01S07_89 = format_R01S07_89.readFeatures(json_R01S07_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_89.addFeatures(features_R01S07_89);
var lyr_R01S07_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_89, 
                style: style_R01S07_89,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_89.png" /> R01S07'
            });
var format_R01S08_90 = new ol.format.GeoJSON();
var features_R01S08_90 = format_R01S08_90.readFeatures(json_R01S08_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_90.addFeatures(features_R01S08_90);
var lyr_R01S08_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_90, 
                style: style_R01S08_90,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_90.png" /> R01S08'
            });
var format_R02S01_91 = new ol.format.GeoJSON();
var features_R02S01_91 = format_R02S01_91.readFeatures(json_R02S01_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_91.addFeatures(features_R02S01_91);
var lyr_R02S01_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_91, 
                style: style_R02S01_91,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_91.png" /> R02S01'
            });
var format_R02S02_92 = new ol.format.GeoJSON();
var features_R02S02_92 = format_R02S02_92.readFeatures(json_R02S02_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_92.addFeatures(features_R02S02_92);
var lyr_R02S02_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_92, 
                style: style_R02S02_92,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_92.png" /> R02S02'
            });
var format_R02S03_93 = new ol.format.GeoJSON();
var features_R02S03_93 = format_R02S03_93.readFeatures(json_R02S03_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_93.addFeatures(features_R02S03_93);
var lyr_R02S03_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_93, 
                style: style_R02S03_93,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_93.png" /> R02S03'
            });
var format_R02S04_94 = new ol.format.GeoJSON();
var features_R02S04_94 = format_R02S04_94.readFeatures(json_R02S04_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_94.addFeatures(features_R02S04_94);
var lyr_R02S04_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_94, 
                style: style_R02S04_94,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_94.png" /> R02S04'
            });
var format_R02S05_95 = new ol.format.GeoJSON();
var features_R02S05_95 = format_R02S05_95.readFeatures(json_R02S05_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_95.addFeatures(features_R02S05_95);
var lyr_R02S05_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_95, 
                style: style_R02S05_95,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_95.png" /> R02S05'
            });
var format_R02S06_96 = new ol.format.GeoJSON();
var features_R02S06_96 = format_R02S06_96.readFeatures(json_R02S06_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_96.addFeatures(features_R02S06_96);
var lyr_R02S06_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_96, 
                style: style_R02S06_96,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_96.png" /> R02S06'
            });
var format_R02S07_97 = new ol.format.GeoJSON();
var features_R02S07_97 = format_R02S07_97.readFeatures(json_R02S07_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_97.addFeatures(features_R02S07_97);
var lyr_R02S07_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_97, 
                style: style_R02S07_97,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_97.png" /> R02S07'
            });
var format_R02S08_98 = new ol.format.GeoJSON();
var features_R02S08_98 = format_R02S08_98.readFeatures(json_R02S08_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_98.addFeatures(features_R02S08_98);
var lyr_R02S08_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_98, 
                style: style_R02S08_98,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_98.png" /> R02S08'
            });
var format_R03S01_99 = new ol.format.GeoJSON();
var features_R03S01_99 = format_R03S01_99.readFeatures(json_R03S01_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_99.addFeatures(features_R03S01_99);
var lyr_R03S01_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_99, 
                style: style_R03S01_99,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_99.png" /> R03S01'
            });
var format_R03S02_100 = new ol.format.GeoJSON();
var features_R03S02_100 = format_R03S02_100.readFeatures(json_R03S02_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_100.addFeatures(features_R03S02_100);
var lyr_R03S02_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_100, 
                style: style_R03S02_100,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_100.png" /> R03S02'
            });
var format_R03S03_101 = new ol.format.GeoJSON();
var features_R03S03_101 = format_R03S03_101.readFeatures(json_R03S03_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_101.addFeatures(features_R03S03_101);
var lyr_R03S03_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_101, 
                style: style_R03S03_101,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_101.png" /> R03S03'
            });
var format_R03S04_102 = new ol.format.GeoJSON();
var features_R03S04_102 = format_R03S04_102.readFeatures(json_R03S04_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_102.addFeatures(features_R03S04_102);
var lyr_R03S04_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_102, 
                style: style_R03S04_102,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_102.png" /> R03S04'
            });
var format_R03S05_103 = new ol.format.GeoJSON();
var features_R03S05_103 = format_R03S05_103.readFeatures(json_R03S05_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_103.addFeatures(features_R03S05_103);
var lyr_R03S05_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_103, 
                style: style_R03S05_103,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_103.png" /> R03S05'
            });
var format_R03S06_104 = new ol.format.GeoJSON();
var features_R03S06_104 = format_R03S06_104.readFeatures(json_R03S06_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_104.addFeatures(features_R03S06_104);
var lyr_R03S06_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_104, 
                style: style_R03S06_104,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_104.png" /> R03S06'
            });
var format_R03S07_105 = new ol.format.GeoJSON();
var features_R03S07_105 = format_R03S07_105.readFeatures(json_R03S07_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_105.addFeatures(features_R03S07_105);
var lyr_R03S07_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_105, 
                style: style_R03S07_105,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_105.png" /> R03S07'
            });
var format_R03S08_106 = new ol.format.GeoJSON();
var features_R03S08_106 = format_R03S08_106.readFeatures(json_R03S08_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_106.addFeatures(features_R03S08_106);
var lyr_R03S08_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_106, 
                style: style_R03S08_106,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_106.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraaSemPlaca23_107 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraaSemPlaca23_107 = format_ProgramaAdoteUmaPraaSemPlaca23_107.readFeatures(json_ProgramaAdoteUmaPraaSemPlaca23_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraaSemPlaca23_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraaSemPlaca23_107.addFeatures(features_ProgramaAdoteUmaPraaSemPlaca23_107);
var lyr_ProgramaAdoteUmaPraaSemPlaca23_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraaSemPlaca23_107, 
                style: style_ProgramaAdoteUmaPraaSemPlaca23_107,
                popuplayertitle: 'Programa Adote Uma Praça - Sem Placa (23)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraaSemPlaca23_107.png" /> Programa Adote Uma Praça - Sem Placa (23)'
            });
var format_ProgramaAdoteUmaPraaComPlaca262_108 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraaComPlaca262_108 = format_ProgramaAdoteUmaPraaComPlaca262_108.readFeatures(json_ProgramaAdoteUmaPraaComPlaca262_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraaComPlaca262_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraaComPlaca262_108.addFeatures(features_ProgramaAdoteUmaPraaComPlaca262_108);
var lyr_ProgramaAdoteUmaPraaComPlaca262_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraaComPlaca262_108, 
                style: style_ProgramaAdoteUmaPraaComPlaca262_108,
                popuplayertitle: 'Programa Adote Uma Praça - Com Placa (262)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraaComPlaca262_108.png" /> Programa Adote Uma Praça - Com Placa (262)'
            });
var format_Contineres286_109 = new ol.format.GeoJSON();
var features_Contineres286_109 = format_Contineres286_109.readFeatures(json_Contineres286_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286_109.addFeatures(features_Contineres286_109);
var lyr_Contineres286_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286_109, 
                style: style_Contineres286_109,
                popuplayertitle: 'Contêineres (286)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286_109.png" /> Contêineres (286)'
            });
var format_PontosViciadosImvelPrivado32_110 = new ol.format.GeoJSON();
var features_PontosViciadosImvelPrivado32_110 = format_PontosViciadosImvelPrivado32_110.readFeatures(json_PontosViciadosImvelPrivado32_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosImvelPrivado32_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosImvelPrivado32_110.addFeatures(features_PontosViciadosImvelPrivado32_110);
var lyr_PontosViciadosImvelPrivado32_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosImvelPrivado32_110, 
                style: style_PontosViciadosImvelPrivado32_110,
                popuplayertitle: 'Pontos Viciados - Imóvel Privado (32)',
                interactive: true,
                title: '<img src="styles/legend/PontosViciadosImvelPrivado32_110.png" /> Pontos Viciados - Imóvel Privado (32)'
            });
var format_PontosViciadosImvelPblico107_111 = new ol.format.GeoJSON();
var features_PontosViciadosImvelPblico107_111 = format_PontosViciadosImvelPblico107_111.readFeatures(json_PontosViciadosImvelPblico107_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosViciadosImvelPblico107_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosViciadosImvelPblico107_111.addFeatures(features_PontosViciadosImvelPblico107_111);
var lyr_PontosViciadosImvelPblico107_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosViciadosImvelPblico107_111, 
                style: style_PontosViciadosImvelPblico107_111,
                popuplayertitle: 'Pontos Viciados - Imóvel Público (107)',
                interactive: true,
                title: '<img src="styles/legend/PontosViciadosImvelPblico107_111.png" /> Pontos Viciados - Imóvel Público (107)'
            });
var format_rvoreImuneaoCorte8_112 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8_112 = format_rvoreImuneaoCorte8_112.readFeatures(json_rvoreImuneaoCorte8_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8_112.addFeatures(features_rvoreImuneaoCorte8_112);
var lyr_rvoreImuneaoCorte8_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8_112, 
                style: style_rvoreImuneaoCorte8_112,
                popuplayertitle: 'Árvore Imune ao Corte (8)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8_112.png" /> Árvore Imune ao Corte (8)'
            });
var format_LocaisdeDifcilAcessoereasRurais20_113 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20_113 = format_LocaisdeDifcilAcessoereasRurais20_113.readFeatures(json_LocaisdeDifcilAcessoereasRurais20_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20_113.addFeatures(features_LocaisdeDifcilAcessoereasRurais20_113);
var lyr_LocaisdeDifcilAcessoereasRurais20_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20_113, 
                style: style_LocaisdeDifcilAcessoereasRurais20_113,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20_113.png" /> Locais de Difícil Acesso e Áreas Rurais (20)'
            });
var format_ResduosdeConstruoCivil7_114 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7_114 = format_ResduosdeConstruoCivil7_114.readFeatures(json_ResduosdeConstruoCivil7_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeConstruoCivil7_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7_114.addFeatures(features_ResduosdeConstruoCivil7_114);
var lyr_ResduosdeConstruoCivil7_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7_114, 
                style: style_ResduosdeConstruoCivil7_114,
                popuplayertitle: 'Resíduos de Construção Civil (7)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7_114.png" /> Resíduos de Construção Civil (7)'
            });
var format_ResduosVerdes1_115 = new ol.format.GeoJSON();
var features_ResduosVerdes1_115 = format_ResduosVerdes1_115.readFeatures(json_ResduosVerdes1_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosVerdes1_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1_115.addFeatures(features_ResduosVerdes1_115);
var lyr_ResduosVerdes1_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1_115, 
                style: style_ResduosVerdes1_115,
                popuplayertitle: 'Resíduos "Verdes" (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1_115.png" /> Resíduos "Verdes" (1)'
            });
var format_ChapasdeRaioX1_116 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1_116 = format_ChapasdeRaioX1_116.readFeatures(json_ChapasdeRaioX1_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapasdeRaioX1_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1_116.addFeatures(features_ChapasdeRaioX1_116);
var lyr_ChapasdeRaioX1_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1_116, 
                style: style_ChapasdeRaioX1_116,
                popuplayertitle: 'Chapas de Raio-X (1)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1_116.png" /> Chapas de Raio-X (1)'
            });
var format_Embalagensvaziasdeagrotxicos1_117 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1_117 = format_Embalagensvaziasdeagrotxicos1_117.readFeatures(json_Embalagensvaziasdeagrotxicos1_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalagensvaziasdeagrotxicos1_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1_117.addFeatures(features_Embalagensvaziasdeagrotxicos1_117);
var lyr_Embalagensvaziasdeagrotxicos1_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1_117, 
                style: style_Embalagensvaziasdeagrotxicos1_117,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1_117.png" /> Embalagens vazias de agrotóxicos (1)'
            });
var format_leodecozinhausado2_118 = new ol.format.GeoJSON();
var features_leodecozinhausado2_118 = format_leodecozinhausado2_118.readFeatures(json_leodecozinhausado2_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leodecozinhausado2_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2_118.addFeatures(features_leodecozinhausado2_118);
var lyr_leodecozinhausado2_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2_118, 
                style: style_leodecozinhausado2_118,
                popuplayertitle: 'Óleo de cozinha usado (2)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2_118.png" /> Óleo de cozinha usado (2)'
            });
var format_leolubrificanteusado1_119 = new ol.format.GeoJSON();
var features_leolubrificanteusado1_119 = format_leolubrificanteusado1_119.readFeatures(json_leolubrificanteusado1_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leolubrificanteusado1_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1_119.addFeatures(features_leolubrificanteusado1_119);
var lyr_leolubrificanteusado1_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1_119, 
                style: style_leolubrificanteusado1_119,
                popuplayertitle: 'Óleo lubrificante usado (1)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1_119.png" /> Óleo lubrificante usado (1)'
            });
var format_Latasdetintametlicasvazias2_120 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2_120 = format_Latasdetintametlicasvazias2_120.readFeatures(json_Latasdetintametlicasvazias2_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latasdetintametlicasvazias2_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2_120.addFeatures(features_Latasdetintametlicasvazias2_120);
var lyr_Latasdetintametlicasvazias2_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2_120, 
                style: style_Latasdetintametlicasvazias2_120,
                popuplayertitle: 'Latas de tinta metálicas vazias (2)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2_120.png" /> Latas de tinta metálicas vazias (2)'
            });
var format_ResduosPerigosos1_121 = new ol.format.GeoJSON();
var features_ResduosPerigosos1_121 = format_ResduosPerigosos1_121.readFeatures(json_ResduosPerigosos1_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosPerigosos1_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1_121.addFeatures(features_ResduosPerigosos1_121);
var lyr_ResduosPerigosos1_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1_121, 
                style: style_ResduosPerigosos1_121,
                popuplayertitle: 'Resíduos Perigosos (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1_121.png" /> Resíduos Perigosos (1)'
            });
var format_Madeiras1_122 = new ol.format.GeoJSON();
var features_Madeiras1_122 = format_Madeiras1_122.readFeatures(json_Madeiras1_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madeiras1_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1_122.addFeatures(features_Madeiras1_122);
var lyr_Madeiras1_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1_122, 
                style: style_Madeiras1_122,
                popuplayertitle: 'Madeiras (1)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1_122.png" /> Madeiras (1)'
            });
var format_ResduosdeServiosdeSade21_123 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21_123 = format_ResduosdeServiosdeSade21_123.readFeatures(json_ResduosdeServiosdeSade21_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeServiosdeSade21_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21_123.addFeatures(features_ResduosdeServiosdeSade21_123);
var lyr_ResduosdeServiosdeSade21_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21_123, 
                style: style_ResduosdeServiosdeSade21_123,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21_123.png" /> Resíduos de Serviços de Saúde (21)'
            });
var format_PilhaseBaterias16_124 = new ol.format.GeoJSON();
var features_PilhaseBaterias16_124 = format_PilhaseBaterias16_124.readFeatures(json_PilhaseBaterias16_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilhaseBaterias16_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16_124.addFeatures(features_PilhaseBaterias16_124);
var lyr_PilhaseBaterias16_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16_124, 
                style: style_PilhaseBaterias16_124,
                popuplayertitle: 'Pilhas e Baterias (16)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16_124.png" /> Pilhas e Baterias (16)'
            });
var format_Pneus1_125 = new ol.format.GeoJSON();
var features_Pneus1_125 = format_Pneus1_125.readFeatures(json_Pneus1_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pneus1_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1_125.addFeatures(features_Pneus1_125);
var lyr_Pneus1_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1_125, 
                style: style_Pneus1_125,
                popuplayertitle: 'Pneus (1)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1_125.png" /> Pneus (1)'
            });
var format_Lmpadas4_126 = new ol.format.GeoJSON();
var features_Lmpadas4_126 = format_Lmpadas4_126.readFeatures(json_Lmpadas4_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmpadas4_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4_126.addFeatures(features_Lmpadas4_126);
var lyr_Lmpadas4_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4_126, 
                style: style_Lmpadas4_126,
                popuplayertitle: 'Lâmpadas (4)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4_126.png" /> Lâmpadas (4)'
            });
var format_ResduosdeCouro1_127 = new ol.format.GeoJSON();
var features_ResduosdeCouro1_127 = format_ResduosdeCouro1_127.readFeatures(json_ResduosdeCouro1_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeCouro1_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1_127.addFeatures(features_ResduosdeCouro1_127);
var lyr_ResduosdeCouro1_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1_127, 
                style: style_ResduosdeCouro1_127,
                popuplayertitle: 'Resíduos de Couro (1)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1_127.png" /> Resíduos de Couro (1)'
            });
var format_ResduosEletrnicos2_128 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2_128 = format_ResduosEletrnicos2_128.readFeatures(json_ResduosEletrnicos2_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosEletrnicos2_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2_128.addFeatures(features_ResduosEletrnicos2_128);
var lyr_ResduosEletrnicos2_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2_128, 
                style: style_ResduosEletrnicos2_128,
                popuplayertitle: 'Resíduos Eletrônicos (2)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2_128.png" /> Resíduos Eletrônicos (2)'
            });
var format_ResduosReciclveis15_129 = new ol.format.GeoJSON();
var features_ResduosReciclveis15_129 = format_ResduosReciclveis15_129.readFeatures(json_ResduosReciclveis15_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosReciclveis15_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15_129.addFeatures(features_ResduosReciclveis15_129);
var lyr_ResduosReciclveis15_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15_129, 
                style: style_ResduosReciclveis15_129,
                popuplayertitle: 'Resíduos Recicláveis (15)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15_129.png" /> Resíduos Recicláveis (15)'
            });
var format_ResduosInservveis4_130 = new ol.format.GeoJSON();
var features_ResduosInservveis4_130 = format_ResduosInservveis4_130.readFeatures(json_ResduosInservveis4_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosInservveis4_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4_130.addFeatures(features_ResduosInservveis4_130);
var lyr_ResduosInservveis4_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4_130, 
                style: style_ResduosInservveis4_130,
                popuplayertitle: 'Resíduos Inservíveis (4)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4_130.png" /> Resíduos Inservíveis (4)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosdeConstruoCivil7_114,lyr_ResduosVerdes1_115,lyr_ChapasdeRaioX1_116,lyr_Embalagensvaziasdeagrotxicos1_117,lyr_leodecozinhausado2_118,lyr_leolubrificanteusado1_119,lyr_Latasdetintametlicasvazias2_120,lyr_ResduosPerigosos1_121,lyr_Madeiras1_122,lyr_ResduosdeServiosdeSade21_123,lyr_PilhaseBaterias16_124,lyr_Pneus1_125,lyr_Lmpadas4_126,lyr_ResduosdeCouro1_127,lyr_ResduosEletrnicos2_128,lyr_ResduosReciclveis15_129,lyr_ResduosInservveis4_130,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_83,lyr_R01S02_84,lyr_R01S03_85,lyr_R01S04_86,lyr_R01S05_87,lyr_R01S06_88,lyr_R01S07_89,lyr_R01S08_90,lyr_R02S01_91,lyr_R02S02_92,lyr_R02S03_93,lyr_R02S04_94,lyr_R02S05_95,lyr_R02S06_96,lyr_R02S07_97,lyr_R02S08_98,lyr_R03S01_99,lyr_R03S02_100,lyr_R03S03_101,lyr_R03S04_102,lyr_R03S05_103,lyr_R03S06_104,lyr_R03S07_105,lyr_R03S08_106,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_ParquesdeFranca6 = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnico_71,lyr_JardimZoobotnico_72,lyr_ParquedosTrabalhadores_73,lyr_ParquedosTrabalhadores_74,lyr_ComplexoPoliesportivo_75,lyr_ComplexoPoliesportivo_76,lyr_ParqueCaxambu_77,lyr_ParqueCaxambu_78,lyr_ParquedeExposiesFernandoCosta_79,lyr_ParquedeExposiesFernandoCosta_80,lyr_ParqueAmbientalLuprcioTaveira_81,lyr_ParqueAmbientalLuprcioTaveira_82,],
                                fold: 'close',
                                title: 'Parques de Franca (6)'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP_66,lyr_RiosDuplos_67,lyr_MassasDgua_68,lyr_RiosSimples_69,lyr_Nascentes_70,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_50,lyr_AROreadeAmortecimento_51,lyr_AROFaixadeCuestas_52,lyr_AROAPP_53,lyr_ARAIncongrunciasemAPP_54,lyr_ARAETELagoas_55,lyr_ARAAterros_56,lyr_AODreaUrbanaConsolidada_57,lyr_AODBaixaDensidadeNvel3_58,lyr_AODBaixaDensidadeNvel2_59,lyr_AODBaixaDensidadeNvel1_60,lyr_AODAUSFase2_61,lyr_AODAUSFase1_62,lyr_LimitedaBaciadoRioCanoasLeiC4322024_63,lyr_LimitedaBaciadoRioCanoasLeiC1002006_64,lyr_DelimitaodaBaciadoRibeirodaOna_65,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica_36,lyr_AoCivilPblica_37,lyr_CartaAnuncia_38,lyr_CartaAnuncia_39,lyr_PlantioVoluntrio_40,lyr_PlantioVoluntrio_41,lyr_TACMinistrioPblico_42,lyr_TACMinistrioPblico_43,lyr_TCRACETESB_44,lyr_TCRACETESB_45,lyr_TCRAMunicipal_46,lyr_TCRAMunicipal_47,lyr_TRPRLCETESB_48,lyr_TRPRLCETESB_49,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_GerenciamentodereasContaminadas4 = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_32,lyr_AntigoAterrodasMaritacas_33,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34,lyr_AntigoAterrodaFazendaMunicipal_35,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas (4)'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF_21,lyr_LoteEMDEF_22,lyr_ProgramaAdoteUmaPraa_23,lyr_Lote_24,lyr_Lote_25,lyr_reaVerde_26,lyr_reaPatrimonial_27,lyr_reaInstitucional_28,lyr_readeUsoEspecial_29,lyr_APP_30,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_RemanescentedaMatrcula11419_5,lyr_ConjuntoHabitacional_6,lyr_AvdeacessoaoHortoeColgioAgrcola_7,lyr_reaK_8,lyr_reaJ_9,lyr_reaI_10,lyr_reaH_11,lyr_reaG_12,lyr_reaF_13,lyr_reaE_14,lyr_reaD_15,lyr_reaC_16,lyr_reaB_17,lyr_reaA_18,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19,lyr_reaaseraverbadaPartedareaG_20,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_RemanescentedaMatrcula11419_5.setVisible(false);lyr_ConjuntoHabitacional_6.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_7.setVisible(false);lyr_reaK_8.setVisible(false);lyr_reaJ_9.setVisible(false);lyr_reaI_10.setVisible(false);lyr_reaH_11.setVisible(false);lyr_reaG_12.setVisible(false);lyr_reaF_13.setVisible(false);lyr_reaE_14.setVisible(false);lyr_reaD_15.setVisible(false);lyr_reaC_16.setVisible(false);lyr_reaB_17.setVisible(false);lyr_reaA_18.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.setVisible(false);lyr_reaaseraverbadaPartedareaG_20.setVisible(false);lyr_LoteEMDEF_21.setVisible(false);lyr_LoteEMDEF_22.setVisible(false);lyr_ProgramaAdoteUmaPraa_23.setVisible(false);lyr_Lote_24.setVisible(false);lyr_Lote_25.setVisible(false);lyr_reaVerde_26.setVisible(false);lyr_reaPatrimonial_27.setVisible(false);lyr_reaInstitucional_28.setVisible(false);lyr_readeUsoEspecial_29.setVisible(false);lyr_APP_30.setVisible(false);lyr_LotesParticulares_31.setVisible(false);lyr_ParqueZumbidosPalmares_32.setVisible(false);lyr_AntigoAterrodasMaritacas_33.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_35.setVisible(false);lyr_AoCivilPblica_36.setVisible(false);lyr_AoCivilPblica_37.setVisible(false);lyr_CartaAnuncia_38.setVisible(false);lyr_CartaAnuncia_39.setVisible(false);lyr_PlantioVoluntrio_40.setVisible(false);lyr_PlantioVoluntrio_41.setVisible(false);lyr_TACMinistrioPblico_42.setVisible(false);lyr_TACMinistrioPblico_43.setVisible(false);lyr_TCRACETESB_44.setVisible(false);lyr_TCRACETESB_45.setVisible(false);lyr_TCRAMunicipal_46.setVisible(false);lyr_TCRAMunicipal_47.setVisible(false);lyr_TRPRLCETESB_48.setVisible(false);lyr_TRPRLCETESB_49.setVisible(false);lyr_ARORemanescentesFlorestais_50.setVisible(false);lyr_AROreadeAmortecimento_51.setVisible(false);lyr_AROFaixadeCuestas_52.setVisible(false);lyr_AROAPP_53.setVisible(false);lyr_ARAIncongrunciasemAPP_54.setVisible(false);lyr_ARAETELagoas_55.setVisible(false);lyr_ARAAterros_56.setVisible(false);lyr_AODreaUrbanaConsolidada_57.setVisible(false);lyr_AODBaixaDensidadeNvel3_58.setVisible(false);lyr_AODBaixaDensidadeNvel2_59.setVisible(false);lyr_AODBaixaDensidadeNvel1_60.setVisible(false);lyr_AODAUSFase2_61.setVisible(false);lyr_AODAUSFase1_62.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_63.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_64.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_65.setVisible(false);lyr_APP_66.setVisible(false);lyr_RiosDuplos_67.setVisible(false);lyr_MassasDgua_68.setVisible(false);lyr_RiosSimples_69.setVisible(false);lyr_Nascentes_70.setVisible(false);lyr_JardimZoobotnico_71.setVisible(false);lyr_JardimZoobotnico_72.setVisible(false);lyr_ParquedosTrabalhadores_73.setVisible(false);lyr_ParquedosTrabalhadores_74.setVisible(false);lyr_ComplexoPoliesportivo_75.setVisible(false);lyr_ComplexoPoliesportivo_76.setVisible(false);lyr_ParqueCaxambu_77.setVisible(false);lyr_ParqueCaxambu_78.setVisible(false);lyr_ParquedeExposiesFernandoCosta_79.setVisible(false);lyr_ParquedeExposiesFernandoCosta_80.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_81.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_82.setVisible(false);lyr_R01S01_83.setVisible(false);lyr_R01S02_84.setVisible(false);lyr_R01S03_85.setVisible(false);lyr_R01S04_86.setVisible(false);lyr_R01S05_87.setVisible(false);lyr_R01S06_88.setVisible(false);lyr_R01S07_89.setVisible(false);lyr_R01S08_90.setVisible(false);lyr_R02S01_91.setVisible(false);lyr_R02S02_92.setVisible(false);lyr_R02S03_93.setVisible(false);lyr_R02S04_94.setVisible(false);lyr_R02S05_95.setVisible(false);lyr_R02S06_96.setVisible(false);lyr_R02S07_97.setVisible(false);lyr_R02S08_98.setVisible(false);lyr_R03S01_99.setVisible(false);lyr_R03S02_100.setVisible(false);lyr_R03S03_101.setVisible(false);lyr_R03S04_102.setVisible(false);lyr_R03S05_103.setVisible(false);lyr_R03S06_104.setVisible(false);lyr_R03S07_105.setVisible(false);lyr_R03S08_106.setVisible(false);lyr_ProgramaAdoteUmaPraaSemPlaca23_107.setVisible(false);lyr_ProgramaAdoteUmaPraaComPlaca262_108.setVisible(false);lyr_Contineres286_109.setVisible(false);lyr_PontosViciadosImvelPrivado32_110.setVisible(false);lyr_PontosViciadosImvelPblico107_111.setVisible(false);lyr_rvoreImuneaoCorte8_112.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20_113.setVisible(false);lyr_ResduosdeConstruoCivil7_114.setVisible(false);lyr_ResduosVerdes1_115.setVisible(false);lyr_ChapasdeRaioX1_116.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1_117.setVisible(false);lyr_leodecozinhausado2_118.setVisible(false);lyr_leolubrificanteusado1_119.setVisible(false);lyr_Latasdetintametlicasvazias2_120.setVisible(false);lyr_ResduosPerigosos1_121.setVisible(false);lyr_Madeiras1_122.setVisible(false);lyr_ResduosdeServiosdeSade21_123.setVisible(false);lyr_PilhaseBaterias16_124.setVisible(false);lyr_Pneus1_125.setVisible(false);lyr_Lmpadas4_126.setVisible(false);lyr_ResduosdeCouro1_127.setVisible(false);lyr_ResduosEletrnicos2_128.setVisible(false);lyr_ResduosReciclveis15_129.setVisible(false);lyr_ResduosInservveis4_130.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_FazendaMunicipalPousoAlto,group_reasPblicas,lyr_LotesParticulares_31,group_GerenciamentodereasContaminadas4,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_ParquesdeFranca6,group_SubregiesContratoESSE,lyr_ProgramaAdoteUmaPraaSemPlaca23_107,lyr_ProgramaAdoteUmaPraaComPlaca262_108,lyr_Contineres286_109,lyr_PontosViciadosImvelPrivado32_110,lyr_PontosViciadosImvelPblico107_111,lyr_rvoreImuneaoCorte8_112,lyr_LocaisdeDifcilAcessoereasRurais20_113,group_DescarteCorretodeResduos];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_RemanescentedaMatrcula11419_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF_21.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_LoteEMDEF_22.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_ProgramaAdoteUmaPraa_23.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_Lote_24.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_Lote_25.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaVerde_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaPatrimonial_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaInstitucional_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_readeUsoEspecial_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP_30.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_LotesParticulares_31.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_ParqueZumbidosPalmares_32.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacas_33.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipal_35.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AoCivilPblica_36.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica_37.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia_38.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia_39.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio_40.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio_41.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico_42.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico_43.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB_44.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB_45.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal_46.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal_47.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB_48.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB_49.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_50.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_51.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_52.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_53.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_54.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_55.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_56.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_57.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_58.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_59.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_60.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_61.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_62.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_63.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_64.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_65.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP_66.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos_67.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua_68.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples_69.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes_70.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_JardimZoobotnico_71.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnico_72.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_73.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_74.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_75.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_76.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_77.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_78.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_79.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_80.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_81.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_82.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_R01S01_83.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_84.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_85.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_86.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_87.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_88.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_89.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_90.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_91.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_92.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_93.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_94.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_95.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_96.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_97.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_98.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_99.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_100.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_101.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_102.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_103.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_104.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_105.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_106.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraaSemPlaca23_107.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'm2', });
lyr_ProgramaAdoteUmaPraaComPlaca262_108.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'm2', });
lyr_Contineres286_109.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_PontosViciadosImvelPrivado32_110.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO': 'PROCESSO', });
lyr_PontosViciadosImvelPblico107_111.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO': 'PROCESSO', });
lyr_rvoreImuneaoCorte8_112.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20_113.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_ResduosdeConstruoCivil7_114.set('fieldAliases', {'fid': 'fid', 'categoria': 'categoria', 'local': 'local', 'descricao': 'Descrição', 'endereco': 'Endereço', 'contato': 'contato', });
lyr_ResduosVerdes1_115.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1_116.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1_117.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2_118.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1_119.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2_120.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1_121.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1_122.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21_123.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16_124.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1_125.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4_126.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1_127.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2_128.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15_129.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4_130.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_RemanescentedaMatrcula11419_5.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_6.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_7.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_8.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_9.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_10.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_11.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_12.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_13.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_14.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_15.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_16.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_17.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_18.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_20.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF_21.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', });
lyr_LoteEMDEF_22.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', });
lyr_ProgramaAdoteUmaPraa_23.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_Lote_24.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_Lote_25.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaVerde_26.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaPatrimonial_27.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaInstitucional_28.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_readeUsoEspecial_29.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_APP_30.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_LotesParticulares_31.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_ParqueZumbidosPalmares_32.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacas_33.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipal_35.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AoCivilPblica_36.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica_37.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'proc_municipal': '', });
lyr_CartaAnuncia_38.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia_39.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'doc_origem': '', });
lyr_PlantioVoluntrio_40.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio_41.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', });
lyr_TACMinistrioPblico_42.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico_43.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'ic': '', 'proc_municipal': '', });
lyr_TCRACETESB_44.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB_45.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRAMunicipal_46.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal_47.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'autorizacao': '', });
lyr_TRPRLCETESB_48.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB_49.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_ARORemanescentesFlorestais_50.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_51.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_52.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_53.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_54.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_55.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_56.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_57.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_58.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_59.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_60.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_61.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_62.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_63.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_64.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_65.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP_66.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos_67.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua_68.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples_69.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes_70.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_JardimZoobotnico_71.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnico_72.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_73.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_74.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_75.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_76.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_77.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_78.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_79.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_80.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_81.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_82.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_R01S01_83.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_84.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_85.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_86.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_87.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_88.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_89.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_90.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_91.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_92.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_93.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_94.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_95.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_96.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_97.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_98.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_99.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_100.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_101.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_102.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_103.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_104.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_105.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_106.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraaSemPlaca23_107.set('fieldImages', {'fid': '', 'Adotante': '', 'Local': '', 'Programa': '', 'Possui placa?': '', 'm2': '', });
lyr_ProgramaAdoteUmaPraaComPlaca262_108.set('fieldImages', {'fid': '', 'Adotante': '', 'Local': '', 'Programa': '', 'Possui placa?': '', 'm2': '', });
lyr_Contineres286_109.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_PontosViciadosImvelPrivado32_110.set('fieldImages', {'fid': '', 'BAIRRO': '', 'RUA': '', 'LONGITUDE': '', 'LATITUDE': '', 'CADASTRO IMOBILIÁRIO': '', 'CLASSIFICAÇÃO DO IMÓVEL': '', 'FREQUÊNCIA DE LIMPEZA': '', 'QUADRA': '', 'LOTE': '', 'PROCESSO': '', });
lyr_PontosViciadosImvelPblico107_111.set('fieldImages', {'fid': '', 'BAIRRO': '', 'RUA': '', 'LONGITUDE': '', 'LATITUDE': '', 'CADASTRO IMOBILIÁRIO': '', 'CLASSIFICAÇÃO DO IMÓVEL': '', 'FREQUÊNCIA DE LIMPEZA': '', 'QUADRA': '', 'LOTE': '', 'PROCESSO': '', });
lyr_rvoreImuneaoCorte8_112.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LocaisdeDifcilAcessoereasRurais20_113.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_ResduosdeConstruoCivil7_114.set('fieldImages', {'fid': '', 'categoria': '', 'local': '', 'descricao': '', 'endereco': '', 'contato': '', });
lyr_ResduosVerdes1_115.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ChapasdeRaioX1_116.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Embalagensvaziasdeagrotxicos1_117.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leodecozinhausado2_118.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leolubrificanteusado1_119.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Latasdetintametlicasvazias2_120.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosPerigosos1_121.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Madeiras1_122.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeServiosdeSade21_123.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_PilhaseBaterias16_124.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Pneus1_125.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Lmpadas4_126.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1_127.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosEletrnicos2_128.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15_129.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosInservveis4_130.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_RemanescentedaMatrcula11419_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_17.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_18.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF_21.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_LoteEMDEF_22.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa_23.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_Lote_24.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_Lote_25.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaVerde_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaPatrimonial_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaInstitucional_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_readeUsoEspecial_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', });
lyr_APP_30.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_LotesParticulares_31.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_32.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_33.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipal_35.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AoCivilPblica_36.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica_37.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia_38.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia_39.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio_40.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio_41.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico_42.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico_43.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB_44.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB_45.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal_46.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal_47.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB_48.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB_49.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_50.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_51.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_52.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_53.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_54.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_55.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_56.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_57.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_58.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_59.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_60.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_61.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_62.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_63.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_64.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_65.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP_66.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos_67.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua_68.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples_69.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes_70.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_JardimZoobotnico_71.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnico_72.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_73.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_74.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_75.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_76.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_77.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_78.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_79.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_80.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_81.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_82.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_R01S01_83.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_84.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_85.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_86.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_87.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_88.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_89.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_90.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_91.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_92.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_93.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_94.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_95.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_96.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_97.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_98.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_99.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_100.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_101.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_102.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_103.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_104.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_105.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_106.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraaSemPlaca23_107.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraaComPlaca262_108.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_Contineres286_109.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PontosViciadosImvelPrivado32_110.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO': 'inline label - always visible', });
lyr_PontosViciadosImvelPblico107_111.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO': 'hidden field', });
lyr_rvoreImuneaoCorte8_112.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20_113.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7_114.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - visible with data', 'local': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'contato': 'inline label - visible with data', });
lyr_ResduosVerdes1_115.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1_116.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1_117.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2_118.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1_119.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2_120.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1_121.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1_122.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21_123.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16_124.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1_125.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4_126.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1_127.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2_128.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15_129.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4_130.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4_130.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});