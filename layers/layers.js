ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.385900, 7700979.946759, 276615.687500, 7740736.000000]);
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
var format_APP1745unid_5 = new ol.format.GeoJSON();
var features_APP1745unid_5 = format_APP1745unid_5.readFeatures(json_APP1745unid_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_5.addFeatures(features_APP1745unid_5);
var lyr_APP1745unid_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_5, 
                style: style_APP1745unid_5,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_5.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_6 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_6 = format_RiosDuplos84unid_6.readFeatures(json_RiosDuplos84unid_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_6.addFeatures(features_RiosDuplos84unid_6);
var lyr_RiosDuplos84unid_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_6, 
                style: style_RiosDuplos84unid_6,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_6.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_7 = new ol.format.GeoJSON();
var features_MassasDgua270unid_7 = format_MassasDgua270unid_7.readFeatures(json_MassasDgua270unid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_7.addFeatures(features_MassasDgua270unid_7);
var lyr_MassasDgua270unid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_7, 
                style: style_MassasDgua270unid_7,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_7.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_8 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_8 = format_RiosSimples1842unid_8.readFeatures(json_RiosSimples1842unid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_8.addFeatures(features_RiosSimples1842unid_8);
var lyr_RiosSimples1842unid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_8, 
                style: style_RiosSimples1842unid_8,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_8.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_9 = new ol.format.GeoJSON();
var features_Nascentes821unid_9 = format_Nascentes821unid_9.readFeatures(json_Nascentes821unid_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_9.addFeatures(features_Nascentes821unid_9);
var lyr_Nascentes821unid_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_9, 
                style: style_Nascentes821unid_9,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_9.png" /> Nascentes (821 unid.)'
            });
var format_RemanescentedaMatrcula11419_10 = new ol.format.GeoJSON();
var features_RemanescentedaMatrcula11419_10 = format_RemanescentedaMatrcula11419_10.readFeatures(json_RemanescentedaMatrcula11419_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RemanescentedaMatrcula11419_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescentedaMatrcula11419_10.addFeatures(features_RemanescentedaMatrcula11419_10);
var lyr_RemanescentedaMatrcula11419_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RemanescentedaMatrcula11419_10, 
                style: style_RemanescentedaMatrcula11419_10,
                popuplayertitle: 'Remanescente da Matrícula 11419',
                interactive: true,
                title: '<img src="styles/legend/RemanescentedaMatrcula11419_10.png" /> Remanescente da Matrícula 11419'
            });
var format_ConjuntoHabitacional_11 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_11 = format_ConjuntoHabitacional_11.readFeatures(json_ConjuntoHabitacional_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_11.addFeatures(features_ConjuntoHabitacional_11);
var lyr_ConjuntoHabitacional_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_11, 
                style: style_ConjuntoHabitacional_11,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_11.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_12 = format_AvdeacessoaoHortoeColgioAgrcola_12.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_12.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_12);
var lyr_AvdeacessoaoHortoeColgioAgrcola_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_12, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_12,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_12.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_13 = new ol.format.GeoJSON();
var features_reaK_13 = format_reaK_13.readFeatures(json_reaK_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_13.addFeatures(features_reaK_13);
var lyr_reaK_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_13, 
                style: style_reaK_13,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_13.png" /> Área K'
            });
var format_reaJ_14 = new ol.format.GeoJSON();
var features_reaJ_14 = format_reaJ_14.readFeatures(json_reaJ_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_14.addFeatures(features_reaJ_14);
var lyr_reaJ_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_14, 
                style: style_reaJ_14,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_14.png" /> Área J'
            });
var format_reaI_15 = new ol.format.GeoJSON();
var features_reaI_15 = format_reaI_15.readFeatures(json_reaI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_15.addFeatures(features_reaI_15);
var lyr_reaI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_15, 
                style: style_reaI_15,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_15.png" /> Área I'
            });
var format_reaH_16 = new ol.format.GeoJSON();
var features_reaH_16 = format_reaH_16.readFeatures(json_reaH_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_16.addFeatures(features_reaH_16);
var lyr_reaH_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_16, 
                style: style_reaH_16,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_16.png" /> Área H'
            });
var format_reaG_17 = new ol.format.GeoJSON();
var features_reaG_17 = format_reaG_17.readFeatures(json_reaG_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_17.addFeatures(features_reaG_17);
var lyr_reaG_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_17, 
                style: style_reaG_17,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_17.png" /> Área G'
            });
var format_reaF_18 = new ol.format.GeoJSON();
var features_reaF_18 = format_reaF_18.readFeatures(json_reaF_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_18.addFeatures(features_reaF_18);
var lyr_reaF_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_18, 
                style: style_reaF_18,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_18.png" /> Área F'
            });
var format_reaE_19 = new ol.format.GeoJSON();
var features_reaE_19 = format_reaE_19.readFeatures(json_reaE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_19.addFeatures(features_reaE_19);
var lyr_reaE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_19, 
                style: style_reaE_19,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_19.png" /> Área E'
            });
var format_reaD_20 = new ol.format.GeoJSON();
var features_reaD_20 = format_reaD_20.readFeatures(json_reaD_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_20.addFeatures(features_reaD_20);
var lyr_reaD_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_20, 
                style: style_reaD_20,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_20.png" /> Área D'
            });
var format_reaC_21 = new ol.format.GeoJSON();
var features_reaC_21 = format_reaC_21.readFeatures(json_reaC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_21.addFeatures(features_reaC_21);
var lyr_reaC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_21, 
                style: style_reaC_21,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_21.png" /> Área C'
            });
var format_reaB_22 = new ol.format.GeoJSON();
var features_reaB_22 = format_reaB_22.readFeatures(json_reaB_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_22.addFeatures(features_reaB_22);
var lyr_reaB_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_22, 
                style: style_reaB_22,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_22.png" /> Área B'
            });
var format_reaA_23 = new ol.format.GeoJSON();
var features_reaA_23 = format_reaA_23.readFeatures(json_reaA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_23.addFeatures(features_reaA_23);
var lyr_reaA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_23, 
                style: style_reaA_23,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_23.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_24);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_24, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_24,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_24.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_25 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_25 = format_reaaseraverbadaPartedareaG_25.readFeatures(json_reaaseraverbadaPartedareaG_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_25.addFeatures(features_reaaseraverbadaPartedareaG_25);
var lyr_reaaseraverbadaPartedareaG_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_25, 
                style: style_reaaseraverbadaPartedareaG_25,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_25.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF10unid218783m_26 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_26 = format_LoteEMDEF10unid218783m_26.readFeatures(json_LoteEMDEF10unid218783m_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_26.addFeatures(features_LoteEMDEF10unid218783m_26);
var lyr_LoteEMDEF10unid218783m_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_26, 
                style: style_LoteEMDEF10unid218783m_26,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_26.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_27 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_27 = format_LoteEMDEF10unid_27.readFeatures(json_LoteEMDEF10unid_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_27.addFeatures(features_LoteEMDEF10unid_27);
var lyr_LoteEMDEF10unid_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_27, 
                style: style_LoteEMDEF10unid_27,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_27.png" /> Lote EMDEF (10 unid.)'
            });
var format_Lote502unid13759703m_28 = new ol.format.GeoJSON();
var features_Lote502unid13759703m_28 = format_Lote502unid13759703m_28.readFeatures(json_Lote502unid13759703m_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote502unid13759703m_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote502unid13759703m_28.addFeatures(features_Lote502unid13759703m_28);
var lyr_Lote502unid13759703m_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote502unid13759703m_28, 
                style: style_Lote502unid13759703m_28,
                popuplayertitle: 'Lote (502 unid. / 137.597,03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote502unid13759703m_28.png" /> Lote (502 unid. / 137.597,03 m²)'
            });
var format_Lote502unid_29 = new ol.format.GeoJSON();
var features_Lote502unid_29 = format_Lote502unid_29.readFeatures(json_Lote502unid_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote502unid_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote502unid_29.addFeatures(features_Lote502unid_29);
var lyr_Lote502unid_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote502unid_29, 
                style: style_Lote502unid_29,
                popuplayertitle: 'Lote (502 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote502unid_29.png" /> Lote (502 unid.)'
            });
var format_APP169unid238007435m_30 = new ol.format.GeoJSON();
var features_APP169unid238007435m_30 = format_APP169unid238007435m_30.readFeatures(json_APP169unid238007435m_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP169unid238007435m_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP169unid238007435m_30.addFeatures(features_APP169unid238007435m_30);
var lyr_APP169unid238007435m_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP169unid238007435m_30, 
                style: style_APP169unid238007435m_30,
                popuplayertitle: 'APP (169 unid. / 2.380.074,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP169unid238007435m_30.png" /> APP (169 unid. / 2.380.074,35 m²)'
            });
var format_readeUsoEspecial251unid269349873m_31 = new ol.format.GeoJSON();
var features_readeUsoEspecial251unid269349873m_31 = format_readeUsoEspecial251unid269349873m_31.readFeatures(json_readeUsoEspecial251unid269349873m_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial251unid269349873m_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial251unid269349873m_31.addFeatures(features_readeUsoEspecial251unid269349873m_31);
var lyr_readeUsoEspecial251unid269349873m_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial251unid269349873m_31, 
                style: style_readeUsoEspecial251unid269349873m_31,
                popuplayertitle: 'Área de Uso Especial (251 unid. / 2.693.498,73 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial251unid269349873m_31.png" /> Área de Uso Especial (251 unid. / 2.693.498,73 m²)'
            });
var format_reaInstitucional242unid136439212m_32 = new ol.format.GeoJSON();
var features_reaInstitucional242unid136439212m_32 = format_reaInstitucional242unid136439212m_32.readFeatures(json_reaInstitucional242unid136439212m_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional242unid136439212m_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional242unid136439212m_32.addFeatures(features_reaInstitucional242unid136439212m_32);
var lyr_reaInstitucional242unid136439212m_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional242unid136439212m_32, 
                style: style_reaInstitucional242unid136439212m_32,
                popuplayertitle: 'Área Institucional (242 unid. / 1.364.392,12 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional242unid136439212m_32.png" /> Área Institucional (242 unid. / 1.364.392,12 m²)'
            });
var format_reaPatrimonial33unid15807656m_33 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_33 = format_reaPatrimonial33unid15807656m_33.readFeatures(json_reaPatrimonial33unid15807656m_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15807656m_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_33.addFeatures(features_reaPatrimonial33unid15807656m_33);
var lyr_reaPatrimonial33unid15807656m_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_33, 
                style: style_reaPatrimonial33unid15807656m_33,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158.076,56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_33.png" /> Área Patrimonial (33 unid. / 158.076,56 m²)'
            });
var format_reaVerde2008unid836299560m_34 = new ol.format.GeoJSON();
var features_reaVerde2008unid836299560m_34 = format_reaVerde2008unid836299560m_34.readFeatures(json_reaVerde2008unid836299560m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde2008unid836299560m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde2008unid836299560m_34.addFeatures(features_reaVerde2008unid836299560m_34);
var lyr_reaVerde2008unid836299560m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde2008unid836299560m_34, 
                style: style_reaVerde2008unid836299560m_34,
                popuplayertitle: 'Área Verde (2008 unid. / 8.362.995,60 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde2008unid836299560m_34.png" /> Área Verde (2008 unid. / 8.362.995,60 m²)'
            });
