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
var format_LoteEMDEF10unid218783m_21 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_21 = format_LoteEMDEF10unid218783m_21.readFeatures(json_LoteEMDEF10unid218783m_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid218783m_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_21.addFeatures(features_LoteEMDEF10unid218783m_21);
var lyr_LoteEMDEF10unid218783m_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_21, 
                style: style_LoteEMDEF10unid218783m_21,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2187.83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_21.png" /> Lote EMDEF (10 unid. / 2187.83 m²)'
            });
var format_LoteEMDEF10unid_22 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_22 = format_LoteEMDEF10unid_22.readFeatures(json_LoteEMDEF10unid_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoteEMDEF10unid_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_22.addFeatures(features_LoteEMDEF10unid_22);
var lyr_LoteEMDEF10unid_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_22, 
                style: style_LoteEMDEF10unid_22,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_22.png" /> Lote EMDEF (10 unid.)'
            });
var format_Lote501unid13733803m_23 = new ol.format.GeoJSON();
var features_Lote501unid13733803m_23 = format_Lote501unid13733803m_23.readFeatures(json_Lote501unid13733803m_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote501unid13733803m_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote501unid13733803m_23.addFeatures(features_Lote501unid13733803m_23);
var lyr_Lote501unid13733803m_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote501unid13733803m_23, 
                style: style_Lote501unid13733803m_23,
                popuplayertitle: 'Lote (501 unid. / 137338.03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote501unid13733803m_23.png" /> Lote (501 unid. / 137338.03 m²)'
            });
var format_Lote501unid_24 = new ol.format.GeoJSON();
var features_Lote501unid_24 = format_Lote501unid_24.readFeatures(json_Lote501unid_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote501unid_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote501unid_24.addFeatures(features_Lote501unid_24);
var lyr_Lote501unid_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote501unid_24, 
                style: style_Lote501unid_24,
                popuplayertitle: 'Lote (501 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote501unid_24.png" /> Lote (501 unid.)'
            });
var format_APP168unid234615094m_25 = new ol.format.GeoJSON();
var features_APP168unid234615094m_25 = format_APP168unid234615094m_25.readFeatures(json_APP168unid234615094m_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP168unid234615094m_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP168unid234615094m_25.addFeatures(features_APP168unid234615094m_25);
var lyr_APP168unid234615094m_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP168unid234615094m_25, 
                style: style_APP168unid234615094m_25,
                popuplayertitle: 'APP (168 unid. / 2346150.94 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP168unid234615094m_25.png" /> APP (168 unid. / 2346150.94 m²)'
            });
var format_readeUsoEspecial260unid274522821m_26 = new ol.format.GeoJSON();
var features_readeUsoEspecial260unid274522821m_26 = format_readeUsoEspecial260unid274522821m_26.readFeatures(json_readeUsoEspecial260unid274522821m_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial260unid274522821m_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial260unid274522821m_26.addFeatures(features_readeUsoEspecial260unid274522821m_26);
var lyr_readeUsoEspecial260unid274522821m_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial260unid274522821m_26, 
                style: style_readeUsoEspecial260unid274522821m_26,
                popuplayertitle: 'Área de Uso Especial (260 unid. / 2745228.21 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial260unid274522821m_26.png" /> Área de Uso Especial (260 unid. / 2745228.21 m²)'
            });
var format_reaInstitucional238unid135805372m_27 = new ol.format.GeoJSON();
var features_reaInstitucional238unid135805372m_27 = format_reaInstitucional238unid135805372m_27.readFeatures(json_reaInstitucional238unid135805372m_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional238unid135805372m_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional238unid135805372m_27.addFeatures(features_reaInstitucional238unid135805372m_27);
var lyr_reaInstitucional238unid135805372m_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional238unid135805372m_27, 
                style: style_reaInstitucional238unid135805372m_27,
                popuplayertitle: 'Área Institucional (238 unid. / 1358053.72 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional238unid135805372m_27.png" /> Área Institucional (238 unid. / 1358053.72 m²)'
            });
var format_reaPatrimonial33unid15807656m_28 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_28 = format_reaPatrimonial33unid15807656m_28.readFeatures(json_reaPatrimonial33unid15807656m_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial33unid15807656m_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_28.addFeatures(features_reaPatrimonial33unid15807656m_28);
var lyr_reaPatrimonial33unid15807656m_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_28, 
                style: style_reaPatrimonial33unid15807656m_28,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158076.56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_28.png" /> Área Patrimonial (33 unid. / 158076.56 m²)'
            });
var format_reaVerde1989unid835038904m_29 = new ol.format.GeoJSON();
var features_reaVerde1989unid835038904m_29 = format_reaVerde1989unid835038904m_29.readFeatures(json_reaVerde1989unid835038904m_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde1989unid835038904m_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1989unid835038904m_29.addFeatures(features_reaVerde1989unid835038904m_29);
var lyr_reaVerde1989unid835038904m_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1989unid835038904m_29, 
                style: style_reaVerde1989unid835038904m_29,
                popuplayertitle: 'Área Verde (1989 unid. / 8350389.04 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1989unid835038904m_29.png" /> Área Verde (1989 unid. / 8350389.04 m²)'
            });
var format_EmpreendimentoResidencialPousoAlegre_30 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_30 = format_EmpreendimentoResidencialPousoAlegre_30.readFeatures(json_EmpreendimentoResidencialPousoAlegre_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_30.addFeatures(features_EmpreendimentoResidencialPousoAlegre_30);
var lyr_EmpreendimentoResidencialPousoAlegre_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_30, 
                style: style_EmpreendimentoResidencialPousoAlegre_30,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_30_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_31 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_31 = format_EmpreendimentoResidencialPousoAlegre_31.readFeatures(json_EmpreendimentoResidencialPousoAlegre_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_31.addFeatures(features_EmpreendimentoResidencialPousoAlegre_31);
var lyr_EmpreendimentoResidencialPousoAlegre_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_31, 
                style: style_EmpreendimentoResidencialPousoAlegre_31,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_31.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_32 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_32 = format_EmpreendimentoResidencialAltodaFazenda_32.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_32.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_32);
var lyr_EmpreendimentoResidencialAltodaFazenda_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_32, 
                style: style_EmpreendimentoResidencialAltodaFazenda_32,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_32_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_32_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_32_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_32_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_32_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_33 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_33 = format_EmpreendimentoResidencialAltodaFazenda_33.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_33.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_33);
var lyr_EmpreendimentoResidencialAltodaFazenda_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_33, 
                style: style_EmpreendimentoResidencialAltodaFazenda_33,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_33.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoVilaDorata_34 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDorata_34 = format_EmpreendimentoVilaDorata_34.readFeatures(json_EmpreendimentoVilaDorata_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVilaDorata_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDorata_34.addFeatures(features_EmpreendimentoVilaDorata_34);
var lyr_EmpreendimentoVilaDorata_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDorata_34, 
                style: style_EmpreendimentoVilaDorata_34,
                popuplayertitle: 'Empreendimento Vila Dorata',
                interactive: true,
    title: 'Empreendimento Vila Dorata<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_6.png" /> Vagas de Estacionamento<br />\
    <img src="styles/legend/EmpreendimentoVilaDorata_34_7.png" /> Viela<br />' });
var format_EmpreendimentoVilaDorata_35 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDorata_35 = format_EmpreendimentoVilaDorata_35.readFeatures(json_EmpreendimentoVilaDorata_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVilaDorata_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDorata_35.addFeatures(features_EmpreendimentoVilaDorata_35);
var lyr_EmpreendimentoVilaDorata_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDorata_35, 
                style: style_EmpreendimentoVilaDorata_35,
                popuplayertitle: 'Empreendimento Vila Dorata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVilaDorata_35.png" /> Empreendimento Vila Dorata'
            });
