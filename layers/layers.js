ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.359375, 7700979.946759, 276615.687500, 7740818.142706]);
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
var format_RegioCentroLeste42unid675453694m_5 = new ol.format.GeoJSON();
var features_RegioCentroLeste42unid675453694m_5 = format_RegioCentroLeste42unid675453694m_5.readFeatures(json_RegioCentroLeste42unid675453694m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioCentroLeste42unid675453694m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioCentroLeste42unid675453694m_5.addFeatures(features_RegioCentroLeste42unid675453694m_5);
var lyr_RegioCentroLeste42unid675453694m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioCentroLeste42unid675453694m_5, 
                style: style_RegioCentroLeste42unid675453694m_5,
                popuplayertitle: 'Região Centro Leste (42 unid. / 6.754.536,94 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioCentroLeste42unid675453694m_5.png" /> Região Centro Leste (42 unid. / 6.754.536,94 m²)'
            });
var format_RegioLesteNordeste50unid1233454938m_6 = new ol.format.GeoJSON();
var features_RegioLesteNordeste50unid1233454938m_6 = format_RegioLesteNordeste50unid1233454938m_6.readFeatures(json_RegioLesteNordeste50unid1233454938m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioLesteNordeste50unid1233454938m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioLesteNordeste50unid1233454938m_6.addFeatures(features_RegioLesteNordeste50unid1233454938m_6);
var lyr_RegioLesteNordeste50unid1233454938m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioLesteNordeste50unid1233454938m_6, 
                style: style_RegioLesteNordeste50unid1233454938m_6,
                popuplayertitle: 'Região Leste Nordeste (50 unid. / 12.334.549,38 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioLesteNordeste50unid1233454938m_6.png" /> Região Leste Nordeste (50 unid. / 12.334.549,38 m²)'
            });
var format_RegioNorteI45unid1043752016m_7 = new ol.format.GeoJSON();
var features_RegioNorteI45unid1043752016m_7 = format_RegioNorteI45unid1043752016m_7.readFeatures(json_RegioNorteI45unid1043752016m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteI45unid1043752016m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteI45unid1043752016m_7.addFeatures(features_RegioNorteI45unid1043752016m_7);
var lyr_RegioNorteI45unid1043752016m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteI45unid1043752016m_7, 
                style: style_RegioNorteI45unid1043752016m_7,
                popuplayertitle: 'Região Norte I (45 unid. / 10.437.520,16 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteI45unid1043752016m_7.png" /> Região Norte I (45 unid. / 10.437.520,16 m²)'
            });
var format_RegioNorteII36unid859331837m_8 = new ol.format.GeoJSON();
var features_RegioNorteII36unid859331837m_8 = format_RegioNorteII36unid859331837m_8.readFeatures(json_RegioNorteII36unid859331837m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioNorteII36unid859331837m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioNorteII36unid859331837m_8.addFeatures(features_RegioNorteII36unid859331837m_8);
var lyr_RegioNorteII36unid859331837m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioNorteII36unid859331837m_8, 
                style: style_RegioNorteII36unid859331837m_8,
                popuplayertitle: 'Região Norte II (36 unid. / 8.593.318,37 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioNorteII36unid859331837m_8.png" /> Região Norte II (36 unid. / 8.593.318,37 m²)'
            });
var format_RegioOesteI65unid1245065890m_9 = new ol.format.GeoJSON();
var features_RegioOesteI65unid1245065890m_9 = format_RegioOesteI65unid1245065890m_9.readFeatures(json_RegioOesteI65unid1245065890m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteI65unid1245065890m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteI65unid1245065890m_9.addFeatures(features_RegioOesteI65unid1245065890m_9);
var lyr_RegioOesteI65unid1245065890m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteI65unid1245065890m_9, 
                style: style_RegioOesteI65unid1245065890m_9,
                popuplayertitle: 'Região Oeste I (65 unid. / 12.450.658,90 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteI65unid1245065890m_9.png" /> Região Oeste I (65 unid. / 12.450.658,90 m²)'
            });
var format_RegioOesteII43unid599615871m_10 = new ol.format.GeoJSON();
var features_RegioOesteII43unid599615871m_10 = format_RegioOesteII43unid599615871m_10.readFeatures(json_RegioOesteII43unid599615871m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioOesteII43unid599615871m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioOesteII43unid599615871m_10.addFeatures(features_RegioOesteII43unid599615871m_10);
var lyr_RegioOesteII43unid599615871m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioOesteII43unid599615871m_10, 
                style: style_RegioOesteII43unid599615871m_10,
                popuplayertitle: 'Região Oeste II (43 unid. / 5.996.158,71 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioOesteII43unid599615871m_10.png" /> Região Oeste II (43 unid. / 5.996.158,71 m²)'
            });
var format_RegioSudeste38unid579321135m_11 = new ol.format.GeoJSON();
var features_RegioSudeste38unid579321135m_11 = format_RegioSudeste38unid579321135m_11.readFeatures(json_RegioSudeste38unid579321135m_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudeste38unid579321135m_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudeste38unid579321135m_11.addFeatures(features_RegioSudeste38unid579321135m_11);
var lyr_RegioSudeste38unid579321135m_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudeste38unid579321135m_11, 
                style: style_RegioSudeste38unid579321135m_11,
                popuplayertitle: 'Região Sudeste (38 unid. / 5.793.211,35 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudeste38unid579321135m_11.png" /> Região Sudeste (38 unid. / 5.793.211,35 m²)'
            });
var format_RegioSudesteSul44unid830633497m_12 = new ol.format.GeoJSON();
var features_RegioSudesteSul44unid830633497m_12 = format_RegioSudesteSul44unid830633497m_12.readFeatures(json_RegioSudesteSul44unid830633497m_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSudesteSul44unid830633497m_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSudesteSul44unid830633497m_12.addFeatures(features_RegioSudesteSul44unid830633497m_12);
var lyr_RegioSudesteSul44unid830633497m_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSudesteSul44unid830633497m_12, 
                style: style_RegioSudesteSul44unid830633497m_12,
                popuplayertitle: 'Região Sudeste Sul (44 unid. / 8.306.334,97 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSudesteSul44unid830633497m_12.png" /> Região Sudeste Sul (44 unid. / 8.306.334,97 m²)'
            });
var format_RegioSul20unid639964086m_13 = new ol.format.GeoJSON();
var features_RegioSul20unid639964086m_13 = format_RegioSul20unid639964086m_13.readFeatures(json_RegioSul20unid639964086m_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RegioSul20unid639964086m_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioSul20unid639964086m_13.addFeatures(features_RegioSul20unid639964086m_13);
var lyr_RegioSul20unid639964086m_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioSul20unid639964086m_13, 
                style: style_RegioSul20unid639964086m_13,
                popuplayertitle: 'Região Sul (20 unid. / 6.399.640,86 m²)',
                interactive: true,
                title: '<img src="styles/legend/RegioSul20unid639964086m_13.png" /> Região Sul (20 unid. / 6.399.640,86 m²)'
            });
var format_APP1745unid_14 = new ol.format.GeoJSON();
var features_APP1745unid_14 = format_APP1745unid_14.readFeatures(json_APP1745unid_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP1745unid_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP1745unid_14.addFeatures(features_APP1745unid_14);
var lyr_APP1745unid_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP1745unid_14, 
                style: style_APP1745unid_14,
                popuplayertitle: 'APP (1745 unid.)',
                interactive: true,
                title: '<img src="styles/legend/APP1745unid_14.png" /> APP (1745 unid.)'
            });
var format_RiosDuplos84unid_15 = new ol.format.GeoJSON();
var features_RiosDuplos84unid_15 = format_RiosDuplos84unid_15.readFeatures(json_RiosDuplos84unid_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos84unid_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos84unid_15.addFeatures(features_RiosDuplos84unid_15);
var lyr_RiosDuplos84unid_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos84unid_15, 
                style: style_RiosDuplos84unid_15,
                popuplayertitle: 'Rios Duplos (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos84unid_15.png" /> Rios Duplos (84 unid.)'
            });
var format_MassasDgua270unid_16 = new ol.format.GeoJSON();
var features_MassasDgua270unid_16 = format_MassasDgua270unid_16.readFeatures(json_MassasDgua270unid_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MassasDgua270unid_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassasDgua270unid_16.addFeatures(features_MassasDgua270unid_16);
var lyr_MassasDgua270unid_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassasDgua270unid_16, 
                style: style_MassasDgua270unid_16,
                popuplayertitle: 'Massas D\'água (270 unid.)',
                interactive: true,
                title: '<img src="styles/legend/MassasDgua270unid_16.png" /> Massas D\'água (270 unid.)'
            });
var format_RiosSimples1842unid_17 = new ol.format.GeoJSON();
var features_RiosSimples1842unid_17 = format_RiosSimples1842unid_17.readFeatures(json_RiosSimples1842unid_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples1842unid_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples1842unid_17.addFeatures(features_RiosSimples1842unid_17);
var lyr_RiosSimples1842unid_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples1842unid_17, 
                style: style_RiosSimples1842unid_17,
                popuplayertitle: 'Rios Simples (1842 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples1842unid_17.png" /> Rios Simples (1842 unid.)'
            });
var format_Nascentes821unid_18 = new ol.format.GeoJSON();
var features_Nascentes821unid_18 = format_Nascentes821unid_18.readFeatures(json_Nascentes821unid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes821unid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes821unid_18.addFeatures(features_Nascentes821unid_18);
var lyr_Nascentes821unid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes821unid_18, 
                style: style_Nascentes821unid_18,
                popuplayertitle: 'Nascentes (821 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Nascentes821unid_18.png" /> Nascentes (821 unid.)'
            });
var format_reaN_19 = new ol.format.GeoJSON();
var features_reaN_19 = format_reaN_19.readFeatures(json_reaN_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaN_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaN_19.addFeatures(features_reaN_19);
var lyr_reaN_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaN_19, 
                style: style_reaN_19,
                popuplayertitle: 'Área N',
                interactive: true,
                title: '<img src="styles/legend/reaN_19.png" /> Área N'
            });
var format_ConjuntoHabitacional_20 = new ol.format.GeoJSON();
var features_ConjuntoHabitacional_20 = format_ConjuntoHabitacional_20.readFeatures(json_ConjuntoHabitacional_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ConjuntoHabitacional_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConjuntoHabitacional_20.addFeatures(features_ConjuntoHabitacional_20);
var lyr_ConjuntoHabitacional_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConjuntoHabitacional_20, 
                style: style_ConjuntoHabitacional_20,
                popuplayertitle: 'Conjunto Habitacional',
                interactive: true,
                title: '<img src="styles/legend/ConjuntoHabitacional_20.png" /> Conjunto Habitacional'
            });
var format_AvdeacessoaoHortoeColgioAgrcola_21 = new ol.format.GeoJSON();
var features_AvdeacessoaoHortoeColgioAgrcola_21 = format_AvdeacessoaoHortoeColgioAgrcola_21.readFeatures(json_AvdeacessoaoHortoeColgioAgrcola_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AvdeacessoaoHortoeColgioAgrcola_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvdeacessoaoHortoeColgioAgrcola_21.addFeatures(features_AvdeacessoaoHortoeColgioAgrcola_21);
var lyr_AvdeacessoaoHortoeColgioAgrcola_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvdeacessoaoHortoeColgioAgrcola_21, 
                style: style_AvdeacessoaoHortoeColgioAgrcola_21,
                popuplayertitle: 'Av. de acesso ao Horto e Colégio Agrícola',
                interactive: true,
                title: '<img src="styles/legend/AvdeacessoaoHortoeColgioAgrcola_21.png" /> Av. de acesso ao Horto e Colégio Agrícola'
            });
var format_reaK_22 = new ol.format.GeoJSON();
var features_reaK_22 = format_reaK_22.readFeatures(json_reaK_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaK_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaK_22.addFeatures(features_reaK_22);
var lyr_reaK_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaK_22, 
                style: style_reaK_22,
                popuplayertitle: 'Área K',
                interactive: true,
                title: '<img src="styles/legend/reaK_22.png" /> Área K'
            });
var format_reaJ_23 = new ol.format.GeoJSON();
var features_reaJ_23 = format_reaJ_23.readFeatures(json_reaJ_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaJ_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaJ_23.addFeatures(features_reaJ_23);
var lyr_reaJ_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaJ_23, 
                style: style_reaJ_23,
                popuplayertitle: 'Área J',
                interactive: true,
                title: '<img src="styles/legend/reaJ_23.png" /> Área J'
            });
var format_reaI_24 = new ol.format.GeoJSON();
var features_reaI_24 = format_reaI_24.readFeatures(json_reaI_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaI_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaI_24.addFeatures(features_reaI_24);
var lyr_reaI_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaI_24, 
                style: style_reaI_24,
                popuplayertitle: 'Área I',
                interactive: true,
                title: '<img src="styles/legend/reaI_24.png" /> Área I'
            });
var format_reaH_25 = new ol.format.GeoJSON();
var features_reaH_25 = format_reaH_25.readFeatures(json_reaH_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaH_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaH_25.addFeatures(features_reaH_25);
var lyr_reaH_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaH_25, 
                style: style_reaH_25,
                popuplayertitle: 'Área H',
                interactive: true,
                title: '<img src="styles/legend/reaH_25.png" /> Área H'
            });
var format_reaG_26 = new ol.format.GeoJSON();
var features_reaG_26 = format_reaG_26.readFeatures(json_reaG_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaG_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaG_26.addFeatures(features_reaG_26);
var lyr_reaG_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaG_26, 
                style: style_reaG_26,
                popuplayertitle: 'Área G',
                interactive: true,
                title: '<img src="styles/legend/reaG_26.png" /> Área G'
            });
var format_reaF_27 = new ol.format.GeoJSON();
var features_reaF_27 = format_reaF_27.readFeatures(json_reaF_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaF_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaF_27.addFeatures(features_reaF_27);
var lyr_reaF_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaF_27, 
                style: style_reaF_27,
                popuplayertitle: 'Área F',
                interactive: true,
                title: '<img src="styles/legend/reaF_27.png" /> Área F'
            });
var format_reaE_28 = new ol.format.GeoJSON();
var features_reaE_28 = format_reaE_28.readFeatures(json_reaE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaE_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaE_28.addFeatures(features_reaE_28);
var lyr_reaE_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaE_28, 
                style: style_reaE_28,
                popuplayertitle: 'Área E',
                interactive: true,
                title: '<img src="styles/legend/reaE_28.png" /> Área E'
            });
var format_reaD_29 = new ol.format.GeoJSON();
var features_reaD_29 = format_reaD_29.readFeatures(json_reaD_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaD_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaD_29.addFeatures(features_reaD_29);
var lyr_reaD_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaD_29, 
                style: style_reaD_29,
                popuplayertitle: 'Área D',
                interactive: true,
                title: '<img src="styles/legend/reaD_29.png" /> Área D'
            });
var format_reaC_30 = new ol.format.GeoJSON();
var features_reaC_30 = format_reaC_30.readFeatures(json_reaC_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaC_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaC_30.addFeatures(features_reaC_30);
var lyr_reaC_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaC_30, 
                style: style_reaC_30,
                popuplayertitle: 'Área C',
                interactive: true,
                title: '<img src="styles/legend/reaC_30.png" /> Área C'
            });
var format_reaB_31 = new ol.format.GeoJSON();
var features_reaB_31 = format_reaB_31.readFeatures(json_reaB_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaB_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaB_31.addFeatures(features_reaB_31);
var lyr_reaB_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaB_31, 
                style: style_reaB_31,
                popuplayertitle: 'Área B',
                interactive: true,
                title: '<img src="styles/legend/reaB_31.png" /> Área B'
            });
var format_reaA_32 = new ol.format.GeoJSON();
var features_reaA_32 = format_reaA_32.readFeatures(json_reaA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaA_32.addFeatures(features_reaA_32);
var lyr_reaA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaA_32, 
                style: style_reaA_32,
                popuplayertitle: 'Área A',
                interactive: true,
                title: '<img src="styles/legend/reaA_32.png" /> Área A'
            });
var format_reaAverbada355235ReservaFlorestalLegalPartedareaG_33 = new ol.format.GeoJSON();
var features_reaAverbada355235ReservaFlorestalLegalPartedareaG_33 = format_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.readFeatures(json_reaAverbada355235ReservaFlorestalLegalPartedareaG_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.addFeatures(features_reaAverbada355235ReservaFlorestalLegalPartedareaG_33);
var lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaAverbada355235ReservaFlorestalLegalPartedareaG_33, 
                style: style_reaAverbada355235ReservaFlorestalLegalPartedareaG_33,
                popuplayertitle: 'Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaAverbada355235ReservaFlorestalLegalPartedareaG_33.png" /> Área Averbada 3/55235 (Reserva Florestal Legal - Parte da Área G)'
            });
var format_reaaseraverbadaPartedareaG_34 = new ol.format.GeoJSON();
var features_reaaseraverbadaPartedareaG_34 = format_reaaseraverbadaPartedareaG_34.readFeatures(json_reaaseraverbadaPartedareaG_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaaseraverbadaPartedareaG_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaaseraverbadaPartedareaG_34.addFeatures(features_reaaseraverbadaPartedareaG_34);
var lyr_reaaseraverbadaPartedareaG_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaaseraverbadaPartedareaG_34, 
                style: style_reaaseraverbadaPartedareaG_34,
                popuplayertitle: 'Área a ser averbada (Parte da Área G)',
                interactive: true,
                title: '<img src="styles/legend/reaaseraverbadaPartedareaG_34.png" /> Área a ser averbada (Parte da Área G)'
            });
var format_LoteEMDEF10unid218783m_35 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid218783m_35 = format_LoteEMDEF10unid218783m_35.readFeatures(json_LoteEMDEF10unid218783m_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid218783m_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid218783m_35.addFeatures(features_LoteEMDEF10unid218783m_35);
var lyr_LoteEMDEF10unid218783m_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid218783m_35, 
                style: style_LoteEMDEF10unid218783m_35,
                popuplayertitle: 'Lote EMDEF (10 unid. / 2.187,83 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid218783m_35.png" /> Lote EMDEF (10 unid. / 2.187,83 m²)'
            });
var format_LoteEMDEF10unid_36 = new ol.format.GeoJSON();
var features_LoteEMDEF10unid_36 = format_LoteEMDEF10unid_36.readFeatures(json_LoteEMDEF10unid_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEMDEF10unid_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEMDEF10unid_36.addFeatures(features_LoteEMDEF10unid_36);
var lyr_LoteEMDEF10unid_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEMDEF10unid_36, 
                style: style_LoteEMDEF10unid_36,
                popuplayertitle: 'Lote EMDEF (10 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEMDEF10unid_36.png" /> Lote EMDEF (10 unid.)'
            });
var format_LeiloLEIN97542025240unid6019315m_37 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025240unid6019315m_37 = format_LeiloLEIN97542025240unid6019315m_37.readFeatures(json_LeiloLEIN97542025240unid6019315m_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025240unid6019315m_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025240unid6019315m_37.addFeatures(features_LeiloLEIN97542025240unid6019315m_37);
var lyr_LeiloLEIN97542025240unid6019315m_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025240unid6019315m_37, 
                style: style_LeiloLEIN97542025240unid6019315m_37,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 (240 unid. / 60.193,15 m²)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025240unid6019315m_37.png" /> Leilão - LEI Nº 9.754/2025 (240 unid. / 60.193,15 m²)'
            });
var format_LeiloLEIN97542025240unid_38 = new ol.format.GeoJSON();
var features_LeiloLEIN97542025240unid_38 = format_LeiloLEIN97542025240unid_38.readFeatures(json_LeiloLEIN97542025240unid_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LeiloLEIN97542025240unid_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiloLEIN97542025240unid_38.addFeatures(features_LeiloLEIN97542025240unid_38);
var lyr_LeiloLEIN97542025240unid_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiloLEIN97542025240unid_38, 
                style: style_LeiloLEIN97542025240unid_38,
                popuplayertitle: 'Leilão - LEI Nº 9.754/2025 (240 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LeiloLEIN97542025240unid_38.png" /> Leilão - LEI Nº 9.754/2025 (240 unid.)'
            });
var format_LoteEdificao20unid508062m_39 = new ol.format.GeoJSON();
var features_LoteEdificao20unid508062m_39 = format_LoteEdificao20unid508062m_39.readFeatures(json_LoteEdificao20unid508062m_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid508062m_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid508062m_39.addFeatures(features_LoteEdificao20unid508062m_39);
var lyr_LoteEdificao20unid508062m_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid508062m_39, 
                style: style_LoteEdificao20unid508062m_39,
                popuplayertitle: 'Lote/Edificação (20 unid. / 5.080,62 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid508062m_39.png" /> Lote/Edificação (20 unid. / 5.080,62 m²)'
            });
var format_LoteEdificao20unid_40 = new ol.format.GeoJSON();
var features_LoteEdificao20unid_40 = format_LoteEdificao20unid_40.readFeatures(json_LoteEdificao20unid_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteEdificao20unid_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteEdificao20unid_40.addFeatures(features_LoteEdificao20unid_40);
var lyr_LoteEdificao20unid_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteEdificao20unid_40, 
                style: style_LoteEdificao20unid_40,
                popuplayertitle: 'Lote/Edificação (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteEdificao20unid_40.png" /> Lote/Edificação (20 unid.)'
            });
var format_Lote251unid7505210m_41 = new ol.format.GeoJSON();
var features_Lote251unid7505210m_41 = format_Lote251unid7505210m_41.readFeatures(json_Lote251unid7505210m_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid7505210m_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid7505210m_41.addFeatures(features_Lote251unid7505210m_41);
var lyr_Lote251unid7505210m_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid7505210m_41, 
                style: style_Lote251unid7505210m_41,
                popuplayertitle: 'Lote (251 unid. / 75.052,10 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid7505210m_41.png" /> Lote (251 unid. / 75.052,10 m²)'
            });
var format_Lote251unid_42 = new ol.format.GeoJSON();
var features_Lote251unid_42 = format_Lote251unid_42.readFeatures(json_Lote251unid_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote251unid_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote251unid_42.addFeatures(features_Lote251unid_42);
var lyr_Lote251unid_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote251unid_42, 
                style: style_Lote251unid_42,
                popuplayertitle: 'Lote (251 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote251unid_42.png" /> Lote (251 unid.)'
            });
var format_APP156unid230392892m_43 = new ol.format.GeoJSON();
var features_APP156unid230392892m_43 = format_APP156unid230392892m_43.readFeatures(json_APP156unid230392892m_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP156unid230392892m_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP156unid230392892m_43.addFeatures(features_APP156unid230392892m_43);
var lyr_APP156unid230392892m_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP156unid230392892m_43, 
                style: style_APP156unid230392892m_43,
                popuplayertitle: 'APP (156 unid. / 2.303.928,92 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP156unid230392892m_43.png" /> APP (156 unid. / 2.303.928,92 m²)'
            });
var format_readeUsoEspecial276unid271190268m_44 = new ol.format.GeoJSON();
var features_readeUsoEspecial276unid271190268m_44 = format_readeUsoEspecial276unid271190268m_44.readFeatures(json_readeUsoEspecial276unid271190268m_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial276unid271190268m_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial276unid271190268m_44.addFeatures(features_readeUsoEspecial276unid271190268m_44);
var lyr_readeUsoEspecial276unid271190268m_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial276unid271190268m_44, 
                style: style_readeUsoEspecial276unid271190268m_44,
                popuplayertitle: 'Área de Uso Especial (276 unid. / 2.711.902,68 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial276unid271190268m_44.png" /> Área de Uso Especial (276 unid. / 2.711.902,68 m²)'
            });
var format_reaInstitucional224unid133042345m_45 = new ol.format.GeoJSON();
var features_reaInstitucional224unid133042345m_45 = format_reaInstitucional224unid133042345m_45.readFeatures(json_reaInstitucional224unid133042345m_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional224unid133042345m_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional224unid133042345m_45.addFeatures(features_reaInstitucional224unid133042345m_45);
var lyr_reaInstitucional224unid133042345m_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional224unid133042345m_45, 
                style: style_reaInstitucional224unid133042345m_45,
                popuplayertitle: 'Área Institucional (224 unid. / 1.330.423,45 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional224unid133042345m_45.png" /> Área Institucional (224 unid. / 1.330.423,45 m²)'
            });
var format_reaPatrimonial33unid15776685m_46 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15776685m_46 = format_reaPatrimonial33unid15776685m_46.readFeatures(json_reaPatrimonial33unid15776685m_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15776685m_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15776685m_46.addFeatures(features_reaPatrimonial33unid15776685m_46);
var lyr_reaPatrimonial33unid15776685m_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15776685m_46, 
                style: style_reaPatrimonial33unid15776685m_46,
                popuplayertitle: 'Área Patrimonial (33 unid. / 157.766,85 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15776685m_46.png" /> Área Patrimonial (33 unid. / 157.766,85 m²)'
            });
var format_LoteamentoFechado115unid52603608m_47 = new ol.format.GeoJSON();
var features_LoteamentoFechado115unid52603608m_47 = format_LoteamentoFechado115unid52603608m_47.readFeatures(json_LoteamentoFechado115unid52603608m_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado115unid52603608m_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado115unid52603608m_47.addFeatures(features_LoteamentoFechado115unid52603608m_47);
var lyr_LoteamentoFechado115unid52603608m_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado115unid52603608m_47, 
                style: style_LoteamentoFechado115unid52603608m_47,
                popuplayertitle: 'Loteamento Fechado (115 unid. / 526.036,08 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado115unid52603608m_47.png" /> Loteamento Fechado (115 unid. / 526.036,08 m²)'
            });
var format_reaVerde1946unid805735618m_48 = new ol.format.GeoJSON();
var features_reaVerde1946unid805735618m_48 = format_reaVerde1946unid805735618m_48.readFeatures(json_reaVerde1946unid805735618m_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde1946unid805735618m_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1946unid805735618m_48.addFeatures(features_reaVerde1946unid805735618m_48);
var lyr_reaVerde1946unid805735618m_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1946unid805735618m_48, 
                style: style_reaVerde1946unid805735618m_48,
                popuplayertitle: 'Área Verde (1.946 unid. / 8.057.356,18 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1946unid805735618m_48.png" /> Área Verde (1.946 unid. / 8.057.356,18 m²)'
            });
var format_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49 = new ol.format.GeoJSON();
var features_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49 = format_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.readFeatures(json_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.addFeatures(features_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49);
var lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49, 
                style: style_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49,
                popuplayertitle: 'Unidades Escolares - Alfabetizaçao de Jovens e Adultos (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.png" /> Unidades Escolares - Alfabetizaçao de Jovens e Adultos (15 unid.)'
            });