var format_EmpreendimentoVillaDoratta_35 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_35 = format_EmpreendimentoVillaDoratta_35.readFeatures(json_EmpreendimentoVillaDoratta_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_35.addFeatures(features_EmpreendimentoVillaDoratta_35);
var lyr_EmpreendimentoVillaDoratta_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_35, 
                style: style_EmpreendimentoVillaDoratta_35,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_4.png" /> LOTES ABERTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_35_6.png" /> RUAS<br />' });
var format_EmpreendimentoVillaDoratta_36 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_36 = format_EmpreendimentoVillaDoratta_36.readFeatures(json_EmpreendimentoVillaDoratta_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_36.addFeatures(features_EmpreendimentoVillaDoratta_36);
var lyr_EmpreendimentoVillaDoratta_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_36, 
                style: style_EmpreendimentoVillaDoratta_36,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_36.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoSoCarlosII_37 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_37 = format_EmpreendimentoSoCarlosII_37.readFeatures(json_EmpreendimentoSoCarlosII_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_37.addFeatures(features_EmpreendimentoSoCarlosII_37);
var lyr_EmpreendimentoSoCarlosII_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_37, 
                style: style_EmpreendimentoSoCarlosII_37,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_0.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_37_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_38 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_38 = format_EmpreendimentoSoCarlosII_38.readFeatures(json_EmpreendimentoSoCarlosII_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_38.addFeatures(features_EmpreendimentoSoCarlosII_38);
var lyr_EmpreendimentoSoCarlosII_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_38, 
                style: style_EmpreendimentoSoCarlosII_38,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_38.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_39 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_39 = format_EmpreendimentoParqueFlora_39.readFeatures(json_EmpreendimentoParqueFlora_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_39.addFeatures(features_EmpreendimentoParqueFlora_39);
var lyr_EmpreendimentoParqueFlora_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_39, 
                style: style_EmpreendimentoParqueFlora_39,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_39_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_40 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_40 = format_EmpreendimentoParqueFlora_40.readFeatures(json_EmpreendimentoParqueFlora_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_40.addFeatures(features_EmpreendimentoParqueFlora_40);
var lyr_EmpreendimentoParqueFlora_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_40, 
                style: style_EmpreendimentoParqueFlora_40,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_40.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_41 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_41 = format_EmpreendimentoVittaSoVicente_41.readFeatures(json_EmpreendimentoVittaSoVicente_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_41.addFeatures(features_EmpreendimentoVittaSoVicente_41);
var lyr_EmpreendimentoVittaSoVicente_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_41, 
                style: style_EmpreendimentoVittaSoVicente_41,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_41_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_42 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_42 = format_EmpreendimentoVittaSoVicente_42.readFeatures(json_EmpreendimentoVittaSoVicente_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_42.addFeatures(features_EmpreendimentoVittaSoVicente_42);
var lyr_EmpreendimentoVittaSoVicente_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_42, 
                style: style_EmpreendimentoVittaSoVicente_42,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_42.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_43 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_43 = format_EmpreendimentoRecantoMeneghetti_43.readFeatures(json_EmpreendimentoRecantoMeneghetti_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_43.addFeatures(features_EmpreendimentoRecantoMeneghetti_43);
var lyr_EmpreendimentoRecantoMeneghetti_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_43, 
                style: style_EmpreendimentoRecantoMeneghetti_43,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_3.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_43_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_44 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_44 = format_EmpreendimentoRecantoMeneghetti_44.readFeatures(json_EmpreendimentoRecantoMeneghetti_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_44.addFeatures(features_EmpreendimentoRecantoMeneghetti_44);
var lyr_EmpreendimentoRecantoMeneghetti_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_44, 
                style: style_EmpreendimentoRecantoMeneghetti_44,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_44.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_45 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_45 = format_EmpreendimentoParquedosSabias_45.readFeatures(json_EmpreendimentoParquedosSabias_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_45.addFeatures(features_EmpreendimentoParquedosSabias_45);
var lyr_EmpreendimentoParquedosSabias_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_45, 
                style: style_EmpreendimentoParquedosSabias_45,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_45_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_46 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_46 = format_EmpreendimentoParquedosSabias_46.readFeatures(json_EmpreendimentoParquedosSabias_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_46.addFeatures(features_EmpreendimentoParquedosSabias_46);
var lyr_EmpreendimentoParquedosSabias_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_46, 
                style: style_EmpreendimentoParquedosSabias_46,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_46.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_47 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_47 = format_EmpreendimentoMoradadaMata_47.readFeatures(json_EmpreendimentoMoradadaMata_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_47.addFeatures(features_EmpreendimentoMoradadaMata_47);
var lyr_EmpreendimentoMoradadaMata_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_47, 
                style: style_EmpreendimentoMoradadaMata_47,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_2.png" /> ÁREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_47_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_48 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_48 = format_EmpreendimentoMoradadaMata_48.readFeatures(json_EmpreendimentoMoradadaMata_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_48.addFeatures(features_EmpreendimentoMoradadaMata_48);
var lyr_EmpreendimentoMoradadaMata_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_48, 
                style: style_EmpreendimentoMoradadaMata_48,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_48.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_49 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_49 = format_EmpreendimentoIrineuZanetiII_49.readFeatures(json_EmpreendimentoIrineuZanetiII_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_49.addFeatures(features_EmpreendimentoIrineuZanetiII_49);
var lyr_EmpreendimentoIrineuZanetiII_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_49, 
                style: style_EmpreendimentoIrineuZanetiII_49,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_49_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_50 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_50 = format_EmpreendimentoIrineuZanetiII_50.readFeatures(json_EmpreendimentoIrineuZanetiII_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_50.addFeatures(features_EmpreendimentoIrineuZanetiII_50);
var lyr_EmpreendimentoIrineuZanetiII_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_50, 
                style: style_EmpreendimentoIrineuZanetiII_50,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_50.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoAdonis_51 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_51 = format_EmpreendimentoAdonis_51.readFeatures(json_EmpreendimentoAdonis_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_51.addFeatures(features_EmpreendimentoAdonis_51);
var lyr_EmpreendimentoAdonis_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_51, 
                style: style_EmpreendimentoAdonis_51,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_51_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_52 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_52 = format_EmpreendimentoAdonis_52.readFeatures(json_EmpreendimentoAdonis_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_52.addFeatures(features_EmpreendimentoAdonis_52);
var lyr_EmpreendimentoAdonis_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_52, 
                style: style_EmpreendimentoAdonis_52,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_52.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoResidencialJabuticabeiras_53 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_53 = format_EmpreendimentoResidencialJabuticabeiras_53.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_53.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_53);
var lyr_EmpreendimentoResidencialJabuticabeiras_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_53, 
                style: style_EmpreendimentoResidencialJabuticabeiras_53,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_53_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_53_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_53_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_53_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_53_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_54 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_54 = format_EmpreendimentoResidencialJabuticabeiras_54.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_54.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_54);
var lyr_EmpreendimentoResidencialJabuticabeiras_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_54, 
                style: style_EmpreendimentoResidencialJabuticabeiras_54,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_54.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_55 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_55 = format_EmpreendimentoResidencialMarianaAlarcon_55.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_55.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_55);
var lyr_EmpreendimentoResidencialMarianaAlarcon_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_55, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_55,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_55_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_56 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_56 = format_EmpreendimentoResidencialMarianaAlarcon_56.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_56.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_56);
var lyr_EmpreendimentoResidencialMarianaAlarcon_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_56, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_56,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_56.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialCintraAlves_57 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_57 = format_EmpreendimentoResidencialCintraAlves_57.readFeatures(json_EmpreendimentoResidencialCintraAlves_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_57.addFeatures(features_EmpreendimentoResidencialCintraAlves_57);
var lyr_EmpreendimentoResidencialCintraAlves_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_57, 
                style: style_EmpreendimentoResidencialCintraAlves_57,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_57_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_58 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_58 = format_EmpreendimentoResidencialCintraAlves_58.readFeatures(json_EmpreendimentoResidencialCintraAlves_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_58.addFeatures(features_EmpreendimentoResidencialCintraAlves_58);
var lyr_EmpreendimentoResidencialCintraAlves_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_58, 
                style: style_EmpreendimentoResidencialCintraAlves_58,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_58.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_59 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_59 = format_EmpreendimentoLoteamentolamo_59.readFeatures(json_EmpreendimentoLoteamentolamo_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_59.addFeatures(features_EmpreendimentoLoteamentolamo_59);
var lyr_EmpreendimentoLoteamentolamo_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_59, 
                style: style_EmpreendimentoLoteamentolamo_59,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_2.png" /> Área Remanescente<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_4.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_6.png" /> Lotes Residenciais<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_7.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_8.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_59_9.png" /> Viela<br />' });
var format_EmpreendimentoLoteamentolamo_60 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_60 = format_EmpreendimentoLoteamentolamo_60.readFeatures(json_EmpreendimentoLoteamentolamo_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_60.addFeatures(features_EmpreendimentoLoteamentolamo_60);
var lyr_EmpreendimentoLoteamentolamo_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_60, 
                style: style_EmpreendimentoLoteamentolamo_60,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_60.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_61 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_61 = format_EmpreendimentoSantaLina_61.readFeatures(json_EmpreendimentoSantaLina_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_61.addFeatures(features_EmpreendimentoSantaLina_61);
var lyr_EmpreendimentoSantaLina_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_61, 
                style: style_EmpreendimentoSantaLina_61,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_61_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_61_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_62 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_62 = format_EmpreendimentoSantaLina_62.readFeatures(json_EmpreendimentoSantaLina_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_62.addFeatures(features_EmpreendimentoSantaLina_62);
var lyr_EmpreendimentoSantaLina_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_62, 
                style: style_EmpreendimentoSantaLina_62,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_62.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegre_63 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_63 = format_EmpreendimentoResidencialPousoAlegre_63.readFeatures(json_EmpreendimentoResidencialPousoAlegre_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_63.addFeatures(features_EmpreendimentoResidencialPousoAlegre_63);
var lyr_EmpreendimentoResidencialPousoAlegre_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_63, 
                style: style_EmpreendimentoResidencialPousoAlegre_63,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_63_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_64 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_64 = format_EmpreendimentoResidencialPousoAlegre_64.readFeatures(json_EmpreendimentoResidencialPousoAlegre_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_64.addFeatures(features_EmpreendimentoResidencialPousoAlegre_64);
var lyr_EmpreendimentoResidencialPousoAlegre_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_64, 
                style: style_EmpreendimentoResidencialPousoAlegre_64,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_64.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_65 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_65 = format_EmpreendimentoResidencialAltodaFazenda_65.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_65.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_65);
var lyr_EmpreendimentoResidencialAltodaFazenda_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_65, 
                style: style_EmpreendimentoResidencialAltodaFazenda_65,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_65_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_65_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_65_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_65_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_65_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_66 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_66 = format_EmpreendimentoResidencialAltodaFazenda_66.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_66.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_66);
var lyr_EmpreendimentoResidencialAltodaFazenda_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_66, 
                style: style_EmpreendimentoResidencialAltodaFazenda_66,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_66.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_67 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_67 = format_EmpreendimentoResidencialMarioTasso_67.readFeatures(json_EmpreendimentoResidencialMarioTasso_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_67.addFeatures(features_EmpreendimentoResidencialMarioTasso_67);
var lyr_EmpreendimentoResidencialMarioTasso_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_67, 
                style: style_EmpreendimentoResidencialMarioTasso_67,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_67_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_67_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_67_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_67_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_67_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_68 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_68 = format_EmpreendimentoResidencialMarioTasso_68.readFeatures(json_EmpreendimentoResidencialMarioTasso_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_68.addFeatures(features_EmpreendimentoResidencialMarioTasso_68);
var lyr_EmpreendimentoResidencialMarioTasso_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_68, 
                style: style_EmpreendimentoResidencialMarioTasso_68,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_68.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoResidenciaisVivenna_69 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_69 = format_EmpreendimentoResidenciaisVivenna_69.readFeatures(json_EmpreendimentoResidenciaisVivenna_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_69.addFeatures(features_EmpreendimentoResidenciaisVivenna_69);
var lyr_EmpreendimentoResidenciaisVivenna_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_69, 
                style: style_EmpreendimentoResidenciaisVivenna_69,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
    title: 'Empreendimento Residenciais Vivenna<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_6.png" /> Lotes Residenciais<br />\
    <img src="styles/legend/EmpreendimentoResidenciaisVivenna_69_7.png" /> Área Non Edificandi<br />' });
var format_EmpreendimentoResidenciaisVivenna_70 = new ol.format.GeoJSON();
var features_EmpreendimentoResidenciaisVivenna_70 = format_EmpreendimentoResidenciaisVivenna_70.readFeatures(json_EmpreendimentoResidenciaisVivenna_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidenciaisVivenna_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidenciaisVivenna_70.addFeatures(features_EmpreendimentoResidenciaisVivenna_70);
var lyr_EmpreendimentoResidenciaisVivenna_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidenciaisVivenna_70, 
                style: style_EmpreendimentoResidenciaisVivenna_70,
                popuplayertitle: 'Empreendimento Residenciais Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidenciaisVivenna_70.png" /> Empreendimento Residenciais Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_71 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_71 = format_EmpreendimentoAbuDhabiParadiseResortResidence_71.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_71.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_71);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_71, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_71,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_71_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_72 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_72 = format_EmpreendimentoAbuDhabiParadiseResortResidence_72.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_72.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_72);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_72, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_72,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_72.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_73 = new ol.format.GeoJSON();
var features_EmprendimentoElias_73 = format_EmprendimentoElias_73.readFeatures(json_EmprendimentoElias_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_73.addFeatures(features_EmprendimentoElias_73);
var lyr_EmprendimentoElias_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_73, 
                style: style_EmprendimentoElias_73,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_73_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_73_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_73_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_73_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_73_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_73_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_73_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_74 = new ol.format.GeoJSON();
var features_EmprendimentoElias_74 = format_EmprendimentoElias_74.readFeatures(json_EmprendimentoElias_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_74.addFeatures(features_EmprendimentoElias_74);
var lyr_EmprendimentoElias_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_74, 
                style: style_EmprendimentoElias_74,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_74.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_75 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_75 = format_EmpreendimentoResidencialSoCarlosI_75.readFeatures(json_EmpreendimentoResidencialSoCarlosI_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_75.addFeatures(features_EmpreendimentoResidencialSoCarlosI_75);
var lyr_EmpreendimentoResidencialSoCarlosI_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_75, 
                style: style_EmpreendimentoResidencialSoCarlosI_75,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_75_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_75_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_75_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_75_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_75_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_76 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_76 = format_EmpreendimentoResidencialSoCarlosI_76.readFeatures(json_EmpreendimentoResidencialSoCarlosI_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_76.addFeatures(features_EmpreendimentoResidencialSoCarlosI_76);
var lyr_EmpreendimentoResidencialSoCarlosI_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_76, 
                style: style_EmpreendimentoResidencialSoCarlosI_76,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_76.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_77 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_77 = format_EmpreendimentoMonti_77.readFeatures(json_EmpreendimentoMonti_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_77.addFeatures(features_EmpreendimentoMonti_77);
var lyr_EmpreendimentoMonti_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_77, 
                style: style_EmpreendimentoMonti_77,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_77_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_78 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_78 = format_EmpreendimentoMonti_78.readFeatures(json_EmpreendimentoMonti_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_78.addFeatures(features_EmpreendimentoMonti_78);
var lyr_EmpreendimentoMonti_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_78, 
                style: style_EmpreendimentoMonti_78,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_78.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_79 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_79 = format_EmpreendimentoResidencialMoradadoBosque_79.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_79.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_79);
var lyr_EmpreendimentoResidencialMoradadoBosque_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_79, 
                style: style_EmpreendimentoResidencialMoradadoBosque_79,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_4.png" /> FORMATO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_6.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_79_7.png" /> Lotes mistos<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_80 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_80 = format_EmpreendimentoResidencialMoradadoBosque_80.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_80.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_80);
var lyr_EmpreendimentoResidencialMoradadoBosque_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_80, 
                style: style_EmpreendimentoResidencialMoradadoBosque_80,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_80.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_81 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_81 = format_EmpreendimentoVittaAlvorada_81.readFeatures(json_EmpreendimentoVittaAlvorada_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_81.addFeatures(features_EmpreendimentoVittaAlvorada_81);
var lyr_EmpreendimentoVittaAlvorada_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_81, 
                style: style_EmpreendimentoVittaAlvorada_81,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_81_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_82 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_82 = format_EmpreendimentoVittaAlvorada_82.readFeatures(json_EmpreendimentoVittaAlvorada_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_82.addFeatures(features_EmpreendimentoVittaAlvorada_82);
var lyr_EmpreendimentoVittaAlvorada_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_82, 
                style: style_EmpreendimentoVittaAlvorada_82,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_82.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_83 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_83 = format_EmpreendimentoResidencialMarthaHelena_83.readFeatures(json_EmpreendimentoResidencialMarthaHelena_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_83.addFeatures(features_EmpreendimentoResidencialMarthaHelena_83);
var lyr_EmpreendimentoResidencialMarthaHelena_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_83, 
                style: style_EmpreendimentoResidencialMarthaHelena_83,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_83_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_83_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_84 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_84 = format_EmpreendimentoResidencialMarthaHelena_84.readFeatures(json_EmpreendimentoResidencialMarthaHelena_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_84.addFeatures(features_EmpreendimentoResidencialMarthaHelena_84);
var lyr_EmpreendimentoResidencialMarthaHelena_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_84, 
                style: style_EmpreendimentoResidencialMarthaHelena_84,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_84.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_85 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_85 = format_EmpreendimentoResidencialYasminTorres_85.readFeatures(json_EmpreendimentoResidencialYasminTorres_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_85.addFeatures(features_EmpreendimentoResidencialYasminTorres_85);
var lyr_EmpreendimentoResidencialYasminTorres_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_85, 
                style: style_EmpreendimentoResidencialYasminTorres_85,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_85.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_86 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_86 = format_EmpreendimentoResidencialYasminTorres_86.readFeatures(json_EmpreendimentoResidencialYasminTorres_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_86.addFeatures(features_EmpreendimentoResidencialYasminTorres_86);
var lyr_EmpreendimentoResidencialYasminTorres_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_86, 
                style: style_EmpreendimentoResidencialYasminTorres_86,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_86.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_87 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_87 = format_EmpreendimentoPalmeiraReal_87.readFeatures(json_EmpreendimentoPalmeiraReal_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_87.addFeatures(features_EmpreendimentoPalmeiraReal_87);
var lyr_EmpreendimentoPalmeiraReal_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_87, 
                style: style_EmpreendimentoPalmeiraReal_87,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_87_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_88 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_88 = format_EmpreendimentoPalmeiraReal_88.readFeatures(json_EmpreendimentoPalmeiraReal_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_88.addFeatures(features_EmpreendimentoPalmeiraReal_88);
var lyr_EmpreendimentoPalmeiraReal_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_88, 
                style: style_EmpreendimentoPalmeiraReal_88,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_88.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_89 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_89 = format_EmpreendimentoEssence_89.readFeatures(json_EmpreendimentoEssence_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_89.addFeatures(features_EmpreendimentoEssence_89);
var lyr_EmpreendimentoEssence_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_89, 
                style: style_EmpreendimentoEssence_89,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_89.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_90 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_90 = format_EmpreendimentoEssence_90.readFeatures(json_EmpreendimentoEssence_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_90.addFeatures(features_EmpreendimentoEssence_90);
var lyr_EmpreendimentoEssence_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_90, 
                style: style_EmpreendimentoEssence_90,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_90.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_91 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_91 = format_EmpreendimentoVersalhes_91.readFeatures(json_EmpreendimentoVersalhes_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_91.addFeatures(features_EmpreendimentoVersalhes_91);
var lyr_EmpreendimentoVersalhes_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_91, 
                style: style_EmpreendimentoVersalhes_91,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_91_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_92 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_92 = format_EmpreendimentoVersalhes_92.readFeatures(json_EmpreendimentoVersalhes_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_92.addFeatures(features_EmpreendimentoVersalhes_92);
var lyr_EmpreendimentoVersalhes_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_92, 
                style: style_EmpreendimentoVersalhes_92,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_92.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_93 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_93 = format_EmpreendimentoSonetto_93.readFeatures(json_EmpreendimentoSonetto_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_93.addFeatures(features_EmpreendimentoSonetto_93);
var lyr_EmpreendimentoSonetto_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_93, 
                style: style_EmpreendimentoSonetto_93,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_93.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_94 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_94 = format_EmpreendimentoSonetto_94.readFeatures(json_EmpreendimentoSonetto_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_94.addFeatures(features_EmpreendimentoSonetto_94);
var lyr_EmpreendimentoSonetto_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_94, 
                style: style_EmpreendimentoSonetto_94,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_94.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_95 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_95 = format_EmpreendimentoResidencialSantaIns_95.readFeatures(json_EmpreendimentoResidencialSantaIns_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_95.addFeatures(features_EmpreendimentoResidencialSantaIns_95);
var lyr_EmpreendimentoResidencialSantaIns_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_95, 
                style: style_EmpreendimentoResidencialSantaIns_95,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_95_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_96 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_96 = format_EmpreendimentoResidencialSantaIns_96.readFeatures(json_EmpreendimentoResidencialSantaIns_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_96.addFeatures(features_EmpreendimentoResidencialSantaIns_96);
var lyr_EmpreendimentoResidencialSantaIns_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_96, 
                style: style_EmpreendimentoResidencialSantaIns_96,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_96.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_97 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_97 = format_EmpreendimentoEdifcioSolNascente_97.readFeatures(json_EmpreendimentoEdifcioSolNascente_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_97.addFeatures(features_EmpreendimentoEdifcioSolNascente_97);
var lyr_EmpreendimentoEdifcioSolNascente_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_97, 
                style: style_EmpreendimentoEdifcioSolNascente_97,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_97.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_98 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_98 = format_EmpreendimentoEdifcioSolNascente_98.readFeatures(json_EmpreendimentoEdifcioSolNascente_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_98.addFeatures(features_EmpreendimentoEdifcioSolNascente_98);
var lyr_EmpreendimentoEdifcioSolNascente_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_98, 
                style: style_EmpreendimentoEdifcioSolNascente_98,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_98.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_99 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_99 = format_EmpreendimentoResidencialQuintadosOitis_99.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_99.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_99);
var lyr_EmpreendimentoResidencialQuintadosOitis_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_99, 
                style: style_EmpreendimentoResidencialQuintadosOitis_99,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_99_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_100 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_100 = format_EmpreendimentoResidencialQuintadosOitis_100.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_100.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_100);
var lyr_EmpreendimentoResidencialQuintadosOitis_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_100, 
                style: style_EmpreendimentoResidencialQuintadosOitis_100,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_100.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_101 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_101 = format_EmpreendimentoResidencialQuintadoSol_101.readFeatures(json_EmpreendimentoResidencialQuintadoSol_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_101.addFeatures(features_EmpreendimentoResidencialQuintadoSol_101);
var lyr_EmpreendimentoResidencialQuintadoSol_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_101, 
                style: style_EmpreendimentoResidencialQuintadoSol_101,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_101_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_101_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_101_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_101_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_101_4.png" /> Área Verde<br />' });
var format_EmpreendimentoResidencialQuintadoSol_102 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_102 = format_EmpreendimentoResidencialQuintadoSol_102.readFeatures(json_EmpreendimentoResidencialQuintadoSol_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_102.addFeatures(features_EmpreendimentoResidencialQuintadoSol_102);
var lyr_EmpreendimentoResidencialQuintadoSol_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_102, 
                style: style_EmpreendimentoResidencialQuintadoSol_102,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_102.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoResidencialNairRetuciII_103 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_103 = format_EmpreendimentoResidencialNairRetuciII_103.readFeatures(json_EmpreendimentoResidencialNairRetuciII_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_103.addFeatures(features_EmpreendimentoResidencialNairRetuciII_103);
var lyr_EmpreendimentoResidencialNairRetuciII_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_103, 
                style: style_EmpreendimentoResidencialNairRetuciII_103,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Residencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_103_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_103_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_103_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_103_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialNairRetuciII_103_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialNairRetuciII_104 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialNairRetuciII_104 = format_EmpreendimentoResidencialNairRetuciII_104.readFeatures(json_EmpreendimentoResidencialNairRetuciII_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialNairRetuciII_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialNairRetuciII_104.addFeatures(features_EmpreendimentoResidencialNairRetuciII_104);
var lyr_EmpreendimentoResidencialNairRetuciII_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialNairRetuciII_104, 
                style: style_EmpreendimentoResidencialNairRetuciII_104,
                popuplayertitle: 'Empreendimento Residencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialNairRetuciII_104.png" /> Empreendimento Residencial Nair Retuci II'
            });
var format_EmpreendimentoParquePalmeiraImperial_105 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_105 = format_EmpreendimentoParquePalmeiraImperial_105.readFeatures(json_EmpreendimentoParquePalmeiraImperial_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_105.addFeatures(features_EmpreendimentoParquePalmeiraImperial_105);
var lyr_EmpreendimentoParquePalmeiraImperial_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_105, 
                style: style_EmpreendimentoParquePalmeiraImperial_105,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_105_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_105_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_105_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_105_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_105_4.png" /> Passeio<br />' });
var format_EmpreendimentoParquePalmeiraImperial_106 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_106 = format_EmpreendimentoParquePalmeiraImperial_106.readFeatures(json_EmpreendimentoParquePalmeiraImperial_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_106.addFeatures(features_EmpreendimentoParquePalmeiraImperial_106);
var lyr_EmpreendimentoParquePalmeiraImperial_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_106, 
                style: style_EmpreendimentoParquePalmeiraImperial_106,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_106.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_107 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_107 = format_EmpreendimentoBordadaMata_107.readFeatures(json_EmpreendimentoBordadaMata_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_107.addFeatures(features_EmpreendimentoBordadaMata_107);
var lyr_EmpreendimentoBordadaMata_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_107, 
                style: style_EmpreendimentoBordadaMata_107,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_107_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_108 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_108 = format_EmpreendimentoBordadaMata_108.readFeatures(json_EmpreendimentoBordadaMata_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_108.addFeatures(features_EmpreendimentoBordadaMata_108);
var lyr_EmpreendimentoBordadaMata_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_108, 
                style: style_EmpreendimentoBordadaMata_108,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_108.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoResidencialCidadeJardim_109 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_109 = format_EmpreendimentoResidencialCidadeJardim_109.readFeatures(json_EmpreendimentoResidencialCidadeJardim_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_109.addFeatures(features_EmpreendimentoResidencialCidadeJardim_109);
var lyr_EmpreendimentoResidencialCidadeJardim_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_109, 
                style: style_EmpreendimentoResidencialCidadeJardim_109,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Residencial Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_109_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_109_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_109_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_109_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCidadeJardim_109_4.png" /> Área Verde<br />' });
var format_EmpreendimentoResidencialCidadeJardim_110 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCidadeJardim_110 = format_EmpreendimentoResidencialCidadeJardim_110.readFeatures(json_EmpreendimentoResidencialCidadeJardim_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCidadeJardim_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCidadeJardim_110.addFeatures(features_EmpreendimentoResidencialCidadeJardim_110);
var lyr_EmpreendimentoResidencialCidadeJardim_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCidadeJardim_110, 
                style: style_EmpreendimentoResidencialCidadeJardim_110,
                popuplayertitle: 'Empreendimento Residencial Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCidadeJardim_110.png" /> Empreendimento Residencial Cidade Jardim'
            });
var format_EmpreendimentoEdifcioResidencialHope_111 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_111 = format_EmpreendimentoEdifcioResidencialHope_111.readFeatures(json_EmpreendimentoEdifcioResidencialHope_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_111.addFeatures(features_EmpreendimentoEdifcioResidencialHope_111);
var lyr_EmpreendimentoEdifcioResidencialHope_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_111, 
                style: style_EmpreendimentoEdifcioResidencialHope_111,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_111.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_112 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_112 = format_EmpreendimentoEdifcioResidencialHope_112.readFeatures(json_EmpreendimentoEdifcioResidencialHope_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_112.addFeatures(features_EmpreendimentoEdifcioResidencialHope_112);
var lyr_EmpreendimentoEdifcioResidencialHope_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_112, 
                style: style_EmpreendimentoEdifcioResidencialHope_112,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_112.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_113 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_113 = format_EmpreendimentoHorizResidence_113.readFeatures(json_EmpreendimentoHorizResidence_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_113.addFeatures(features_EmpreendimentoHorizResidence_113);
var lyr_EmpreendimentoHorizResidence_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_113, 
                style: style_EmpreendimentoHorizResidence_113,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_113.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_114 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_114 = format_EmpreendimentoHorizResidence_114.readFeatures(json_EmpreendimentoHorizResidence_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_114.addFeatures(features_EmpreendimentoHorizResidence_114);
var lyr_EmpreendimentoHorizResidence_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_114, 
                style: style_EmpreendimentoHorizResidence_114,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_114.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_115 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_115 = format_EmpreendimentoJardimFlora_115.readFeatures(json_EmpreendimentoJardimFlora_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_115.addFeatures(features_EmpreendimentoJardimFlora_115);
var lyr_EmpreendimentoJardimFlora_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_115, 
                style: style_EmpreendimentoJardimFlora_115,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_115_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_115_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_115_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_115_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_115_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimFlora_116 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_116 = format_EmpreendimentoJardimFlora_116.readFeatures(json_EmpreendimentoJardimFlora_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_116.addFeatures(features_EmpreendimentoJardimFlora_116);
var lyr_EmpreendimentoJardimFlora_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_116, 
                style: style_EmpreendimentoJardimFlora_116,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_116.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_117 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_117 = format_EmpreendimentoJardimHorizonte_117.readFeatures(json_EmpreendimentoJardimHorizonte_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_117.addFeatures(features_EmpreendimentoJardimHorizonte_117);
var lyr_EmpreendimentoJardimHorizonte_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_117, 
                style: style_EmpreendimentoJardimHorizonte_117,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_117_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_118 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_118 = format_EmpreendimentoJardimHorizonte_118.readFeatures(json_EmpreendimentoJardimHorizonte_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_118.addFeatures(features_EmpreendimentoJardimHorizonte_118);
var lyr_EmpreendimentoJardimHorizonte_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_118, 
                style: style_EmpreendimentoJardimHorizonte_118,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_118.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_119 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_119 = format_EmpreendimentoJardimMariaLuiza_119.readFeatures(json_EmpreendimentoJardimMariaLuiza_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_119.addFeatures(features_EmpreendimentoJardimMariaLuiza_119);
var lyr_EmpreendimentoJardimMariaLuiza_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_119, 
                style: style_EmpreendimentoJardimMariaLuiza_119,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_119_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_119_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_119_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_119_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_119_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_120 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_120 = format_EmpreendimentoJardimMariaLuiza_120.readFeatures(json_EmpreendimentoJardimMariaLuiza_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_120.addFeatures(features_EmpreendimentoJardimMariaLuiza_120);
var lyr_EmpreendimentoJardimMariaLuiza_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_120, 
                style: style_EmpreendimentoJardimMariaLuiza_120,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_120.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_121 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_121 = format_EmpreendimentoMontBlancResidence_121.readFeatures(json_EmpreendimentoMontBlancResidence_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_121.addFeatures(features_EmpreendimentoMontBlancResidence_121);
var lyr_EmpreendimentoMontBlancResidence_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_121, 
                style: style_EmpreendimentoMontBlancResidence_121,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_121.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_122 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_122 = format_EmpreendimentoMontBlancResidence_122.readFeatures(json_EmpreendimentoMontBlancResidence_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_122.addFeatures(features_EmpreendimentoMontBlancResidence_122);
var lyr_EmpreendimentoMontBlancResidence_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_122, 
                style: style_EmpreendimentoMontBlancResidence_122,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_122.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_123 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_123 = format_EmpreendimentoMoradadoVerdeII_123.readFeatures(json_EmpreendimentoMoradadoVerdeII_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_123.addFeatures(features_EmpreendimentoMoradadoVerdeII_123);
var lyr_EmpreendimentoMoradadoVerdeII_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_123, 
                style: style_EmpreendimentoMoradadoVerdeII_123,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_123_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_124 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_124 = format_EmpreendimentoMoradadoVerdeII_124.readFeatures(json_EmpreendimentoMoradadoVerdeII_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_124.addFeatures(features_EmpreendimentoMoradadoVerdeII_124);
var lyr_EmpreendimentoMoradadoVerdeII_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_124, 
                style: style_EmpreendimentoMoradadoVerdeII_124,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_124.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoResicencialNairRetuci_125 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_125 = format_EmpreendimentoResicencialNairRetuci_125.readFeatures(json_EmpreendimentoResicencialNairRetuci_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_125.addFeatures(features_EmpreendimentoResicencialNairRetuci_125);
var lyr_EmpreendimentoResicencialNairRetuci_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_125, 
                style: style_EmpreendimentoResicencialNairRetuci_125,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_125_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_126 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_126 = format_EmpreendimentoResicencialNairRetuci_126.readFeatures(json_EmpreendimentoResicencialNairRetuci_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_126.addFeatures(features_EmpreendimentoResicencialNairRetuci_126);
var lyr_EmpreendimentoResicencialNairRetuci_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_126, 
                style: style_EmpreendimentoResicencialNairRetuci_126,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_126.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoParagon_127 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_127 = format_EmpreendimentoParagon_127.readFeatures(json_EmpreendimentoParagon_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_127.addFeatures(features_EmpreendimentoParagon_127);
var lyr_EmpreendimentoParagon_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_127, 
                style: style_EmpreendimentoParagon_127,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_127_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_128 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_128 = format_EmpreendimentoParagon_128.readFeatures(json_EmpreendimentoParagon_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_128.addFeatures(features_EmpreendimentoParagon_128);
var lyr_EmpreendimentoParagon_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_128, 
                style: style_EmpreendimentoParagon_128,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_128.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_129 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_129 = format_EmpreendimentoParqueVillaLobos_129.readFeatures(json_EmpreendimentoParqueVillaLobos_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_129.addFeatures(features_EmpreendimentoParqueVillaLobos_129);
var lyr_EmpreendimentoParqueVillaLobos_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_129, 
                style: style_EmpreendimentoParqueVillaLobos_129,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_129_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_130 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_130 = format_EmpreendimentoParqueVillaLobos_130.readFeatures(json_EmpreendimentoParqueVillaLobos_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_130.addFeatures(features_EmpreendimentoParqueVillaLobos_130);
var lyr_EmpreendimentoParqueVillaLobos_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_130, 
                style: style_EmpreendimentoParqueVillaLobos_130,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_130.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_131 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_131 = format_EmpreendimentoDaVinci_131.readFeatures(json_EmpreendimentoDaVinci_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_131.addFeatures(features_EmpreendimentoDaVinci_131);
var lyr_EmpreendimentoDaVinci_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_131, 
                style: style_EmpreendimentoDaVinci_131,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_131.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_132 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_132 = format_EmpreendimentoDaVinci_132.readFeatures(json_EmpreendimentoDaVinci_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_132.addFeatures(features_EmpreendimentoDaVinci_132);
var lyr_EmpreendimentoDaVinci_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_132, 
                style: style_EmpreendimentoDaVinci_132,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_132.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_133 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_133 = format_EmpreendimentoResidencialDomingosJardini_133.readFeatures(json_EmpreendimentoResidencialDomingosJardini_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_133.addFeatures(features_EmpreendimentoResidencialDomingosJardini_133);
var lyr_EmpreendimentoResidencialDomingosJardini_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_133, 
                style: style_EmpreendimentoResidencialDomingosJardini_133,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_133_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_134 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_134 = format_EmpreendimentoResidencialDomingosJardini_134.readFeatures(json_EmpreendimentoResidencialDomingosJardini_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_134.addFeatures(features_EmpreendimentoResidencialDomingosJardini_134);
var lyr_EmpreendimentoResidencialDomingosJardini_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_134, 
                style: style_EmpreendimentoResidencialDomingosJardini_134,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_134.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_135 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_135 = format_EmpreendimentoResidencialSantaF_135.readFeatures(json_EmpreendimentoResidencialSantaF_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_135.addFeatures(features_EmpreendimentoResidencialSantaF_135);
var lyr_EmpreendimentoResidencialSantaF_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_135, 
                style: style_EmpreendimentoResidencialSantaF_135,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_135_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_136 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_136 = format_EmpreendimentoResidencialSantaF_136.readFeatures(json_EmpreendimentoResidencialSantaF_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_136.addFeatures(features_EmpreendimentoResidencialSantaF_136);
var lyr_EmpreendimentoResidencialSantaF_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_136, 
                style: style_EmpreendimentoResidencialSantaF_136,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_136.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_137 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_137 = format_EmpreendimentoEdifcioRuadoSol_137.readFeatures(json_EmpreendimentoEdifcioRuadoSol_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_137.addFeatures(features_EmpreendimentoEdifcioRuadoSol_137);
var lyr_EmpreendimentoEdifcioRuadoSol_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_137, 
                style: style_EmpreendimentoEdifcioRuadoSol_137,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_137.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_138 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_138 = format_EmpreendimentoEdifcioRuadoSol_138.readFeatures(json_EmpreendimentoEdifcioRuadoSol_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_138.addFeatures(features_EmpreendimentoEdifcioRuadoSol_138);
var lyr_EmpreendimentoEdifcioRuadoSol_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_138, 
                style: style_EmpreendimentoEdifcioRuadoSol_138,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_138.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_139 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_139 = format_EmpreendimentoTorontoResidence_139.readFeatures(json_EmpreendimentoTorontoResidence_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_139.addFeatures(features_EmpreendimentoTorontoResidence_139);
var lyr_EmpreendimentoTorontoResidence_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_139, 
                style: style_EmpreendimentoTorontoResidence_139,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_139_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_140 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_140 = format_EmpreendimentoTorontoResidence_140.readFeatures(json_EmpreendimentoTorontoResidence_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_140.addFeatures(features_EmpreendimentoTorontoResidence_140);
var lyr_EmpreendimentoTorontoResidence_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_140, 
                style: style_EmpreendimentoTorontoResidence_140,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_140.png" /> Empreendimento Toronto Residence'
            });
var format_ServidoRamal138kVFranca4Guanabara_141 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_141 = format_ServidoRamal138kVFranca4Guanabara_141.readFeatures(json_ServidoRamal138kVFranca4Guanabara_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_141.addFeatures(features_ServidoRamal138kVFranca4Guanabara_141);
var lyr_ServidoRamal138kVFranca4Guanabara_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_141, 
                style: style_ServidoRamal138kVFranca4Guanabara_141,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_141.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_142 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_142 = format_ServidoRamal138kVFranca4Guanabara_142.readFeatures(json_ServidoRamal138kVFranca4Guanabara_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_142.addFeatures(features_ServidoRamal138kVFranca4Guanabara_142);
var lyr_ServidoRamal138kVFranca4Guanabara_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_142, 
                style: style_ServidoRamal138kVFranca4Guanabara_142,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_142.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_143 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_143 = format_EmpreendimentosAprovado27unid_143.readFeatures(json_EmpreendimentosAprovado27unid_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_143.addFeatures(features_EmpreendimentosAprovado27unid_143);
var lyr_EmpreendimentosAprovado27unid_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_143, 
                style: style_EmpreendimentosAprovado27unid_143,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_143.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz4unid_144 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz4unid_144 = format_EmpreendimentosDiretriz4unid_144.readFeatures(json_EmpreendimentosDiretriz4unid_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz4unid_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz4unid_144.addFeatures(features_EmpreendimentosDiretriz4unid_144);
var lyr_EmpreendimentosDiretriz4unid_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz4unid_144, 
                style: style_EmpreendimentosDiretriz4unid_144,
                popuplayertitle: 'Empreendimentos  - Diretriz (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz4unid_144.png" /> Empreendimentos  - Diretriz (4 unid.)'
            });
var format_EmpreendimentosDefinitiva6unid_145 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva6unid_145 = format_EmpreendimentosDefinitiva6unid_145.readFeatures(json_EmpreendimentosDefinitiva6unid_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva6unid_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva6unid_145.addFeatures(features_EmpreendimentosDefinitiva6unid_145);
var lyr_EmpreendimentosDefinitiva6unid_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva6unid_145, 
                style: style_EmpreendimentosDefinitiva6unid_145,
                popuplayertitle: 'Empreendimentos - Definitiva (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva6unid_145.png" /> Empreendimentos - Definitiva (6 unid.)'
            });
var format_EmpreendimentosPrvia16unid_146 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia16unid_146 = format_EmpreendimentosPrvia16unid_146.readFeatures(json_EmpreendimentosPrvia16unid_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia16unid_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia16unid_146.addFeatures(features_EmpreendimentosPrvia16unid_146);
var lyr_EmpreendimentosPrvia16unid_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia16unid_146, 
                style: style_EmpreendimentosPrvia16unid_146,
                popuplayertitle: 'Empreendimentos - Prévia (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia16unid_146.png" /> Empreendimentos - Prévia (16 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_147 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_147 = format_PBZPAEdifcioPrimeHELIPONTO_147.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_147.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_147);
var lyr_PBZPAEdifcioPrimeHELIPONTO_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_147, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_147,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_147.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_148 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_148 = format_PBZPAEdifcioPrimeHELIPONTO_148.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_148.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_148);
var lyr_PBZPAEdifcioPrimeHELIPONTO_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_148, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_148,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_148_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_148_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_149 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_149 = format_PBZPAHospitalHELIPONTO_149.readFeatures(json_PBZPAHospitalHELIPONTO_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_149.addFeatures(features_PBZPAHospitalHELIPONTO_149);
var lyr_PBZPAHospitalHELIPONTO_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_149, 
                style: style_PBZPAHospitalHELIPONTO_149,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_149_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_150_11.png" /> Transição<br />' });
var format_PrprioPblicoMunicipalArena1unid_151 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalArena1unid_151 = format_PrprioPblicoMunicipalArena1unid_151.readFeatures(json_PrprioPblicoMunicipalArena1unid_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalArena1unid_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalArena1unid_151.addFeatures(features_PrprioPblicoMunicipalArena1unid_151);
var lyr_PrprioPblicoMunicipalArena1unid_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalArena1unid_151, 
                style: style_PrprioPblicoMunicipalArena1unid_151,
                popuplayertitle: 'Próprio Público Municipal - Arena (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalArena1unid_151.png" /> Próprio Público Municipal - Arena (1 unid.)'
            });
var format_PrprioPblicoMunicipalBiblioteca1unid_152 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalBiblioteca1unid_152 = format_PrprioPblicoMunicipalBiblioteca1unid_152.readFeatures(json_PrprioPblicoMunicipalBiblioteca1unid_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalBiblioteca1unid_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalBiblioteca1unid_152.addFeatures(features_PrprioPblicoMunicipalBiblioteca1unid_152);
var lyr_PrprioPblicoMunicipalBiblioteca1unid_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalBiblioteca1unid_152, 
                style: style_PrprioPblicoMunicipalBiblioteca1unid_152,
                popuplayertitle: 'Próprio Público Municipal - Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalBiblioteca1unid_152.png" /> Próprio Público Municipal - Biblioteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalCampo18unid_153 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo18unid_153 = format_PrprioPblicoMunicipalCampo18unid_153.readFeatures(json_PrprioPblicoMunicipalCampo18unid_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCampo18unid_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo18unid_153.addFeatures(features_PrprioPblicoMunicipalCampo18unid_153);
var lyr_PrprioPblicoMunicipalCampo18unid_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo18unid_153, 
                style: style_PrprioPblicoMunicipalCampo18unid_153,
                popuplayertitle: 'Próprio Público Municipal - Campo (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo18unid_153.png" /> Próprio Público Municipal - Campo (18 unid.)'
            });
var format_PrprioPblicoMunicipalCasa1unid_154 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCasa1unid_154 = format_PrprioPblicoMunicipalCasa1unid_154.readFeatures(json_PrprioPblicoMunicipalCasa1unid_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCasa1unid_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCasa1unid_154.addFeatures(features_PrprioPblicoMunicipalCasa1unid_154);
var lyr_PrprioPblicoMunicipalCasa1unid_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCasa1unid_154, 
                style: style_PrprioPblicoMunicipalCasa1unid_154,
                popuplayertitle: 'Próprio Público Municipal - Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCasa1unid_154.png" /> Próprio Público Municipal - Casa (1 unid.)'
            });
var format_PrprioPblicoMunicipalCentro4unid_155 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCentro4unid_155 = format_PrprioPblicoMunicipalCentro4unid_155.readFeatures(json_PrprioPblicoMunicipalCentro4unid_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCentro4unid_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCentro4unid_155.addFeatures(features_PrprioPblicoMunicipalCentro4unid_155);
var lyr_PrprioPblicoMunicipalCentro4unid_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCentro4unid_155, 
                style: style_PrprioPblicoMunicipalCentro4unid_155,
                popuplayertitle: 'Próprio Público Municipal - Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCentro4unid_155.png" /> Próprio Público Municipal - Centro (4 unid.)'
            });
var format_PrprioPblicoMunicipalCEPEL15unid_156 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCEPEL15unid_156 = format_PrprioPblicoMunicipalCEPEL15unid_156.readFeatures(json_PrprioPblicoMunicipalCEPEL15unid_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCEPEL15unid_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCEPEL15unid_156.addFeatures(features_PrprioPblicoMunicipalCEPEL15unid_156);
var lyr_PrprioPblicoMunicipalCEPEL15unid_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCEPEL15unid_156, 
                style: style_PrprioPblicoMunicipalCEPEL15unid_156,
                popuplayertitle: 'Próprio Público Municipal - CEPEL (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCEPEL15unid_156.png" /> Próprio Público Municipal - CEPEL (15 unid.)'
            });
var format_PrprioPblicoMunicipalConjunto4unid_157 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalConjunto4unid_157 = format_PrprioPblicoMunicipalConjunto4unid_157.readFeatures(json_PrprioPblicoMunicipalConjunto4unid_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalConjunto4unid_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalConjunto4unid_157.addFeatures(features_PrprioPblicoMunicipalConjunto4unid_157);
var lyr_PrprioPblicoMunicipalConjunto4unid_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalConjunto4unid_157, 
                style: style_PrprioPblicoMunicipalConjunto4unid_157,
                popuplayertitle: 'Próprio Público Municipal - Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalConjunto4unid_157.png" /> Próprio Público Municipal - Conjunto (4 unid.)'
            });
var format_PrprioPblicoMunicipalEstadio1unid_158 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalEstadio1unid_158 = format_PrprioPblicoMunicipalEstadio1unid_158.readFeatures(json_PrprioPblicoMunicipalEstadio1unid_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalEstadio1unid_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalEstadio1unid_158.addFeatures(features_PrprioPblicoMunicipalEstadio1unid_158);
var lyr_PrprioPblicoMunicipalEstadio1unid_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalEstadio1unid_158, 
                style: style_PrprioPblicoMunicipalEstadio1unid_158,
                popuplayertitle: 'Próprio Público Municipal - Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalEstadio1unid_158.png" /> Próprio Público Municipal - Estadio (1 unid.)'
            });
var format_PrprioPblicoMunicipalGinsio5unid_159 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGinsio5unid_159 = format_PrprioPblicoMunicipalGinsio5unid_159.readFeatures(json_PrprioPblicoMunicipalGinsio5unid_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGinsio5unid_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGinsio5unid_159.addFeatures(features_PrprioPblicoMunicipalGinsio5unid_159);
var lyr_PrprioPblicoMunicipalGinsio5unid_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGinsio5unid_159, 
                style: style_PrprioPblicoMunicipalGinsio5unid_159,
                popuplayertitle: 'Próprio Público Municipal - Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGinsio5unid_159.png" /> Próprio Público Municipal - Ginásio (5 unid.)'
            });
var format_PrprioPblicoMunicipalMuseu2unid_160 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalMuseu2unid_160 = format_PrprioPblicoMunicipalMuseu2unid_160.readFeatures(json_PrprioPblicoMunicipalMuseu2unid_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalMuseu2unid_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalMuseu2unid_160.addFeatures(features_PrprioPblicoMunicipalMuseu2unid_160);
var lyr_PrprioPblicoMunicipalMuseu2unid_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalMuseu2unid_160, 
                style: style_PrprioPblicoMunicipalMuseu2unid_160,
                popuplayertitle: 'Próprio Público Municipal - Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalMuseu2unid_160.png" /> Próprio Público Municipal - Museu (2 unid.)'
            });
var format_PrprioPblicoMunicipalParque2unid_161 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalParque2unid_161 = format_PrprioPblicoMunicipalParque2unid_161.readFeatures(json_PrprioPblicoMunicipalParque2unid_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalParque2unid_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalParque2unid_161.addFeatures(features_PrprioPblicoMunicipalParque2unid_161);
var lyr_PrprioPblicoMunicipalParque2unid_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalParque2unid_161, 
                style: style_PrprioPblicoMunicipalParque2unid_161,
                popuplayertitle: 'Próprio Público Municipal - Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalParque2unid_161.png" /> Próprio Público Municipal - Parque (2 unid.)'
            });
var format_PrprioPblicoMunicipalPavilho1unid_162 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPavilho1unid_162 = format_PrprioPblicoMunicipalPavilho1unid_162.readFeatures(json_PrprioPblicoMunicipalPavilho1unid_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPavilho1unid_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPavilho1unid_162.addFeatures(features_PrprioPblicoMunicipalPavilho1unid_162);
var lyr_PrprioPblicoMunicipalPavilho1unid_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPavilho1unid_162, 
                style: style_PrprioPblicoMunicipalPavilho1unid_162,
                popuplayertitle: 'Próprio Público Municipal - Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPavilho1unid_162.png" /> Próprio Público Municipal - Pavilhão (1 unid.)'
            });
var format_PrprioPblicoMunicipalPinacoteca1unid_163 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPinacoteca1unid_163 = format_PrprioPblicoMunicipalPinacoteca1unid_163.readFeatures(json_PrprioPblicoMunicipalPinacoteca1unid_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPinacoteca1unid_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPinacoteca1unid_163.addFeatures(features_PrprioPblicoMunicipalPinacoteca1unid_163);
var lyr_PrprioPblicoMunicipalPinacoteca1unid_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPinacoteca1unid_163, 
                style: style_PrprioPblicoMunicipalPinacoteca1unid_163,
                popuplayertitle: 'Próprio Público Municipal - Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPinacoteca1unid_163.png" /> Próprio Público Municipal - Pinacoteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalPiscina1unid_164 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPiscina1unid_164 = format_PrprioPblicoMunicipalPiscina1unid_164.readFeatures(json_PrprioPblicoMunicipalPiscina1unid_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPiscina1unid_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPiscina1unid_164.addFeatures(features_PrprioPblicoMunicipalPiscina1unid_164);
var lyr_PrprioPblicoMunicipalPiscina1unid_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPiscina1unid_164, 
                style: style_PrprioPblicoMunicipalPiscina1unid_164,
                popuplayertitle: 'Próprio Público Municipal - Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPiscina1unid_164.png" /> Próprio Público Municipal - Piscina (1 unid.)'
            });
var format_PrprioPblicoMunicipalPista1unid_165 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPista1unid_165 = format_PrprioPblicoMunicipalPista1unid_165.readFeatures(json_PrprioPblicoMunicipalPista1unid_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPista1unid_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPista1unid_165.addFeatures(features_PrprioPblicoMunicipalPista1unid_165);
var lyr_PrprioPblicoMunicipalPista1unid_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPista1unid_165, 
                style: style_PrprioPblicoMunicipalPista1unid_165,
                popuplayertitle: 'Próprio Público Municipal - Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPista1unid_165.png" /> Próprio Público Municipal - Pista (1 unid.)'
            });
var format_PrprioPblicoMunicipalPraa3unid_166 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPraa3unid_166 = format_PrprioPblicoMunicipalPraa3unid_166.readFeatures(json_PrprioPblicoMunicipalPraa3unid_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPraa3unid_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPraa3unid_166.addFeatures(features_PrprioPblicoMunicipalPraa3unid_166);
var lyr_PrprioPblicoMunicipalPraa3unid_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPraa3unid_166, 
                style: style_PrprioPblicoMunicipalPraa3unid_166,
                popuplayertitle: 'Próprio Público Municipal - Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPraa3unid_166.png" /> Próprio Público Municipal - Praça (3 unid.)'
            });
var format_PrprioPblicoMunicipalQuadra3unid_167 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalQuadra3unid_167 = format_PrprioPblicoMunicipalQuadra3unid_167.readFeatures(json_PrprioPblicoMunicipalQuadra3unid_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalQuadra3unid_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalQuadra3unid_167.addFeatures(features_PrprioPblicoMunicipalQuadra3unid_167);
var lyr_PrprioPblicoMunicipalQuadra3unid_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalQuadra3unid_167, 
                style: style_PrprioPblicoMunicipalQuadra3unid_167,
                popuplayertitle: 'Próprio Público Municipal - Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalQuadra3unid_167.png" /> Próprio Público Municipal - Quadra (3 unid.)'
            });
var format_PrprioPblicoMunicipalSecretaria1unid_168 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalSecretaria1unid_168 = format_PrprioPblicoMunicipalSecretaria1unid_168.readFeatures(json_PrprioPblicoMunicipalSecretaria1unid_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalSecretaria1unid_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalSecretaria1unid_168.addFeatures(features_PrprioPblicoMunicipalSecretaria1unid_168);
var lyr_PrprioPblicoMunicipalSecretaria1unid_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalSecretaria1unid_168, 
                style: style_PrprioPblicoMunicipalSecretaria1unid_168,
                popuplayertitle: 'Próprio Público Municipal - Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalSecretaria1unid_168.png" /> Próprio Público Municipal - Secretaria (1 unid.)'
            });
var format_PrprioPblicoMunicipalTeatro2unid_169 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalTeatro2unid_169 = format_PrprioPblicoMunicipalTeatro2unid_169.readFeatures(json_PrprioPblicoMunicipalTeatro2unid_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalTeatro2unid_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalTeatro2unid_169.addFeatures(features_PrprioPblicoMunicipalTeatro2unid_169);
var lyr_PrprioPblicoMunicipalTeatro2unid_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalTeatro2unid_169, 
                style: style_PrprioPblicoMunicipalTeatro2unid_169,
                popuplayertitle: 'Próprio Público Municipal - Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalTeatro2unid_169.png" /> Próprio Público Municipal - Teatro (2 unid.)'
            });
var format_PrprioPblicoMunicipalAtenoPrimria24unid_170 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalAtenoPrimria24unid_170 = format_PrprioPblicoMunicipalAtenoPrimria24unid_170.readFeatures(json_PrprioPblicoMunicipalAtenoPrimria24unid_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_170.addFeatures(features_PrprioPblicoMunicipalAtenoPrimria24unid_170);
var lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_170, 
                style: style_PrprioPblicoMunicipalAtenoPrimria24unid_170,
                popuplayertitle: 'Próprio Público Municipal - Atenção Primária (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalAtenoPrimria24unid_170.png" /> Próprio Público Municipal - Atenção Primária (24 unid.)'
            });
var format_PrprioPblicoMunicipalGestoAdministrativo3unid_171 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGestoAdministrativo3unid_171 = format_PrprioPblicoMunicipalGestoAdministrativo3unid_171.readFeatures(json_PrprioPblicoMunicipalGestoAdministrativo3unid_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_171.addFeatures(features_PrprioPblicoMunicipalGestoAdministrativo3unid_171);
var lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_171, 
                style: style_PrprioPblicoMunicipalGestoAdministrativo3unid_171,
                popuplayertitle: 'Próprio Público Municipal - Gestão / Administrativo (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGestoAdministrativo3unid_171.png" /> Próprio Público Municipal - Gestão / Administrativo (3 unid.)'
            });
var format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172 = format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.readFeatures(json_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.addFeatures(features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172);
var lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172, 
                style: style_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172,
                popuplayertitle: 'Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.png" /> Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)'
            });
var format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173 = format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.readFeatures(json_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.addFeatures(features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173);
var lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173, 
                style: style_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173,
                popuplayertitle: 'Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.png" /> Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)'
            });
var format_PrprioPblicoMunicipalVigilnciaemSade5unid_174 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalVigilnciaemSade5unid_174 = format_PrprioPblicoMunicipalVigilnciaemSade5unid_174.readFeatures(json_PrprioPblicoMunicipalVigilnciaemSade5unid_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_174.addFeatures(features_PrprioPblicoMunicipalVigilnciaemSade5unid_174);
var lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_174, 
                style: style_PrprioPblicoMunicipalVigilnciaemSade5unid_174,
                popuplayertitle: 'Próprio Público Municipal - Vigilância em Saúde (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalVigilnciaemSade5unid_174.png" /> Próprio Público Municipal - Vigilância em Saúde (5 unid.)'
            });
var format_ParqueZumbidosPalmares_175 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_175 = format_ParqueZumbidosPalmares_175.readFeatures(json_ParqueZumbidosPalmares_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_175.addFeatures(features_ParqueZumbidosPalmares_175);
var lyr_ParqueZumbidosPalmares_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_175, 
                style: style_ParqueZumbidosPalmares_175,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_175.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_178 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_178 = format_AntigoAterrodasMaritacas_178.readFeatures(json_AntigoAterrodasMaritacas_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_178.addFeatures(features_AntigoAterrodasMaritacas_178);
var lyr_AntigoAterrodasMaritacas_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_178, 
                style: style_AntigoAterrodasMaritacas_178,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_178.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_182 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_182 = format_AntigoAterrodaFazendaMunicipal_182.readFeatures(json_AntigoAterrodaFazendaMunicipal_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_182.addFeatures(features_AntigoAterrodaFazendaMunicipal_182);
var lyr_AntigoAterrodaFazendaMunicipal_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_182, 
                style: style_AntigoAterrodaFazendaMunicipal_182,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_182.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_185 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_185 = format_ARORemanescentesFlorestais_185.readFeatures(json_ARORemanescentesFlorestais_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_185.addFeatures(features_ARORemanescentesFlorestais_185);
var lyr_ARORemanescentesFlorestais_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_185, 
                style: style_ARORemanescentesFlorestais_185,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_185.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_186 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_186 = format_AROreadeAmortecimento_186.readFeatures(json_AROreadeAmortecimento_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_186.addFeatures(features_AROreadeAmortecimento_186);
var lyr_AROreadeAmortecimento_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_186, 
                style: style_AROreadeAmortecimento_186,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_186.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_187 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_187 = format_AROFaixadeCuestas_187.readFeatures(json_AROFaixadeCuestas_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_187.addFeatures(features_AROFaixadeCuestas_187);
var lyr_AROFaixadeCuestas_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_187, 
                style: style_AROFaixadeCuestas_187,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_187.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_188 = new ol.format.GeoJSON();
var features_AROAPP_188 = format_AROAPP_188.readFeatures(json_AROAPP_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_188.addFeatures(features_AROAPP_188);
var lyr_AROAPP_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_188, 
                style: style_AROAPP_188,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_188.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_189 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_189 = format_ARAIncongrunciasemAPP_189.readFeatures(json_ARAIncongrunciasemAPP_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_189.addFeatures(features_ARAIncongrunciasemAPP_189);
var lyr_ARAIncongrunciasemAPP_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_189, 
                style: style_ARAIncongrunciasemAPP_189,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_189.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_190 = new ol.format.GeoJSON();
var features_ARAETELagoas_190 = format_ARAETELagoas_190.readFeatures(json_ARAETELagoas_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_190.addFeatures(features_ARAETELagoas_190);
var lyr_ARAETELagoas_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_190, 
                style: style_ARAETELagoas_190,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_190.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_191 = new ol.format.GeoJSON();
var features_ARAAterros_191 = format_ARAAterros_191.readFeatures(json_ARAAterros_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_191.addFeatures(features_ARAAterros_191);
var lyr_ARAAterros_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_191, 
                style: style_ARAAterros_191,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_191.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_192 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_192 = format_AODreaUrbanaConsolidada_192.readFeatures(json_AODreaUrbanaConsolidada_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_192.addFeatures(features_AODreaUrbanaConsolidada_192);
var lyr_AODreaUrbanaConsolidada_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_192, 
                style: style_AODreaUrbanaConsolidada_192,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_192.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_193 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_193 = format_AODBaixaDensidadeNvel3_193.readFeatures(json_AODBaixaDensidadeNvel3_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_193.addFeatures(features_AODBaixaDensidadeNvel3_193);
var lyr_AODBaixaDensidadeNvel3_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_193, 
                style: style_AODBaixaDensidadeNvel3_193,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_193.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_194 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_194 = format_AODBaixaDensidadeNvel2_194.readFeatures(json_AODBaixaDensidadeNvel2_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_194.addFeatures(features_AODBaixaDensidadeNvel2_194);
var lyr_AODBaixaDensidadeNvel2_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_194, 
                style: style_AODBaixaDensidadeNvel2_194,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_194.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_195 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_195 = format_AODBaixaDensidadeNvel1_195.readFeatures(json_AODBaixaDensidadeNvel1_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_195.addFeatures(features_AODBaixaDensidadeNvel1_195);
var lyr_AODBaixaDensidadeNvel1_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_195, 
                style: style_AODBaixaDensidadeNvel1_195,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_195.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_196 = new ol.format.GeoJSON();
var features_AODAUSFase2_196 = format_AODAUSFase2_196.readFeatures(json_AODAUSFase2_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_196.addFeatures(features_AODAUSFase2_196);
var lyr_AODAUSFase2_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_196, 
                style: style_AODAUSFase2_196,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_196.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_197 = new ol.format.GeoJSON();
var features_AODAUSFase1_197 = format_AODAUSFase1_197.readFeatures(json_AODAUSFase1_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_197.addFeatures(features_AODAUSFase1_197);
var lyr_AODAUSFase1_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_197, 
                style: style_AODAUSFase1_197,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_197.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_198 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_198 = format_LimitedaBaciadoRioCanoasLeiC4322024_198.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_198.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_198);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_198, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_198,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_198.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_199 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_199 = format_LimitedaBaciadoRioCanoasLeiC1002006_199.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_199.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_199);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_199, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_199,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_199.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_200 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_200 = format_DelimitaodaBaciadoRibeirodaOna_200.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_200.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_200);
var lyr_DelimitaodaBaciadoRibeirodaOna_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_200, 
                style: style_DelimitaodaBaciadoRibeirodaOna_200,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_200.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_201 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_201 = format_AoCivilPblica1unid_201.readFeatures(json_AoCivilPblica1unid_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_201.addFeatures(features_AoCivilPblica1unid_201);
var lyr_AoCivilPblica1unid_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_201, 
                style: style_AoCivilPblica1unid_201,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_201.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_202 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_202 = format_AoCivilPblica1unid_202.readFeatures(json_AoCivilPblica1unid_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_202.addFeatures(features_AoCivilPblica1unid_202);
var lyr_AoCivilPblica1unid_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_202, 
                style: style_AoCivilPblica1unid_202,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_202.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_203 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_203 = format_CartaAnuncia20unid_203.readFeatures(json_CartaAnuncia20unid_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_203.addFeatures(features_CartaAnuncia20unid_203);
var lyr_CartaAnuncia20unid_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_203, 
                style: style_CartaAnuncia20unid_203,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_203.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia19unid_204 = new ol.format.GeoJSON();
var features_CartaAnuncia19unid_204 = format_CartaAnuncia19unid_204.readFeatures(json_CartaAnuncia19unid_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia19unid_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia19unid_204.addFeatures(features_CartaAnuncia19unid_204);
var lyr_CartaAnuncia19unid_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia19unid_204, 
                style: style_CartaAnuncia19unid_204,
                popuplayertitle: 'Carta Anuência (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia19unid_204.png" /> Carta Anuência (19 unid.)'
            });
var format_PlantioVoluntrio1unid_205 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_205 = format_PlantioVoluntrio1unid_205.readFeatures(json_PlantioVoluntrio1unid_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_205.addFeatures(features_PlantioVoluntrio1unid_205);
var lyr_PlantioVoluntrio1unid_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_205, 
                style: style_PlantioVoluntrio1unid_205,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_205.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_206 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_206 = format_PlantioVoluntrio1unid_206.readFeatures(json_PlantioVoluntrio1unid_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_206.addFeatures(features_PlantioVoluntrio1unid_206);
var lyr_PlantioVoluntrio1unid_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_206, 
                style: style_PlantioVoluntrio1unid_206,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_206.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_207 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_207 = format_TACMinistrioPblico9unid_207.readFeatures(json_TACMinistrioPblico9unid_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_207.addFeatures(features_TACMinistrioPblico9unid_207);
var lyr_TACMinistrioPblico9unid_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_207, 
                style: style_TACMinistrioPblico9unid_207,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_207.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_208 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_208 = format_TACMinistrioPblico9unid_208.readFeatures(json_TACMinistrioPblico9unid_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_208.addFeatures(features_TACMinistrioPblico9unid_208);
var lyr_TACMinistrioPblico9unid_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_208, 
                style: style_TACMinistrioPblico9unid_208,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_208.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_209 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_209 = format_TCRACETESB28unid_209.readFeatures(json_TCRACETESB28unid_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_209.addFeatures(features_TCRACETESB28unid_209);
var lyr_TCRACETESB28unid_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_209, 
                style: style_TCRACETESB28unid_209,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_209.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_210 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_210 = format_TCRACETESB28unid_210.readFeatures(json_TCRACETESB28unid_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_210.addFeatures(features_TCRACETESB28unid_210);
var lyr_TCRACETESB28unid_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_210, 
                style: style_TCRACETESB28unid_210,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_210.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_211 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_211 = format_TCRAMunicipal14unid_211.readFeatures(json_TCRAMunicipal14unid_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_211.addFeatures(features_TCRAMunicipal14unid_211);
var lyr_TCRAMunicipal14unid_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_211, 
                style: style_TCRAMunicipal14unid_211,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_211.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_212 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_212 = format_TCRAMunicipal14unid_212.readFeatures(json_TCRAMunicipal14unid_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_212.addFeatures(features_TCRAMunicipal14unid_212);
var lyr_TCRAMunicipal14unid_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_212, 
                style: style_TCRAMunicipal14unid_212,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_212.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_213 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_213 = format_TRPRLCETESB2unid_213.readFeatures(json_TRPRLCETESB2unid_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_213.addFeatures(features_TRPRLCETESB2unid_213);
var lyr_TRPRLCETESB2unid_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_213, 
                style: style_TRPRLCETESB2unid_213,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_213.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_214 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_214 = format_TRPRLCETESB2unid_214.readFeatures(json_TRPRLCETESB2unid_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_214.addFeatures(features_TRPRLCETESB2unid_214);
var lyr_TRPRLCETESB2unid_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_214, 
                style: style_TRPRLCETESB2unid_214,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_214.png" /> TRPRL CETESB (2 unid.)'
            });
var format_JardimZoobotnicoDelimitao_215 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_215 = format_JardimZoobotnicoDelimitao_215.readFeatures(json_JardimZoobotnicoDelimitao_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoDelimitao_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_215.addFeatures(features_JardimZoobotnicoDelimitao_215);
var lyr_JardimZoobotnicoDelimitao_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_215, 
                style: style_JardimZoobotnicoDelimitao_215,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_215.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_216 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_216 = format_JardimZoobotnicoTrajetos_216.readFeatures(json_JardimZoobotnicoTrajetos_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoTrajetos_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_216.addFeatures(features_JardimZoobotnicoTrajetos_216);
var lyr_JardimZoobotnicoTrajetos_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_216, 
                style: style_JardimZoobotnicoTrajetos_216,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_216.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_217 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_217 = format_JardimZoobotnicoPontosdeInteresse19unid_217.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_217.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_217);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_217, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_217,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_217.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_218 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_218 = format_ParquedosTrabalhadores_218.readFeatures(json_ParquedosTrabalhadores_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_218.addFeatures(features_ParquedosTrabalhadores_218);
var lyr_ParquedosTrabalhadores_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_218, 
                style: style_ParquedosTrabalhadores_218,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_218.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_219 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_219 = format_ParquedosTrabalhadores_219.readFeatures(json_ParquedosTrabalhadores_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_219.addFeatures(features_ParquedosTrabalhadores_219);
var lyr_ParquedosTrabalhadores_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_219, 
                style: style_ParquedosTrabalhadores_219,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_219.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_220 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_220 = format_ComplexoPoliesportivo_220.readFeatures(json_ComplexoPoliesportivo_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_220.addFeatures(features_ComplexoPoliesportivo_220);
var lyr_ComplexoPoliesportivo_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_220, 
                style: style_ComplexoPoliesportivo_220,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_220.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_221 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_221 = format_ComplexoPoliesportivo_221.readFeatures(json_ComplexoPoliesportivo_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_221.addFeatures(features_ComplexoPoliesportivo_221);
var lyr_ComplexoPoliesportivo_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_221, 
                style: style_ComplexoPoliesportivo_221,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_221.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_222 = new ol.format.GeoJSON();
var features_ParqueCaxambu_222 = format_ParqueCaxambu_222.readFeatures(json_ParqueCaxambu_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_222.addFeatures(features_ParqueCaxambu_222);
var lyr_ParqueCaxambu_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_222, 
                style: style_ParqueCaxambu_222,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_222.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_223 = new ol.format.GeoJSON();
var features_ParqueCaxambu_223 = format_ParqueCaxambu_223.readFeatures(json_ParqueCaxambu_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_223.addFeatures(features_ParqueCaxambu_223);
var lyr_ParqueCaxambu_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_223, 
                style: style_ParqueCaxambu_223,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_223.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_224 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_224 = format_ParquedeExposiesFernandoCosta_224.readFeatures(json_ParquedeExposiesFernandoCosta_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_224.addFeatures(features_ParquedeExposiesFernandoCosta_224);
var lyr_ParquedeExposiesFernandoCosta_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_224, 
                style: style_ParquedeExposiesFernandoCosta_224,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_224.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_225 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_225 = format_ParquedeExposiesFernandoCosta_225.readFeatures(json_ParquedeExposiesFernandoCosta_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_225.addFeatures(features_ParquedeExposiesFernandoCosta_225);
var lyr_ParquedeExposiesFernandoCosta_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_225, 
                style: style_ParquedeExposiesFernandoCosta_225,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_225.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_226 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_226 = format_ParqueAmbientalLuprcioTaveira_226.readFeatures(json_ParqueAmbientalLuprcioTaveira_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_226.addFeatures(features_ParqueAmbientalLuprcioTaveira_226);
var lyr_ParqueAmbientalLuprcioTaveira_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_226, 
                style: style_ParqueAmbientalLuprcioTaveira_226,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_226.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_227 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_227 = format_ParqueAmbientalLuprcioTaveira_227.readFeatures(json_ParqueAmbientalLuprcioTaveira_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_227.addFeatures(features_ParqueAmbientalLuprcioTaveira_227);
var lyr_ParqueAmbientalLuprcioTaveira_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_227, 
                style: style_ParqueAmbientalLuprcioTaveira_227,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_227.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ProgramaAdoteUmaPraa306unid28451420m_228 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa306unid28451420m_228 = format_ProgramaAdoteUmaPraa306unid28451420m_228.readFeatures(json_ProgramaAdoteUmaPraa306unid28451420m_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProgramaAdoteUmaPraa306unid28451420m_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa306unid28451420m_228.addFeatures(features_ProgramaAdoteUmaPraa306unid28451420m_228);
var lyr_ProgramaAdoteUmaPraa306unid28451420m_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa306unid28451420m_228, 
                style: style_ProgramaAdoteUmaPraa306unid28451420m_228,
                popuplayertitle: 'Programa Adote Uma Praça (306 unid. / 284.514,20 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa306unid28451420m_228.png" /> Programa Adote Uma Praça (306 unid. / 284.514,20 m²)'
            });
var format_ComPlacaDilu164unid17459463m_229 = new ol.format.GeoJSON();
var features_ComPlacaDilu164unid17459463m_229 = format_ComPlacaDilu164unid17459463m_229.readFeatures(json_ComPlacaDilu164unid17459463m_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaDilu164unid17459463m_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu164unid17459463m_229.addFeatures(features_ComPlacaDilu164unid17459463m_229);
var lyr_ComPlacaDilu164unid17459463m_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu164unid17459463m_229, 
                style: style_ComPlacaDilu164unid17459463m_229,
                popuplayertitle: 'Com Placa - Dilu  (164 unid. / 174.594,63 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu164unid17459463m_229.png" /> Com Placa - Dilu  (164 unid. / 174.594,63 m²)'
            });
var format_ComPlacaEgnaldo120unid9577087m_230 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo120unid9577087m_230 = format_ComPlacaEgnaldo120unid9577087m_230.readFeatures(json_ComPlacaEgnaldo120unid9577087m_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaEgnaldo120unid9577087m_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo120unid9577087m_230.addFeatures(features_ComPlacaEgnaldo120unid9577087m_230);
var lyr_ComPlacaEgnaldo120unid9577087m_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo120unid9577087m_230, 
                style: style_ComPlacaEgnaldo120unid9577087m_230,
                popuplayertitle: 'Com Placa - Egnaldo (120 unid. / 95.770,87 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo120unid9577087m_230.png" /> Com Placa - Egnaldo (120 unid. / 95.770,87 m²)'
            });
var format_SemPlacaDilu16unid774541m_231 = new ol.format.GeoJSON();
var features_SemPlacaDilu16unid774541m_231 = format_SemPlacaDilu16unid774541m_231.readFeatures(json_SemPlacaDilu16unid774541m_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaDilu16unid774541m_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu16unid774541m_231.addFeatures(features_SemPlacaDilu16unid774541m_231);
var lyr_SemPlacaDilu16unid774541m_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu16unid774541m_231, 
                style: style_SemPlacaDilu16unid774541m_231,
                popuplayertitle: 'Sem Placa - Dilu (16 unid. / 7.745,41 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu16unid774541m_231.png" /> Sem Placa - Dilu (16 unid. / 7.745,41 m²)'
            });
var format_SemPlacaEgnaldo5unid236283m_232 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo5unid236283m_232 = format_SemPlacaEgnaldo5unid236283m_232.readFeatures(json_SemPlacaEgnaldo5unid236283m_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaEgnaldo5unid236283m_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo5unid236283m_232.addFeatures(features_SemPlacaEgnaldo5unid236283m_232);
var lyr_SemPlacaEgnaldo5unid236283m_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo5unid236283m_232, 
                style: style_SemPlacaEgnaldo5unid236283m_232,
                popuplayertitle: 'Sem Placa - Egnaldo (5 unid. / 2.362,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo5unid236283m_232.png" /> Sem Placa - Egnaldo (5 unid. / 2.362,83 m²)'
            });
var format_LotesImvelPrivado71unid_233 = new ol.format.GeoJSON();
var features_LotesImvelPrivado71unid_233 = format_LotesImvelPrivado71unid_233.readFeatures(json_LotesImvelPrivado71unid_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LotesImvelPrivado71unid_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado71unid_233.addFeatures(features_LotesImvelPrivado71unid_233);
var lyr_LotesImvelPrivado71unid_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado71unid_233, 
                style: style_LotesImvelPrivado71unid_233,
                popuplayertitle: 'Lotes - Imóvel Privado (71 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado71unid_233.png" /> Lotes - Imóvel Privado (71 unid.)'
            });
var format_ImvelPblico115unid_234 = new ol.format.GeoJSON();
var features_ImvelPblico115unid_234 = format_ImvelPblico115unid_234.readFeatures(json_ImvelPblico115unid_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico115unid_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico115unid_234.addFeatures(features_ImvelPblico115unid_234);
var lyr_ImvelPblico115unid_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico115unid_234, 
                style: style_ImvelPblico115unid_234,
                popuplayertitle: 'Imóvel Público (115 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico115unid_234.png" /> Imóvel Público (115 unid.)'
            });
var format_ImvelPrivado71unid_235 = new ol.format.GeoJSON();
var features_ImvelPrivado71unid_235 = format_ImvelPrivado71unid_235.readFeatures(json_ImvelPrivado71unid_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPrivado71unid_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado71unid_235.addFeatures(features_ImvelPrivado71unid_235);
var lyr_ImvelPrivado71unid_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado71unid_235, 
                style: style_ImvelPrivado71unid_235,
                popuplayertitle: 'Imóvel Privado (71 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado71unid_235.png" /> Imóvel Privado (71 unid.)'
            });
var format_RodoviasEstaduais4unid_236 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_236 = format_RodoviasEstaduais4unid_236.readFeatures(json_RodoviasEstaduais4unid_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasEstaduais4unid_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_236.addFeatures(features_RodoviasEstaduais4unid_236);
var lyr_RodoviasEstaduais4unid_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_236, 
                style: style_RodoviasEstaduais4unid_236,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_236.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_237 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_237 = format_EstradasRuraisMunicipais34unid_237.readFeatures(json_EstradasRuraisMunicipais34unid_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstradasRuraisMunicipais34unid_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_237.addFeatures(features_EstradasRuraisMunicipais34unid_237);
var lyr_EstradasRuraisMunicipais34unid_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_237, 
                style: style_EstradasRuraisMunicipais34unid_237,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_237.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_238 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_238 = format_RodoviasMunicipais8unid_238.readFeatures(json_RodoviasMunicipais8unid_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasMunicipais8unid_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_238.addFeatures(features_RodoviasMunicipais8unid_238);
var lyr_RodoviasMunicipais8unid_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_238, 
                style: style_RodoviasMunicipais8unid_238,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_238.png" /> Rodovias Municipais (8 unid.)'
            });
var format_ResduosInservveis4unid_239 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_239 = format_ResduosInservveis4unid_239.readFeatures(json_ResduosInservveis4unid_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_239.addFeatures(features_ResduosInservveis4unid_239);
var lyr_ResduosInservveis4unid_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_239, 
                style: style_ResduosInservveis4unid_239,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_239.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_ResduosReciclveis15unid_240 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_240 = format_ResduosReciclveis15unid_240.readFeatures(json_ResduosReciclveis15unid_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_240.addFeatures(features_ResduosReciclveis15unid_240);
var lyr_ResduosReciclveis15unid_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_240, 
                style: style_ResduosReciclveis15unid_240,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_240.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosEletrnicos2unid_241 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_241 = format_ResduosEletrnicos2unid_241.readFeatures(json_ResduosEletrnicos2unid_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_241.addFeatures(features_ResduosEletrnicos2unid_241);
var lyr_ResduosEletrnicos2unid_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_241, 
                style: style_ResduosEletrnicos2unid_241,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_241.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosdeCouro1unid_242 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_242 = format_ResduosdeCouro1unid_242.readFeatures(json_ResduosdeCouro1unid_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_242.addFeatures(features_ResduosdeCouro1unid_242);
var lyr_ResduosdeCouro1unid_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_242, 
                style: style_ResduosdeCouro1unid_242,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_242.png" /> Resíduos de Couro (1 unid.)'
            });
var format_Lmpadas4unid_243 = new ol.format.GeoJSON();
var features_Lmpadas4unid_243 = format_Lmpadas4unid_243.readFeatures(json_Lmpadas4unid_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_243.addFeatures(features_Lmpadas4unid_243);
var lyr_Lmpadas4unid_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_243, 
                style: style_Lmpadas4unid_243,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_243.png" /> Lâmpadas (4 unid.)'
            });
var format_Pneus1unid_244 = new ol.format.GeoJSON();
var features_Pneus1unid_244 = format_Pneus1unid_244.readFeatures(json_Pneus1unid_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_244.addFeatures(features_Pneus1unid_244);
var lyr_Pneus1unid_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_244, 
                style: style_Pneus1unid_244,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_244.png" /> Pneus (1 unid.)'
            });
var format_PilhaseBaterias16unid_245 = new ol.format.GeoJSON();
var features_PilhaseBaterias16unid_245 = format_PilhaseBaterias16unid_245.readFeatures(json_PilhaseBaterias16unid_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias16unid_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias16unid_245.addFeatures(features_PilhaseBaterias16unid_245);
var lyr_PilhaseBaterias16unid_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias16unid_245, 
                style: style_PilhaseBaterias16unid_245,
                popuplayertitle: 'Pilhas e Baterias (16 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias16unid_245.png" /> Pilhas e Baterias (16 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_246 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_246 = format_ResduosdeServiosdeSade21unid_246.readFeatures(json_ResduosdeServiosdeSade21unid_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_246.addFeatures(features_ResduosdeServiosdeSade21unid_246);
var lyr_ResduosdeServiosdeSade21unid_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_246, 
                style: style_ResduosdeServiosdeSade21unid_246,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_246.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_Madeiras1unid_247 = new ol.format.GeoJSON();
var features_Madeiras1unid_247 = format_Madeiras1unid_247.readFeatures(json_Madeiras1unid_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_247.addFeatures(features_Madeiras1unid_247);
var lyr_Madeiras1unid_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_247, 
                style: style_Madeiras1unid_247,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_247.png" /> Madeiras (1 unid.)'
            });
var format_ResduosPerigosos1unid_248 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_248 = format_ResduosPerigosos1unid_248.readFeatures(json_ResduosPerigosos1unid_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_248.addFeatures(features_ResduosPerigosos1unid_248);
var lyr_ResduosPerigosos1unid_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_248, 
                style: style_ResduosPerigosos1unid_248,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_248.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_249 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_249 = format_Latasdetintametlicasvazias2unid_249.readFeatures(json_Latasdetintametlicasvazias2unid_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_249.addFeatures(features_Latasdetintametlicasvazias2unid_249);
var lyr_Latasdetintametlicasvazias2unid_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_249, 
                style: style_Latasdetintametlicasvazias2unid_249,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_249.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_leolubrificanteusado1unid_250 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_250 = format_leolubrificanteusado1unid_250.readFeatures(json_leolubrificanteusado1unid_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_250.addFeatures(features_leolubrificanteusado1unid_250);
var lyr_leolubrificanteusado1unid_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_250, 
                style: style_leolubrificanteusado1unid_250,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_250.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_leodecozinhausado2unid_251 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_251 = format_leodecozinhausado2unid_251.readFeatures(json_leodecozinhausado2unid_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_251.addFeatures(features_leodecozinhausado2unid_251);
var lyr_leodecozinhausado2unid_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_251, 
                style: style_leodecozinhausado2unid_251,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_251.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_252 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_252 = format_Embalagensvaziasdeagrotxicos1unid_252.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_252.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_252);
var lyr_Embalagensvaziasdeagrotxicos1unid_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_252, 
                style: style_Embalagensvaziasdeagrotxicos1unid_252,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_252.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_ChapasdeRaioX1unid_253 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_253 = format_ChapasdeRaioX1unid_253.readFeatures(json_ChapasdeRaioX1unid_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_253.addFeatures(features_ChapasdeRaioX1unid_253);
var lyr_ChapasdeRaioX1unid_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_253, 
                style: style_ChapasdeRaioX1unid_253,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_253.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_ResduosVerdes1unid_254 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_254 = format_ResduosVerdes1unid_254.readFeatures(json_ResduosVerdes1unid_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_254.addFeatures(features_ResduosVerdes1unid_254);
var lyr_ResduosVerdes1unid_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_254, 
                style: style_ResduosVerdes1unid_254,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_254.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_255 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_255 = format_ResduosdeConstruoCivil7unid_255.readFeatures(json_ResduosdeConstruoCivil7unid_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_255.addFeatures(features_ResduosdeConstruoCivil7unid_255);
var lyr_ResduosdeConstruoCivil7unid_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_255, 
                style: style_ResduosdeConstruoCivil7unid_255,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_255.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_Gesso1unid_256 = new ol.format.GeoJSON();
var features_Gesso1unid_256 = format_Gesso1unid_256.readFeatures(json_Gesso1unid_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_256.addFeatures(features_Gesso1unid_256);
var lyr_Gesso1unid_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_256, 
                style: style_Gesso1unid_256,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_256.png" /> Gesso (1 unid.)'
            });
var format_Contineres286unid_257 = new ol.format.GeoJSON();
var features_Contineres286unid_257 = format_Contineres286unid_257.readFeatures(json_Contineres286unid_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_257.addFeatures(features_Contineres286unid_257);
var lyr_Contineres286unid_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_257, 
                style: style_Contineres286unid_257,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_257.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte8unid_258 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte8unid_258 = format_rvoreImuneaoCorte8unid_258.readFeatures(json_rvoreImuneaoCorte8unid_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte8unid_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte8unid_258.addFeatures(features_rvoreImuneaoCorte8unid_258);
var lyr_rvoreImuneaoCorte8unid_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte8unid_258, 
                style: style_rvoreImuneaoCorte8unid_258,
                popuplayertitle: 'Árvore Imune ao Corte (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte8unid_258.png" /> Árvore Imune ao Corte (8 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_259 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_259 = format_LocaisdeDifcilAcessoereasRurais20unid_259.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_259.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_259);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_259, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_259,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_259.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var format_AcademiasaoArLivre84unid_260 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_260 = format_AcademiasaoArLivre84unid_260.readFeatures(json_AcademiasaoArLivre84unid_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_260.addFeatures(features_AcademiasaoArLivre84unid_260);
var lyr_AcademiasaoArLivre84unid_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_260, 
                style: style_AcademiasaoArLivre84unid_260,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_260.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Voorocas26unid_261 = new ol.format.GeoJSON();
var features_Voorocas26unid_261 = format_Voorocas26unid_261.readFeatures(json_Voorocas26unid_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_261.addFeatures(features_Voorocas26unid_261);
var lyr_Voorocas26unid_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_261, 
                style: style_Voorocas26unid_261,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_261.png" /> Voçorocas (26 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_ResduosInservveis4unid_239,lyr_ResduosReciclveis15unid_240,lyr_ResduosEletrnicos2unid_241,lyr_ResduosdeCouro1unid_242,lyr_Lmpadas4unid_243,lyr_Pneus1unid_244,lyr_PilhaseBaterias16unid_245,lyr_ResduosdeServiosdeSade21unid_246,lyr_Madeiras1unid_247,lyr_ResduosPerigosos1unid_248,lyr_Latasdetintametlicasvazias2unid_249,lyr_leolubrificanteusado1unid_250,lyr_leodecozinhausado2unid_251,lyr_Embalagensvaziasdeagrotxicos1unid_252,lyr_ChapasdeRaioX1unid_253,lyr_ResduosVerdes1unid_254,lyr_ResduosdeConstruoCivil7unid_255,lyr_Gesso1unid_256,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_236,lyr_EstradasRuraisMunicipais34unid_237,lyr_RodoviasMunicipais8unid_238,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado71unid_233,lyr_ImvelPblico115unid_234,lyr_ImvelPrivado71unid_235,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa306unid28451420m_228,lyr_ComPlacaDilu164unid17459463m_229,lyr_ComPlacaEgnaldo120unid9577087m_230,lyr_SemPlacaDilu16unid774541m_231,lyr_SemPlacaEgnaldo5unid236283m_232,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_215,lyr_JardimZoobotnicoTrajetos_216,lyr_JardimZoobotnicoPontosdeInteresse19unid_217,lyr_ParquedosTrabalhadores_218,lyr_ParquedosTrabalhadores_219,lyr_ComplexoPoliesportivo_220,lyr_ComplexoPoliesportivo_221,lyr_ParqueCaxambu_222,lyr_ParqueCaxambu_223,lyr_ParquedeExposiesFernandoCosta_224,lyr_ParquedeExposiesFernandoCosta_225,lyr_ParqueAmbientalLuprcioTaveira_226,lyr_ParqueAmbientalLuprcioTaveira_227,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_201,lyr_AoCivilPblica1unid_202,lyr_CartaAnuncia20unid_203,lyr_CartaAnuncia19unid_204,lyr_PlantioVoluntrio1unid_205,lyr_PlantioVoluntrio1unid_206,lyr_TACMinistrioPblico9unid_207,lyr_TACMinistrioPblico9unid_208,lyr_TCRACETESB28unid_209,lyr_TCRACETESB28unid_210,lyr_TCRAMunicipal14unid_211,lyr_TCRAMunicipal14unid_212,lyr_TRPRLCETESB2unid_213,lyr_TRPRLCETESB2unid_214,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_185,lyr_AROreadeAmortecimento_186,lyr_AROFaixadeCuestas_187,lyr_AROAPP_188,lyr_ARAIncongrunciasemAPP_189,lyr_ARAETELagoas_190,lyr_ARAAterros_191,lyr_AODreaUrbanaConsolidada_192,lyr_AODBaixaDensidadeNvel3_193,lyr_AODBaixaDensidadeNvel2_194,lyr_AODBaixaDensidadeNvel1_195,lyr_AODAUSFase2_196,lyr_AODAUSFase1_197,lyr_LimitedaBaciadoRioCanoasLeiC4322024_198,lyr_LimitedaBaciadoRioCanoasLeiC1002006_199,lyr_DelimitaodaBaciadoRibeirodaOna_200,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_175,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177,lyr_AntigoAterrodasMaritacas_178,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181,lyr_AntigoAterrodaFazendaMunicipal_182,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170,lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171,lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172,lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173,lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalArena1unid_151,lyr_PrprioPblicoMunicipalBiblioteca1unid_152,lyr_PrprioPblicoMunicipalCampo18unid_153,lyr_PrprioPblicoMunicipalCasa1unid_154,lyr_PrprioPblicoMunicipalCentro4unid_155,lyr_PrprioPblicoMunicipalCEPEL15unid_156,lyr_PrprioPblicoMunicipalConjunto4unid_157,lyr_PrprioPblicoMunicipalEstadio1unid_158,lyr_PrprioPblicoMunicipalGinsio5unid_159,lyr_PrprioPblicoMunicipalMuseu2unid_160,lyr_PrprioPblicoMunicipalParque2unid_161,lyr_PrprioPblicoMunicipalPavilho1unid_162,lyr_PrprioPblicoMunicipalPinacoteca1unid_163,lyr_PrprioPblicoMunicipalPiscina1unid_164,lyr_PrprioPblicoMunicipalPista1unid_165,lyr_PrprioPblicoMunicipalPraa3unid_166,lyr_PrprioPblicoMunicipalQuadra3unid_167,lyr_PrprioPblicoMunicipalSecretaria1unid_168,lyr_PrprioPblicoMunicipalTeatro2unid_169,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_EmpreendimentoVillaDoratta_35,lyr_EmpreendimentoVillaDoratta_36,lyr_EmpreendimentoSoCarlosII_37,lyr_EmpreendimentoSoCarlosII_38,lyr_EmpreendimentoParqueFlora_39,lyr_EmpreendimentoParqueFlora_40,lyr_EmpreendimentoVittaSoVicente_41,lyr_EmpreendimentoVittaSoVicente_42,lyr_EmpreendimentoRecantoMeneghetti_43,lyr_EmpreendimentoRecantoMeneghetti_44,lyr_EmpreendimentoParquedosSabias_45,lyr_EmpreendimentoParquedosSabias_46,lyr_EmpreendimentoMoradadaMata_47,lyr_EmpreendimentoMoradadaMata_48,lyr_EmpreendimentoIrineuZanetiII_49,lyr_EmpreendimentoIrineuZanetiII_50,lyr_EmpreendimentoAdonis_51,lyr_EmpreendimentoAdonis_52,lyr_EmpreendimentoResidencialJabuticabeiras_53,lyr_EmpreendimentoResidencialJabuticabeiras_54,lyr_EmpreendimentoResidencialMarianaAlarcon_55,lyr_EmpreendimentoResidencialMarianaAlarcon_56,lyr_EmpreendimentoResidencialCintraAlves_57,lyr_EmpreendimentoResidencialCintraAlves_58,lyr_EmpreendimentoLoteamentolamo_59,lyr_EmpreendimentoLoteamentolamo_60,lyr_EmpreendimentoSantaLina_61,lyr_EmpreendimentoSantaLina_62,lyr_EmpreendimentoResidencialPousoAlegre_63,lyr_EmpreendimentoResidencialPousoAlegre_64,lyr_EmpreendimentoResidencialAltodaFazenda_65,lyr_EmpreendimentoResidencialAltodaFazenda_66,lyr_EmpreendimentoResidencialMarioTasso_67,lyr_EmpreendimentoResidencialMarioTasso_68,lyr_EmpreendimentoResidenciaisVivenna_69,lyr_EmpreendimentoResidenciaisVivenna_70,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72,lyr_EmprendimentoElias_73,lyr_EmprendimentoElias_74,lyr_EmpreendimentoResidencialSoCarlosI_75,lyr_EmpreendimentoResidencialSoCarlosI_76,lyr_EmpreendimentoMonti_77,lyr_EmpreendimentoMonti_78,lyr_EmpreendimentoResidencialMoradadoBosque_79,lyr_EmpreendimentoResidencialMoradadoBosque_80,lyr_EmpreendimentoVittaAlvorada_81,lyr_EmpreendimentoVittaAlvorada_82,lyr_EmpreendimentoResidencialMarthaHelena_83,lyr_EmpreendimentoResidencialMarthaHelena_84,lyr_EmpreendimentoResidencialYasminTorres_85,lyr_EmpreendimentoResidencialYasminTorres_86,lyr_EmpreendimentoPalmeiraReal_87,lyr_EmpreendimentoPalmeiraReal_88,lyr_EmpreendimentoEssence_89,lyr_EmpreendimentoEssence_90,lyr_EmpreendimentoVersalhes_91,lyr_EmpreendimentoVersalhes_92,lyr_EmpreendimentoSonetto_93,lyr_EmpreendimentoSonetto_94,lyr_EmpreendimentoResidencialSantaIns_95,lyr_EmpreendimentoResidencialSantaIns_96,lyr_EmpreendimentoEdifcioSolNascente_97,lyr_EmpreendimentoEdifcioSolNascente_98,lyr_EmpreendimentoResidencialQuintadosOitis_99,lyr_EmpreendimentoResidencialQuintadosOitis_100,lyr_EmpreendimentoResidencialQuintadoSol_101,lyr_EmpreendimentoResidencialQuintadoSol_102,lyr_EmpreendimentoResidencialNairRetuciII_103,lyr_EmpreendimentoResidencialNairRetuciII_104,lyr_EmpreendimentoParquePalmeiraImperial_105,lyr_EmpreendimentoParquePalmeiraImperial_106,lyr_EmpreendimentoBordadaMata_107,lyr_EmpreendimentoBordadaMata_108,lyr_EmpreendimentoResidencialCidadeJardim_109,lyr_EmpreendimentoResidencialCidadeJardim_110,lyr_EmpreendimentoEdifcioResidencialHope_111,lyr_EmpreendimentoEdifcioResidencialHope_112,lyr_EmpreendimentoHorizResidence_113,lyr_EmpreendimentoHorizResidence_114,lyr_EmpreendimentoJardimFlora_115,lyr_EmpreendimentoJardimFlora_116,lyr_EmpreendimentoJardimHorizonte_117,lyr_EmpreendimentoJardimHorizonte_118,lyr_EmpreendimentoJardimMariaLuiza_119,lyr_EmpreendimentoJardimMariaLuiza_120,lyr_EmpreendimentoMontBlancResidence_121,lyr_EmpreendimentoMontBlancResidence_122,lyr_EmpreendimentoMoradadoVerdeII_123,lyr_EmpreendimentoMoradadoVerdeII_124,lyr_EmpreendimentoResicencialNairRetuci_125,lyr_EmpreendimentoResicencialNairRetuci_126,lyr_EmpreendimentoParagon_127,lyr_EmpreendimentoParagon_128,lyr_EmpreendimentoParqueVillaLobos_129,lyr_EmpreendimentoParqueVillaLobos_130,lyr_EmpreendimentoDaVinci_131,lyr_EmpreendimentoDaVinci_132,lyr_EmpreendimentoResidencialDomingosJardini_133,lyr_EmpreendimentoResidencialDomingosJardini_134,lyr_EmpreendimentoResidencialSantaF_135,lyr_EmpreendimentoResidencialSantaF_136,lyr_EmpreendimentoEdifcioRuadoSol_137,lyr_EmpreendimentoEdifcioRuadoSol_138,lyr_EmpreendimentoTorontoResidence_139,lyr_EmpreendimentoTorontoResidence_140,lyr_ServidoRamal138kVFranca4Guanabara_141,lyr_ServidoRamal138kVFranca4Guanabara_142,lyr_EmpreendimentosAprovado27unid_143,lyr_EmpreendimentosDiretriz4unid_144,lyr_EmpreendimentosDefinitiva6unid_145,lyr_EmpreendimentosPrvia16unid_146,lyr_PBZPAEdifcioPrimeHELIPONTO_147,lyr_PBZPAEdifcioPrimeHELIPONTO_148,lyr_PBZPAHospitalHELIPONTO_149,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_26,lyr_LoteEMDEF10unid_27,lyr_Lote502unid13759703m_28,lyr_Lote502unid_29,lyr_APP169unid238007435m_30,lyr_readeUsoEspecial251unid269349873m_31,lyr_reaInstitucional242unid136439212m_32,lyr_reaPatrimonial33unid15807656m_33,lyr_reaVerde2008unid836299560m_34,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_RemanescentedaMatrcula11419_10,lyr_ConjuntoHabitacional_11,lyr_AvdeacessoaoHortoeColgioAgrcola_12,lyr_reaK_13,lyr_reaJ_14,lyr_reaI_15,lyr_reaH_16,lyr_reaG_17,lyr_reaF_18,lyr_reaE_19,lyr_reaD_20,lyr_reaC_21,lyr_reaB_22,lyr_reaA_23,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24,lyr_reaaseraverbadaPartedareaG_25,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_5,lyr_RiosDuplos84unid_6,lyr_MassasDgua270unid_7,lyr_RiosSimples1842unid_8,lyr_Nascentes821unid_9,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_APP1745unid_5.setVisible(false);lyr_RiosDuplos84unid_6.setVisible(false);lyr_MassasDgua270unid_7.setVisible(false);lyr_RiosSimples1842unid_8.setVisible(false);lyr_Nascentes821unid_9.setVisible(false);lyr_RemanescentedaMatrcula11419_10.setVisible(false);lyr_ConjuntoHabitacional_11.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_12.setVisible(false);lyr_reaK_13.setVisible(false);lyr_reaJ_14.setVisible(false);lyr_reaI_15.setVisible(false);lyr_reaH_16.setVisible(false);lyr_reaG_17.setVisible(false);lyr_reaF_18.setVisible(false);lyr_reaE_19.setVisible(false);lyr_reaD_20.setVisible(false);lyr_reaC_21.setVisible(false);lyr_reaB_22.setVisible(false);lyr_reaA_23.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.setVisible(false);lyr_reaaseraverbadaPartedareaG_25.setVisible(false);lyr_LoteEMDEF10unid218783m_26.setVisible(false);lyr_LoteEMDEF10unid_27.setVisible(false);lyr_Lote502unid13759703m_28.setVisible(false);lyr_Lote502unid_29.setVisible(false);lyr_APP169unid238007435m_30.setVisible(false);lyr_readeUsoEspecial251unid269349873m_31.setVisible(false);lyr_reaInstitucional242unid136439212m_32.setVisible(false);lyr_reaPatrimonial33unid15807656m_33.setVisible(false);lyr_reaVerde2008unid836299560m_34.setVisible(false);lyr_EmpreendimentoVillaDoratta_35.setVisible(false);lyr_EmpreendimentoVillaDoratta_36.setVisible(false);lyr_EmpreendimentoSoCarlosII_37.setVisible(false);lyr_EmpreendimentoSoCarlosII_38.setVisible(false);lyr_EmpreendimentoParqueFlora_39.setVisible(false);lyr_EmpreendimentoParqueFlora_40.setVisible(false);lyr_EmpreendimentoVittaSoVicente_41.setVisible(false);lyr_EmpreendimentoVittaSoVicente_42.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_43.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_44.setVisible(false);lyr_EmpreendimentoParquedosSabias_45.setVisible(false);lyr_EmpreendimentoParquedosSabias_46.setVisible(false);lyr_EmpreendimentoMoradadaMata_47.setVisible(false);lyr_EmpreendimentoMoradadaMata_48.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_49.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_50.setVisible(false);lyr_EmpreendimentoAdonis_51.setVisible(false);lyr_EmpreendimentoAdonis_52.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_53.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_54.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_55.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_56.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_57.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_58.setVisible(false);lyr_EmpreendimentoLoteamentolamo_59.setVisible(false);lyr_EmpreendimentoLoteamentolamo_60.setVisible(false);lyr_EmpreendimentoSantaLina_61.setVisible(false);lyr_EmpreendimentoSantaLina_62.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_63.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_64.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_65.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_66.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_67.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_68.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_69.setVisible(false);lyr_EmpreendimentoResidenciaisVivenna_70.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72.setVisible(false);lyr_EmprendimentoElias_73.setVisible(false);lyr_EmprendimentoElias_74.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_75.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_76.setVisible(false);lyr_EmpreendimentoMonti_77.setVisible(false);lyr_EmpreendimentoMonti_78.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_79.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_80.setVisible(false);lyr_EmpreendimentoVittaAlvorada_81.setVisible(false);lyr_EmpreendimentoVittaAlvorada_82.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_83.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_84.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_85.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_86.setVisible(false);lyr_EmpreendimentoPalmeiraReal_87.setVisible(false);lyr_EmpreendimentoPalmeiraReal_88.setVisible(false);lyr_EmpreendimentoEssence_89.setVisible(false);lyr_EmpreendimentoEssence_90.setVisible(false);lyr_EmpreendimentoVersalhes_91.setVisible(false);lyr_EmpreendimentoVersalhes_92.setVisible(false);lyr_EmpreendimentoSonetto_93.setVisible(false);lyr_EmpreendimentoSonetto_94.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_95.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_96.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_97.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_98.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_99.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_100.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_101.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_102.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_103.setVisible(false);lyr_EmpreendimentoResidencialNairRetuciII_104.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_105.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_106.setVisible(false);lyr_EmpreendimentoBordadaMata_107.setVisible(false);lyr_EmpreendimentoBordadaMata_108.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_109.setVisible(false);lyr_EmpreendimentoResidencialCidadeJardim_110.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_111.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_112.setVisible(false);lyr_EmpreendimentoHorizResidence_113.setVisible(false);lyr_EmpreendimentoHorizResidence_114.setVisible(false);lyr_EmpreendimentoJardimFlora_115.setVisible(false);lyr_EmpreendimentoJardimFlora_116.setVisible(false);lyr_EmpreendimentoJardimHorizonte_117.setVisible(false);lyr_EmpreendimentoJardimHorizonte_118.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_119.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_120.setVisible(false);lyr_EmpreendimentoMontBlancResidence_121.setVisible(false);lyr_EmpreendimentoMontBlancResidence_122.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_123.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_124.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_125.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_126.setVisible(false);lyr_EmpreendimentoParagon_127.setVisible(false);lyr_EmpreendimentoParagon_128.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_129.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_130.setVisible(false);lyr_EmpreendimentoDaVinci_131.setVisible(false);lyr_EmpreendimentoDaVinci_132.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_133.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_134.setVisible(false);lyr_EmpreendimentoResidencialSantaF_135.setVisible(false);lyr_EmpreendimentoResidencialSantaF_136.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_137.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_138.setVisible(false);lyr_EmpreendimentoTorontoResidence_139.setVisible(false);lyr_EmpreendimentoTorontoResidence_140.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_141.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_142.setVisible(false);lyr_EmpreendimentosAprovado27unid_143.setVisible(false);lyr_EmpreendimentosDiretriz4unid_144.setVisible(false);lyr_EmpreendimentosDefinitiva6unid_145.setVisible(false);lyr_EmpreendimentosPrvia16unid_146.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_147.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_148.setVisible(false);lyr_PBZPAHospitalHELIPONTO_149.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.setVisible(false);lyr_PrprioPblicoMunicipalArena1unid_151.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_152.setVisible(false);lyr_PrprioPblicoMunicipalCampo18unid_153.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_154.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_155.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL15unid_156.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_157.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_158.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_159.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_160.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_161.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_162.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_163.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_164.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_165.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_166.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_167.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_168.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_169.setVisible(false);lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170.setVisible(false);lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171.setVisible(false);lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.setVisible(false);lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.setVisible(false);lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174.setVisible(false);lyr_ParqueZumbidosPalmares_175.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.setVisible(false);lyr_AntigoAterrodasMaritacas_178.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_182.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.setVisible(false);lyr_ARORemanescentesFlorestais_185.setVisible(false);lyr_AROreadeAmortecimento_186.setVisible(false);lyr_AROFaixadeCuestas_187.setVisible(false);lyr_AROAPP_188.setVisible(false);lyr_ARAIncongrunciasemAPP_189.setVisible(false);lyr_ARAETELagoas_190.setVisible(false);lyr_ARAAterros_191.setVisible(false);lyr_AODreaUrbanaConsolidada_192.setVisible(false);lyr_AODBaixaDensidadeNvel3_193.setVisible(false);lyr_AODBaixaDensidadeNvel2_194.setVisible(false);lyr_AODBaixaDensidadeNvel1_195.setVisible(false);lyr_AODAUSFase2_196.setVisible(false);lyr_AODAUSFase1_197.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_198.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_199.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_200.setVisible(false);lyr_AoCivilPblica1unid_201.setVisible(false);lyr_AoCivilPblica1unid_202.setVisible(false);lyr_CartaAnuncia20unid_203.setVisible(false);lyr_CartaAnuncia19unid_204.setVisible(false);lyr_PlantioVoluntrio1unid_205.setVisible(false);lyr_PlantioVoluntrio1unid_206.setVisible(false);lyr_TACMinistrioPblico9unid_207.setVisible(false);lyr_TACMinistrioPblico9unid_208.setVisible(false);lyr_TCRACETESB28unid_209.setVisible(false);lyr_TCRACETESB28unid_210.setVisible(false);lyr_TCRAMunicipal14unid_211.setVisible(false);lyr_TCRAMunicipal14unid_212.setVisible(false);lyr_TRPRLCETESB2unid_213.setVisible(false);lyr_TRPRLCETESB2unid_214.setVisible(false);lyr_JardimZoobotnicoDelimitao_215.setVisible(false);lyr_JardimZoobotnicoTrajetos_216.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_217.setVisible(false);lyr_ParquedosTrabalhadores_218.setVisible(false);lyr_ParquedosTrabalhadores_219.setVisible(false);lyr_ComplexoPoliesportivo_220.setVisible(false);lyr_ComplexoPoliesportivo_221.setVisible(false);lyr_ParqueCaxambu_222.setVisible(false);lyr_ParqueCaxambu_223.setVisible(false);lyr_ParquedeExposiesFernandoCosta_224.setVisible(false);lyr_ParquedeExposiesFernandoCosta_225.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_226.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_227.setVisible(false);lyr_ProgramaAdoteUmaPraa306unid28451420m_228.setVisible(false);lyr_ComPlacaDilu164unid17459463m_229.setVisible(false);lyr_ComPlacaEgnaldo120unid9577087m_230.setVisible(false);lyr_SemPlacaDilu16unid774541m_231.setVisible(false);lyr_SemPlacaEgnaldo5unid236283m_232.setVisible(false);lyr_LotesImvelPrivado71unid_233.setVisible(false);lyr_ImvelPblico115unid_234.setVisible(false);lyr_ImvelPrivado71unid_235.setVisible(false);lyr_RodoviasEstaduais4unid_236.setVisible(false);lyr_EstradasRuraisMunicipais34unid_237.setVisible(false);lyr_RodoviasMunicipais8unid_238.setVisible(false);lyr_ResduosInservveis4unid_239.setVisible(false);lyr_ResduosReciclveis15unid_240.setVisible(false);lyr_ResduosEletrnicos2unid_241.setVisible(false);lyr_ResduosdeCouro1unid_242.setVisible(false);lyr_Lmpadas4unid_243.setVisible(false);lyr_Pneus1unid_244.setVisible(false);lyr_PilhaseBaterias16unid_245.setVisible(false);lyr_ResduosdeServiosdeSade21unid_246.setVisible(false);lyr_Madeiras1unid_247.setVisible(false);lyr_ResduosPerigosos1unid_248.setVisible(false);lyr_Latasdetintametlicasvazias2unid_249.setVisible(false);lyr_leolubrificanteusado1unid_250.setVisible(false);lyr_leodecozinhausado2unid_251.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_252.setVisible(false);lyr_ChapasdeRaioX1unid_253.setVisible(false);lyr_ResduosVerdes1unid_254.setVisible(false);lyr_ResduosdeConstruoCivil7unid_255.setVisible(false);lyr_Gesso1unid_256.setVisible(false);lyr_Contineres286unid_257.setVisible(false);lyr_rvoreImuneaoCorte8unid_258.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_259.setVisible(false);lyr_AcademiasaoArLivre84unid_260.setVisible(false);lyr_Voorocas26unid_261.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeInfraestrutura,group_SecretariadeEsporteeCultura,group_SecretariadeSade,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,group_ParquesdeFranca,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_RodoviaseEstradas,group_DescarteCorretodeResduos,lyr_Contineres286unid_257,lyr_rvoreImuneaoCorte8unid_258,lyr_LocaisdeDifcilAcessoereasRurais20unid_259,lyr_AcademiasaoArLivre84unid_260,lyr_Voorocas26unid_261];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Área (km²)': 'Área (km²)', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_APP1745unid_5.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_6.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_7.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_8.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_9.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_RemanescentedaMatrcula11419_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF10unid218783m_26.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_LoteEMDEF10unid_27.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote502unid13759703m_28.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_Lote502unid_29.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP169unid238007435m_30.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_readeUsoEspecial251unid269349873m_31.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaInstitucional242unid136439212m_32.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_reaVerde2008unid836299560m_34.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_37.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_38.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_39.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_40.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_41.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_42.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_43.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_44.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_45.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_46.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_47.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_48.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_49.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_50.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_51.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_52.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialJabuticabeiras_53.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_54.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_55.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_56.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_66.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidenciaisVivenna_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoVittaAlvorada_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_94.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialNairRetuciII_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_106.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoBordadaMata_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCidadeJardim_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_141.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_142.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_143.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz4unid_144.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva6unid_145.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia16unid_146.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_147.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_148.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_149.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PrprioPblicoMunicipalArena1unid_151.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_152.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCampo18unid_153.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCasa1unid_154.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCentro4unid_155.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCEPEL15unid_156.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalConjunto4unid_157.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalEstadio1unid_158.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalGinsio5unid_159.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalMuseu2unid_160.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalParque2unid_161.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPavilho1unid_162.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_163.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPiscina1unid_164.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPista1unid_165.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPraa3unid_166.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalQuadra3unid_167.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalSecretaria1unid_168.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalTeatro2unid_169.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_ParqueZumbidosPalmares_175.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_178.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_182.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_185.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_186.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_187.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_188.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_189.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_190.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_191.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_192.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_193.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_194.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_195.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_196.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_197.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_198.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_199.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_200.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_201.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_202.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_203.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia19unid_204.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_205.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_206.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_207.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_208.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_209.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_210.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_211.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_212.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_213.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_214.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_JardimZoobotnicoDelimitao_215.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_216.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_217.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_218.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_219.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_220.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_221.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_222.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_223.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_224.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_225.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_226.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_227.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ProgramaAdoteUmaPraa306unid28451420m_228.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu164unid17459463m_229.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_ComPlacaEgnaldo120unid9577087m_230.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_SemPlacaDilu16unid774541m_231.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_SemPlacaEgnaldo5unid236283m_232.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', });
lyr_LotesImvelPrivado71unid_233.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', });
lyr_ImvelPblico115unid_234.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', });
lyr_ImvelPrivado71unid_235.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', });
lyr_RodoviasEstaduais4unid_236.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_237.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_238.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_ResduosInservveis4unid_239.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_240.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_241.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_242.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_243.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_244.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias16unid_245.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_246.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_247.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_248.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_249.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_250.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_251.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_252.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_253.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_254.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_255.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Gesso1unid_256.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_257.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', });
lyr_rvoreImuneaoCorte8unid_258.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_259.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_AcademiasaoArLivre84unid_260.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', });
lyr_Voorocas26unid_261.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Área (km²)': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_APP1745unid_5.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_6.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_7.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_8.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_9.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_RemanescentedaMatrcula11419_10.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_11.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_13.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_14.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_15.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_16.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_17.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_18.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_19.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_20.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_21.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_22.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_23.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF10unid218783m_26.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_LoteEMDEF10unid_27.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote502unid13759703m_28.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote502unid_29.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP169unid238007435m_30.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_readeUsoEspecial251unid269349873m_31.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaInstitucional242unid136439212m_32.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_reaVerde2008unid836299560m_34.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_37.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_38.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_39.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_40.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_41.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_42.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_43.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_44.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_45.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_46.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_47.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_48.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_49.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_50.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_51.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_52.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_53.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_54.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_55.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_56.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_59.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmpreendimentoLoteamentolamo_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_66.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidenciaisVivenna_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_73.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_74.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_76.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_78.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_80.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoVittaAlvorada_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_82.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_84.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_86.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_88.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_92.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_94.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_96.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_98.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_100.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialNairRetuciII_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_106.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoBordadaMata_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCidadeJardim_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_141.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_142.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_143.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz4unid_144.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva6unid_145.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia16unid_146.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_147.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_148.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_149.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PrprioPblicoMunicipalArena1unid_151.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_152.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCampo18unid_153.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCasa1unid_154.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCentro4unid_155.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCEPEL15unid_156.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalConjunto4unid_157.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalEstadio1unid_158.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalGinsio5unid_159.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalMuseu2unid_160.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalParque2unid_161.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPavilho1unid_162.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_163.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPiscina1unid_164.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPista1unid_165.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPraa3unid_166.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalQuadra3unid_167.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalSecretaria1unid_168.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalTeatro2unid_169.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ParqueZumbidosPalmares_175.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_178.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_182.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_185.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_186.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_187.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_188.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_189.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_190.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_191.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_192.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_193.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_194.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_195.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_196.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase1_197.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_198.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_199.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_200.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_201.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_202.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_203.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia19unid_204.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_205.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_206.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_207.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_208.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_209.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_210.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_211.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_212.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_213.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_214.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_215.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_216.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_217.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_218.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_219.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_220.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_221.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_222.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_223.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_224.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_225.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_226.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_227.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_ProgramaAdoteUmaPraa306unid28451420m_228.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu164unid17459463m_229.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_ComPlacaEgnaldo120unid9577087m_230.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_SemPlacaDilu16unid774541m_231.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', });
lyr_SemPlacaEgnaldo5unid236283m_232.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', });
lyr_LotesImvelPrivado71unid_233.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', });
lyr_ImvelPblico115unid_234.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', });
lyr_ImvelPrivado71unid_235.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', });
lyr_RodoviasEstaduais4unid_236.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_237.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_238.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_ResduosInservveis4unid_239.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosReciclveis15unid_240.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_241.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosdeCouro1unid_242.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_243.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_244.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias16unid_245.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_246.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_247.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_248.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_249.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_250.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_251.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_252.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_253.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_254.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_255.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Gesso1unid_256.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Contineres286unid_257.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_rvoreImuneaoCorte8unid_258.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_259.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_260.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_Voorocas26unid_261.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Área (km²)': 'inline label - visible with data', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_APP1745unid_5.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_6.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_7.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_8.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_9.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_RemanescentedaMatrcula11419_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_12.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_13.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_14.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_15.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_16.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_17.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_18.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_21.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_22.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_23.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_24.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_25.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_26.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_27.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote502unid13759703m_28.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_Lote502unid_29.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP169unid238007435m_30.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_readeUsoEspecial251unid269349873m_31.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaInstitucional242unid136439212m_32.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15807656m_33.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_reaVerde2008unid836299560m_34.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_35.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_36.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_37.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_38.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_39.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_40.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_41.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_42.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_43.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_44.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_45.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_46.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_47.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_48.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_49.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_50.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_51.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_52.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialJabuticabeiras_53.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_54.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_55.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_56.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_66.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidenciaisVivenna_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoVittaAlvorada_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_94.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialNairRetuciII_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_106.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoBordadaMata_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCidadeJardim_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_141.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_142.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_143.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz4unid_144.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva6unid_145.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia16unid_146.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_147.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_148.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_149.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_150.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalArena1unid_151.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_152.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCampo18unid_153.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCasa1unid_154.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCentro4unid_155.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCEPEL15unid_156.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalConjunto4unid_157.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalEstadio1unid_158.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalGinsio5unid_159.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalMuseu2unid_160.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalParque2unid_161.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPavilho1unid_162.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_163.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPiscina1unid_164.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPista1unid_165.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPraa3unid_166.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalQuadra3unid_167.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalSecretaria1unid_168.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalTeatro2unid_169.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_170.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_171.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_172.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_173.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_174.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_ParqueZumbidosPalmares_175.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_176.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_177.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_178.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_179.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_180.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_181.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_182.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_183.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_184.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_185.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_186.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_187.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_188.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_189.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_190.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_191.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_192.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_193.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_194.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_195.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_196.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_197.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_198.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_199.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_200.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_201.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_202.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_203.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia19unid_204.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_205.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_206.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_207.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_208.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_209.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_210.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_211.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_212.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_213.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_214.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_215.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_216.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_217.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_218.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_219.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_220.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_221.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_222.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_223.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_224.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_225.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_226.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'header label - always visible', });
lyr_ParqueAmbientalLuprcioTaveira_227.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa306unid28451420m_228.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu164unid17459463m_229.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo120unid9577087m_230.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_SemPlacaDilu16unid774541m_231.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo5unid236283m_232.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', });
lyr_LotesImvelPrivado71unid_233.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', });
lyr_ImvelPblico115unid_234.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'no label', });
lyr_ImvelPrivado71unid_235.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_236.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_237.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_238.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_239.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_240.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_241.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_242.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_243.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_244.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias16unid_245.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_246.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_247.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_248.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_249.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_250.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_251.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_252.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_253.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_254.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_255.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Gesso1unid_256.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_257.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte8unid_258.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_259.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_260.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_Voorocas26unid_261.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_261.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});