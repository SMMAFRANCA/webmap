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
var format_reaVerde1911unid803552878m_25 = new ol.format.GeoJSON();
var features_reaVerde1911unid803552878m_25 = format_reaVerde1911unid803552878m_25.readFeatures(json_reaVerde1911unid803552878m_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaVerde1911unid803552878m_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1911unid803552878m_25.addFeatures(features_reaVerde1911unid803552878m_25);
var lyr_reaVerde1911unid803552878m_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1911unid803552878m_25, 
                style: style_reaVerde1911unid803552878m_25,
                popuplayertitle: 'Área Verde (1911 unid. / 8035528.78 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1911unid803552878m_25.png" /> Área Verde (1911 unid. / 8035528.78 m²)'
            });
var format_reaPatrimonial31unid14616301m_26 = new ol.format.GeoJSON();
var features_reaPatrimonial31unid14616301m_26 = format_reaPatrimonial31unid14616301m_26.readFeatures(json_reaPatrimonial31unid14616301m_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaPatrimonial31unid14616301m_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial31unid14616301m_26.addFeatures(features_reaPatrimonial31unid14616301m_26);
var lyr_reaPatrimonial31unid14616301m_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial31unid14616301m_26, 
                style: style_reaPatrimonial31unid14616301m_26,
                popuplayertitle: 'Área Patrimonial (31 unid. / 146163.01 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial31unid14616301m_26.png" /> Área Patrimonial (31 unid. / 146163.01 m²)'
            });
var format_reaInstitucional226unid132084179m_27 = new ol.format.GeoJSON();
var features_reaInstitucional226unid132084179m_27 = format_reaInstitucional226unid132084179m_27.readFeatures(json_reaInstitucional226unid132084179m_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaInstitucional226unid132084179m_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional226unid132084179m_27.addFeatures(features_reaInstitucional226unid132084179m_27);
var lyr_reaInstitucional226unid132084179m_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional226unid132084179m_27, 
                style: style_reaInstitucional226unid132084179m_27,
                popuplayertitle: 'Área Institucional (226 unid. / 1320841.79 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional226unid132084179m_27.png" /> Área Institucional (226 unid. / 1320841.79 m²)'
            });
var format_readeUsoEspecial337unid311074946m_28 = new ol.format.GeoJSON();
var features_readeUsoEspecial337unid311074946m_28 = format_readeUsoEspecial337unid311074946m_28.readFeatures(json_readeUsoEspecial337unid311074946m_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeUsoEspecial337unid311074946m_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial337unid311074946m_28.addFeatures(features_readeUsoEspecial337unid311074946m_28);
var lyr_readeUsoEspecial337unid311074946m_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial337unid311074946m_28, 
                style: style_readeUsoEspecial337unid311074946m_28,
                popuplayertitle: 'Área de Uso Especial (337 unid. / 3110749.46 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial337unid311074946m_28.png" /> Área de Uso Especial (337 unid. / 3110749.46 m²)'
            });
var format_APP164unid230278996m_29 = new ol.format.GeoJSON();
var features_APP164unid230278996m_29 = format_APP164unid230278996m_29.readFeatures(json_APP164unid230278996m_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP164unid230278996m_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP164unid230278996m_29.addFeatures(features_APP164unid230278996m_29);
var lyr_APP164unid230278996m_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP164unid230278996m_29, 
                style: style_APP164unid230278996m_29,
                popuplayertitle: 'APP (164 unid. / 2302789.96 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP164unid230278996m_29.png" /> APP (164 unid. / 2302789.96 m²)'
            });