var format_UnidadesEscolaresAlmoxarifadoEducao1unid_50 = new ol.format.GeoJSON();
var features_UnidadesEscolaresAlmoxarifadoEducao1unid_50 = format_UnidadesEscolaresAlmoxarifadoEducao1unid_50.readFeatures(json_UnidadesEscolaresAlmoxarifadoEducao1unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_50.addFeatures(features_UnidadesEscolaresAlmoxarifadoEducao1unid_50);
var lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresAlmoxarifadoEducao1unid_50, 
                style: style_UnidadesEscolaresAlmoxarifadoEducao1unid_50,
                popuplayertitle: 'Unidades Escolares - Almoxarifado Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresAlmoxarifadoEducao1unid_50.png" /> Unidades Escolares - Almoxarifado Educação (1 unid.)'
            });
var format_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51 = format_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.readFeatures(json_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.addFeatures(features_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51);
var lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51, 
                style: style_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51,
                popuplayertitle: 'Unidades Escolares - CEI (Centro de Educação Integrada) Gustavo Chereghini Bichuette (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.png" /> Unidades Escolares - CEI (Centro de Educação Integrada) Gustavo Chereghini Bichuette (1 unid.)'
            });
var format_UnidadesEscolaresCreche35unid_52 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCreche35unid_52 = format_UnidadesEscolaresCreche35unid_52.readFeatures(json_UnidadesEscolaresCreche35unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCreche35unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCreche35unid_52.addFeatures(features_UnidadesEscolaresCreche35unid_52);
var lyr_UnidadesEscolaresCreche35unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCreche35unid_52, 
                style: style_UnidadesEscolaresCreche35unid_52,
                popuplayertitle: 'Unidades Escolares - Creche (35 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCreche35unid_52.png" /> Unidades Escolares - Creche (35 unid.)'
            });
var format_UnidadesEscolaresCrechePrEscola45unid_53 = new ol.format.GeoJSON();
var features_UnidadesEscolaresCrechePrEscola45unid_53 = format_UnidadesEscolaresCrechePrEscola45unid_53.readFeatures(json_UnidadesEscolaresCrechePrEscola45unid_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresCrechePrEscola45unid_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresCrechePrEscola45unid_53.addFeatures(features_UnidadesEscolaresCrechePrEscola45unid_53);
var lyr_UnidadesEscolaresCrechePrEscola45unid_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresCrechePrEscola45unid_53, 
                style: style_UnidadesEscolaresCrechePrEscola45unid_53,
                popuplayertitle: 'Unidades Escolares - Creche, Pré Escola (45 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresCrechePrEscola45unid_53.png" /> Unidades Escolares - Creche, Pré Escola (45 unid.)'
            });
var format_UnidadesEscolaresEdInfantil9unid_54 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEdInfantil9unid_54 = format_UnidadesEscolaresEdInfantil9unid_54.readFeatures(json_UnidadesEscolaresEdInfantil9unid_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEdInfantil9unid_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEdInfantil9unid_54.addFeatures(features_UnidadesEscolaresEdInfantil9unid_54);
var lyr_UnidadesEscolaresEdInfantil9unid_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEdInfantil9unid_54, 
                style: style_UnidadesEscolaresEdInfantil9unid_54,
                popuplayertitle: 'Unidades Escolares - Ed. Infantil (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEdInfantil9unid_54.png" /> Unidades Escolares - Ed. Infantil (9 unid.)'
            });
var format_UnidadesEscolaresEdInfantilEnsFundamental39unid_55 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEdInfantilEnsFundamental39unid_55 = format_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.readFeatures(json_UnidadesEscolaresEdInfantilEnsFundamental39unid_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.addFeatures(features_UnidadesEscolaresEdInfantilEnsFundamental39unid_55);
var lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEdInfantilEnsFundamental39unid_55, 
                style: style_UnidadesEscolaresEdInfantilEnsFundamental39unid_55,
                popuplayertitle: 'Unidades Escolares - Ed. Infantil, Ens. Fundamental (39 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEdInfantilEnsFundamental39unid_55.png" /> Unidades Escolares - Ed. Infantil, Ens. Fundamental (39 unid.)'
            });
var format_UnidadesEscolaresEJA3unid_56 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEJA3unid_56 = format_UnidadesEscolaresEJA3unid_56.readFeatures(json_UnidadesEscolaresEJA3unid_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEJA3unid_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEJA3unid_56.addFeatures(features_UnidadesEscolaresEJA3unid_56);
var lyr_UnidadesEscolaresEJA3unid_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEJA3unid_56, 
                style: style_UnidadesEscolaresEJA3unid_56,
                popuplayertitle: 'Unidades Escolares - EJA (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEJA3unid_56.png" /> Unidades Escolares - EJA (3 unid.)'
            });
var format_UnidadesEscolaresEnsFundamental3unid_57 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEnsFundamental3unid_57 = format_UnidadesEscolaresEnsFundamental3unid_57.readFeatures(json_UnidadesEscolaresEnsFundamental3unid_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEnsFundamental3unid_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEnsFundamental3unid_57.addFeatures(features_UnidadesEscolaresEnsFundamental3unid_57);
var lyr_UnidadesEscolaresEnsFundamental3unid_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEnsFundamental3unid_57, 
                style: style_UnidadesEscolaresEnsFundamental3unid_57,
                popuplayertitle: 'Unidades Escolares - Ens. Fundamental (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEnsFundamental3unid_57.png" /> Unidades Escolares - Ens. Fundamental (3 unid.)'
            });
var format_UnidadesEscolaresEspaodeDifusoCientfica1unid_58 = new ol.format.GeoJSON();
var features_UnidadesEscolaresEspaodeDifusoCientfica1unid_58 = format_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.readFeatures(json_UnidadesEscolaresEspaodeDifusoCientfica1unid_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.addFeatures(features_UnidadesEscolaresEspaodeDifusoCientfica1unid_58);
var lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresEspaodeDifusoCientfica1unid_58, 
                style: style_UnidadesEscolaresEspaodeDifusoCientfica1unid_58,
                popuplayertitle: 'Unidades Escolares - Espaço de Difusão Científica (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresEspaodeDifusoCientfica1unid_58.png" /> Unidades Escolares - Espaço de Difusão Científica (1 unid.)'
            });
var format_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59 = new ol.format.GeoJSON();
var features_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59 = format_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.readFeatures(json_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.addFeatures(features_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59);
var lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59, 
                style: style_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59,
                popuplayertitle: 'Unidades Escolares - Secretaria Municipal de Educação (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.png" /> Unidades Escolares - Secretaria Municipal de Educação (1 unid.)'
            });
var format_UnidadesEscolaresSetordeMerenda1unid_60 = new ol.format.GeoJSON();
var features_UnidadesEscolaresSetordeMerenda1unid_60 = format_UnidadesEscolaresSetordeMerenda1unid_60.readFeatures(json_UnidadesEscolaresSetordeMerenda1unid_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresSetordeMerenda1unid_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresSetordeMerenda1unid_60.addFeatures(features_UnidadesEscolaresSetordeMerenda1unid_60);
var lyr_UnidadesEscolaresSetordeMerenda1unid_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresSetordeMerenda1unid_60, 
                style: style_UnidadesEscolaresSetordeMerenda1unid_60,
                popuplayertitle: 'Unidades Escolares - Setor de Merenda (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresSetordeMerenda1unid_60.png" /> Unidades Escolares - Setor de Merenda (1 unid.)'
            });
var format_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61 = new ol.format.GeoJSON();
var features_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61 = format_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.readFeatures(json_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.addFeatures(features_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61);
var lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61, 
                style: style_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61,
                popuplayertitle: 'Unidades Escolares - Universidade Aberta do Brasil - UAB (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.png" /> Unidades Escolares - Universidade Aberta do Brasil - UAB (1 unid.)'
            });
var format_LoteamentosClandestinosEmmonitoramento1unid_62 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmmonitoramento1unid_62 = format_LoteamentosClandestinosEmmonitoramento1unid_62.readFeatures(json_LoteamentosClandestinosEmmonitoramento1unid_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmmonitoramento1unid_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmmonitoramento1unid_62.addFeatures(features_LoteamentosClandestinosEmmonitoramento1unid_62);
var lyr_LoteamentosClandestinosEmmonitoramento1unid_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmmonitoramento1unid_62, 
                style: style_LoteamentosClandestinosEmmonitoramento1unid_62,
                popuplayertitle: 'Loteamentos Clandestinos - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmmonitoramento1unid_62.png" /> Loteamentos Clandestinos - Em monitoramento (1 unid.)'
            });
var format_LoteamentosClandestinosEmregularizao36unid_63 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmregularizao36unid_63 = format_LoteamentosClandestinosEmregularizao36unid_63.readFeatures(json_LoteamentosClandestinosEmregularizao36unid_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmregularizao36unid_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmregularizao36unid_63.addFeatures(features_LoteamentosClandestinosEmregularizao36unid_63);
var lyr_LoteamentosClandestinosEmregularizao36unid_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmregularizao36unid_63, 
                style: style_LoteamentosClandestinosEmregularizao36unid_63,
                popuplayertitle: 'Loteamentos Clandestinos - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmregularizao36unid_63.png" /> Loteamentos Clandestinos - Em regularização (36 unid.)'
            });
var format_LoteamentosClandestinosNotificado4unid_64 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificado4unid_64 = format_LoteamentosClandestinosNotificado4unid_64.readFeatures(json_LoteamentosClandestinosNotificado4unid_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificado4unid_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificado4unid_64.addFeatures(features_LoteamentosClandestinosNotificado4unid_64);
var lyr_LoteamentosClandestinosNotificado4unid_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificado4unid_64, 
                style: style_LoteamentosClandestinosNotificado4unid_64,
                popuplayertitle: 'Loteamentos Clandestinos - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificado4unid_64.png" /> Loteamentos Clandestinos - Notificado (4 unid.)'
            });
var format_LoteamentosClandestinosNotificar25unid_65 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificar25unid_65 = format_LoteamentosClandestinosNotificar25unid_65.readFeatures(json_LoteamentosClandestinosNotificar25unid_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificar25unid_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificar25unid_65.addFeatures(features_LoteamentosClandestinosNotificar25unid_65);
var lyr_LoteamentosClandestinosNotificar25unid_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificar25unid_65, 
                style: style_LoteamentosClandestinosNotificar25unid_65,
                popuplayertitle: 'Loteamentos Clandestinos - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificar25unid_65.png" /> Loteamentos Clandestinos - Notificar (25 unid.)'
            });
var format_LoteamentosClandestinosVerificar2unid_66 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosVerificar2unid_66 = format_LoteamentosClandestinosVerificar2unid_66.readFeatures(json_LoteamentosClandestinosVerificar2unid_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosVerificar2unid_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosVerificar2unid_66.addFeatures(features_LoteamentosClandestinosVerificar2unid_66);
var lyr_LoteamentosClandestinosVerificar2unid_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosVerificar2unid_66, 
                style: style_LoteamentosClandestinosVerificar2unid_66,
                popuplayertitle: 'Loteamentos Clandestinos - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosVerificar2unid_66.png" /> Loteamentos Clandestinos - Verificar (2 unid.)'
            });
var format_LoteamentosClandestinosEmmonitoramento1unid_67 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmmonitoramento1unid_67 = format_LoteamentosClandestinosEmmonitoramento1unid_67.readFeatures(json_LoteamentosClandestinosEmmonitoramento1unid_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmmonitoramento1unid_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmmonitoramento1unid_67.addFeatures(features_LoteamentosClandestinosEmmonitoramento1unid_67);
var lyr_LoteamentosClandestinosEmmonitoramento1unid_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmmonitoramento1unid_67, 
                style: style_LoteamentosClandestinosEmmonitoramento1unid_67,
                popuplayertitle: 'Loteamentos Clandestinos - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmmonitoramento1unid_67.png" /> Loteamentos Clandestinos - Em monitoramento (1 unid.)'
            });
var format_LoteamentosClandestinosEmregularizao36unid_68 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosEmregularizao36unid_68 = format_LoteamentosClandestinosEmregularizao36unid_68.readFeatures(json_LoteamentosClandestinosEmregularizao36unid_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosEmregularizao36unid_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosEmregularizao36unid_68.addFeatures(features_LoteamentosClandestinosEmregularizao36unid_68);
var lyr_LoteamentosClandestinosEmregularizao36unid_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosEmregularizao36unid_68, 
                style: style_LoteamentosClandestinosEmregularizao36unid_68,
                popuplayertitle: 'Loteamentos Clandestinos - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosEmregularizao36unid_68.png" /> Loteamentos Clandestinos - Em regularização (36 unid.)'
            });
var format_LoteamentosClandestinosNotificado4unid_69 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificado4unid_69 = format_LoteamentosClandestinosNotificado4unid_69.readFeatures(json_LoteamentosClandestinosNotificado4unid_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificado4unid_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificado4unid_69.addFeatures(features_LoteamentosClandestinosNotificado4unid_69);
var lyr_LoteamentosClandestinosNotificado4unid_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificado4unid_69, 
                style: style_LoteamentosClandestinosNotificado4unid_69,
                popuplayertitle: 'Loteamentos Clandestinos - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificado4unid_69.png" /> Loteamentos Clandestinos - Notificado (4 unid.)'
            });
var format_LoteamentosClandestinosNotificar25unid_70 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosNotificar25unid_70 = format_LoteamentosClandestinosNotificar25unid_70.readFeatures(json_LoteamentosClandestinosNotificar25unid_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosNotificar25unid_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosNotificar25unid_70.addFeatures(features_LoteamentosClandestinosNotificar25unid_70);
var lyr_LoteamentosClandestinosNotificar25unid_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosNotificar25unid_70, 
                style: style_LoteamentosClandestinosNotificar25unid_70,
                popuplayertitle: 'Loteamentos Clandestinos - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosNotificar25unid_70.png" /> Loteamentos Clandestinos - Notificar (25 unid.)'
            });
var format_LoteamentosClandestinosVerificar2unid_71 = new ol.format.GeoJSON();
var features_LoteamentosClandestinosVerificar2unid_71 = format_LoteamentosClandestinosVerificar2unid_71.readFeatures(json_LoteamentosClandestinosVerificar2unid_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinosVerificar2unid_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinosVerificar2unid_71.addFeatures(features_LoteamentosClandestinosVerificar2unid_71);
var lyr_LoteamentosClandestinosVerificar2unid_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinosVerificar2unid_71, 
                style: style_LoteamentosClandestinosVerificar2unid_71,
                popuplayertitle: 'Loteamentos Clandestinos - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinosVerificar2unid_71.png" /> Loteamentos Clandestinos - Verificar (2 unid.)'
            });
var format_LoteamentosRegularizados9unid_72 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_72 = format_LoteamentosRegularizados9unid_72.readFeatures(json_LoteamentosRegularizados9unid_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_72.addFeatures(features_LoteamentosRegularizados9unid_72);
var lyr_LoteamentosRegularizados9unid_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_72, 
                style: style_LoteamentosRegularizados9unid_72,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_72.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_LoteamentosRegularizados9unid_73 = new ol.format.GeoJSON();
var features_LoteamentosRegularizados9unid_73 = format_LoteamentosRegularizados9unid_73.readFeatures(json_LoteamentosRegularizados9unid_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosRegularizados9unid_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosRegularizados9unid_73.addFeatures(features_LoteamentosRegularizados9unid_73);
var lyr_LoteamentosRegularizados9unid_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosRegularizados9unid_73, 
                style: style_LoteamentosRegularizados9unid_73,
                popuplayertitle: 'Loteamentos Regularizados (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosRegularizados9unid_73.png" /> Loteamentos Regularizados (9 unid.)'
            });
var format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74 = format_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.readFeatures(json_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.addFeatures(features_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74);
var lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74, 
                style: style_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74,
                popuplayertitle: 'Zonas Especiais - AEIS - Área Especial de Interesse Social',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.png" /> Zonas Especiais - AEIS - Área Especial de Interesse Social'
            });
var format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75 = format_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.readFeatures(json_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.addFeatures(features_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75);
var lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75, 
                style: style_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75,
                popuplayertitle: 'Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.png" /> Zonas Especiais  - AEPI - Área Especial Preferencialmente Industrial e Logística'
            });
var format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76 = new ol.format.GeoJSON();
var features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76 = format_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.readFeatures(json_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.addFeatures(features_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76);
var lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76, 
                style: style_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76,
                popuplayertitle: 'Zonas Especiais - AERU - Área Especial Residencias Unifamiliares',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.png" /> Zonas Especiais - AERU - Área Especial Residencias Unifamiliares'
            });
var format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77 = new ol.format.GeoJSON();
var features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77 = format_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.readFeatures(json_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.addFeatures(features_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77);
var lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77, 
                style: style_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77,
                popuplayertitle: 'Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural',
                interactive: true,
                title: '<img src="styles/legend/ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.png" /> Zonas Especiais - Área Especial Destinada ao Lazer e de Interesse Turístico e Cultural'
            });
var format_MacrozonasMacrozonadoRioCanoas_78 = new ol.format.GeoJSON();
var features_MacrozonasMacrozonadoRioCanoas_78 = format_MacrozonasMacrozonadoRioCanoas_78.readFeatures(json_MacrozonasMacrozonadoRioCanoas_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasMacrozonadoRioCanoas_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasMacrozonadoRioCanoas_78.addFeatures(features_MacrozonasMacrozonadoRioCanoas_78);
var lyr_MacrozonasMacrozonadoRioCanoas_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasMacrozonadoRioCanoas_78, 
                style: style_MacrozonasMacrozonadoRioCanoas_78,
                popuplayertitle: 'Macrozonas - Macrozona do Rio Canoas',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasMacrozonadoRioCanoas_78.png" /> Macrozonas - Macrozona do Rio Canoas'
            });
var format_MacrozonasSubMacrozonadeExpansoUrbana_79 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeExpansoUrbana_79 = format_MacrozonasSubMacrozonadeExpansoUrbana_79.readFeatures(json_MacrozonasSubMacrozonadeExpansoUrbana_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_79.addFeatures(features_MacrozonasSubMacrozonadeExpansoUrbana_79);
var lyr_MacrozonasSubMacrozonadeExpansoUrbana_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeExpansoUrbana_79, 
                style: style_MacrozonasSubMacrozonadeExpansoUrbana_79,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Expansão Urbana',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeExpansoUrbana_79.png" /> Macrozonas - Sub - Macrozona de Expansão Urbana'
            });
var format_MacrozonasSubMacrozonadeOcupaoPreferencial_80 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoPreferencial_80 = format_MacrozonasSubMacrozonadeOcupaoPreferencial_80.readFeatures(json_MacrozonasSubMacrozonadeOcupaoPreferencial_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_80.addFeatures(features_MacrozonasSubMacrozonadeOcupaoPreferencial_80);
var lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoPreferencial_80, 
                style: style_MacrozonasSubMacrozonadeOcupaoPreferencial_80,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Preferencial',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoPreferencial_80.png" /> Macrozonas - Sub - Macrozona de Ocupação Preferencial'
            });
var format_MacrozonasSubMacrozonadeOcupaoRestrita_81 = new ol.format.GeoJSON();
var features_MacrozonasSubMacrozonadeOcupaoRestrita_81 = format_MacrozonasSubMacrozonadeOcupaoRestrita_81.readFeatures(json_MacrozonasSubMacrozonadeOcupaoRestrita_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_81.addFeatures(features_MacrozonasSubMacrozonadeOcupaoRestrita_81);
var lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacrozonasSubMacrozonadeOcupaoRestrita_81, 
                style: style_MacrozonasSubMacrozonadeOcupaoRestrita_81,
                popuplayertitle: 'Macrozonas - Sub - Macrozona de Ocupação Restrita',
                interactive: true,
                title: '<img src="styles/legend/MacrozonasSubMacrozonadeOcupaoRestrita_81.png" /> Macrozonas - Sub - Macrozona de Ocupação Restrita'
            });
var format_ExpansoUrbanaLCN0502003_82 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN0502003_82 = format_ExpansoUrbanaLCN0502003_82.readFeatures(json_ExpansoUrbanaLCN0502003_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN0502003_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN0502003_82.addFeatures(features_ExpansoUrbanaLCN0502003_82);
var lyr_ExpansoUrbanaLCN0502003_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN0502003_82, 
                style: style_ExpansoUrbanaLCN0502003_82,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 050/ 2003',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN0502003_82.png" /> Expansão Urbana - L.C. Nº 050/ 2003'
            });
var format_ExpansoUrbanaLCN1402009_83 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN1402009_83 = format_ExpansoUrbanaLCN1402009_83.readFeatures(json_ExpansoUrbanaLCN1402009_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN1402009_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN1402009_83.addFeatures(features_ExpansoUrbanaLCN1402009_83);
var lyr_ExpansoUrbanaLCN1402009_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN1402009_83, 
                style: style_ExpansoUrbanaLCN1402009_83,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 140/ 2009',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN1402009_83.png" /> Expansão Urbana - L.C. Nº 140/ 2009'
            });
var format_ExpansoUrbanaLCN2352013_84 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN2352013_84 = format_ExpansoUrbanaLCN2352013_84.readFeatures(json_ExpansoUrbanaLCN2352013_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN2352013_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN2352013_84.addFeatures(features_ExpansoUrbanaLCN2352013_84);
var lyr_ExpansoUrbanaLCN2352013_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN2352013_84, 
                style: style_ExpansoUrbanaLCN2352013_84,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 235/ 2013',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN2352013_84.png" /> Expansão Urbana - L.C. Nº 235/ 2013'
            });
var format_ExpansoUrbanaLCN3242019_85 = new ol.format.GeoJSON();
var features_ExpansoUrbanaLCN3242019_85 = format_ExpansoUrbanaLCN3242019_85.readFeatures(json_ExpansoUrbanaLCN3242019_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaLCN3242019_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaLCN3242019_85.addFeatures(features_ExpansoUrbanaLCN3242019_85);
var lyr_ExpansoUrbanaLCN3242019_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaLCN3242019_85, 
                style: style_ExpansoUrbanaLCN3242019_85,
                popuplayertitle: 'Expansão Urbana - L.C. Nº 324/ 2019',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaLCN3242019_85.png" /> Expansão Urbana - L.C. Nº 324/ 2019'
            });
var format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86 = new ol.format.GeoJSON();
var features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86 = format_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.readFeatures(json_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.addFeatures(features_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86);
var lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86, 
                style: style_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86,
                popuplayertitle: 'Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.png" /> Expansão Urbana - BACIAS DO CANOAS E POUSO ALEGRE - Leis - 4.240/1992, 4.420/1994 e L.C. 100/2006'
            });
var format_SistemaVirioExpansodosistemavirio_87 = new ol.format.GeoJSON();
var features_SistemaVirioExpansodosistemavirio_87 = format_SistemaVirioExpansodosistemavirio_87.readFeatures(json_SistemaVirioExpansodosistemavirio_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioExpansodosistemavirio_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioExpansodosistemavirio_87.addFeatures(features_SistemaVirioExpansodosistemavirio_87);
var lyr_SistemaVirioExpansodosistemavirio_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioExpansodosistemavirio_87, 
                style: style_SistemaVirioExpansodosistemavirio_87,
                popuplayertitle: 'Sistema Viário - Expansão do sistema viário',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioExpansodosistemavirio_87.png" /> Sistema Viário - Expansão do sistema viário'
            });
var format_SistemaVirioRodovias_88 = new ol.format.GeoJSON();
var features_SistemaVirioRodovias_88 = format_SistemaVirioRodovias_88.readFeatures(json_SistemaVirioRodovias_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodovias_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodovias_88.addFeatures(features_SistemaVirioRodovias_88);
var lyr_SistemaVirioRodovias_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodovias_88, 
                style: style_SistemaVirioRodovias_88,
                popuplayertitle: 'Sistema Viário - Rodovias',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodovias_88.png" /> Sistema Viário - Rodovias'
            });
var format_SistemaVirioRodoviasViasarteriais_89 = new ol.format.GeoJSON();
var features_SistemaVirioRodoviasViasarteriais_89 = format_SistemaVirioRodoviasViasarteriais_89.readFeatures(json_SistemaVirioRodoviasViasarteriais_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioRodoviasViasarteriais_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioRodoviasViasarteriais_89.addFeatures(features_SistemaVirioRodoviasViasarteriais_89);
var lyr_SistemaVirioRodoviasViasarteriais_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioRodoviasViasarteriais_89, 
                style: style_SistemaVirioRodoviasViasarteriais_89,
                popuplayertitle: 'Sistema Viário - Rodovias/Vias arteriais',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioRodoviasViasarteriais_89.png" /> Sistema Viário - Rodovias/Vias arteriais'
            });
var format_SistemaVirioSistemavirioprincipal_90 = new ol.format.GeoJSON();
var features_SistemaVirioSistemavirioprincipal_90 = format_SistemaVirioSistemavirioprincipal_90.readFeatures(json_SistemaVirioSistemavirioprincipal_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SistemaVirioSistemavirioprincipal_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemaVirioSistemavirioprincipal_90.addFeatures(features_SistemaVirioSistemavirioprincipal_90);
var lyr_SistemaVirioSistemavirioprincipal_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemaVirioSistemavirioprincipal_90, 
                style: style_SistemaVirioSistemavirioprincipal_90,
                popuplayertitle: 'Sistema Viário - Sistema viário principal',
                interactive: true,
                title: '<img src="styles/legend/SistemaVirioSistemavirioprincipal_90.png" /> Sistema Viário - Sistema viário principal'
            });
var format_PlanoVirioZonaSulAVENIDAEXISTENTE_91 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulAVENIDAEXISTENTE_91 = format_PlanoVirioZonaSulAVENIDAEXISTENTE_91.readFeatures(json_PlanoVirioZonaSulAVENIDAEXISTENTE_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_91.addFeatures(features_PlanoVirioZonaSulAVENIDAEXISTENTE_91);
var lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulAVENIDAEXISTENTE_91, 
                style: style_PlanoVirioZonaSulAVENIDAEXISTENTE_91,
                popuplayertitle: 'Plano Viário Zona Sul - AVENIDA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulAVENIDAEXISTENTE_91.png" /> Plano Viário Zona Sul - AVENIDA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZAVENIDA_92 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZAVENIDA_92 = format_PlanoVirioZonaSulDIRETRIZAVENIDA_92.readFeatures(json_PlanoVirioZonaSulDIRETRIZAVENIDA_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_92.addFeatures(features_PlanoVirioZonaSulDIRETRIZAVENIDA_92);
var lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZAVENIDA_92, 
                style: style_PlanoVirioZonaSulDIRETRIZAVENIDA_92,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ AVENIDA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZAVENIDA_92.png" /> Plano Viário Zona Sul - DIRETRIZ AVENIDA'
            });