var format_EmpreendimentoResidencialMarioTasso_36 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_36 = format_EmpreendimentoResidencialMarioTasso_36.readFeatures(json_EmpreendimentoResidencialMarioTasso_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarioTasso_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_36.addFeatures(features_EmpreendimentoResidencialMarioTasso_36);
var lyr_EmpreendimentoResidencialMarioTasso_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_36, 
                style: style_EmpreendimentoResidencialMarioTasso_36,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_36_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_36_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_36_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_36_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_36_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_37 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_37 = format_EmpreendimentoResidencialMarioTasso_37.readFeatures(json_EmpreendimentoResidencialMarioTasso_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarioTasso_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_37.addFeatures(features_EmpreendimentoResidencialMarioTasso_37);
var lyr_EmpreendimentoResidencialMarioTasso_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_37, 
                style: style_EmpreendimentoResidencialMarioTasso_37,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_37.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_38 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_38 = format_EmpreendimentoResidenciaisVivenna_38.readFeatures(json_EmpreendimentoResidenciaisVivenna_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidenciaisVivenna_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_38.addFeatures(features_EmpreendimentoResidenciaisVivenna_38);
var lyr_EmpreendimentoResidenciaisVivenna_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_38, 
                style: style_EmpreendimentoResidenciaisVivenna_38,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_3.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_6.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_38_7.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoResidenciaisVivenna_39 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_39 = format_EmpreendimentoResidenciaisVivenna_39.readFeatures(json_EmpreendimentoResidenciaisVivenna_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidenciaisVivenna_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_39.addFeatures(features_EmpreendimentoResidenciaisVivenna_39);
var lyr_EmpreendimentoResidenciaisVivenna_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_39, 
                style: style_EmpreendimentoResidenciaisVivenna_39,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_39.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_40 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_40 = format_EmpreendimentoAbuDhabiParadiseResortResidence_40.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_40.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_40);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_40, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_40,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_40_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_41 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_41 = format_EmpreendimentoAbuDhabiParadiseResortResidence_41.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_41.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_41);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_41, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_41,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_41.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_42 = new ol.format.GeoJSON();
var features_EmprendimentoElias_42 = format_EmprendimentoElias_42.readFeatures(json_EmprendimentoElias_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmprendimentoElias_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_42.addFeatures(features_EmprendimentoElias_42);
var lyr_EmprendimentoElias_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_42, 
                style: style_EmprendimentoElias_42,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_42_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmprendimentoElias_42_1.png" /> Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_42_2.png" /> Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_42_3.png" /> Verde<br />\
    <img src="styles/legend/EmprendimentoElias_42_4.png" /> Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_42_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_42_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_43 = new ol.format.GeoJSON();
var features_EmprendimentoElias_43 = format_EmprendimentoElias_43.readFeatures(json_EmprendimentoElias_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmprendimentoElias_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_43.addFeatures(features_EmprendimentoElias_43);
var lyr_EmprendimentoElias_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_43, 
                style: style_EmprendimentoElias_43,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_43.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_44 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_44 = format_EmpreendimentoResidencialSoCarlosI_44.readFeatures(json_EmpreendimentoResidencialSoCarlosI_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_44.addFeatures(features_EmpreendimentoResidencialSoCarlosI_44);
var lyr_EmpreendimentoResidencialSoCarlosI_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_44, 
                style: style_EmpreendimentoResidencialSoCarlosI_44,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_44_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_44_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_44_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_44_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_44_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_45 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_45 = format_EmpreendimentoResidencialSoCarlosI_45.readFeatures(json_EmpreendimentoResidencialSoCarlosI_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_45.addFeatures(features_EmpreendimentoResidencialSoCarlosI_45);
var lyr_EmpreendimentoResidencialSoCarlosI_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_45, 
                style: style_EmpreendimentoResidencialSoCarlosI_45,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_45.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_46 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_46 = format_EmpreendimentoMonti_46.readFeatures(json_EmpreendimentoMonti_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMonti_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_46.addFeatures(features_EmpreendimentoMonti_46);
var lyr_EmpreendimentoMonti_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_46, 
                style: style_EmpreendimentoMonti_46,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_1.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_46_5.png" /> Vaga de estacionamento<br />' });
var format_EmpreendimentoMonti_47 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_47 = format_EmpreendimentoMonti_47.readFeatures(json_EmpreendimentoMonti_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMonti_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_47.addFeatures(features_EmpreendimentoMonti_47);
var lyr_EmpreendimentoMonti_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_47, 
                style: style_EmpreendimentoMonti_47,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_47.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_48 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_48 = format_EmpreendimentoResidencialMoradadoBosque_48.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_48.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_48);
var lyr_EmpreendimentoResidencialMoradadoBosque_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_48, 
                style: style_EmpreendimentoResidencialMoradadoBosque_48,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_4.png" /> _Ponto Perimetral<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_5.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_6.png" /> FORMATO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_7.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_8.png" /> HATCH PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_48_9.png" /> Lotes mistos<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_49 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_49 = format_EmpreendimentoResidencialMoradadoBosque_49.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_49.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_49);
var lyr_EmpreendimentoResidencialMoradadoBosque_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_49, 
                style: style_EmpreendimentoResidencialMoradadoBosque_49,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_49.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_50 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_50 = format_EmpreendimentoVittaAlvorada_50.readFeatures(json_EmpreendimentoVittaAlvorada_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaAlvorada_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_50.addFeatures(features_EmpreendimentoVittaAlvorada_50);
var lyr_EmpreendimentoVittaAlvorada_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_50, 
                style: style_EmpreendimentoVittaAlvorada_50,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_50_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_51 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_51 = format_EmpreendimentoVittaAlvorada_51.readFeatures(json_EmpreendimentoVittaAlvorada_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaAlvorada_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_51.addFeatures(features_EmpreendimentoVittaAlvorada_51);
var lyr_EmpreendimentoVittaAlvorada_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_51, 
                style: style_EmpreendimentoVittaAlvorada_51,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_51.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_52 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_52 = format_EmpreendimentoResidencialMarthaHelena_52.readFeatures(json_EmpreendimentoResidencialMarthaHelena_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_52.addFeatures(features_EmpreendimentoResidencialMarthaHelena_52);
var lyr_EmpreendimentoResidencialMarthaHelena_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_52, 
                style: style_EmpreendimentoResidencialMarthaHelena_52,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_52_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_52_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_53 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_53 = format_EmpreendimentoResidencialMarthaHelena_53.readFeatures(json_EmpreendimentoResidencialMarthaHelena_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_53.addFeatures(features_EmpreendimentoResidencialMarthaHelena_53);
var lyr_EmpreendimentoResidencialMarthaHelena_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_53, 
                style: style_EmpreendimentoResidencialMarthaHelena_53,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_53.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_54 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_54 = format_EmpreendimentoResidencialYasminTorres_54.readFeatures(json_EmpreendimentoResidencialYasminTorres_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialYasminTorres_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_54.addFeatures(features_EmpreendimentoResidencialYasminTorres_54);
var lyr_EmpreendimentoResidencialYasminTorres_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_54, 
                style: style_EmpreendimentoResidencialYasminTorres_54,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_54.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_55 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_55 = format_EmpreendimentoResidencialYasminTorres_55.readFeatures(json_EmpreendimentoResidencialYasminTorres_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialYasminTorres_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_55.addFeatures(features_EmpreendimentoResidencialYasminTorres_55);
var lyr_EmpreendimentoResidencialYasminTorres_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_55, 
                style: style_EmpreendimentoResidencialYasminTorres_55,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_55.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoVittaSoVicente_56 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_56 = format_EmpreendimentoVittaSoVicente_56.readFeatures(json_EmpreendimentoVittaSoVicente_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaSoVicente_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_56.addFeatures(features_EmpreendimentoVittaSoVicente_56);
var lyr_EmpreendimentoVittaSoVicente_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_56, 
                style: style_EmpreendimentoVittaSoVicente_56,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_1.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_56_5.png" /> Vaga de estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_57 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_57 = format_EmpreendimentoVittaSoVicente_57.readFeatures(json_EmpreendimentoVittaSoVicente_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVittaSoVicente_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_57.addFeatures(features_EmpreendimentoVittaSoVicente_57);
var lyr_EmpreendimentoVittaSoVicente_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_57, 
                style: style_EmpreendimentoVittaSoVicente_57,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_57.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoPalmeiraReal_58 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_58 = format_EmpreendimentoPalmeiraReal_58.readFeatures(json_EmpreendimentoPalmeiraReal_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoPalmeiraReal_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_58.addFeatures(features_EmpreendimentoPalmeiraReal_58);
var lyr_EmpreendimentoPalmeiraReal_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_58, 
                style: style_EmpreendimentoPalmeiraReal_58,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_1.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_58_5.png" /> Vaga de estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_59 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_59 = format_EmpreendimentoPalmeiraReal_59.readFeatures(json_EmpreendimentoPalmeiraReal_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoPalmeiraReal_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_59.addFeatures(features_EmpreendimentoPalmeiraReal_59);
var lyr_EmpreendimentoPalmeiraReal_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_59, 
                style: style_EmpreendimentoPalmeiraReal_59,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_59.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_60 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_60 = format_EmpreendimentoEssence_60.readFeatures(json_EmpreendimentoEssence_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEssence_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_60.addFeatures(features_EmpreendimentoEssence_60);
var lyr_EmpreendimentoEssence_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_60, 
                style: style_EmpreendimentoEssence_60,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_60.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_61 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_61 = format_EmpreendimentoEssence_61.readFeatures(json_EmpreendimentoEssence_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEssence_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_61.addFeatures(features_EmpreendimentoEssence_61);
var lyr_EmpreendimentoEssence_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_61, 
                style: style_EmpreendimentoEssence_61,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_61.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_62 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_62 = format_EmpreendimentoVersalhes_62.readFeatures(json_EmpreendimentoVersalhes_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVersalhes_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_62.addFeatures(features_EmpreendimentoVersalhes_62);
var lyr_EmpreendimentoVersalhes_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_62, 
                style: style_EmpreendimentoVersalhes_62,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_1.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_62_5.png" /> Vaga de estacionamento<br />' });
var format_EmpreendimentoVersalhes_63 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_63 = format_EmpreendimentoVersalhes_63.readFeatures(json_EmpreendimentoVersalhes_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoVersalhes_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_63.addFeatures(features_EmpreendimentoVersalhes_63);
var lyr_EmpreendimentoVersalhes_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_63, 
                style: style_EmpreendimentoVersalhes_63,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_63.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_64 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_64 = format_EmpreendimentoSonetto_64.readFeatures(json_EmpreendimentoSonetto_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoSonetto_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_64.addFeatures(features_EmpreendimentoSonetto_64);
var lyr_EmpreendimentoSonetto_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_64, 
                style: style_EmpreendimentoSonetto_64,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_64.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_65 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_65 = format_EmpreendimentoSonetto_65.readFeatures(json_EmpreendimentoSonetto_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoSonetto_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_65.addFeatures(features_EmpreendimentoSonetto_65);
var lyr_EmpreendimentoSonetto_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_65, 
                style: style_EmpreendimentoSonetto_65,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_65.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_66 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_66 = format_EmpreendimentoResidencialSantaIns_66.readFeatures(json_EmpreendimentoResidencialSantaIns_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaIns_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_66.addFeatures(features_EmpreendimentoResidencialSantaIns_66);
var lyr_EmpreendimentoResidencialSantaIns_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_66, 
                style: style_EmpreendimentoResidencialSantaIns_66,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_4.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_66_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_67 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_67 = format_EmpreendimentoResidencialSantaIns_67.readFeatures(json_EmpreendimentoResidencialSantaIns_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaIns_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_67.addFeatures(features_EmpreendimentoResidencialSantaIns_67);
var lyr_EmpreendimentoResidencialSantaIns_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_67, 
                style: style_EmpreendimentoResidencialSantaIns_67,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_67.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_68 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_68 = format_EmpreendimentoEdifcioSolNascente_68.readFeatures(json_EmpreendimentoEdifcioSolNascente_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioSolNascente_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_68.addFeatures(features_EmpreendimentoEdifcioSolNascente_68);
var lyr_EmpreendimentoEdifcioSolNascente_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_68, 
                style: style_EmpreendimentoEdifcioSolNascente_68,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_68.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_69 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_69 = format_EmpreendimentoEdifcioSolNascente_69.readFeatures(json_EmpreendimentoEdifcioSolNascente_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioSolNascente_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_69.addFeatures(features_EmpreendimentoEdifcioSolNascente_69);
var lyr_EmpreendimentoEdifcioSolNascente_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_69, 
                style: style_EmpreendimentoEdifcioSolNascente_69,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_69.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_70 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_70 = format_EmpreendimentoResidencialQuintadosOitis_70.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_70.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_70);
var lyr_EmpreendimentoResidencialQuintadosOitis_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_70, 
                style: style_EmpreendimentoResidencialQuintadosOitis_70,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_70_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_71 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_71 = format_EmpreendimentoResidencialQuintadosOitis_71.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_71.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_71);
var lyr_EmpreendimentoResidencialQuintadosOitis_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_71, 
                style: style_EmpreendimentoResidencialQuintadosOitis_71,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_71.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_72 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_72 = format_EmpreendimentoResidencialQuintadoSol_72.readFeatures(json_EmpreendimentoResidencialQuintadoSol_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_72.addFeatures(features_EmpreendimentoResidencialQuintadoSol_72);
var lyr_EmpreendimentoResidencialQuintadoSol_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_72, 
                style: style_EmpreendimentoResidencialQuintadoSol_72,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_72_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_72_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_72_2.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_72_3.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_72_4.png" /> Verde<br />' });
var format_EmpreendimentoResidencialQuintadoSol_73 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_73 = format_EmpreendimentoResidencialQuintadoSol_73.readFeatures(json_EmpreendimentoResidencialQuintadoSol_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_73.addFeatures(features_EmpreendimentoResidencialQuintadoSol_73);
var lyr_EmpreendimentoResidencialQuintadoSol_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_73, 
                style: style_EmpreendimentoResidencialQuintadoSol_73,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_73.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoResidencialNairRetuciII_74 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_74 = format_EmpreendimentoResidencialNairRetuciII_74.readFeatures(json_EmpreendimentoResidencialNairRetuciII_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_74.addFeatures(features_EmpreendimentoResidencialNairRetuciII_74);
var lyr_EmpreendimentoResidencialNairRetuciII_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_74, 
                style: style_EmpreendimentoResidencialNairRetuciII_74,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Residencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_74_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_74_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_74_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_74_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_74_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialNairRetuciII_75 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_75 = format_EmpreendimentoResidencialNairRetuciII_75.readFeatures(json_EmpreendimentoResidencialNairRetuciII_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_75.addFeatures(features_EmpreendimentoResidencialNairRetuciII_75);
var lyr_EmpreendimentoResidencialNairRetuciII_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_75, 
                style: style_EmpreendimentoResidencialNairRetuciII_75,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialNairRetuciII_75.png" /> Empreendimento Residencial Nair Retuci II'
            });
var format_EmpreendimentoParquePalmeiraImperial_76 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_76 = format_EmpreendimentoParquePalmeiraImperial_76.readFeatures(json_EmpreendimentoParquePalmeiraImperial_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_76.addFeatures(features_EmpreendimentoParquePalmeiraImperial_76);
var lyr_EmpreendimentoParquePalmeiraImperial_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_76, 
                style: style_EmpreendimentoParquePalmeiraImperial_76,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_76_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_76_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_76_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_76_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_76_4.png" /> Passeio<br />' });
var format_EmpreendimentoParquePalmeiraImperial_77 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_77 = format_EmpreendimentoParquePalmeiraImperial_77.readFeatures(json_EmpreendimentoParquePalmeiraImperial_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_77.addFeatures(features_EmpreendimentoParquePalmeiraImperial_77);
var lyr_EmpreendimentoParquePalmeiraImperial_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_77, 
                style: style_EmpreendimentoParquePalmeiraImperial_77,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_77.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_78 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_78 = format_EmpreendimentoBordadaMata_78.readFeatures(json_EmpreendimentoBordadaMata_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoBordadaMata_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_78.addFeatures(features_EmpreendimentoBordadaMata_78);
var lyr_EmpreendimentoBordadaMata_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_78, 
                style: style_EmpreendimentoBordadaMata_78,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_0.png" /> Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_1.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_2.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_3.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_4.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_5.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_6.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_78_7.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_79 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_79 = format_EmpreendimentoBordadaMata_79.readFeatures(json_EmpreendimentoBordadaMata_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoBordadaMata_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_79.addFeatures(features_EmpreendimentoBordadaMata_79);
var lyr_EmpreendimentoBordadaMata_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_79, 
                style: style_EmpreendimentoBordadaMata_79,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_79.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoResidencialCidadeJardim_80 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_80 = format_EmpreendimentoResidencialCidadeJardim_80.readFeatures(json_EmpreendimentoResidencialCidadeJardim_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_80.addFeatures(features_EmpreendimentoResidencialCidadeJardim_80);
var lyr_EmpreendimentoResidencialCidadeJardim_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_80, 
                style: style_EmpreendimentoResidencialCidadeJardim_80,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Residencial Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_1.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_2.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_3.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_4.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_80_5.png" /> Verde<br />' });
var format_EmpreendimentoResidencialCidadeJardim_81 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_81 = format_EmpreendimentoResidencialCidadeJardim_81.readFeatures(json_EmpreendimentoResidencialCidadeJardim_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_81.addFeatures(features_EmpreendimentoResidencialCidadeJardim_81);
var lyr_EmpreendimentoResidencialCidadeJardim_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_81, 
                style: style_EmpreendimentoResidencialCidadeJardim_81,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCidadeJardim_81.png" /> Empreendimento Residencial Cidade Jardim'
            });
var format_EmpreendimentoEdifcioResidencialHope_82 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_82 = format_EmpreendimentoEdifcioResidencialHope_82.readFeatures(json_EmpreendimentoEdifcioResidencialHope_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_82.addFeatures(features_EmpreendimentoEdifcioResidencialHope_82);
var lyr_EmpreendimentoEdifcioResidencialHope_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_82, 
                style: style_EmpreendimentoEdifcioResidencialHope_82,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_82.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_83 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_83 = format_EmpreendimentoEdifcioResidencialHope_83.readFeatures(json_EmpreendimentoEdifcioResidencialHope_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_83.addFeatures(features_EmpreendimentoEdifcioResidencialHope_83);
var lyr_EmpreendimentoEdifcioResidencialHope_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_83, 
                style: style_EmpreendimentoEdifcioResidencialHope_83,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_83.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_84 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_84 = format_EmpreendimentoHorizResidence_84.readFeatures(json_EmpreendimentoHorizResidence_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoHorizResidence_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_84.addFeatures(features_EmpreendimentoHorizResidence_84);
var lyr_EmpreendimentoHorizResidence_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_84, 
                style: style_EmpreendimentoHorizResidence_84,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_84.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_85 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_85 = format_EmpreendimentoHorizResidence_85.readFeatures(json_EmpreendimentoHorizResidence_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoHorizResidence_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_85.addFeatures(features_EmpreendimentoHorizResidence_85);
var lyr_EmpreendimentoHorizResidence_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_85, 
                style: style_EmpreendimentoHorizResidence_85,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_85.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_86 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_86 = format_EmpreendimentoJardimFlora_86.readFeatures(json_EmpreendimentoJardimFlora_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimFlora_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_86.addFeatures(features_EmpreendimentoJardimFlora_86);
var lyr_EmpreendimentoJardimFlora_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_86, 
                style: style_EmpreendimentoJardimFlora_86,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_86_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_86_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_86_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_86_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_86_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimFlora_87 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_87 = format_EmpreendimentoJardimFlora_87.readFeatures(json_EmpreendimentoJardimFlora_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimFlora_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_87.addFeatures(features_EmpreendimentoJardimFlora_87);
var lyr_EmpreendimentoJardimFlora_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_87, 
                style: style_EmpreendimentoJardimFlora_87,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_87.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_88 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_88 = format_EmpreendimentoJardimHorizonte_88.readFeatures(json_EmpreendimentoJardimHorizonte_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimHorizonte_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_88.addFeatures(features_EmpreendimentoJardimHorizonte_88);
var lyr_EmpreendimentoJardimHorizonte_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_88, 
                style: style_EmpreendimentoJardimHorizonte_88,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_3.png" /> Lote Comercial<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_88_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_89 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_89 = format_EmpreendimentoJardimHorizonte_89.readFeatures(json_EmpreendimentoJardimHorizonte_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimHorizonte_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_89.addFeatures(features_EmpreendimentoJardimHorizonte_89);
var lyr_EmpreendimentoJardimHorizonte_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_89, 
                style: style_EmpreendimentoJardimHorizonte_89,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_89.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_90 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_90 = format_EmpreendimentoJardimMariaLuiza_90.readFeatures(json_EmpreendimentoJardimMariaLuiza_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimMariaLuiza_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_90.addFeatures(features_EmpreendimentoJardimMariaLuiza_90);
var lyr_EmpreendimentoJardimMariaLuiza_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_90, 
                style: style_EmpreendimentoJardimMariaLuiza_90,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_90_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_90_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_90_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_90_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_90_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_91 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_91 = format_EmpreendimentoJardimMariaLuiza_91.readFeatures(json_EmpreendimentoJardimMariaLuiza_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoJardimMariaLuiza_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_91.addFeatures(features_EmpreendimentoJardimMariaLuiza_91);
var lyr_EmpreendimentoJardimMariaLuiza_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_91, 
                style: style_EmpreendimentoJardimMariaLuiza_91,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_91.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_92 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_92 = format_EmpreendimentoMontBlancResidence_92.readFeatures(json_EmpreendimentoMontBlancResidence_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMontBlancResidence_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_92.addFeatures(features_EmpreendimentoMontBlancResidence_92);
var lyr_EmpreendimentoMontBlancResidence_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_92, 
                style: style_EmpreendimentoMontBlancResidence_92,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_92.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_93 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_93 = format_EmpreendimentoMontBlancResidence_93.readFeatures(json_EmpreendimentoMontBlancResidence_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMontBlancResidence_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_93.addFeatures(features_EmpreendimentoMontBlancResidence_93);
var lyr_EmpreendimentoMontBlancResidence_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_93, 
                style: style_EmpreendimentoMontBlancResidence_93,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_93.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_94 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_94 = format_EmpreendimentoMoradadoVerdeII_94.readFeatures(json_EmpreendimentoMoradadoVerdeII_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMoradadoVerdeII_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_94.addFeatures(features_EmpreendimentoMoradadoVerdeII_94);
var lyr_EmpreendimentoMoradadoVerdeII_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_94, 
                style: style_EmpreendimentoMoradadoVerdeII_94,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_4.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_94_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_95 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_95 = format_EmpreendimentoMoradadoVerdeII_95.readFeatures(json_EmpreendimentoMoradadoVerdeII_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoMoradadoVerdeII_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_95.addFeatures(features_EmpreendimentoMoradadoVerdeII_95);
var lyr_EmpreendimentoMoradadoVerdeII_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_95, 
                style: style_EmpreendimentoMoradadoVerdeII_95,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_95.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_96 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_96 = format_EmpreendimentoResicencialNairRetuci_96.readFeatures(json_EmpreendimentoResicencialNairRetuci_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResicencialNairRetuci_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_96.addFeatures(features_EmpreendimentoResicencialNairRetuci_96);
var lyr_EmpreendimentoResicencialNairRetuci_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_96, 
                style: style_EmpreendimentoResicencialNairRetuci_96,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_1.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_2.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_3.png" /> Mato<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_4.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_5.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_96_6.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_97 = format_EmpreendimentoResicencialNairRetuci_97.readFeatures(json_EmpreendimentoResicencialNairRetuci_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResicencialNairRetuci_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_97.addFeatures(features_EmpreendimentoResicencialNairRetuci_97);
var lyr_EmpreendimentoResicencialNairRetuci_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_97, 
                style: style_EmpreendimentoResicencialNairRetuci_97,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_97.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagon_98 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_98 = format_EmpreendimentoParagon_98.readFeatures(json_EmpreendimentoParagon_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParagon_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_98.addFeatures(features_EmpreendimentoParagon_98);
var lyr_EmpreendimentoParagon_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_98, 
                style: style_EmpreendimentoParagon_98,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_5.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_98_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_99 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_99 = format_EmpreendimentoParagon_99.readFeatures(json_EmpreendimentoParagon_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParagon_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_99.addFeatures(features_EmpreendimentoParagon_99);
var lyr_EmpreendimentoParagon_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_99, 
                style: style_EmpreendimentoParagon_99,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_99.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_100 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_100 = format_EmpreendimentoParqueVillaLobos_100.readFeatures(json_EmpreendimentoParqueVillaLobos_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParqueVillaLobos_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_100.addFeatures(features_EmpreendimentoParqueVillaLobos_100);
var lyr_EmpreendimentoParqueVillaLobos_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_100, 
                style: style_EmpreendimentoParqueVillaLobos_100,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_3.png" /> Lote Comercial<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_100_5.png" /> Lote Residencial<br />' });
var format_EmpreendimentoParqueVillaLobos_101 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_101 = format_EmpreendimentoParqueVillaLobos_101.readFeatures(json_EmpreendimentoParqueVillaLobos_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoParqueVillaLobos_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_101.addFeatures(features_EmpreendimentoParqueVillaLobos_101);
var lyr_EmpreendimentoParqueVillaLobos_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_101, 
                style: style_EmpreendimentoParqueVillaLobos_101,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_101.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_102 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_102 = format_EmpreendimentoDaVinci_102.readFeatures(json_EmpreendimentoDaVinci_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoDaVinci_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_102.addFeatures(features_EmpreendimentoDaVinci_102);
var lyr_EmpreendimentoDaVinci_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_102, 
                style: style_EmpreendimentoDaVinci_102,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_102.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_103 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_103 = format_EmpreendimentoDaVinci_103.readFeatures(json_EmpreendimentoDaVinci_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoDaVinci_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_103.addFeatures(features_EmpreendimentoDaVinci_103);
var lyr_EmpreendimentoDaVinci_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_103, 
                style: style_EmpreendimentoDaVinci_103,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_103.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_104 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_104 = format_EmpreendimentoResidencialDomingosJardini_104.readFeatures(json_EmpreendimentoResidencialDomingosJardini_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_104.addFeatures(features_EmpreendimentoResidencialDomingosJardini_104);
var lyr_EmpreendimentoResidencialDomingosJardini_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_104, 
                style: style_EmpreendimentoResidencialDomingosJardini_104,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_1.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_2.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_3.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_4.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_104_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_105 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_105 = format_EmpreendimentoResidencialDomingosJardini_105.readFeatures(json_EmpreendimentoResidencialDomingosJardini_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_105.addFeatures(features_EmpreendimentoResidencialDomingosJardini_105);
var lyr_EmpreendimentoResidencialDomingosJardini_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_105, 
                style: style_EmpreendimentoResidencialDomingosJardini_105,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_105.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_106 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_106 = format_EmpreendimentoResidencialSantaF_106.readFeatures(json_EmpreendimentoResidencialSantaF_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaF_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_106.addFeatures(features_EmpreendimentoResidencialSantaF_106);
var lyr_EmpreendimentoResidencialSantaF_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_106, 
                style: style_EmpreendimentoResidencialSantaF_106,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_2.png" /> Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_3.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_4.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_106_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_107 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_107 = format_EmpreendimentoResidencialSantaF_107.readFeatures(json_EmpreendimentoResidencialSantaF_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoResidencialSantaF_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_107.addFeatures(features_EmpreendimentoResidencialSantaF_107);
var lyr_EmpreendimentoResidencialSantaF_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_107, 
                style: style_EmpreendimentoResidencialSantaF_107,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_107.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_108 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_108 = format_EmpreendimentoEdifcioRuadoSol_108.readFeatures(json_EmpreendimentoEdifcioRuadoSol_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_108.addFeatures(features_EmpreendimentoEdifcioRuadoSol_108);
var lyr_EmpreendimentoEdifcioRuadoSol_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_108, 
                style: style_EmpreendimentoEdifcioRuadoSol_108,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_108.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_109 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_109 = format_EmpreendimentoEdifcioRuadoSol_109.readFeatures(json_EmpreendimentoEdifcioRuadoSol_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_109.addFeatures(features_EmpreendimentoEdifcioRuadoSol_109);
var lyr_EmpreendimentoEdifcioRuadoSol_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_109, 
                style: style_EmpreendimentoEdifcioRuadoSol_109,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_109.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_110 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_110 = format_EmpreendimentoTorontoResidence_110.readFeatures(json_EmpreendimentoTorontoResidence_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoTorontoResidence_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_110.addFeatures(features_EmpreendimentoTorontoResidence_110);
var lyr_EmpreendimentoTorontoResidence_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_110, 
                style: style_EmpreendimentoTorontoResidence_110,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_0.png" /> Asfalto<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_1.png" /> Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_2.png" /> Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_110_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_111 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_111 = format_EmpreendimentoTorontoResidence_111.readFeatures(json_EmpreendimentoTorontoResidence_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentoTorontoResidence_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_111.addFeatures(features_EmpreendimentoTorontoResidence_111);
var lyr_EmpreendimentoTorontoResidence_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_111, 
                style: style_EmpreendimentoTorontoResidence_111,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_111.png" /> Empreendimento Toronto Residence'
            });
var format_ServidoRamal138kVFranca4Guanabara_112 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_112 = format_ServidoRamal138kVFranca4Guanabara_112.readFeatures(json_ServidoRamal138kVFranca4Guanabara_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_112.addFeatures(features_ServidoRamal138kVFranca4Guanabara_112);
var lyr_ServidoRamal138kVFranca4Guanabara_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_112, 
                style: style_ServidoRamal138kVFranca4Guanabara_112,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_112.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_113 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_113 = format_ServidoRamal138kVFranca4Guanabara_113.readFeatures(json_ServidoRamal138kVFranca4Guanabara_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_113.addFeatures(features_ServidoRamal138kVFranca4Guanabara_113);
var lyr_ServidoRamal138kVFranca4Guanabara_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_113, 
                style: style_ServidoRamal138kVFranca4Guanabara_113,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_113.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado24unid_114 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado24unid_114 = format_EmpreendimentosAprovado24unid_114.readFeatures(json_EmpreendimentosAprovado24unid_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentosAprovado24unid_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado24unid_114.addFeatures(features_EmpreendimentosAprovado24unid_114);
var lyr_EmpreendimentosAprovado24unid_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado24unid_114, 
                style: style_EmpreendimentosAprovado24unid_114,
                popuplayertitle: 'Empreendimentos - Aprovado (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado24unid_114.png" /> Empreendimentos - Aprovado (24 unid.)'
            });
var format_EmpreendimentosDiretriz4unid_115 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz4unid_115 = format_EmpreendimentosDiretriz4unid_115.readFeatures(json_EmpreendimentosDiretriz4unid_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentosDiretriz4unid_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz4unid_115.addFeatures(features_EmpreendimentosDiretriz4unid_115);
var lyr_EmpreendimentosDiretriz4unid_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz4unid_115, 
                style: style_EmpreendimentosDiretriz4unid_115,
                popuplayertitle: 'Empreendimentos  - Diretriz (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz4unid_115.png" /> Empreendimentos  - Diretriz (4 unid.)'
            });
var format_EmpreendimentosPrvia7unid_116 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia7unid_116 = format_EmpreendimentosPrvia7unid_116.readFeatures(json_EmpreendimentosPrvia7unid_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpreendimentosPrvia7unid_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia7unid_116.addFeatures(features_EmpreendimentosPrvia7unid_116);
var lyr_EmpreendimentosPrvia7unid_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia7unid_116, 
                style: style_EmpreendimentosPrvia7unid_116,
                popuplayertitle: 'Empreendimentos - Prévia (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia7unid_116.png" /> Empreendimentos - Prévia (7 unid.)'
            });
var format_PrprioPblicoMunicipalArena1unid_117 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalArena1unid_117 = format_PrprioPblicoMunicipalArena1unid_117.readFeatures(json_PrprioPblicoMunicipalArena1unid_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalArena1unid_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalArena1unid_117.addFeatures(features_PrprioPblicoMunicipalArena1unid_117);
var lyr_PrprioPblicoMunicipalArena1unid_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalArena1unid_117, 
                style: style_PrprioPblicoMunicipalArena1unid_117,
                popuplayertitle: 'Próprio Público Municipal - Arena (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalArena1unid_117.png" /> Próprio Público Municipal - Arena (1 unid.)'
            });
var format_PrprioPblicoMunicipalBiblioteca1unid_118 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalBiblioteca1unid_118 = format_PrprioPblicoMunicipalBiblioteca1unid_118.readFeatures(json_PrprioPblicoMunicipalBiblioteca1unid_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalBiblioteca1unid_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalBiblioteca1unid_118.addFeatures(features_PrprioPblicoMunicipalBiblioteca1unid_118);
var lyr_PrprioPblicoMunicipalBiblioteca1unid_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalBiblioteca1unid_118, 
                style: style_PrprioPblicoMunicipalBiblioteca1unid_118,
                popuplayertitle: 'Próprio Público Municipal - Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalBiblioteca1unid_118.png" /> Próprio Público Municipal - Biblioteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalCampo18unid_119 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo18unid_119 = format_PrprioPblicoMunicipalCampo18unid_119.readFeatures(json_PrprioPblicoMunicipalCampo18unid_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalCampo18unid_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo18unid_119.addFeatures(features_PrprioPblicoMunicipalCampo18unid_119);
var lyr_PrprioPblicoMunicipalCampo18unid_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo18unid_119, 
                style: style_PrprioPblicoMunicipalCampo18unid_119,
                popuplayertitle: 'Próprio Público Municipal - Campo (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo18unid_119.png" /> Próprio Público Municipal - Campo (18 unid.)'
            });
var format_PrprioPblicoMunicipalCasa1unid_120 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCasa1unid_120 = format_PrprioPblicoMunicipalCasa1unid_120.readFeatures(json_PrprioPblicoMunicipalCasa1unid_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalCasa1unid_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCasa1unid_120.addFeatures(features_PrprioPblicoMunicipalCasa1unid_120);
var lyr_PrprioPblicoMunicipalCasa1unid_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCasa1unid_120, 
                style: style_PrprioPblicoMunicipalCasa1unid_120,
                popuplayertitle: 'Próprio Público Municipal - Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCasa1unid_120.png" /> Próprio Público Municipal - Casa (1 unid.)'
            });
var format_PrprioPblicoMunicipalCentro4unid_121 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCentro4unid_121 = format_PrprioPblicoMunicipalCentro4unid_121.readFeatures(json_PrprioPblicoMunicipalCentro4unid_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalCentro4unid_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCentro4unid_121.addFeatures(features_PrprioPblicoMunicipalCentro4unid_121);
var lyr_PrprioPblicoMunicipalCentro4unid_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCentro4unid_121, 
                style: style_PrprioPblicoMunicipalCentro4unid_121,
                popuplayertitle: 'Próprio Público Municipal - Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCentro4unid_121.png" /> Próprio Público Municipal - Centro (4 unid.)'
            });
var format_PrprioPblicoMunicipalCEPEL15unid_122 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCEPEL15unid_122 = format_PrprioPblicoMunicipalCEPEL15unid_122.readFeatures(json_PrprioPblicoMunicipalCEPEL15unid_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalCEPEL15unid_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCEPEL15unid_122.addFeatures(features_PrprioPblicoMunicipalCEPEL15unid_122);
var lyr_PrprioPblicoMunicipalCEPEL15unid_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCEPEL15unid_122, 
                style: style_PrprioPblicoMunicipalCEPEL15unid_122,
                popuplayertitle: 'Próprio Público Municipal - CEPEL (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCEPEL15unid_122.png" /> Próprio Público Municipal - CEPEL (15 unid.)'
            });
var format_PrprioPblicoMunicipalConjunto4unid_123 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalConjunto4unid_123 = format_PrprioPblicoMunicipalConjunto4unid_123.readFeatures(json_PrprioPblicoMunicipalConjunto4unid_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalConjunto4unid_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalConjunto4unid_123.addFeatures(features_PrprioPblicoMunicipalConjunto4unid_123);
var lyr_PrprioPblicoMunicipalConjunto4unid_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalConjunto4unid_123, 
                style: style_PrprioPblicoMunicipalConjunto4unid_123,
                popuplayertitle: 'Próprio Público Municipal - Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalConjunto4unid_123.png" /> Próprio Público Municipal - Conjunto (4 unid.)'
            });
var format_PrprioPblicoMunicipalEstadio1unid_124 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalEstadio1unid_124 = format_PrprioPblicoMunicipalEstadio1unid_124.readFeatures(json_PrprioPblicoMunicipalEstadio1unid_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalEstadio1unid_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalEstadio1unid_124.addFeatures(features_PrprioPblicoMunicipalEstadio1unid_124);
var lyr_PrprioPblicoMunicipalEstadio1unid_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalEstadio1unid_124, 
                style: style_PrprioPblicoMunicipalEstadio1unid_124,
                popuplayertitle: 'Próprio Público Municipal - Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalEstadio1unid_124.png" /> Próprio Público Municipal - Estadio (1 unid.)'
            });
var format_PrprioPblicoMunicipalGinsio5unid_125 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGinsio5unid_125 = format_PrprioPblicoMunicipalGinsio5unid_125.readFeatures(json_PrprioPblicoMunicipalGinsio5unid_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalGinsio5unid_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGinsio5unid_125.addFeatures(features_PrprioPblicoMunicipalGinsio5unid_125);
var lyr_PrprioPblicoMunicipalGinsio5unid_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGinsio5unid_125, 
                style: style_PrprioPblicoMunicipalGinsio5unid_125,
                popuplayertitle: 'Próprio Público Municipal - Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGinsio5unid_125.png" /> Próprio Público Municipal - Ginásio (5 unid.)'
            });
var format_PrprioPblicoMunicipalMuseu2unid_126 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalMuseu2unid_126 = format_PrprioPblicoMunicipalMuseu2unid_126.readFeatures(json_PrprioPblicoMunicipalMuseu2unid_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalMuseu2unid_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalMuseu2unid_126.addFeatures(features_PrprioPblicoMunicipalMuseu2unid_126);
var lyr_PrprioPblicoMunicipalMuseu2unid_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalMuseu2unid_126, 
                style: style_PrprioPblicoMunicipalMuseu2unid_126,
                popuplayertitle: 'Próprio Público Municipal - Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalMuseu2unid_126.png" /> Próprio Público Municipal - Museu (2 unid.)'
            });
var format_PrprioPblicoMunicipalParque2unid_127 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalParque2unid_127 = format_PrprioPblicoMunicipalParque2unid_127.readFeatures(json_PrprioPblicoMunicipalParque2unid_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalParque2unid_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalParque2unid_127.addFeatures(features_PrprioPblicoMunicipalParque2unid_127);
var lyr_PrprioPblicoMunicipalParque2unid_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalParque2unid_127, 
                style: style_PrprioPblicoMunicipalParque2unid_127,
                popuplayertitle: 'Próprio Público Municipal - Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalParque2unid_127.png" /> Próprio Público Municipal - Parque (2 unid.)'
            });
var format_PrprioPblicoMunicipalPavilho1unid_128 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPavilho1unid_128 = format_PrprioPblicoMunicipalPavilho1unid_128.readFeatures(json_PrprioPblicoMunicipalPavilho1unid_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalPavilho1unid_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPavilho1unid_128.addFeatures(features_PrprioPblicoMunicipalPavilho1unid_128);
var lyr_PrprioPblicoMunicipalPavilho1unid_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPavilho1unid_128, 
                style: style_PrprioPblicoMunicipalPavilho1unid_128,
                popuplayertitle: 'Próprio Público Municipal - Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPavilho1unid_128.png" /> Próprio Público Municipal - Pavilhão (1 unid.)'
            });
var format_PrprioPblicoMunicipalPinacoteca1unid_129 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPinacoteca1unid_129 = format_PrprioPblicoMunicipalPinacoteca1unid_129.readFeatures(json_PrprioPblicoMunicipalPinacoteca1unid_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalPinacoteca1unid_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPinacoteca1unid_129.addFeatures(features_PrprioPblicoMunicipalPinacoteca1unid_129);
var lyr_PrprioPblicoMunicipalPinacoteca1unid_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPinacoteca1unid_129, 
                style: style_PrprioPblicoMunicipalPinacoteca1unid_129,
                popuplayertitle: 'Próprio Público Municipal - Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPinacoteca1unid_129.png" /> Próprio Público Municipal - Pinacoteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalPiscina1unid_130 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPiscina1unid_130 = format_PrprioPblicoMunicipalPiscina1unid_130.readFeatures(json_PrprioPblicoMunicipalPiscina1unid_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalPiscina1unid_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPiscina1unid_130.addFeatures(features_PrprioPblicoMunicipalPiscina1unid_130);
var lyr_PrprioPblicoMunicipalPiscina1unid_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPiscina1unid_130, 
                style: style_PrprioPblicoMunicipalPiscina1unid_130,
                popuplayertitle: 'Próprio Público Municipal - Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPiscina1unid_130.png" /> Próprio Público Municipal - Piscina (1 unid.)'
            });
var format_PrprioPblicoMunicipalPista1unid_131 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPista1unid_131 = format_PrprioPblicoMunicipalPista1unid_131.readFeatures(json_PrprioPblicoMunicipalPista1unid_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalPista1unid_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPista1unid_131.addFeatures(features_PrprioPblicoMunicipalPista1unid_131);
var lyr_PrprioPblicoMunicipalPista1unid_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPista1unid_131, 
                style: style_PrprioPblicoMunicipalPista1unid_131,
                popuplayertitle: 'Próprio Público Municipal - Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPista1unid_131.png" /> Próprio Público Municipal - Pista (1 unid.)'
            });
var format_PrprioPblicoMunicipalPraa3unid_132 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPraa3unid_132 = format_PrprioPblicoMunicipalPraa3unid_132.readFeatures(json_PrprioPblicoMunicipalPraa3unid_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalPraa3unid_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPraa3unid_132.addFeatures(features_PrprioPblicoMunicipalPraa3unid_132);
var lyr_PrprioPblicoMunicipalPraa3unid_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPraa3unid_132, 
                style: style_PrprioPblicoMunicipalPraa3unid_132,
                popuplayertitle: 'Próprio Público Municipal - Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPraa3unid_132.png" /> Próprio Público Municipal - Praça (3 unid.)'
            });
var format_PrprioPblicoMunicipalQuadra3unid_133 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalQuadra3unid_133 = format_PrprioPblicoMunicipalQuadra3unid_133.readFeatures(json_PrprioPblicoMunicipalQuadra3unid_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalQuadra3unid_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalQuadra3unid_133.addFeatures(features_PrprioPblicoMunicipalQuadra3unid_133);
var lyr_PrprioPblicoMunicipalQuadra3unid_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalQuadra3unid_133, 
                style: style_PrprioPblicoMunicipalQuadra3unid_133,
                popuplayertitle: 'Próprio Público Municipal - Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalQuadra3unid_133.png" /> Próprio Público Municipal - Quadra (3 unid.)'
            });
var format_PrprioPblicoMunicipalSecretaria1unid_134 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalSecretaria1unid_134 = format_PrprioPblicoMunicipalSecretaria1unid_134.readFeatures(json_PrprioPblicoMunicipalSecretaria1unid_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalSecretaria1unid_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalSecretaria1unid_134.addFeatures(features_PrprioPblicoMunicipalSecretaria1unid_134);
var lyr_PrprioPblicoMunicipalSecretaria1unid_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalSecretaria1unid_134, 
                style: style_PrprioPblicoMunicipalSecretaria1unid_134,
                popuplayertitle: 'Próprio Público Municipal - Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalSecretaria1unid_134.png" /> Próprio Público Municipal - Secretaria (1 unid.)'
            });
var format_PrprioPblicoMunicipalTeatro2unid_135 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalTeatro2unid_135 = format_PrprioPblicoMunicipalTeatro2unid_135.readFeatures(json_PrprioPblicoMunicipalTeatro2unid_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrprioPblicoMunicipalTeatro2unid_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalTeatro2unid_135.addFeatures(features_PrprioPblicoMunicipalTeatro2unid_135);
var lyr_PrprioPblicoMunicipalTeatro2unid_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalTeatro2unid_135, 
                style: style_PrprioPblicoMunicipalTeatro2unid_135,
                popuplayertitle: 'Próprio Público Municipal - Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalTeatro2unid_135.png" /> Próprio Público Municipal - Teatro (2 unid.)'
            });
var format_ParqueZumbidosPalmares_136 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_136 = format_ParqueZumbidosPalmares_136.readFeatures(json_ParqueZumbidosPalmares_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueZumbidosPalmares_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_136.addFeatures(features_ParqueZumbidosPalmares_136);
var lyr_ParqueZumbidosPalmares_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_136, 
                style: style_ParqueZumbidosPalmares_136,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_136.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_138 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_138 = format_AntigoAterrodasMaritacas_138.readFeatures(json_AntigoAterrodasMaritacas_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacas_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_138.addFeatures(features_AntigoAterrodasMaritacas_138);
var lyr_AntigoAterrodasMaritacas_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_138, 
                style: style_AntigoAterrodasMaritacas_138,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_138.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_142 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_142 = format_AntigoAterrodaFazendaMunicipal_142.readFeatures(json_AntigoAterrodaFazendaMunicipal_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipal_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_142.addFeatures(features_AntigoAterrodaFazendaMunicipal_142);
var lyr_AntigoAterrodaFazendaMunicipal_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_142, 
                style: style_AntigoAterrodaFazendaMunicipal_142,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_142.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_AoCivilPblica1unid_145 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_145 = format_AoCivilPblica1unid_145.readFeatures(json_AoCivilPblica1unid_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_145.addFeatures(features_AoCivilPblica1unid_145);
var lyr_AoCivilPblica1unid_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_145, 
                style: style_AoCivilPblica1unid_145,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_145.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_146 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_146 = format_AoCivilPblica1unid_146.readFeatures(json_AoCivilPblica1unid_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_146.addFeatures(features_AoCivilPblica1unid_146);
var lyr_AoCivilPblica1unid_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_146, 
                style: style_AoCivilPblica1unid_146,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_146.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_147 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_147 = format_CartaAnuncia20unid_147.readFeatures(json_CartaAnuncia20unid_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia20unid_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_147.addFeatures(features_CartaAnuncia20unid_147);
var lyr_CartaAnuncia20unid_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_147, 
                style: style_CartaAnuncia20unid_147,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_147.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_148 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_148 = format_CartaAnuncia19unid_148.readFeatures(json_CartaAnuncia19unid_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia19unid_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_148.addFeatures(features_CartaAnuncia19unid_148);
var lyr_CartaAnuncia19unid_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_148, 
                style: style_CartaAnuncia19unid_148,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_148.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_149 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_149 = format_PlantioVoluntrio1unid_149.readFeatures(json_PlantioVoluntrio1unid_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_149.addFeatures(features_PlantioVoluntrio1unid_149);
var lyr_PlantioVoluntrio1unid_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_149, 
                style: style_PlantioVoluntrio1unid_149,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_149.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_150 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_150 = format_PlantioVoluntrio1unid_150.readFeatures(json_PlantioVoluntrio1unid_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_150.addFeatures(features_PlantioVoluntrio1unid_150);
var lyr_PlantioVoluntrio1unid_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_150, 
                style: style_PlantioVoluntrio1unid_150,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_150.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_151 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_151 = format_TACMinistrioPblico9unid_151.readFeatures(json_TACMinistrioPblico9unid_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_151.addFeatures(features_TACMinistrioPblico9unid_151);
var lyr_TACMinistrioPblico9unid_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_151, 
                style: style_TACMinistrioPblico9unid_151,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_151.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_152 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_152 = format_TACMinistrioPblico9unid_152.readFeatures(json_TACMinistrioPblico9unid_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_152.addFeatures(features_TACMinistrioPblico9unid_152);
var lyr_TACMinistrioPblico9unid_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_152, 
                style: style_TACMinistrioPblico9unid_152,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_152.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_153 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_153 = format_TCRACETESB28unid_153.readFeatures(json_TCRACETESB28unid_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_153.addFeatures(features_TCRACETESB28unid_153);
var lyr_TCRACETESB28unid_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_153, 
                style: style_TCRACETESB28unid_153,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_153.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_154 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_154 = format_TCRACETESB28unid_154.readFeatures(json_TCRACETESB28unid_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_154.addFeatures(features_TCRACETESB28unid_154);
var lyr_TCRACETESB28unid_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_154, 
                style: style_TCRACETESB28unid_154,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_154.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal13unid_155 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_155 = format_TCRAMunicipal13unid_155.readFeatures(json_TCRAMunicipal13unid_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_155.addFeatures(features_TCRAMunicipal13unid_155);
var lyr_TCRAMunicipal13unid_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_155, 
                style: style_TCRAMunicipal13unid_155,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_155.png" /> TCRA Municipal (13 unid.)'
            });
var format_TCRAMunicipal13unid_156 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_156 = format_TCRAMunicipal13unid_156.readFeatures(json_TCRAMunicipal13unid_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_156.addFeatures(features_TCRAMunicipal13unid_156);
var lyr_TCRAMunicipal13unid_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_156, 
                style: style_TCRAMunicipal13unid_156,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_156.png" /> TCRA Municipal (13 unid.)'
            });
var format_TRPRLCETESB2unid_157 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_157 = format_TRPRLCETESB2unid_157.readFeatures(json_TRPRLCETESB2unid_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_157.addFeatures(features_TRPRLCETESB2unid_157);
var lyr_TRPRLCETESB2unid_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_157, 
                style: style_TRPRLCETESB2unid_157,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_157.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_158 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_158 = format_TRPRLCETESB2unid_158.readFeatures(json_TRPRLCETESB2unid_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_158.addFeatures(features_TRPRLCETESB2unid_158);
var lyr_TRPRLCETESB2unid_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_158, 
                style: style_TRPRLCETESB2unid_158,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_158.png" /> TRPRL CETESB (2 unid.)'
            });
var format_ARORemanescentesFlorestais_159 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_159 = format_ARORemanescentesFlorestais_159.readFeatures(json_ARORemanescentesFlorestais_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_159.addFeatures(features_ARORemanescentesFlorestais_159);
var lyr_ARORemanescentesFlorestais_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_159, 
                style: style_ARORemanescentesFlorestais_159,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_159.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_160 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_160 = format_AROreadeAmortecimento_160.readFeatures(json_AROreadeAmortecimento_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_160.addFeatures(features_AROreadeAmortecimento_160);
var lyr_AROreadeAmortecimento_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_160, 
                style: style_AROreadeAmortecimento_160,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_160.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_161 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_161 = format_AROFaixadeCuestas_161.readFeatures(json_AROFaixadeCuestas_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_161.addFeatures(features_AROFaixadeCuestas_161);
var lyr_AROFaixadeCuestas_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_161, 
                style: style_AROFaixadeCuestas_161,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_161.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_162 = new ol.format.GeoJSON();
var features_AROAPP_162 = format_AROAPP_162.readFeatures(json_AROAPP_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_162.addFeatures(features_AROAPP_162);
var lyr_AROAPP_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_162, 
                style: style_AROAPP_162,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_162.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_163 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_163 = format_ARAIncongrunciasemAPP_163.readFeatures(json_ARAIncongrunciasemAPP_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_163.addFeatures(features_ARAIncongrunciasemAPP_163);
var lyr_ARAIncongrunciasemAPP_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_163, 
                style: style_ARAIncongrunciasemAPP_163,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_163.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_164 = new ol.format.GeoJSON();
var features_ARAETELagoas_164 = format_ARAETELagoas_164.readFeatures(json_ARAETELagoas_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_164.addFeatures(features_ARAETELagoas_164);
var lyr_ARAETELagoas_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_164, 
                style: style_ARAETELagoas_164,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_164.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_165 = new ol.format.GeoJSON();
var features_ARAAterros_165 = format_ARAAterros_165.readFeatures(json_ARAAterros_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_165.addFeatures(features_ARAAterros_165);
var lyr_ARAAterros_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_165, 
                style: style_ARAAterros_165,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_165.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_166 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_166 = format_AODreaUrbanaConsolidada_166.readFeatures(json_AODreaUrbanaConsolidada_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_166.addFeatures(features_AODreaUrbanaConsolidada_166);
var lyr_AODreaUrbanaConsolidada_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_166, 
                style: style_AODreaUrbanaConsolidada_166,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_166.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_167 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_167 = format_AODBaixaDensidadeNvel3_167.readFeatures(json_AODBaixaDensidadeNvel3_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_167.addFeatures(features_AODBaixaDensidadeNvel3_167);
var lyr_AODBaixaDensidadeNvel3_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_167, 
                style: style_AODBaixaDensidadeNvel3_167,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_167.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_168 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_168 = format_AODBaixaDensidadeNvel2_168.readFeatures(json_AODBaixaDensidadeNvel2_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_168.addFeatures(features_AODBaixaDensidadeNvel2_168);
var lyr_AODBaixaDensidadeNvel2_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_168, 
                style: style_AODBaixaDensidadeNvel2_168,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_168.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_169 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_169 = format_AODBaixaDensidadeNvel1_169.readFeatures(json_AODBaixaDensidadeNvel1_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_169.addFeatures(features_AODBaixaDensidadeNvel1_169);
var lyr_AODBaixaDensidadeNvel1_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_169, 
                style: style_AODBaixaDensidadeNvel1_169,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_169.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_170 = new ol.format.GeoJSON();
var features_AODAUSFase2_170 = format_AODAUSFase2_170.readFeatures(json_AODAUSFase2_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_170.addFeatures(features_AODAUSFase2_170);
var lyr_AODAUSFase2_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_170, 
                style: style_AODAUSFase2_170,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_170.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_171 = new ol.format.GeoJSON();
var features_AODAUSFase1_171 = format_AODAUSFase1_171.readFeatures(json_AODAUSFase1_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_171.addFeatures(features_AODAUSFase1_171);
var lyr_AODAUSFase1_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_171, 
                style: style_AODAUSFase1_171,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_171.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_172 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_172 = format_LimitedaBaciadoRioCanoasLeiC4322024_172.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_172.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_172);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_172, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_172,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_172.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_173 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_173 = format_LimitedaBaciadoRioCanoasLeiC1002006_173.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_173.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_173);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_173, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_173,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_173.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_174 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_174 = format_DelimitaodaBaciadoRibeirodaOna_174.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_174.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_174);
var lyr_DelimitaodaBaciadoRibeirodaOna_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_174, 
                style: style_DelimitaodaBaciadoRibeirodaOna_174,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_174.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP1745unid_175 = new ol.format.GeoJSON();
var features_APP1745unid_175 = format_APP1745unid_175.readFeatures(json_APP1745unid_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP1745unid_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_175.addFeatures(features_APP1745unid_175);
var lyr_APP1745unid_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_175, 
                style: style_APP1745unid_175,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_175.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_176 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_176 = format_RiosDuplos84unid_176.readFeatures(json_RiosDuplos84unid_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos84unid_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_176.addFeatures(features_RiosDuplos84unid_176);
var lyr_RiosDuplos84unid_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_176, 
                style: style_RiosDuplos84unid_176,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_176.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_177 = new ol.format.GeoJSON();
var features_MassasDgua270unid_177 = format_MassasDgua270unid_177.readFeatures(json_MassasDgua270unid_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua270unid_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_177.addFeatures(features_MassasDgua270unid_177);
var lyr_MassasDgua270unid_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_177, 
                style: style_MassasDgua270unid_177,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_177.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_178 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_178 = format_RiosSimples1842unid_178.readFeatures(json_RiosSimples1842unid_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples1842unid_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_178.addFeatures(features_RiosSimples1842unid_178);
var lyr_RiosSimples1842unid_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_178, 
                style: style_RiosSimples1842unid_178,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_178.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_179 = new ol.format.GeoJSON();
var features_Nascentes821unid_179 = format_Nascentes821unid_179.readFeatures(json_Nascentes821unid_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes821unid_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_179.addFeatures(features_Nascentes821unid_179);
var lyr_Nascentes821unid_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_179, 
                style: style_Nascentes821unid_179,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_179.png" /> Nascentes (821 unid.)'
            });
var format_JardimZoobotnicoDelimitao_180 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_180 = format_JardimZoobotnicoDelimitao_180.readFeatures(json_JardimZoobotnicoDelimitao_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoDelimitao_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_180.addFeatures(features_JardimZoobotnicoDelimitao_180);
var lyr_JardimZoobotnicoDelimitao_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_180, 
                style: style_JardimZoobotnicoDelimitao_180,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_180.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_181 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_181 = format_JardimZoobotnicoTrajetos_181.readFeatures(json_JardimZoobotnicoTrajetos_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoTrajetos_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_181.addFeatures(features_JardimZoobotnicoTrajetos_181);
var lyr_JardimZoobotnicoTrajetos_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_181, 
                style: style_JardimZoobotnicoTrajetos_181,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_181.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_182 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_182 = format_JardimZoobotnicoPontosdeInteresse19unid_182.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_182.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_182);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_182, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_182,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_182.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_183 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_183 = format_ParquedosTrabalhadores_183.readFeatures(json_ParquedosTrabalhadores_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_183.addFeatures(features_ParquedosTrabalhadores_183);
var lyr_ParquedosTrabalhadores_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_183, 
                style: style_ParquedosTrabalhadores_183,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_183.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_184 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_184 = format_ParquedosTrabalhadores_184.readFeatures(json_ParquedosTrabalhadores_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_184.addFeatures(features_ParquedosTrabalhadores_184);
var lyr_ParquedosTrabalhadores_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_184, 
                style: style_ParquedosTrabalhadores_184,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_184.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_185 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_185 = format_ComplexoPoliesportivo_185.readFeatures(json_ComplexoPoliesportivo_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_185.addFeatures(features_ComplexoPoliesportivo_185);
var lyr_ComplexoPoliesportivo_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_185, 
                style: style_ComplexoPoliesportivo_185,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_185.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_186 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_186 = format_ComplexoPoliesportivo_186.readFeatures(json_ComplexoPoliesportivo_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_186.addFeatures(features_ComplexoPoliesportivo_186);
var lyr_ComplexoPoliesportivo_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_186, 
                style: style_ComplexoPoliesportivo_186,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_186.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_187 = new ol.format.GeoJSON();
var features_ParqueCaxambu_187 = format_ParqueCaxambu_187.readFeatures(json_ParqueCaxambu_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_187.addFeatures(features_ParqueCaxambu_187);
var lyr_ParqueCaxambu_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_187, 
                style: style_ParqueCaxambu_187,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_187.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_188 = new ol.format.GeoJSON();
var features_ParqueCaxambu_188 = format_ParqueCaxambu_188.readFeatures(json_ParqueCaxambu_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_188.addFeatures(features_ParqueCaxambu_188);
var lyr_ParqueCaxambu_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_188, 
                style: style_ParqueCaxambu_188,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_188.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_189 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_189 = format_ParquedeExposiesFernandoCosta_189.readFeatures(json_ParquedeExposiesFernandoCosta_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_189.addFeatures(features_ParquedeExposiesFernandoCosta_189);
var lyr_ParquedeExposiesFernandoCosta_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_189, 
                style: style_ParquedeExposiesFernandoCosta_189,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_189.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_190 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_190 = format_ParquedeExposiesFernandoCosta_190.readFeatures(json_ParquedeExposiesFernandoCosta_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_190.addFeatures(features_ParquedeExposiesFernandoCosta_190);
var lyr_ParquedeExposiesFernandoCosta_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_190, 
                style: style_ParquedeExposiesFernandoCosta_190,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_190.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_191 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_191 = format_ParqueAmbientalLuprcioTaveira_191.readFeatures(json_ParqueAmbientalLuprcioTaveira_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_191.addFeatures(features_ParqueAmbientalLuprcioTaveira_191);
var lyr_ParqueAmbientalLuprcioTaveira_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_191, 
                style: style_ParqueAmbientalLuprcioTaveira_191,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_191.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_192 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_192 = format_ParqueAmbientalLuprcioTaveira_192.readFeatures(json_ParqueAmbientalLuprcioTaveira_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_192.addFeatures(features_ParqueAmbientalLuprcioTaveira_192);
var lyr_ParqueAmbientalLuprcioTaveira_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_192, 
                style: style_ParqueAmbientalLuprcioTaveira_192,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_192.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_R01S01_193 = new ol.format.GeoJSON();
var features_R01S01_193 = format_R01S01_193.readFeatures(json_R01S01_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_193.addFeatures(features_R01S01_193);
var lyr_R01S01_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_193, 
                style: style_R01S01_193,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_193.png" /> R01S01'
            });
var format_R01S02_194 = new ol.format.GeoJSON();
var features_R01S02_194 = format_R01S02_194.readFeatures(json_R01S02_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_194.addFeatures(features_R01S02_194);
var lyr_R01S02_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_194, 
                style: style_R01S02_194,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_194.png" /> R01S02'
            });
var format_R01S03_195 = new ol.format.GeoJSON();
var features_R01S03_195 = format_R01S03_195.readFeatures(json_R01S03_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_195.addFeatures(features_R01S03_195);
var lyr_R01S03_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_195, 
                style: style_R01S03_195,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_195.png" /> R01S03'
            });
var format_R01S04_196 = new ol.format.GeoJSON();
var features_R01S04_196 = format_R01S04_196.readFeatures(json_R01S04_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_196.addFeatures(features_R01S04_196);
var lyr_R01S04_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_196, 
                style: style_R01S04_196,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_196.png" /> R01S04'
            });
var format_R01S05_197 = new ol.format.GeoJSON();
var features_R01S05_197 = format_R01S05_197.readFeatures(json_R01S05_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_197.addFeatures(features_R01S05_197);
var lyr_R01S05_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_197, 
                style: style_R01S05_197,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_197.png" /> R01S05'
            });
var format_R01S06_198 = new ol.format.GeoJSON();
var features_R01S06_198 = format_R01S06_198.readFeatures(json_R01S06_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_198.addFeatures(features_R01S06_198);
var lyr_R01S06_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_198, 
                style: style_R01S06_198,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_198.png" /> R01S06'
            });
var format_R01S07_199 = new ol.format.GeoJSON();
var features_R01S07_199 = format_R01S07_199.readFeatures(json_R01S07_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_199.addFeatures(features_R01S07_199);
var lyr_R01S07_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_199, 
                style: style_R01S07_199,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_199.png" /> R01S07'
            });
var format_R01S08_200 = new ol.format.GeoJSON();
var features_R01S08_200 = format_R01S08_200.readFeatures(json_R01S08_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_200.addFeatures(features_R01S08_200);
var lyr_R01S08_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_200, 
                style: style_R01S08_200,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_200.png" /> R01S08'
            });
var format_R02S01_201 = new ol.format.GeoJSON();
var features_R02S01_201 = format_R02S01_201.readFeatures(json_R02S01_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_201.addFeatures(features_R02S01_201);
var lyr_R02S01_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_201, 
                style: style_R02S01_201,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_201.png" /> R02S01'
            });
var format_R02S02_202 = new ol.format.GeoJSON();
var features_R02S02_202 = format_R02S02_202.readFeatures(json_R02S02_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_202.addFeatures(features_R02S02_202);
var lyr_R02S02_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_202, 
                style: style_R02S02_202,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_202.png" /> R02S02'
            });
var format_R02S03_203 = new ol.format.GeoJSON();
var features_R02S03_203 = format_R02S03_203.readFeatures(json_R02S03_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_203.addFeatures(features_R02S03_203);
var lyr_R02S03_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_203, 
                style: style_R02S03_203,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_203.png" /> R02S03'
            });
var format_R02S04_204 = new ol.format.GeoJSON();
var features_R02S04_204 = format_R02S04_204.readFeatures(json_R02S04_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_204.addFeatures(features_R02S04_204);
var lyr_R02S04_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_204, 
                style: style_R02S04_204,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_204.png" /> R02S04'
            });
var format_R02S05_205 = new ol.format.GeoJSON();
var features_R02S05_205 = format_R02S05_205.readFeatures(json_R02S05_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_205.addFeatures(features_R02S05_205);
var lyr_R02S05_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_205, 
                style: style_R02S05_205,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_205.png" /> R02S05'
            });
var format_R02S06_206 = new ol.format.GeoJSON();
var features_R02S06_206 = format_R02S06_206.readFeatures(json_R02S06_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_206.addFeatures(features_R02S06_206);
var lyr_R02S06_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_206, 
                style: style_R02S06_206,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_206.png" /> R02S06'
            });
var format_R02S07_207 = new ol.format.GeoJSON();
var features_R02S07_207 = format_R02S07_207.readFeatures(json_R02S07_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_207.addFeatures(features_R02S07_207);
var lyr_R02S07_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_207, 
                style: style_R02S07_207,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_207.png" /> R02S07'
            });
var format_R02S08_208 = new ol.format.GeoJSON();
var features_R02S08_208 = format_R02S08_208.readFeatures(json_R02S08_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_208.addFeatures(features_R02S08_208);
var lyr_R02S08_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_208, 
                style: style_R02S08_208,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_208.png" /> R02S08'
            });
var format_R03S01_209 = new ol.format.GeoJSON();
var features_R03S01_209 = format_R03S01_209.readFeatures(json_R03S01_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_209.addFeatures(features_R03S01_209);
var lyr_R03S01_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_209, 
                style: style_R03S01_209,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_209.png" /> R03S01'
            });
var format_R03S02_210 = new ol.format.GeoJSON();
var features_R03S02_210 = format_R03S02_210.readFeatures(json_R03S02_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_210.addFeatures(features_R03S02_210);
var lyr_R03S02_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_210, 
                style: style_R03S02_210,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_210.png" /> R03S02'
            });
var format_R03S03_211 = new ol.format.GeoJSON();
var features_R03S03_211 = format_R03S03_211.readFeatures(json_R03S03_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_211.addFeatures(features_R03S03_211);
var lyr_R03S03_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_211, 
                style: style_R03S03_211,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_211.png" /> R03S03'
            });
var format_R03S04_212 = new ol.format.GeoJSON();
var features_R03S04_212 = format_R03S04_212.readFeatures(json_R03S04_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_212.addFeatures(features_R03S04_212);
var lyr_R03S04_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_212, 
                style: style_R03S04_212,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_212.png" /> R03S04'
            });
var format_R03S05_213 = new ol.format.GeoJSON();
var features_R03S05_213 = format_R03S05_213.readFeatures(json_R03S05_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_213.addFeatures(features_R03S05_213);
var lyr_R03S05_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_213, 
                style: style_R03S05_213,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_213.png" /> R03S05'
            });
var format_R03S06_214 = new ol.format.GeoJSON();
var features_R03S06_214 = format_R03S06_214.readFeatures(json_R03S06_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_214.addFeatures(features_R03S06_214);
var lyr_R03S06_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_214, 
                style: style_R03S06_214,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_214.png" /> R03S06'
            });
var format_R03S07_215 = new ol.format.GeoJSON();
var features_R03S07_215 = format_R03S07_215.readFeatures(json_R03S07_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_215.addFeatures(features_R03S07_215);
var lyr_R03S07_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_215, 
                style: style_R03S07_215,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_215.png" /> R03S07'
            });
var format_R03S08_216 = new ol.format.GeoJSON();
var features_R03S08_216 = format_R03S08_216.readFeatures(json_R03S08_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_216.addFeatures(features_R03S08_216);
var lyr_R03S08_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_216, 
                style: style_R03S08_216,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_216.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraa292unid27354594m_217 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa292unid27354594m_217 = format_ProgramaAdoteUmaPraa292unid27354594m_217.readFeatures(json_ProgramaAdoteUmaPraa292unid27354594m_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa292unid27354594m_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa292unid27354594m_217.addFeatures(features_ProgramaAdoteUmaPraa292unid27354594m_217);
var lyr_ProgramaAdoteUmaPraa292unid27354594m_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa292unid27354594m_217, 
                style: style_ProgramaAdoteUmaPraa292unid27354594m_217,
                popuplayertitle: 'Programa Adote Uma Praça (292 unid. / 273545.94 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa292unid27354594m_217.png" /> Programa Adote Uma Praça (292 unid. / 273545.94 m²)'
            });
var format_ComPlacaDilu164unid17459463m_218 = new ol.format.GeoJSON();
var features_ComPlacaDilu164unid17459463m_218 = format_ComPlacaDilu164unid17459463m_218.readFeatures(json_ComPlacaDilu164unid17459463m_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaDilu164unid17459463m_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu164unid17459463m_218.addFeatures(features_ComPlacaDilu164unid17459463m_218);
var lyr_ComPlacaDilu164unid17459463m_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu164unid17459463m_218, 
                style: style_ComPlacaDilu164unid17459463m_218,
                popuplayertitle: 'Com Placa - Dilu  (164 unid. / 174594.63 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu164unid17459463m_218.png" /> Com Placa - Dilu  (164 unid. / 174594.63 m²)'
            });
var format_ComPlacaEgnaldo106unid8508013m_219 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo106unid8508013m_219 = format_ComPlacaEgnaldo106unid8508013m_219.readFeatures(json_ComPlacaEgnaldo106unid8508013m_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaEgnaldo106unid8508013m_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo106unid8508013m_219.addFeatures(features_ComPlacaEgnaldo106unid8508013m_219);
var lyr_ComPlacaEgnaldo106unid8508013m_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo106unid8508013m_219, 
                style: style_ComPlacaEgnaldo106unid8508013m_219,
                popuplayertitle: 'Com Placa - Egnaldo (106 unid. / 85080.13 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo106unid8508013m_219.png" /> Com Placa - Egnaldo (106 unid. / 85080.13 m²)'
            });
var format_SemPlacaDilu16unid774541m_220 = new ol.format.GeoJSON();
var features_SemPlacaDilu16unid774541m_220 = format_SemPlacaDilu16unid774541m_220.readFeatures(json_SemPlacaDilu16unid774541m_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaDilu16unid774541m_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu16unid774541m_220.addFeatures(features_SemPlacaDilu16unid774541m_220);
var lyr_SemPlacaDilu16unid774541m_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu16unid774541m_220, 
                style: style_SemPlacaDilu16unid774541m_220,
                popuplayertitle: 'Sem Placa - Dilu (16 unid. / 7745.41 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu16unid774541m_220.png" /> Sem Placa - Dilu (16 unid. / 7745.41 m²)'
            });
var format_SemPlacaEgnaldo5unid236283m_221 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo5unid236283m_221 = format_SemPlacaEgnaldo5unid236283m_221.readFeatures(json_SemPlacaEgnaldo5unid236283m_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaEgnaldo5unid236283m_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo5unid236283m_221.addFeatures(features_SemPlacaEgnaldo5unid236283m_221);
var lyr_SemPlacaEgnaldo5unid236283m_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo5unid236283m_221, 
                style: style_SemPlacaEgnaldo5unid236283m_221,
                popuplayertitle: 'Sem Placa - Egnaldo (5 unid. / 2362.83 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo5unid236283m_221.png" /> Sem Placa - Egnaldo (5 unid. / 2362.83 m²)'
            });
var format_LotesImvelPrivado56unid_222 = new ol.format.GeoJSON();
var features_LotesImvelPrivado56unid_222 = format_LotesImvelPrivado56unid_222.readFeatures(json_LotesImvelPrivado56unid_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesImvelPrivado56unid_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado56unid_222.addFeatures(features_LotesImvelPrivado56unid_222);
var lyr_LotesImvelPrivado56unid_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado56unid_222, 
                style: style_LotesImvelPrivado56unid_222,
                popuplayertitle: 'Lotes - Imóvel Privado (56 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado56unid_222.png" /> Lotes - Imóvel Privado (56 unid.)'
            });
var format_ImvelPblico114unid_223 = new ol.format.GeoJSON();
var features_ImvelPblico114unid_223 = format_ImvelPblico114unid_223.readFeatures(json_ImvelPblico114unid_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPblico114unid_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico114unid_223.addFeatures(features_ImvelPblico114unid_223);
var lyr_ImvelPblico114unid_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico114unid_223, 
                style: style_ImvelPblico114unid_223,
                popuplayertitle: 'Imóvel Público (114 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico114unid_223.png" /> Imóvel Público (114 unid.)'
            });
var format_ImvelPrivado56unid_224 = new ol.format.GeoJSON();
var features_ImvelPrivado56unid_224 = format_ImvelPrivado56unid_224.readFeatures(json_ImvelPrivado56unid_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPrivado56unid_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado56unid_224.addFeatures(features_ImvelPrivado56unid_224);
var lyr_ImvelPrivado56unid_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado56unid_224, 
                style: style_ImvelPrivado56unid_224,
                popuplayertitle: 'Imóvel Privado (56 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado56unid_224.png" /> Imóvel Privado (56 unid.)'
            });
var format_RodoviasEstaduais4unid_225 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_225 = format_RodoviasEstaduais4unid_225.readFeatures(json_RodoviasEstaduais4unid_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasEstaduais4unid_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_225.addFeatures(features_RodoviasEstaduais4unid_225);
var lyr_RodoviasEstaduais4unid_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_225, 
                style: style_RodoviasEstaduais4unid_225,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_225.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_226 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_226 = format_EstradasRuraisMunicipais34unid_226.readFeatures(json_EstradasRuraisMunicipais34unid_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstradasRuraisMunicipais34unid_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_226.addFeatures(features_EstradasRuraisMunicipais34unid_226);
var lyr_EstradasRuraisMunicipais34unid_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_226, 
                style: style_EstradasRuraisMunicipais34unid_226,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_226.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_227 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_227 = format_RodoviasMunicipais8unid_227.readFeatures(json_RodoviasMunicipais8unid_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasMunicipais8unid_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_227.addFeatures(features_RodoviasMunicipais8unid_227);
var lyr_RodoviasMunicipais8unid_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_227, 
                style: style_RodoviasMunicipais8unid_227,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_227.png" /> Rodovias Municipais (8 unid.)'
            });
var format_ResduosInservveis4unid_228 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_228 = format_ResduosInservveis4unid_228.readFeatures(json_ResduosInservveis4unid_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosInservveis4unid_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_228.addFeatures(features_ResduosInservveis4unid_228);
var lyr_ResduosInservveis4unid_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_228, 
                style: style_ResduosInservveis4unid_228,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_228.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_ResduosReciclveis15unid_229 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_229 = format_ResduosReciclveis15unid_229.readFeatures(json_ResduosReciclveis15unid_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosReciclveis15unid_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_229.addFeatures(features_ResduosReciclveis15unid_229);
var lyr_ResduosReciclveis15unid_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_229, 
                style: style_ResduosReciclveis15unid_229,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_229.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosEletrnicos2unid_230 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_230 = format_ResduosEletrnicos2unid_230.readFeatures(json_ResduosEletrnicos2unid_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosEletrnicos2unid_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_230.addFeatures(features_ResduosEletrnicos2unid_230);
var lyr_ResduosEletrnicos2unid_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_230, 
                style: style_ResduosEletrnicos2unid_230,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_230.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosdeCouro1unid_231 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_231 = format_ResduosdeCouro1unid_231.readFeatures(json_ResduosdeCouro1unid_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeCouro1unid_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_231.addFeatures(features_ResduosdeCouro1unid_231);
var lyr_ResduosdeCouro1unid_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_231, 
                style: style_ResduosdeCouro1unid_231,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_231.png" /> Resíduos de Couro (1 unid.)'
            });
var format_Lmpadas4unid_232 = new ol.format.GeoJSON();
var features_Lmpadas4unid_232 = format_Lmpadas4unid_232.readFeatures(json_Lmpadas4unid_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmpadas4unid_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_232.addFeatures(features_Lmpadas4unid_232);
var lyr_Lmpadas4unid_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_232, 
                style: style_Lmpadas4unid_232,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_232.png" /> Lâmpadas (4 unid.)'
            });
var format_Pneus1unid_233 = new ol.format.GeoJSON();
var features_Pneus1unid_233 = format_Pneus1unid_233.readFeatures(json_Pneus1unid_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pneus1unid_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_233.addFeatures(features_Pneus1unid_233);
var lyr_Pneus1unid_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_233, 
                style: style_Pneus1unid_233,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_233.png" /> Pneus (1 unid.)'
            });
var format_PilhaseBaterias16unid_234 = new ol.format.GeoJSON();
var features_PilhaseBaterias16unid_234 = format_PilhaseBaterias16unid_234.readFeatures(json_PilhaseBaterias16unid_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilhaseBaterias16unid_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16unid_234.addFeatures(features_PilhaseBaterias16unid_234);
var lyr_PilhaseBaterias16unid_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16unid_234, 
                style: style_PilhaseBaterias16unid_234,
                popuplayertitle: 'Pilhas e Baterias (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16unid_234.png" /> Pilhas e Baterias (16 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_235 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_235 = format_ResduosdeServiosdeSade21unid_235.readFeatures(json_ResduosdeServiosdeSade21unid_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeServiosdeSade21unid_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_235.addFeatures(features_ResduosdeServiosdeSade21unid_235);
var lyr_ResduosdeServiosdeSade21unid_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_235, 
                style: style_ResduosdeServiosdeSade21unid_235,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_235.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_Madeiras1unid_236 = new ol.format.GeoJSON();
var features_Madeiras1unid_236 = format_Madeiras1unid_236.readFeatures(json_Madeiras1unid_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madeiras1unid_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_236.addFeatures(features_Madeiras1unid_236);
var lyr_Madeiras1unid_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_236, 
                style: style_Madeiras1unid_236,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_236.png" /> Madeiras (1 unid.)'
            });
var format_ResduosPerigosos1unid_237 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_237 = format_ResduosPerigosos1unid_237.readFeatures(json_ResduosPerigosos1unid_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosPerigosos1unid_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_237.addFeatures(features_ResduosPerigosos1unid_237);
var lyr_ResduosPerigosos1unid_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_237, 
                style: style_ResduosPerigosos1unid_237,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_237.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_238 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_238 = format_Latasdetintametlicasvazias2unid_238.readFeatures(json_Latasdetintametlicasvazias2unid_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latasdetintametlicasvazias2unid_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_238.addFeatures(features_Latasdetintametlicasvazias2unid_238);
var lyr_Latasdetintametlicasvazias2unid_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_238, 
                style: style_Latasdetintametlicasvazias2unid_238,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_238.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_leolubrificanteusado1unid_239 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_239 = format_leolubrificanteusado1unid_239.readFeatures(json_leolubrificanteusado1unid_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leolubrificanteusado1unid_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_239.addFeatures(features_leolubrificanteusado1unid_239);
var lyr_leolubrificanteusado1unid_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_239, 
                style: style_leolubrificanteusado1unid_239,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_239.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_leodecozinhausado2unid_240 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_240 = format_leodecozinhausado2unid_240.readFeatures(json_leodecozinhausado2unid_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leodecozinhausado2unid_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_240.addFeatures(features_leodecozinhausado2unid_240);
var lyr_leodecozinhausado2unid_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_240, 
                style: style_leodecozinhausado2unid_240,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_240.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_241 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_241 = format_Embalagensvaziasdeagrotxicos1unid_241.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_241.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_241);
var lyr_Embalagensvaziasdeagrotxicos1unid_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_241, 
                style: style_Embalagensvaziasdeagrotxicos1unid_241,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_241.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_ChapasdeRaioX1unid_242 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_242 = format_ChapasdeRaioX1unid_242.readFeatures(json_ChapasdeRaioX1unid_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapasdeRaioX1unid_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_242.addFeatures(features_ChapasdeRaioX1unid_242);
var lyr_ChapasdeRaioX1unid_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_242, 
                style: style_ChapasdeRaioX1unid_242,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_242.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_ResduosVerdes1unid_243 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_243 = format_ResduosVerdes1unid_243.readFeatures(json_ResduosVerdes1unid_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosVerdes1unid_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_243.addFeatures(features_ResduosVerdes1unid_243);
var lyr_ResduosVerdes1unid_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_243, 
                style: style_ResduosVerdes1unid_243,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_243.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_244 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_244 = format_ResduosdeConstruoCivil7unid_244.readFeatures(json_ResduosdeConstruoCivil7unid_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeConstruoCivil7unid_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_244.addFeatures(features_ResduosdeConstruoCivil7unid_244);
var lyr_ResduosdeConstruoCivil7unid_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_244, 
                style: style_ResduosdeConstruoCivil7unid_244,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_244.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_Gesso1unid_245 = new ol.format.GeoJSON();
var features_Gesso1unid_245 = format_Gesso1unid_245.readFeatures(json_Gesso1unid_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gesso1unid_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_245.addFeatures(features_Gesso1unid_245);
var lyr_Gesso1unid_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_245, 
                style: style_Gesso1unid_245,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_245.png" /> Gesso (1 unid.)'
            });
var format_Contineres286unid_246 = new ol.format.GeoJSON();
var features_Contineres286unid_246 = format_Contineres286unid_246.readFeatures(json_Contineres286unid_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286unid_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_246.addFeatures(features_Contineres286unid_246);
var lyr_Contineres286unid_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_246, 
                style: style_Contineres286unid_246,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_246.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte8unid_247 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_247 = format_rvoreImuneaoCorte8unid_247.readFeatures(json_rvoreImuneaoCorte8unid_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8unid_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_247.addFeatures(features_rvoreImuneaoCorte8unid_247);
var lyr_rvoreImuneaoCorte8unid_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_247, 
                style: style_rvoreImuneaoCorte8unid_247,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_247.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_248 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_248 = format_LocaisdeDifcilAcessoereasRurais20unid_248.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_248.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_248);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_248, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_248,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_248.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var format_AcademiasaoArLivre84unid_249 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_249 = format_AcademiasaoArLivre84unid_249.readFeatures(json_AcademiasaoArLivre84unid_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcademiasaoArLivre84unid_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_249.addFeatures(features_AcademiasaoArLivre84unid_249);
var lyr_AcademiasaoArLivre84unid_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_249, 
                style: style_AcademiasaoArLivre84unid_249,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_249.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Voorocas26unid_250 = new ol.format.GeoJSON();
var features_Voorocas26unid_250 = format_Voorocas26unid_250.readFeatures(json_Voorocas26unid_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voorocas26unid_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_250.addFeatures(features_Voorocas26unid_250);
var lyr_Voorocas26unid_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_250, 
                style: style_Voorocas26unid_250,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_250.png" /> Voçorocas (26 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosInservveis4unid_228,lyr_ResduosReciclveis15unid_229,lyr_ResduosEletrnicos2unid_230,lyr_ResduosdeCouro1unid_231,lyr_Lmpadas4unid_232,lyr_Pneus1unid_233,lyr_PilhaseBaterias16unid_234,lyr_ResduosdeServiosdeSade21unid_235,lyr_Madeiras1unid_236,lyr_ResduosPerigosos1unid_237,lyr_Latasdetintametlicasvazias2unid_238,lyr_leolubrificanteusado1unid_239,lyr_leodecozinhausado2unid_240,lyr_Embalagensvaziasdeagrotxicos1unid_241,lyr_ChapasdeRaioX1unid_242,lyr_ResduosVerdes1unid_243,lyr_ResduosdeConstruoCivil7unid_244,lyr_Gesso1unid_245,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_225,lyr_EstradasRuraisMunicipais34unid_226,lyr_RodoviasMunicipais8unid_227,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado56unid_222,lyr_ImvelPblico114unid_223,lyr_ImvelPrivado56unid_224,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa292unid27354594m_217,lyr_ComPlacaDilu164unid17459463m_218,lyr_ComPlacaEgnaldo106unid8508013m_219,lyr_SemPlacaDilu16unid774541m_220,lyr_SemPlacaEgnaldo5unid236283m_221,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_193,lyr_R01S02_194,lyr_R01S03_195,lyr_R01S04_196,lyr_R01S05_197,lyr_R01S06_198,lyr_R01S07_199,lyr_R01S08_200,lyr_R02S01_201,lyr_R02S02_202,lyr_R02S03_203,lyr_R02S04_204,lyr_R02S05_205,lyr_R02S06_206,lyr_R02S07_207,lyr_R02S08_208,lyr_R03S01_209,lyr_R03S02_210,lyr_R03S03_211,lyr_R03S04_212,lyr_R03S05_213,lyr_R03S06_214,lyr_R03S07_215,lyr_R03S08_216,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_180,lyr_JardimZoobotnicoTrajetos_181,lyr_JardimZoobotnicoPontosdeInteresse19unid_182,lyr_ParquedosTrabalhadores_183,lyr_ParquedosTrabalhadores_184,lyr_ComplexoPoliesportivo_185,lyr_ComplexoPoliesportivo_186,lyr_ParqueCaxambu_187,lyr_ParqueCaxambu_188,lyr_ParquedeExposiesFernandoCosta_189,lyr_ParquedeExposiesFernandoCosta_190,lyr_ParqueAmbientalLuprcioTaveira_191,lyr_ParqueAmbientalLuprcioTaveira_192,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_175,lyr_RiosDuplos84unid_176,lyr_MassasDgua270unid_177,lyr_RiosSimples1842unid_178,lyr_Nascentes821unid_179,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_159,lyr_AROreadeAmortecimento_160,lyr_AROFaixadeCuestas_161,lyr_AROAPP_162,lyr_ARAIncongrunciasemAPP_163,lyr_ARAETELagoas_164,lyr_ARAAterros_165,lyr_AODreaUrbanaConsolidada_166,lyr_AODBaixaDensidadeNvel3_167,lyr_AODBaixaDensidadeNvel2_168,lyr_AODBaixaDensidadeNvel1_169,lyr_AODAUSFase2_170,lyr_AODAUSFase1_171,lyr_LimitedaBaciadoRioCanoasLeiC4322024_172,lyr_LimitedaBaciadoRioCanoasLeiC1002006_173,lyr_DelimitaodaBaciadoRibeirodaOna_174,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_145,lyr_AoCivilPblica1unid_146,lyr_CartaAnuncia20unid_147,lyr_CartaAnuncia19unid_148,lyr_PlantioVoluntrio1unid_149,lyr_PlantioVoluntrio1unid_150,lyr_TACMinistrioPblico9unid_151,lyr_TACMinistrioPblico9unid_152,lyr_TCRACETESB28unid_153,lyr_TCRACETESB28unid_154,lyr_TCRAMunicipal13unid_155,lyr_TCRAMunicipal13unid_156,lyr_TRPRLCETESB2unid_157,lyr_TRPRLCETESB2unid_158,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_136,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137,lyr_AntigoAterrodasMaritacas_138,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141,lyr_AntigoAterrodaFazendaMunicipal_142,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalArena1unid_117,lyr_PrprioPblicoMunicipalBiblioteca1unid_118,lyr_PrprioPblicoMunicipalCampo18unid_119,lyr_PrprioPblicoMunicipalCasa1unid_120,lyr_PrprioPblicoMunicipalCentro4unid_121,lyr_PrprioPblicoMunicipalCEPEL15unid_122,lyr_PrprioPblicoMunicipalConjunto4unid_123,lyr_PrprioPblicoMunicipalEstadio1unid_124,lyr_PrprioPblicoMunicipalGinsio5unid_125,lyr_PrprioPblicoMunicipalMuseu2unid_126,lyr_PrprioPblicoMunicipalParque2unid_127,lyr_PrprioPblicoMunicipalPavilho1unid_128,lyr_PrprioPblicoMunicipalPinacoteca1unid_129,lyr_PrprioPblicoMunicipalPiscina1unid_130,lyr_PrprioPblicoMunicipalPista1unid_131,lyr_PrprioPblicoMunicipalPraa3unid_132,lyr_PrprioPblicoMunicipalQuadra3unid_133,lyr_PrprioPblicoMunicipalSecretaria1unid_134,lyr_PrprioPblicoMunicipalTeatro2unid_135,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmpreendimentoResidencialPousoAlegre_30,lyr_EmpreendimentoResidencialPousoAlegre_31,lyr_EmpreendimentoResidencialAltodaFazenda_32,lyr_EmpreendimentoResidencialAltodaFazenda_33,lyr_EmpreendimentoVilaDorata_34,lyr_EmpreendimentoVilaDorata_35,lyr_EmpreendimentoResidencialMarioTasso_36,lyr_EmpreendimentoResidencialMarioTasso_37,lyr_EmpreendimentoResidenciaisVivenna_38,lyr_EmpreendimentoResidenciaisVivenna_39,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41,lyr_EmprendimentoElias_42,lyr_EmprendimentoElias_43,lyr_EmpreendimentoResidencialSoCarlosI_44,lyr_EmpreendimentoResidencialSoCarlosI_45,lyr_EmpreendimentoMonti_46,lyr_EmpreendimentoMonti_47,lyr_EmpreendimentoResidencialMoradadoBosque_48,lyr_EmpreendimentoResidencialMoradadoBosque_49,lyr_EmpreendimentoVittaAlvorada_50,lyr_EmpreendimentoVittaAlvorada_51,lyr_EmpreendimentoResidencialMarthaHelena_52,lyr_EmpreendimentoResidencialMarthaHelena_53,lyr_EmpreendimentoResidencialYasminTorres_54,lyr_EmpreendimentoResidencialYasminTorres_55,lyr_EmpreendimentoVittaSoVicente_56,lyr_EmpreendimentoVittaSoVicente_57,lyr_EmpreendimentoPalmeiraReal_58,lyr_EmpreendimentoPalmeiraReal_59,lyr_EmpreendimentoEssence_60,lyr_EmpreendimentoEssence_61,lyr_EmpreendimentoVersalhes_62,lyr_EmpreendimentoVersalhes_63,lyr_EmpreendimentoSonetto_64,lyr_EmpreendimentoSonetto_65,lyr_EmpreendimentoResidencialSantaIns_66,lyr_EmpreendimentoResidencialSantaIns_67,lyr_EmpreendimentoEdifcioSolNascente_68,lyr_EmpreendimentoEdifcioSolNascente_69,lyr_EmpreendimentoResidencialQuintadosOitis_70,lyr_EmpreendimentoResidencialQuintadosOitis_71,lyr_EmpreendimentoResidencialQuintadoSol_72,lyr_EmpreendimentoResidencialQuintadoSol_73,lyr_EmpreendimentoResidencialNairRetuciII_74,lyr_EmpreendimentoResidencialNairRetuciII_75,lyr_EmpreendimentoParquePalmeiraImperial_76,lyr_EmpreendimentoParquePalmeiraImperial_77,lyr_EmpreendimentoBordadaMata_78,lyr_EmpreendimentoBordadaMata_79,lyr_EmpreendimentoResidencialCidadeJardim_80,lyr_EmpreendimentoResidencialCidadeJardim_81,lyr_EmpreendimentoEdifcioResidencialHope_82,lyr_EmpreendimentoEdifcioResidencialHope_83,lyr_EmpreendimentoHorizResidence_84,lyr_EmpreendimentoHorizResidence_85,lyr_EmpreendimentoJardimFlora_86,lyr_EmpreendimentoJardimFlora_87,lyr_EmpreendimentoJardimHorizonte_88,lyr_EmpreendimentoJardimHorizonte_89,lyr_EmpreendimentoJardimMariaLuiza_90,lyr_EmpreendimentoJardimMariaLuiza_91,lyr_EmpreendimentoMontBlancResidence_92,lyr_EmpreendimentoMontBlancResidence_93,lyr_EmpreendimentoMoradadoVerdeII_94,lyr_EmpreendimentoMoradadoVerdeII_95,lyr_EmpreendimentoResicencialNairRetuci_96,lyr_EmpreendimentoResicencialNairRetuci_97,lyr_EmpreendimentoParagon_98,lyr_EmpreendimentoParagon_99,lyr_EmpreendimentoParqueVillaLobos_100,lyr_EmpreendimentoParqueVillaLobos_101,lyr_EmpreendimentoDaVinci_102,lyr_EmpreendimentoDaVinci_103,lyr_EmpreendimentoResidencialDomingosJardini_104,lyr_EmpreendimentoResidencialDomingosJardini_105,lyr_EmpreendimentoResidencialSantaF_106,lyr_EmpreendimentoResidencialSantaF_107,lyr_EmpreendimentoEdifcioRuadoSol_108,lyr_EmpreendimentoEdifcioRuadoSol_109,lyr_EmpreendimentoTorontoResidence_110,lyr_EmpreendimentoTorontoResidence_111,lyr_ServidoRamal138kVFranca4Guanabara_112,lyr_ServidoRamal138kVFranca4Guanabara_113,lyr_EmpreendimentosAprovado24unid_114,lyr_EmpreendimentosDiretriz4unid_115,lyr_EmpreendimentosPrvia7unid_116,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_21,lyr_LoteEMDEF10unid_22,lyr_Lote501unid13733803m_23,lyr_Lote501unid_24,lyr_APP168unid234615094m_25,lyr_readeUsoEspecial260unid274522821m_26,lyr_reaInstitucional238unid135805372m_27,lyr_reaPatrimonial33unid15807656m_28,lyr_reaVerde1989unid835038904m_29,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_RemanescentedaMatrcula11419_5.setVisible(false);lyr_ConjuntoHabitacional_6.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_7.setVisible(false);lyr_reaK_8.setVisible(false);lyr_reaJ_9.setVisible(false);lyr_reaI_10.setVisible(false);lyr_reaH_11.setVisible(false);lyr_reaG_12.setVisible(false);lyr_reaF_13.setVisible(false);lyr_reaE_14.setVisible(false);lyr_reaD_15.setVisible(false);lyr_reaC_16.setVisible(false);lyr_reaB_17.setVisible(false);lyr_reaA_18.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.setVisible(false);lyr_reaaseraverbadaPartedareaG_20.setVisible(false);lyr_LoteEMDEF10unid218783m_21.setVisible(false);lyr_LoteEMDEF10unid_22.setVisible(false);lyr_Lote501unid13733803m_23.setVisible(false);lyr_Lote501unid_24.setVisible(false);lyr_APP168unid234615094m_25.setVisible(false);lyr_readeUsoEspecial260unid274522821m_26.setVisible(false);lyr_reaInstitucional238unid135805372m_27.setVisible(false);lyr_reaPatrimonial33unid15807656m_28.setVisible(false);lyr_reaVerde1989unid835038904m_29.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_30.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_31.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_32.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_33.setVisible(false);lyr_EmpreendimentoVilaDorata_34.setVisible(false);lyr_EmpreendimentoVilaDorata_35.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_36.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_37.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_38.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_39.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41.setVisible(false);lyr_EmprendimentoElias_42.setVisible(false);lyr_EmprendimentoElias_43.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_44.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_45.setVisible(false);lyr_EmpreendimentoMonti_46.setVisible(false);lyr_EmpreendimentoMonti_47.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_48.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_49.setVisible(false);lyr_EmpreendimentoVittaAlvorada_50.setVisible(false);lyr_EmpreendimentoVittaAlvorada_51.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_52.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_53.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_54.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_55.setVisible(false);lyr_EmpreendimentoVittaSoVicente_56.setVisible(false);lyr_EmpreendimentoVittaSoVicente_57.setVisible(false);lyr_EmpreendimentoPalmeiraReal_58.setVisible(false);lyr_EmpreendimentoPalmeiraReal_59.setVisible(false);lyr_EmpreendimentoEssence_60.setVisible(false);lyr_EmpreendimentoEssence_61.setVisible(false);lyr_EmpreendimentoVersalhes_62.setVisible(false);lyr_EmpreendimentoVersalhes_63.setVisible(false);lyr_EmpreendimentoSonetto_64.setVisible(false);lyr_EmpreendimentoSonetto_65.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_66.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_67.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_68.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_69.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_70.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_71.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_72.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_73.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_74.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_75.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_76.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_77.setVisible(false);lyr_EmpreendimentoBordadaMata_78.setVisible(false);lyr_EmpreendimentoBordadaMata_79.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_80.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_81.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_82.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_83.setVisible(false);lyr_EmpreendimentoHorizResidence_84.setVisible(false);lyr_EmpreendimentoHorizResidence_85.setVisible(false);lyr_EmpreendimentoJardimFlora_86.setVisible(false);lyr_EmpreendimentoJardimFlora_87.setVisible(false);lyr_EmpreendimentoJardimHorizonte_88.setVisible(false);lyr_EmpreendimentoJardimHorizonte_89.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_90.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_91.setVisible(false);lyr_EmpreendimentoMontBlancResidence_92.setVisible(false);lyr_EmpreendimentoMontBlancResidence_93.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_94.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_95.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_96.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_97.setVisible(false);lyr_EmpreendimentoParagon_98.setVisible(false);lyr_EmpreendimentoParagon_99.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_100.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_101.setVisible(false);lyr_EmpreendimentoDaVinci_102.setVisible(false);lyr_EmpreendimentoDaVinci_103.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_104.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_105.setVisible(false);lyr_EmpreendimentoResidencialSantaF_106.setVisible(false);lyr_EmpreendimentoResidencialSantaF_107.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_108.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_109.setVisible(false);lyr_EmpreendimentoTorontoResidence_110.setVisible(false);lyr_EmpreendimentoTorontoResidence_111.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_112.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_113.setVisible(false);lyr_EmpreendimentosAprovado24unid_114.setVisible(false);lyr_EmpreendimentosDiretriz4unid_115.setVisible(false);lyr_EmpreendimentosPrvia7unid_116.setVisible(false);lyr_PrprioPblicoMunicipalArena1unid_117.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_118.setVisible(false);lyr_PrprioPblicoMunicipalCampo18unid_119.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_120.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_121.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL15unid_122.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_123.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_124.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_125.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_126.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_127.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_128.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_129.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_130.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_131.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_132.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_133.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_134.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_135.setVisible(false);lyr_ParqueZumbidosPalmares_136.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.setVisible(false);lyr_AntigoAterrodasMaritacas_138.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_142.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.setVisible(false);lyr_AoCivilPblica1unid_145.setVisible(false);lyr_AoCivilPblica1unid_146.setVisible(false);lyr_CartaAnuncia20unid_147.setVisible(false);lyr_CartaAnuncia19unid_148.setVisible(false);lyr_PlantioVoluntrio1unid_149.setVisible(false);lyr_PlantioVoluntrio1unid_150.setVisible(false);lyr_TACMinistrioPblico9unid_151.setVisible(false);lyr_TACMinistrioPblico9unid_152.setVisible(false);lyr_TCRACETESB28unid_153.setVisible(false);lyr_TCRACETESB28unid_154.setVisible(false);lyr_TCRAMunicipal13unid_155.setVisible(false);lyr_TCRAMunicipal13unid_156.setVisible(false);lyr_TRPRLCETESB2unid_157.setVisible(false);lyr_TRPRLCETESB2unid_158.setVisible(false);lyr_ARORemanescentesFlorestais_159.setVisible(false);lyr_AROreadeAmortecimento_160.setVisible(false);lyr_AROFaixadeCuestas_161.setVisible(false);lyr_AROAPP_162.setVisible(false);lyr_ARAIncongrunciasemAPP_163.setVisible(false);lyr_ARAETELagoas_164.setVisible(false);lyr_ARAAterros_165.setVisible(false);lyr_AODreaUrbanaConsolidada_166.setVisible(false);lyr_AODBaixaDensidadeNvel3_167.setVisible(false);lyr_AODBaixaDensidadeNvel2_168.setVisible(false);lyr_AODBaixaDensidadeNvel1_169.setVisible(false);lyr_AODAUSFase2_170.setVisible(false);lyr_AODAUSFase1_171.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_172.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_173.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_174.setVisible(false);lyr_APP1745unid_175.setVisible(false);lyr_RiosDuplos84unid_176.setVisible(false);lyr_MassasDgua270unid_177.setVisible(false);lyr_RiosSimples1842unid_178.setVisible(false);lyr_Nascentes821unid_179.setVisible(false);lyr_JardimZoobotnicoDelimitao_180.setVisible(false);lyr_JardimZoobotnicoTrajetos_181.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_182.setVisible(false);lyr_ParquedosTrabalhadores_183.setVisible(false);lyr_ParquedosTrabalhadores_184.setVisible(false);lyr_ComplexoPoliesportivo_185.setVisible(false);lyr_ComplexoPoliesportivo_186.setVisible(false);lyr_ParqueCaxambu_187.setVisible(false);lyr_ParqueCaxambu_188.setVisible(false);lyr_ParquedeExposiesFernandoCosta_189.setVisible(false);lyr_ParquedeExposiesFernandoCosta_190.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_191.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_192.setVisible(false);lyr_R01S01_193.setVisible(false);lyr_R01S02_194.setVisible(false);lyr_R01S03_195.setVisible(false);lyr_R01S04_196.setVisible(false);lyr_R01S05_197.setVisible(false);lyr_R01S06_198.setVisible(false);lyr_R01S07_199.setVisible(false);lyr_R01S08_200.setVisible(false);lyr_R02S01_201.setVisible(false);lyr_R02S02_202.setVisible(false);lyr_R02S03_203.setVisible(false);lyr_R02S04_204.setVisible(false);lyr_R02S05_205.setVisible(false);lyr_R02S06_206.setVisible(false);lyr_R02S07_207.setVisible(false);lyr_R02S08_208.setVisible(false);lyr_R03S01_209.setVisible(false);lyr_R03S02_210.setVisible(false);lyr_R03S03_211.setVisible(false);lyr_R03S04_212.setVisible(false);lyr_R03S05_213.setVisible(false);lyr_R03S06_214.setVisible(false);lyr_R03S07_215.setVisible(false);lyr_R03S08_216.setVisible(false);lyr_ProgramaAdoteUmaPraa292unid27354594m_217.setVisible(false);lyr_ComPlacaDilu164unid17459463m_218.setVisible(false);lyr_ComPlacaEgnaldo106unid8508013m_219.setVisible(false);lyr_SemPlacaDilu16unid774541m_220.setVisible(false);lyr_SemPlacaEgnaldo5unid236283m_221.setVisible(false);lyr_LotesImvelPrivado56unid_222.setVisible(false);lyr_ImvelPblico114unid_223.setVisible(false);lyr_ImvelPrivado56unid_224.setVisible(false);lyr_RodoviasEstaduais4unid_225.setVisible(false);lyr_EstradasRuraisMunicipais34unid_226.setVisible(false);lyr_RodoviasMunicipais8unid_227.setVisible(false);lyr_ResduosInservveis4unid_228.setVisible(false);lyr_ResduosReciclveis15unid_229.setVisible(false);lyr_ResduosEletrnicos2unid_230.setVisible(false);lyr_ResduosdeCouro1unid_231.setVisible(false);lyr_Lmpadas4unid_232.setVisible(false);lyr_Pneus1unid_233.setVisible(false);lyr_PilhaseBaterias16unid_234.setVisible(false);lyr_ResduosdeServiosdeSade21unid_235.setVisible(false);lyr_Madeiras1unid_236.setVisible(false);lyr_ResduosPerigosos1unid_237.setVisible(false);lyr_Latasdetintametlicasvazias2unid_238.setVisible(false);lyr_leolubrificanteusado1unid_239.setVisible(false);lyr_leodecozinhausado2unid_240.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_241.setVisible(false);lyr_ChapasdeRaioX1unid_242.setVisible(false);lyr_ResduosVerdes1unid_243.setVisible(false);lyr_ResduosdeConstruoCivil7unid_244.setVisible(false);lyr_Gesso1unid_245.setVisible(false);lyr_Contineres286unid_246.setVisible(false);lyr_rvoreImuneaoCorte8unid_247.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_248.setVisible(false);lyr_AcademiasaoArLivre84unid_249.setVisible(false);lyr_Voorocas26unid_250.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_SecretariadeEsporteeCultura,group_GerenciamentodereasContaminadas,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_ParquesdeFranca,group_SubregiesContratoESSE,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_RodoviaseEstradas,group_DescarteCorretodeResduos,lyr_Contineres286unid_246,lyr_rvoreImuneaoCorte8unid_247,lyr_LocaisdeDifcilAcessoereasRurais20unid_248,lyr_AcademiasaoArLivre84unid_249,lyr_Voorocas26unid_250];
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
lyr_LoteEMDEF10unid218783m_21.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_LoteEMDEF10unid_22.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote501unid13733803m_23.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote501unid_24.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP168unid234615094m_25.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial260unid274522821m_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional238unid135805372m_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial33unid15807656m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaVerde1989unid835038904m_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_EmpreendimentoResidencialPousoAlegre_30.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_31.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_32.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_33.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoVilaDorata_34.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVilaDorata_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoVittaAlvorada_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_52.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoVittaSoVicente_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_65.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_77.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoBordadaMata_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_112.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_113.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado24unid_114.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', });
lyr_EmpreendimentosDiretriz4unid_115.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', });
lyr_EmpreendimentosPrvia7unid_116.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', });
lyr_PrprioPblicoMunicipalArena1unid_117.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_118.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCampo18unid_119.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCasa1unid_120.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCentro4unid_121.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCEPEL15unid_122.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalConjunto4unid_123.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalEstadio1unid_124.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalGinsio5unid_125.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalMuseu2unid_126.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalParque2unid_127.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPavilho1unid_128.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_129.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPiscina1unid_130.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPista1unid_131.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPraa3unid_132.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalQuadra3unid_133.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalSecretaria1unid_134.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalTeatro2unid_135.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_ParqueZumbidosPalmares_136.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_138.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_142.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_AoCivilPblica1unid_145.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_146.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_147.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_148.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_149.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_150.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_151.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_152.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_153.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_154.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal13unid_155.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal13unid_156.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_157.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_158.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_159.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_160.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_161.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_162.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_163.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_164.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_165.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_166.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_167.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_168.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_169.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_170.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_171.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_172.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_173.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_174.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP1745unid_175.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_176.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_177.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_178.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_179.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_JardimZoobotnicoDelimitao_180.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_181.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_182.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_183.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_184.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_185.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_186.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_187.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_188.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_189.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_190.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_191.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_192.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_R01S01_193.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_194.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_195.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_196.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_197.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_198.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_199.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_200.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_201.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_202.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_203.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_204.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_205.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_206.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_207.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_208.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_209.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_210.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_211.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_212.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_213.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_214.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_215.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_216.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_217.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu164unid17459463m_218.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_ComPlacaEgnaldo106unid8508013m_219.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_SemPlacaDilu16unid774541m_220.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_SemPlacaEgnaldo5unid236283m_221.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_LotesImvelPrivado56unid_222.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_ImvelPblico114unid_223.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', });
lyr_ImvelPrivado56unid_224.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', });
lyr_RodoviasEstaduais4unid_225.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_226.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_227.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_ResduosInservveis4unid_228.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_229.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_230.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_231.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_232.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_233.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16unid_234.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_235.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_236.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_237.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_238.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_239.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_240.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_241.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_242.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_243.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_244.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Gesso1unid_245.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_246.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_rvoreImuneaoCorte8unid_247.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_248.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_AcademiasaoArLivre84unid_249.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', });
lyr_Voorocas26unid_250.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
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
lyr_LoteEMDEF10unid218783m_21.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_22.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote501unid13733803m_23.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote501unid_24.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP168unid234615094m_25.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial260unid274522821m_26.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional238unid135805372m_27.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial33unid15807656m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaVerde1989unid835038904m_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_EmpreendimentoResidencialPousoAlegre_30.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_31.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_32.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_33.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoVilaDorata_34.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVilaDorata_35.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_42.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_43.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_44.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_45.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_47.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_49.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoVittaAlvorada_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_51.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_52.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_53.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_55.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoVittaSoVicente_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_57.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_59.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_63.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_65.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_67.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_69.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_71.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_77.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoBordadaMata_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_84.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_88.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_94.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_96.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_100.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_112.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_113.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado24unid_114.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz4unid_115.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', });
lyr_EmpreendimentosPrvia7unid_116.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', });
lyr_PrprioPblicoMunicipalArena1unid_117.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_118.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCampo18unid_119.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCasa1unid_120.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCentro4unid_121.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCEPEL15unid_122.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalConjunto4unid_123.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalEstadio1unid_124.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalGinsio5unid_125.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalMuseu2unid_126.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalParque2unid_127.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPavilho1unid_128.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_129.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPiscina1unid_130.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPista1unid_131.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPraa3unid_132.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalQuadra3unid_133.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalSecretaria1unid_134.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalTeatro2unid_135.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ParqueZumbidosPalmares_136.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_138.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_142.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AoCivilPblica1unid_145.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_146.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_147.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_148.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_149.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_150.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_151.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_152.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_153.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_154.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal13unid_155.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal13unid_156.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_157.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_158.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_ARORemanescentesFlorestais_159.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_160.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_161.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_162.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_163.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_164.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_165.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_166.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_167.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_168.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_169.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_170.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_171.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_172.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_173.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_174.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP1745unid_175.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_176.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_177.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_178.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_179.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_180.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_181.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_182.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_183.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_184.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_185.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_186.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_187.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_188.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_189.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_190.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_191.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_192.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_R01S01_193.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_194.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_195.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_196.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_197.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_198.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_199.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_200.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_201.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_202.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_203.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_204.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_205.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_206.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_207.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_208.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_209.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_210.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_211.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_212.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_213.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_214.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_215.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_216.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_217.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu164unid17459463m_218.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_ComPlacaEgnaldo106unid8508013m_219.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_SemPlacaDilu16unid774541m_220.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', });
lyr_SemPlacaEgnaldo5unid236283m_221.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_LotesImvelPrivado56unid_222.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_ImvelPblico114unid_223.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', });
lyr_ImvelPrivado56unid_224.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': '', 'processo_sms': '', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', });
lyr_RodoviasEstaduais4unid_225.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_226.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_227.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_ResduosInservveis4unid_228.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosReciclveis15unid_229.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_230.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1unid_231.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_232.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_233.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias16unid_234.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_235.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_236.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_237.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_238.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_239.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_240.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_241.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_242.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_243.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_244.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Gesso1unid_245.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Contineres286unid_246.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_247.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_248.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_249.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_Voorocas26unid_250.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
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
lyr_LoteEMDEF10unid218783m_21.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'no label', '1ª Semana': 'no label', '2ª Semana': 'no label', '3ª Semana': 'no label', '4ª Semana': 'no label', '5ª Semana': 'no label', 'Terceirização': 'no label', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_22.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote501unid13733803m_23.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote501unid_24.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP168unid234615094m_25.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial260unid274522821m_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional238unid135805372m_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15807656m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaVerde1989unid835038904m_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_30.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_31.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_32.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_33.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoVilaDorata_34.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVilaDorata_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoVittaAlvorada_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_52.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoVittaSoVicente_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_65.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_77.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoBordadaMata_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_112.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_113.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado24unid_114.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'hidden field', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'no label', });
lyr_EmpreendimentosDiretriz4unid_115.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'hidden field', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia7unid_116.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'hidden field', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalArena1unid_117.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_118.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCampo18unid_119.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCasa1unid_120.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCentro4unid_121.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCEPEL15unid_122.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalConjunto4unid_123.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalEstadio1unid_124.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalGinsio5unid_125.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalMuseu2unid_126.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalParque2unid_127.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPavilho1unid_128.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_129.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPiscina1unid_130.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPista1unid_131.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPraa3unid_132.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalQuadra3unid_133.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalSecretaria1unid_134.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalTeatro2unid_135.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_136.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_137.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_138.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_139.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_140.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_141.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_142.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_143.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_144.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_145.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_146.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_147.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_148.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_149.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_150.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_151.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_152.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_153.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_154.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_155.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_156.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_157.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_158.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_159.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_160.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_161.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_162.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_163.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_164.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_165.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_166.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_167.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_168.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_169.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_170.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_171.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_172.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_173.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_174.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP1745unid_175.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos84unid_176.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_177.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_178.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_179.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_180.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_181.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_182.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_183.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_184.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_185.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_186.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_187.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_188.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_189.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_190.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_191.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_192.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_R01S01_193.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_194.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_195.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_196.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_197.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_198.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_199.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_200.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_201.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_202.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_203.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_204.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_205.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_206.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_207.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_208.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_209.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_210.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_211.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_212.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_213.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_214.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_215.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_216.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa292unid27354594m_217.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu164unid17459463m_218.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo106unid8508013m_219.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_SemPlacaDilu16unid774541m_220.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo5unid236283m_221.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_LotesImvelPrivado56unid_222.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_ImvelPblico114unid_223.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'no label', });
lyr_ImvelPrivado56unid_224.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_225.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_226.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_227.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_228.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_229.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_230.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_231.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_232.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_233.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16unid_234.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_235.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_236.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_237.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_238.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_239.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_240.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_241.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_242.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_243.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_244.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Gesso1unid_245.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_246.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_247.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_248.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_249.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_Voorocas26unid_250.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_250.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});