var format_ParqueZumbidosPalmares_30 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_30 = format_ParqueZumbidosPalmares_30.readFeatures(json_ParqueZumbidosPalmares_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueZumbidosPalmares_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_30.addFeatures(features_ParqueZumbidosPalmares_30);
var lyr_ParqueZumbidosPalmares_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_30, 
                style: style_ParqueZumbidosPalmares_30,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_30.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_32 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_32 = format_AntigoAterrodasMaritacas_32.readFeatures(json_AntigoAterrodasMaritacas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_32.addFeatures(features_AntigoAterrodasMaritacas_32);
var lyr_AntigoAterrodasMaritacas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_32, 
                style: style_AntigoAterrodasMaritacas_32,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_32.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
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
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_36 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_36 = format_AntigoAterrodaFazendaMunicipal_36.readFeatures(json_AntigoAterrodaFazendaMunicipal_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipal_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_36.addFeatures(features_AntigoAterrodaFazendaMunicipal_36);
var lyr_AntigoAterrodaFazendaMunicipal_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_36, 
                style: style_AntigoAterrodaFazendaMunicipal_36,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_36.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_AoCivilPblica1unid_39 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_39 = format_AoCivilPblica1unid_39.readFeatures(json_AoCivilPblica1unid_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_39.addFeatures(features_AoCivilPblica1unid_39);
var lyr_AoCivilPblica1unid_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_39, 
                style: style_AoCivilPblica1unid_39,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_39.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_40 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_40 = format_AoCivilPblica1unid_40.readFeatures(json_AoCivilPblica1unid_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AoCivilPblica1unid_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_40.addFeatures(features_AoCivilPblica1unid_40);
var lyr_AoCivilPblica1unid_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_40, 
                style: style_AoCivilPblica1unid_40,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_40.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_41 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_41 = format_CartaAnuncia20unid_41.readFeatures(json_CartaAnuncia20unid_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia20unid_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_41.addFeatures(features_CartaAnuncia20unid_41);
var lyr_CartaAnuncia20unid_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_41, 
                style: style_CartaAnuncia20unid_41,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_41.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_42 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_42 = format_CartaAnuncia19unid_42.readFeatures(json_CartaAnuncia19unid_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartaAnuncia19unid_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_42.addFeatures(features_CartaAnuncia19unid_42);
var lyr_CartaAnuncia19unid_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_42, 
                style: style_CartaAnuncia19unid_42,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_42.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_43 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_43 = format_PlantioVoluntrio1unid_43.readFeatures(json_PlantioVoluntrio1unid_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_43.addFeatures(features_PlantioVoluntrio1unid_43);
var lyr_PlantioVoluntrio1unid_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_43, 
                style: style_PlantioVoluntrio1unid_43,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_43.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_44 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_44 = format_PlantioVoluntrio1unid_44.readFeatures(json_PlantioVoluntrio1unid_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantioVoluntrio1unid_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_44.addFeatures(features_PlantioVoluntrio1unid_44);
var lyr_PlantioVoluntrio1unid_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_44, 
                style: style_PlantioVoluntrio1unid_44,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_44.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_45 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_45 = format_TACMinistrioPblico9unid_45.readFeatures(json_TACMinistrioPblico9unid_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_45.addFeatures(features_TACMinistrioPblico9unid_45);
var lyr_TACMinistrioPblico9unid_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_45, 
                style: style_TACMinistrioPblico9unid_45,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_45.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_46 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_46 = format_TACMinistrioPblico9unid_46.readFeatures(json_TACMinistrioPblico9unid_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TACMinistrioPblico9unid_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_46.addFeatures(features_TACMinistrioPblico9unid_46);
var lyr_TACMinistrioPblico9unid_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_46, 
                style: style_TACMinistrioPblico9unid_46,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_46.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_47 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_47 = format_TCRACETESB28unid_47.readFeatures(json_TCRACETESB28unid_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_47.addFeatures(features_TCRACETESB28unid_47);
var lyr_TCRACETESB28unid_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_47, 
                style: style_TCRACETESB28unid_47,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_47.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_48 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_48 = format_TCRACETESB28unid_48.readFeatures(json_TCRACETESB28unid_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRACETESB28unid_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_48.addFeatures(features_TCRACETESB28unid_48);
var lyr_TCRACETESB28unid_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_48, 
                style: style_TCRACETESB28unid_48,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_48.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal13unid_49 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_49 = format_TCRAMunicipal13unid_49.readFeatures(json_TCRAMunicipal13unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_49.addFeatures(features_TCRAMunicipal13unid_49);
var lyr_TCRAMunicipal13unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_49, 
                style: style_TCRAMunicipal13unid_49,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_49.png" /> TCRA Municipal (13 unid.)'
            });
var format_TCRAMunicipal13unid_50 = new ol.format.GeoJSON();
var features_TCRAMunicipal13unid_50 = format_TCRAMunicipal13unid_50.readFeatures(json_TCRAMunicipal13unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCRAMunicipal13unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal13unid_50.addFeatures(features_TCRAMunicipal13unid_50);
var lyr_TCRAMunicipal13unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal13unid_50, 
                style: style_TCRAMunicipal13unid_50,
                popuplayertitle: 'TCRA Municipal (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal13unid_50.png" /> TCRA Municipal (13 unid.)'
            });
var format_TRPRLCETESB2unid_51 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_51 = format_TRPRLCETESB2unid_51.readFeatures(json_TRPRLCETESB2unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_51.addFeatures(features_TRPRLCETESB2unid_51);
var lyr_TRPRLCETESB2unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_51, 
                style: style_TRPRLCETESB2unid_51,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_51.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_52 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_52 = format_TRPRLCETESB2unid_52.readFeatures(json_TRPRLCETESB2unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRPRLCETESB2unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_52.addFeatures(features_TRPRLCETESB2unid_52);
var lyr_TRPRLCETESB2unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_52, 
                style: style_TRPRLCETESB2unid_52,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_52.png" /> TRPRL CETESB (2 unid.)'
            });
var format_ARORemanescentesFlorestais_53 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_53 = format_ARORemanescentesFlorestais_53.readFeatures(json_ARORemanescentesFlorestais_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARORemanescentesFlorestais_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_53.addFeatures(features_ARORemanescentesFlorestais_53);
var lyr_ARORemanescentesFlorestais_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_53, 
                style: style_ARORemanescentesFlorestais_53,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_53.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_54 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_54 = format_AROreadeAmortecimento_54.readFeatures(json_AROreadeAmortecimento_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROreadeAmortecimento_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_54.addFeatures(features_AROreadeAmortecimento_54);
var lyr_AROreadeAmortecimento_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_54, 
                style: style_AROreadeAmortecimento_54,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_54.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_55 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_55 = format_AROFaixadeCuestas_55.readFeatures(json_AROFaixadeCuestas_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROFaixadeCuestas_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_55.addFeatures(features_AROFaixadeCuestas_55);
var lyr_AROFaixadeCuestas_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_55, 
                style: style_AROFaixadeCuestas_55,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_55.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_56 = new ol.format.GeoJSON();
var features_AROAPP_56 = format_AROAPP_56.readFeatures(json_AROAPP_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AROAPP_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_56.addFeatures(features_AROAPP_56);
var lyr_AROAPP_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_56, 
                style: style_AROAPP_56,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_56.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_57 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_57 = format_ARAIncongrunciasemAPP_57.readFeatures(json_ARAIncongrunciasemAPP_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAIncongrunciasemAPP_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_57.addFeatures(features_ARAIncongrunciasemAPP_57);
var lyr_ARAIncongrunciasemAPP_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_57, 
                style: style_ARAIncongrunciasemAPP_57,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_57.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_58 = new ol.format.GeoJSON();
var features_ARAETELagoas_58 = format_ARAETELagoas_58.readFeatures(json_ARAETELagoas_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAETELagoas_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_58.addFeatures(features_ARAETELagoas_58);
var lyr_ARAETELagoas_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_58, 
                style: style_ARAETELagoas_58,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_58.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_59 = new ol.format.GeoJSON();
var features_ARAAterros_59 = format_ARAAterros_59.readFeatures(json_ARAAterros_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAAterros_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_59.addFeatures(features_ARAAterros_59);
var lyr_ARAAterros_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_59, 
                style: style_ARAAterros_59,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_59.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_60 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_60 = format_AODreaUrbanaConsolidada_60.readFeatures(json_AODreaUrbanaConsolidada_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODreaUrbanaConsolidada_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_60.addFeatures(features_AODreaUrbanaConsolidada_60);
var lyr_AODreaUrbanaConsolidada_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_60, 
                style: style_AODreaUrbanaConsolidada_60,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_60.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_61 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_61 = format_AODBaixaDensidadeNvel3_61.readFeatures(json_AODBaixaDensidadeNvel3_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel3_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_61.addFeatures(features_AODBaixaDensidadeNvel3_61);
var lyr_AODBaixaDensidadeNvel3_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_61, 
                style: style_AODBaixaDensidadeNvel3_61,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_61.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_62 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_62 = format_AODBaixaDensidadeNvel2_62.readFeatures(json_AODBaixaDensidadeNvel2_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel2_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_62.addFeatures(features_AODBaixaDensidadeNvel2_62);
var lyr_AODBaixaDensidadeNvel2_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_62, 
                style: style_AODBaixaDensidadeNvel2_62,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_62.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_63 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_63 = format_AODBaixaDensidadeNvel1_63.readFeatures(json_AODBaixaDensidadeNvel1_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODBaixaDensidadeNvel1_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_63.addFeatures(features_AODBaixaDensidadeNvel1_63);
var lyr_AODBaixaDensidadeNvel1_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_63, 
                style: style_AODBaixaDensidadeNvel1_63,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_63.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_64 = new ol.format.GeoJSON();
var features_AODAUSFase2_64 = format_AODAUSFase2_64.readFeatures(json_AODAUSFase2_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase2_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_64.addFeatures(features_AODAUSFase2_64);
var lyr_AODAUSFase2_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_64, 
                style: style_AODAUSFase2_64,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_64.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_65 = new ol.format.GeoJSON();
var features_AODAUSFase1_65 = format_AODAUSFase1_65.readFeatures(json_AODAUSFase1_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AODAUSFase1_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_65.addFeatures(features_AODAUSFase1_65);
var lyr_AODAUSFase1_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_65, 
                style: style_AODAUSFase1_65,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_65.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_66 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_66 = format_LimitedaBaciadoRioCanoasLeiC4322024_66.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_66.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_66);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_66, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_66,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_66.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_67 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_67 = format_LimitedaBaciadoRioCanoasLeiC1002006_67.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_67.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_67);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_67, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_67,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_67.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_68 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_68 = format_DelimitaodaBaciadoRibeirodaOna_68.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_68.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_68);
var lyr_DelimitaodaBaciadoRibeirodaOna_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_68, 
                style: style_DelimitaodaBaciadoRibeirodaOna_68,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_68.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_APP1745unid_69 = new ol.format.GeoJSON();
var features_APP1745unid_69 = format_APP1745unid_69.readFeatures(json_APP1745unid_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP1745unid_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_69.addFeatures(features_APP1745unid_69);
var lyr_APP1745unid_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_69, 
                style: style_APP1745unid_69,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_69.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_70 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_70 = format_RiosDuplos84unid_70.readFeatures(json_RiosDuplos84unid_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosDuplos84unid_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_70.addFeatures(features_RiosDuplos84unid_70);
var lyr_RiosDuplos84unid_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_70, 
                style: style_RiosDuplos84unid_70,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_70.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_71 = new ol.format.GeoJSON();
var features_MassasDgua270unid_71 = format_MassasDgua270unid_71.readFeatures(json_MassasDgua270unid_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassasDgua270unid_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_71.addFeatures(features_MassasDgua270unid_71);
var lyr_MassasDgua270unid_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_71, 
                style: style_MassasDgua270unid_71,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_71.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_72 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_72 = format_RiosSimples1842unid_72.readFeatures(json_RiosSimples1842unid_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSimples1842unid_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_72.addFeatures(features_RiosSimples1842unid_72);
var lyr_RiosSimples1842unid_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_72, 
                style: style_RiosSimples1842unid_72,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_72.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_73 = new ol.format.GeoJSON();
var features_Nascentes821unid_73 = format_Nascentes821unid_73.readFeatures(json_Nascentes821unid_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes821unid_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_73.addFeatures(features_Nascentes821unid_73);
var lyr_Nascentes821unid_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_73, 
                style: style_Nascentes821unid_73,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_73.png" /> Nascentes (821 unid.)'
            });
var format_JardimZoobotnicoDelimitao_74 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_74 = format_JardimZoobotnicoDelimitao_74.readFeatures(json_JardimZoobotnicoDelimitao_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoDelimitao_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_74.addFeatures(features_JardimZoobotnicoDelimitao_74);
var lyr_JardimZoobotnicoDelimitao_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_74, 
                style: style_JardimZoobotnicoDelimitao_74,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_74.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_75 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_75 = format_JardimZoobotnicoTrajetos_75.readFeatures(json_JardimZoobotnicoTrajetos_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoTrajetos_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_75.addFeatures(features_JardimZoobotnicoTrajetos_75);
var lyr_JardimZoobotnicoTrajetos_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_75, 
                style: style_JardimZoobotnicoTrajetos_75,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_75.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_76 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_76 = format_JardimZoobotnicoPontosdeInteresse19unid_76.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_76.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_76);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_76, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_76,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_76.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_77 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_77 = format_ParquedosTrabalhadores_77.readFeatures(json_ParquedosTrabalhadores_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_77.addFeatures(features_ParquedosTrabalhadores_77);
var lyr_ParquedosTrabalhadores_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_77, 
                style: style_ParquedosTrabalhadores_77,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_77.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_78 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_78 = format_ParquedosTrabalhadores_78.readFeatures(json_ParquedosTrabalhadores_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedosTrabalhadores_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_78.addFeatures(features_ParquedosTrabalhadores_78);
var lyr_ParquedosTrabalhadores_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_78, 
                style: style_ParquedosTrabalhadores_78,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_78.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_79 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_79 = format_ComplexoPoliesportivo_79.readFeatures(json_ComplexoPoliesportivo_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_79.addFeatures(features_ComplexoPoliesportivo_79);
var lyr_ComplexoPoliesportivo_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_79, 
                style: style_ComplexoPoliesportivo_79,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_79.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_80 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_80 = format_ComplexoPoliesportivo_80.readFeatures(json_ComplexoPoliesportivo_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComplexoPoliesportivo_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_80.addFeatures(features_ComplexoPoliesportivo_80);
var lyr_ComplexoPoliesportivo_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_80, 
                style: style_ComplexoPoliesportivo_80,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_80.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_81 = new ol.format.GeoJSON();
var features_ParqueCaxambu_81 = format_ParqueCaxambu_81.readFeatures(json_ParqueCaxambu_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_81.addFeatures(features_ParqueCaxambu_81);
var lyr_ParqueCaxambu_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_81, 
                style: style_ParqueCaxambu_81,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_81.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_82 = new ol.format.GeoJSON();
var features_ParqueCaxambu_82 = format_ParqueCaxambu_82.readFeatures(json_ParqueCaxambu_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueCaxambu_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_82.addFeatures(features_ParqueCaxambu_82);
var lyr_ParqueCaxambu_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_82, 
                style: style_ParqueCaxambu_82,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_82.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_83 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_83 = format_ParquedeExposiesFernandoCosta_83.readFeatures(json_ParquedeExposiesFernandoCosta_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_83.addFeatures(features_ParquedeExposiesFernandoCosta_83);
var lyr_ParquedeExposiesFernandoCosta_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_83, 
                style: style_ParquedeExposiesFernandoCosta_83,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_83.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_84 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_84 = format_ParquedeExposiesFernandoCosta_84.readFeatures(json_ParquedeExposiesFernandoCosta_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedeExposiesFernandoCosta_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_84.addFeatures(features_ParquedeExposiesFernandoCosta_84);
var lyr_ParquedeExposiesFernandoCosta_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_84, 
                style: style_ParquedeExposiesFernandoCosta_84,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_84.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_85 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_85 = format_ParqueAmbientalLuprcioTaveira_85.readFeatures(json_ParqueAmbientalLuprcioTaveira_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_85.addFeatures(features_ParqueAmbientalLuprcioTaveira_85);
var lyr_ParqueAmbientalLuprcioTaveira_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_85, 
                style: style_ParqueAmbientalLuprcioTaveira_85,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_85.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_86 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_86 = format_ParqueAmbientalLuprcioTaveira_86.readFeatures(json_ParqueAmbientalLuprcioTaveira_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueAmbientalLuprcioTaveira_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_86.addFeatures(features_ParqueAmbientalLuprcioTaveira_86);
var lyr_ParqueAmbientalLuprcioTaveira_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_86, 
                style: style_ParqueAmbientalLuprcioTaveira_86,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_86.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_R01S01_87 = new ol.format.GeoJSON();
var features_R01S01_87 = format_R01S01_87.readFeatures(json_R01S01_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S01_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S01_87.addFeatures(features_R01S01_87);
var lyr_R01S01_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S01_87, 
                style: style_R01S01_87,
                popuplayertitle: 'R01S01',
                interactive: true,
                title: '<img src="styles/legend/R01S01_87.png" /> R01S01'
            });
var format_R01S02_88 = new ol.format.GeoJSON();
var features_R01S02_88 = format_R01S02_88.readFeatures(json_R01S02_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S02_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S02_88.addFeatures(features_R01S02_88);
var lyr_R01S02_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S02_88, 
                style: style_R01S02_88,
                popuplayertitle: 'R01S02',
                interactive: true,
                title: '<img src="styles/legend/R01S02_88.png" /> R01S02'
            });
var format_R01S03_89 = new ol.format.GeoJSON();
var features_R01S03_89 = format_R01S03_89.readFeatures(json_R01S03_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S03_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S03_89.addFeatures(features_R01S03_89);
var lyr_R01S03_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S03_89, 
                style: style_R01S03_89,
                popuplayertitle: 'R01S03',
                interactive: true,
                title: '<img src="styles/legend/R01S03_89.png" /> R01S03'
            });
var format_R01S04_90 = new ol.format.GeoJSON();
var features_R01S04_90 = format_R01S04_90.readFeatures(json_R01S04_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S04_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S04_90.addFeatures(features_R01S04_90);
var lyr_R01S04_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S04_90, 
                style: style_R01S04_90,
                popuplayertitle: 'R01S04',
                interactive: true,
                title: '<img src="styles/legend/R01S04_90.png" /> R01S04'
            });
var format_R01S05_91 = new ol.format.GeoJSON();
var features_R01S05_91 = format_R01S05_91.readFeatures(json_R01S05_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S05_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S05_91.addFeatures(features_R01S05_91);
var lyr_R01S05_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S05_91, 
                style: style_R01S05_91,
                popuplayertitle: 'R01S05',
                interactive: true,
                title: '<img src="styles/legend/R01S05_91.png" /> R01S05'
            });
var format_R01S06_92 = new ol.format.GeoJSON();
var features_R01S06_92 = format_R01S06_92.readFeatures(json_R01S06_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S06_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S06_92.addFeatures(features_R01S06_92);
var lyr_R01S06_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S06_92, 
                style: style_R01S06_92,
                popuplayertitle: 'R01S06',
                interactive: true,
                title: '<img src="styles/legend/R01S06_92.png" /> R01S06'
            });
var format_R01S07_93 = new ol.format.GeoJSON();
var features_R01S07_93 = format_R01S07_93.readFeatures(json_R01S07_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S07_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S07_93.addFeatures(features_R01S07_93);
var lyr_R01S07_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S07_93, 
                style: style_R01S07_93,
                popuplayertitle: 'R01S07',
                interactive: true,
                title: '<img src="styles/legend/R01S07_93.png" /> R01S07'
            });
var format_R01S08_94 = new ol.format.GeoJSON();
var features_R01S08_94 = format_R01S08_94.readFeatures(json_R01S08_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R01S08_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R01S08_94.addFeatures(features_R01S08_94);
var lyr_R01S08_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R01S08_94, 
                style: style_R01S08_94,
                popuplayertitle: 'R01S08',
                interactive: true,
                title: '<img src="styles/legend/R01S08_94.png" /> R01S08'
            });
var format_R02S01_95 = new ol.format.GeoJSON();
var features_R02S01_95 = format_R02S01_95.readFeatures(json_R02S01_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S01_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S01_95.addFeatures(features_R02S01_95);
var lyr_R02S01_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S01_95, 
                style: style_R02S01_95,
                popuplayertitle: 'R02S01',
                interactive: true,
                title: '<img src="styles/legend/R02S01_95.png" /> R02S01'
            });
var format_R02S02_96 = new ol.format.GeoJSON();
var features_R02S02_96 = format_R02S02_96.readFeatures(json_R02S02_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S02_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S02_96.addFeatures(features_R02S02_96);
var lyr_R02S02_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S02_96, 
                style: style_R02S02_96,
                popuplayertitle: 'R02S02',
                interactive: true,
                title: '<img src="styles/legend/R02S02_96.png" /> R02S02'
            });
var format_R02S03_97 = new ol.format.GeoJSON();
var features_R02S03_97 = format_R02S03_97.readFeatures(json_R02S03_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S03_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S03_97.addFeatures(features_R02S03_97);
var lyr_R02S03_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S03_97, 
                style: style_R02S03_97,
                popuplayertitle: 'R02S03',
                interactive: true,
                title: '<img src="styles/legend/R02S03_97.png" /> R02S03'
            });
var format_R02S04_98 = new ol.format.GeoJSON();
var features_R02S04_98 = format_R02S04_98.readFeatures(json_R02S04_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S04_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S04_98.addFeatures(features_R02S04_98);
var lyr_R02S04_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S04_98, 
                style: style_R02S04_98,
                popuplayertitle: 'R02S04',
                interactive: true,
                title: '<img src="styles/legend/R02S04_98.png" /> R02S04'
            });
var format_R02S05_99 = new ol.format.GeoJSON();
var features_R02S05_99 = format_R02S05_99.readFeatures(json_R02S05_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S05_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S05_99.addFeatures(features_R02S05_99);
var lyr_R02S05_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S05_99, 
                style: style_R02S05_99,
                popuplayertitle: 'R02S05',
                interactive: true,
                title: '<img src="styles/legend/R02S05_99.png" /> R02S05'
            });
var format_R02S06_100 = new ol.format.GeoJSON();
var features_R02S06_100 = format_R02S06_100.readFeatures(json_R02S06_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S06_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S06_100.addFeatures(features_R02S06_100);
var lyr_R02S06_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S06_100, 
                style: style_R02S06_100,
                popuplayertitle: 'R02S06',
                interactive: true,
                title: '<img src="styles/legend/R02S06_100.png" /> R02S06'
            });
var format_R02S07_101 = new ol.format.GeoJSON();
var features_R02S07_101 = format_R02S07_101.readFeatures(json_R02S07_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S07_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S07_101.addFeatures(features_R02S07_101);
var lyr_R02S07_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S07_101, 
                style: style_R02S07_101,
                popuplayertitle: 'R02S07',
                interactive: true,
                title: '<img src="styles/legend/R02S07_101.png" /> R02S07'
            });
var format_R02S08_102 = new ol.format.GeoJSON();
var features_R02S08_102 = format_R02S08_102.readFeatures(json_R02S08_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R02S08_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R02S08_102.addFeatures(features_R02S08_102);
var lyr_R02S08_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R02S08_102, 
                style: style_R02S08_102,
                popuplayertitle: 'R02S08',
                interactive: true,
                title: '<img src="styles/legend/R02S08_102.png" /> R02S08'
            });
var format_R03S01_103 = new ol.format.GeoJSON();
var features_R03S01_103 = format_R03S01_103.readFeatures(json_R03S01_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S01_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S01_103.addFeatures(features_R03S01_103);
var lyr_R03S01_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S01_103, 
                style: style_R03S01_103,
                popuplayertitle: 'R03S01',
                interactive: true,
                title: '<img src="styles/legend/R03S01_103.png" /> R03S01'
            });
var format_R03S02_104 = new ol.format.GeoJSON();
var features_R03S02_104 = format_R03S02_104.readFeatures(json_R03S02_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S02_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S02_104.addFeatures(features_R03S02_104);
var lyr_R03S02_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S02_104, 
                style: style_R03S02_104,
                popuplayertitle: 'R03S02',
                interactive: true,
                title: '<img src="styles/legend/R03S02_104.png" /> R03S02'
            });
var format_R03S03_105 = new ol.format.GeoJSON();
var features_R03S03_105 = format_R03S03_105.readFeatures(json_R03S03_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S03_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S03_105.addFeatures(features_R03S03_105);
var lyr_R03S03_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S03_105, 
                style: style_R03S03_105,
                popuplayertitle: 'R03S03',
                interactive: true,
                title: '<img src="styles/legend/R03S03_105.png" /> R03S03'
            });
var format_R03S04_106 = new ol.format.GeoJSON();
var features_R03S04_106 = format_R03S04_106.readFeatures(json_R03S04_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S04_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S04_106.addFeatures(features_R03S04_106);
var lyr_R03S04_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S04_106, 
                style: style_R03S04_106,
                popuplayertitle: 'R03S04',
                interactive: true,
                title: '<img src="styles/legend/R03S04_106.png" /> R03S04'
            });
var format_R03S05_107 = new ol.format.GeoJSON();
var features_R03S05_107 = format_R03S05_107.readFeatures(json_R03S05_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S05_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S05_107.addFeatures(features_R03S05_107);
var lyr_R03S05_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S05_107, 
                style: style_R03S05_107,
                popuplayertitle: 'R03S05',
                interactive: true,
                title: '<img src="styles/legend/R03S05_107.png" /> R03S05'
            });
var format_R03S06_108 = new ol.format.GeoJSON();
var features_R03S06_108 = format_R03S06_108.readFeatures(json_R03S06_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S06_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S06_108.addFeatures(features_R03S06_108);
var lyr_R03S06_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S06_108, 
                style: style_R03S06_108,
                popuplayertitle: 'R03S06',
                interactive: true,
                title: '<img src="styles/legend/R03S06_108.png" /> R03S06'
            });
var format_R03S07_109 = new ol.format.GeoJSON();
var features_R03S07_109 = format_R03S07_109.readFeatures(json_R03S07_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S07_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S07_109.addFeatures(features_R03S07_109);
var lyr_R03S07_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S07_109, 
                style: style_R03S07_109,
                popuplayertitle: 'R03S07',
                interactive: true,
                title: '<img src="styles/legend/R03S07_109.png" /> R03S07'
            });
var format_R03S08_110 = new ol.format.GeoJSON();
var features_R03S08_110 = format_R03S08_110.readFeatures(json_R03S08_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R03S08_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R03S08_110.addFeatures(features_R03S08_110);
var lyr_R03S08_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R03S08_110, 
                style: style_R03S08_110,
                popuplayertitle: 'R03S08',
                interactive: true,
                title: '<img src="styles/legend/R03S08_110.png" /> R03S08'
            });
var format_ProgramaAdoteUmaPraa284unid25737300m_111 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa284unid25737300m_111 = format_ProgramaAdoteUmaPraa284unid25737300m_111.readFeatures(json_ProgramaAdoteUmaPraa284unid25737300m_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramaAdoteUmaPraa284unid25737300m_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa284unid25737300m_111.addFeatures(features_ProgramaAdoteUmaPraa284unid25737300m_111);
var lyr_ProgramaAdoteUmaPraa284unid25737300m_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa284unid25737300m_111, 
                style: style_ProgramaAdoteUmaPraa284unid25737300m_111,
                popuplayertitle: 'Programa Adote Uma Praça (284 unid. / 257373.00 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa284unid25737300m_111.png" /> Programa Adote Uma Praça (284 unid. / 257373.00 m²)'
            });
var format_SemPlacaEgnaldo6unid284826m_112 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo6unid284826m_112 = format_SemPlacaEgnaldo6unid284826m_112.readFeatures(json_SemPlacaEgnaldo6unid284826m_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaEgnaldo6unid284826m_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo6unid284826m_112.addFeatures(features_SemPlacaEgnaldo6unid284826m_112);
var lyr_SemPlacaEgnaldo6unid284826m_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo6unid284826m_112, 
                style: style_SemPlacaEgnaldo6unid284826m_112,
                popuplayertitle: 'Sem Placa - Egnaldo (6 unid. / 2848.26 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo6unid284826m_112.png" /> Sem Placa - Egnaldo (6 unid. / 2848.26 m²)'
            });
var format_SemPlacaDilu18unid939517m_113 = new ol.format.GeoJSON();
var features_SemPlacaDilu18unid939517m_113 = format_SemPlacaDilu18unid939517m_113.readFeatures(json_SemPlacaDilu18unid939517m_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SemPlacaDilu18unid939517m_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu18unid939517m_113.addFeatures(features_SemPlacaDilu18unid939517m_113);
var lyr_SemPlacaDilu18unid939517m_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu18unid939517m_113, 
                style: style_SemPlacaDilu18unid939517m_113,
                popuplayertitle: 'Sem Placa - Dilu (18 unid. / 9395.17 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu18unid939517m_113.png" /> Sem Placa - Dilu (18 unid. / 9395.17 m²)'
            });
var format_ComPlacaEgnaldo85unid6720046m_114 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo85unid6720046m_114 = format_ComPlacaEgnaldo85unid6720046m_114.readFeatures(json_ComPlacaEgnaldo85unid6720046m_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaEgnaldo85unid6720046m_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo85unid6720046m_114.addFeatures(features_ComPlacaEgnaldo85unid6720046m_114);
var lyr_ComPlacaEgnaldo85unid6720046m_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo85unid6720046m_114, 
                style: style_ComPlacaEgnaldo85unid6720046m_114,
                popuplayertitle: 'Com Placa - Egnaldo (85 unid. / 67200.46 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo85unid6720046m_114.png" /> Com Placa - Egnaldo (85 unid. / 67200.46 m²)'
            });
var format_ComPlacaDilu175unid17850448m_115 = new ol.format.GeoJSON();
var features_ComPlacaDilu175unid17850448m_115 = format_ComPlacaDilu175unid17850448m_115.readFeatures(json_ComPlacaDilu175unid17850448m_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComPlacaDilu175unid17850448m_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu175unid17850448m_115.addFeatures(features_ComPlacaDilu175unid17850448m_115);
var lyr_ComPlacaDilu175unid17850448m_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu175unid17850448m_115, 
                style: style_ComPlacaDilu175unid17850448m_115,
                popuplayertitle: 'Com Placa - Dilu (175 unid. / 178504.48 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu175unid17850448m_115.png" /> Com Placa - Dilu (175 unid. / 178504.48 m²)'
            });
var format_LotesImvelPrivado40unid_116 = new ol.format.GeoJSON();
var features_LotesImvelPrivado40unid_116 = format_LotesImvelPrivado40unid_116.readFeatures(json_LotesImvelPrivado40unid_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesImvelPrivado40unid_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado40unid_116.addFeatures(features_LotesImvelPrivado40unid_116);
var lyr_LotesImvelPrivado40unid_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado40unid_116, 
                style: style_LotesImvelPrivado40unid_116,
                popuplayertitle: 'Lotes - Imóvel Privado (40 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado40unid_116.png" /> Lotes - Imóvel Privado (40 unid.)'
            });
var format_ImvelPrivado44unid_117 = new ol.format.GeoJSON();
var features_ImvelPrivado44unid_117 = format_ImvelPrivado44unid_117.readFeatures(json_ImvelPrivado44unid_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPrivado44unid_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado44unid_117.addFeatures(features_ImvelPrivado44unid_117);
var lyr_ImvelPrivado44unid_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado44unid_117, 
                style: style_ImvelPrivado44unid_117,
                popuplayertitle: 'Imóvel Privado (44 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado44unid_117.png" /> Imóvel Privado (44 unid.)'
            });
var format_ImvelPblico108unid_118 = new ol.format.GeoJSON();
var features_ImvelPblico108unid_118 = format_ImvelPblico108unid_118.readFeatures(json_ImvelPblico108unid_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImvelPblico108unid_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico108unid_118.addFeatures(features_ImvelPblico108unid_118);
var lyr_ImvelPblico108unid_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico108unid_118, 
                style: style_ImvelPblico108unid_118,
                popuplayertitle: 'Imóvel Público (108 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico108unid_118.png" /> Imóvel Público (108 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_119 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_119 = format_ResduosdeConstruoCivil7unid_119.readFeatures(json_ResduosdeConstruoCivil7unid_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeConstruoCivil7unid_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_119.addFeatures(features_ResduosdeConstruoCivil7unid_119);
var lyr_ResduosdeConstruoCivil7unid_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_119, 
                style: style_ResduosdeConstruoCivil7unid_119,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_119.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_120 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_120 = format_ResduosVerdes1unid_120.readFeatures(json_ResduosVerdes1unid_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosVerdes1unid_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_120.addFeatures(features_ResduosVerdes1unid_120);
var lyr_ResduosVerdes1unid_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_120, 
                style: style_ResduosVerdes1unid_120,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_120.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_121 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_121 = format_ChapasdeRaioX1unid_121.readFeatures(json_ChapasdeRaioX1unid_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapasdeRaioX1unid_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_121.addFeatures(features_ChapasdeRaioX1unid_121);
var lyr_ChapasdeRaioX1unid_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_121, 
                style: style_ChapasdeRaioX1unid_121,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_121.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_122 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_122 = format_Embalagensvaziasdeagrotxicos1unid_122.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_122.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_122);
var lyr_Embalagensvaziasdeagrotxicos1unid_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_122, 
                style: style_Embalagensvaziasdeagrotxicos1unid_122,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_122.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_123 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_123 = format_leodecozinhausado2unid_123.readFeatures(json_leodecozinhausado2unid_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leodecozinhausado2unid_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_123.addFeatures(features_leodecozinhausado2unid_123);
var lyr_leodecozinhausado2unid_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_123, 
                style: style_leodecozinhausado2unid_123,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_123.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_124 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_124 = format_leolubrificanteusado1unid_124.readFeatures(json_leolubrificanteusado1unid_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leolubrificanteusado1unid_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_124.addFeatures(features_leolubrificanteusado1unid_124);
var lyr_leolubrificanteusado1unid_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_124, 
                style: style_leolubrificanteusado1unid_124,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_124.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_125 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_125 = format_Latasdetintametlicasvazias2unid_125.readFeatures(json_Latasdetintametlicasvazias2unid_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latasdetintametlicasvazias2unid_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_125.addFeatures(features_Latasdetintametlicasvazias2unid_125);
var lyr_Latasdetintametlicasvazias2unid_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_125, 
                style: style_Latasdetintametlicasvazias2unid_125,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_125.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_126 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_126 = format_ResduosPerigosos1unid_126.readFeatures(json_ResduosPerigosos1unid_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosPerigosos1unid_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_126.addFeatures(features_ResduosPerigosos1unid_126);
var lyr_ResduosPerigosos1unid_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_126, 
                style: style_ResduosPerigosos1unid_126,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_126.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_127 = new ol.format.GeoJSON();
var features_Madeiras1unid_127 = format_Madeiras1unid_127.readFeatures(json_Madeiras1unid_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madeiras1unid_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_127.addFeatures(features_Madeiras1unid_127);
var lyr_Madeiras1unid_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_127, 
                style: style_Madeiras1unid_127,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_127.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_128 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_128 = format_ResduosdeServiosdeSade21unid_128.readFeatures(json_ResduosdeServiosdeSade21unid_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeServiosdeSade21unid_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_128.addFeatures(features_ResduosdeServiosdeSade21unid_128);
var lyr_ResduosdeServiosdeSade21unid_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_128, 
                style: style_ResduosdeServiosdeSade21unid_128,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_128.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias16unid_129 = new ol.format.GeoJSON();
var features_PilhaseBaterias16unid_129 = format_PilhaseBaterias16unid_129.readFeatures(json_PilhaseBaterias16unid_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilhaseBaterias16unid_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16unid_129.addFeatures(features_PilhaseBaterias16unid_129);
var lyr_PilhaseBaterias16unid_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16unid_129, 
                style: style_PilhaseBaterias16unid_129,
                popuplayertitle: 'Pilhas e Baterias (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16unid_129.png" /> Pilhas e Baterias (16 unid.)'
            });
var format_Pneus1unid_130 = new ol.format.GeoJSON();
var features_Pneus1unid_130 = format_Pneus1unid_130.readFeatures(json_Pneus1unid_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pneus1unid_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_130.addFeatures(features_Pneus1unid_130);
var lyr_Pneus1unid_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_130, 
                style: style_Pneus1unid_130,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_130.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_131 = new ol.format.GeoJSON();
var features_Lmpadas4unid_131 = format_Lmpadas4unid_131.readFeatures(json_Lmpadas4unid_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmpadas4unid_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_131.addFeatures(features_Lmpadas4unid_131);
var lyr_Lmpadas4unid_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_131, 
                style: style_Lmpadas4unid_131,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_131.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_132 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_132 = format_ResduosdeCouro1unid_132.readFeatures(json_ResduosdeCouro1unid_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosdeCouro1unid_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_132.addFeatures(features_ResduosdeCouro1unid_132);
var lyr_ResduosdeCouro1unid_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_132, 
                style: style_ResduosdeCouro1unid_132,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_132.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_133 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_133 = format_ResduosEletrnicos2unid_133.readFeatures(json_ResduosEletrnicos2unid_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosEletrnicos2unid_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_133.addFeatures(features_ResduosEletrnicos2unid_133);
var lyr_ResduosEletrnicos2unid_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_133, 
                style: style_ResduosEletrnicos2unid_133,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_133.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_134 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_134 = format_ResduosReciclveis15unid_134.readFeatures(json_ResduosReciclveis15unid_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosReciclveis15unid_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_134.addFeatures(features_ResduosReciclveis15unid_134);
var lyr_ResduosReciclveis15unid_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_134, 
                style: style_ResduosReciclveis15unid_134,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_134.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_135 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_135 = format_ResduosInservveis4unid_135.readFeatures(json_ResduosInservveis4unid_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResduosInservveis4unid_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_135.addFeatures(features_ResduosInservveis4unid_135);
var lyr_ResduosInservveis4unid_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_135, 
                style: style_ResduosInservveis4unid_135,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_135.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_Contineres286unid_136 = new ol.format.GeoJSON();
var features_Contineres286unid_136 = format_Contineres286unid_136.readFeatures(json_Contineres286unid_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contineres286unid_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_136.addFeatures(features_Contineres286unid_136);
var lyr_Contineres286unid_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_136, 
                style: style_Contineres286unid_136,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_136.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte8unid_137 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_137 = format_rvoreImuneaoCorte8unid_137.readFeatures(json_rvoreImuneaoCorte8unid_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rvoreImuneaoCorte8unid_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_137.addFeatures(features_rvoreImuneaoCorte8unid_137);
var lyr_rvoreImuneaoCorte8unid_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_137, 
                style: style_rvoreImuneaoCorte8unid_137,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_137.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_138 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_138 = format_LocaisdeDifcilAcessoereasRurais20unid_138.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_138.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_138);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_138, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_138,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_138.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosdeConstruoCivil7unid_119,lyr_ResduosVerdes1unid_120,lyr_ChapasdeRaioX1unid_121,lyr_Embalagensvaziasdeagrotxicos1unid_122,lyr_leodecozinhausado2unid_123,lyr_leolubrificanteusado1unid_124,lyr_Latasdetintametlicasvazias2unid_125,lyr_ResduosPerigosos1unid_126,lyr_Madeiras1unid_127,lyr_ResduosdeServiosdeSade21unid_128,lyr_PilhaseBaterias16unid_129,lyr_Pneus1unid_130,lyr_Lmpadas4unid_131,lyr_ResduosdeCouro1unid_132,lyr_ResduosEletrnicos2unid_133,lyr_ResduosReciclveis15unid_134,lyr_ResduosInservveis4unid_135,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado40unid_116,lyr_ImvelPrivado44unid_117,lyr_ImvelPblico108unid_118,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa284unid25737300m_111,lyr_SemPlacaEgnaldo6unid284826m_112,lyr_SemPlacaDilu18unid939517m_113,lyr_ComPlacaEgnaldo85unid6720046m_114,lyr_ComPlacaDilu175unid17850448m_115,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_SubregiesContratoESSE = new ol.layer.Group({
                                layers: [lyr_R01S01_87,lyr_R01S02_88,lyr_R01S03_89,lyr_R01S04_90,lyr_R01S05_91,lyr_R01S06_92,lyr_R01S07_93,lyr_R01S08_94,lyr_R02S01_95,lyr_R02S02_96,lyr_R02S03_97,lyr_R02S04_98,lyr_R02S05_99,lyr_R02S06_100,lyr_R02S07_101,lyr_R02S08_102,lyr_R03S01_103,lyr_R03S02_104,lyr_R03S03_105,lyr_R03S04_106,lyr_R03S05_107,lyr_R03S06_108,lyr_R03S07_109,lyr_R03S08_110,],
                                fold: 'close',
                                title: 'Sub-regiões - Contrato ESSE'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_74,lyr_JardimZoobotnicoTrajetos_75,lyr_JardimZoobotnicoPontosdeInteresse19unid_76,lyr_ParquedosTrabalhadores_77,lyr_ParquedosTrabalhadores_78,lyr_ComplexoPoliesportivo_79,lyr_ComplexoPoliesportivo_80,lyr_ParqueCaxambu_81,lyr_ParqueCaxambu_82,lyr_ParquedeExposiesFernandoCosta_83,lyr_ParquedeExposiesFernandoCosta_84,lyr_ParqueAmbientalLuprcioTaveira_85,lyr_ParqueAmbientalLuprcioTaveira_86,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_69,lyr_RiosDuplos84unid_70,lyr_MassasDgua270unid_71,lyr_RiosSimples1842unid_72,lyr_Nascentes821unid_73,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_53,lyr_AROreadeAmortecimento_54,lyr_AROFaixadeCuestas_55,lyr_AROAPP_56,lyr_ARAIncongrunciasemAPP_57,lyr_ARAETELagoas_58,lyr_ARAAterros_59,lyr_AODreaUrbanaConsolidada_60,lyr_AODBaixaDensidadeNvel3_61,lyr_AODBaixaDensidadeNvel2_62,lyr_AODBaixaDensidadeNvel1_63,lyr_AODAUSFase2_64,lyr_AODAUSFase1_65,lyr_LimitedaBaciadoRioCanoasLeiC4322024_66,lyr_LimitedaBaciadoRioCanoasLeiC1002006_67,lyr_DelimitaodaBaciadoRibeirodaOna_68,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_39,lyr_AoCivilPblica1unid_40,lyr_CartaAnuncia20unid_41,lyr_CartaAnuncia19unid_42,lyr_PlantioVoluntrio1unid_43,lyr_PlantioVoluntrio1unid_44,lyr_TACMinistrioPblico9unid_45,lyr_TACMinistrioPblico9unid_46,lyr_TCRACETESB28unid_47,lyr_TCRACETESB28unid_48,lyr_TCRAMunicipal13unid_49,lyr_TCRAMunicipal13unid_50,lyr_TRPRLCETESB2unid_51,lyr_TRPRLCETESB2unid_52,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_30,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31,lyr_AntigoAterrodasMaritacas_32,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35,lyr_AntigoAterrodaFazendaMunicipal_36,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_21,lyr_LoteEMDEF10unid_22,lyr_Lote501unid13733803m_23,lyr_Lote501unid_24,lyr_reaVerde1911unid803552878m_25,lyr_reaPatrimonial31unid14616301m_26,lyr_reaInstitucional226unid132084179m_27,lyr_readeUsoEspecial337unid311074946m_28,lyr_APP164unid230278996m_29,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_RemanescentedaMatrcula11419_5.setVisible(false);lyr_ConjuntoHabitacional_6.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_7.setVisible(false);lyr_reaK_8.setVisible(false);lyr_reaJ_9.setVisible(false);lyr_reaI_10.setVisible(false);lyr_reaH_11.setVisible(false);lyr_reaG_12.setVisible(false);lyr_reaF_13.setVisible(false);lyr_reaE_14.setVisible(false);lyr_reaD_15.setVisible(false);lyr_reaC_16.setVisible(false);lyr_reaB_17.setVisible(false);lyr_reaA_18.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_19.setVisible(false);lyr_reaaseraverbadaPartedareaG_20.setVisible(false);lyr_LoteEMDEF10unid218783m_21.setVisible(false);lyr_LoteEMDEF10unid_22.setVisible(false);lyr_Lote501unid13733803m_23.setVisible(false);lyr_Lote501unid_24.setVisible(false);lyr_reaVerde1911unid803552878m_25.setVisible(false);lyr_reaPatrimonial31unid14616301m_26.setVisible(false);lyr_reaInstitucional226unid132084179m_27.setVisible(false);lyr_readeUsoEspecial337unid311074946m_28.setVisible(false);lyr_APP164unid230278996m_29.setVisible(false);lyr_ParqueZumbidosPalmares_30.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.setVisible(false);lyr_AntigoAterrodasMaritacas_32.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_36.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.setVisible(false);lyr_AoCivilPblica1unid_39.setVisible(false);lyr_AoCivilPblica1unid_40.setVisible(false);lyr_CartaAnuncia20unid_41.setVisible(false);lyr_CartaAnuncia19unid_42.setVisible(false);lyr_PlantioVoluntrio1unid_43.setVisible(false);lyr_PlantioVoluntrio1unid_44.setVisible(false);lyr_TACMinistrioPblico9unid_45.setVisible(false);lyr_TACMinistrioPblico9unid_46.setVisible(false);lyr_TCRACETESB28unid_47.setVisible(false);lyr_TCRACETESB28unid_48.setVisible(false);lyr_TCRAMunicipal13unid_49.setVisible(false);lyr_TCRAMunicipal13unid_50.setVisible(false);lyr_TRPRLCETESB2unid_51.setVisible(false);lyr_TRPRLCETESB2unid_52.setVisible(false);lyr_ARORemanescentesFlorestais_53.setVisible(false);lyr_AROreadeAmortecimento_54.setVisible(false);lyr_AROFaixadeCuestas_55.setVisible(false);lyr_AROAPP_56.setVisible(false);lyr_ARAIncongrunciasemAPP_57.setVisible(false);lyr_ARAETELagoas_58.setVisible(false);lyr_ARAAterros_59.setVisible(false);lyr_AODreaUrbanaConsolidada_60.setVisible(false);lyr_AODBaixaDensidadeNvel3_61.setVisible(false);lyr_AODBaixaDensidadeNvel2_62.setVisible(false);lyr_AODBaixaDensidadeNvel1_63.setVisible(false);lyr_AODAUSFase2_64.setVisible(false);lyr_AODAUSFase1_65.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_66.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_67.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_68.setVisible(false);lyr_APP1745unid_69.setVisible(false);lyr_RiosDuplos84unid_70.setVisible(false);lyr_MassasDgua270unid_71.setVisible(false);lyr_RiosSimples1842unid_72.setVisible(false);lyr_Nascentes821unid_73.setVisible(false);lyr_JardimZoobotnicoDelimitao_74.setVisible(false);lyr_JardimZoobotnicoTrajetos_75.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_76.setVisible(false);lyr_ParquedosTrabalhadores_77.setVisible(false);lyr_ParquedosTrabalhadores_78.setVisible(false);lyr_ComplexoPoliesportivo_79.setVisible(false);lyr_ComplexoPoliesportivo_80.setVisible(false);lyr_ParqueCaxambu_81.setVisible(false);lyr_ParqueCaxambu_82.setVisible(false);lyr_ParquedeExposiesFernandoCosta_83.setVisible(false);lyr_ParquedeExposiesFernandoCosta_84.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_85.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_86.setVisible(false);lyr_R01S01_87.setVisible(false);lyr_R01S02_88.setVisible(false);lyr_R01S03_89.setVisible(false);lyr_R01S04_90.setVisible(false);lyr_R01S05_91.setVisible(false);lyr_R01S06_92.setVisible(false);lyr_R01S07_93.setVisible(false);lyr_R01S08_94.setVisible(false);lyr_R02S01_95.setVisible(false);lyr_R02S02_96.setVisible(false);lyr_R02S03_97.setVisible(false);lyr_R02S04_98.setVisible(false);lyr_R02S05_99.setVisible(false);lyr_R02S06_100.setVisible(false);lyr_R02S07_101.setVisible(false);lyr_R02S08_102.setVisible(false);lyr_R03S01_103.setVisible(false);lyr_R03S02_104.setVisible(false);lyr_R03S03_105.setVisible(false);lyr_R03S04_106.setVisible(false);lyr_R03S05_107.setVisible(false);lyr_R03S06_108.setVisible(false);lyr_R03S07_109.setVisible(false);lyr_R03S08_110.setVisible(false);lyr_ProgramaAdoteUmaPraa284unid25737300m_111.setVisible(false);lyr_SemPlacaEgnaldo6unid284826m_112.setVisible(false);lyr_SemPlacaDilu18unid939517m_113.setVisible(false);lyr_ComPlacaEgnaldo85unid6720046m_114.setVisible(false);lyr_ComPlacaDilu175unid17850448m_115.setVisible(false);lyr_LotesImvelPrivado40unid_116.setVisible(false);lyr_ImvelPrivado44unid_117.setVisible(false);lyr_ImvelPblico108unid_118.setVisible(false);lyr_ResduosdeConstruoCivil7unid_119.setVisible(false);lyr_ResduosVerdes1unid_120.setVisible(false);lyr_ChapasdeRaioX1unid_121.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_122.setVisible(false);lyr_leodecozinhausado2unid_123.setVisible(false);lyr_leolubrificanteusado1unid_124.setVisible(false);lyr_Latasdetintametlicasvazias2unid_125.setVisible(false);lyr_ResduosPerigosos1unid_126.setVisible(false);lyr_Madeiras1unid_127.setVisible(false);lyr_ResduosdeServiosdeSade21unid_128.setVisible(false);lyr_PilhaseBaterias16unid_129.setVisible(false);lyr_Pneus1unid_130.setVisible(false);lyr_Lmpadas4unid_131.setVisible(false);lyr_ResduosdeCouro1unid_132.setVisible(false);lyr_ResduosEletrnicos2unid_133.setVisible(false);lyr_ResduosReciclveis15unid_134.setVisible(false);lyr_ResduosInservveis4unid_135.setVisible(false);lyr_Contineres286unid_136.setVisible(false);lyr_rvoreImuneaoCorte8unid_137.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_138.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_GerenciamentodereasContaminadas,group_reasCompromissadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_ParquesdeFranca,group_SubregiesContratoESSE,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_DescarteCorretodeResduos,lyr_Contineres286unid_136,lyr_rvoreImuneaoCorte8unid_137,lyr_LocaisdeDifcilAcessoereasRurais20unid_138];
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
lyr_LoteEMDEF10unid218783m_21.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'm2': 'm2', });
lyr_LoteEMDEF10unid_22.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote501unid13733803m_23.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote501unid_24.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_reaVerde1911unid803552878m_25.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial31unid14616301m_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional226unid132084179m_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial337unid311074946m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_APP164unid230278996m_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_ParqueZumbidosPalmares_30.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_32.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_36.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_AoCivilPblica1unid_39.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_40.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_41.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_42.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_43.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_44.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_45.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_46.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_47.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_48.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal13unid_49.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal13unid_50.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_51.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_52.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_ARORemanescentesFlorestais_53.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_54.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_55.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_56.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_57.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_58.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_59.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_60.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_61.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_62.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_63.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_64.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_65.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_66.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_67.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_68.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_APP1745unid_69.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_70.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_71.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_72.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_73.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_JardimZoobotnicoDelimitao_74.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_75.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_76.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_77.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_78.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_79.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_80.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_81.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_82.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_83.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_84.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_85.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_86.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_R01S01_87.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S02_88.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'cod_regiao', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S03_89.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S04_90.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S05_91.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S06_92.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S07_93.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R01S08_94.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S01_95.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S02_96.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S03_97.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S04_98.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S05_99.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S06_100.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S07_101.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R02S08_102.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S01_103.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S02_104.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S03_105.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S04_106.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S05_107.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S06_108.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S07_109.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial_m2': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_R03S08_110.set('fieldAliases', {'fid': 'fid', 'cod_regiao': 'Código da Região', 'app_m2': 'APPs (m²)', 'institucional_m2': 'Áreas Institucionais (m²)', 'area_verde_m2': 'Áreas Verdes (m²)', 'lote_m2': 'Lotes (m²)', 'area_patrimonial': 'Áreas Patrimoniais (m²)', 'total_geral': 'Total Geral (m²)', });
lyr_ProgramaAdoteUmaPraa284unid25737300m_111.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_SemPlacaEgnaldo6unid284826m_112.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', });
lyr_SemPlacaDilu18unid939517m_113.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', });
lyr_ComPlacaEgnaldo85unid6720046m_114.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', });
lyr_ComPlacaDilu175unid17850448m_115.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', });
lyr_LotesImvelPrivado40unid_116.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_ImvelPrivado44unid_117.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO': 'PROCESSO', });
lyr_ImvelPblico108unid_118.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'PROCESSO': 'PROCESSO', });
lyr_ResduosdeConstruoCivil7unid_119.set('fieldAliases', {'fid': 'fid', 'categoria': 'categoria', 'local': 'local', 'descricao': 'Descrição', 'endereco': 'Endereço', 'contato': 'contato', });
lyr_ResduosVerdes1unid_120.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_121.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_122.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_123.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_124.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_125.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_126.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_127.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_128.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16unid_129.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_130.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_131.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_132.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_133.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_134.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_135.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_136.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_rvoreImuneaoCorte8unid_137.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_138.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
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
lyr_LoteEMDEF10unid218783m_21.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_22.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', });
lyr_Lote501unid13733803m_23.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote501unid_24.set('fieldImages', {'fid': '', 'Classe': '', 'Área (m²)': '', 'Bairro': '', 'Nº Cadastro Imobiliário': '', 'Código da Região': '', '1ª Semana': '', '2ª Semana': '', '3ª Semana': '', '4ª Semana': '', '5ª Semana': '', 'Terceirização': '', });
lyr_reaVerde1911unid803552878m_25.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial31unid14616301m_26.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional226unid132084179m_27.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial337unid311074946m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_APP164unid230278996m_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_ParqueZumbidosPalmares_30.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_32.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_36.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AoCivilPblica1unid_39.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_40.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'proc_municipal': '', });
lyr_CartaAnuncia20unid_41.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_42.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'doc_origem': '', });
lyr_PlantioVoluntrio1unid_43.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_44.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', });
lyr_TACMinistrioPblico9unid_45.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_46.set('fieldImages', {'fid': '', 'Name': '', 'area': '', 'quant': '', 'ic': '', 'proc_municipal': '', });
lyr_TCRACETESB28unid_47.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_48.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRAMunicipal13unid_49.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal13unid_50.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'autorizacao': '', });
lyr_TRPRLCETESB2unid_51.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_52.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_ARORemanescentesFlorestais_53.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_54.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_55.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_56.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_57.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_58.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_59.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_60.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_61.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_62.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_63.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_64.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_65.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_66.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_67.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_68.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_APP1745unid_69.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_70.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_71.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_72.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_73.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_74.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_75.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_76.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_77.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_78.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_79.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_80.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_81.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_82.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_83.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_84.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_85.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_86.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_R01S01_87.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S02_88.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S03_89.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S04_90.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S05_91.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S06_92.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S07_93.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R01S08_94.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S01_95.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S02_96.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S03_97.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S04_98.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S05_99.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S06_100.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S07_101.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R02S08_102.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S01_103.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S02_104.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S03_105.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S04_106.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S05_107.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S06_108.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S07_109.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial_m2': '', 'total_geral': '', });
lyr_R03S08_110.set('fieldImages', {'fid': '', 'cod_regiao': '', 'app_m2': '', 'institucional_m2': '', 'area_verde_m2': '', 'lote_m2': '', 'area_patrimonial': '', 'total_geral': '', });
lyr_ProgramaAdoteUmaPraa284unid25737300m_111.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_SemPlacaEgnaldo6unid284826m_112.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', });
lyr_SemPlacaDilu18unid939517m_113.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', });
lyr_ComPlacaEgnaldo85unid6720046m_114.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', });
lyr_ComPlacaDilu175unid17850448m_115.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', });
lyr_LotesImvelPrivado40unid_116.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_ImvelPrivado44unid_117.set('fieldImages', {'fid': '', 'BAIRRO': '', 'RUA': '', 'LONGITUDE': '', 'LATITUDE': '', 'CADASTRO IMOBILIÁRIO': '', 'CLASSIFICAÇÃO DO IMÓVEL': '', 'FREQUÊNCIA DE LIMPEZA': '', 'QUADRA': '', 'LOTE': '', 'PROCESSO': '', });
lyr_ImvelPblico108unid_118.set('fieldImages', {'fid': '', 'BAIRRO': '', 'RUA': '', 'LONGITUDE': '', 'LATITUDE': '', 'CADASTRO IMOBILIÁRIO': '', 'CLASSIFICAÇÃO DO IMÓVEL': '', 'FREQUÊNCIA DE LIMPEZA': '', 'QUADRA': '', 'LOTE': '', 'PROCESSO': '', });
lyr_ResduosdeConstruoCivil7unid_119.set('fieldImages', {'fid': '', 'categoria': '', 'local': '', 'descricao': '', 'endereco': '', 'contato': '', });
lyr_ResduosVerdes1unid_120.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ChapasdeRaioX1unid_121.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Embalagensvaziasdeagrotxicos1unid_122.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leodecozinhausado2unid_123.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_leolubrificanteusado1unid_124.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Latasdetintametlicasvazias2unid_125.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosPerigosos1unid_126.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Madeiras1unid_127.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeServiosdeSade21unid_128.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_PilhaseBaterias16unid_129.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Pneus1unid_130.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Lmpadas4unid_131.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1unid_132.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosEletrnicos2unid_133.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_134.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosInservveis4unid_135.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_Contineres286unid_136.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_137.set('fieldImages', {'fid': '', 'nome_popular': '', 'nome_cientifico': '', 'legislacao': '', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_138.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
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
lyr_LoteEMDEF10unid218783m_21.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_22.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote501unid13733803m_23.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote501unid_24.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_reaVerde1911unid803552878m_25.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial31unid14616301m_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional226unid132084179m_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial337unid311074946m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_APP164unid230278996m_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_ParqueZumbidosPalmares_30.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_31.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_32.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_33.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_34.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_35.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_36.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_37.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_38.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_39.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_40.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_41.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_42.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_43.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_44.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_45.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_46.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_47.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_48.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_49.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal13unid_50.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_51.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_52.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_53.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_54.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_55.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_56.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_57.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_58.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_59.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_60.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_61.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_62.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_63.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_64.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_65.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_66.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_67.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_68.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_APP1745unid_69.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos84unid_70.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_71.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_72.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_73.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_74.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_75.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_76.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_77.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_78.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_79.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_80.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_81.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_82.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_83.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_84.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_85.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_86.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_R01S01_87.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S02_88.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S03_89.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S04_90.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S05_91.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S06_92.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S07_93.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R01S08_94.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S01_95.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S02_96.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S03_97.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S04_98.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S05_99.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S06_100.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S07_101.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R02S08_102.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S01_103.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S02_104.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S03_105.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S04_106.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S05_107.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S06_108.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S07_109.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial_m2': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_R03S08_110.set('fieldLabels', {'fid': 'hidden field', 'cod_regiao': 'hidden field', 'app_m2': 'inline label - visible with data', 'institucional_m2': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'lote_m2': 'inline label - visible with data', 'area_patrimonial': 'inline label - visible with data', 'total_geral': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa284unid25737300m_111.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo6unid284826m_112.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', });
lyr_SemPlacaDilu18unid939517m_113.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo85unid6720046m_114.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', });
lyr_ComPlacaDilu175unid17850448m_115.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', });
lyr_LotesImvelPrivado40unid_116.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_ImvelPrivado44unid_117.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO': 'inline label - always visible', });
lyr_ImvelPblico108unid_118.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'LONGITUDE': 'hidden field', 'LATITUDE': 'hidden field', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'inline label - visible with data', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'PROCESSO': 'hidden field', });
lyr_ResduosdeConstruoCivil7unid_119.set('fieldLabels', {'fid': 'hidden field', 'categoria': 'inline label - visible with data', 'local': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_120.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_121.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_122.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_123.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_124.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_125.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_126.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_127.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_128.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16unid_129.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_130.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_131.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_132.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_133.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_134.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_135.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_136.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_137.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_138.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_138.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});