var format_PlanoVirioZonaSulDIRETRIZCOLETORA_93 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZCOLETORA_93 = format_PlanoVirioZonaSulDIRETRIZCOLETORA_93.readFeatures(json_PlanoVirioZonaSulDIRETRIZCOLETORA_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_93.addFeatures(features_PlanoVirioZonaSulDIRETRIZCOLETORA_93);
var lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZCOLETORA_93, 
                style: style_PlanoVirioZonaSulDIRETRIZCOLETORA_93,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ COLETORA',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZCOLETORA_93.png" /> Plano Viário Zona Sul - DIRETRIZ COLETORA'
            });
var format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94 = format_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.readFeatures(json_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.addFeatures(features_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94);
var lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94, 
                style: style_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94,
                popuplayertitle: 'Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.png" /> Plano Viário Zona Sul - VIA EXPRESSA EXISTENTE'
            });
var format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95 = new ol.format.GeoJSON();
var features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95 = format_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.readFeatures(json_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.addFeatures(features_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95);
var lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95, 
                style: style_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95,
                popuplayertitle: 'Plano Viário Zona Sul - DIRETRIZ VIA PARQUE',
                interactive: true,
                title: '<img src="styles/legend/PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.png" /> Plano Viário Zona Sul - DIRETRIZ VIA PARQUE'
            });
var format_CondomnioIICityPetrpolis_96 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_96 = format_CondomnioIICityPetrpolis_96.readFeatures(json_CondomnioIICityPetrpolis_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_96.addFeatures(features_CondomnioIICityPetrpolis_96);
var lyr_CondomnioIICityPetrpolis_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_96, 
                style: style_CondomnioIICityPetrpolis_96,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_96_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_97 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_97 = format_CondomnioIICityPetrpolis_97.readFeatures(json_CondomnioIICityPetrpolis_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_97.addFeatures(features_CondomnioIICityPetrpolis_97);
var lyr_CondomnioIICityPetrpolis_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_97, 
                style: style_CondomnioIICityPetrpolis_97,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_97.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_98 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_98 = format_CondomnioICityPetrpolis_98.readFeatures(json_CondomnioICityPetrpolis_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_98.addFeatures(features_CondomnioICityPetrpolis_98);
var lyr_CondomnioICityPetrpolis_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_98, 
                style: style_CondomnioICityPetrpolis_98,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_98_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_99 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_99 = format_CondomnioICityPetrpolis_99.readFeatures(json_CondomnioICityPetrpolis_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_99.addFeatures(features_CondomnioICityPetrpolis_99);
var lyr_CondomnioICityPetrpolis_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_99, 
                style: style_CondomnioICityPetrpolis_99,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_99.png" /> Condomínio I City Petrópolis'
            });
var format_EmpreendimentoVillaBella_100 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_100 = format_EmpreendimentoVillaBella_100.readFeatures(json_EmpreendimentoVillaBella_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_100.addFeatures(features_EmpreendimentoVillaBella_100);
var lyr_EmpreendimentoVillaBella_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_100, 
                style: style_EmpreendimentoVillaBella_100,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
    title: 'Empreendimento Villa Bella<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_100_6.png" /> RUAS<br />' });
var format_EmpreendimentoVillaBella_101 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_101 = format_EmpreendimentoVillaBella_101.readFeatures(json_EmpreendimentoVillaBella_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_101.addFeatures(features_EmpreendimentoVillaBella_101);
var lyr_EmpreendimentoVillaBella_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_101, 
                style: style_EmpreendimentoVillaBella_101,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaBella_101.png" /> Empreendimento Villa Bella'
            });
var format_EmpreendimentoFazendaProgresso_102 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_102 = format_EmpreendimentoFazendaProgresso_102.readFeatures(json_EmpreendimentoFazendaProgresso_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_102.addFeatures(features_EmpreendimentoFazendaProgresso_102);
var lyr_EmpreendimentoFazendaProgresso_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_102, 
                style: style_EmpreendimentoFazendaProgresso_102,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_102.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoFazendaProgresso_103 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_103 = format_EmpreendimentoFazendaProgresso_103.readFeatures(json_EmpreendimentoFazendaProgresso_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_103.addFeatures(features_EmpreendimentoFazendaProgresso_103);
var lyr_EmpreendimentoFazendaProgresso_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_103, 
                style: style_EmpreendimentoFazendaProgresso_103,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_103.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoArizona_104 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_104 = format_EmpreendimentoArizona_104.readFeatures(json_EmpreendimentoArizona_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_104.addFeatures(features_EmpreendimentoArizona_104);
var lyr_EmpreendimentoArizona_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_104, 
                style: style_EmpreendimentoArizona_104,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
    title: 'Empreendimento Arizona<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_104_6.png" /> VIELA<br />' });
var format_EmpreendimentoArizona_105 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_105 = format_EmpreendimentoArizona_105.readFeatures(json_EmpreendimentoArizona_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_105.addFeatures(features_EmpreendimentoArizona_105);
var lyr_EmpreendimentoArizona_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_105, 
                style: style_EmpreendimentoArizona_105,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoArizona_105.png" /> Empreendimento Arizona'
            });
var format_EmpreendimentoVilaDiEspanha_106 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDiEspanha_106 = format_EmpreendimentoVilaDiEspanha_106.readFeatures(json_EmpreendimentoVilaDiEspanha_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVilaDiEspanha_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDiEspanha_106.addFeatures(features_EmpreendimentoVilaDiEspanha_106);
var lyr_EmpreendimentoVilaDiEspanha_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDiEspanha_106, 
                style: style_EmpreendimentoVilaDiEspanha_106,
                popuplayertitle: 'Empreendimento Vila Di Espanha',
                interactive: true,
    title: 'Empreendimento Vila Di Espanha<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_106_7.png" /> VIELA<br />' });
var format_EmpreendimentoVilaDiEspanha_107 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDiEspanha_107 = format_EmpreendimentoVilaDiEspanha_107.readFeatures(json_EmpreendimentoVilaDiEspanha_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVilaDiEspanha_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDiEspanha_107.addFeatures(features_EmpreendimentoVilaDiEspanha_107);
var lyr_EmpreendimentoVilaDiEspanha_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDiEspanha_107, 
                style: style_EmpreendimentoVilaDiEspanha_107,
                popuplayertitle: 'Empreendimento Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVilaDiEspanha_107.png" /> Empreendimento Vila Di Espanha'
            });
var format_EmpreendimentoTerraNova_108 = new ol.format.GeoJSON();
var features_EmpreendimentoTerraNova_108 = format_EmpreendimentoTerraNova_108.readFeatures(json_EmpreendimentoTerraNova_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTerraNova_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTerraNova_108.addFeatures(features_EmpreendimentoTerraNova_108);
var lyr_EmpreendimentoTerraNova_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTerraNova_108, 
                style: style_EmpreendimentoTerraNova_108,
                popuplayertitle: 'Empreendimento Terra Nova',
                interactive: true,
    title: 'Empreendimento Terra Nova<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_108_5.png" /> RUAS<br />' });
var format_EmpreendimentoTerraNova_109 = new ol.format.GeoJSON();
var features_EmpreendimentoTerraNova_109 = format_EmpreendimentoTerraNova_109.readFeatures(json_EmpreendimentoTerraNova_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTerraNova_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTerraNova_109.addFeatures(features_EmpreendimentoTerraNova_109);
var lyr_EmpreendimentoTerraNova_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTerraNova_109, 
                style: style_EmpreendimentoTerraNova_109,
                popuplayertitle: 'Empreendimento Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTerraNova_109.png" /> Empreendimento Terra Nova'
            });
var format_EmpreendimentoDiocesedeFranca_110 = new ol.format.GeoJSON();
var features_EmpreendimentoDiocesedeFranca_110 = format_EmpreendimentoDiocesedeFranca_110.readFeatures(json_EmpreendimentoDiocesedeFranca_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDiocesedeFranca_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDiocesedeFranca_110.addFeatures(features_EmpreendimentoDiocesedeFranca_110);
var lyr_EmpreendimentoDiocesedeFranca_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDiocesedeFranca_110, 
                style: style_EmpreendimentoDiocesedeFranca_110,
                popuplayertitle: 'Empreendimento Diocese de Franca',
                interactive: true,
    title: 'Empreendimento Diocese de Franca<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_110_6.png" /> RUAS<br />' });
var format_EmpreendimentoDiocesedeFranca_111 = new ol.format.GeoJSON();
var features_EmpreendimentoDiocesedeFranca_111 = format_EmpreendimentoDiocesedeFranca_111.readFeatures(json_EmpreendimentoDiocesedeFranca_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDiocesedeFranca_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDiocesedeFranca_111.addFeatures(features_EmpreendimentoDiocesedeFranca_111);
var lyr_EmpreendimentoDiocesedeFranca_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDiocesedeFranca_111, 
                style: style_EmpreendimentoDiocesedeFranca_111,
                popuplayertitle: 'Empreendimento Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDiocesedeFranca_111.png" /> Empreendimento Diocese de Franca'
            });
var format_EmpreendimentoResidencialBoaVista_112 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_112 = format_EmpreendimentoResidencialBoaVista_112.readFeatures(json_EmpreendimentoResidencialBoaVista_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_112.addFeatures(features_EmpreendimentoResidencialBoaVista_112);
var lyr_EmpreendimentoResidencialBoaVista_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_112, 
                style: style_EmpreendimentoResidencialBoaVista_112,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
    title: 'Empreendimento Residencial Boa Vista<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_112_7.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialBoaVista_113 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_113 = format_EmpreendimentoResidencialBoaVista_113.readFeatures(json_EmpreendimentoResidencialBoaVista_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_113.addFeatures(features_EmpreendimentoResidencialBoaVista_113);
var lyr_EmpreendimentoResidencialBoaVista_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_113, 
                style: style_EmpreendimentoResidencialBoaVista_113,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialBoaVista_113.png" /> Empreendimento Residencial Boa Vista'
            });
var format_EmpreendimentoVillaDoratta_114 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_114 = format_EmpreendimentoVillaDoratta_114.readFeatures(json_EmpreendimentoVillaDoratta_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_114.addFeatures(features_EmpreendimentoVillaDoratta_114);
var lyr_EmpreendimentoVillaDoratta_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_114, 
                style: style_EmpreendimentoVillaDoratta_114,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_7.png" /> VIELA<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_114_8.png" /> APP<br />' });
var format_EmpreendimentoVillaDoratta_115 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_115 = format_EmpreendimentoVillaDoratta_115.readFeatures(json_EmpreendimentoVillaDoratta_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_115.addFeatures(features_EmpreendimentoVillaDoratta_115);
var lyr_EmpreendimentoVillaDoratta_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_115, 
                style: style_EmpreendimentoVillaDoratta_115,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_115.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoInfratcnica_116 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratcnica_116 = format_EmpreendimentoInfratcnica_116.readFeatures(json_EmpreendimentoInfratcnica_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratcnica_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratcnica_116.addFeatures(features_EmpreendimentoInfratcnica_116);
var lyr_EmpreendimentoInfratcnica_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratcnica_116, 
                style: style_EmpreendimentoInfratcnica_116,
                popuplayertitle: 'Empreendimento Infratécnica',
                interactive: true,
    title: 'Empreendimento Infratécnica<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_116_5.png" /> RUAS<br />' });
var format_EmpreendimentoInfratcnica_117 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratcnica_117 = format_EmpreendimentoInfratcnica_117.readFeatures(json_EmpreendimentoInfratcnica_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratcnica_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratcnica_117.addFeatures(features_EmpreendimentoInfratcnica_117);
var lyr_EmpreendimentoInfratcnica_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratcnica_117, 
                style: style_EmpreendimentoInfratcnica_117,
                popuplayertitle: 'Empreendimento Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoInfratcnica_117.png" /> Empreendimento Infratécnica'
            });
var format_EmpreendimentoSoCarlosII_118 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_118 = format_EmpreendimentoSoCarlosII_118.readFeatures(json_EmpreendimentoSoCarlosII_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_118.addFeatures(features_EmpreendimentoSoCarlosII_118);
var lyr_EmpreendimentoSoCarlosII_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_118, 
                style: style_EmpreendimentoSoCarlosII_118,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_0.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_118_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_119 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_119 = format_EmpreendimentoSoCarlosII_119.readFeatures(json_EmpreendimentoSoCarlosII_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_119.addFeatures(features_EmpreendimentoSoCarlosII_119);
var lyr_EmpreendimentoSoCarlosII_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_119, 
                style: style_EmpreendimentoSoCarlosII_119,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_119.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_120 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_120 = format_EmpreendimentoParqueFlora_120.readFeatures(json_EmpreendimentoParqueFlora_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_120.addFeatures(features_EmpreendimentoParqueFlora_120);
var lyr_EmpreendimentoParqueFlora_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_120, 
                style: style_EmpreendimentoParqueFlora_120,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_120_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_121 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_121 = format_EmpreendimentoParqueFlora_121.readFeatures(json_EmpreendimentoParqueFlora_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_121.addFeatures(features_EmpreendimentoParqueFlora_121);
var lyr_EmpreendimentoParqueFlora_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_121, 
                style: style_EmpreendimentoParqueFlora_121,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_121.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_122 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_122 = format_EmpreendimentoVittaSoVicente_122.readFeatures(json_EmpreendimentoVittaSoVicente_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_122.addFeatures(features_EmpreendimentoVittaSoVicente_122);
var lyr_EmpreendimentoVittaSoVicente_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_122, 
                style: style_EmpreendimentoVittaSoVicente_122,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_122_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_123 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_123 = format_EmpreendimentoVittaSoVicente_123.readFeatures(json_EmpreendimentoVittaSoVicente_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_123.addFeatures(features_EmpreendimentoVittaSoVicente_123);
var lyr_EmpreendimentoVittaSoVicente_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_123, 
                style: style_EmpreendimentoVittaSoVicente_123,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_123.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_124 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_124 = format_EmpreendimentoRecantoMeneghetti_124.readFeatures(json_EmpreendimentoRecantoMeneghetti_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_124.addFeatures(features_EmpreendimentoRecantoMeneghetti_124);
var lyr_EmpreendimentoRecantoMeneghetti_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_124, 
                style: style_EmpreendimentoRecantoMeneghetti_124,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_3.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_124_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_125 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_125 = format_EmpreendimentoRecantoMeneghetti_125.readFeatures(json_EmpreendimentoRecantoMeneghetti_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_125.addFeatures(features_EmpreendimentoRecantoMeneghetti_125);
var lyr_EmpreendimentoRecantoMeneghetti_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_125, 
                style: style_EmpreendimentoRecantoMeneghetti_125,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_125.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_126 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_126 = format_EmpreendimentoParquedosSabias_126.readFeatures(json_EmpreendimentoParquedosSabias_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_126.addFeatures(features_EmpreendimentoParquedosSabias_126);
var lyr_EmpreendimentoParquedosSabias_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_126, 
                style: style_EmpreendimentoParquedosSabias_126,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_126_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_127 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_127 = format_EmpreendimentoParquedosSabias_127.readFeatures(json_EmpreendimentoParquedosSabias_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_127.addFeatures(features_EmpreendimentoParquedosSabias_127);
var lyr_EmpreendimentoParquedosSabias_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_127, 
                style: style_EmpreendimentoParquedosSabias_127,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_127.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_128 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_128 = format_EmpreendimentoMoradadaMata_128.readFeatures(json_EmpreendimentoMoradadaMata_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_128.addFeatures(features_EmpreendimentoMoradadaMata_128);
var lyr_EmpreendimentoMoradadaMata_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_128, 
                style: style_EmpreendimentoMoradadaMata_128,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_2.png" /> ÁREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_128_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_129 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_129 = format_EmpreendimentoMoradadaMata_129.readFeatures(json_EmpreendimentoMoradadaMata_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_129.addFeatures(features_EmpreendimentoMoradadaMata_129);
var lyr_EmpreendimentoMoradadaMata_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_129, 
                style: style_EmpreendimentoMoradadaMata_129,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_129.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_130 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_130 = format_EmpreendimentoIrineuZanetiII_130.readFeatures(json_EmpreendimentoIrineuZanetiII_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_130.addFeatures(features_EmpreendimentoIrineuZanetiII_130);
var lyr_EmpreendimentoIrineuZanetiII_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_130, 
                style: style_EmpreendimentoIrineuZanetiII_130,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_130_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_131 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_131 = format_EmpreendimentoIrineuZanetiII_131.readFeatures(json_EmpreendimentoIrineuZanetiII_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_131.addFeatures(features_EmpreendimentoIrineuZanetiII_131);
var lyr_EmpreendimentoIrineuZanetiII_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_131, 
                style: style_EmpreendimentoIrineuZanetiII_131,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_131.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoAdonis_132 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_132 = format_EmpreendimentoAdonis_132.readFeatures(json_EmpreendimentoAdonis_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_132.addFeatures(features_EmpreendimentoAdonis_132);
var lyr_EmpreendimentoAdonis_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_132, 
                style: style_EmpreendimentoAdonis_132,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_132_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_133 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_133 = format_EmpreendimentoAdonis_133.readFeatures(json_EmpreendimentoAdonis_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_133.addFeatures(features_EmpreendimentoAdonis_133);
var lyr_EmpreendimentoAdonis_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_133, 
                style: style_EmpreendimentoAdonis_133,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_133.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_134 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_134 = format_EmpreendimentoResidencialMarianaAlarcon_134.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_134.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_134);
var lyr_EmpreendimentoResidencialMarianaAlarcon_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_134, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_134,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_4.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_134_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_135 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_135 = format_EmpreendimentoResidencialMarianaAlarcon_135.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_135.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_135);
var lyr_EmpreendimentoResidencialMarianaAlarcon_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_135, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_135,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_135.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialJabuticabeiras_136 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_136 = format_EmpreendimentoResidencialJabuticabeiras_136.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_136.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_136);
var lyr_EmpreendimentoResidencialJabuticabeiras_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_136, 
                style: style_EmpreendimentoResidencialJabuticabeiras_136,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_136_6.png" /> VIELA<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_137 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_137 = format_EmpreendimentoResidencialJabuticabeiras_137.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_137.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_137);
var lyr_EmpreendimentoResidencialJabuticabeiras_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_137, 
                style: style_EmpreendimentoResidencialJabuticabeiras_137,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_137.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialCintraAlves_138 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_138 = format_EmpreendimentoResidencialCintraAlves_138.readFeatures(json_EmpreendimentoResidencialCintraAlves_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_138.addFeatures(features_EmpreendimentoResidencialCintraAlves_138);
var lyr_EmpreendimentoResidencialCintraAlves_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_138, 
                style: style_EmpreendimentoResidencialCintraAlves_138,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_138_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_139 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_139 = format_EmpreendimentoResidencialCintraAlves_139.readFeatures(json_EmpreendimentoResidencialCintraAlves_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_139.addFeatures(features_EmpreendimentoResidencialCintraAlves_139);
var lyr_EmpreendimentoResidencialCintraAlves_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_139, 
                style: style_EmpreendimentoResidencialCintraAlves_139,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_139.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_140 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_140 = format_EmpreendimentoLoteamentolamo_140.readFeatures(json_EmpreendimentoLoteamentolamo_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_140.addFeatures(features_EmpreendimentoLoteamentolamo_140);
var lyr_EmpreendimentoLoteamentolamo_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_140, 
                style: style_EmpreendimentoLoteamentolamo_140,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_8.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_9.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_140_10.png" /> VIELA<br />' });
var format_EmpreendimentoLoteamentolamo_141 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_141 = format_EmpreendimentoLoteamentolamo_141.readFeatures(json_EmpreendimentoLoteamentolamo_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_141.addFeatures(features_EmpreendimentoLoteamentolamo_141);
var lyr_EmpreendimentoLoteamentolamo_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_141, 
                style: style_EmpreendimentoLoteamentolamo_141,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_141.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_142 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_142 = format_EmpreendimentoSantaLina_142.readFeatures(json_EmpreendimentoSantaLina_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_142.addFeatures(features_EmpreendimentoSantaLina_142);
var lyr_EmpreendimentoSantaLina_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_142, 
                style: style_EmpreendimentoSantaLina_142,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_142_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_142_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_143 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_143 = format_EmpreendimentoSantaLina_143.readFeatures(json_EmpreendimentoSantaLina_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_143.addFeatures(features_EmpreendimentoSantaLina_143);
var lyr_EmpreendimentoSantaLina_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_143, 
                style: style_EmpreendimentoSantaLina_143,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_143.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegreII_144 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_144 = format_EmpreendimentoResidencialPousoAlegreII_144.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_144.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_144);
var lyr_EmpreendimentoResidencialPousoAlegreII_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_144, 
                style: style_EmpreendimentoResidencialPousoAlegreII_144,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre II<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_144_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoResidencialPousoAlegreII_145 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_145 = format_EmpreendimentoResidencialPousoAlegreII_145.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_145.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_145);
var lyr_EmpreendimentoResidencialPousoAlegreII_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_145, 
                style: style_EmpreendimentoResidencialPousoAlegreII_145,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_145.png" /> Empreendimento Residencial Pouso Alegre II'
            });
var format_EmpreendimentoResidencialPousoAlegre_146 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_146 = format_EmpreendimentoResidencialPousoAlegre_146.readFeatures(json_EmpreendimentoResidencialPousoAlegre_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_146.addFeatures(features_EmpreendimentoResidencialPousoAlegre_146);
var lyr_EmpreendimentoResidencialPousoAlegre_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_146, 
                style: style_EmpreendimentoResidencialPousoAlegre_146,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_146_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_147 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_147 = format_EmpreendimentoResidencialPousoAlegre_147.readFeatures(json_EmpreendimentoResidencialPousoAlegre_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_147.addFeatures(features_EmpreendimentoResidencialPousoAlegre_147);
var lyr_EmpreendimentoResidencialPousoAlegre_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_147, 
                style: style_EmpreendimentoResidencialPousoAlegre_147,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_147.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_148 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_148 = format_EmpreendimentoResidencialAltodaFazenda_148.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_148.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_148);
var lyr_EmpreendimentoResidencialAltodaFazenda_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_148, 
                style: style_EmpreendimentoResidencialAltodaFazenda_148,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_148_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_148_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_148_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_148_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_148_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_149 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_149 = format_EmpreendimentoResidencialAltodaFazenda_149.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_149.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_149);
var lyr_EmpreendimentoResidencialAltodaFazenda_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_149, 
                style: style_EmpreendimentoResidencialAltodaFazenda_149,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_149.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_150 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_150 = format_EmpreendimentoResidencialMarioTasso_150.readFeatures(json_EmpreendimentoResidencialMarioTasso_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_150.addFeatures(features_EmpreendimentoResidencialMarioTasso_150);
var lyr_EmpreendimentoResidencialMarioTasso_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_150, 
                style: style_EmpreendimentoResidencialMarioTasso_150,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_150_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_150_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_150_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_150_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_150_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_151 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_151 = format_EmpreendimentoResidencialMarioTasso_151.readFeatures(json_EmpreendimentoResidencialMarioTasso_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_151.addFeatures(features_EmpreendimentoResidencialMarioTasso_151);
var lyr_EmpreendimentoResidencialMarioTasso_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_151, 
                style: style_EmpreendimentoResidencialMarioTasso_151,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_151.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoVivenna_152 = new ol.format.GeoJSON();
var features_EmpreendimentoVivenna_152 = format_EmpreendimentoVivenna_152.readFeatures(json_EmpreendimentoVivenna_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVivenna_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVivenna_152.addFeatures(features_EmpreendimentoVivenna_152);
var lyr_EmpreendimentoVivenna_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVivenna_152, 
                style: style_EmpreendimentoVivenna_152,
                popuplayertitle: 'Empreendimento Vivenna',
                interactive: true,
    title: 'Empreendimento Vivenna<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_152_7.png" /> VIELA<br />' });
var format_EmpreendimentoVivenna_153 = new ol.format.GeoJSON();
var features_EmpreendimentoVivenna_153 = format_EmpreendimentoVivenna_153.readFeatures(json_EmpreendimentoVivenna_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVivenna_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVivenna_153.addFeatures(features_EmpreendimentoVivenna_153);
var lyr_EmpreendimentoVivenna_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVivenna_153, 
                style: style_EmpreendimentoVivenna_153,
                popuplayertitle: 'Empreendimento Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVivenna_153.png" /> Empreendimento Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_154 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_154 = format_EmpreendimentoAbuDhabiParadiseResortResidence_154.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_154.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_154);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_154, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_154,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_154_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_155 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_155 = format_EmpreendimentoAbuDhabiParadiseResortResidence_155.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_155.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_155);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_155, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_155,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_155.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_156 = new ol.format.GeoJSON();
var features_EmprendimentoElias_156 = format_EmprendimentoElias_156.readFeatures(json_EmprendimentoElias_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_156.addFeatures(features_EmprendimentoElias_156);
var lyr_EmprendimentoElias_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_156, 
                style: style_EmprendimentoElias_156,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_156_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_156_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_156_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_156_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_156_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_156_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_156_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_157 = new ol.format.GeoJSON();
var features_EmprendimentoElias_157 = format_EmprendimentoElias_157.readFeatures(json_EmprendimentoElias_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_157.addFeatures(features_EmprendimentoElias_157);
var lyr_EmprendimentoElias_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_157, 
                style: style_EmprendimentoElias_157,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_157.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_158 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_158 = format_EmpreendimentoResidencialSoCarlosI_158.readFeatures(json_EmpreendimentoResidencialSoCarlosI_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_158.addFeatures(features_EmpreendimentoResidencialSoCarlosI_158);
var lyr_EmpreendimentoResidencialSoCarlosI_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_158, 
                style: style_EmpreendimentoResidencialSoCarlosI_158,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_158_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_158_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_158_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_158_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_158_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_159 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_159 = format_EmpreendimentoResidencialSoCarlosI_159.readFeatures(json_EmpreendimentoResidencialSoCarlosI_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_159.addFeatures(features_EmpreendimentoResidencialSoCarlosI_159);
var lyr_EmpreendimentoResidencialSoCarlosI_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_159, 
                style: style_EmpreendimentoResidencialSoCarlosI_159,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_159.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_160 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_160 = format_EmpreendimentoMonti_160.readFeatures(json_EmpreendimentoMonti_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_160.addFeatures(features_EmpreendimentoMonti_160);
var lyr_EmpreendimentoMonti_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_160, 
                style: style_EmpreendimentoMonti_160,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_160_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_161 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_161 = format_EmpreendimentoMonti_161.readFeatures(json_EmpreendimentoMonti_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_161.addFeatures(features_EmpreendimentoMonti_161);
var lyr_EmpreendimentoMonti_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_161, 
                style: style_EmpreendimentoMonti_161,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_161.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_162 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_162 = format_EmpreendimentoResidencialMoradadoBosque_162.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_162.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_162);
var lyr_EmpreendimentoResidencialMoradadoBosque_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_162, 
                style: style_EmpreendimentoResidencialMoradadoBosque_162,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_162_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_163 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_163 = format_EmpreendimentoResidencialMoradadoBosque_163.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_163.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_163);
var lyr_EmpreendimentoResidencialMoradadoBosque_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_163, 
                style: style_EmpreendimentoResidencialMoradadoBosque_163,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_163.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_164 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_164 = format_EmpreendimentoVittaAlvorada_164.readFeatures(json_EmpreendimentoVittaAlvorada_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_164.addFeatures(features_EmpreendimentoVittaAlvorada_164);
var lyr_EmpreendimentoVittaAlvorada_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_164, 
                style: style_EmpreendimentoVittaAlvorada_164,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_164_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_165 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_165 = format_EmpreendimentoVittaAlvorada_165.readFeatures(json_EmpreendimentoVittaAlvorada_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_165.addFeatures(features_EmpreendimentoVittaAlvorada_165);
var lyr_EmpreendimentoVittaAlvorada_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_165, 
                style: style_EmpreendimentoVittaAlvorada_165,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_165.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_166 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_166 = format_EmpreendimentoResidencialMarthaHelena_166.readFeatures(json_EmpreendimentoResidencialMarthaHelena_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_166.addFeatures(features_EmpreendimentoResidencialMarthaHelena_166);
var lyr_EmpreendimentoResidencialMarthaHelena_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_166, 
                style: style_EmpreendimentoResidencialMarthaHelena_166,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_166_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_166_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_167 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_167 = format_EmpreendimentoResidencialMarthaHelena_167.readFeatures(json_EmpreendimentoResidencialMarthaHelena_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_167.addFeatures(features_EmpreendimentoResidencialMarthaHelena_167);
var lyr_EmpreendimentoResidencialMarthaHelena_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_167, 
                style: style_EmpreendimentoResidencialMarthaHelena_167,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_167.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_168 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_168 = format_EmpreendimentoResidencialYasminTorres_168.readFeatures(json_EmpreendimentoResidencialYasminTorres_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_168.addFeatures(features_EmpreendimentoResidencialYasminTorres_168);
var lyr_EmpreendimentoResidencialYasminTorres_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_168, 
                style: style_EmpreendimentoResidencialYasminTorres_168,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_168.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_169 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_169 = format_EmpreendimentoResidencialYasminTorres_169.readFeatures(json_EmpreendimentoResidencialYasminTorres_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_169.addFeatures(features_EmpreendimentoResidencialYasminTorres_169);
var lyr_EmpreendimentoResidencialYasminTorres_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_169, 
                style: style_EmpreendimentoResidencialYasminTorres_169,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_169.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_170 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_170 = format_EmpreendimentoPalmeiraReal_170.readFeatures(json_EmpreendimentoPalmeiraReal_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_170.addFeatures(features_EmpreendimentoPalmeiraReal_170);
var lyr_EmpreendimentoPalmeiraReal_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_170, 
                style: style_EmpreendimentoPalmeiraReal_170,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_170_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_171 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_171 = format_EmpreendimentoPalmeiraReal_171.readFeatures(json_EmpreendimentoPalmeiraReal_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_171.addFeatures(features_EmpreendimentoPalmeiraReal_171);
var lyr_EmpreendimentoPalmeiraReal_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_171, 
                style: style_EmpreendimentoPalmeiraReal_171,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_171.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_172 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_172 = format_EmpreendimentoEssence_172.readFeatures(json_EmpreendimentoEssence_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_172.addFeatures(features_EmpreendimentoEssence_172);
var lyr_EmpreendimentoEssence_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_172, 
                style: style_EmpreendimentoEssence_172,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_172.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_173 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_173 = format_EmpreendimentoEssence_173.readFeatures(json_EmpreendimentoEssence_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_173.addFeatures(features_EmpreendimentoEssence_173);
var lyr_EmpreendimentoEssence_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_173, 
                style: style_EmpreendimentoEssence_173,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_173.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_174 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_174 = format_EmpreendimentoVersalhes_174.readFeatures(json_EmpreendimentoVersalhes_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_174.addFeatures(features_EmpreendimentoVersalhes_174);
var lyr_EmpreendimentoVersalhes_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_174, 
                style: style_EmpreendimentoVersalhes_174,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_174_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_175 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_175 = format_EmpreendimentoVersalhes_175.readFeatures(json_EmpreendimentoVersalhes_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_175.addFeatures(features_EmpreendimentoVersalhes_175);
var lyr_EmpreendimentoVersalhes_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_175, 
                style: style_EmpreendimentoVersalhes_175,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_175.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_176 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_176 = format_EmpreendimentoSonetto_176.readFeatures(json_EmpreendimentoSonetto_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_176.addFeatures(features_EmpreendimentoSonetto_176);
var lyr_EmpreendimentoSonetto_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_176, 
                style: style_EmpreendimentoSonetto_176,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_176.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_177 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_177 = format_EmpreendimentoSonetto_177.readFeatures(json_EmpreendimentoSonetto_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_177.addFeatures(features_EmpreendimentoSonetto_177);
var lyr_EmpreendimentoSonetto_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_177, 
                style: style_EmpreendimentoSonetto_177,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_177.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_178 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_178 = format_EmpreendimentoResidencialSantaIns_178.readFeatures(json_EmpreendimentoResidencialSantaIns_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_178.addFeatures(features_EmpreendimentoResidencialSantaIns_178);
var lyr_EmpreendimentoResidencialSantaIns_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_178, 
                style: style_EmpreendimentoResidencialSantaIns_178,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_178_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_179 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_179 = format_EmpreendimentoResidencialSantaIns_179.readFeatures(json_EmpreendimentoResidencialSantaIns_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_179.addFeatures(features_EmpreendimentoResidencialSantaIns_179);
var lyr_EmpreendimentoResidencialSantaIns_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_179, 
                style: style_EmpreendimentoResidencialSantaIns_179,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_179.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_180 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_180 = format_EmpreendimentoEdifcioSolNascente_180.readFeatures(json_EmpreendimentoEdifcioSolNascente_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_180.addFeatures(features_EmpreendimentoEdifcioSolNascente_180);
var lyr_EmpreendimentoEdifcioSolNascente_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_180, 
                style: style_EmpreendimentoEdifcioSolNascente_180,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_180.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_181 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_181 = format_EmpreendimentoEdifcioSolNascente_181.readFeatures(json_EmpreendimentoEdifcioSolNascente_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_181.addFeatures(features_EmpreendimentoEdifcioSolNascente_181);
var lyr_EmpreendimentoEdifcioSolNascente_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_181, 
                style: style_EmpreendimentoEdifcioSolNascente_181,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_181.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_182 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_182 = format_EmpreendimentoResidencialQuintadosOitis_182.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_182.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_182);
var lyr_EmpreendimentoResidencialQuintadosOitis_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_182, 
                style: style_EmpreendimentoResidencialQuintadosOitis_182,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_182_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_183 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_183 = format_EmpreendimentoResidencialQuintadosOitis_183.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_183.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_183);
var lyr_EmpreendimentoResidencialQuintadosOitis_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_183, 
                style: style_EmpreendimentoResidencialQuintadosOitis_183,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_183.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_184 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_184 = format_EmpreendimentoResidencialQuintadoSol_184.readFeatures(json_EmpreendimentoResidencialQuintadoSol_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_184.addFeatures(features_EmpreendimentoResidencialQuintadoSol_184);
var lyr_EmpreendimentoResidencialQuintadoSol_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_184, 
                style: style_EmpreendimentoResidencialQuintadoSol_184,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_184_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialQuintadoSol_185 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_185 = format_EmpreendimentoResidencialQuintadoSol_185.readFeatures(json_EmpreendimentoResidencialQuintadoSol_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_185.addFeatures(features_EmpreendimentoResidencialQuintadoSol_185);
var lyr_EmpreendimentoResidencialQuintadoSol_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_185, 
                style: style_EmpreendimentoResidencialQuintadoSol_185,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_185.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoParquePalmeiraImperial_186 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_186 = format_EmpreendimentoParquePalmeiraImperial_186.readFeatures(json_EmpreendimentoParquePalmeiraImperial_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_186.addFeatures(features_EmpreendimentoParquePalmeiraImperial_186);
var lyr_EmpreendimentoParquePalmeiraImperial_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_186, 
                style: style_EmpreendimentoParquePalmeiraImperial_186,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_5.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_186_7.png" /> RUAS<br />' });
var format_EmpreendimentoParquePalmeiraImperial_187 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_187 = format_EmpreendimentoParquePalmeiraImperial_187.readFeatures(json_EmpreendimentoParquePalmeiraImperial_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_187.addFeatures(features_EmpreendimentoParquePalmeiraImperial_187);
var lyr_EmpreendimentoParquePalmeiraImperial_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_187, 
                style: style_EmpreendimentoParquePalmeiraImperial_187,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_187.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_188 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_188 = format_EmpreendimentoBordadaMata_188.readFeatures(json_EmpreendimentoBordadaMata_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_188.addFeatures(features_EmpreendimentoBordadaMata_188);
var lyr_EmpreendimentoBordadaMata_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_188, 
                style: style_EmpreendimentoBordadaMata_188,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_188_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_189 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_189 = format_EmpreendimentoBordadaMata_189.readFeatures(json_EmpreendimentoBordadaMata_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_189.addFeatures(features_EmpreendimentoBordadaMata_189);
var lyr_EmpreendimentoBordadaMata_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_189, 
                style: style_EmpreendimentoBordadaMata_189,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_189.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoEdifcioResidencialHope_190 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_190 = format_EmpreendimentoEdifcioResidencialHope_190.readFeatures(json_EmpreendimentoEdifcioResidencialHope_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_190.addFeatures(features_EmpreendimentoEdifcioResidencialHope_190);
var lyr_EmpreendimentoEdifcioResidencialHope_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_190, 
                style: style_EmpreendimentoEdifcioResidencialHope_190,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_190.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_191 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_191 = format_EmpreendimentoEdifcioResidencialHope_191.readFeatures(json_EmpreendimentoEdifcioResidencialHope_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_191.addFeatures(features_EmpreendimentoEdifcioResidencialHope_191);
var lyr_EmpreendimentoEdifcioResidencialHope_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_191, 
                style: style_EmpreendimentoEdifcioResidencialHope_191,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_191.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_192 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_192 = format_EmpreendimentoHorizResidence_192.readFeatures(json_EmpreendimentoHorizResidence_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_192.addFeatures(features_EmpreendimentoHorizResidence_192);
var lyr_EmpreendimentoHorizResidence_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_192, 
                style: style_EmpreendimentoHorizResidence_192,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_192.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_193 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_193 = format_EmpreendimentoHorizResidence_193.readFeatures(json_EmpreendimentoHorizResidence_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_193.addFeatures(features_EmpreendimentoHorizResidence_193);
var lyr_EmpreendimentoHorizResidence_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_193, 
                style: style_EmpreendimentoHorizResidence_193,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_193.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_194 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_194 = format_EmpreendimentoJardimFlora_194.readFeatures(json_EmpreendimentoJardimFlora_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_194.addFeatures(features_EmpreendimentoJardimFlora_194);
var lyr_EmpreendimentoJardimFlora_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_194, 
                style: style_EmpreendimentoJardimFlora_194,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_7.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_194_8.png" /> RUAS<br />' });
var format_EmpreendimentoJardimFlora_195 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_195 = format_EmpreendimentoJardimFlora_195.readFeatures(json_EmpreendimentoJardimFlora_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_195.addFeatures(features_EmpreendimentoJardimFlora_195);
var lyr_EmpreendimentoJardimFlora_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_195, 
                style: style_EmpreendimentoJardimFlora_195,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_195.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_196 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_196 = format_EmpreendimentoJardimHorizonte_196.readFeatures(json_EmpreendimentoJardimHorizonte_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_196.addFeatures(features_EmpreendimentoJardimHorizonte_196);
var lyr_EmpreendimentoJardimHorizonte_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_196, 
                style: style_EmpreendimentoJardimHorizonte_196,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_196_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_197 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_197 = format_EmpreendimentoJardimHorizonte_197.readFeatures(json_EmpreendimentoJardimHorizonte_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_197.addFeatures(features_EmpreendimentoJardimHorizonte_197);
var lyr_EmpreendimentoJardimHorizonte_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_197, 
                style: style_EmpreendimentoJardimHorizonte_197,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_197.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_198 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_198 = format_EmpreendimentoJardimMariaLuiza_198.readFeatures(json_EmpreendimentoJardimMariaLuiza_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_198.addFeatures(features_EmpreendimentoJardimMariaLuiza_198);
var lyr_EmpreendimentoJardimMariaLuiza_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_198, 
                style: style_EmpreendimentoJardimMariaLuiza_198,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_198_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_198_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_198_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_198_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_198_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_199 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_199 = format_EmpreendimentoJardimMariaLuiza_199.readFeatures(json_EmpreendimentoJardimMariaLuiza_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_199.addFeatures(features_EmpreendimentoJardimMariaLuiza_199);
var lyr_EmpreendimentoJardimMariaLuiza_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_199, 
                style: style_EmpreendimentoJardimMariaLuiza_199,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_199.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_200 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_200 = format_EmpreendimentoMontBlancResidence_200.readFeatures(json_EmpreendimentoMontBlancResidence_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_200.addFeatures(features_EmpreendimentoMontBlancResidence_200);
var lyr_EmpreendimentoMontBlancResidence_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_200, 
                style: style_EmpreendimentoMontBlancResidence_200,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_200.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_201 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_201 = format_EmpreendimentoMontBlancResidence_201.readFeatures(json_EmpreendimentoMontBlancResidence_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_201.addFeatures(features_EmpreendimentoMontBlancResidence_201);
var lyr_EmpreendimentoMontBlancResidence_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_201, 
                style: style_EmpreendimentoMontBlancResidence_201,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_201.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_202 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_202 = format_EmpreendimentoMoradadoVerdeII_202.readFeatures(json_EmpreendimentoMoradadoVerdeII_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_202.addFeatures(features_EmpreendimentoMoradadoVerdeII_202);
var lyr_EmpreendimentoMoradadoVerdeII_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_202, 
                style: style_EmpreendimentoMoradadoVerdeII_202,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_202_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_203 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_203 = format_EmpreendimentoMoradadoVerdeII_203.readFeatures(json_EmpreendimentoMoradadoVerdeII_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_203.addFeatures(features_EmpreendimentoMoradadoVerdeII_203);
var lyr_EmpreendimentoMoradadoVerdeII_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_203, 
                style: style_EmpreendimentoMoradadoVerdeII_203,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_203.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoParagonII_204 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_204 = format_EmpreendimentoParagonII_204.readFeatures(json_EmpreendimentoParagonII_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_204.addFeatures(features_EmpreendimentoParagonII_204);
var lyr_EmpreendimentoParagonII_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_204, 
                style: style_EmpreendimentoParagonII_204,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
    title: 'Empreendimento Paragon II<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParagonII_204_5.png" /> RUAS<br />' });
var format_EmpreendimentoParagonII_205 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_205 = format_EmpreendimentoParagonII_205.readFeatures(json_EmpreendimentoParagonII_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_205.addFeatures(features_EmpreendimentoParagonII_205);
var lyr_EmpreendimentoParagonII_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_205, 
                style: style_EmpreendimentoParagonII_205,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagonII_205.png" /> Empreendimento Paragon II'
            });
var format_EmpreendimentoParagon_206 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_206 = format_EmpreendimentoParagon_206.readFeatures(json_EmpreendimentoParagon_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_206.addFeatures(features_EmpreendimentoParagon_206);
var lyr_EmpreendimentoParagon_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_206, 
                style: style_EmpreendimentoParagon_206,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_206_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_207 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_207 = format_EmpreendimentoParagon_207.readFeatures(json_EmpreendimentoParagon_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_207.addFeatures(features_EmpreendimentoParagon_207);
var lyr_EmpreendimentoParagon_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_207, 
                style: style_EmpreendimentoParagon_207,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_207.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_208 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_208 = format_EmpreendimentoParqueVillaLobos_208.readFeatures(json_EmpreendimentoParqueVillaLobos_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_208.addFeatures(features_EmpreendimentoParqueVillaLobos_208);
var lyr_EmpreendimentoParqueVillaLobos_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_208, 
                style: style_EmpreendimentoParqueVillaLobos_208,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_208_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_209 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_209 = format_EmpreendimentoParqueVillaLobos_209.readFeatures(json_EmpreendimentoParqueVillaLobos_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_209.addFeatures(features_EmpreendimentoParqueVillaLobos_209);
var lyr_EmpreendimentoParqueVillaLobos_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_209, 
                style: style_EmpreendimentoParqueVillaLobos_209,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_209.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_210 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_210 = format_EmpreendimentoDaVinci_210.readFeatures(json_EmpreendimentoDaVinci_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_210.addFeatures(features_EmpreendimentoDaVinci_210);
var lyr_EmpreendimentoDaVinci_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_210, 
                style: style_EmpreendimentoDaVinci_210,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_210.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_211 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_211 = format_EmpreendimentoDaVinci_211.readFeatures(json_EmpreendimentoDaVinci_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_211.addFeatures(features_EmpreendimentoDaVinci_211);
var lyr_EmpreendimentoDaVinci_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_211, 
                style: style_EmpreendimentoDaVinci_211,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_211.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_212 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_212 = format_EmpreendimentoResidencialDomingosJardini_212.readFeatures(json_EmpreendimentoResidencialDomingosJardini_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_212.addFeatures(features_EmpreendimentoResidencialDomingosJardini_212);
var lyr_EmpreendimentoResidencialDomingosJardini_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_212, 
                style: style_EmpreendimentoResidencialDomingosJardini_212,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_212_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_213 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_213 = format_EmpreendimentoResidencialDomingosJardini_213.readFeatures(json_EmpreendimentoResidencialDomingosJardini_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_213.addFeatures(features_EmpreendimentoResidencialDomingosJardini_213);
var lyr_EmpreendimentoResidencialDomingosJardini_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_213, 
                style: style_EmpreendimentoResidencialDomingosJardini_213,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_213.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_214 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_214 = format_EmpreendimentoResidencialSantaF_214.readFeatures(json_EmpreendimentoResidencialSantaF_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_214.addFeatures(features_EmpreendimentoResidencialSantaF_214);
var lyr_EmpreendimentoResidencialSantaF_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_214, 
                style: style_EmpreendimentoResidencialSantaF_214,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_214_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_215 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_215 = format_EmpreendimentoResidencialSantaF_215.readFeatures(json_EmpreendimentoResidencialSantaF_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_215.addFeatures(features_EmpreendimentoResidencialSantaF_215);
var lyr_EmpreendimentoResidencialSantaF_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_215, 
                style: style_EmpreendimentoResidencialSantaF_215,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_215.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_216 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_216 = format_EmpreendimentoEdifcioRuadoSol_216.readFeatures(json_EmpreendimentoEdifcioRuadoSol_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_216.addFeatures(features_EmpreendimentoEdifcioRuadoSol_216);
var lyr_EmpreendimentoEdifcioRuadoSol_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_216, 
                style: style_EmpreendimentoEdifcioRuadoSol_216,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_216.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_217 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_217 = format_EmpreendimentoEdifcioRuadoSol_217.readFeatures(json_EmpreendimentoEdifcioRuadoSol_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_217.addFeatures(features_EmpreendimentoEdifcioRuadoSol_217);
var lyr_EmpreendimentoEdifcioRuadoSol_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_217, 
                style: style_EmpreendimentoEdifcioRuadoSol_217,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_217.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_218 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_218 = format_EmpreendimentoTorontoResidence_218.readFeatures(json_EmpreendimentoTorontoResidence_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_218.addFeatures(features_EmpreendimentoTorontoResidence_218);
var lyr_EmpreendimentoTorontoResidence_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_218, 
                style: style_EmpreendimentoTorontoResidence_218,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_218_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_219 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_219 = format_EmpreendimentoTorontoResidence_219.readFeatures(json_EmpreendimentoTorontoResidence_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_219.addFeatures(features_EmpreendimentoTorontoResidence_219);
var lyr_EmpreendimentoTorontoResidence_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_219, 
                style: style_EmpreendimentoTorontoResidence_219,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_219.png" /> Empreendimento Toronto Residence'
            });
var format_EmpreendimentoVillaPucci_220 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_220 = format_EmpreendimentoVillaPucci_220.readFeatures(json_EmpreendimentoVillaPucci_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_220.addFeatures(features_EmpreendimentoVillaPucci_220);
var lyr_EmpreendimentoVillaPucci_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_220, 
                style: style_EmpreendimentoVillaPucci_220,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
    title: 'Empreendimento Villa Pucci<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_220_7.png" /> RUAS<br />' });
var format_EmpreendimentoVillaPucci_221 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_221 = format_EmpreendimentoVillaPucci_221.readFeatures(json_EmpreendimentoVillaPucci_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_221.addFeatures(features_EmpreendimentoVillaPucci_221);
var lyr_EmpreendimentoVillaPucci_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_221, 
                style: style_EmpreendimentoVillaPucci_221,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaPucci_221.png" /> Empreendimento Villa Pucci'
            });
var format_EmpreendimentoFerracini_222 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_222 = format_EmpreendimentoFerracini_222.readFeatures(json_EmpreendimentoFerracini_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_222.addFeatures(features_EmpreendimentoFerracini_222);
var lyr_EmpreendimentoFerracini_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_222, 
                style: style_EmpreendimentoFerracini_222,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
    title: 'Empreendimento Ferracini<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_222_7.png" /> VIELA<br />' });
var format_EmpreendimentoFerracini_223 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_223 = format_EmpreendimentoFerracini_223.readFeatures(json_EmpreendimentoFerracini_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_223.addFeatures(features_EmpreendimentoFerracini_223);
var lyr_EmpreendimentoFerracini_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_223, 
                style: style_EmpreendimentoFerracini_223,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFerracini_223.png" /> Empreendimento Ferracini'
            });
var format_EmpreendimentoColorado_224 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_224 = format_EmpreendimentoColorado_224.readFeatures(json_EmpreendimentoColorado_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_224.addFeatures(features_EmpreendimentoColorado_224);
var lyr_EmpreendimentoColorado_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_224, 
                style: style_EmpreendimentoColorado_224,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
    title: 'Empreendimento Colorado<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoColorado_224_6.png" /> RUAS<br />' });
var format_EmpreendimentoColorado_225 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_225 = format_EmpreendimentoColorado_225.readFeatures(json_EmpreendimentoColorado_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_225.addFeatures(features_EmpreendimentoColorado_225);
var lyr_EmpreendimentoColorado_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_225, 
                style: style_EmpreendimentoColorado_225,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoColorado_225.png" /> Empreendimento Colorado'
            });
var format_EmpreendimentoResicencialNairRetuciII_226 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_226 = format_EmpreendimentoResicencialNairRetuciII_226.readFeatures(json_EmpreendimentoResicencialNairRetuciII_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_226.addFeatures(features_EmpreendimentoResicencialNairRetuciII_226);
var lyr_EmpreendimentoResicencialNairRetuciII_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_226, 
                style: style_EmpreendimentoResicencialNairRetuciII_226,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_226_6.png" /> RUAS<br />' });
var format_EmpreendimentoResicencialNairRetuciII_227 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_227 = format_EmpreendimentoResicencialNairRetuciII_227.readFeatures(json_EmpreendimentoResicencialNairRetuciII_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_227.addFeatures(features_EmpreendimentoResicencialNairRetuciII_227);
var lyr_EmpreendimentoResicencialNairRetuciII_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_227, 
                style: style_EmpreendimentoResicencialNairRetuciII_227,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuciII_227.png" /> Empreendimento Resicencial Nair Retuci II'
            });
var format_EmpreendimentoResicencialNairRetuci_228 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_228 = format_EmpreendimentoResicencialNairRetuci_228.readFeatures(json_EmpreendimentoResicencialNairRetuci_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_228.addFeatures(features_EmpreendimentoResicencialNairRetuci_228);
var lyr_EmpreendimentoResicencialNairRetuci_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_228, 
                style: style_EmpreendimentoResicencialNairRetuci_228,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_228_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_229 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_229 = format_EmpreendimentoResicencialNairRetuci_229.readFeatures(json_EmpreendimentoResicencialNairRetuci_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_229.addFeatures(features_EmpreendimentoResicencialNairRetuci_229);
var lyr_EmpreendimentoResicencialNairRetuci_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_229, 
                style: style_EmpreendimentoResicencialNairRetuci_229,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_229.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoCidadeJardim_230 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_230 = format_EmpreendimentoCidadeJardim_230.readFeatures(json_EmpreendimentoCidadeJardim_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_230.addFeatures(features_EmpreendimentoCidadeJardim_230);
var lyr_EmpreendimentoCidadeJardim_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_230, 
                style: style_EmpreendimentoCidadeJardim_230,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_230_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoCidadeJardim_231 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_231 = format_EmpreendimentoCidadeJardim_231.readFeatures(json_EmpreendimentoCidadeJardim_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_231.addFeatures(features_EmpreendimentoCidadeJardim_231);
var lyr_EmpreendimentoCidadeJardim_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_231, 
                style: style_EmpreendimentoCidadeJardim_231,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCidadeJardim_231.png" /> Empreendimento Cidade Jardim'
            });
var format_ServidoRamal138kVFranca4Guanabara_232 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_232 = format_ServidoRamal138kVFranca4Guanabara_232.readFeatures(json_ServidoRamal138kVFranca4Guanabara_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_232.addFeatures(features_ServidoRamal138kVFranca4Guanabara_232);
var lyr_ServidoRamal138kVFranca4Guanabara_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_232, 
                style: style_ServidoRamal138kVFranca4Guanabara_232,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_232.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_233 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_233 = format_ServidoRamal138kVFranca4Guanabara_233.readFeatures(json_ServidoRamal138kVFranca4Guanabara_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_233.addFeatures(features_ServidoRamal138kVFranca4Guanabara_233);
var lyr_ServidoRamal138kVFranca4Guanabara_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_233, 
                style: style_ServidoRamal138kVFranca4Guanabara_233,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_233.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_234 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_234 = format_EmpreendimentosAprovado27unid_234.readFeatures(json_EmpreendimentosAprovado27unid_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_234.addFeatures(features_EmpreendimentosAprovado27unid_234);
var lyr_EmpreendimentosAprovado27unid_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_234, 
                style: style_EmpreendimentosAprovado27unid_234,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_234.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz8unid_235 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz8unid_235 = format_EmpreendimentosDiretriz8unid_235.readFeatures(json_EmpreendimentosDiretriz8unid_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz8unid_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz8unid_235.addFeatures(features_EmpreendimentosDiretriz8unid_235);
var lyr_EmpreendimentosDiretriz8unid_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz8unid_235, 
                style: style_EmpreendimentosDiretriz8unid_235,
                popuplayertitle: 'Empreendimentos  - Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz8unid_235.png" /> Empreendimentos  - Diretriz (8 unid.)'
            });
var format_EmpreendimentosDefinitiva7unid_236 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva7unid_236 = format_EmpreendimentosDefinitiva7unid_236.readFeatures(json_EmpreendimentosDefinitiva7unid_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva7unid_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva7unid_236.addFeatures(features_EmpreendimentosDefinitiva7unid_236);
var lyr_EmpreendimentosDefinitiva7unid_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva7unid_236, 
                style: style_EmpreendimentosDefinitiva7unid_236,
                popuplayertitle: 'Empreendimentos - Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva7unid_236.png" /> Empreendimentos - Definitiva (7 unid.)'
            });
var format_EmpreendimentosPrvia24unid_237 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia24unid_237 = format_EmpreendimentosPrvia24unid_237.readFeatures(json_EmpreendimentosPrvia24unid_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia24unid_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia24unid_237.addFeatures(features_EmpreendimentosPrvia24unid_237);
var lyr_EmpreendimentosPrvia24unid_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia24unid_237, 
                style: style_EmpreendimentosPrvia24unid_237,
                popuplayertitle: 'Empreendimentos - Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia24unid_237.png" /> Empreendimentos - Prévia (24 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_238 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_238 = format_PBZPAEdifcioPrimeHELIPONTO_238.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_238.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_238);
var lyr_PBZPAEdifcioPrimeHELIPONTO_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_238, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_238,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_238.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_239 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_239 = format_PBZPAEdifcioPrimeHELIPONTO_239.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_239.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_239);
var lyr_PBZPAEdifcioPrimeHELIPONTO_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_239, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_239,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_239_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_239_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_240 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_240 = format_PBZPAHospitalHELIPONTO_240.readFeatures(json_PBZPAHospitalHELIPONTO_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_240.addFeatures(features_PBZPAHospitalHELIPONTO_240);
var lyr_PBZPAHospitalHELIPONTO_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_240, 
                style: style_PBZPAHospitalHELIPONTO_240,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_240_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_241_11.png" /> Transição<br />' });
var format_PrprioPblicoMunicipalArena3unid_242 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalArena3unid_242 = format_PrprioPblicoMunicipalArena3unid_242.readFeatures(json_PrprioPblicoMunicipalArena3unid_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalArena3unid_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalArena3unid_242.addFeatures(features_PrprioPblicoMunicipalArena3unid_242);
var lyr_PrprioPblicoMunicipalArena3unid_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalArena3unid_242, 
                style: style_PrprioPblicoMunicipalArena3unid_242,
                popuplayertitle: 'Próprio Público Municipal - Arena (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalArena3unid_242.png" /> Próprio Público Municipal - Arena (3 unid.)'
            });
var format_PrprioPblicoMunicipalBiblioteca1unid_243 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalBiblioteca1unid_243 = format_PrprioPblicoMunicipalBiblioteca1unid_243.readFeatures(json_PrprioPblicoMunicipalBiblioteca1unid_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalBiblioteca1unid_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalBiblioteca1unid_243.addFeatures(features_PrprioPblicoMunicipalBiblioteca1unid_243);
var lyr_PrprioPblicoMunicipalBiblioteca1unid_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalBiblioteca1unid_243, 
                style: style_PrprioPblicoMunicipalBiblioteca1unid_243,
                popuplayertitle: 'Próprio Público Municipal - Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalBiblioteca1unid_243.png" /> Próprio Público Municipal - Biblioteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalCampo18unid_244 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo18unid_244 = format_PrprioPblicoMunicipalCampo18unid_244.readFeatures(json_PrprioPblicoMunicipalCampo18unid_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCampo18unid_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo18unid_244.addFeatures(features_PrprioPblicoMunicipalCampo18unid_244);
var lyr_PrprioPblicoMunicipalCampo18unid_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo18unid_244, 
                style: style_PrprioPblicoMunicipalCampo18unid_244,
                popuplayertitle: 'Próprio Público Municipal - Campo (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo18unid_244.png" /> Próprio Público Municipal - Campo (18 unid.)'
            });
var format_PrprioPblicoMunicipalCasa1unid_245 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCasa1unid_245 = format_PrprioPblicoMunicipalCasa1unid_245.readFeatures(json_PrprioPblicoMunicipalCasa1unid_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCasa1unid_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCasa1unid_245.addFeatures(features_PrprioPblicoMunicipalCasa1unid_245);
var lyr_PrprioPblicoMunicipalCasa1unid_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCasa1unid_245, 
                style: style_PrprioPblicoMunicipalCasa1unid_245,
                popuplayertitle: 'Próprio Público Municipal - Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCasa1unid_245.png" /> Próprio Público Municipal - Casa (1 unid.)'
            });
var format_PrprioPblicoMunicipalCentro4unid_246 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCentro4unid_246 = format_PrprioPblicoMunicipalCentro4unid_246.readFeatures(json_PrprioPblicoMunicipalCentro4unid_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCentro4unid_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCentro4unid_246.addFeatures(features_PrprioPblicoMunicipalCentro4unid_246);
var lyr_PrprioPblicoMunicipalCentro4unid_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCentro4unid_246, 
                style: style_PrprioPblicoMunicipalCentro4unid_246,
                popuplayertitle: 'Próprio Público Municipal - Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCentro4unid_246.png" /> Próprio Público Municipal - Centro (4 unid.)'
            });
var format_PrprioPblicoMunicipalCEPEL12unid_247 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCEPEL12unid_247 = format_PrprioPblicoMunicipalCEPEL12unid_247.readFeatures(json_PrprioPblicoMunicipalCEPEL12unid_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCEPEL12unid_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCEPEL12unid_247.addFeatures(features_PrprioPblicoMunicipalCEPEL12unid_247);
var lyr_PrprioPblicoMunicipalCEPEL12unid_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCEPEL12unid_247, 
                style: style_PrprioPblicoMunicipalCEPEL12unid_247,
                popuplayertitle: 'Próprio Público Municipal - CEPEL (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCEPEL12unid_247.png" /> Próprio Público Municipal - CEPEL (12 unid.)'
            });
var format_PrprioPblicoMunicipalConjunto4unid_248 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalConjunto4unid_248 = format_PrprioPblicoMunicipalConjunto4unid_248.readFeatures(json_PrprioPblicoMunicipalConjunto4unid_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalConjunto4unid_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalConjunto4unid_248.addFeatures(features_PrprioPblicoMunicipalConjunto4unid_248);
var lyr_PrprioPblicoMunicipalConjunto4unid_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalConjunto4unid_248, 
                style: style_PrprioPblicoMunicipalConjunto4unid_248,
                popuplayertitle: 'Próprio Público Municipal - Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalConjunto4unid_248.png" /> Próprio Público Municipal - Conjunto (4 unid.)'
            });
var format_PrprioPblicoMunicipalEstadio1unid_249 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalEstadio1unid_249 = format_PrprioPblicoMunicipalEstadio1unid_249.readFeatures(json_PrprioPblicoMunicipalEstadio1unid_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalEstadio1unid_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalEstadio1unid_249.addFeatures(features_PrprioPblicoMunicipalEstadio1unid_249);
var lyr_PrprioPblicoMunicipalEstadio1unid_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalEstadio1unid_249, 
                style: style_PrprioPblicoMunicipalEstadio1unid_249,
                popuplayertitle: 'Próprio Público Municipal - Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalEstadio1unid_249.png" /> Próprio Público Municipal - Estadio (1 unid.)'
            });
var format_PrprioPblicoMunicipalGinsio5unid_250 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGinsio5unid_250 = format_PrprioPblicoMunicipalGinsio5unid_250.readFeatures(json_PrprioPblicoMunicipalGinsio5unid_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGinsio5unid_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGinsio5unid_250.addFeatures(features_PrprioPblicoMunicipalGinsio5unid_250);
var lyr_PrprioPblicoMunicipalGinsio5unid_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGinsio5unid_250, 
                style: style_PrprioPblicoMunicipalGinsio5unid_250,
                popuplayertitle: 'Próprio Público Municipal - Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGinsio5unid_250.png" /> Próprio Público Municipal - Ginásio (5 unid.)'
            });
var format_PrprioPblicoMunicipalMuseu2unid_251 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalMuseu2unid_251 = format_PrprioPblicoMunicipalMuseu2unid_251.readFeatures(json_PrprioPblicoMunicipalMuseu2unid_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalMuseu2unid_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalMuseu2unid_251.addFeatures(features_PrprioPblicoMunicipalMuseu2unid_251);
var lyr_PrprioPblicoMunicipalMuseu2unid_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalMuseu2unid_251, 
                style: style_PrprioPblicoMunicipalMuseu2unid_251,
                popuplayertitle: 'Próprio Público Municipal - Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalMuseu2unid_251.png" /> Próprio Público Municipal - Museu (2 unid.)'
            });
var format_PrprioPblicoMunicipalParque2unid_252 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalParque2unid_252 = format_PrprioPblicoMunicipalParque2unid_252.readFeatures(json_PrprioPblicoMunicipalParque2unid_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalParque2unid_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalParque2unid_252.addFeatures(features_PrprioPblicoMunicipalParque2unid_252);
var lyr_PrprioPblicoMunicipalParque2unid_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalParque2unid_252, 
                style: style_PrprioPblicoMunicipalParque2unid_252,
                popuplayertitle: 'Próprio Público Municipal - Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalParque2unid_252.png" /> Próprio Público Municipal - Parque (2 unid.)'
            });
var format_PrprioPblicoMunicipalPavilho1unid_253 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPavilho1unid_253 = format_PrprioPblicoMunicipalPavilho1unid_253.readFeatures(json_PrprioPblicoMunicipalPavilho1unid_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPavilho1unid_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPavilho1unid_253.addFeatures(features_PrprioPblicoMunicipalPavilho1unid_253);
var lyr_PrprioPblicoMunicipalPavilho1unid_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPavilho1unid_253, 
                style: style_PrprioPblicoMunicipalPavilho1unid_253,
                popuplayertitle: 'Próprio Público Municipal - Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPavilho1unid_253.png" /> Próprio Público Municipal - Pavilhão (1 unid.)'
            });
var format_PrprioPblicoMunicipalPinacoteca1unid_254 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPinacoteca1unid_254 = format_PrprioPblicoMunicipalPinacoteca1unid_254.readFeatures(json_PrprioPblicoMunicipalPinacoteca1unid_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPinacoteca1unid_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPinacoteca1unid_254.addFeatures(features_PrprioPblicoMunicipalPinacoteca1unid_254);
var lyr_PrprioPblicoMunicipalPinacoteca1unid_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPinacoteca1unid_254, 
                style: style_PrprioPblicoMunicipalPinacoteca1unid_254,
                popuplayertitle: 'Próprio Público Municipal - Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPinacoteca1unid_254.png" /> Próprio Público Municipal - Pinacoteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalPiscina1unid_255 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPiscina1unid_255 = format_PrprioPblicoMunicipalPiscina1unid_255.readFeatures(json_PrprioPblicoMunicipalPiscina1unid_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPiscina1unid_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPiscina1unid_255.addFeatures(features_PrprioPblicoMunicipalPiscina1unid_255);
var lyr_PrprioPblicoMunicipalPiscina1unid_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPiscina1unid_255, 
                style: style_PrprioPblicoMunicipalPiscina1unid_255,
                popuplayertitle: 'Próprio Público Municipal - Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPiscina1unid_255.png" /> Próprio Público Municipal - Piscina (1 unid.)'
            });
var format_PrprioPblicoMunicipalPista1unid_256 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPista1unid_256 = format_PrprioPblicoMunicipalPista1unid_256.readFeatures(json_PrprioPblicoMunicipalPista1unid_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPista1unid_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPista1unid_256.addFeatures(features_PrprioPblicoMunicipalPista1unid_256);
var lyr_PrprioPblicoMunicipalPista1unid_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPista1unid_256, 
                style: style_PrprioPblicoMunicipalPista1unid_256,
                popuplayertitle: 'Próprio Público Municipal - Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPista1unid_256.png" /> Próprio Público Municipal - Pista (1 unid.)'
            });
var format_PrprioPblicoMunicipalPraa3unid_257 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPraa3unid_257 = format_PrprioPblicoMunicipalPraa3unid_257.readFeatures(json_PrprioPblicoMunicipalPraa3unid_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPraa3unid_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPraa3unid_257.addFeatures(features_PrprioPblicoMunicipalPraa3unid_257);
var lyr_PrprioPblicoMunicipalPraa3unid_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPraa3unid_257, 
                style: style_PrprioPblicoMunicipalPraa3unid_257,
                popuplayertitle: 'Próprio Público Municipal - Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPraa3unid_257.png" /> Próprio Público Municipal - Praça (3 unid.)'
            });
var format_PrprioPblicoMunicipalQuadra3unid_258 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalQuadra3unid_258 = format_PrprioPblicoMunicipalQuadra3unid_258.readFeatures(json_PrprioPblicoMunicipalQuadra3unid_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalQuadra3unid_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalQuadra3unid_258.addFeatures(features_PrprioPblicoMunicipalQuadra3unid_258);
var lyr_PrprioPblicoMunicipalQuadra3unid_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalQuadra3unid_258, 
                style: style_PrprioPblicoMunicipalQuadra3unid_258,
                popuplayertitle: 'Próprio Público Municipal - Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalQuadra3unid_258.png" /> Próprio Público Municipal - Quadra (3 unid.)'
            });
var format_PrprioPblicoMunicipalSecretaria1unid_259 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalSecretaria1unid_259 = format_PrprioPblicoMunicipalSecretaria1unid_259.readFeatures(json_PrprioPblicoMunicipalSecretaria1unid_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalSecretaria1unid_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalSecretaria1unid_259.addFeatures(features_PrprioPblicoMunicipalSecretaria1unid_259);
var lyr_PrprioPblicoMunicipalSecretaria1unid_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalSecretaria1unid_259, 
                style: style_PrprioPblicoMunicipalSecretaria1unid_259,
                popuplayertitle: 'Próprio Público Municipal - Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalSecretaria1unid_259.png" /> Próprio Público Municipal - Secretaria (1 unid.)'
            });
var format_PrprioPblicoMunicipalTeatro2unid_260 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalTeatro2unid_260 = format_PrprioPblicoMunicipalTeatro2unid_260.readFeatures(json_PrprioPblicoMunicipalTeatro2unid_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalTeatro2unid_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalTeatro2unid_260.addFeatures(features_PrprioPblicoMunicipalTeatro2unid_260);
var lyr_PrprioPblicoMunicipalTeatro2unid_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalTeatro2unid_260, 
                style: style_PrprioPblicoMunicipalTeatro2unid_260,
                popuplayertitle: 'Próprio Público Municipal - Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalTeatro2unid_260.png" /> Próprio Público Municipal - Teatro (2 unid.)'
            });
var format_PrprioPblicoMunicipalAtenoPrimria24unid_261 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalAtenoPrimria24unid_261 = format_PrprioPblicoMunicipalAtenoPrimria24unid_261.readFeatures(json_PrprioPblicoMunicipalAtenoPrimria24unid_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_261.addFeatures(features_PrprioPblicoMunicipalAtenoPrimria24unid_261);
var lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_261, 
                style: style_PrprioPblicoMunicipalAtenoPrimria24unid_261,
                popuplayertitle: 'Próprio Público Municipal - Atenção Primária (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalAtenoPrimria24unid_261.png" /> Próprio Público Municipal - Atenção Primária (24 unid.)'
            });
var format_PrprioPblicoMunicipalGestoAdministrativo3unid_262 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGestoAdministrativo3unid_262 = format_PrprioPblicoMunicipalGestoAdministrativo3unid_262.readFeatures(json_PrprioPblicoMunicipalGestoAdministrativo3unid_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_262.addFeatures(features_PrprioPblicoMunicipalGestoAdministrativo3unid_262);
var lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_262, 
                style: style_PrprioPblicoMunicipalGestoAdministrativo3unid_262,
                popuplayertitle: 'Próprio Público Municipal - Gestão / Administrativo (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGestoAdministrativo3unid_262.png" /> Próprio Público Municipal - Gestão / Administrativo (3 unid.)'
            });
var format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263 = format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.readFeatures(json_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.addFeatures(features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263);
var lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263, 
                style: style_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263,
                popuplayertitle: 'Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.png" /> Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)'
            });
var format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264 = format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.readFeatures(json_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.addFeatures(features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264);
var lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264, 
                style: style_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264,
                popuplayertitle: 'Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.png" /> Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)'
            });
var format_PrprioPblicoMunicipalVigilnciaemSade5unid_265 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalVigilnciaemSade5unid_265 = format_PrprioPblicoMunicipalVigilnciaemSade5unid_265.readFeatures(json_PrprioPblicoMunicipalVigilnciaemSade5unid_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_265.addFeatures(features_PrprioPblicoMunicipalVigilnciaemSade5unid_265);
var lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_265, 
                style: style_PrprioPblicoMunicipalVigilnciaemSade5unid_265,
                popuplayertitle: 'Próprio Público Municipal - Vigilância em Saúde (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalVigilnciaemSade5unid_265.png" /> Próprio Público Municipal - Vigilância em Saúde (5 unid.)'
            });
var format_ParqueZumbidosPalmares_266 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_266 = format_ParqueZumbidosPalmares_266.readFeatures(json_ParqueZumbidosPalmares_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_266.addFeatures(features_ParqueZumbidosPalmares_266);
var lyr_ParqueZumbidosPalmares_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_266, 
                style: style_ParqueZumbidosPalmares_266,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_266.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_269 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_269 = format_AntigoAterrodasMaritacas_269.readFeatures(json_AntigoAterrodasMaritacas_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_269.addFeatures(features_AntigoAterrodasMaritacas_269);
var lyr_AntigoAterrodasMaritacas_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_269, 
                style: style_AntigoAterrodasMaritacas_269,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_269.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_273 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_273 = format_AntigoAterrodaFazendaMunicipal_273.readFeatures(json_AntigoAterrodaFazendaMunicipal_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_273.addFeatures(features_AntigoAterrodaFazendaMunicipal_273);
var lyr_AntigoAterrodaFazendaMunicipal_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_273, 
                style: style_AntigoAterrodaFazendaMunicipal_273,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_273.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_276 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_276 = format_ARORemanescentesFlorestais_276.readFeatures(json_ARORemanescentesFlorestais_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_276.addFeatures(features_ARORemanescentesFlorestais_276);
var lyr_ARORemanescentesFlorestais_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_276, 
                style: style_ARORemanescentesFlorestais_276,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_276.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_277 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_277 = format_AROreadeAmortecimento_277.readFeatures(json_AROreadeAmortecimento_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_277.addFeatures(features_AROreadeAmortecimento_277);
var lyr_AROreadeAmortecimento_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_277, 
                style: style_AROreadeAmortecimento_277,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_277.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_278 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_278 = format_AROFaixadeCuestas_278.readFeatures(json_AROFaixadeCuestas_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_278.addFeatures(features_AROFaixadeCuestas_278);
var lyr_AROFaixadeCuestas_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_278, 
                style: style_AROFaixadeCuestas_278,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_278.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_279 = new ol.format.GeoJSON();
var features_AROAPP_279 = format_AROAPP_279.readFeatures(json_AROAPP_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_279.addFeatures(features_AROAPP_279);
var lyr_AROAPP_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_279, 
                style: style_AROAPP_279,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_279.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_280 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_280 = format_ARAIncongrunciasemAPP_280.readFeatures(json_ARAIncongrunciasemAPP_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_280.addFeatures(features_ARAIncongrunciasemAPP_280);
var lyr_ARAIncongrunciasemAPP_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_280, 
                style: style_ARAIncongrunciasemAPP_280,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_280.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_281 = new ol.format.GeoJSON();
var features_ARAETELagoas_281 = format_ARAETELagoas_281.readFeatures(json_ARAETELagoas_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_281.addFeatures(features_ARAETELagoas_281);
var lyr_ARAETELagoas_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_281, 
                style: style_ARAETELagoas_281,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_281.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_282 = new ol.format.GeoJSON();
var features_ARAAterros_282 = format_ARAAterros_282.readFeatures(json_ARAAterros_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_282.addFeatures(features_ARAAterros_282);
var lyr_ARAAterros_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_282, 
                style: style_ARAAterros_282,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_282.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_283 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_283 = format_AODreaUrbanaConsolidada_283.readFeatures(json_AODreaUrbanaConsolidada_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_283.addFeatures(features_AODreaUrbanaConsolidada_283);
var lyr_AODreaUrbanaConsolidada_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_283, 
                style: style_AODreaUrbanaConsolidada_283,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_283.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_284 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_284 = format_AODBaixaDensidadeNvel3_284.readFeatures(json_AODBaixaDensidadeNvel3_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_284.addFeatures(features_AODBaixaDensidadeNvel3_284);
var lyr_AODBaixaDensidadeNvel3_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_284, 
                style: style_AODBaixaDensidadeNvel3_284,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_284.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_285 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_285 = format_AODBaixaDensidadeNvel2_285.readFeatures(json_AODBaixaDensidadeNvel2_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_285.addFeatures(features_AODBaixaDensidadeNvel2_285);
var lyr_AODBaixaDensidadeNvel2_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_285, 
                style: style_AODBaixaDensidadeNvel2_285,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_285.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_286 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_286 = format_AODBaixaDensidadeNvel1_286.readFeatures(json_AODBaixaDensidadeNvel1_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_286.addFeatures(features_AODBaixaDensidadeNvel1_286);
var lyr_AODBaixaDensidadeNvel1_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_286, 
                style: style_AODBaixaDensidadeNvel1_286,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_286.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_287 = new ol.format.GeoJSON();
var features_AODAUSFase2_287 = format_AODAUSFase2_287.readFeatures(json_AODAUSFase2_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_287.addFeatures(features_AODAUSFase2_287);
var lyr_AODAUSFase2_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_287, 
                style: style_AODAUSFase2_287,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_287.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_288 = new ol.format.GeoJSON();
var features_AODAUSFase1_288 = format_AODAUSFase1_288.readFeatures(json_AODAUSFase1_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_288.addFeatures(features_AODAUSFase1_288);
var lyr_AODAUSFase1_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_288, 
                style: style_AODAUSFase1_288,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_288.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_289 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_289 = format_LimitedaBaciadoRioCanoasLeiC4322024_289.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_289.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_289);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_289, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_289,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_289.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_290 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_290 = format_LimitedaBaciadoRioCanoasLeiC1002006_290.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_290.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_290);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_290, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_290,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_290.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_291 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_291 = format_DelimitaodaBaciadoRibeirodaOna_291.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_291.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_291);
var lyr_DelimitaodaBaciadoRibeirodaOna_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_291, 
                style: style_DelimitaodaBaciadoRibeirodaOna_291,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_291.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_292 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_292 = format_AoCivilPblica1unid_292.readFeatures(json_AoCivilPblica1unid_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_292.addFeatures(features_AoCivilPblica1unid_292);
var lyr_AoCivilPblica1unid_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_292, 
                style: style_AoCivilPblica1unid_292,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_292.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_293 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_293 = format_AoCivilPblica1unid_293.readFeatures(json_AoCivilPblica1unid_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_293.addFeatures(features_AoCivilPblica1unid_293);
var lyr_AoCivilPblica1unid_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_293, 
                style: style_AoCivilPblica1unid_293,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_293.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_294 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_294 = format_CartaAnuncia20unid_294.readFeatures(json_CartaAnuncia20unid_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_294.addFeatures(features_CartaAnuncia20unid_294);
var lyr_CartaAnuncia20unid_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_294, 
                style: style_CartaAnuncia20unid_294,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_294.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia20unid_295 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_295 = format_CartaAnuncia20unid_295.readFeatures(json_CartaAnuncia20unid_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_295.addFeatures(features_CartaAnuncia20unid_295);
var lyr_CartaAnuncia20unid_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_295, 
                style: style_CartaAnuncia20unid_295,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_295.png" /> Carta Anuência (20 unid.)'
            });
var format_PlantioVoluntrio1unid_296 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_296 = format_PlantioVoluntrio1unid_296.readFeatures(json_PlantioVoluntrio1unid_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_296.addFeatures(features_PlantioVoluntrio1unid_296);
var lyr_PlantioVoluntrio1unid_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_296, 
                style: style_PlantioVoluntrio1unid_296,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_296.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_297 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_297 = format_PlantioVoluntrio1unid_297.readFeatures(json_PlantioVoluntrio1unid_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_297.addFeatures(features_PlantioVoluntrio1unid_297);
var lyr_PlantioVoluntrio1unid_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_297, 
                style: style_PlantioVoluntrio1unid_297,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_297.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_298 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_298 = format_TACMinistrioPblico9unid_298.readFeatures(json_TACMinistrioPblico9unid_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_298.addFeatures(features_TACMinistrioPblico9unid_298);
var lyr_TACMinistrioPblico9unid_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_298, 
                style: style_TACMinistrioPblico9unid_298,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_298.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_299 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_299 = format_TACMinistrioPblico9unid_299.readFeatures(json_TACMinistrioPblico9unid_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_299.addFeatures(features_TACMinistrioPblico9unid_299);
var lyr_TACMinistrioPblico9unid_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_299, 
                style: style_TACMinistrioPblico9unid_299,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_299.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_300 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_300 = format_TCRACETESB28unid_300.readFeatures(json_TCRACETESB28unid_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_300.addFeatures(features_TCRACETESB28unid_300);
var lyr_TCRACETESB28unid_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_300, 
                style: style_TCRACETESB28unid_300,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_300.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_301 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_301 = format_TCRACETESB28unid_301.readFeatures(json_TCRACETESB28unid_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_301.addFeatures(features_TCRACETESB28unid_301);
var lyr_TCRACETESB28unid_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_301, 
                style: style_TCRACETESB28unid_301,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_301.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESBPARCELAMENTO11unid_302 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO11unid_302 = format_TCRACETESBPARCELAMENTO11unid_302.readFeatures(json_TCRACETESBPARCELAMENTO11unid_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO11unid_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO11unid_302.addFeatures(features_TCRACETESBPARCELAMENTO11unid_302);
var lyr_TCRACETESBPARCELAMENTO11unid_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO11unid_302, 
                style: style_TCRACETESBPARCELAMENTO11unid_302,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (11 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO11unid_302.png" /> TCRA CETESB / PARCELAMENTO (11 unid.)'
            });
var format_TCRACETESBPARCELAMENTO11unid_303 = new ol.format.GeoJSON();
var features_TCRACETESBPARCELAMENTO11unid_303 = format_TCRACETESBPARCELAMENTO11unid_303.readFeatures(json_TCRACETESBPARCELAMENTO11unid_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESBPARCELAMENTO11unid_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESBPARCELAMENTO11unid_303.addFeatures(features_TCRACETESBPARCELAMENTO11unid_303);
var lyr_TCRACETESBPARCELAMENTO11unid_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESBPARCELAMENTO11unid_303, 
                style: style_TCRACETESBPARCELAMENTO11unid_303,
                popuplayertitle: 'TCRA CETESB / PARCELAMENTO (11 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESBPARCELAMENTO11unid_303.png" /> TCRA CETESB / PARCELAMENTO (11 unid.)'
            });
var format_TCRAMunicipal14unid_304 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_304 = format_TCRAMunicipal14unid_304.readFeatures(json_TCRAMunicipal14unid_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_304.addFeatures(features_TCRAMunicipal14unid_304);
var lyr_TCRAMunicipal14unid_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_304, 
                style: style_TCRAMunicipal14unid_304,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_304.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_305 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_305 = format_TCRAMunicipal14unid_305.readFeatures(json_TCRAMunicipal14unid_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_305.addFeatures(features_TCRAMunicipal14unid_305);
var lyr_TCRAMunicipal14unid_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_305, 
                style: style_TCRAMunicipal14unid_305,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_305.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_306 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_306 = format_TRPRLCETESB2unid_306.readFeatures(json_TRPRLCETESB2unid_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_306.addFeatures(features_TRPRLCETESB2unid_306);
var lyr_TRPRLCETESB2unid_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_306, 
                style: style_TRPRLCETESB2unid_306,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_306.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_307 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_307 = format_TRPRLCETESB2unid_307.readFeatures(json_TRPRLCETESB2unid_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_307.addFeatures(features_TRPRLCETESB2unid_307);
var lyr_TRPRLCETESB2unid_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_307, 
                style: style_TRPRLCETESB2unid_307,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_307.png" /> TRPRL CETESB (2 unid.)'
            });
var format_JardimZoobotnicoDelimitao_308 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_308 = format_JardimZoobotnicoDelimitao_308.readFeatures(json_JardimZoobotnicoDelimitao_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoDelimitao_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_308.addFeatures(features_JardimZoobotnicoDelimitao_308);
var lyr_JardimZoobotnicoDelimitao_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_308, 
                style: style_JardimZoobotnicoDelimitao_308,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_308.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_309 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_309 = format_JardimZoobotnicoTrajetos_309.readFeatures(json_JardimZoobotnicoTrajetos_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoTrajetos_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_309.addFeatures(features_JardimZoobotnicoTrajetos_309);
var lyr_JardimZoobotnicoTrajetos_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_309, 
                style: style_JardimZoobotnicoTrajetos_309,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_309.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_310 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_310 = format_JardimZoobotnicoPontosdeInteresse19unid_310.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_310.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_310);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_310, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_310,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_310.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_311 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_311 = format_ParquedosTrabalhadores_311.readFeatures(json_ParquedosTrabalhadores_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_311.addFeatures(features_ParquedosTrabalhadores_311);
var lyr_ParquedosTrabalhadores_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_311, 
                style: style_ParquedosTrabalhadores_311,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_311.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_312 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_312 = format_ParquedosTrabalhadores_312.readFeatures(json_ParquedosTrabalhadores_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_312.addFeatures(features_ParquedosTrabalhadores_312);
var lyr_ParquedosTrabalhadores_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_312, 
                style: style_ParquedosTrabalhadores_312,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_312.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_313 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_313 = format_ComplexoPoliesportivo_313.readFeatures(json_ComplexoPoliesportivo_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_313.addFeatures(features_ComplexoPoliesportivo_313);
var lyr_ComplexoPoliesportivo_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_313, 
                style: style_ComplexoPoliesportivo_313,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_313.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_314 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_314 = format_ComplexoPoliesportivo_314.readFeatures(json_ComplexoPoliesportivo_314, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_314 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_314.addFeatures(features_ComplexoPoliesportivo_314);
var lyr_ComplexoPoliesportivo_314 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_314, 
                style: style_ComplexoPoliesportivo_314,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_314.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_315 = new ol.format.GeoJSON();
var features_ParqueCaxambu_315 = format_ParqueCaxambu_315.readFeatures(json_ParqueCaxambu_315, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_315 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_315.addFeatures(features_ParqueCaxambu_315);
var lyr_ParqueCaxambu_315 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_315, 
                style: style_ParqueCaxambu_315,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_315.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_316 = new ol.format.GeoJSON();
var features_ParqueCaxambu_316 = format_ParqueCaxambu_316.readFeatures(json_ParqueCaxambu_316, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_316 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_316.addFeatures(features_ParqueCaxambu_316);
var lyr_ParqueCaxambu_316 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_316, 
                style: style_ParqueCaxambu_316,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_316.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_317 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_317 = format_ParquedeExposiesFernandoCosta_317.readFeatures(json_ParquedeExposiesFernandoCosta_317, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_317 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_317.addFeatures(features_ParquedeExposiesFernandoCosta_317);
var lyr_ParquedeExposiesFernandoCosta_317 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_317, 
                style: style_ParquedeExposiesFernandoCosta_317,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_317.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_318 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_318 = format_ParquedeExposiesFernandoCosta_318.readFeatures(json_ParquedeExposiesFernandoCosta_318, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_318 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_318.addFeatures(features_ParquedeExposiesFernandoCosta_318);
var lyr_ParquedeExposiesFernandoCosta_318 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_318, 
                style: style_ParquedeExposiesFernandoCosta_318,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_318.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319 = new ol.format.GeoJSON();
var features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319 = format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.readFeatures(json_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.addFeatures(features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319);
var lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319, 
                style: style_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319,
                popuplayertitle: 'Parque Ambiental "Sebastição Alves Branquinho - Bosque dos Angicos"',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.png" /> Parque Ambiental "Sebastição Alves Branquinho - Bosque dos Angicos"'
            });
var format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320 = new ol.format.GeoJSON();
var features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320 = format_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.readFeatures(json_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.addFeatures(features_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320);
var lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320, 
                style: style_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320,
                popuplayertitle: 'Parque Ambiental "Sebastição Alves Branquinho - Bosque dos Angicos"',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.png" /> Parque Ambiental "Sebastição Alves Branquinho - Bosque dos Angicos"'
            });
var format_ParqueAmbientalLuprcioTaveira_321 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_321 = format_ParqueAmbientalLuprcioTaveira_321.readFeatures(json_ParqueAmbientalLuprcioTaveira_321, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_321 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_321.addFeatures(features_ParqueAmbientalLuprcioTaveira_321);
var lyr_ParqueAmbientalLuprcioTaveira_321 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_321, 
                style: style_ParqueAmbientalLuprcioTaveira_321,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_321.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_322 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_322 = format_ParqueAmbientalLuprcioTaveira_322.readFeatures(json_ParqueAmbientalLuprcioTaveira_322, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_322 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_322.addFeatures(features_ParqueAmbientalLuprcioTaveira_322);
var lyr_ParqueAmbientalLuprcioTaveira_322 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_322, 
                style: style_ParqueAmbientalLuprcioTaveira_322,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_322.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ProgramaAdoteUmaPraa315unid30277327m_323 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa315unid30277327m_323 = format_ProgramaAdoteUmaPraa315unid30277327m_323.readFeatures(json_ProgramaAdoteUmaPraa315unid30277327m_323, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProgramaAdoteUmaPraa315unid30277327m_323 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa315unid30277327m_323.addFeatures(features_ProgramaAdoteUmaPraa315unid30277327m_323);
var lyr_ProgramaAdoteUmaPraa315unid30277327m_323 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa315unid30277327m_323, 
                style: style_ProgramaAdoteUmaPraa315unid30277327m_323,
                popuplayertitle: 'Programa Adote Uma Praça (315 unid. / 302.773,27 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa315unid30277327m_323.png" /> Programa Adote Uma Praça (315 unid. / 302.773,27 m²)'
            });
var format_ComPlacaDilu161unid17007212m_324 = new ol.format.GeoJSON();
var features_ComPlacaDilu161unid17007212m_324 = format_ComPlacaDilu161unid17007212m_324.readFeatures(json_ComPlacaDilu161unid17007212m_324, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaDilu161unid17007212m_324 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu161unid17007212m_324.addFeatures(features_ComPlacaDilu161unid17007212m_324);
var lyr_ComPlacaDilu161unid17007212m_324 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu161unid17007212m_324, 
                style: style_ComPlacaDilu161unid17007212m_324,
                popuplayertitle: 'Com Placa - Dilu (161 unid. / 170.072,12 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu161unid17007212m_324.png" /> Com Placa - Dilu (161 unid. / 170.072,12 m²)'
            });
var format_ComPlacaEgnaldo134unid12211725m_325 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo134unid12211725m_325 = format_ComPlacaEgnaldo134unid12211725m_325.readFeatures(json_ComPlacaEgnaldo134unid12211725m_325, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaEgnaldo134unid12211725m_325 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo134unid12211725m_325.addFeatures(features_ComPlacaEgnaldo134unid12211725m_325);
var lyr_ComPlacaEgnaldo134unid12211725m_325 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo134unid12211725m_325, 
                style: style_ComPlacaEgnaldo134unid12211725m_325,
                popuplayertitle: 'Com Placa - Egnaldo (134 unid. / 122.117,25 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo134unid12211725m_325.png" /> Com Placa - Egnaldo (134 unid. / 122.117,25 m²)'
            });
var format_SemPlacaDilu16unid774541m_326 = new ol.format.GeoJSON();
var features_SemPlacaDilu16unid774541m_326 = format_SemPlacaDilu16unid774541m_326.readFeatures(json_SemPlacaDilu16unid774541m_326, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaDilu16unid774541m_326 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu16unid774541m_326.addFeatures(features_SemPlacaDilu16unid774541m_326);
var lyr_SemPlacaDilu16unid774541m_326 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu16unid774541m_326, 
                style: style_SemPlacaDilu16unid774541m_326,
                popuplayertitle: 'Sem Placa - Dilu (16 unid. / 7.745,41 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu16unid774541m_326.png" /> Sem Placa - Dilu (16 unid. / 7.745,41 m²)'
            });
var format_SemPlacaEgnaldo4unid86447m_327 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo4unid86447m_327 = format_SemPlacaEgnaldo4unid86447m_327.readFeatures(json_SemPlacaEgnaldo4unid86447m_327, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaEgnaldo4unid86447m_327 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo4unid86447m_327.addFeatures(features_SemPlacaEgnaldo4unid86447m_327);
var lyr_SemPlacaEgnaldo4unid86447m_327 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo4unid86447m_327, 
                style: style_SemPlacaEgnaldo4unid86447m_327,
                popuplayertitle: 'Sem Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo4unid86447m_327.png" /> Sem Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var format_LotesImvelPrivado95unid_328 = new ol.format.GeoJSON();
var features_LotesImvelPrivado95unid_328 = format_LotesImvelPrivado95unid_328.readFeatures(json_LotesImvelPrivado95unid_328, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LotesImvelPrivado95unid_328 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado95unid_328.addFeatures(features_LotesImvelPrivado95unid_328);
var lyr_LotesImvelPrivado95unid_328 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado95unid_328, 
                style: style_LotesImvelPrivado95unid_328,
                popuplayertitle: 'Lotes - Imóvel Privado (95 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado95unid_328.png" /> Lotes - Imóvel Privado (95 unid.)'
            });
var format_ImvelPrivado95unid_329 = new ol.format.GeoJSON();
var features_ImvelPrivado95unid_329 = format_ImvelPrivado95unid_329.readFeatures(json_ImvelPrivado95unid_329, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPrivado95unid_329 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado95unid_329.addFeatures(features_ImvelPrivado95unid_329);
var lyr_ImvelPrivado95unid_329 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado95unid_329, 
                style: style_ImvelPrivado95unid_329,
                popuplayertitle: 'Imóvel Privado (95 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado95unid_329.png" /> Imóvel Privado (95 unid.)'
            });
var format_ImvelRural1unid_330 = new ol.format.GeoJSON();
var features_ImvelRural1unid_330 = format_ImvelRural1unid_330.readFeatures(json_ImvelRural1unid_330, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelRural1unid_330 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelRural1unid_330.addFeatures(features_ImvelRural1unid_330);
var lyr_ImvelRural1unid_330 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelRural1unid_330, 
                style: style_ImvelRural1unid_330,
                popuplayertitle: 'Imóvel Rural (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelRural1unid_330.png" /> Imóvel Rural (1 unid.)'
            });
var format_ImvelPblico118unid_331 = new ol.format.GeoJSON();
var features_ImvelPblico118unid_331 = format_ImvelPblico118unid_331.readFeatures(json_ImvelPblico118unid_331, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico118unid_331 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico118unid_331.addFeatures(features_ImvelPblico118unid_331);
var lyr_ImvelPblico118unid_331 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico118unid_331, 
                style: style_ImvelPblico118unid_331,
                popuplayertitle: 'Imóvel Público (118 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico118unid_331.png" /> Imóvel Público (118 unid.)'
            });
var format_RodoviasEstaduais4unid_332 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_332 = format_RodoviasEstaduais4unid_332.readFeatures(json_RodoviasEstaduais4unid_332, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasEstaduais4unid_332 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_332.addFeatures(features_RodoviasEstaduais4unid_332);
var lyr_RodoviasEstaduais4unid_332 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_332, 
                style: style_RodoviasEstaduais4unid_332,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_332.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_333 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_333 = format_EstradasRuraisMunicipais34unid_333.readFeatures(json_EstradasRuraisMunicipais34unid_333, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstradasRuraisMunicipais34unid_333 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_333.addFeatures(features_EstradasRuraisMunicipais34unid_333);
var lyr_EstradasRuraisMunicipais34unid_333 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_333, 
                style: style_EstradasRuraisMunicipais34unid_333,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_333.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_334 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_334 = format_RodoviasMunicipais8unid_334.readFeatures(json_RodoviasMunicipais8unid_334, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasMunicipais8unid_334 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_334.addFeatures(features_RodoviasMunicipais8unid_334);
var lyr_RodoviasMunicipais8unid_334 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_334, 
                style: style_RodoviasMunicipais8unid_334,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_334.png" /> Rodovias Municipais (8 unid.)'
            });
var format_Gesso1unid_335 = new ol.format.GeoJSON();
var features_Gesso1unid_335 = format_Gesso1unid_335.readFeatures(json_Gesso1unid_335, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_335 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_335.addFeatures(features_Gesso1unid_335);
var lyr_Gesso1unid_335 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_335, 
                style: style_Gesso1unid_335,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_335.png" /> Gesso (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_336 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_336 = format_ResduosdeConstruoCivil7unid_336.readFeatures(json_ResduosdeConstruoCivil7unid_336, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_336 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_336.addFeatures(features_ResduosdeConstruoCivil7unid_336);
var lyr_ResduosdeConstruoCivil7unid_336 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_336, 
                style: style_ResduosdeConstruoCivil7unid_336,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_336.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_337 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_337 = format_ResduosVerdes1unid_337.readFeatures(json_ResduosVerdes1unid_337, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_337 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_337.addFeatures(features_ResduosVerdes1unid_337);
var lyr_ResduosVerdes1unid_337 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_337, 
                style: style_ResduosVerdes1unid_337,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_337.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_338 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_338 = format_ChapasdeRaioX1unid_338.readFeatures(json_ChapasdeRaioX1unid_338, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_338 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_338.addFeatures(features_ChapasdeRaioX1unid_338);
var lyr_ChapasdeRaioX1unid_338 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_338, 
                style: style_ChapasdeRaioX1unid_338,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_338.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_339 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_339 = format_Embalagensvaziasdeagrotxicos1unid_339.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_339, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_339 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_339.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_339);
var lyr_Embalagensvaziasdeagrotxicos1unid_339 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_339, 
                style: style_Embalagensvaziasdeagrotxicos1unid_339,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_339.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_340 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_340 = format_leodecozinhausado2unid_340.readFeatures(json_leodecozinhausado2unid_340, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_340 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_340.addFeatures(features_leodecozinhausado2unid_340);
var lyr_leodecozinhausado2unid_340 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_340, 
                style: style_leodecozinhausado2unid_340,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_340.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_341 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_341 = format_leolubrificanteusado1unid_341.readFeatures(json_leolubrificanteusado1unid_341, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_341 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_341.addFeatures(features_leolubrificanteusado1unid_341);
var lyr_leolubrificanteusado1unid_341 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_341, 
                style: style_leolubrificanteusado1unid_341,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_341.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_342 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_342 = format_Latasdetintametlicasvazias2unid_342.readFeatures(json_Latasdetintametlicasvazias2unid_342, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_342 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_342.addFeatures(features_Latasdetintametlicasvazias2unid_342);
var lyr_Latasdetintametlicasvazias2unid_342 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_342, 
                style: style_Latasdetintametlicasvazias2unid_342,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_342.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_343 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_343 = format_ResduosPerigosos1unid_343.readFeatures(json_ResduosPerigosos1unid_343, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_343 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_343.addFeatures(features_ResduosPerigosos1unid_343);
var lyr_ResduosPerigosos1unid_343 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_343, 
                style: style_ResduosPerigosos1unid_343,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_343.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_344 = new ol.format.GeoJSON();
var features_Madeiras1unid_344 = format_Madeiras1unid_344.readFeatures(json_Madeiras1unid_344, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_344 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_344.addFeatures(features_Madeiras1unid_344);
var lyr_Madeiras1unid_344 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_344, 
                style: style_Madeiras1unid_344,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_344.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_345 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_345 = format_ResduosdeServiosdeSade21unid_345.readFeatures(json_ResduosdeServiosdeSade21unid_345, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_345 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_345.addFeatures(features_ResduosdeServiosdeSade21unid_345);
var lyr_ResduosdeServiosdeSade21unid_345 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_345, 
                style: style_ResduosdeServiosdeSade21unid_345,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_345.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias17unid_346 = new ol.format.GeoJSON();
var features_PilhaseBaterias17unid_346 = format_PilhaseBaterias17unid_346.readFeatures(json_PilhaseBaterias17unid_346, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias17unid_346 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias17unid_346.addFeatures(features_PilhaseBaterias17unid_346);
var lyr_PilhaseBaterias17unid_346 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias17unid_346, 
                style: style_PilhaseBaterias17unid_346,
                popuplayertitle: 'Pilhas e Baterias (17 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias17unid_346.png" /> Pilhas e Baterias (17 unid.)'
            });
var format_Pneus1unid_347 = new ol.format.GeoJSON();
var features_Pneus1unid_347 = format_Pneus1unid_347.readFeatures(json_Pneus1unid_347, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_347 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_347.addFeatures(features_Pneus1unid_347);
var lyr_Pneus1unid_347 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_347, 
                style: style_Pneus1unid_347,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_347.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_348 = new ol.format.GeoJSON();
var features_Lmpadas4unid_348 = format_Lmpadas4unid_348.readFeatures(json_Lmpadas4unid_348, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_348 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_348.addFeatures(features_Lmpadas4unid_348);
var lyr_Lmpadas4unid_348 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_348, 
                style: style_Lmpadas4unid_348,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_348.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_349 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_349 = format_ResduosdeCouro1unid_349.readFeatures(json_ResduosdeCouro1unid_349, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_349 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_349.addFeatures(features_ResduosdeCouro1unid_349);
var lyr_ResduosdeCouro1unid_349 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_349, 
                style: style_ResduosdeCouro1unid_349,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_349.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_350 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_350 = format_ResduosEletrnicos2unid_350.readFeatures(json_ResduosEletrnicos2unid_350, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_350 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_350.addFeatures(features_ResduosEletrnicos2unid_350);
var lyr_ResduosEletrnicos2unid_350 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_350, 
                style: style_ResduosEletrnicos2unid_350,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_350.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_351 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_351 = format_ResduosReciclveis15unid_351.readFeatures(json_ResduosReciclveis15unid_351, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_351 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_351.addFeatures(features_ResduosReciclveis15unid_351);
var lyr_ResduosReciclveis15unid_351 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_351, 
                style: style_ResduosReciclveis15unid_351,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_351.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_352 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_352 = format_ResduosInservveis4unid_352.readFeatures(json_ResduosInservveis4unid_352, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_352 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_352.addFeatures(features_ResduosInservveis4unid_352);
var lyr_ResduosInservveis4unid_352 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_352, 
                style: style_ResduosInservveis4unid_352,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_352.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_Contineres286unid_353 = new ol.format.GeoJSON();
var features_Contineres286unid_353 = format_Contineres286unid_353.readFeatures(json_Contineres286unid_353, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_353 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_353.addFeatures(features_Contineres286unid_353);
var lyr_Contineres286unid_353 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_353, 
                style: style_Contineres286unid_353,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_353.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_354 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_354 = format_rvoreImuneaoCorte9unid_354.readFeatures(json_rvoreImuneaoCorte9unid_354, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_354 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_354.addFeatures(features_rvoreImuneaoCorte9unid_354);
var lyr_rvoreImuneaoCorte9unid_354 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_354, 
                style: style_rvoreImuneaoCorte9unid_354,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_354.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_355 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_355 = format_LocaisdeDifcilAcessoereasRurais20unid_355.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_355, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_355 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_355.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_355);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_355 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_355, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_355,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_355.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var format_AcademiasaoArLivre84unid_356 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_356 = format_AcademiasaoArLivre84unid_356.readFeatures(json_AcademiasaoArLivre84unid_356, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_356 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_356.addFeatures(features_AcademiasaoArLivre84unid_356);
var lyr_AcademiasaoArLivre84unid_356 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_356, 
                style: style_AcademiasaoArLivre84unid_356,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_356.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Voorocas26unid_357 = new ol.format.GeoJSON();
var features_Voorocas26unid_357 = format_Voorocas26unid_357.readFeatures(json_Voorocas26unid_357, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_357 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_357.addFeatures(features_Voorocas26unid_357);
var lyr_Voorocas26unid_357 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_357, 
                style: style_Voorocas26unid_357,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_357.png" /> Voçorocas (26 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_Gesso1unid_335,lyr_ResduosdeConstruoCivil7unid_336,lyr_ResduosVerdes1unid_337,lyr_ChapasdeRaioX1unid_338,lyr_Embalagensvaziasdeagrotxicos1unid_339,lyr_leodecozinhausado2unid_340,lyr_leolubrificanteusado1unid_341,lyr_Latasdetintametlicasvazias2unid_342,lyr_ResduosPerigosos1unid_343,lyr_Madeiras1unid_344,lyr_ResduosdeServiosdeSade21unid_345,lyr_PilhaseBaterias17unid_346,lyr_Pneus1unid_347,lyr_Lmpadas4unid_348,lyr_ResduosdeCouro1unid_349,lyr_ResduosEletrnicos2unid_350,lyr_ResduosReciclveis15unid_351,lyr_ResduosInservveis4unid_352,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_332,lyr_EstradasRuraisMunicipais34unid_333,lyr_RodoviasMunicipais8unid_334,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado95unid_328,lyr_ImvelPrivado95unid_329,lyr_ImvelRural1unid_330,lyr_ImvelPblico118unid_331,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa315unid30277327m_323,lyr_ComPlacaDilu161unid17007212m_324,lyr_ComPlacaEgnaldo134unid12211725m_325,lyr_SemPlacaDilu16unid774541m_326,lyr_SemPlacaEgnaldo4unid86447m_327,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_308,lyr_JardimZoobotnicoTrajetos_309,lyr_JardimZoobotnicoPontosdeInteresse19unid_310,lyr_ParquedosTrabalhadores_311,lyr_ParquedosTrabalhadores_312,lyr_ComplexoPoliesportivo_313,lyr_ComplexoPoliesportivo_314,lyr_ParqueCaxambu_315,lyr_ParqueCaxambu_316,lyr_ParquedeExposiesFernandoCosta_317,lyr_ParquedeExposiesFernandoCosta_318,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319,lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320,lyr_ParqueAmbientalLuprcioTaveira_321,lyr_ParqueAmbientalLuprcioTaveira_322,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_292,lyr_AoCivilPblica1unid_293,lyr_CartaAnuncia20unid_294,lyr_CartaAnuncia20unid_295,lyr_PlantioVoluntrio1unid_296,lyr_PlantioVoluntrio1unid_297,lyr_TACMinistrioPblico9unid_298,lyr_TACMinistrioPblico9unid_299,lyr_TCRACETESB28unid_300,lyr_TCRACETESB28unid_301,lyr_TCRACETESBPARCELAMENTO11unid_302,lyr_TCRACETESBPARCELAMENTO11unid_303,lyr_TCRAMunicipal14unid_304,lyr_TCRAMunicipal14unid_305,lyr_TRPRLCETESB2unid_306,lyr_TRPRLCETESB2unid_307,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_276,lyr_AROreadeAmortecimento_277,lyr_AROFaixadeCuestas_278,lyr_AROAPP_279,lyr_ARAIncongrunciasemAPP_280,lyr_ARAETELagoas_281,lyr_ARAAterros_282,lyr_AODreaUrbanaConsolidada_283,lyr_AODBaixaDensidadeNvel3_284,lyr_AODBaixaDensidadeNvel2_285,lyr_AODBaixaDensidadeNvel1_286,lyr_AODAUSFase2_287,lyr_AODAUSFase1_288,lyr_LimitedaBaciadoRioCanoasLeiC4322024_289,lyr_LimitedaBaciadoRioCanoasLeiC1002006_290,lyr_DelimitaodaBaciadoRibeirodaOna_291,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_266,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268,lyr_AntigoAterrodasMaritacas_269,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272,lyr_AntigoAterrodaFazendaMunicipal_273,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261,lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262,lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263,lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264,lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalArena3unid_242,lyr_PrprioPblicoMunicipalBiblioteca1unid_243,lyr_PrprioPblicoMunicipalCampo18unid_244,lyr_PrprioPblicoMunicipalCasa1unid_245,lyr_PrprioPblicoMunicipalCentro4unid_246,lyr_PrprioPblicoMunicipalCEPEL12unid_247,lyr_PrprioPblicoMunicipalConjunto4unid_248,lyr_PrprioPblicoMunicipalEstadio1unid_249,lyr_PrprioPblicoMunicipalGinsio5unid_250,lyr_PrprioPblicoMunicipalMuseu2unid_251,lyr_PrprioPblicoMunicipalParque2unid_252,lyr_PrprioPblicoMunicipalPavilho1unid_253,lyr_PrprioPblicoMunicipalPinacoteca1unid_254,lyr_PrprioPblicoMunicipalPiscina1unid_255,lyr_PrprioPblicoMunicipalPista1unid_256,lyr_PrprioPblicoMunicipalPraa3unid_257,lyr_PrprioPblicoMunicipalQuadra3unid_258,lyr_PrprioPblicoMunicipalSecretaria1unid_259,lyr_PrprioPblicoMunicipalTeatro2unid_260,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo = new ol.layer.Group({
                                layers: [lyr_PBZPAEdifcioPrimeHELIPONTO_238,lyr_PBZPAEdifcioPrimeHELIPONTO_239,lyr_PBZPAHospitalHELIPONTO_240,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241,],
                                fold: 'close',
                                title: 'Controle Aéreo – Plano Básico de Zona de Proteção de Aeródromo'});
var group_LoteamentosCondomniosParcelamentodoSolo = new ol.layer.Group({
                                layers: [lyr_CondomnioIICityPetrpolis_96,lyr_CondomnioIICityPetrpolis_97,lyr_CondomnioICityPetrpolis_98,lyr_CondomnioICityPetrpolis_99,lyr_EmpreendimentoVillaBella_100,lyr_EmpreendimentoVillaBella_101,lyr_EmpreendimentoFazendaProgresso_102,lyr_EmpreendimentoFazendaProgresso_103,lyr_EmpreendimentoArizona_104,lyr_EmpreendimentoArizona_105,lyr_EmpreendimentoVilaDiEspanha_106,lyr_EmpreendimentoVilaDiEspanha_107,lyr_EmpreendimentoTerraNova_108,lyr_EmpreendimentoTerraNova_109,lyr_EmpreendimentoDiocesedeFranca_110,lyr_EmpreendimentoDiocesedeFranca_111,lyr_EmpreendimentoResidencialBoaVista_112,lyr_EmpreendimentoResidencialBoaVista_113,lyr_EmpreendimentoVillaDoratta_114,lyr_EmpreendimentoVillaDoratta_115,lyr_EmpreendimentoInfratcnica_116,lyr_EmpreendimentoInfratcnica_117,lyr_EmpreendimentoSoCarlosII_118,lyr_EmpreendimentoSoCarlosII_119,lyr_EmpreendimentoParqueFlora_120,lyr_EmpreendimentoParqueFlora_121,lyr_EmpreendimentoVittaSoVicente_122,lyr_EmpreendimentoVittaSoVicente_123,lyr_EmpreendimentoRecantoMeneghetti_124,lyr_EmpreendimentoRecantoMeneghetti_125,lyr_EmpreendimentoParquedosSabias_126,lyr_EmpreendimentoParquedosSabias_127,lyr_EmpreendimentoMoradadaMata_128,lyr_EmpreendimentoMoradadaMata_129,lyr_EmpreendimentoIrineuZanetiII_130,lyr_EmpreendimentoIrineuZanetiII_131,lyr_EmpreendimentoAdonis_132,lyr_EmpreendimentoAdonis_133,lyr_EmpreendimentoResidencialMarianaAlarcon_134,lyr_EmpreendimentoResidencialMarianaAlarcon_135,lyr_EmpreendimentoResidencialJabuticabeiras_136,lyr_EmpreendimentoResidencialJabuticabeiras_137,lyr_EmpreendimentoResidencialCintraAlves_138,lyr_EmpreendimentoResidencialCintraAlves_139,lyr_EmpreendimentoLoteamentolamo_140,lyr_EmpreendimentoLoteamentolamo_141,lyr_EmpreendimentoSantaLina_142,lyr_EmpreendimentoSantaLina_143,lyr_EmpreendimentoResidencialPousoAlegreII_144,lyr_EmpreendimentoResidencialPousoAlegreII_145,lyr_EmpreendimentoResidencialPousoAlegre_146,lyr_EmpreendimentoResidencialPousoAlegre_147,lyr_EmpreendimentoResidencialAltodaFazenda_148,lyr_EmpreendimentoResidencialAltodaFazenda_149,lyr_EmpreendimentoResidencialMarioTasso_150,lyr_EmpreendimentoResidencialMarioTasso_151,lyr_EmpreendimentoVivenna_152,lyr_EmpreendimentoVivenna_153,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155,lyr_EmprendimentoElias_156,lyr_EmprendimentoElias_157,lyr_EmpreendimentoResidencialSoCarlosI_158,lyr_EmpreendimentoResidencialSoCarlosI_159,lyr_EmpreendimentoMonti_160,lyr_EmpreendimentoMonti_161,lyr_EmpreendimentoResidencialMoradadoBosque_162,lyr_EmpreendimentoResidencialMoradadoBosque_163,lyr_EmpreendimentoVittaAlvorada_164,lyr_EmpreendimentoVittaAlvorada_165,lyr_EmpreendimentoResidencialMarthaHelena_166,lyr_EmpreendimentoResidencialMarthaHelena_167,lyr_EmpreendimentoResidencialYasminTorres_168,lyr_EmpreendimentoResidencialYasminTorres_169,lyr_EmpreendimentoPalmeiraReal_170,lyr_EmpreendimentoPalmeiraReal_171,lyr_EmpreendimentoEssence_172,lyr_EmpreendimentoEssence_173,lyr_EmpreendimentoVersalhes_174,lyr_EmpreendimentoVersalhes_175,lyr_EmpreendimentoSonetto_176,lyr_EmpreendimentoSonetto_177,lyr_EmpreendimentoResidencialSantaIns_178,lyr_EmpreendimentoResidencialSantaIns_179,lyr_EmpreendimentoEdifcioSolNascente_180,lyr_EmpreendimentoEdifcioSolNascente_181,lyr_EmpreendimentoResidencialQuintadosOitis_182,lyr_EmpreendimentoResidencialQuintadosOitis_183,lyr_EmpreendimentoResidencialQuintadoSol_184,lyr_EmpreendimentoResidencialQuintadoSol_185,lyr_EmpreendimentoParquePalmeiraImperial_186,lyr_EmpreendimentoParquePalmeiraImperial_187,lyr_EmpreendimentoBordadaMata_188,lyr_EmpreendimentoBordadaMata_189,lyr_EmpreendimentoEdifcioResidencialHope_190,lyr_EmpreendimentoEdifcioResidencialHope_191,lyr_EmpreendimentoHorizResidence_192,lyr_EmpreendimentoHorizResidence_193,lyr_EmpreendimentoJardimFlora_194,lyr_EmpreendimentoJardimFlora_195,lyr_EmpreendimentoJardimHorizonte_196,lyr_EmpreendimentoJardimHorizonte_197,lyr_EmpreendimentoJardimMariaLuiza_198,lyr_EmpreendimentoJardimMariaLuiza_199,lyr_EmpreendimentoMontBlancResidence_200,lyr_EmpreendimentoMontBlancResidence_201,lyr_EmpreendimentoMoradadoVerdeII_202,lyr_EmpreendimentoMoradadoVerdeII_203,lyr_EmpreendimentoParagonII_204,lyr_EmpreendimentoParagonII_205,lyr_EmpreendimentoParagon_206,lyr_EmpreendimentoParagon_207,lyr_EmpreendimentoParqueVillaLobos_208,lyr_EmpreendimentoParqueVillaLobos_209,lyr_EmpreendimentoDaVinci_210,lyr_EmpreendimentoDaVinci_211,lyr_EmpreendimentoResidencialDomingosJardini_212,lyr_EmpreendimentoResidencialDomingosJardini_213,lyr_EmpreendimentoResidencialSantaF_214,lyr_EmpreendimentoResidencialSantaF_215,lyr_EmpreendimentoEdifcioRuadoSol_216,lyr_EmpreendimentoEdifcioRuadoSol_217,lyr_EmpreendimentoTorontoResidence_218,lyr_EmpreendimentoTorontoResidence_219,lyr_EmpreendimentoVillaPucci_220,lyr_EmpreendimentoVillaPucci_221,lyr_EmpreendimentoFerracini_222,lyr_EmpreendimentoFerracini_223,lyr_EmpreendimentoColorado_224,lyr_EmpreendimentoColorado_225,lyr_EmpreendimentoResicencialNairRetuciII_226,lyr_EmpreendimentoResicencialNairRetuciII_227,lyr_EmpreendimentoResicencialNairRetuci_228,lyr_EmpreendimentoResicencialNairRetuci_229,lyr_EmpreendimentoCidadeJardim_230,lyr_EmpreendimentoCidadeJardim_231,lyr_ServidoRamal138kVFranca4Guanabara_232,lyr_ServidoRamal138kVFranca4Guanabara_233,lyr_EmpreendimentosAprovado27unid_234,lyr_EmpreendimentosDiretriz8unid_235,lyr_EmpreendimentosDefinitiva7unid_236,lyr_EmpreendimentosPrvia24unid_237,],
                                fold: 'close',
                                title: 'Loteamentos/Condomínios – Parcelamento do Solo'});
var group_SistemaVirio = new ol.layer.Group({
                                layers: [lyr_SistemaVirioExpansodosistemavirio_87,lyr_SistemaVirioRodovias_88,lyr_SistemaVirioRodoviasViasarteriais_89,lyr_SistemaVirioSistemavirioprincipal_90,lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91,lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92,lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93,lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94,lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95,],
                                fold: 'close',
                                title: 'Sistema Viário'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74,lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75,lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76,lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77,lyr_MacrozonasMacrozonadoRioCanoas_78,lyr_MacrozonasSubMacrozonadeExpansoUrbana_79,lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80,lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81,lyr_ExpansoUrbanaLCN0502003_82,lyr_ExpansoUrbanaLCN1402009_83,lyr_ExpansoUrbanaLCN2352013_84,lyr_ExpansoUrbanaLCN3242019_85,lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86,],
                                fold: 'close',
                                title: 'Zoneamento'});
var group_LoteamentosRegularizadosREURB = new ol.layer.Group({
                                layers: [lyr_LoteamentosRegularizados9unid_72,lyr_LoteamentosRegularizados9unid_73,],
                                fold: 'close',
                                title: 'Loteamentos Regularizados - REURB'});
var group_LoteamentosClandestinos = new ol.layer.Group({
                                layers: [lyr_LoteamentosClandestinosEmmonitoramento1unid_62,lyr_LoteamentosClandestinosEmregularizao36unid_63,lyr_LoteamentosClandestinosNotificado4unid_64,lyr_LoteamentosClandestinosNotificar25unid_65,lyr_LoteamentosClandestinosVerificar2unid_66,lyr_LoteamentosClandestinosEmmonitoramento1unid_67,lyr_LoteamentosClandestinosEmregularizao36unid_68,lyr_LoteamentosClandestinosNotificado4unid_69,lyr_LoteamentosClandestinosNotificar25unid_70,lyr_LoteamentosClandestinosVerificar2unid_71,],
                                fold: 'close',
                                title: 'Loteamentos Clandestinos'});
var group_SecretariadeEducaoUnidadesEscolares = new ol.layer.Group({
                                layers: [lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49,lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50,lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51,lyr_UnidadesEscolaresCreche35unid_52,lyr_UnidadesEscolaresCrechePrEscola45unid_53,lyr_UnidadesEscolaresEdInfantil9unid_54,lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55,lyr_UnidadesEscolaresEJA3unid_56,lyr_UnidadesEscolaresEnsFundamental3unid_57,lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58,lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59,lyr_UnidadesEscolaresSetordeMerenda1unid_60,lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61,],
                                fold: 'close',
                                title: 'Secretaria de Educação - Unidades Escolares'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_35,lyr_LoteEMDEF10unid_36,lyr_LeiloLEIN97542025240unid6019315m_37,lyr_LeiloLEIN97542025240unid_38,lyr_LoteEdificao20unid508062m_39,lyr_LoteEdificao20unid_40,lyr_Lote251unid7505210m_41,lyr_Lote251unid_42,lyr_APP156unid230392892m_43,lyr_readeUsoEspecial276unid271190268m_44,lyr_reaInstitucional224unid133042345m_45,lyr_reaPatrimonial33unid15776685m_46,lyr_LoteamentoFechado115unid52603608m_47,lyr_reaVerde1946unid805735618m_48,],
                                fold: 'close',
                                title: 'Áreas Públicas'});
var group_FazendaMunicipalPousoAlto = new ol.layer.Group({
                                layers: [lyr_reaN_19,lyr_ConjuntoHabitacional_20,lyr_AvdeacessoaoHortoeColgioAgrcola_21,lyr_reaK_22,lyr_reaJ_23,lyr_reaI_24,lyr_reaH_25,lyr_reaG_26,lyr_reaF_27,lyr_reaE_28,lyr_reaD_29,lyr_reaC_30,lyr_reaB_31,lyr_reaA_32,lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33,lyr_reaaseraverbadaPartedareaG_34,],
                                fold: 'close',
                                title: 'Fazenda Municipal Pouso Alto'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP1745unid_14,lyr_RiosDuplos84unid_15,lyr_MassasDgua270unid_16,lyr_RiosSimples1842unid_17,lyr_Nascentes821unid_18,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_Bairros383unidRegies9unid = new ol.layer.Group({
                                layers: [lyr_RegioCentroLeste42unid675453694m_5,lyr_RegioLesteNordeste50unid1233454938m_6,lyr_RegioNorteI45unid1043752016m_7,lyr_RegioNorteII36unid859331837m_8,lyr_RegioOesteI65unid1245065890m_9,lyr_RegioOesteII43unid599615871m_10,lyr_RegioSudeste38unid579321135m_11,lyr_RegioSudesteSul44unid830633497m_12,lyr_RegioSul20unid639964086m_13,],
                                fold: 'close',
                                title: 'Bairros (383 unid.) / Regiões (9 unid.)'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_RegioCentroLeste42unid675453694m_5.setVisible(false);lyr_RegioLesteNordeste50unid1233454938m_6.setVisible(false);lyr_RegioNorteI45unid1043752016m_7.setVisible(false);lyr_RegioNorteII36unid859331837m_8.setVisible(false);lyr_RegioOesteI65unid1245065890m_9.setVisible(false);lyr_RegioOesteII43unid599615871m_10.setVisible(false);lyr_RegioSudeste38unid579321135m_11.setVisible(false);lyr_RegioSudesteSul44unid830633497m_12.setVisible(false);lyr_RegioSul20unid639964086m_13.setVisible(false);lyr_APP1745unid_14.setVisible(false);lyr_RiosDuplos84unid_15.setVisible(false);lyr_MassasDgua270unid_16.setVisible(false);lyr_RiosSimples1842unid_17.setVisible(false);lyr_Nascentes821unid_18.setVisible(false);lyr_reaN_19.setVisible(false);lyr_ConjuntoHabitacional_20.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_21.setVisible(false);lyr_reaK_22.setVisible(false);lyr_reaJ_23.setVisible(false);lyr_reaI_24.setVisible(false);lyr_reaH_25.setVisible(false);lyr_reaG_26.setVisible(false);lyr_reaF_27.setVisible(false);lyr_reaE_28.setVisible(false);lyr_reaD_29.setVisible(false);lyr_reaC_30.setVisible(false);lyr_reaB_31.setVisible(false);lyr_reaA_32.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.setVisible(false);lyr_reaaseraverbadaPartedareaG_34.setVisible(false);lyr_LoteEMDEF10unid218783m_35.setVisible(false);lyr_LoteEMDEF10unid_36.setVisible(false);lyr_LeiloLEIN97542025240unid6019315m_37.setVisible(false);lyr_LeiloLEIN97542025240unid_38.setVisible(false);lyr_LoteEdificao20unid508062m_39.setVisible(false);lyr_LoteEdificao20unid_40.setVisible(false);lyr_Lote251unid7505210m_41.setVisible(false);lyr_Lote251unid_42.setVisible(false);lyr_APP156unid230392892m_43.setVisible(false);lyr_readeUsoEspecial276unid271190268m_44.setVisible(false);lyr_reaInstitucional224unid133042345m_45.setVisible(false);lyr_reaPatrimonial33unid15776685m_46.setVisible(false);lyr_LoteamentoFechado115unid52603608m_47.setVisible(false);lyr_reaVerde1946unid805735618m_48.setVisible(false);lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.setVisible(false);lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50.setVisible(false);lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.setVisible(false);lyr_UnidadesEscolaresCreche35unid_52.setVisible(false);lyr_UnidadesEscolaresCrechePrEscola45unid_53.setVisible(false);lyr_UnidadesEscolaresEdInfantil9unid_54.setVisible(false);lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.setVisible(false);lyr_UnidadesEscolaresEJA3unid_56.setVisible(false);lyr_UnidadesEscolaresEnsFundamental3unid_57.setVisible(false);lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.setVisible(false);lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.setVisible(false);lyr_UnidadesEscolaresSetordeMerenda1unid_60.setVisible(false);lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.setVisible(false);lyr_LoteamentosClandestinosEmmonitoramento1unid_62.setVisible(false);lyr_LoteamentosClandestinosEmregularizao36unid_63.setVisible(false);lyr_LoteamentosClandestinosNotificado4unid_64.setVisible(false);lyr_LoteamentosClandestinosNotificar25unid_65.setVisible(false);lyr_LoteamentosClandestinosVerificar2unid_66.setVisible(false);lyr_LoteamentosClandestinosEmmonitoramento1unid_67.setVisible(false);lyr_LoteamentosClandestinosEmregularizao36unid_68.setVisible(false);lyr_LoteamentosClandestinosNotificado4unid_69.setVisible(false);lyr_LoteamentosClandestinosNotificar25unid_70.setVisible(false);lyr_LoteamentosClandestinosVerificar2unid_71.setVisible(false);lyr_LoteamentosRegularizados9unid_72.setVisible(false);lyr_LoteamentosRegularizados9unid_73.setVisible(false);lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.setVisible(false);lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.setVisible(false);lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.setVisible(false);lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.setVisible(false);lyr_MacrozonasMacrozonadoRioCanoas_78.setVisible(false);lyr_MacrozonasSubMacrozonadeExpansoUrbana_79.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80.setVisible(false);lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81.setVisible(false);lyr_ExpansoUrbanaLCN0502003_82.setVisible(false);lyr_ExpansoUrbanaLCN1402009_83.setVisible(false);lyr_ExpansoUrbanaLCN2352013_84.setVisible(false);lyr_ExpansoUrbanaLCN3242019_85.setVisible(false);lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.setVisible(false);lyr_SistemaVirioExpansodosistemavirio_87.setVisible(false);lyr_SistemaVirioRodovias_88.setVisible(false);lyr_SistemaVirioRodoviasViasarteriais_89.setVisible(false);lyr_SistemaVirioSistemavirioprincipal_90.setVisible(false);lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93.setVisible(false);lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.setVisible(false);lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.setVisible(false);lyr_CondomnioIICityPetrpolis_96.setVisible(false);lyr_CondomnioIICityPetrpolis_97.setVisible(false);lyr_CondomnioICityPetrpolis_98.setVisible(false);lyr_CondomnioICityPetrpolis_99.setVisible(false);lyr_EmpreendimentoVillaBella_100.setVisible(false);lyr_EmpreendimentoVillaBella_101.setVisible(false);lyr_EmpreendimentoFazendaProgresso_102.setVisible(false);lyr_EmpreendimentoFazendaProgresso_103.setVisible(false);lyr_EmpreendimentoArizona_104.setVisible(false);lyr_EmpreendimentoArizona_105.setVisible(false);lyr_EmpreendimentoVilaDiEspanha_106.setVisible(false);lyr_EmpreendimentoVilaDiEspanha_107.setVisible(false);lyr_EmpreendimentoTerraNova_108.setVisible(false);lyr_EmpreendimentoTerraNova_109.setVisible(false);lyr_EmpreendimentoDiocesedeFranca_110.setVisible(false);lyr_EmpreendimentoDiocesedeFranca_111.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_112.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_113.setVisible(false);lyr_EmpreendimentoVillaDoratta_114.setVisible(false);lyr_EmpreendimentoVillaDoratta_115.setVisible(false);lyr_EmpreendimentoInfratcnica_116.setVisible(false);lyr_EmpreendimentoInfratcnica_117.setVisible(false);lyr_EmpreendimentoSoCarlosII_118.setVisible(false);lyr_EmpreendimentoSoCarlosII_119.setVisible(false);lyr_EmpreendimentoParqueFlora_120.setVisible(false);lyr_EmpreendimentoParqueFlora_121.setVisible(false);lyr_EmpreendimentoVittaSoVicente_122.setVisible(false);lyr_EmpreendimentoVittaSoVicente_123.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_124.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_125.setVisible(false);lyr_EmpreendimentoParquedosSabias_126.setVisible(false);lyr_EmpreendimentoParquedosSabias_127.setVisible(false);lyr_EmpreendimentoMoradadaMata_128.setVisible(false);lyr_EmpreendimentoMoradadaMata_129.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_130.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_131.setVisible(false);lyr_EmpreendimentoAdonis_132.setVisible(false);lyr_EmpreendimentoAdonis_133.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_134.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_135.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_136.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_137.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_138.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_139.setVisible(false);lyr_EmpreendimentoLoteamentolamo_140.setVisible(false);lyr_EmpreendimentoLoteamentolamo_141.setVisible(false);lyr_EmpreendimentoSantaLina_142.setVisible(false);lyr_EmpreendimentoSantaLina_143.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_144.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_145.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_146.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_147.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_148.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_149.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_150.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_151.setVisible(false);lyr_EmpreendimentoVivenna_152.setVisible(false);lyr_EmpreendimentoVivenna_153.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155.setVisible(false);lyr_EmprendimentoElias_156.setVisible(false);lyr_EmprendimentoElias_157.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_158.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_159.setVisible(false);lyr_EmpreendimentoMonti_160.setVisible(false);lyr_EmpreendimentoMonti_161.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_162.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_163.setVisible(false);lyr_EmpreendimentoVittaAlvorada_164.setVisible(false);lyr_EmpreendimentoVittaAlvorada_165.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_166.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_167.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_168.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_169.setVisible(false);lyr_EmpreendimentoPalmeiraReal_170.setVisible(false);lyr_EmpreendimentoPalmeiraReal_171.setVisible(false);lyr_EmpreendimentoEssence_172.setVisible(false);lyr_EmpreendimentoEssence_173.setVisible(false);lyr_EmpreendimentoVersalhes_174.setVisible(false);lyr_EmpreendimentoVersalhes_175.setVisible(false);lyr_EmpreendimentoSonetto_176.setVisible(false);lyr_EmpreendimentoSonetto_177.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_178.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_179.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_180.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_181.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_182.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_183.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_184.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_185.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_186.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_187.setVisible(false);lyr_EmpreendimentoBordadaMata_188.setVisible(false);lyr_EmpreendimentoBordadaMata_189.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_190.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_191.setVisible(false);lyr_EmpreendimentoHorizResidence_192.setVisible(false);lyr_EmpreendimentoHorizResidence_193.setVisible(false);lyr_EmpreendimentoJardimFlora_194.setVisible(false);lyr_EmpreendimentoJardimFlora_195.setVisible(false);lyr_EmpreendimentoJardimHorizonte_196.setVisible(false);lyr_EmpreendimentoJardimHorizonte_197.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_198.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_199.setVisible(false);lyr_EmpreendimentoMontBlancResidence_200.setVisible(false);lyr_EmpreendimentoMontBlancResidence_201.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_202.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_203.setVisible(false);lyr_EmpreendimentoParagonII_204.setVisible(false);lyr_EmpreendimentoParagonII_205.setVisible(false);lyr_EmpreendimentoParagon_206.setVisible(false);lyr_EmpreendimentoParagon_207.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_208.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_209.setVisible(false);lyr_EmpreendimentoDaVinci_210.setVisible(false);lyr_EmpreendimentoDaVinci_211.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_212.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_213.setVisible(false);lyr_EmpreendimentoResidencialSantaF_214.setVisible(false);lyr_EmpreendimentoResidencialSantaF_215.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_216.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_217.setVisible(false);lyr_EmpreendimentoTorontoResidence_218.setVisible(false);lyr_EmpreendimentoTorontoResidence_219.setVisible(false);lyr_EmpreendimentoVillaPucci_220.setVisible(false);lyr_EmpreendimentoVillaPucci_221.setVisible(false);lyr_EmpreendimentoFerracini_222.setVisible(false);lyr_EmpreendimentoFerracini_223.setVisible(false);lyr_EmpreendimentoColorado_224.setVisible(false);lyr_EmpreendimentoColorado_225.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_226.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_227.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_228.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_229.setVisible(false);lyr_EmpreendimentoCidadeJardim_230.setVisible(false);lyr_EmpreendimentoCidadeJardim_231.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_232.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_233.setVisible(false);lyr_EmpreendimentosAprovado27unid_234.setVisible(false);lyr_EmpreendimentosDiretriz8unid_235.setVisible(false);lyr_EmpreendimentosDefinitiva7unid_236.setVisible(false);lyr_EmpreendimentosPrvia24unid_237.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_238.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_239.setVisible(false);lyr_PBZPAHospitalHELIPONTO_240.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.setVisible(false);lyr_PrprioPblicoMunicipalArena3unid_242.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_243.setVisible(false);lyr_PrprioPblicoMunicipalCampo18unid_244.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_245.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_246.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL12unid_247.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_248.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_249.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_250.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_251.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_252.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_253.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_254.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_255.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_256.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_257.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_258.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_259.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_260.setVisible(false);lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261.setVisible(false);lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262.setVisible(false);lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.setVisible(false);lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.setVisible(false);lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265.setVisible(false);lyr_ParqueZumbidosPalmares_266.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.setVisible(false);lyr_AntigoAterrodasMaritacas_269.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_273.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.setVisible(false);lyr_ARORemanescentesFlorestais_276.setVisible(false);lyr_AROreadeAmortecimento_277.setVisible(false);lyr_AROFaixadeCuestas_278.setVisible(false);lyr_AROAPP_279.setVisible(false);lyr_ARAIncongrunciasemAPP_280.setVisible(false);lyr_ARAETELagoas_281.setVisible(false);lyr_ARAAterros_282.setVisible(false);lyr_AODreaUrbanaConsolidada_283.setVisible(false);lyr_AODBaixaDensidadeNvel3_284.setVisible(false);lyr_AODBaixaDensidadeNvel2_285.setVisible(false);lyr_AODBaixaDensidadeNvel1_286.setVisible(false);lyr_AODAUSFase2_287.setVisible(false);lyr_AODAUSFase1_288.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_289.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_290.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_291.setVisible(false);lyr_AoCivilPblica1unid_292.setVisible(false);lyr_AoCivilPblica1unid_293.setVisible(false);lyr_CartaAnuncia20unid_294.setVisible(false);lyr_CartaAnuncia20unid_295.setVisible(false);lyr_PlantioVoluntrio1unid_296.setVisible(false);lyr_PlantioVoluntrio1unid_297.setVisible(false);lyr_TACMinistrioPblico9unid_298.setVisible(false);lyr_TACMinistrioPblico9unid_299.setVisible(false);lyr_TCRACETESB28unid_300.setVisible(false);lyr_TCRACETESB28unid_301.setVisible(false);lyr_TCRACETESBPARCELAMENTO11unid_302.setVisible(false);lyr_TCRACETESBPARCELAMENTO11unid_303.setVisible(false);lyr_TCRAMunicipal14unid_304.setVisible(false);lyr_TCRAMunicipal14unid_305.setVisible(false);lyr_TRPRLCETESB2unid_306.setVisible(false);lyr_TRPRLCETESB2unid_307.setVisible(false);lyr_JardimZoobotnicoDelimitao_308.setVisible(false);lyr_JardimZoobotnicoTrajetos_309.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_310.setVisible(false);lyr_ParquedosTrabalhadores_311.setVisible(false);lyr_ParquedosTrabalhadores_312.setVisible(false);lyr_ComplexoPoliesportivo_313.setVisible(false);lyr_ComplexoPoliesportivo_314.setVisible(false);lyr_ParqueCaxambu_315.setVisible(false);lyr_ParqueCaxambu_316.setVisible(false);lyr_ParquedeExposiesFernandoCosta_317.setVisible(false);lyr_ParquedeExposiesFernandoCosta_318.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.setVisible(false);lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_321.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_322.setVisible(false);lyr_ProgramaAdoteUmaPraa315unid30277327m_323.setVisible(false);lyr_ComPlacaDilu161unid17007212m_324.setVisible(false);lyr_ComPlacaEgnaldo134unid12211725m_325.setVisible(false);lyr_SemPlacaDilu16unid774541m_326.setVisible(false);lyr_SemPlacaEgnaldo4unid86447m_327.setVisible(false);lyr_LotesImvelPrivado95unid_328.setVisible(false);lyr_ImvelPrivado95unid_329.setVisible(false);lyr_ImvelRural1unid_330.setVisible(false);lyr_ImvelPblico118unid_331.setVisible(false);lyr_RodoviasEstaduais4unid_332.setVisible(false);lyr_EstradasRuraisMunicipais34unid_333.setVisible(false);lyr_RodoviasMunicipais8unid_334.setVisible(false);lyr_Gesso1unid_335.setVisible(false);lyr_ResduosdeConstruoCivil7unid_336.setVisible(false);lyr_ResduosVerdes1unid_337.setVisible(false);lyr_ChapasdeRaioX1unid_338.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_339.setVisible(false);lyr_leodecozinhausado2unid_340.setVisible(false);lyr_leolubrificanteusado1unid_341.setVisible(false);lyr_Latasdetintametlicasvazias2unid_342.setVisible(false);lyr_ResduosPerigosos1unid_343.setVisible(false);lyr_Madeiras1unid_344.setVisible(false);lyr_ResduosdeServiosdeSade21unid_345.setVisible(false);lyr_PilhaseBaterias17unid_346.setVisible(false);lyr_Pneus1unid_347.setVisible(false);lyr_Lmpadas4unid_348.setVisible(false);lyr_ResduosdeCouro1unid_349.setVisible(false);lyr_ResduosEletrnicos2unid_350.setVisible(false);lyr_ResduosReciclveis15unid_351.setVisible(false);lyr_ResduosInservveis4unid_352.setVisible(false);lyr_Contineres286unid_353.setVisible(false);lyr_rvoreImuneaoCorte9unid_354.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_355.setVisible(false);lyr_AcademiasaoArLivre84unid_356.setVisible(false);lyr_Voorocas26unid_357.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_Bairros383unidRegies9unid,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SecretariadeEducaoUnidadesEscolares,group_LoteamentosClandestinos,group_LoteamentosRegularizadosREURB,group_Zoneamento,group_SistemaVirio,group_LoteamentosCondomniosParcelamentodoSolo,group_ControleAreoPlanoBsicodeZonadeProteodeAerdromo,group_SecretariadeEsporteeCultura,group_SecretariadeSade,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,group_ParquesdeFranca,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_RodoviaseEstradas,group_DescarteCorretodeResduos,lyr_Contineres286unid_353,lyr_rvoreImuneaoCorte9unid_354,lyr_LocaisdeDifcilAcessoereasRurais20unid_355,lyr_AcademiasaoArLivre84unid_356,lyr_Voorocas26unid_357];
lyr_LimiteMunicipaldeFranca_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_reaUrbanadeFranca_4.set('fieldAliases', {'fid': 'fid', 'Código do Município': 'Código do Município', 'Nome do Município': 'Nome do Município', 'UF': 'UF', 'Código da UF': 'Código da UF', 'Classe de Uso': 'Classe de Uso', 'Área (ha)': 'Área (ha)', 'Área (km²)': 'Área (km²)', });
lyr_RegioCentroLeste42unid675453694m_5.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioLesteNordeste50unid1233454938m_6.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteI45unid1043752016m_7.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioNorteII36unid859331837m_8.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteI65unid1245065890m_9.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioOesteII43unid599615871m_10.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudeste38unid579321135m_11.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSudesteSul44unid830633497m_12.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_RegioSul20unid639964086m_13.set('fieldAliases', {'fid': 'fid', 'nome': 'Bairro', 'm2': 'Área (m²)', 'regiao': 'Região', });
lyr_APP1745unid_14.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos84unid_15.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_MassasDgua270unid_16.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples1842unid_17.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes821unid_18.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_reaN_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_ConjuntoHabitacional_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_AvdeacessoaoHortoeColgioAgrcola_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaK_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaJ_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaI_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaH_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaG_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaF_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaE_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaD_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaC_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaB_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaA_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_reaaseraverbadaPartedareaG_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Propriedade': 'Propriedade', 'Área': 'Área', 'Matrícula': 'Matrícula', 'Área (m²)': 'Área (m²)', 'Área (ha)': 'Área (ha)', });
lyr_LoteEMDEF10unid218783m_35.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_36.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_LeiloLEIN97542025240unid6019315m_37.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'Processo', });
lyr_LeiloLEIN97542025240unid_38.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'Lote/Quadra', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'Processo', });
lyr_LoteEdificao20unid508062m_39.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_LoteEdificao20unid_40.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'data_inclusao', 'regiao': 'regiao', 'processo': 'processo', });
lyr_Lote251unid7505210m_41.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_Lote251unid_42.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP156unid230392892m_43.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial276unid271190268m_44.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional224unid133042345m_45.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial33unid15776685m_46.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado115unid52603608m_47.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaVerde1946unid805735618m_48.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'descricao': 'descricao', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'Processo', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCreche35unid_52.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresCrechePrEscola45unid_53.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEdInfantil9unid_54.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEJA3unid_56.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEnsFundamental3unid_57.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresSetordeMerenda1unid_60.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', 'unidade': 'UNIDADE', 'lat': 'lat', 'log': 'log', 'endereco': 'ENDEREÇO', 'rede': 'REDE', 'regiao': 'REGIÃO', 'unidade_escolar': 'UNIDADE ESCOLAR', 'etapa': 'ETAPA', 'atendimento': 'ATENDIMENTO', 'telefone': 'TELEFONE', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_62.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmregularizao36unid_63.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificado4unid_64.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificar25unid_65.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosVerificar2unid_66.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_67.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosEmregularizao36unid_68.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificado4unid_69.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosNotificar25unid_70.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosClandestinosVerificar2unid_71.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosRegularizados9unid_72.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_LoteamentosRegularizados9unid_73.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.set('fieldAliases', {'fid': 'fid', 'zona_especial': 'zona_especial', });
lyr_MacrozonasMacrozonadoRioCanoas_78.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_79.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81.set('fieldAliases', {'fid': 'fid', 'macrozona_urbana': 'macrozona_urbana', });
lyr_ExpansoUrbanaLCN0502003_82.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN1402009_83.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN2352013_84.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaLCN3242019_85.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.set('fieldAliases', {'fid': 'fid', 'zona_expansao': 'zona_expansao', });
lyr_SistemaVirioExpansodosistemavirio_87.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodovias_88.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioRodoviasViasarteriais_89.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_SistemaVirioSistemavirioprincipal_90.set('fieldAliases', {'fid': 'fid', 'sistema_viario': 'sistema_viario', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.set('fieldAliases', {'fid': 'fid', 'viario_zona_sul': 'viario_zona_sul', });
lyr_CondomnioIICityPetrpolis_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVilaDiEspanha_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVilaDiEspanha_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTerraNova_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTerraNova_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDiocesedeFranca_110.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDiocesedeFranca_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratcnica_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratcnica_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_149.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVivenna_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVivenna_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_177.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_193.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_194.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_195.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_196.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_197.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_198.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_199.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_200.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_201.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_202.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_203.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_204.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_205.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_206.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_207.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_208.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_209.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_210.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_211.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_212.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_213.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_214.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_215.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_216.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_217.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_218.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_219.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_220.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_221.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_222.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_223.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_224.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_225.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_226.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_227.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_228.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_229.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_230.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_231.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_232.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_233.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_234.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz8unid_235.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva7unid_236.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia24unid_237.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_238.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_239.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_240.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PrprioPblicoMunicipalArena3unid_242.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_243.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCampo18unid_244.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCasa1unid_245.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCentro4unid_246.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCEPEL12unid_247.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalConjunto4unid_248.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalEstadio1unid_249.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalGinsio5unid_250.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalMuseu2unid_251.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalParque2unid_252.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPavilho1unid_253.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_254.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPiscina1unid_255.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPista1unid_256.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPraa3unid_257.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalQuadra3unid_258.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalSecretaria1unid_259.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalTeatro2unid_260.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_ParqueZumbidosPalmares_266.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_269.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_273.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_276.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_277.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_278.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_279.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_280.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_281.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_282.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_283.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_284.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_285.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_286.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_287.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_288.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_289.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_290.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_291.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_292.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_293.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_294.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia20unid_295.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_296.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_297.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_298.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_299.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_300.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_301.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO11unid_302.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESBPARCELAMENTO11unid_303.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'proc_cetesb', });
lyr_TCRAMunicipal14unid_304.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_305.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_306.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_307.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_JardimZoobotnicoDelimitao_308.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_309.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_310.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_311.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_312.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_313.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_314.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_315.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_316.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_317.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_318.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_321.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_322.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_323.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu161unid17007212m_324.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_ComPlacaEgnaldo134unid12211725m_325.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaDilu16unid774541m_326.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaEgnaldo4unid86447m_327.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_LotesImvelPrivado95unid_328.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', '_BAIRRO': '_BAIRRO', '_RUA': '_RUA', '_processo_seinfra': 'Processo SEINFRA', '_processo_sms': 'Processo SMS', '_processo_mp': 'Pocesso MP', '_processo_smseg': 'Processo SMSEG', '_outros_processos': 'Outos Processos', '_data_inclusao': 'Data de Inclusão', });
lyr_ImvelPrivado95unid_329.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelRural1unid_330.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelPblico118unid_331.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_RodoviasEstaduais4unid_332.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_333.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_334.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_Gesso1unid_335.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_336.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_337.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_338.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_339.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_340.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_341.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_342.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_343.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_344.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_345.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias17unid_346.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_347.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_348.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_349.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_350.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_351.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_352.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_353.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_354.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_355.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_AcademiasaoArLivre84unid_356.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_Voorocas26unid_357.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
lyr_LimiteMunicipaldeFranca_3.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'CD_CONCU': '', 'NM_CONCU': '', 'AREA_KM2': '', });
lyr_reaUrbanadeFranca_4.set('fieldImages', {'fid': '', 'Código do Município': '', 'Nome do Município': '', 'UF': '', 'Código da UF': '', 'Classe de Uso': '', 'Área (ha)': '', 'Área (km²)': '', });
lyr_RegioCentroLeste42unid675453694m_5.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioLesteNordeste50unid1233454938m_6.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteI45unid1043752016m_7.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioNorteII36unid859331837m_8.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteI65unid1245065890m_9.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioOesteII43unid599615871m_10.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudeste38unid579321135m_11.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSudesteSul44unid830633497m_12.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_RegioSul20unid639964086m_13.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'm2': 'TextEdit', 'regiao': 'TextEdit', });
lyr_APP1745unid_14.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos84unid_15.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MassasDgua270unid_16.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples1842unid_17.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes821unid_18.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_reaN_19.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_ConjuntoHabitacional_20.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_AvdeacessoaoHortoeColgioAgrcola_21.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaK_22.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaJ_23.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaI_24.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaH_25.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaG_26.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaF_27.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaE_28.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaD_29.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaC_30.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaB_31.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaA_32.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_reaaseraverbadaPartedareaG_34.set('fieldImages', {'fid': '', 'id': '', 'Propriedade': '', 'Área': '', 'Matrícula': '', 'Área (m²)': '', 'Área (ha)': '', });
lyr_LoteEMDEF10unid218783m_35.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteEMDEF10unid_36.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_LeiloLEIN97542025240unid6019315m_37.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LeiloLEIN97542025240unid_38.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid508062m_39.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_LoteEdificao20unid_40.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': '', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_Lote251unid7505210m_41.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_Lote251unid_42.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP156unid230392892m_43.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_readeUsoEspecial276unid271190268m_44.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaInstitucional224unid133042345m_45.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaPatrimonial33unid15776685m_46.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteamentoFechado115unid52603608m_47.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaVerde1946unid805735618m_48.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'descricao': '', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCreche35unid_52.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresCrechePrEscola45unid_53.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEdInfantil9unid_54.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEJA3unid_56.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEnsFundamental3unid_57.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresSetordeMerenda1unid_60.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'unidade': 'TextEdit', 'lat': 'TextEdit', 'log': 'TextEdit', 'endereco': 'TextEdit', 'rede': 'TextEdit', 'regiao': 'TextEdit', 'unidade_escolar': 'TextEdit', 'etapa': 'TextEdit', 'atendimento': 'TextEdit', 'telefone': 'TextEdit', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_62.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosEmregularizao36unid_63.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosNotificado4unid_64.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosNotificar25unid_65.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosVerificar2unid_66.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_67.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosEmregularizao36unid_68.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosNotificado4unid_69.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosNotificar25unid_70.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosClandestinosVerificar2unid_71.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_LoteamentosRegularizados9unid_72.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_LoteamentosRegularizados9unid_73.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.set('fieldImages', {'fid': '', 'zona_especial': '', });
lyr_MacrozonasMacrozonadoRioCanoas_78.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_79.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80.set('fieldImages', {'fid': 'TextEdit', 'macrozona_urbana': 'TextEdit', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81.set('fieldImages', {'fid': '', 'macrozona_urbana': '', });
lyr_ExpansoUrbanaLCN0502003_82.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN1402009_83.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN2352013_84.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaLCN3242019_85.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.set('fieldImages', {'fid': '', 'zona_expansao': '', });
lyr_SistemaVirioExpansodosistemavirio_87.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodovias_88.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioRodoviasViasarteriais_89.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_SistemaVirioSistemavirioprincipal_90.set('fieldImages', {'fid': '', 'sistema_viario': '', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.set('fieldImages', {'fid': '', 'viario_zona_sul': '', });
lyr_CondomnioIICityPetrpolis_96.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_100.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVilaDiEspanha_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVilaDiEspanha_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTerraNova_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTerraNova_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDiocesedeFranca_110.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDiocesedeFranca_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratcnica_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratcnica_117.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_118.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_120.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_122.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_123.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_126.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_128.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_130.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_132.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_136.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_138.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_140.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_142.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_144.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_149.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVivenna_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVivenna_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_156.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_157.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_159.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_161.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_165.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_167.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_169.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_171.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_175.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_177.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_179.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_181.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_183.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_193.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_194.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_195.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_196.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_197.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_198.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_199.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_200.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_201.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_202.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_203.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_204.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_205.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_206.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_207.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_208.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_209.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_210.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_211.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_212.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_213.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_214.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_215.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_216.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_217.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_218.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_219.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_220.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_221.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_222.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_223.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_224.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_225.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_226.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_227.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_228.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_229.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_230.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_231.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_232.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_233.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_234.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz8unid_235.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva7unid_236.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia24unid_237.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_238.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_239.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_240.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PrprioPblicoMunicipalArena3unid_242.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_243.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCampo18unid_244.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCasa1unid_245.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCentro4unid_246.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCEPEL12unid_247.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalConjunto4unid_248.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalEstadio1unid_249.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalGinsio5unid_250.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalMuseu2unid_251.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalParque2unid_252.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPavilho1unid_253.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_254.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPiscina1unid_255.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPista1unid_256.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPraa3unid_257.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalQuadra3unid_258.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalSecretaria1unid_259.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalTeatro2unid_260.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ParqueZumbidosPalmares_266.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_269.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_273.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_276.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_277.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_278.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_279.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_280.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_281.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_282.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_283.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_284.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_285.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_286.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_287.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': 'TextEdit', 'desc_classe': 'TextEdit', });
lyr_AODAUSFase1_288.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_289.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_290.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_291.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_292.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_293.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_294.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia20unid_295.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_296.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_297.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_298.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_299.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_300.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_301.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRACETESBPARCELAMENTO11unid_302.set('fieldImages', {'fid': '', 'Name': '', 'Area': '', 'quant': '', 'proc_cetesb': '', });
lyr_TCRACETESBPARCELAMENTO11unid_303.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRAMunicipal14unid_304.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_305.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_306.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_307.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_308.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_309.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_310.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_311.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_312.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_313.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_314.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_315.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_316.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_317.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_318.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_ParqueAmbientalLuprcioTaveira_321.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_322.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_323.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu161unid17007212m_324.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_ComPlacaEgnaldo134unid12211725m_325.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SemPlacaDilu16unid774541m_326.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_SemPlacaEgnaldo4unid86447m_327.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_LotesImvelPrivado95unid_328.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', '_BAIRRO': 'TextEdit', '_RUA': 'TextEdit', '_processo_seinfra': 'TextEdit', '_processo_sms': 'TextEdit', '_processo_mp': 'TextEdit', '_processo_smseg': 'TextEdit', '_outros_processos': 'TextEdit', '_data_inclusao': 'DateTime', });
lyr_ImvelPrivado95unid_329.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelRural1unid_330.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_ImvelPblico118unid_331.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', 'data_inclusao': '', });
lyr_RodoviasEstaduais4unid_332.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_333.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_334.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_Gesso1unid_335.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_336.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_337.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_338.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_339.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_340.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_341.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_342.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_343.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_344.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_345.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias17unid_346.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_347.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_348.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeCouro1unid_349.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_350.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_351.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosInservveis4unid_352.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Contineres286unid_353.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_354.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_355.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_356.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_Voorocas26unid_357.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
lyr_LimiteMunicipaldeFranca_3.set('fieldLabels', {'fid': 'hidden field', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_reaUrbanadeFranca_4.set('fieldLabels', {'fid': 'hidden field', 'Código do Município': 'inline label - visible with data', 'Nome do Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Código da UF': 'hidden field', 'Classe de Uso': 'hidden field', 'Área (ha)': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_RegioCentroLeste42unid675453694m_5.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioLesteNordeste50unid1233454938m_6.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteI45unid1043752016m_7.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioNorteII36unid859331837m_8.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteI65unid1245065890m_9.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioOesteII43unid599615871m_10.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudeste38unid579321135m_11.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSudesteSul44unid830633497m_12.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_RegioSul20unid639964086m_13.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'regiao': 'inline label - visible with data', });
lyr_APP1745unid_14.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_RiosDuplos84unid_15.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_MassasDgua270unid_16.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples1842unid_17.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes821unid_18.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_reaN_19.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_ConjuntoHabitacional_20.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_AvdeacessoaoHortoeColgioAgrcola_21.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaK_22.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaJ_23.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaI_24.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaH_25.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaG_26.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaF_27.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaE_28.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaD_29.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaC_30.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaB_31.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaA_32.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_reaaseraverbadaPartedareaG_34.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Propriedade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Matrícula': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Área (ha)': 'inline label - visible with data', });
lyr_LoteEMDEF10unid218783m_35.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEMDEF10unid_36.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_LeiloLEIN97542025240unid6019315m_37.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LeiloLEIN97542025240unid_38.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'hidden field', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid508062m_39.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteEdificao20unid_40.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'no label', 'regiao': 'no label', 'processo': 'inline label - visible with data', });
lyr_Lote251unid7505210m_41.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_Lote251unid_42.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP156unid230392892m_43.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_readeUsoEspecial276unid271190268m_44.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaInstitucional224unid133042345m_45.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaPatrimonial33unid15776685m_46.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_LoteamentoFechado115unid52603608m_47.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_reaVerde1946unid805735618m_48.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'descricao': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'inline label - visible with data', });
lyr_UnidadesEscolaresAlfabetizaaodeJovenseAdultos15unid_49.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresAlmoxarifadoEducao1unid_50.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCEICentrodeEducaoIntegradaGustavoChereghiniBichuette1unid_51.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCreche35unid_52.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresCrechePrEscola45unid_53.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEdInfantil9unid_54.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEdInfantilEnsFundamental39unid_55.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEJA3unid_56.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEnsFundamental3unid_57.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresEspaodeDifusoCientfica1unid_58.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresSecretariaMunicipaldeEducao1unid_59.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresSetordeMerenda1unid_60.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_UnidadesEscolaresUniversidadeAbertadoBrasilUAB1unid_61.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'unidade': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'log': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'rede': 'inline label - visible with data', 'regiao': 'inline label - visible with data', 'unidade_escolar': 'inline label - visible with data', 'etapa': 'inline label - visible with data', 'atendimento': 'inline label - visible with data', 'telefone': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_62.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmregularizao36unid_63.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificado4unid_64.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificar25unid_65.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosVerificar2unid_66.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmmonitoramento1unid_67.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosEmregularizao36unid_68.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificado4unid_69.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosNotificar25unid_70.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosClandestinosVerificar2unid_71.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosRegularizados9unid_72.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_LoteamentosRegularizados9unid_73.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEISreaEspecialdeInteresseSocial_74.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAEPIreaEspecialPreferencialmenteIndustrialeLogstica_75.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisAERUreaEspecialResidenciasUnifamiliares_76.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_ZonasEspeciaisreaEspecialDestinadaaoLazeredeInteresseTursticoeCultural_77.set('fieldLabels', {'fid': 'hidden field', 'zona_especial': 'inline label - visible with data', });
lyr_MacrozonasMacrozonadoRioCanoas_78.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeExpansoUrbana_79.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoPreferencial_80.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_MacrozonasSubMacrozonadeOcupaoRestrita_81.set('fieldLabels', {'fid': 'hidden field', 'macrozona_urbana': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN0502003_82.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN1402009_83.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN2352013_84.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaLCN3242019_85.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_ExpansoUrbanaBACIASDOCANOASEPOUSOALEGRELeis4240199244201994eLC1002006_86.set('fieldLabels', {'fid': 'hidden field', 'zona_expansao': 'inline label - visible with data', });
lyr_SistemaVirioExpansodosistemavirio_87.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodovias_88.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioRodoviasViasarteriais_89.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_SistemaVirioSistemavirioprincipal_90.set('fieldLabels', {'fid': 'hidden field', 'sistema_viario': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulAVENIDAEXISTENTE_91.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZAVENIDA_92.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZCOLETORA_93.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulVIAEXPRESSAEXISTENTE_94.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_PlanoVirioZonaSulDIRETRIZVIAPARQUE_95.set('fieldLabels', {'fid': 'hidden field', 'viario_zona_sul': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_105.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVilaDiEspanha_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVilaDiEspanha_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTerraNova_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTerraNova_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDiocesedeFranca_110.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDiocesedeFranca_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratcnica_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratcnica_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_138.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_144.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_149.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVivenna_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVivenna_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_177.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_193.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_194.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_195.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_196.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_197.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_198.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_199.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_200.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_201.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_202.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_203.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_204.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_205.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_206.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_207.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_208.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_209.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_210.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_211.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_212.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_213.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_214.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_215.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_216.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_217.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_218.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_219.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_220.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_221.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_222.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_223.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_224.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_225.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_226.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_227.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_228.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_229.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_230.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_231.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_232.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_233.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_234.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz8unid_235.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva7unid_236.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia24unid_237.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_238.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_239.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_240.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_241.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalArena3unid_242.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_243.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCampo18unid_244.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCasa1unid_245.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCentro4unid_246.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCEPEL12unid_247.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalConjunto4unid_248.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalEstadio1unid_249.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalGinsio5unid_250.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalMuseu2unid_251.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalParque2unid_252.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPavilho1unid_253.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_254.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPiscina1unid_255.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPista1unid_256.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPraa3unid_257.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalQuadra3unid_258.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalSecretaria1unid_259.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalTeatro2unid_260.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_261.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_262.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_263.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_264.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_265.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_ParqueZumbidosPalmares_266.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_267.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_268.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_269.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_270.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_271.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_272.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_273.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_274.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_275.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_276.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_277.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_278.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_279.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_280.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_281.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_282.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_283.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_284.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_285.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_286.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_287.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_288.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_289.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_290.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_291.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_292.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_293.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_294.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_295.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_296.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_297.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_298.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_299.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_300.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_301.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO11unid_302.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESBPARCELAMENTO11unid_303.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_304.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_305.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_306.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_307.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_308.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_309.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_310.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_311.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_312.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_313.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_314.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_315.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_316.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_317.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_318.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_319.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalSebastioAlvesBranquinhoBosquedosAngicos_320.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_321.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_322.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_323.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu161unid17007212m_324.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo134unid12211725m_325.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaDilu16unid774541m_326.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_327.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_LotesImvelPrivado95unid_328.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', '_BAIRRO': 'inline label - visible with data', '_RUA': 'inline label - visible with data', '_processo_seinfra': 'inline label - visible with data', '_processo_sms': 'inline label - visible with data', '_processo_mp': 'inline label - visible with data', '_processo_smseg': 'inline label - visible with data', '_outros_processos': 'inline label - visible with data', '_data_inclusao': 'inline label - visible with data', });
lyr_ImvelPrivado95unid_329.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ImvelRural1unid_330.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ImvelPblico118unid_331.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_332.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_333.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_334.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_Gesso1unid_335.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_336.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_337.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_338.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_339.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_340.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_341.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_342.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_343.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_344.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_345.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias17unid_346.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_347.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_348.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_349.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_350.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_351.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_352.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_353.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_354.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_355.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_356.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_Voorocas26unid_357.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_357.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});