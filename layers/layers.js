ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([233773.359375, 7700979.946759, 276615.687500, 7740908.029506]);
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
var format_Lote504unid13809703m_37 = new ol.format.GeoJSON();
var features_Lote504unid13809703m_37 = format_Lote504unid13809703m_37.readFeatures(json_Lote504unid13809703m_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote504unid13809703m_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote504unid13809703m_37.addFeatures(features_Lote504unid13809703m_37);
var lyr_Lote504unid13809703m_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote504unid13809703m_37, 
                style: style_Lote504unid13809703m_37,
                popuplayertitle: 'Lote (504 unid. / 138.097,03 m²)',
                interactive: true,
                title: '<img src="styles/legend/Lote504unid13809703m_37.png" /> Lote (504 unid. / 138.097,03 m²)'
            });
var format_Lote504unid_38 = new ol.format.GeoJSON();
var features_Lote504unid_38 = format_Lote504unid_38.readFeatures(json_Lote504unid_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lote504unid_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote504unid_38.addFeatures(features_Lote504unid_38);
var lyr_Lote504unid_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote504unid_38, 
                style: style_Lote504unid_38,
                popuplayertitle: 'Lote (504 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lote504unid_38.png" /> Lote (504 unid.)'
            });
var format_APP156unid230392892m_39 = new ol.format.GeoJSON();
var features_APP156unid230392892m_39 = format_APP156unid230392892m_39.readFeatures(json_APP156unid230392892m_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP156unid230392892m_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP156unid230392892m_39.addFeatures(features_APP156unid230392892m_39);
var lyr_APP156unid230392892m_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP156unid230392892m_39, 
                style: style_APP156unid230392892m_39,
                popuplayertitle: 'APP (156 unid. / 2.303.928,92 m²)',
                interactive: true,
                title: '<img src="styles/legend/APP156unid230392892m_39.png" /> APP (156 unid. / 2.303.928,92 m²)'
            });
var format_readeUsoEspecial247unid269671879m_40 = new ol.format.GeoJSON();
var features_readeUsoEspecial247unid269671879m_40 = format_readeUsoEspecial247unid269671879m_40.readFeatures(json_readeUsoEspecial247unid269671879m_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_readeUsoEspecial247unid269671879m_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeUsoEspecial247unid269671879m_40.addFeatures(features_readeUsoEspecial247unid269671879m_40);
var lyr_readeUsoEspecial247unid269671879m_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeUsoEspecial247unid269671879m_40, 
                style: style_readeUsoEspecial247unid269671879m_40,
                popuplayertitle: 'Área de Uso Especial (247 unid. / 2.696.718,79 m²)',
                interactive: true,
                title: '<img src="styles/legend/readeUsoEspecial247unid269671879m_40.png" /> Área de Uso Especial (247 unid. / 2.696.718,79 m²)'
            });
var format_reaInstitucional226unid133023699m_41 = new ol.format.GeoJSON();
var features_reaInstitucional226unid133023699m_41 = format_reaInstitucional226unid133023699m_41.readFeatures(json_reaInstitucional226unid133023699m_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaInstitucional226unid133023699m_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaInstitucional226unid133023699m_41.addFeatures(features_reaInstitucional226unid133023699m_41);
var lyr_reaInstitucional226unid133023699m_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaInstitucional226unid133023699m_41, 
                style: style_reaInstitucional226unid133023699m_41,
                popuplayertitle: 'Área Institucional (226 unid. / 1.330.236,99 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaInstitucional226unid133023699m_41.png" /> Área Institucional (226 unid. / 1.330.236,99 m²)'
            });
var format_reaPatrimonial33unid15807656m_42 = new ol.format.GeoJSON();
var features_reaPatrimonial33unid15807656m_42 = format_reaPatrimonial33unid15807656m_42.readFeatures(json_reaPatrimonial33unid15807656m_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaPatrimonial33unid15807656m_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaPatrimonial33unid15807656m_42.addFeatures(features_reaPatrimonial33unid15807656m_42);
var lyr_reaPatrimonial33unid15807656m_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaPatrimonial33unid15807656m_42, 
                style: style_reaPatrimonial33unid15807656m_42,
                popuplayertitle: 'Área Patrimonial (33 unid. / 158.076,56 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaPatrimonial33unid15807656m_42.png" /> Área Patrimonial (33 unid. / 158.076,56 m²)'
            });
var format_LoteamentoFechado115unid52603608m_43 = new ol.format.GeoJSON();
var features_LoteamentoFechado115unid52603608m_43 = format_LoteamentoFechado115unid52603608m_43.readFeatures(json_LoteamentoFechado115unid52603608m_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentoFechado115unid52603608m_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentoFechado115unid52603608m_43.addFeatures(features_LoteamentoFechado115unid52603608m_43);
var lyr_LoteamentoFechado115unid52603608m_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentoFechado115unid52603608m_43, 
                style: style_LoteamentoFechado115unid52603608m_43,
                popuplayertitle: 'Loteamento Fechado (115 unid. / 526.036,08 m²)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentoFechado115unid52603608m_43.png" /> Loteamento Fechado (115 unid. / 526.036,08 m²)'
            });
var format_reaVerde1934unid805836637m_44 = new ol.format.GeoJSON();
var features_reaVerde1934unid805836637m_44 = format_reaVerde1934unid805836637m_44.readFeatures(json_reaVerde1934unid805836637m_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaVerde1934unid805836637m_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaVerde1934unid805836637m_44.addFeatures(features_reaVerde1934unid805836637m_44);
var lyr_reaVerde1934unid805836637m_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaVerde1934unid805836637m_44, 
                style: style_reaVerde1934unid805836637m_44,
                popuplayertitle: 'Área Verde (1934 unid. / 8.058.366,37 m²)',
                interactive: true,
                title: '<img src="styles/legend/reaVerde1934unid805836637m_44.png" /> Área Verde (1934 unid. / 8.058.366,37 m²)'
            });
var format_REURBEmmonitoramento1unid_45 = new ol.format.GeoJSON();
var features_REURBEmmonitoramento1unid_45 = format_REURBEmmonitoramento1unid_45.readFeatures(json_REURBEmmonitoramento1unid_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBEmmonitoramento1unid_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBEmmonitoramento1unid_45.addFeatures(features_REURBEmmonitoramento1unid_45);
var lyr_REURBEmmonitoramento1unid_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBEmmonitoramento1unid_45, 
                style: style_REURBEmmonitoramento1unid_45,
                popuplayertitle: 'REURB - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBEmmonitoramento1unid_45.png" /> REURB - Em monitoramento (1 unid.)'
            });
var format_REURBEmregularizao36unid_46 = new ol.format.GeoJSON();
var features_REURBEmregularizao36unid_46 = format_REURBEmregularizao36unid_46.readFeatures(json_REURBEmregularizao36unid_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBEmregularizao36unid_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBEmregularizao36unid_46.addFeatures(features_REURBEmregularizao36unid_46);
var lyr_REURBEmregularizao36unid_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBEmregularizao36unid_46, 
                style: style_REURBEmregularizao36unid_46,
                popuplayertitle: 'REURB - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBEmregularizao36unid_46.png" /> REURB - Em regularização (36 unid.)'
            });
var format_REURBNotificado4unid_47 = new ol.format.GeoJSON();
var features_REURBNotificado4unid_47 = format_REURBNotificado4unid_47.readFeatures(json_REURBNotificado4unid_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBNotificado4unid_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBNotificado4unid_47.addFeatures(features_REURBNotificado4unid_47);
var lyr_REURBNotificado4unid_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBNotificado4unid_47, 
                style: style_REURBNotificado4unid_47,
                popuplayertitle: 'REURB - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBNotificado4unid_47.png" /> REURB - Notificado (4 unid.)'
            });
var format_REURBNotificar25unid_48 = new ol.format.GeoJSON();
var features_REURBNotificar25unid_48 = format_REURBNotificar25unid_48.readFeatures(json_REURBNotificar25unid_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBNotificar25unid_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBNotificar25unid_48.addFeatures(features_REURBNotificar25unid_48);
var lyr_REURBNotificar25unid_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBNotificar25unid_48, 
                style: style_REURBNotificar25unid_48,
                popuplayertitle: 'REURB - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBNotificar25unid_48.png" /> REURB - Notificar (25 unid.)'
            });
var format_REURBVerificar2unid_49 = new ol.format.GeoJSON();
var features_REURBVerificar2unid_49 = format_REURBVerificar2unid_49.readFeatures(json_REURBVerificar2unid_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBVerificar2unid_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBVerificar2unid_49.addFeatures(features_REURBVerificar2unid_49);
var lyr_REURBVerificar2unid_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBVerificar2unid_49, 
                style: style_REURBVerificar2unid_49,
                popuplayertitle: 'REURB - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBVerificar2unid_49.png" /> REURB - Verificar (2 unid.)'
            });
var format_REURBRegularizado9unid_50 = new ol.format.GeoJSON();
var features_REURBRegularizado9unid_50 = format_REURBRegularizado9unid_50.readFeatures(json_REURBRegularizado9unid_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBRegularizado9unid_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBRegularizado9unid_50.addFeatures(features_REURBRegularizado9unid_50);
var lyr_REURBRegularizado9unid_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBRegularizado9unid_50, 
                style: style_REURBRegularizado9unid_50,
                popuplayertitle: 'REURB - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBRegularizado9unid_50.png" /> REURB - Regularizado (9 unid.)'
            });
var format_REURBEmmonitoramento1unid_51 = new ol.format.GeoJSON();
var features_REURBEmmonitoramento1unid_51 = format_REURBEmmonitoramento1unid_51.readFeatures(json_REURBEmmonitoramento1unid_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBEmmonitoramento1unid_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBEmmonitoramento1unid_51.addFeatures(features_REURBEmmonitoramento1unid_51);
var lyr_REURBEmmonitoramento1unid_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBEmmonitoramento1unid_51, 
                style: style_REURBEmmonitoramento1unid_51,
                popuplayertitle: 'REURB - Em monitoramento (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBEmmonitoramento1unid_51.png" /> REURB - Em monitoramento (1 unid.)'
            });
var format_REURBEmregularizao36unid_52 = new ol.format.GeoJSON();
var features_REURBEmregularizao36unid_52 = format_REURBEmregularizao36unid_52.readFeatures(json_REURBEmregularizao36unid_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBEmregularizao36unid_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBEmregularizao36unid_52.addFeatures(features_REURBEmregularizao36unid_52);
var lyr_REURBEmregularizao36unid_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBEmregularizao36unid_52, 
                style: style_REURBEmregularizao36unid_52,
                popuplayertitle: 'REURB - Em regularização (36 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBEmregularizao36unid_52.png" /> REURB - Em regularização (36 unid.)'
            });
var format_REURBNotificado4unid_53 = new ol.format.GeoJSON();
var features_REURBNotificado4unid_53 = format_REURBNotificado4unid_53.readFeatures(json_REURBNotificado4unid_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBNotificado4unid_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBNotificado4unid_53.addFeatures(features_REURBNotificado4unid_53);
var lyr_REURBNotificado4unid_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBNotificado4unid_53, 
                style: style_REURBNotificado4unid_53,
                popuplayertitle: 'REURB - Notificado (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBNotificado4unid_53.png" /> REURB - Notificado (4 unid.)'
            });
var format_REURBNotificar25unid_54 = new ol.format.GeoJSON();
var features_REURBNotificar25unid_54 = format_REURBNotificar25unid_54.readFeatures(json_REURBNotificar25unid_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBNotificar25unid_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBNotificar25unid_54.addFeatures(features_REURBNotificar25unid_54);
var lyr_REURBNotificar25unid_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBNotificar25unid_54, 
                style: style_REURBNotificar25unid_54,
                popuplayertitle: 'REURB - Notificar (25 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBNotificar25unid_54.png" /> REURB - Notificar (25 unid.)'
            });
var format_REURBVerificar2unid_55 = new ol.format.GeoJSON();
var features_REURBVerificar2unid_55 = format_REURBVerificar2unid_55.readFeatures(json_REURBVerificar2unid_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBVerificar2unid_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBVerificar2unid_55.addFeatures(features_REURBVerificar2unid_55);
var lyr_REURBVerificar2unid_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBVerificar2unid_55, 
                style: style_REURBVerificar2unid_55,
                popuplayertitle: 'REURB - Verificar (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBVerificar2unid_55.png" /> REURB - Verificar (2 unid.)'
            });
var format_REURBRegularizado9unid_56 = new ol.format.GeoJSON();
var features_REURBRegularizado9unid_56 = format_REURBRegularizado9unid_56.readFeatures(json_REURBRegularizado9unid_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_REURBRegularizado9unid_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REURBRegularizado9unid_56.addFeatures(features_REURBRegularizado9unid_56);
var lyr_REURBRegularizado9unid_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REURBRegularizado9unid_56, 
                style: style_REURBRegularizado9unid_56,
                popuplayertitle: 'REURB - Regularizado (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/REURBRegularizado9unid_56.png" /> REURB - Regularizado (9 unid.)'
            });
var format_CondomnioIICityPetrpolis_57 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_57 = format_CondomnioIICityPetrpolis_57.readFeatures(json_CondomnioIICityPetrpolis_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_57.addFeatures(features_CondomnioIICityPetrpolis_57);
var lyr_CondomnioIICityPetrpolis_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_57, 
                style: style_CondomnioIICityPetrpolis_57,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
    title: 'Condomínio II City Petrópolis<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioIICityPetrpolis_57_5.png" /> RUAS<br />' });
var format_CondomnioIICityPetrpolis_58 = new ol.format.GeoJSON();
var features_CondomnioIICityPetrpolis_58 = format_CondomnioIICityPetrpolis_58.readFeatures(json_CondomnioIICityPetrpolis_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioIICityPetrpolis_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioIICityPetrpolis_58.addFeatures(features_CondomnioIICityPetrpolis_58);
var lyr_CondomnioIICityPetrpolis_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioIICityPetrpolis_58, 
                style: style_CondomnioIICityPetrpolis_58,
                popuplayertitle: 'Condomínio II City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioIICityPetrpolis_58.png" /> Condomínio II City Petrópolis'
            });
var format_CondomnioICityPetrpolis_59 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_59 = format_CondomnioICityPetrpolis_59.readFeatures(json_CondomnioICityPetrpolis_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_59.addFeatures(features_CondomnioICityPetrpolis_59);
var lyr_CondomnioICityPetrpolis_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_59, 
                style: style_CondomnioICityPetrpolis_59,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
    title: 'Condomínio I City Petrópolis<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_4.png" /> PASSEIO<br />\
    <img src="styles/legend/CondomnioICityPetrpolis_59_5.png" /> RUAS<br />' });
var format_CondomnioICityPetrpolis_60 = new ol.format.GeoJSON();
var features_CondomnioICityPetrpolis_60 = format_CondomnioICityPetrpolis_60.readFeatures(json_CondomnioICityPetrpolis_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioICityPetrpolis_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioICityPetrpolis_60.addFeatures(features_CondomnioICityPetrpolis_60);
var lyr_CondomnioICityPetrpolis_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioICityPetrpolis_60, 
                style: style_CondomnioICityPetrpolis_60,
                popuplayertitle: 'Condomínio I City Petrópolis',
                interactive: true,
                title: '<img src="styles/legend/CondomnioICityPetrpolis_60.png" /> Condomínio I City Petrópolis'
            });
var format_EmpreendimentoVillaBella_61 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_61 = format_EmpreendimentoVillaBella_61.readFeatures(json_EmpreendimentoVillaBella_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_61.addFeatures(features_EmpreendimentoVillaBella_61);
var lyr_EmpreendimentoVillaBella_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_61, 
                style: style_EmpreendimentoVillaBella_61,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
    title: 'Empreendimento Villa Bella<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaBella_61_6.png" /> RUAS<br />' });
var format_EmpreendimentoVillaBella_62 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaBella_62 = format_EmpreendimentoVillaBella_62.readFeatures(json_EmpreendimentoVillaBella_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaBella_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaBella_62.addFeatures(features_EmpreendimentoVillaBella_62);
var lyr_EmpreendimentoVillaBella_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaBella_62, 
                style: style_EmpreendimentoVillaBella_62,
                popuplayertitle: 'Empreendimento Villa Bella',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaBella_62.png" /> Empreendimento Villa Bella'
            });
var format_EmpreendimentoFazendaProgresso_63 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_63 = format_EmpreendimentoFazendaProgresso_63.readFeatures(json_EmpreendimentoFazendaProgresso_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_63.addFeatures(features_EmpreendimentoFazendaProgresso_63);
var lyr_EmpreendimentoFazendaProgresso_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_63, 
                style: style_EmpreendimentoFazendaProgresso_63,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_63.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoFazendaProgresso_64 = new ol.format.GeoJSON();
var features_EmpreendimentoFazendaProgresso_64 = format_EmpreendimentoFazendaProgresso_64.readFeatures(json_EmpreendimentoFazendaProgresso_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFazendaProgresso_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFazendaProgresso_64.addFeatures(features_EmpreendimentoFazendaProgresso_64);
var lyr_EmpreendimentoFazendaProgresso_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFazendaProgresso_64, 
                style: style_EmpreendimentoFazendaProgresso_64,
                popuplayertitle: 'Empreendimento Fazenda Progresso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFazendaProgresso_64.png" /> Empreendimento Fazenda Progresso'
            });
var format_EmpreendimentoArizona_65 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_65 = format_EmpreendimentoArizona_65.readFeatures(json_EmpreendimentoArizona_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_65.addFeatures(features_EmpreendimentoArizona_65);
var lyr_EmpreendimentoArizona_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_65, 
                style: style_EmpreendimentoArizona_65,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
    title: 'Empreendimento Arizona<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoArizona_65_6.png" /> VIELA<br />' });
var format_EmpreendimentoArizona_66 = new ol.format.GeoJSON();
var features_EmpreendimentoArizona_66 = format_EmpreendimentoArizona_66.readFeatures(json_EmpreendimentoArizona_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoArizona_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoArizona_66.addFeatures(features_EmpreendimentoArizona_66);
var lyr_EmpreendimentoArizona_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoArizona_66, 
                style: style_EmpreendimentoArizona_66,
                popuplayertitle: 'Empreendimento Arizona',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoArizona_66.png" /> Empreendimento Arizona'
            });
var format_EmpreendimentoVilaDiEspanha_67 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDiEspanha_67 = format_EmpreendimentoVilaDiEspanha_67.readFeatures(json_EmpreendimentoVilaDiEspanha_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVilaDiEspanha_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDiEspanha_67.addFeatures(features_EmpreendimentoVilaDiEspanha_67);
var lyr_EmpreendimentoVilaDiEspanha_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDiEspanha_67, 
                style: style_EmpreendimentoVilaDiEspanha_67,
                popuplayertitle: 'Empreendimento Vila Di Espanha',
                interactive: true,
    title: 'Empreendimento Vila Di Espanha<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVilaDiEspanha_67_7.png" /> VIELA<br />' });
var format_EmpreendimentoVilaDiEspanha_68 = new ol.format.GeoJSON();
var features_EmpreendimentoVilaDiEspanha_68 = format_EmpreendimentoVilaDiEspanha_68.readFeatures(json_EmpreendimentoVilaDiEspanha_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVilaDiEspanha_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVilaDiEspanha_68.addFeatures(features_EmpreendimentoVilaDiEspanha_68);
var lyr_EmpreendimentoVilaDiEspanha_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVilaDiEspanha_68, 
                style: style_EmpreendimentoVilaDiEspanha_68,
                popuplayertitle: 'Empreendimento Vila Di Espanha',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVilaDiEspanha_68.png" /> Empreendimento Vila Di Espanha'
            });
var format_EmpreendimentoTerraNova_69 = new ol.format.GeoJSON();
var features_EmpreendimentoTerraNova_69 = format_EmpreendimentoTerraNova_69.readFeatures(json_EmpreendimentoTerraNova_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTerraNova_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTerraNova_69.addFeatures(features_EmpreendimentoTerraNova_69);
var lyr_EmpreendimentoTerraNova_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTerraNova_69, 
                style: style_EmpreendimentoTerraNova_69,
                popuplayertitle: 'Empreendimento Terra Nova',
                interactive: true,
    title: 'Empreendimento Terra Nova<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoTerraNova_69_5.png" /> RUAS<br />' });
var format_EmpreendimentoTerraNova_70 = new ol.format.GeoJSON();
var features_EmpreendimentoTerraNova_70 = format_EmpreendimentoTerraNova_70.readFeatures(json_EmpreendimentoTerraNova_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTerraNova_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTerraNova_70.addFeatures(features_EmpreendimentoTerraNova_70);
var lyr_EmpreendimentoTerraNova_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTerraNova_70, 
                style: style_EmpreendimentoTerraNova_70,
                popuplayertitle: 'Empreendimento Terra Nova',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTerraNova_70.png" /> Empreendimento Terra Nova'
            });
var format_EmpreendimentoDiocesedeFranca_71 = new ol.format.GeoJSON();
var features_EmpreendimentoDiocesedeFranca_71 = format_EmpreendimentoDiocesedeFranca_71.readFeatures(json_EmpreendimentoDiocesedeFranca_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDiocesedeFranca_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDiocesedeFranca_71.addFeatures(features_EmpreendimentoDiocesedeFranca_71);
var lyr_EmpreendimentoDiocesedeFranca_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDiocesedeFranca_71, 
                style: style_EmpreendimentoDiocesedeFranca_71,
                popuplayertitle: 'Empreendimento Diocese de Franca',
                interactive: true,
    title: 'Empreendimento Diocese de Franca<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoDiocesedeFranca_71_6.png" /> RUAS<br />' });
var format_EmpreendimentoDiocesedeFranca_72 = new ol.format.GeoJSON();
var features_EmpreendimentoDiocesedeFranca_72 = format_EmpreendimentoDiocesedeFranca_72.readFeatures(json_EmpreendimentoDiocesedeFranca_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDiocesedeFranca_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDiocesedeFranca_72.addFeatures(features_EmpreendimentoDiocesedeFranca_72);
var lyr_EmpreendimentoDiocesedeFranca_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDiocesedeFranca_72, 
                style: style_EmpreendimentoDiocesedeFranca_72,
                popuplayertitle: 'Empreendimento Diocese de Franca',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDiocesedeFranca_72.png" /> Empreendimento Diocese de Franca'
            });
var format_EmpreendimentoResidencialBoaVista_73 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_73 = format_EmpreendimentoResidencialBoaVista_73.readFeatures(json_EmpreendimentoResidencialBoaVista_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_73.addFeatures(features_EmpreendimentoResidencialBoaVista_73);
var lyr_EmpreendimentoResidencialBoaVista_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_73, 
                style: style_EmpreendimentoResidencialBoaVista_73,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
    title: 'Empreendimento Residencial Boa Vista<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_4.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialBoaVista_73_7.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialBoaVista_74 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialBoaVista_74 = format_EmpreendimentoResidencialBoaVista_74.readFeatures(json_EmpreendimentoResidencialBoaVista_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialBoaVista_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialBoaVista_74.addFeatures(features_EmpreendimentoResidencialBoaVista_74);
var lyr_EmpreendimentoResidencialBoaVista_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialBoaVista_74, 
                style: style_EmpreendimentoResidencialBoaVista_74,
                popuplayertitle: 'Empreendimento Residencial Boa Vista',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialBoaVista_74.png" /> Empreendimento Residencial Boa Vista'
            });
var format_EmpreendimentoVillaDoratta_75 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_75 = format_EmpreendimentoVillaDoratta_75.readFeatures(json_EmpreendimentoVillaDoratta_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_75.addFeatures(features_EmpreendimentoVillaDoratta_75);
var lyr_EmpreendimentoVillaDoratta_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_75, 
                style: style_EmpreendimentoVillaDoratta_75,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
    title: 'Empreendimento Villa Doratta<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_3.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_6.png" /> VAGAS DE ESTACIONAMENTO<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_7.png" /> VIELA<br />\
    <img src="styles/legend/EmpreendimentoVillaDoratta_75_8.png" /> APP<br />' });
var format_EmpreendimentoVillaDoratta_76 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaDoratta_76 = format_EmpreendimentoVillaDoratta_76.readFeatures(json_EmpreendimentoVillaDoratta_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaDoratta_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaDoratta_76.addFeatures(features_EmpreendimentoVillaDoratta_76);
var lyr_EmpreendimentoVillaDoratta_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaDoratta_76, 
                style: style_EmpreendimentoVillaDoratta_76,
                popuplayertitle: 'Empreendimento Villa Doratta',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaDoratta_76.png" /> Empreendimento Villa Doratta'
            });
var format_EmpreendimentoInfratcnica_77 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratcnica_77 = format_EmpreendimentoInfratcnica_77.readFeatures(json_EmpreendimentoInfratcnica_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratcnica_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratcnica_77.addFeatures(features_EmpreendimentoInfratcnica_77);
var lyr_EmpreendimentoInfratcnica_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratcnica_77, 
                style: style_EmpreendimentoInfratcnica_77,
                popuplayertitle: 'Empreendimento Infratécnica',
                interactive: true,
    title: 'Empreendimento Infratécnica<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoInfratcnica_77_5.png" /> RUAS<br />' });
var format_EmpreendimentoInfratcnica_78 = new ol.format.GeoJSON();
var features_EmpreendimentoInfratcnica_78 = format_EmpreendimentoInfratcnica_78.readFeatures(json_EmpreendimentoInfratcnica_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoInfratcnica_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoInfratcnica_78.addFeatures(features_EmpreendimentoInfratcnica_78);
var lyr_EmpreendimentoInfratcnica_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoInfratcnica_78, 
                style: style_EmpreendimentoInfratcnica_78,
                popuplayertitle: 'Empreendimento Infratécnica',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoInfratcnica_78.png" /> Empreendimento Infratécnica'
            });
var format_EmpreendimentoSoCarlosII_79 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_79 = format_EmpreendimentoSoCarlosII_79.readFeatures(json_EmpreendimentoSoCarlosII_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_79.addFeatures(features_EmpreendimentoSoCarlosII_79);
var lyr_EmpreendimentoSoCarlosII_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_79, 
                style: style_EmpreendimentoSoCarlosII_79,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
    title: 'Empreendimento São Carlos II<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_0.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_1.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_2.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoSoCarlosII_79_5.png" /> RUAS<br />' });
var format_EmpreendimentoSoCarlosII_80 = new ol.format.GeoJSON();
var features_EmpreendimentoSoCarlosII_80 = format_EmpreendimentoSoCarlosII_80.readFeatures(json_EmpreendimentoSoCarlosII_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSoCarlosII_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSoCarlosII_80.addFeatures(features_EmpreendimentoSoCarlosII_80);
var lyr_EmpreendimentoSoCarlosII_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSoCarlosII_80, 
                style: style_EmpreendimentoSoCarlosII_80,
                popuplayertitle: 'Empreendimento São Carlos II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSoCarlosII_80.png" /> Empreendimento São Carlos II'
            });
var format_EmpreendimentoParqueFlora_81 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_81 = format_EmpreendimentoParqueFlora_81.readFeatures(json_EmpreendimentoParqueFlora_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_81.addFeatures(features_EmpreendimentoParqueFlora_81);
var lyr_EmpreendimentoParqueFlora_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_81, 
                style: style_EmpreendimentoParqueFlora_81,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
    title: 'Empreendimento Parque Flora<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParqueFlora_81_6.png" /> VIELA<br />' });
var format_EmpreendimentoParqueFlora_82 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueFlora_82 = format_EmpreendimentoParqueFlora_82.readFeatures(json_EmpreendimentoParqueFlora_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueFlora_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueFlora_82.addFeatures(features_EmpreendimentoParqueFlora_82);
var lyr_EmpreendimentoParqueFlora_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueFlora_82, 
                style: style_EmpreendimentoParqueFlora_82,
                popuplayertitle: 'Empreendimento Parque Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueFlora_82.png" /> Empreendimento Parque Flora'
            });
var format_EmpreendimentoVittaSoVicente_83 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_83 = format_EmpreendimentoVittaSoVicente_83.readFeatures(json_EmpreendimentoVittaSoVicente_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_83.addFeatures(features_EmpreendimentoVittaSoVicente_83);
var lyr_EmpreendimentoVittaSoVicente_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_83, 
                style: style_EmpreendimentoVittaSoVicente_83,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
    title: 'Empreendimento Vitta São Vicente<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVittaSoVicente_83_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVittaSoVicente_84 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaSoVicente_84 = format_EmpreendimentoVittaSoVicente_84.readFeatures(json_EmpreendimentoVittaSoVicente_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaSoVicente_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaSoVicente_84.addFeatures(features_EmpreendimentoVittaSoVicente_84);
var lyr_EmpreendimentoVittaSoVicente_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaSoVicente_84, 
                style: style_EmpreendimentoVittaSoVicente_84,
                popuplayertitle: 'Empreendimento Vitta São Vicente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaSoVicente_84.png" /> Empreendimento Vitta São Vicente'
            });
var format_EmpreendimentoRecantoMeneghetti_85 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_85 = format_EmpreendimentoRecantoMeneghetti_85.readFeatures(json_EmpreendimentoRecantoMeneghetti_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_85.addFeatures(features_EmpreendimentoRecantoMeneghetti_85);
var lyr_EmpreendimentoRecantoMeneghetti_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_85, 
                style: style_EmpreendimentoRecantoMeneghetti_85,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
    title: 'Empreendimento Recanto Meneghetti<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_2.png" /> ÃREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_3.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_4.png" /> CICLOVIA<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_5.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_6.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_7.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_8.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoRecantoMeneghetti_85_9.png" /> VIELA<br />' });
var format_EmpreendimentoRecantoMeneghetti_86 = new ol.format.GeoJSON();
var features_EmpreendimentoRecantoMeneghetti_86 = format_EmpreendimentoRecantoMeneghetti_86.readFeatures(json_EmpreendimentoRecantoMeneghetti_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoRecantoMeneghetti_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoRecantoMeneghetti_86.addFeatures(features_EmpreendimentoRecantoMeneghetti_86);
var lyr_EmpreendimentoRecantoMeneghetti_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoRecantoMeneghetti_86, 
                style: style_EmpreendimentoRecantoMeneghetti_86,
                popuplayertitle: 'Empreendimento Recanto Meneghetti',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoRecantoMeneghetti_86.png" /> Empreendimento Recanto Meneghetti'
            });
var format_EmpreendimentoParquedosSabias_87 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_87 = format_EmpreendimentoParquedosSabias_87.readFeatures(json_EmpreendimentoParquedosSabias_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_87.addFeatures(features_EmpreendimentoParquedosSabias_87);
var lyr_EmpreendimentoParquedosSabias_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_87, 
                style: style_EmpreendimentoParquedosSabias_87,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
    title: 'Empreendimento Parque dos Sabias<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_2.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_3.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoParquedosSabias_87_7.png" /> VIELA<br />' });
var format_EmpreendimentoParquedosSabias_88 = new ol.format.GeoJSON();
var features_EmpreendimentoParquedosSabias_88 = format_EmpreendimentoParquedosSabias_88.readFeatures(json_EmpreendimentoParquedosSabias_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquedosSabias_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquedosSabias_88.addFeatures(features_EmpreendimentoParquedosSabias_88);
var lyr_EmpreendimentoParquedosSabias_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquedosSabias_88, 
                style: style_EmpreendimentoParquedosSabias_88,
                popuplayertitle: 'Empreendimento Parque dos Sabias',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquedosSabias_88.png" /> Empreendimento Parque dos Sabias'
            });
var format_EmpreendimentoMoradadaMata_89 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_89 = format_EmpreendimentoMoradadaMata_89.readFeatures(json_EmpreendimentoMoradadaMata_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_89.addFeatures(features_EmpreendimentoMoradadaMata_89);
var lyr_EmpreendimentoMoradadaMata_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_89, 
                style: style_EmpreendimentoMoradadaMata_89,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
    title: 'Empreendimento Morada da Mata<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_2.png" /> ÁREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_3.png" /> ÃREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_4.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_5.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoMoradadaMata_89_7.png" /> RUAS<br />' });
var format_EmpreendimentoMoradadaMata_90 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadaMata_90 = format_EmpreendimentoMoradadaMata_90.readFeatures(json_EmpreendimentoMoradadaMata_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadaMata_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadaMata_90.addFeatures(features_EmpreendimentoMoradadaMata_90);
var lyr_EmpreendimentoMoradadaMata_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadaMata_90, 
                style: style_EmpreendimentoMoradadaMata_90,
                popuplayertitle: 'Empreendimento Morada da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadaMata_90.png" /> Empreendimento Morada da Mata'
            });
var format_EmpreendimentoIrineuZanetiII_91 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_91 = format_EmpreendimentoIrineuZanetiII_91.readFeatures(json_EmpreendimentoIrineuZanetiII_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_91.addFeatures(features_EmpreendimentoIrineuZanetiII_91);
var lyr_EmpreendimentoIrineuZanetiII_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_91, 
                style: style_EmpreendimentoIrineuZanetiII_91,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
    title: 'Empreendimento Irineu Zaneti II<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoIrineuZanetiII_91_5.png" /> RUAS<br />' });
var format_EmpreendimentoIrineuZanetiII_92 = new ol.format.GeoJSON();
var features_EmpreendimentoIrineuZanetiII_92 = format_EmpreendimentoIrineuZanetiII_92.readFeatures(json_EmpreendimentoIrineuZanetiII_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoIrineuZanetiII_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoIrineuZanetiII_92.addFeatures(features_EmpreendimentoIrineuZanetiII_92);
var lyr_EmpreendimentoIrineuZanetiII_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoIrineuZanetiII_92, 
                style: style_EmpreendimentoIrineuZanetiII_92,
                popuplayertitle: 'Empreendimento Irineu Zaneti II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoIrineuZanetiII_92.png" /> Empreendimento Irineu Zaneti II'
            });
var format_EmpreendimentoAdonis_93 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_93 = format_EmpreendimentoAdonis_93.readFeatures(json_EmpreendimentoAdonis_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_93.addFeatures(features_EmpreendimentoAdonis_93);
var lyr_EmpreendimentoAdonis_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_93, 
                style: style_EmpreendimentoAdonis_93,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
    title: 'Empreendimento Adonis<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_1.png" /> ÁREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_2.png" /> ÁREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_4.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoAdonis_93_5.png" /> RUAS<br />' });
var format_EmpreendimentoAdonis_94 = new ol.format.GeoJSON();
var features_EmpreendimentoAdonis_94 = format_EmpreendimentoAdonis_94.readFeatures(json_EmpreendimentoAdonis_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAdonis_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAdonis_94.addFeatures(features_EmpreendimentoAdonis_94);
var lyr_EmpreendimentoAdonis_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAdonis_94, 
                style: style_EmpreendimentoAdonis_94,
                popuplayertitle: 'Empreendimento Adonis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAdonis_94.png" /> Empreendimento Adonis'
            });
var format_EmpreendimentoResidencialMarianaAlarcon_95 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_95 = format_EmpreendimentoResidencialMarianaAlarcon_95.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_95.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_95);
var lyr_EmpreendimentoResidencialMarianaAlarcon_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_95, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_95,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
    title: 'Empreendimento Residencial Mariana Alarcon<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_4.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_95_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMarianaAlarcon_96 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarianaAlarcon_96 = format_EmpreendimentoResidencialMarianaAlarcon_96.readFeatures(json_EmpreendimentoResidencialMarianaAlarcon_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarianaAlarcon_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarianaAlarcon_96.addFeatures(features_EmpreendimentoResidencialMarianaAlarcon_96);
var lyr_EmpreendimentoResidencialMarianaAlarcon_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarianaAlarcon_96, 
                style: style_EmpreendimentoResidencialMarianaAlarcon_96,
                popuplayertitle: 'Empreendimento Residencial Mariana Alarcon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarianaAlarcon_96.png" /> Empreendimento Residencial Mariana Alarcon'
            });
var format_EmpreendimentoResidencialJabuticabeiras_97 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_97 = format_EmpreendimentoResidencialJabuticabeiras_97.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_97.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_97);
var lyr_EmpreendimentoResidencialJabuticabeiras_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_97, 
                style: style_EmpreendimentoResidencialJabuticabeiras_97,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
    title: 'Empreendimento Residencial Jabuticabeiras<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_3.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_5.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_97_6.png" /> VIELA<br />' });
var format_EmpreendimentoResidencialJabuticabeiras_98 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialJabuticabeiras_98 = format_EmpreendimentoResidencialJabuticabeiras_98.readFeatures(json_EmpreendimentoResidencialJabuticabeiras_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialJabuticabeiras_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialJabuticabeiras_98.addFeatures(features_EmpreendimentoResidencialJabuticabeiras_98);
var lyr_EmpreendimentoResidencialJabuticabeiras_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialJabuticabeiras_98, 
                style: style_EmpreendimentoResidencialJabuticabeiras_98,
                popuplayertitle: 'Empreendimento Residencial Jabuticabeiras',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialJabuticabeiras_98.png" /> Empreendimento Residencial Jabuticabeiras'
            });
var format_EmpreendimentoResidencialCintraAlves_99 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_99 = format_EmpreendimentoResidencialCintraAlves_99.readFeatures(json_EmpreendimentoResidencialCintraAlves_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_99.addFeatures(features_EmpreendimentoResidencialCintraAlves_99);
var lyr_EmpreendimentoResidencialCintraAlves_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_99, 
                style: style_EmpreendimentoResidencialCintraAlves_99,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
    title: 'Empreendimento Residencial Cintra Alves<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_0.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_5.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_6.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialCintraAlves_99_7.png" /> Viela<br />' });
var format_EmpreendimentoResidencialCintraAlves_100 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialCintraAlves_100 = format_EmpreendimentoResidencialCintraAlves_100.readFeatures(json_EmpreendimentoResidencialCintraAlves_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialCintraAlves_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialCintraAlves_100.addFeatures(features_EmpreendimentoResidencialCintraAlves_100);
var lyr_EmpreendimentoResidencialCintraAlves_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialCintraAlves_100, 
                style: style_EmpreendimentoResidencialCintraAlves_100,
                popuplayertitle: 'Empreendimento Residencial Cintra Alves',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialCintraAlves_100.png" /> Empreendimento Residencial Cintra Alves'
            });
var format_EmpreendimentoLoteamentolamo_101 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_101 = format_EmpreendimentoLoteamentolamo_101.readFeatures(json_EmpreendimentoLoteamentolamo_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_101.addFeatures(features_EmpreendimentoLoteamentolamo_101);
var lyr_EmpreendimentoLoteamentolamo_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_101, 
                style: style_EmpreendimentoLoteamentolamo_101,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
    title: 'Empreendimento Loteamento Álamo <br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_7.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_8.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_9.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoLoteamentolamo_101_10.png" /> VIELA<br />' });
var format_EmpreendimentoLoteamentolamo_102 = new ol.format.GeoJSON();
var features_EmpreendimentoLoteamentolamo_102 = format_EmpreendimentoLoteamentolamo_102.readFeatures(json_EmpreendimentoLoteamentolamo_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoLoteamentolamo_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoLoteamentolamo_102.addFeatures(features_EmpreendimentoLoteamentolamo_102);
var lyr_EmpreendimentoLoteamentolamo_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoLoteamentolamo_102, 
                style: style_EmpreendimentoLoteamentolamo_102,
                popuplayertitle: 'Empreendimento Loteamento Álamo ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoLoteamentolamo_102.png" /> Empreendimento Loteamento Álamo '
            });
var format_EmpreendimentoSantaLina_103 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_103 = format_EmpreendimentoSantaLina_103.readFeatures(json_EmpreendimentoSantaLina_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_103.addFeatures(features_EmpreendimentoSantaLina_103);
var lyr_EmpreendimentoSantaLina_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_103, 
                style: style_EmpreendimentoSantaLina_103,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
    title: 'Empreendimento Santa Lina<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_103_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoSantaLina_103_1.png" /> Lotes/Quadras<br />' });
var format_EmpreendimentoSantaLina_104 = new ol.format.GeoJSON();
var features_EmpreendimentoSantaLina_104 = format_EmpreendimentoSantaLina_104.readFeatures(json_EmpreendimentoSantaLina_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSantaLina_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSantaLina_104.addFeatures(features_EmpreendimentoSantaLina_104);
var lyr_EmpreendimentoSantaLina_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSantaLina_104, 
                style: style_EmpreendimentoSantaLina_104,
                popuplayertitle: 'Empreendimento Santa Lina',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSantaLina_104.png" /> Empreendimento Santa Lina'
            });
var format_EmpreendimentoResidencialPousoAlegreII_105 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_105 = format_EmpreendimentoResidencialPousoAlegreII_105.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_105.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_105);
var lyr_EmpreendimentoResidencialPousoAlegreII_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_105, 
                style: style_EmpreendimentoResidencialPousoAlegreII_105,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre II<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_105_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoResidencialPousoAlegreII_106 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegreII_106 = format_EmpreendimentoResidencialPousoAlegreII_106.readFeatures(json_EmpreendimentoResidencialPousoAlegreII_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegreII_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegreII_106.addFeatures(features_EmpreendimentoResidencialPousoAlegreII_106);
var lyr_EmpreendimentoResidencialPousoAlegreII_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegreII_106, 
                style: style_EmpreendimentoResidencialPousoAlegreII_106,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegreII_106.png" /> Empreendimento Residencial Pouso Alegre II'
            });
var format_EmpreendimentoResidencialPousoAlegre_107 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_107 = format_EmpreendimentoResidencialPousoAlegre_107.readFeatures(json_EmpreendimentoResidencialPousoAlegre_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_107.addFeatures(features_EmpreendimentoResidencialPousoAlegre_107);
var lyr_EmpreendimentoResidencialPousoAlegre_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_107, 
                style: style_EmpreendimentoResidencialPousoAlegre_107,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
    title: 'Empreendimento Residencial Pouso Alegre<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_4.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_5.png" /> Servidão<br />\
    <img src="styles/legend/EmpreendimentoResidencialPousoAlegre_107_6.png" /> Viela<br />' });
var format_EmpreendimentoResidencialPousoAlegre_108 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialPousoAlegre_108 = format_EmpreendimentoResidencialPousoAlegre_108.readFeatures(json_EmpreendimentoResidencialPousoAlegre_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialPousoAlegre_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialPousoAlegre_108.addFeatures(features_EmpreendimentoResidencialPousoAlegre_108);
var lyr_EmpreendimentoResidencialPousoAlegre_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialPousoAlegre_108, 
                style: style_EmpreendimentoResidencialPousoAlegre_108,
                popuplayertitle: 'Empreendimento Residencial Pouso Alegre',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialPousoAlegre_108.png" /> Empreendimento Residencial Pouso Alegre'
            });
var format_EmpreendimentoResidencialAltodaFazenda_109 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_109 = format_EmpreendimentoResidencialAltodaFazenda_109.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_109.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_109);
var lyr_EmpreendimentoResidencialAltodaFazenda_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_109, 
                style: style_EmpreendimentoResidencialAltodaFazenda_109,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
    title: 'Empreendimento Residencial Alto da Fazenda <br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_109_0.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_109_1.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_109_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_109_3.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_109_4.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialAltodaFazenda_110 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialAltodaFazenda_110 = format_EmpreendimentoResidencialAltodaFazenda_110.readFeatures(json_EmpreendimentoResidencialAltodaFazenda_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialAltodaFazenda_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialAltodaFazenda_110.addFeatures(features_EmpreendimentoResidencialAltodaFazenda_110);
var lyr_EmpreendimentoResidencialAltodaFazenda_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialAltodaFazenda_110, 
                style: style_EmpreendimentoResidencialAltodaFazenda_110,
                popuplayertitle: 'Empreendimento Residencial Alto da Fazenda ',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialAltodaFazenda_110.png" /> Empreendimento Residencial Alto da Fazenda '
            });
var format_EmpreendimentoResidencialMarioTasso_111 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_111 = format_EmpreendimentoResidencialMarioTasso_111.readFeatures(json_EmpreendimentoResidencialMarioTasso_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_111.addFeatures(features_EmpreendimentoResidencialMarioTasso_111);
var lyr_EmpreendimentoResidencialMarioTasso_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_111, 
                style: style_EmpreendimentoResidencialMarioTasso_111,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
    title: 'Empreendimento Residencial Mario Tasso<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_111_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_111_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_111_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_111_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarioTasso_111_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialMarioTasso_112 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarioTasso_112 = format_EmpreendimentoResidencialMarioTasso_112.readFeatures(json_EmpreendimentoResidencialMarioTasso_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarioTasso_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarioTasso_112.addFeatures(features_EmpreendimentoResidencialMarioTasso_112);
var lyr_EmpreendimentoResidencialMarioTasso_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarioTasso_112, 
                style: style_EmpreendimentoResidencialMarioTasso_112,
                popuplayertitle: 'Empreendimento Residencial Mario Tasso',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarioTasso_112.png" /> Empreendimento Residencial Mario Tasso'
            });
var format_EmpreendimentoVivenna_113 = new ol.format.GeoJSON();
var features_EmpreendimentoVivenna_113 = format_EmpreendimentoVivenna_113.readFeatures(json_EmpreendimentoVivenna_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVivenna_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVivenna_113.addFeatures(features_EmpreendimentoVivenna_113);
var lyr_EmpreendimentoVivenna_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVivenna_113, 
                style: style_EmpreendimentoVivenna_113,
                popuplayertitle: 'Empreendimento Vivenna',
                interactive: true,
    title: 'Empreendimento Vivenna<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoVivenna_113_7.png" /> VIELA<br />' });
var format_EmpreendimentoVivenna_114 = new ol.format.GeoJSON();
var features_EmpreendimentoVivenna_114 = format_EmpreendimentoVivenna_114.readFeatures(json_EmpreendimentoVivenna_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVivenna_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVivenna_114.addFeatures(features_EmpreendimentoVivenna_114);
var lyr_EmpreendimentoVivenna_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVivenna_114, 
                style: style_EmpreendimentoVivenna_114,
                popuplayertitle: 'Empreendimento Vivenna',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVivenna_114.png" /> Empreendimento Vivenna'
            });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_115 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_115 = format_EmpreendimentoAbuDhabiParadiseResortResidence_115.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_115.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_115);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_115, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_115,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
    title: 'Empreendimento Abu Dhabi Paradise Resort Residence<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_4.png" /> Área Non Edificandi<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_5.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_115_6.png" /> Passeio<br />' });
var format_EmpreendimentoAbuDhabiParadiseResortResidence_116 = new ol.format.GeoJSON();
var features_EmpreendimentoAbuDhabiParadiseResortResidence_116 = format_EmpreendimentoAbuDhabiParadiseResortResidence_116.readFeatures(json_EmpreendimentoAbuDhabiParadiseResortResidence_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_116.addFeatures(features_EmpreendimentoAbuDhabiParadiseResortResidence_116);
var lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoAbuDhabiParadiseResortResidence_116, 
                style: style_EmpreendimentoAbuDhabiParadiseResortResidence_116,
                popuplayertitle: 'Empreendimento Abu Dhabi Paradise Resort Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoAbuDhabiParadiseResortResidence_116.png" /> Empreendimento Abu Dhabi Paradise Resort Residence'
            });
var format_EmprendimentoElias_117 = new ol.format.GeoJSON();
var features_EmprendimentoElias_117 = format_EmprendimentoElias_117.readFeatures(json_EmprendimentoElias_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_117.addFeatures(features_EmprendimentoElias_117);
var lyr_EmprendimentoElias_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_117, 
                style: style_EmprendimentoElias_117,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
    title: 'Emprendimento Elias<br />\
    <img src="styles/legend/EmprendimentoElias_117_0.png" /> Ruas<br />\
    <img src="styles/legend/EmprendimentoElias_117_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmprendimentoElias_117_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmprendimentoElias_117_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmprendimentoElias_117_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmprendimentoElias_117_5.png" /> Passeio<br />\
    <img src="styles/legend/EmprendimentoElias_117_6.png" /> Lotes mistos<br />' });
var format_EmprendimentoElias_118 = new ol.format.GeoJSON();
var features_EmprendimentoElias_118 = format_EmprendimentoElias_118.readFeatures(json_EmprendimentoElias_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmprendimentoElias_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmprendimentoElias_118.addFeatures(features_EmprendimentoElias_118);
var lyr_EmprendimentoElias_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmprendimentoElias_118, 
                style: style_EmprendimentoElias_118,
                popuplayertitle: 'Emprendimento Elias',
                interactive: true,
                title: '<img src="styles/legend/EmprendimentoElias_118.png" /> Emprendimento Elias'
            });
var format_EmpreendimentoResidencialSoCarlosI_119 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_119 = format_EmpreendimentoResidencialSoCarlosI_119.readFeatures(json_EmpreendimentoResidencialSoCarlosI_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_119.addFeatures(features_EmpreendimentoResidencialSoCarlosI_119);
var lyr_EmpreendimentoResidencialSoCarlosI_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_119, 
                style: style_EmpreendimentoResidencialSoCarlosI_119,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
    title: 'Empreendimento Residencial São Carlos I<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_119_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_119_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_119_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_119_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSoCarlosI_119_4.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSoCarlosI_120 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSoCarlosI_120 = format_EmpreendimentoResidencialSoCarlosI_120.readFeatures(json_EmpreendimentoResidencialSoCarlosI_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSoCarlosI_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSoCarlosI_120.addFeatures(features_EmpreendimentoResidencialSoCarlosI_120);
var lyr_EmpreendimentoResidencialSoCarlosI_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSoCarlosI_120, 
                style: style_EmpreendimentoResidencialSoCarlosI_120,
                popuplayertitle: 'Empreendimento Residencial São Carlos I',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSoCarlosI_120.png" /> Empreendimento Residencial São Carlos I'
            });
var format_EmpreendimentoMonti_121 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_121 = format_EmpreendimentoMonti_121.readFeatures(json_EmpreendimentoMonti_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_121.addFeatures(features_EmpreendimentoMonti_121);
var lyr_EmpreendimentoMonti_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_121, 
                style: style_EmpreendimentoMonti_121,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
    title: 'Empreendimento Montié<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMonti_121_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoMonti_122 = new ol.format.GeoJSON();
var features_EmpreendimentoMonti_122 = format_EmpreendimentoMonti_122.readFeatures(json_EmpreendimentoMonti_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMonti_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMonti_122.addFeatures(features_EmpreendimentoMonti_122);
var lyr_EmpreendimentoMonti_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMonti_122, 
                style: style_EmpreendimentoMonti_122,
                popuplayertitle: 'Empreendimento Montié',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMonti_122.png" /> Empreendimento Montié'
            });
var format_EmpreendimentoResidencialMoradadoBosque_123 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_123 = format_EmpreendimentoResidencialMoradadoBosque_123.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_123.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_123);
var lyr_EmpreendimentoResidencialMoradadoBosque_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_123, 
                style: style_EmpreendimentoResidencialMoradadoBosque_123,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
    title: 'Empreendimento Residencial Morada do Bosque<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_3.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_4.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_123_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialMoradadoBosque_124 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMoradadoBosque_124 = format_EmpreendimentoResidencialMoradadoBosque_124.readFeatures(json_EmpreendimentoResidencialMoradadoBosque_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMoradadoBosque_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMoradadoBosque_124.addFeatures(features_EmpreendimentoResidencialMoradadoBosque_124);
var lyr_EmpreendimentoResidencialMoradadoBosque_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMoradadoBosque_124, 
                style: style_EmpreendimentoResidencialMoradadoBosque_124,
                popuplayertitle: 'Empreendimento Residencial Morada do Bosque',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMoradadoBosque_124.png" /> Empreendimento Residencial Morada do Bosque'
            });
var format_EmpreendimentoVittaAlvorada_125 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_125 = format_EmpreendimentoVittaAlvorada_125.readFeatures(json_EmpreendimentoVittaAlvorada_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_125.addFeatures(features_EmpreendimentoVittaAlvorada_125);
var lyr_EmpreendimentoVittaAlvorada_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_125, 
                style: style_EmpreendimentoVittaAlvorada_125,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
    title: 'Empreendimento Vitta Alvorada<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_4.png" /> A-PROP-LINE<br />\
    <img src="styles/legend/EmpreendimentoVittaAlvorada_125_5.png" /> Passeio<br />' });
var format_EmpreendimentoVittaAlvorada_126 = new ol.format.GeoJSON();
var features_EmpreendimentoVittaAlvorada_126 = format_EmpreendimentoVittaAlvorada_126.readFeatures(json_EmpreendimentoVittaAlvorada_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVittaAlvorada_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVittaAlvorada_126.addFeatures(features_EmpreendimentoVittaAlvorada_126);
var lyr_EmpreendimentoVittaAlvorada_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVittaAlvorada_126, 
                style: style_EmpreendimentoVittaAlvorada_126,
                popuplayertitle: 'Empreendimento Vitta Alvorada',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVittaAlvorada_126.png" /> Empreendimento Vitta Alvorada'
            });
var format_EmpreendimentoResidencialMarthaHelena_127 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_127 = format_EmpreendimentoResidencialMarthaHelena_127.readFeatures(json_EmpreendimentoResidencialMarthaHelena_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_127.addFeatures(features_EmpreendimentoResidencialMarthaHelena_127);
var lyr_EmpreendimentoResidencialMarthaHelena_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_127, 
                style: style_EmpreendimentoResidencialMarthaHelena_127,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
    title: 'Empreendimento Residencial Martha Helena<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_127_0.png" /> 0<br />\
    <img src="styles/legend/EmpreendimentoResidencialMarthaHelena_127_1.png" /> Zona de Uso Residencial<br />' });
var format_EmpreendimentoResidencialMarthaHelena_128 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialMarthaHelena_128 = format_EmpreendimentoResidencialMarthaHelena_128.readFeatures(json_EmpreendimentoResidencialMarthaHelena_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialMarthaHelena_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialMarthaHelena_128.addFeatures(features_EmpreendimentoResidencialMarthaHelena_128);
var lyr_EmpreendimentoResidencialMarthaHelena_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialMarthaHelena_128, 
                style: style_EmpreendimentoResidencialMarthaHelena_128,
                popuplayertitle: 'Empreendimento Residencial Martha Helena',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialMarthaHelena_128.png" /> Empreendimento Residencial Martha Helena'
            });
var format_EmpreendimentoResidencialYasminTorres_129 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_129 = format_EmpreendimentoResidencialYasminTorres_129.readFeatures(json_EmpreendimentoResidencialYasminTorres_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_129.addFeatures(features_EmpreendimentoResidencialYasminTorres_129);
var lyr_EmpreendimentoResidencialYasminTorres_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_129, 
                style: style_EmpreendimentoResidencialYasminTorres_129,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_129.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoResidencialYasminTorres_130 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialYasminTorres_130 = format_EmpreendimentoResidencialYasminTorres_130.readFeatures(json_EmpreendimentoResidencialYasminTorres_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialYasminTorres_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialYasminTorres_130.addFeatures(features_EmpreendimentoResidencialYasminTorres_130);
var lyr_EmpreendimentoResidencialYasminTorres_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialYasminTorres_130, 
                style: style_EmpreendimentoResidencialYasminTorres_130,
                popuplayertitle: 'Empreendimento Residencial Yasmin Torres',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialYasminTorres_130.png" /> Empreendimento Residencial Yasmin Torres'
            });
var format_EmpreendimentoPalmeiraReal_131 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_131 = format_EmpreendimentoPalmeiraReal_131.readFeatures(json_EmpreendimentoPalmeiraReal_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_131.addFeatures(features_EmpreendimentoPalmeiraReal_131);
var lyr_EmpreendimentoPalmeiraReal_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_131, 
                style: style_EmpreendimentoPalmeiraReal_131,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
    title: 'Empreendimento Palmeira Real<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoPalmeiraReal_131_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoPalmeiraReal_132 = new ol.format.GeoJSON();
var features_EmpreendimentoPalmeiraReal_132 = format_EmpreendimentoPalmeiraReal_132.readFeatures(json_EmpreendimentoPalmeiraReal_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoPalmeiraReal_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoPalmeiraReal_132.addFeatures(features_EmpreendimentoPalmeiraReal_132);
var lyr_EmpreendimentoPalmeiraReal_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoPalmeiraReal_132, 
                style: style_EmpreendimentoPalmeiraReal_132,
                popuplayertitle: 'Empreendimento Palmeira Real',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoPalmeiraReal_132.png" /> Empreendimento Palmeira Real'
            });
var format_EmpreendimentoEssence_133 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_133 = format_EmpreendimentoEssence_133.readFeatures(json_EmpreendimentoEssence_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_133.addFeatures(features_EmpreendimentoEssence_133);
var lyr_EmpreendimentoEssence_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_133, 
                style: style_EmpreendimentoEssence_133,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_133.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoEssence_134 = new ol.format.GeoJSON();
var features_EmpreendimentoEssence_134 = format_EmpreendimentoEssence_134.readFeatures(json_EmpreendimentoEssence_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEssence_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEssence_134.addFeatures(features_EmpreendimentoEssence_134);
var lyr_EmpreendimentoEssence_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEssence_134, 
                style: style_EmpreendimentoEssence_134,
                popuplayertitle: 'Empreendimento Essence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEssence_134.png" /> Empreendimento Essence'
            });
var format_EmpreendimentoVersalhes_135 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_135 = format_EmpreendimentoVersalhes_135.readFeatures(json_EmpreendimentoVersalhes_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_135.addFeatures(features_EmpreendimentoVersalhes_135);
var lyr_EmpreendimentoVersalhes_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_135, 
                style: style_EmpreendimentoVersalhes_135,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
    title: 'Empreendimento Versalhes<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_3.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoVersalhes_135_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoVersalhes_136 = new ol.format.GeoJSON();
var features_EmpreendimentoVersalhes_136 = format_EmpreendimentoVersalhes_136.readFeatures(json_EmpreendimentoVersalhes_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVersalhes_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVersalhes_136.addFeatures(features_EmpreendimentoVersalhes_136);
var lyr_EmpreendimentoVersalhes_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVersalhes_136, 
                style: style_EmpreendimentoVersalhes_136,
                popuplayertitle: 'Empreendimento Versalhes',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVersalhes_136.png" /> Empreendimento Versalhes'
            });
var format_EmpreendimentoSonetto_137 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_137 = format_EmpreendimentoSonetto_137.readFeatures(json_EmpreendimentoSonetto_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_137.addFeatures(features_EmpreendimentoSonetto_137);
var lyr_EmpreendimentoSonetto_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_137, 
                style: style_EmpreendimentoSonetto_137,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_137.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoSonetto_138 = new ol.format.GeoJSON();
var features_EmpreendimentoSonetto_138 = format_EmpreendimentoSonetto_138.readFeatures(json_EmpreendimentoSonetto_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoSonetto_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoSonetto_138.addFeatures(features_EmpreendimentoSonetto_138);
var lyr_EmpreendimentoSonetto_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoSonetto_138, 
                style: style_EmpreendimentoSonetto_138,
                popuplayertitle: 'Empreendimento Sonetto',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoSonetto_138.png" /> Empreendimento Sonetto'
            });
var format_EmpreendimentoResidencialSantaIns_139 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_139 = format_EmpreendimentoResidencialSantaIns_139.readFeatures(json_EmpreendimentoResidencialSantaIns_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_139.addFeatures(features_EmpreendimentoResidencialSantaIns_139);
var lyr_EmpreendimentoResidencialSantaIns_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_139, 
                style: style_EmpreendimentoResidencialSantaIns_139,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
    title: 'Empreendimento Residencial Santa Inês<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaIns_139_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaIns_140 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaIns_140 = format_EmpreendimentoResidencialSantaIns_140.readFeatures(json_EmpreendimentoResidencialSantaIns_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaIns_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaIns_140.addFeatures(features_EmpreendimentoResidencialSantaIns_140);
var lyr_EmpreendimentoResidencialSantaIns_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaIns_140, 
                style: style_EmpreendimentoResidencialSantaIns_140,
                popuplayertitle: 'Empreendimento Residencial Santa Inês',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaIns_140.png" /> Empreendimento Residencial Santa Inês'
            });
var format_EmpreendimentoEdifcioSolNascente_141 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_141 = format_EmpreendimentoEdifcioSolNascente_141.readFeatures(json_EmpreendimentoEdifcioSolNascente_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_141.addFeatures(features_EmpreendimentoEdifcioSolNascente_141);
var lyr_EmpreendimentoEdifcioSolNascente_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_141, 
                style: style_EmpreendimentoEdifcioSolNascente_141,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_141.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoEdifcioSolNascente_142 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioSolNascente_142 = format_EmpreendimentoEdifcioSolNascente_142.readFeatures(json_EmpreendimentoEdifcioSolNascente_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioSolNascente_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioSolNascente_142.addFeatures(features_EmpreendimentoEdifcioSolNascente_142);
var lyr_EmpreendimentoEdifcioSolNascente_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioSolNascente_142, 
                style: style_EmpreendimentoEdifcioSolNascente_142,
                popuplayertitle: 'Empreendimento Edifício Sol Nascente',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioSolNascente_142.png" /> Empreendimento Edifício Sol Nascente'
            });
var format_EmpreendimentoResidencialQuintadosOitis_143 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_143 = format_EmpreendimentoResidencialQuintadosOitis_143.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_143.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_143);
var lyr_EmpreendimentoResidencialQuintadosOitis_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_143, 
                style: style_EmpreendimentoResidencialQuintadosOitis_143,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
    title: 'Empreendimento Residencial Quinta dos Oitis<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_143_5.png" /> Ruas<br />' });
var format_EmpreendimentoResidencialQuintadosOitis_144 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadosOitis_144 = format_EmpreendimentoResidencialQuintadosOitis_144.readFeatures(json_EmpreendimentoResidencialQuintadosOitis_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadosOitis_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadosOitis_144.addFeatures(features_EmpreendimentoResidencialQuintadosOitis_144);
var lyr_EmpreendimentoResidencialQuintadosOitis_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadosOitis_144, 
                style: style_EmpreendimentoResidencialQuintadosOitis_144,
                popuplayertitle: 'Empreendimento Residencial Quinta dos Oitis',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadosOitis_144.png" /> Empreendimento Residencial Quinta dos Oitis'
            });
var format_EmpreendimentoResidencialQuintadoSol_145 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_145 = format_EmpreendimentoResidencialQuintadoSol_145.readFeatures(json_EmpreendimentoResidencialQuintadoSol_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_145.addFeatures(features_EmpreendimentoResidencialQuintadoSol_145);
var lyr_EmpreendimentoResidencialQuintadoSol_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_145, 
                style: style_EmpreendimentoResidencialQuintadoSol_145,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
    title: 'Empreendimento Residencial Quinta do Sol<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_2.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResidencialQuintadoSol_145_6.png" /> RUAS<br />' });
var format_EmpreendimentoResidencialQuintadoSol_146 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialQuintadoSol_146 = format_EmpreendimentoResidencialQuintadoSol_146.readFeatures(json_EmpreendimentoResidencialQuintadoSol_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialQuintadoSol_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialQuintadoSol_146.addFeatures(features_EmpreendimentoResidencialQuintadoSol_146);
var lyr_EmpreendimentoResidencialQuintadoSol_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialQuintadoSol_146, 
                style: style_EmpreendimentoResidencialQuintadoSol_146,
                popuplayertitle: 'Empreendimento Residencial Quinta do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialQuintadoSol_146.png" /> Empreendimento Residencial Quinta do Sol'
            });
var format_EmpreendimentoParquePalmeiraImperial_147 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_147 = format_EmpreendimentoParquePalmeiraImperial_147.readFeatures(json_EmpreendimentoParquePalmeiraImperial_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_147.addFeatures(features_EmpreendimentoParquePalmeiraImperial_147);
var lyr_EmpreendimentoParquePalmeiraImperial_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_147, 
                style: style_EmpreendimentoParquePalmeiraImperial_147,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
    title: 'Empreendimento Parque Palmeira Imperial<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_3.png" /> AREA REMANESCENTE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_5.png" /> LOTES<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_6.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParquePalmeiraImperial_147_7.png" /> RUAS<br />' });
var format_EmpreendimentoParquePalmeiraImperial_148 = new ol.format.GeoJSON();
var features_EmpreendimentoParquePalmeiraImperial_148 = format_EmpreendimentoParquePalmeiraImperial_148.readFeatures(json_EmpreendimentoParquePalmeiraImperial_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParquePalmeiraImperial_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParquePalmeiraImperial_148.addFeatures(features_EmpreendimentoParquePalmeiraImperial_148);
var lyr_EmpreendimentoParquePalmeiraImperial_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParquePalmeiraImperial_148, 
                style: style_EmpreendimentoParquePalmeiraImperial_148,
                popuplayertitle: 'Empreendimento Parque Palmeira Imperial',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParquePalmeiraImperial_148.png" /> Empreendimento Parque Palmeira Imperial'
            });
var format_EmpreendimentoBordadaMata_149 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_149 = format_EmpreendimentoBordadaMata_149.readFeatures(json_EmpreendimentoBordadaMata_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_149.addFeatures(features_EmpreendimentoBordadaMata_149);
var lyr_EmpreendimentoBordadaMata_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_149, 
                style: style_EmpreendimentoBordadaMata_149,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
    title: 'Empreendimento Borda da Mata<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoBordadaMata_149_6.png" /> Represa<br />' });
var format_EmpreendimentoBordadaMata_150 = new ol.format.GeoJSON();
var features_EmpreendimentoBordadaMata_150 = format_EmpreendimentoBordadaMata_150.readFeatures(json_EmpreendimentoBordadaMata_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoBordadaMata_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoBordadaMata_150.addFeatures(features_EmpreendimentoBordadaMata_150);
var lyr_EmpreendimentoBordadaMata_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoBordadaMata_150, 
                style: style_EmpreendimentoBordadaMata_150,
                popuplayertitle: 'Empreendimento Borda da Mata',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoBordadaMata_150.png" /> Empreendimento Borda da Mata'
            });
var format_EmpreendimentoEdifcioResidencialHope_151 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_151 = format_EmpreendimentoEdifcioResidencialHope_151.readFeatures(json_EmpreendimentoEdifcioResidencialHope_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_151.addFeatures(features_EmpreendimentoEdifcioResidencialHope_151);
var lyr_EmpreendimentoEdifcioResidencialHope_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_151, 
                style: style_EmpreendimentoEdifcioResidencialHope_151,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_151.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoEdifcioResidencialHope_152 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioResidencialHope_152 = format_EmpreendimentoEdifcioResidencialHope_152.readFeatures(json_EmpreendimentoEdifcioResidencialHope_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioResidencialHope_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioResidencialHope_152.addFeatures(features_EmpreendimentoEdifcioResidencialHope_152);
var lyr_EmpreendimentoEdifcioResidencialHope_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioResidencialHope_152, 
                style: style_EmpreendimentoEdifcioResidencialHope_152,
                popuplayertitle: 'Empreendimento Edifício Residencial Hope',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioResidencialHope_152.png" /> Empreendimento Edifício Residencial Hope'
            });
var format_EmpreendimentoHorizResidence_153 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_153 = format_EmpreendimentoHorizResidence_153.readFeatures(json_EmpreendimentoHorizResidence_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_153.addFeatures(features_EmpreendimentoHorizResidence_153);
var lyr_EmpreendimentoHorizResidence_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_153, 
                style: style_EmpreendimentoHorizResidence_153,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_153.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoHorizResidence_154 = new ol.format.GeoJSON();
var features_EmpreendimentoHorizResidence_154 = format_EmpreendimentoHorizResidence_154.readFeatures(json_EmpreendimentoHorizResidence_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoHorizResidence_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoHorizResidence_154.addFeatures(features_EmpreendimentoHorizResidence_154);
var lyr_EmpreendimentoHorizResidence_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoHorizResidence_154, 
                style: style_EmpreendimentoHorizResidence_154,
                popuplayertitle: 'Empreendimento Horiz Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoHorizResidence_154.png" /> Empreendimento Horiz Residence'
            });
var format_EmpreendimentoJardimFlora_155 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_155 = format_EmpreendimentoJardimFlora_155.readFeatures(json_EmpreendimentoJardimFlora_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_155.addFeatures(features_EmpreendimentoJardimFlora_155);
var lyr_EmpreendimentoJardimFlora_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_155, 
                style: style_EmpreendimentoJardimFlora_155,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
    title: 'Empreendimento Jardim Flora<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_5.png" /> LOTES COMERCIAIS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_6.png" /> LOTES MISTOS<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_7.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoJardimFlora_155_8.png" /> RUAS<br />' });
var format_EmpreendimentoJardimFlora_156 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimFlora_156 = format_EmpreendimentoJardimFlora_156.readFeatures(json_EmpreendimentoJardimFlora_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimFlora_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimFlora_156.addFeatures(features_EmpreendimentoJardimFlora_156);
var lyr_EmpreendimentoJardimFlora_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimFlora_156, 
                style: style_EmpreendimentoJardimFlora_156,
                popuplayertitle: 'Empreendimento Jardim Flora',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimFlora_156.png" /> Empreendimento Jardim Flora'
            });
var format_EmpreendimentoJardimHorizonte_157 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_157 = format_EmpreendimentoJardimHorizonte_157.readFeatures(json_EmpreendimentoJardimHorizonte_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_157.addFeatures(features_EmpreendimentoJardimHorizonte_157);
var lyr_EmpreendimentoJardimHorizonte_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_157, 
                style: style_EmpreendimentoJardimHorizonte_157,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
    title: 'Empreendimento Jardim Horizonte<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_5.png" /> Lotes Mistos<br />\
    <img src="styles/legend/EmpreendimentoJardimHorizonte_157_6.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoJardimHorizonte_158 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimHorizonte_158 = format_EmpreendimentoJardimHorizonte_158.readFeatures(json_EmpreendimentoJardimHorizonte_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimHorizonte_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimHorizonte_158.addFeatures(features_EmpreendimentoJardimHorizonte_158);
var lyr_EmpreendimentoJardimHorizonte_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimHorizonte_158, 
                style: style_EmpreendimentoJardimHorizonte_158,
                popuplayertitle: 'Empreendimento Jardim Horizonte',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimHorizonte_158.png" /> Empreendimento Jardim Horizonte'
            });
var format_EmpreendimentoJardimMariaLuiza_159 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_159 = format_EmpreendimentoJardimMariaLuiza_159.readFeatures(json_EmpreendimentoJardimMariaLuiza_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_159.addFeatures(features_EmpreendimentoJardimMariaLuiza_159);
var lyr_EmpreendimentoJardimMariaLuiza_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_159, 
                style: style_EmpreendimentoJardimMariaLuiza_159,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
    title: 'Empreendimento Jardim Maria Luiza<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_159_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_159_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_159_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_159_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoJardimMariaLuiza_159_4.png" /> Passeio<br />' });
var format_EmpreendimentoJardimMariaLuiza_160 = new ol.format.GeoJSON();
var features_EmpreendimentoJardimMariaLuiza_160 = format_EmpreendimentoJardimMariaLuiza_160.readFeatures(json_EmpreendimentoJardimMariaLuiza_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoJardimMariaLuiza_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoJardimMariaLuiza_160.addFeatures(features_EmpreendimentoJardimMariaLuiza_160);
var lyr_EmpreendimentoJardimMariaLuiza_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoJardimMariaLuiza_160, 
                style: style_EmpreendimentoJardimMariaLuiza_160,
                popuplayertitle: 'Empreendimento Jardim Maria Luiza',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoJardimMariaLuiza_160.png" /> Empreendimento Jardim Maria Luiza'
            });
var format_EmpreendimentoMontBlancResidence_161 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_161 = format_EmpreendimentoMontBlancResidence_161.readFeatures(json_EmpreendimentoMontBlancResidence_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_161.addFeatures(features_EmpreendimentoMontBlancResidence_161);
var lyr_EmpreendimentoMontBlancResidence_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_161, 
                style: style_EmpreendimentoMontBlancResidence_161,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_161.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMontBlancResidence_162 = new ol.format.GeoJSON();
var features_EmpreendimentoMontBlancResidence_162 = format_EmpreendimentoMontBlancResidence_162.readFeatures(json_EmpreendimentoMontBlancResidence_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMontBlancResidence_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMontBlancResidence_162.addFeatures(features_EmpreendimentoMontBlancResidence_162);
var lyr_EmpreendimentoMontBlancResidence_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMontBlancResidence_162, 
                style: style_EmpreendimentoMontBlancResidence_162,
                popuplayertitle: 'Empreendimento Mont Blanc Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMontBlancResidence_162.png" /> Empreendimento Mont Blanc Residence'
            });
var format_EmpreendimentoMoradadoVerdeII_163 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_163 = format_EmpreendimentoMoradadoVerdeII_163.readFeatures(json_EmpreendimentoMoradadoVerdeII_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_163.addFeatures(features_EmpreendimentoMoradadoVerdeII_163);
var lyr_EmpreendimentoMoradadoVerdeII_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_163, 
                style: style_EmpreendimentoMoradadoVerdeII_163,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
    title: 'Empreendimento Morada do Verde II<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_5.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoMoradadoVerdeII_163_6.png" /> Lotes Mistos<br />' });
var format_EmpreendimentoMoradadoVerdeII_164 = new ol.format.GeoJSON();
var features_EmpreendimentoMoradadoVerdeII_164 = format_EmpreendimentoMoradadoVerdeII_164.readFeatures(json_EmpreendimentoMoradadoVerdeII_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoMoradadoVerdeII_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoMoradadoVerdeII_164.addFeatures(features_EmpreendimentoMoradadoVerdeII_164);
var lyr_EmpreendimentoMoradadoVerdeII_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoMoradadoVerdeII_164, 
                style: style_EmpreendimentoMoradadoVerdeII_164,
                popuplayertitle: 'Empreendimento Morada do Verde II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoMoradadoVerdeII_164.png" /> Empreendimento Morada do Verde II'
            });
var format_EmpreendimentoParagonII_165 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_165 = format_EmpreendimentoParagonII_165.readFeatures(json_EmpreendimentoParagonII_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_165.addFeatures(features_EmpreendimentoParagonII_165);
var lyr_EmpreendimentoParagonII_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_165, 
                style: style_EmpreendimentoParagonII_165,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
    title: 'Empreendimento Paragon II<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_0.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_1.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_2.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_3.png" /> LOTES RESIDENCIAIS<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_4.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoParagonII_165_5.png" /> RUAS<br />' });
var format_EmpreendimentoParagonII_166 = new ol.format.GeoJSON();
var features_EmpreendimentoParagonII_166 = format_EmpreendimentoParagonII_166.readFeatures(json_EmpreendimentoParagonII_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagonII_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagonII_166.addFeatures(features_EmpreendimentoParagonII_166);
var lyr_EmpreendimentoParagonII_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagonII_166, 
                style: style_EmpreendimentoParagonII_166,
                popuplayertitle: 'Empreendimento Paragon II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagonII_166.png" /> Empreendimento Paragon II'
            });
var format_EmpreendimentoParagon_167 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_167 = format_EmpreendimentoParagon_167.readFeatures(json_EmpreendimentoParagon_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_167.addFeatures(features_EmpreendimentoParagon_167);
var lyr_EmpreendimentoParagon_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_167, 
                style: style_EmpreendimentoParagon_167,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
    title: 'Empreendimento Paragon<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_4.png" /> Viela<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_5.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoParagon_167_6.png" /> Passeio<br />' });
var format_EmpreendimentoParagon_168 = new ol.format.GeoJSON();
var features_EmpreendimentoParagon_168 = format_EmpreendimentoParagon_168.readFeatures(json_EmpreendimentoParagon_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParagon_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParagon_168.addFeatures(features_EmpreendimentoParagon_168);
var lyr_EmpreendimentoParagon_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParagon_168, 
                style: style_EmpreendimentoParagon_168,
                popuplayertitle: 'Empreendimento Paragon',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParagon_168.png" /> Empreendimento Paragon'
            });
var format_EmpreendimentoParqueVillaLobos_169 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_169 = format_EmpreendimentoParqueVillaLobos_169.readFeatures(json_EmpreendimentoParqueVillaLobos_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_169.addFeatures(features_EmpreendimentoParqueVillaLobos_169);
var lyr_EmpreendimentoParqueVillaLobos_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_169, 
                style: style_EmpreendimentoParqueVillaLobos_169,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
    title: 'Empreendimento Parque Villa-Lobos<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_3.png" /> Lotes Comerciais<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoParqueVillaLobos_169_5.png" /> Lotes Residenciais<br />' });
var format_EmpreendimentoParqueVillaLobos_170 = new ol.format.GeoJSON();
var features_EmpreendimentoParqueVillaLobos_170 = format_EmpreendimentoParqueVillaLobos_170.readFeatures(json_EmpreendimentoParqueVillaLobos_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoParqueVillaLobos_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoParqueVillaLobos_170.addFeatures(features_EmpreendimentoParqueVillaLobos_170);
var lyr_EmpreendimentoParqueVillaLobos_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoParqueVillaLobos_170, 
                style: style_EmpreendimentoParqueVillaLobos_170,
                popuplayertitle: 'Empreendimento Parque Villa-Lobos',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoParqueVillaLobos_170.png" /> Empreendimento Parque Villa-Lobos'
            });
var format_EmpreendimentoDaVinci_171 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_171 = format_EmpreendimentoDaVinci_171.readFeatures(json_EmpreendimentoDaVinci_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_171.addFeatures(features_EmpreendimentoDaVinci_171);
var lyr_EmpreendimentoDaVinci_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_171, 
                style: style_EmpreendimentoDaVinci_171,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_171.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoDaVinci_172 = new ol.format.GeoJSON();
var features_EmpreendimentoDaVinci_172 = format_EmpreendimentoDaVinci_172.readFeatures(json_EmpreendimentoDaVinci_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoDaVinci_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoDaVinci_172.addFeatures(features_EmpreendimentoDaVinci_172);
var lyr_EmpreendimentoDaVinci_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoDaVinci_172, 
                style: style_EmpreendimentoDaVinci_172,
                popuplayertitle: 'Empreendimento Da Vinci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoDaVinci_172.png" /> Empreendimento Da Vinci'
            });
var format_EmpreendimentoResidencialDomingosJardini_173 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_173 = format_EmpreendimentoResidencialDomingosJardini_173.readFeatures(json_EmpreendimentoResidencialDomingosJardini_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_173.addFeatures(features_EmpreendimentoResidencialDomingosJardini_173);
var lyr_EmpreendimentoResidencialDomingosJardini_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_173, 
                style: style_EmpreendimentoResidencialDomingosJardini_173,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
    title: 'Empreendimento Residencial Domingos Jardini<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_1.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_2.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_3.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_4.png" /> Área Lazer<br />\
    <img src="styles/legend/EmpreendimentoResidencialDomingosJardini_173_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialDomingosJardini_174 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialDomingosJardini_174 = format_EmpreendimentoResidencialDomingosJardini_174.readFeatures(json_EmpreendimentoResidencialDomingosJardini_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialDomingosJardini_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialDomingosJardini_174.addFeatures(features_EmpreendimentoResidencialDomingosJardini_174);
var lyr_EmpreendimentoResidencialDomingosJardini_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialDomingosJardini_174, 
                style: style_EmpreendimentoResidencialDomingosJardini_174,
                popuplayertitle: 'Empreendimento Residencial Domingos Jardini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialDomingosJardini_174.png" /> Empreendimento Residencial Domingos Jardini'
            });
var format_EmpreendimentoResidencialSantaF_175 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_175 = format_EmpreendimentoResidencialSantaF_175.readFeatures(json_EmpreendimentoResidencialSantaF_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_175.addFeatures(features_EmpreendimentoResidencialSantaF_175);
var lyr_EmpreendimentoResidencialSantaF_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_175, 
                style: style_EmpreendimentoResidencialSantaF_175,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
    title: 'Empreendimento Residencial Santa Fé<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_1.png" /> Canteiro<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResidencialSantaF_175_5.png" /> Passeio<br />' });
var format_EmpreendimentoResidencialSantaF_176 = new ol.format.GeoJSON();
var features_EmpreendimentoResidencialSantaF_176 = format_EmpreendimentoResidencialSantaF_176.readFeatures(json_EmpreendimentoResidencialSantaF_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResidencialSantaF_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResidencialSantaF_176.addFeatures(features_EmpreendimentoResidencialSantaF_176);
var lyr_EmpreendimentoResidencialSantaF_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResidencialSantaF_176, 
                style: style_EmpreendimentoResidencialSantaF_176,
                popuplayertitle: 'Empreendimento Residencial Santa Fé',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResidencialSantaF_176.png" /> Empreendimento Residencial Santa Fé'
            });
var format_EmpreendimentoEdifcioRuadoSol_177 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_177 = format_EmpreendimentoEdifcioRuadoSol_177.readFeatures(json_EmpreendimentoEdifcioRuadoSol_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_177.addFeatures(features_EmpreendimentoEdifcioRuadoSol_177);
var lyr_EmpreendimentoEdifcioRuadoSol_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_177, 
                style: style_EmpreendimentoEdifcioRuadoSol_177,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_177.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoEdifcioRuadoSol_178 = new ol.format.GeoJSON();
var features_EmpreendimentoEdifcioRuadoSol_178 = format_EmpreendimentoEdifcioRuadoSol_178.readFeatures(json_EmpreendimentoEdifcioRuadoSol_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoEdifcioRuadoSol_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoEdifcioRuadoSol_178.addFeatures(features_EmpreendimentoEdifcioRuadoSol_178);
var lyr_EmpreendimentoEdifcioRuadoSol_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoEdifcioRuadoSol_178, 
                style: style_EmpreendimentoEdifcioRuadoSol_178,
                popuplayertitle: 'Empreendimento Edifício Rua do Sol',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoEdifcioRuadoSol_178.png" /> Empreendimento Edifício Rua do Sol'
            });
var format_EmpreendimentoTorontoResidence_179 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_179 = format_EmpreendimentoTorontoResidence_179.readFeatures(json_EmpreendimentoTorontoResidence_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_179.addFeatures(features_EmpreendimentoTorontoResidence_179);
var lyr_EmpreendimentoTorontoResidence_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_179, 
                style: style_EmpreendimentoTorontoResidence_179,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
    title: 'Empreendimento Toronto Residence<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_0.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_1.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_2.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_3.png" /> Lazer<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_4.png" /> Passeio<br />\
    <img src="styles/legend/EmpreendimentoTorontoResidence_179_5.png" /> Vagas de Estacionamento<br />' });
var format_EmpreendimentoTorontoResidence_180 = new ol.format.GeoJSON();
var features_EmpreendimentoTorontoResidence_180 = format_EmpreendimentoTorontoResidence_180.readFeatures(json_EmpreendimentoTorontoResidence_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoTorontoResidence_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoTorontoResidence_180.addFeatures(features_EmpreendimentoTorontoResidence_180);
var lyr_EmpreendimentoTorontoResidence_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoTorontoResidence_180, 
                style: style_EmpreendimentoTorontoResidence_180,
                popuplayertitle: 'Empreendimento Toronto Residence',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoTorontoResidence_180.png" /> Empreendimento Toronto Residence'
            });
var format_EmpreendimentoVillaPucci_181 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_181 = format_EmpreendimentoVillaPucci_181.readFeatures(json_EmpreendimentoVillaPucci_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_181.addFeatures(features_EmpreendimentoVillaPucci_181);
var lyr_EmpreendimentoVillaPucci_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_181, 
                style: style_EmpreendimentoVillaPucci_181,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
    title: 'Empreendimento Villa Pucci<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_3.png" /> AREA NON EDIFICANDI<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_4.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_5.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_6.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoVillaPucci_181_7.png" /> RUAS<br />' });
var format_EmpreendimentoVillaPucci_182 = new ol.format.GeoJSON();
var features_EmpreendimentoVillaPucci_182 = format_EmpreendimentoVillaPucci_182.readFeatures(json_EmpreendimentoVillaPucci_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoVillaPucci_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoVillaPucci_182.addFeatures(features_EmpreendimentoVillaPucci_182);
var lyr_EmpreendimentoVillaPucci_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoVillaPucci_182, 
                style: style_EmpreendimentoVillaPucci_182,
                popuplayertitle: 'Empreendimento Villa Pucci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoVillaPucci_182.png" /> Empreendimento Villa Pucci'
            });
var format_EmpreendimentoFerracini_183 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_183 = format_EmpreendimentoFerracini_183.readFeatures(json_EmpreendimentoFerracini_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_183.addFeatures(features_EmpreendimentoFerracini_183);
var lyr_EmpreendimentoFerracini_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_183, 
                style: style_EmpreendimentoFerracini_183,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
    title: 'Empreendimento Ferracini<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoFerracini_183_7.png" /> VIELA<br />' });
var format_EmpreendimentoFerracini_184 = new ol.format.GeoJSON();
var features_EmpreendimentoFerracini_184 = format_EmpreendimentoFerracini_184.readFeatures(json_EmpreendimentoFerracini_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoFerracini_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoFerracini_184.addFeatures(features_EmpreendimentoFerracini_184);
var lyr_EmpreendimentoFerracini_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoFerracini_184, 
                style: style_EmpreendimentoFerracini_184,
                popuplayertitle: 'Empreendimento Ferracini',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoFerracini_184.png" /> Empreendimento Ferracini'
            });
var format_EmpreendimentoColorado_185 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_185 = format_EmpreendimentoColorado_185.readFeatures(json_EmpreendimentoColorado_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_185.addFeatures(features_EmpreendimentoColorado_185);
var lyr_EmpreendimentoColorado_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_185, 
                style: style_EmpreendimentoColorado_185,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
    title: 'Empreendimento Colorado<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_5.png" /> PASSSEIO<br />\
    <img src="styles/legend/EmpreendimentoColorado_185_6.png" /> RUAS<br />' });
var format_EmpreendimentoColorado_186 = new ol.format.GeoJSON();
var features_EmpreendimentoColorado_186 = format_EmpreendimentoColorado_186.readFeatures(json_EmpreendimentoColorado_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoColorado_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoColorado_186.addFeatures(features_EmpreendimentoColorado_186);
var lyr_EmpreendimentoColorado_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoColorado_186, 
                style: style_EmpreendimentoColorado_186,
                popuplayertitle: 'Empreendimento Colorado',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoColorado_186.png" /> Empreendimento Colorado'
            });
var format_EmpreendimentoResicencialNairRetuciII_187 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_187 = format_EmpreendimentoResicencialNairRetuciII_187.readFeatures(json_EmpreendimentoResicencialNairRetuciII_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_187.addFeatures(features_EmpreendimentoResicencialNairRetuciII_187);
var lyr_EmpreendimentoResicencialNairRetuciII_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_187, 
                style: style_EmpreendimentoResicencialNairRetuciII_187,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci II<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuciII_187_6.png" /> RUAS<br />' });
var format_EmpreendimentoResicencialNairRetuciII_188 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuciII_188 = format_EmpreendimentoResicencialNairRetuciII_188.readFeatures(json_EmpreendimentoResicencialNairRetuciII_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuciII_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuciII_188.addFeatures(features_EmpreendimentoResicencialNairRetuciII_188);
var lyr_EmpreendimentoResicencialNairRetuciII_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuciII_188, 
                style: style_EmpreendimentoResicencialNairRetuciII_188,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci II',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuciII_188.png" /> Empreendimento Resicencial Nair Retuci II'
            });
var format_EmpreendimentoResicencialNairRetuci_189 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_189 = format_EmpreendimentoResicencialNairRetuci_189.readFeatures(json_EmpreendimentoResicencialNairRetuci_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_189.addFeatures(features_EmpreendimentoResicencialNairRetuci_189);
var lyr_EmpreendimentoResicencialNairRetuci_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_189, 
                style: style_EmpreendimentoResicencialNairRetuci_189,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
    title: 'Empreendimento Resicencial Nair Retuci<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_0.png" /> Ciclovia<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_1.png" /> Ruas<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_2.png" /> Área Institucional<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_3.png" /> Lotes/Quadras<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_4.png" /> Área Verde<br />\
    <img src="styles/legend/EmpreendimentoResicencialNairRetuci_189_5.png" /> Passeio<br />' });
var format_EmpreendimentoResicencialNairRetuci_190 = new ol.format.GeoJSON();
var features_EmpreendimentoResicencialNairRetuci_190 = format_EmpreendimentoResicencialNairRetuci_190.readFeatures(json_EmpreendimentoResicencialNairRetuci_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoResicencialNairRetuci_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoResicencialNairRetuci_190.addFeatures(features_EmpreendimentoResicencialNairRetuci_190);
var lyr_EmpreendimentoResicencialNairRetuci_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoResicencialNairRetuci_190, 
                style: style_EmpreendimentoResicencialNairRetuci_190,
                popuplayertitle: 'Empreendimento Resicencial Nair Retuci',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoResicencialNairRetuci_190.png" /> Empreendimento Resicencial Nair Retuci'
            });
var format_EmpreendimentoCidadeJardim_191 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_191 = format_EmpreendimentoCidadeJardim_191.readFeatures(json_EmpreendimentoCidadeJardim_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_191.addFeatures(features_EmpreendimentoCidadeJardim_191);
var lyr_EmpreendimentoCidadeJardim_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_191, 
                style: style_EmpreendimentoCidadeJardim_191,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
    title: 'Empreendimento Cidade Jardim<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_0.png" /> APP<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_1.png" /> AREA INSTITUCIONAL<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_2.png" /> AREA LAZER<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_3.png" /> AREA VERDE<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_4.png" /> LOTES QUADRAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_5.png" /> PASSEIO<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_6.png" /> RUAS<br />\
    <img src="styles/legend/EmpreendimentoCidadeJardim_191_7.png" /> SERVIDAO<br />' });
var format_EmpreendimentoCidadeJardim_192 = new ol.format.GeoJSON();
var features_EmpreendimentoCidadeJardim_192 = format_EmpreendimentoCidadeJardim_192.readFeatures(json_EmpreendimentoCidadeJardim_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentoCidadeJardim_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentoCidadeJardim_192.addFeatures(features_EmpreendimentoCidadeJardim_192);
var lyr_EmpreendimentoCidadeJardim_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentoCidadeJardim_192, 
                style: style_EmpreendimentoCidadeJardim_192,
                popuplayertitle: 'Empreendimento Cidade Jardim',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentoCidadeJardim_192.png" /> Empreendimento Cidade Jardim'
            });
var format_ServidoRamal138kVFranca4Guanabara_193 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_193 = format_ServidoRamal138kVFranca4Guanabara_193.readFeatures(json_ServidoRamal138kVFranca4Guanabara_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_193.addFeatures(features_ServidoRamal138kVFranca4Guanabara_193);
var lyr_ServidoRamal138kVFranca4Guanabara_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_193, 
                style: style_ServidoRamal138kVFranca4Guanabara_193,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_193.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_ServidoRamal138kVFranca4Guanabara_194 = new ol.format.GeoJSON();
var features_ServidoRamal138kVFranca4Guanabara_194 = format_ServidoRamal138kVFranca4Guanabara_194.readFeatures(json_ServidoRamal138kVFranca4Guanabara_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ServidoRamal138kVFranca4Guanabara_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidoRamal138kVFranca4Guanabara_194.addFeatures(features_ServidoRamal138kVFranca4Guanabara_194);
var lyr_ServidoRamal138kVFranca4Guanabara_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidoRamal138kVFranca4Guanabara_194, 
                style: style_ServidoRamal138kVFranca4Guanabara_194,
                popuplayertitle: 'Servidão - Ramal 138kV Franca 4 - Guanabara',
                interactive: true,
                title: '<img src="styles/legend/ServidoRamal138kVFranca4Guanabara_194.png" /> Servidão - Ramal 138kV Franca 4 - Guanabara'
            });
var format_EmpreendimentosAprovado27unid_195 = new ol.format.GeoJSON();
var features_EmpreendimentosAprovado27unid_195 = format_EmpreendimentosAprovado27unid_195.readFeatures(json_EmpreendimentosAprovado27unid_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosAprovado27unid_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosAprovado27unid_195.addFeatures(features_EmpreendimentosAprovado27unid_195);
var lyr_EmpreendimentosAprovado27unid_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosAprovado27unid_195, 
                style: style_EmpreendimentosAprovado27unid_195,
                popuplayertitle: 'Empreendimentos - Aprovado (27 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosAprovado27unid_195.png" /> Empreendimentos - Aprovado (27 unid.)'
            });
var format_EmpreendimentosDiretriz8unid_196 = new ol.format.GeoJSON();
var features_EmpreendimentosDiretriz8unid_196 = format_EmpreendimentosDiretriz8unid_196.readFeatures(json_EmpreendimentosDiretriz8unid_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDiretriz8unid_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDiretriz8unid_196.addFeatures(features_EmpreendimentosDiretriz8unid_196);
var lyr_EmpreendimentosDiretriz8unid_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDiretriz8unid_196, 
                style: style_EmpreendimentosDiretriz8unid_196,
                popuplayertitle: 'Empreendimentos  - Diretriz (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDiretriz8unid_196.png" /> Empreendimentos  - Diretriz (8 unid.)'
            });
var format_EmpreendimentosDefinitiva7unid_197 = new ol.format.GeoJSON();
var features_EmpreendimentosDefinitiva7unid_197 = format_EmpreendimentosDefinitiva7unid_197.readFeatures(json_EmpreendimentosDefinitiva7unid_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosDefinitiva7unid_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosDefinitiva7unid_197.addFeatures(features_EmpreendimentosDefinitiva7unid_197);
var lyr_EmpreendimentosDefinitiva7unid_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosDefinitiva7unid_197, 
                style: style_EmpreendimentosDefinitiva7unid_197,
                popuplayertitle: 'Empreendimentos - Definitiva (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosDefinitiva7unid_197.png" /> Empreendimentos - Definitiva (7 unid.)'
            });
var format_EmpreendimentosPrvia24unid_198 = new ol.format.GeoJSON();
var features_EmpreendimentosPrvia24unid_198 = format_EmpreendimentosPrvia24unid_198.readFeatures(json_EmpreendimentosPrvia24unid_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EmpreendimentosPrvia24unid_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpreendimentosPrvia24unid_198.addFeatures(features_EmpreendimentosPrvia24unid_198);
var lyr_EmpreendimentosPrvia24unid_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpreendimentosPrvia24unid_198, 
                style: style_EmpreendimentosPrvia24unid_198,
                popuplayertitle: 'Empreendimentos - Prévia (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EmpreendimentosPrvia24unid_198.png" /> Empreendimentos - Prévia (24 unid.)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_199 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_199 = format_PBZPAEdifcioPrimeHELIPONTO_199.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_199.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_199);
var lyr_PBZPAEdifcioPrimeHELIPONTO_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_199, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_199,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
                title: '<img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_199.png" /> PBZPA - Edifício Prime (HELIPONTO)'
            });
var format_PBZPAEdifcioPrimeHELIPONTO_200 = new ol.format.GeoJSON();
var features_PBZPAEdifcioPrimeHELIPONTO_200 = format_PBZPAEdifcioPrimeHELIPONTO_200.readFeatures(json_PBZPAEdifcioPrimeHELIPONTO_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAEdifcioPrimeHELIPONTO_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAEdifcioPrimeHELIPONTO_200.addFeatures(features_PBZPAEdifcioPrimeHELIPONTO_200);
var lyr_PBZPAEdifcioPrimeHELIPONTO_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAEdifcioPrimeHELIPONTO_200, 
                style: style_PBZPAEdifcioPrimeHELIPONTO_200,
                popuplayertitle: 'PBZPA - Edifício Prime (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Edifício Prime (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_200_0.png" /> HELIPONTO<br />\
    <img src="styles/legend/PBZPAEdifcioPrimeHELIPONTO_200_1.png" /> RAMPA<br />' });
var format_PBZPAHospitalHELIPONTO_201 = new ol.format.GeoJSON();
var features_PBZPAHospitalHELIPONTO_201 = format_PBZPAHospitalHELIPONTO_201.readFeatures(json_PBZPAHospitalHELIPONTO_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PBZPAHospitalHELIPONTO_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBZPAHospitalHELIPONTO_201.addFeatures(features_PBZPAHospitalHELIPONTO_201);
var lyr_PBZPAHospitalHELIPONTO_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBZPAHospitalHELIPONTO_201, 
                style: style_PBZPAHospitalHELIPONTO_201,
                popuplayertitle: 'PBZPA - Hospital (HELIPONTO)',
                interactive: true,
    title: 'PBZPA - Hospital (HELIPONTO)<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_0.png" /> Aproximação 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_1.png" /> Aproximação 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_2.png" /> Area de Segurança 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_3.png" /> Decolagem 1 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_4.png" /> Decolagem 2 seção 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_5.png" /> FATO 1<br />\
    <img src="styles/legend/PBZPAHospitalHELIPONTO_201_6.png" /> TLOF 1<br />' });
var format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202 = new ol.format.GeoJSON();
var features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202 = format_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.readFeatures(json_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.addFeatures(features_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202);
var lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202, 
                style: style_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202,
                popuplayertitle: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)',
                interactive: true,
    title: 'Plano Básico de Zona de Proteção de Aeródromo (PBZPA)<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_0.png" /> Aproximação 1 Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_1.png" /> Aproximação 1 Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_2.png" /> Cônica<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_3.png" /> Decolagem Cab 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_4.png" /> Decolagem Cab 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_5.png" /> Faixa de Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_6.png" /> Horizontal Interna<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_7.png" /> Linha entre cabeceiras<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_8.png" /> Pista<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_9.png" /> SPVV 1<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_10.png" /> SPVV 2<br />\
    <img src="styles/legend/PlanoBsicodeZonadeProteodeAerdromoPBZPA_202_11.png" /> Transição<br />' });
var format_PrprioPblicoMunicipalArena3unid_203 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalArena3unid_203 = format_PrprioPblicoMunicipalArena3unid_203.readFeatures(json_PrprioPblicoMunicipalArena3unid_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalArena3unid_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalArena3unid_203.addFeatures(features_PrprioPblicoMunicipalArena3unid_203);
var lyr_PrprioPblicoMunicipalArena3unid_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalArena3unid_203, 
                style: style_PrprioPblicoMunicipalArena3unid_203,
                popuplayertitle: 'Próprio Público Municipal - Arena (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalArena3unid_203.png" /> Próprio Público Municipal - Arena (3 unid.)'
            });
var format_PrprioPblicoMunicipalBiblioteca1unid_204 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalBiblioteca1unid_204 = format_PrprioPblicoMunicipalBiblioteca1unid_204.readFeatures(json_PrprioPblicoMunicipalBiblioteca1unid_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalBiblioteca1unid_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalBiblioteca1unid_204.addFeatures(features_PrprioPblicoMunicipalBiblioteca1unid_204);
var lyr_PrprioPblicoMunicipalBiblioteca1unid_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalBiblioteca1unid_204, 
                style: style_PrprioPblicoMunicipalBiblioteca1unid_204,
                popuplayertitle: 'Próprio Público Municipal - Biblioteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalBiblioteca1unid_204.png" /> Próprio Público Municipal - Biblioteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalCampo18unid_205 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCampo18unid_205 = format_PrprioPblicoMunicipalCampo18unid_205.readFeatures(json_PrprioPblicoMunicipalCampo18unid_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCampo18unid_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCampo18unid_205.addFeatures(features_PrprioPblicoMunicipalCampo18unid_205);
var lyr_PrprioPblicoMunicipalCampo18unid_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCampo18unid_205, 
                style: style_PrprioPblicoMunicipalCampo18unid_205,
                popuplayertitle: 'Próprio Público Municipal - Campo (18 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCampo18unid_205.png" /> Próprio Público Municipal - Campo (18 unid.)'
            });
var format_PrprioPblicoMunicipalCasa1unid_206 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCasa1unid_206 = format_PrprioPblicoMunicipalCasa1unid_206.readFeatures(json_PrprioPblicoMunicipalCasa1unid_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCasa1unid_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCasa1unid_206.addFeatures(features_PrprioPblicoMunicipalCasa1unid_206);
var lyr_PrprioPblicoMunicipalCasa1unid_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCasa1unid_206, 
                style: style_PrprioPblicoMunicipalCasa1unid_206,
                popuplayertitle: 'Próprio Público Municipal - Casa (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCasa1unid_206.png" /> Próprio Público Municipal - Casa (1 unid.)'
            });
var format_PrprioPblicoMunicipalCentro4unid_207 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCentro4unid_207 = format_PrprioPblicoMunicipalCentro4unid_207.readFeatures(json_PrprioPblicoMunicipalCentro4unid_207, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCentro4unid_207 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCentro4unid_207.addFeatures(features_PrprioPblicoMunicipalCentro4unid_207);
var lyr_PrprioPblicoMunicipalCentro4unid_207 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCentro4unid_207, 
                style: style_PrprioPblicoMunicipalCentro4unid_207,
                popuplayertitle: 'Próprio Público Municipal - Centro (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCentro4unid_207.png" /> Próprio Público Municipal - Centro (4 unid.)'
            });
var format_PrprioPblicoMunicipalCEPEL12unid_208 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalCEPEL12unid_208 = format_PrprioPblicoMunicipalCEPEL12unid_208.readFeatures(json_PrprioPblicoMunicipalCEPEL12unid_208, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalCEPEL12unid_208 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalCEPEL12unid_208.addFeatures(features_PrprioPblicoMunicipalCEPEL12unid_208);
var lyr_PrprioPblicoMunicipalCEPEL12unid_208 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalCEPEL12unid_208, 
                style: style_PrprioPblicoMunicipalCEPEL12unid_208,
                popuplayertitle: 'Próprio Público Municipal - CEPEL (12 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalCEPEL12unid_208.png" /> Próprio Público Municipal - CEPEL (12 unid.)'
            });
var format_PrprioPblicoMunicipalConjunto4unid_209 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalConjunto4unid_209 = format_PrprioPblicoMunicipalConjunto4unid_209.readFeatures(json_PrprioPblicoMunicipalConjunto4unid_209, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalConjunto4unid_209 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalConjunto4unid_209.addFeatures(features_PrprioPblicoMunicipalConjunto4unid_209);
var lyr_PrprioPblicoMunicipalConjunto4unid_209 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalConjunto4unid_209, 
                style: style_PrprioPblicoMunicipalConjunto4unid_209,
                popuplayertitle: 'Próprio Público Municipal - Conjunto (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalConjunto4unid_209.png" /> Próprio Público Municipal - Conjunto (4 unid.)'
            });
var format_PrprioPblicoMunicipalEstadio1unid_210 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalEstadio1unid_210 = format_PrprioPblicoMunicipalEstadio1unid_210.readFeatures(json_PrprioPblicoMunicipalEstadio1unid_210, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalEstadio1unid_210 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalEstadio1unid_210.addFeatures(features_PrprioPblicoMunicipalEstadio1unid_210);
var lyr_PrprioPblicoMunicipalEstadio1unid_210 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalEstadio1unid_210, 
                style: style_PrprioPblicoMunicipalEstadio1unid_210,
                popuplayertitle: 'Próprio Público Municipal - Estadio (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalEstadio1unid_210.png" /> Próprio Público Municipal - Estadio (1 unid.)'
            });
var format_PrprioPblicoMunicipalGinsio5unid_211 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGinsio5unid_211 = format_PrprioPblicoMunicipalGinsio5unid_211.readFeatures(json_PrprioPblicoMunicipalGinsio5unid_211, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGinsio5unid_211 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGinsio5unid_211.addFeatures(features_PrprioPblicoMunicipalGinsio5unid_211);
var lyr_PrprioPblicoMunicipalGinsio5unid_211 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGinsio5unid_211, 
                style: style_PrprioPblicoMunicipalGinsio5unid_211,
                popuplayertitle: 'Próprio Público Municipal - Ginásio (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGinsio5unid_211.png" /> Próprio Público Municipal - Ginásio (5 unid.)'
            });
var format_PrprioPblicoMunicipalMuseu2unid_212 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalMuseu2unid_212 = format_PrprioPblicoMunicipalMuseu2unid_212.readFeatures(json_PrprioPblicoMunicipalMuseu2unid_212, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalMuseu2unid_212 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalMuseu2unid_212.addFeatures(features_PrprioPblicoMunicipalMuseu2unid_212);
var lyr_PrprioPblicoMunicipalMuseu2unid_212 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalMuseu2unid_212, 
                style: style_PrprioPblicoMunicipalMuseu2unid_212,
                popuplayertitle: 'Próprio Público Municipal - Museu (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalMuseu2unid_212.png" /> Próprio Público Municipal - Museu (2 unid.)'
            });
var format_PrprioPblicoMunicipalParque2unid_213 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalParque2unid_213 = format_PrprioPblicoMunicipalParque2unid_213.readFeatures(json_PrprioPblicoMunicipalParque2unid_213, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalParque2unid_213 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalParque2unid_213.addFeatures(features_PrprioPblicoMunicipalParque2unid_213);
var lyr_PrprioPblicoMunicipalParque2unid_213 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalParque2unid_213, 
                style: style_PrprioPblicoMunicipalParque2unid_213,
                popuplayertitle: 'Próprio Público Municipal - Parque (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalParque2unid_213.png" /> Próprio Público Municipal - Parque (2 unid.)'
            });
var format_PrprioPblicoMunicipalPavilho1unid_214 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPavilho1unid_214 = format_PrprioPblicoMunicipalPavilho1unid_214.readFeatures(json_PrprioPblicoMunicipalPavilho1unid_214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPavilho1unid_214 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPavilho1unid_214.addFeatures(features_PrprioPblicoMunicipalPavilho1unid_214);
var lyr_PrprioPblicoMunicipalPavilho1unid_214 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPavilho1unid_214, 
                style: style_PrprioPblicoMunicipalPavilho1unid_214,
                popuplayertitle: 'Próprio Público Municipal - Pavilhão (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPavilho1unid_214.png" /> Próprio Público Municipal - Pavilhão (1 unid.)'
            });
var format_PrprioPblicoMunicipalPinacoteca1unid_215 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPinacoteca1unid_215 = format_PrprioPblicoMunicipalPinacoteca1unid_215.readFeatures(json_PrprioPblicoMunicipalPinacoteca1unid_215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPinacoteca1unid_215 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPinacoteca1unid_215.addFeatures(features_PrprioPblicoMunicipalPinacoteca1unid_215);
var lyr_PrprioPblicoMunicipalPinacoteca1unid_215 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPinacoteca1unid_215, 
                style: style_PrprioPblicoMunicipalPinacoteca1unid_215,
                popuplayertitle: 'Próprio Público Municipal - Pinacoteca (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPinacoteca1unid_215.png" /> Próprio Público Municipal - Pinacoteca (1 unid.)'
            });
var format_PrprioPblicoMunicipalPiscina1unid_216 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPiscina1unid_216 = format_PrprioPblicoMunicipalPiscina1unid_216.readFeatures(json_PrprioPblicoMunicipalPiscina1unid_216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPiscina1unid_216 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPiscina1unid_216.addFeatures(features_PrprioPblicoMunicipalPiscina1unid_216);
var lyr_PrprioPblicoMunicipalPiscina1unid_216 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPiscina1unid_216, 
                style: style_PrprioPblicoMunicipalPiscina1unid_216,
                popuplayertitle: 'Próprio Público Municipal - Piscina (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPiscina1unid_216.png" /> Próprio Público Municipal - Piscina (1 unid.)'
            });
var format_PrprioPblicoMunicipalPista1unid_217 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPista1unid_217 = format_PrprioPblicoMunicipalPista1unid_217.readFeatures(json_PrprioPblicoMunicipalPista1unid_217, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPista1unid_217 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPista1unid_217.addFeatures(features_PrprioPblicoMunicipalPista1unid_217);
var lyr_PrprioPblicoMunicipalPista1unid_217 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPista1unid_217, 
                style: style_PrprioPblicoMunicipalPista1unid_217,
                popuplayertitle: 'Próprio Público Municipal - Pista (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPista1unid_217.png" /> Próprio Público Municipal - Pista (1 unid.)'
            });
var format_PrprioPblicoMunicipalPraa3unid_218 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalPraa3unid_218 = format_PrprioPblicoMunicipalPraa3unid_218.readFeatures(json_PrprioPblicoMunicipalPraa3unid_218, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalPraa3unid_218 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalPraa3unid_218.addFeatures(features_PrprioPblicoMunicipalPraa3unid_218);
var lyr_PrprioPblicoMunicipalPraa3unid_218 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalPraa3unid_218, 
                style: style_PrprioPblicoMunicipalPraa3unid_218,
                popuplayertitle: 'Próprio Público Municipal - Praça (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalPraa3unid_218.png" /> Próprio Público Municipal - Praça (3 unid.)'
            });
var format_PrprioPblicoMunicipalQuadra3unid_219 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalQuadra3unid_219 = format_PrprioPblicoMunicipalQuadra3unid_219.readFeatures(json_PrprioPblicoMunicipalQuadra3unid_219, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalQuadra3unid_219 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalQuadra3unid_219.addFeatures(features_PrprioPblicoMunicipalQuadra3unid_219);
var lyr_PrprioPblicoMunicipalQuadra3unid_219 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalQuadra3unid_219, 
                style: style_PrprioPblicoMunicipalQuadra3unid_219,
                popuplayertitle: 'Próprio Público Municipal - Quadra (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalQuadra3unid_219.png" /> Próprio Público Municipal - Quadra (3 unid.)'
            });
var format_PrprioPblicoMunicipalSecretaria1unid_220 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalSecretaria1unid_220 = format_PrprioPblicoMunicipalSecretaria1unid_220.readFeatures(json_PrprioPblicoMunicipalSecretaria1unid_220, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalSecretaria1unid_220 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalSecretaria1unid_220.addFeatures(features_PrprioPblicoMunicipalSecretaria1unid_220);
var lyr_PrprioPblicoMunicipalSecretaria1unid_220 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalSecretaria1unid_220, 
                style: style_PrprioPblicoMunicipalSecretaria1unid_220,
                popuplayertitle: 'Próprio Público Municipal - Secretaria (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalSecretaria1unid_220.png" /> Próprio Público Municipal - Secretaria (1 unid.)'
            });
var format_PrprioPblicoMunicipalTeatro2unid_221 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalTeatro2unid_221 = format_PrprioPblicoMunicipalTeatro2unid_221.readFeatures(json_PrprioPblicoMunicipalTeatro2unid_221, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalTeatro2unid_221 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalTeatro2unid_221.addFeatures(features_PrprioPblicoMunicipalTeatro2unid_221);
var lyr_PrprioPblicoMunicipalTeatro2unid_221 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalTeatro2unid_221, 
                style: style_PrprioPblicoMunicipalTeatro2unid_221,
                popuplayertitle: 'Próprio Público Municipal - Teatro (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalTeatro2unid_221.png" /> Próprio Público Municipal - Teatro (2 unid.)'
            });
var format_PrprioPblicoMunicipalAtenoPrimria24unid_222 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalAtenoPrimria24unid_222 = format_PrprioPblicoMunicipalAtenoPrimria24unid_222.readFeatures(json_PrprioPblicoMunicipalAtenoPrimria24unid_222, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_222 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_222.addFeatures(features_PrprioPblicoMunicipalAtenoPrimria24unid_222);
var lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalAtenoPrimria24unid_222, 
                style: style_PrprioPblicoMunicipalAtenoPrimria24unid_222,
                popuplayertitle: 'Próprio Público Municipal - Atenção Primária (24 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalAtenoPrimria24unid_222.png" /> Próprio Público Municipal - Atenção Primária (24 unid.)'
            });
var format_PrprioPblicoMunicipalGestoAdministrativo3unid_223 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalGestoAdministrativo3unid_223 = format_PrprioPblicoMunicipalGestoAdministrativo3unid_223.readFeatures(json_PrprioPblicoMunicipalGestoAdministrativo3unid_223, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_223 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_223.addFeatures(features_PrprioPblicoMunicipalGestoAdministrativo3unid_223);
var lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalGestoAdministrativo3unid_223, 
                style: style_PrprioPblicoMunicipalGestoAdministrativo3unid_223,
                popuplayertitle: 'Próprio Público Municipal - Gestão / Administrativo (3 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalGestoAdministrativo3unid_223.png" /> Próprio Público Municipal - Gestão / Administrativo (3 unid.)'
            });
var format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224 = format_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.readFeatures(json_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.addFeatures(features_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224);
var lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224, 
                style: style_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224,
                popuplayertitle: 'Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.png" /> Próprio Público Municipal - Unidade de Urgência e Emergência (8 unid.)'
            });
var format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225 = format_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.readFeatures(json_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.addFeatures(features_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225);
var lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225, 
                style: style_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225,
                popuplayertitle: 'Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.png" /> Próprio Público Municipal - Serviço de Especialidades / Diagnóstico (14 unid.)'
            });
var format_PrprioPblicoMunicipalVigilnciaemSade5unid_226 = new ol.format.GeoJSON();
var features_PrprioPblicoMunicipalVigilnciaemSade5unid_226 = format_PrprioPblicoMunicipalVigilnciaemSade5unid_226.readFeatures(json_PrprioPblicoMunicipalVigilnciaemSade5unid_226, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_226 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_226.addFeatures(features_PrprioPblicoMunicipalVigilnciaemSade5unid_226);
var lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrprioPblicoMunicipalVigilnciaemSade5unid_226, 
                style: style_PrprioPblicoMunicipalVigilnciaemSade5unid_226,
                popuplayertitle: 'Próprio Público Municipal - Vigilância em Saúde (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PrprioPblicoMunicipalVigilnciaemSade5unid_226.png" /> Próprio Público Municipal - Vigilância em Saúde (5 unid.)'
            });
var format_ParqueZumbidosPalmares_227 = new ol.format.GeoJSON();
var features_ParqueZumbidosPalmares_227 = format_ParqueZumbidosPalmares_227.readFeatures(json_ParqueZumbidosPalmares_227, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueZumbidosPalmares_227 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueZumbidosPalmares_227.addFeatures(features_ParqueZumbidosPalmares_227);
var lyr_ParqueZumbidosPalmares_227 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueZumbidosPalmares_227, 
                style: style_ParqueZumbidosPalmares_227,
                popuplayertitle: 'Parque Zumbi dos Palmares',
                interactive: true,
                title: '<img src="styles/legend/ParqueZumbidosPalmares_227.png" /> Parque Zumbi dos Palmares'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228 = format_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 3ª Etapa (5 unid.)'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229 = format_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 2ª Etapa (41 unid.)'
            });
var format_AntigoAterrodasMaritacas_230 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacas_230 = format_AntigoAterrodasMaritacas_230.readFeatures(json_AntigoAterrodasMaritacas_230, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacas_230 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacas_230.addFeatures(features_AntigoAterrodasMaritacas_230);
var lyr_AntigoAterrodasMaritacas_230 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacas_230, 
                style: style_AntigoAterrodasMaritacas_230,
                popuplayertitle: 'Antigo Aterro das Maritacas',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacas_230.png" /> Antigo Aterro das Maritacas'
            });
var format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231 = new ol.format.GeoJSON();
var features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231 = format_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.readFeatures(json_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.addFeatures(features_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231);
var lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231, 
                style: style_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231,
                popuplayertitle: 'Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.png" /> Antigo Aterro das Maritacas - Poços de Monitoramento 1ª Etapa (28 unid.)'
            });
var format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232 = format_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.readFeatures(json_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.addFeatures(features_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232);
var lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232, 
                style: style_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.png" /> Área "B" da Fazenda Municipal - Antiga Área do Clube de Hipismo'
            });
var format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233 = new ol.format.GeoJSON();
var features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233 = format_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.readFeatures(json_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.addFeatures(features_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233);
var lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233, 
                style: style_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233,
                popuplayertitle: 'Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.png" /> Área "B" da Fazenda Municipal - Poços de Monitoramento Engesolve (7 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipal_234 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipal_234 = format_AntigoAterrodaFazendaMunicipal_234.readFeatures(json_AntigoAterrodaFazendaMunicipal_234, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipal_234 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipal_234.addFeatures(features_AntigoAterrodaFazendaMunicipal_234);
var lyr_AntigoAterrodaFazendaMunicipal_234 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipal_234, 
                style: style_AntigoAterrodaFazendaMunicipal_234,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipal_234.png" /> Antigo Aterro da Fazenda Municipal'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento AVATZ (6 unid.)'
            });
var format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236 = new ol.format.GeoJSON();
var features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236 = format_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.readFeatures(json_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.addFeatures(features_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236);
var lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236, 
                style: style_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236,
                popuplayertitle: 'Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.png" /> Antigo Aterro da Fazenda Municipal - Poços de Monitoramento (15 unid.)'
            });
var format_ARORemanescentesFlorestais_237 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_237 = format_ARORemanescentesFlorestais_237.readFeatures(json_ARORemanescentesFlorestais_237, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_237 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_237.addFeatures(features_ARORemanescentesFlorestais_237);
var lyr_ARORemanescentesFlorestais_237 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_237, 
                style: style_ARORemanescentesFlorestais_237,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_237.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_238 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_238 = format_AROreadeAmortecimento_238.readFeatures(json_AROreadeAmortecimento_238, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_238 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_238.addFeatures(features_AROreadeAmortecimento_238);
var lyr_AROreadeAmortecimento_238 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_238, 
                style: style_AROreadeAmortecimento_238,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_238.png" /> ARO - Área de Amortecimento'
            });
var format_AROFaixadeCuestas_239 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_239 = format_AROFaixadeCuestas_239.readFeatures(json_AROFaixadeCuestas_239, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_239 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_239.addFeatures(features_AROFaixadeCuestas_239);
var lyr_AROFaixadeCuestas_239 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_239, 
                style: style_AROFaixadeCuestas_239,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_239.png" /> ARO - Faixa de Cuestas'
            });
var format_AROAPP_240 = new ol.format.GeoJSON();
var features_AROAPP_240 = format_AROAPP_240.readFeatures(json_AROAPP_240, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_240 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_240.addFeatures(features_AROAPP_240);
var lyr_AROAPP_240 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_240, 
                style: style_AROAPP_240,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_240.png" /> ARO - APP'
            });
var format_ARAIncongrunciasemAPP_241 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_241 = format_ARAIncongrunciasemAPP_241.readFeatures(json_ARAIncongrunciasemAPP_241, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_241 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_241.addFeatures(features_ARAIncongrunciasemAPP_241);
var lyr_ARAIncongrunciasemAPP_241 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_241, 
                style: style_ARAIncongrunciasemAPP_241,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_241.png" /> ARA - Incongruências em APP'
            });
var format_ARAETELagoas_242 = new ol.format.GeoJSON();
var features_ARAETELagoas_242 = format_ARAETELagoas_242.readFeatures(json_ARAETELagoas_242, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_242 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_242.addFeatures(features_ARAETELagoas_242);
var lyr_ARAETELagoas_242 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_242, 
                style: style_ARAETELagoas_242,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_242.png" /> ARA - ETE Lagoas'
            });
var format_ARAAterros_243 = new ol.format.GeoJSON();
var features_ARAAterros_243 = format_ARAAterros_243.readFeatures(json_ARAAterros_243, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_243 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_243.addFeatures(features_ARAAterros_243);
var lyr_ARAAterros_243 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_243, 
                style: style_ARAAterros_243,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_243.png" /> ARA - Aterros'
            });
var format_AODreaUrbanaConsolidada_244 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_244 = format_AODreaUrbanaConsolidada_244.readFeatures(json_AODreaUrbanaConsolidada_244, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_244 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_244.addFeatures(features_AODreaUrbanaConsolidada_244);
var lyr_AODreaUrbanaConsolidada_244 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_244, 
                style: style_AODreaUrbanaConsolidada_244,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_244.png" /> AOD - Área Urbana Consolidada'
            });
var format_AODBaixaDensidadeNvel3_245 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_245 = format_AODBaixaDensidadeNvel3_245.readFeatures(json_AODBaixaDensidadeNvel3_245, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_245 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_245.addFeatures(features_AODBaixaDensidadeNvel3_245);
var lyr_AODBaixaDensidadeNvel3_245 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_245, 
                style: style_AODBaixaDensidadeNvel3_245,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_245.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODBaixaDensidadeNvel2_246 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_246 = format_AODBaixaDensidadeNvel2_246.readFeatures(json_AODBaixaDensidadeNvel2_246, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_246 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_246.addFeatures(features_AODBaixaDensidadeNvel2_246);
var lyr_AODBaixaDensidadeNvel2_246 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_246, 
                style: style_AODBaixaDensidadeNvel2_246,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_246.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel1_247 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_247 = format_AODBaixaDensidadeNvel1_247.readFeatures(json_AODBaixaDensidadeNvel1_247, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_247 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_247.addFeatures(features_AODBaixaDensidadeNvel1_247);
var lyr_AODBaixaDensidadeNvel1_247 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_247, 
                style: style_AODBaixaDensidadeNvel1_247,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_247.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODAUSFase2_248 = new ol.format.GeoJSON();
var features_AODAUSFase2_248 = format_AODAUSFase2_248.readFeatures(json_AODAUSFase2_248, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_248 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_248.addFeatures(features_AODAUSFase2_248);
var lyr_AODAUSFase2_248 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_248, 
                style: style_AODAUSFase2_248,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_248.png" /> AOD - AUS Fase 2'
            });
var format_AODAUSFase1_249 = new ol.format.GeoJSON();
var features_AODAUSFase1_249 = format_AODAUSFase1_249.readFeatures(json_AODAUSFase1_249, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_249 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_249.addFeatures(features_AODAUSFase1_249);
var lyr_AODAUSFase1_249 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_249, 
                style: style_AODAUSFase1_249,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_249.png" /> AOD - AUS Fase 1'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_250 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_250 = format_LimitedaBaciadoRioCanoasLeiC4322024_250.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_250, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_250 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_250.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_250);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_250 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_250, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_250,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_250.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_251 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_251 = format_LimitedaBaciadoRioCanoasLeiC1002006_251.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_251, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_251 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_251.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_251);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_251 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_251, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_251,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_251.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_DelimitaodaBaciadoRibeirodaOna_252 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_252 = format_DelimitaodaBaciadoRibeirodaOna_252.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_252, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_252 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_252.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_252);
var lyr_DelimitaodaBaciadoRibeirodaOna_252 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_252, 
                style: style_DelimitaodaBaciadoRibeirodaOna_252,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_252.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_AoCivilPblica1unid_253 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_253 = format_AoCivilPblica1unid_253.readFeatures(json_AoCivilPblica1unid_253, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_253 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_253.addFeatures(features_AoCivilPblica1unid_253);
var lyr_AoCivilPblica1unid_253 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_253, 
                style: style_AoCivilPblica1unid_253,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_253.png" /> Ação Civil Pública (1 unid.)'
            });
var format_AoCivilPblica1unid_254 = new ol.format.GeoJSON();
var features_AoCivilPblica1unid_254 = format_AoCivilPblica1unid_254.readFeatures(json_AoCivilPblica1unid_254, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AoCivilPblica1unid_254 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AoCivilPblica1unid_254.addFeatures(features_AoCivilPblica1unid_254);
var lyr_AoCivilPblica1unid_254 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AoCivilPblica1unid_254, 
                style: style_AoCivilPblica1unid_254,
                popuplayertitle: 'Ação Civil Pública (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AoCivilPblica1unid_254.png" /> Ação Civil Pública (1 unid.)'
            });
var format_CartaAnuncia20unid_255 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_255 = format_CartaAnuncia20unid_255.readFeatures(json_CartaAnuncia20unid_255, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_255 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_255.addFeatures(features_CartaAnuncia20unid_255);
var lyr_CartaAnuncia20unid_255 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_255, 
                style: style_CartaAnuncia20unid_255,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_255.png" /> Carta Anuência (20 unid.)'
            });
var format_CartaAnuncia20unid_256 = new ol.format.GeoJSON();
var features_CartaAnuncia20unid_256 = format_CartaAnuncia20unid_256.readFeatures(json_CartaAnuncia20unid_256, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CartaAnuncia20unid_256 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartaAnuncia20unid_256.addFeatures(features_CartaAnuncia20unid_256);
var lyr_CartaAnuncia20unid_256 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartaAnuncia20unid_256, 
                style: style_CartaAnuncia20unid_256,
                popuplayertitle: 'Carta Anuência (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/CartaAnuncia20unid_256.png" /> Carta Anuência (20 unid.)'
            });
var format_PlantioVoluntrio1unid_257 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_257 = format_PlantioVoluntrio1unid_257.readFeatures(json_PlantioVoluntrio1unid_257, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_257 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_257.addFeatures(features_PlantioVoluntrio1unid_257);
var lyr_PlantioVoluntrio1unid_257 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_257, 
                style: style_PlantioVoluntrio1unid_257,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_257.png" /> Plantio Voluntário (1 unid.)'
            });
var format_PlantioVoluntrio1unid_258 = new ol.format.GeoJSON();
var features_PlantioVoluntrio1unid_258 = format_PlantioVoluntrio1unid_258.readFeatures(json_PlantioVoluntrio1unid_258, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PlantioVoluntrio1unid_258 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantioVoluntrio1unid_258.addFeatures(features_PlantioVoluntrio1unid_258);
var lyr_PlantioVoluntrio1unid_258 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantioVoluntrio1unid_258, 
                style: style_PlantioVoluntrio1unid_258,
                popuplayertitle: 'Plantio Voluntário (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PlantioVoluntrio1unid_258.png" /> Plantio Voluntário (1 unid.)'
            });
var format_TACMinistrioPblico9unid_259 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_259 = format_TACMinistrioPblico9unid_259.readFeatures(json_TACMinistrioPblico9unid_259, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_259 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_259.addFeatures(features_TACMinistrioPblico9unid_259);
var lyr_TACMinistrioPblico9unid_259 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_259, 
                style: style_TACMinistrioPblico9unid_259,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_259.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TACMinistrioPblico9unid_260 = new ol.format.GeoJSON();
var features_TACMinistrioPblico9unid_260 = format_TACMinistrioPblico9unid_260.readFeatures(json_TACMinistrioPblico9unid_260, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TACMinistrioPblico9unid_260 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TACMinistrioPblico9unid_260.addFeatures(features_TACMinistrioPblico9unid_260);
var lyr_TACMinistrioPblico9unid_260 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TACMinistrioPblico9unid_260, 
                style: style_TACMinistrioPblico9unid_260,
                popuplayertitle: 'TAC Ministério Público (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TACMinistrioPblico9unid_260.png" /> TAC Ministério Público (9 unid.)'
            });
var format_TCRACETESB28unid_261 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_261 = format_TCRACETESB28unid_261.readFeatures(json_TCRACETESB28unid_261, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_261 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_261.addFeatures(features_TCRACETESB28unid_261);
var lyr_TCRACETESB28unid_261 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_261, 
                style: style_TCRACETESB28unid_261,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_261.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRACETESB28unid_262 = new ol.format.GeoJSON();
var features_TCRACETESB28unid_262 = format_TCRACETESB28unid_262.readFeatures(json_TCRACETESB28unid_262, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRACETESB28unid_262 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRACETESB28unid_262.addFeatures(features_TCRACETESB28unid_262);
var lyr_TCRACETESB28unid_262 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRACETESB28unid_262, 
                style: style_TCRACETESB28unid_262,
                popuplayertitle: 'TCRA CETESB (28 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRACETESB28unid_262.png" /> TCRA CETESB (28 unid.)'
            });
var format_TCRAMunicipal14unid_263 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_263 = format_TCRAMunicipal14unid_263.readFeatures(json_TCRAMunicipal14unid_263, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_263 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_263.addFeatures(features_TCRAMunicipal14unid_263);
var lyr_TCRAMunicipal14unid_263 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_263, 
                style: style_TCRAMunicipal14unid_263,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_263.png" /> TCRA Municipal (14 unid.)'
            });
var format_TCRAMunicipal14unid_264 = new ol.format.GeoJSON();
var features_TCRAMunicipal14unid_264 = format_TCRAMunicipal14unid_264.readFeatures(json_TCRAMunicipal14unid_264, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TCRAMunicipal14unid_264 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCRAMunicipal14unid_264.addFeatures(features_TCRAMunicipal14unid_264);
var lyr_TCRAMunicipal14unid_264 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCRAMunicipal14unid_264, 
                style: style_TCRAMunicipal14unid_264,
                popuplayertitle: 'TCRA Municipal (14 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TCRAMunicipal14unid_264.png" /> TCRA Municipal (14 unid.)'
            });
var format_TRPRLCETESB2unid_265 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_265 = format_TRPRLCETESB2unid_265.readFeatures(json_TRPRLCETESB2unid_265, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_265 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_265.addFeatures(features_TRPRLCETESB2unid_265);
var lyr_TRPRLCETESB2unid_265 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_265, 
                style: style_TRPRLCETESB2unid_265,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_265.png" /> TRPRL CETESB (2 unid.)'
            });
var format_TRPRLCETESB2unid_266 = new ol.format.GeoJSON();
var features_TRPRLCETESB2unid_266 = format_TRPRLCETESB2unid_266.readFeatures(json_TRPRLCETESB2unid_266, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TRPRLCETESB2unid_266 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRPRLCETESB2unid_266.addFeatures(features_TRPRLCETESB2unid_266);
var lyr_TRPRLCETESB2unid_266 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRPRLCETESB2unid_266, 
                style: style_TRPRLCETESB2unid_266,
                popuplayertitle: 'TRPRL CETESB (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/TRPRLCETESB2unid_266.png" /> TRPRL CETESB (2 unid.)'
            });
var format_JardimZoobotnicoDelimitao_267 = new ol.format.GeoJSON();
var features_JardimZoobotnicoDelimitao_267 = format_JardimZoobotnicoDelimitao_267.readFeatures(json_JardimZoobotnicoDelimitao_267, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoDelimitao_267 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoDelimitao_267.addFeatures(features_JardimZoobotnicoDelimitao_267);
var lyr_JardimZoobotnicoDelimitao_267 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoDelimitao_267, 
                style: style_JardimZoobotnicoDelimitao_267,
                popuplayertitle: 'Jardim Zoobotânico - Delimitação',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoDelimitao_267.png" /> Jardim Zoobotânico - Delimitação'
            });
var format_JardimZoobotnicoTrajetos_268 = new ol.format.GeoJSON();
var features_JardimZoobotnicoTrajetos_268 = format_JardimZoobotnicoTrajetos_268.readFeatures(json_JardimZoobotnicoTrajetos_268, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoTrajetos_268 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoTrajetos_268.addFeatures(features_JardimZoobotnicoTrajetos_268);
var lyr_JardimZoobotnicoTrajetos_268 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoTrajetos_268, 
                style: style_JardimZoobotnicoTrajetos_268,
                popuplayertitle: 'Jardim Zoobotânico - Trajetos',
                interactive: false,
                title: '<img src="styles/legend/JardimZoobotnicoTrajetos_268.png" /> Jardim Zoobotânico - Trajetos'
            });
var format_JardimZoobotnicoPontosdeInteresse19unid_269 = new ol.format.GeoJSON();
var features_JardimZoobotnicoPontosdeInteresse19unid_269 = format_JardimZoobotnicoPontosdeInteresse19unid_269.readFeatures(json_JardimZoobotnicoPontosdeInteresse19unid_269, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_JardimZoobotnicoPontosdeInteresse19unid_269 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimZoobotnicoPontosdeInteresse19unid_269.addFeatures(features_JardimZoobotnicoPontosdeInteresse19unid_269);
var lyr_JardimZoobotnicoPontosdeInteresse19unid_269 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JardimZoobotnicoPontosdeInteresse19unid_269, 
                style: style_JardimZoobotnicoPontosdeInteresse19unid_269,
                popuplayertitle: 'Jardim Zoobotânico - Pontos de Interesse (19 unid.)',
                interactive: true,
                title: '<img src="styles/legend/JardimZoobotnicoPontosdeInteresse19unid_269.png" /> Jardim Zoobotânico - Pontos de Interesse (19 unid.)'
            });
var format_ParquedosTrabalhadores_270 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_270 = format_ParquedosTrabalhadores_270.readFeatures(json_ParquedosTrabalhadores_270, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_270 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_270.addFeatures(features_ParquedosTrabalhadores_270);
var lyr_ParquedosTrabalhadores_270 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_270, 
                style: style_ParquedosTrabalhadores_270,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_270.png" /> Parque dos Trabalhadores'
            });
var format_ParquedosTrabalhadores_271 = new ol.format.GeoJSON();
var features_ParquedosTrabalhadores_271 = format_ParquedosTrabalhadores_271.readFeatures(json_ParquedosTrabalhadores_271, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosTrabalhadores_271 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosTrabalhadores_271.addFeatures(features_ParquedosTrabalhadores_271);
var lyr_ParquedosTrabalhadores_271 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosTrabalhadores_271, 
                style: style_ParquedosTrabalhadores_271,
                popuplayertitle: 'Parque dos Trabalhadores',
                interactive: true,
                title: '<img src="styles/legend/ParquedosTrabalhadores_271.png" /> Parque dos Trabalhadores'
            });
var format_ComplexoPoliesportivo_272 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_272 = format_ComplexoPoliesportivo_272.readFeatures(json_ComplexoPoliesportivo_272, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_272 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_272.addFeatures(features_ComplexoPoliesportivo_272);
var lyr_ComplexoPoliesportivo_272 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_272, 
                style: style_ComplexoPoliesportivo_272,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_272.png" /> Complexo Poliesportivo'
            });
var format_ComplexoPoliesportivo_273 = new ol.format.GeoJSON();
var features_ComplexoPoliesportivo_273 = format_ComplexoPoliesportivo_273.readFeatures(json_ComplexoPoliesportivo_273, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComplexoPoliesportivo_273 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComplexoPoliesportivo_273.addFeatures(features_ComplexoPoliesportivo_273);
var lyr_ComplexoPoliesportivo_273 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComplexoPoliesportivo_273, 
                style: style_ComplexoPoliesportivo_273,
                popuplayertitle: 'Complexo Poliesportivo',
                interactive: true,
                title: '<img src="styles/legend/ComplexoPoliesportivo_273.png" /> Complexo Poliesportivo'
            });
var format_ParqueCaxambu_274 = new ol.format.GeoJSON();
var features_ParqueCaxambu_274 = format_ParqueCaxambu_274.readFeatures(json_ParqueCaxambu_274, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_274 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_274.addFeatures(features_ParqueCaxambu_274);
var lyr_ParqueCaxambu_274 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_274, 
                style: style_ParqueCaxambu_274,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_274.png" /> Parque Caxambu'
            });
var format_ParqueCaxambu_275 = new ol.format.GeoJSON();
var features_ParqueCaxambu_275 = format_ParqueCaxambu_275.readFeatures(json_ParqueCaxambu_275, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueCaxambu_275 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueCaxambu_275.addFeatures(features_ParqueCaxambu_275);
var lyr_ParqueCaxambu_275 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueCaxambu_275, 
                style: style_ParqueCaxambu_275,
                popuplayertitle: 'Parque Caxambu',
                interactive: true,
                title: '<img src="styles/legend/ParqueCaxambu_275.png" /> Parque Caxambu'
            });
var format_ParquedeExposiesFernandoCosta_276 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_276 = format_ParquedeExposiesFernandoCosta_276.readFeatures(json_ParquedeExposiesFernandoCosta_276, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_276 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_276.addFeatures(features_ParquedeExposiesFernandoCosta_276);
var lyr_ParquedeExposiesFernandoCosta_276 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_276, 
                style: style_ParquedeExposiesFernandoCosta_276,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_276.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParquedeExposiesFernandoCosta_277 = new ol.format.GeoJSON();
var features_ParquedeExposiesFernandoCosta_277 = format_ParquedeExposiesFernandoCosta_277.readFeatures(json_ParquedeExposiesFernandoCosta_277, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedeExposiesFernandoCosta_277 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedeExposiesFernandoCosta_277.addFeatures(features_ParquedeExposiesFernandoCosta_277);
var lyr_ParquedeExposiesFernandoCosta_277 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedeExposiesFernandoCosta_277, 
                style: style_ParquedeExposiesFernandoCosta_277,
                popuplayertitle: 'Parque de Exposições “Fernando Costa”',
                interactive: true,
                title: '<img src="styles/legend/ParquedeExposiesFernandoCosta_277.png" /> Parque de Exposições “Fernando Costa”'
            });
var format_ParqueAmbientalLuprcioTaveira_278 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_278 = format_ParqueAmbientalLuprcioTaveira_278.readFeatures(json_ParqueAmbientalLuprcioTaveira_278, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_278 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_278.addFeatures(features_ParqueAmbientalLuprcioTaveira_278);
var lyr_ParqueAmbientalLuprcioTaveira_278 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_278, 
                style: style_ParqueAmbientalLuprcioTaveira_278,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_278.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ParqueAmbientalLuprcioTaveira_279 = new ol.format.GeoJSON();
var features_ParqueAmbientalLuprcioTaveira_279 = format_ParqueAmbientalLuprcioTaveira_279.readFeatures(json_ParqueAmbientalLuprcioTaveira_279, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParqueAmbientalLuprcioTaveira_279 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueAmbientalLuprcioTaveira_279.addFeatures(features_ParqueAmbientalLuprcioTaveira_279);
var lyr_ParqueAmbientalLuprcioTaveira_279 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueAmbientalLuprcioTaveira_279, 
                style: style_ParqueAmbientalLuprcioTaveira_279,
                popuplayertitle: 'Parque Ambiental “Lupércio Taveira”',
                interactive: true,
                title: '<img src="styles/legend/ParqueAmbientalLuprcioTaveira_279.png" /> Parque Ambiental “Lupércio Taveira”'
            });
var format_ProgramaAdoteUmaPraa315unid30277327m_280 = new ol.format.GeoJSON();
var features_ProgramaAdoteUmaPraa315unid30277327m_280 = format_ProgramaAdoteUmaPraa315unid30277327m_280.readFeatures(json_ProgramaAdoteUmaPraa315unid30277327m_280, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProgramaAdoteUmaPraa315unid30277327m_280 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProgramaAdoteUmaPraa315unid30277327m_280.addFeatures(features_ProgramaAdoteUmaPraa315unid30277327m_280);
var lyr_ProgramaAdoteUmaPraa315unid30277327m_280 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProgramaAdoteUmaPraa315unid30277327m_280, 
                style: style_ProgramaAdoteUmaPraa315unid30277327m_280,
                popuplayertitle: 'Programa Adote Uma Praça (315 unid. / 302.773,27 m²)',
                interactive: true,
                title: '<img src="styles/legend/ProgramaAdoteUmaPraa315unid30277327m_280.png" /> Programa Adote Uma Praça (315 unid. / 302.773,27 m²)'
            });
var format_ComPlacaDilu161unid17007212m_281 = new ol.format.GeoJSON();
var features_ComPlacaDilu161unid17007212m_281 = format_ComPlacaDilu161unid17007212m_281.readFeatures(json_ComPlacaDilu161unid17007212m_281, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaDilu161unid17007212m_281 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaDilu161unid17007212m_281.addFeatures(features_ComPlacaDilu161unid17007212m_281);
var lyr_ComPlacaDilu161unid17007212m_281 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaDilu161unid17007212m_281, 
                style: style_ComPlacaDilu161unid17007212m_281,
                popuplayertitle: 'Com Placa - Dilu (161 unid. / 170.072,12 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaDilu161unid17007212m_281.png" /> Com Placa - Dilu (161 unid. / 170.072,12 m²)'
            });
var format_ComPlacaEgnaldo134unid12211725m_282 = new ol.format.GeoJSON();
var features_ComPlacaEgnaldo134unid12211725m_282 = format_ComPlacaEgnaldo134unid12211725m_282.readFeatures(json_ComPlacaEgnaldo134unid12211725m_282, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ComPlacaEgnaldo134unid12211725m_282 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComPlacaEgnaldo134unid12211725m_282.addFeatures(features_ComPlacaEgnaldo134unid12211725m_282);
var lyr_ComPlacaEgnaldo134unid12211725m_282 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComPlacaEgnaldo134unid12211725m_282, 
                style: style_ComPlacaEgnaldo134unid12211725m_282,
                popuplayertitle: 'Com Placa - Egnaldo (134 unid. / 122.117,25 m²)',
                interactive: true,
                title: '<img src="styles/legend/ComPlacaEgnaldo134unid12211725m_282.png" /> Com Placa - Egnaldo (134 unid. / 122.117,25 m²)'
            });
var format_SemPlacaDilu16unid774541m_283 = new ol.format.GeoJSON();
var features_SemPlacaDilu16unid774541m_283 = format_SemPlacaDilu16unid774541m_283.readFeatures(json_SemPlacaDilu16unid774541m_283, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaDilu16unid774541m_283 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaDilu16unid774541m_283.addFeatures(features_SemPlacaDilu16unid774541m_283);
var lyr_SemPlacaDilu16unid774541m_283 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaDilu16unid774541m_283, 
                style: style_SemPlacaDilu16unid774541m_283,
                popuplayertitle: 'Sem Placa - Dilu (16 unid. / 7.745,41 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaDilu16unid774541m_283.png" /> Sem Placa - Dilu (16 unid. / 7.745,41 m²)'
            });
var format_SemPlacaEgnaldo4unid86447m_284 = new ol.format.GeoJSON();
var features_SemPlacaEgnaldo4unid86447m_284 = format_SemPlacaEgnaldo4unid86447m_284.readFeatures(json_SemPlacaEgnaldo4unid86447m_284, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_SemPlacaEgnaldo4unid86447m_284 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SemPlacaEgnaldo4unid86447m_284.addFeatures(features_SemPlacaEgnaldo4unid86447m_284);
var lyr_SemPlacaEgnaldo4unid86447m_284 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SemPlacaEgnaldo4unid86447m_284, 
                style: style_SemPlacaEgnaldo4unid86447m_284,
                popuplayertitle: 'Sem Placa - Egnaldo (4 unid. / 864,47 m²)',
                interactive: true,
                title: '<img src="styles/legend/SemPlacaEgnaldo4unid86447m_284.png" /> Sem Placa - Egnaldo (4 unid. / 864,47 m²)'
            });
var format_LotesImvelPrivado92unid_285 = new ol.format.GeoJSON();
var features_LotesImvelPrivado92unid_285 = format_LotesImvelPrivado92unid_285.readFeatures(json_LotesImvelPrivado92unid_285, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LotesImvelPrivado92unid_285 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesImvelPrivado92unid_285.addFeatures(features_LotesImvelPrivado92unid_285);
var lyr_LotesImvelPrivado92unid_285 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesImvelPrivado92unid_285, 
                style: style_LotesImvelPrivado92unid_285,
                popuplayertitle: 'Lotes - Imóvel Privado (92 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LotesImvelPrivado92unid_285.png" /> Lotes - Imóvel Privado (92 unid.)'
            });
var format_ImvelPblico118unid_286 = new ol.format.GeoJSON();
var features_ImvelPblico118unid_286 = format_ImvelPblico118unid_286.readFeatures(json_ImvelPblico118unid_286, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPblico118unid_286 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPblico118unid_286.addFeatures(features_ImvelPblico118unid_286);
var lyr_ImvelPblico118unid_286 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPblico118unid_286, 
                style: style_ImvelPblico118unid_286,
                popuplayertitle: 'Imóvel Público (118 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPblico118unid_286.png" /> Imóvel Público (118 unid.)'
            });
var format_ImvelPrivado92unid_287 = new ol.format.GeoJSON();
var features_ImvelPrivado92unid_287 = format_ImvelPrivado92unid_287.readFeatures(json_ImvelPrivado92unid_287, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImvelPrivado92unid_287 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImvelPrivado92unid_287.addFeatures(features_ImvelPrivado92unid_287);
var lyr_ImvelPrivado92unid_287 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImvelPrivado92unid_287, 
                style: style_ImvelPrivado92unid_287,
                popuplayertitle: 'Imóvel Privado (92 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ImvelPrivado92unid_287.png" /> Imóvel Privado (92 unid.)'
            });
var format_RodoviasEstaduais4unid_288 = new ol.format.GeoJSON();
var features_RodoviasEstaduais4unid_288 = format_RodoviasEstaduais4unid_288.readFeatures(json_RodoviasEstaduais4unid_288, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasEstaduais4unid_288 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais4unid_288.addFeatures(features_RodoviasEstaduais4unid_288);
var lyr_RodoviasEstaduais4unid_288 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasEstaduais4unid_288, 
                style: style_RodoviasEstaduais4unid_288,
                popuplayertitle: 'Rodovias Estaduais (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais4unid_288.png" /> Rodovias Estaduais (4 unid.)'
            });
var format_EstradasRuraisMunicipais34unid_289 = new ol.format.GeoJSON();
var features_EstradasRuraisMunicipais34unid_289 = format_EstradasRuraisMunicipais34unid_289.readFeatures(json_EstradasRuraisMunicipais34unid_289, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_EstradasRuraisMunicipais34unid_289 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstradasRuraisMunicipais34unid_289.addFeatures(features_EstradasRuraisMunicipais34unid_289);
var lyr_EstradasRuraisMunicipais34unid_289 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstradasRuraisMunicipais34unid_289, 
                style: style_EstradasRuraisMunicipais34unid_289,
                popuplayertitle: 'Estradas Rurais Municipais (34 unid.)',
                interactive: true,
                title: '<img src="styles/legend/EstradasRuraisMunicipais34unid_289.png" /> Estradas Rurais Municipais (34 unid.)'
            });
var format_RodoviasMunicipais8unid_290 = new ol.format.GeoJSON();
var features_RodoviasMunicipais8unid_290 = format_RodoviasMunicipais8unid_290.readFeatures(json_RodoviasMunicipais8unid_290, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RodoviasMunicipais8unid_290 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasMunicipais8unid_290.addFeatures(features_RodoviasMunicipais8unid_290);
var lyr_RodoviasMunicipais8unid_290 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviasMunicipais8unid_290, 
                style: style_RodoviasMunicipais8unid_290,
                popuplayertitle: 'Rodovias Municipais (8 unid.)',
                interactive: true,
                title: '<img src="styles/legend/RodoviasMunicipais8unid_290.png" /> Rodovias Municipais (8 unid.)'
            });
var format_Gesso1unid_291 = new ol.format.GeoJSON();
var features_Gesso1unid_291 = format_Gesso1unid_291.readFeatures(json_Gesso1unid_291, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Gesso1unid_291 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gesso1unid_291.addFeatures(features_Gesso1unid_291);
var lyr_Gesso1unid_291 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gesso1unid_291, 
                style: style_Gesso1unid_291,
                popuplayertitle: 'Gesso (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Gesso1unid_291.png" /> Gesso (1 unid.)'
            });
var format_ResduosdeConstruoCivil7unid_292 = new ol.format.GeoJSON();
var features_ResduosdeConstruoCivil7unid_292 = format_ResduosdeConstruoCivil7unid_292.readFeatures(json_ResduosdeConstruoCivil7unid_292, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeConstruoCivil7unid_292 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeConstruoCivil7unid_292.addFeatures(features_ResduosdeConstruoCivil7unid_292);
var lyr_ResduosdeConstruoCivil7unid_292 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeConstruoCivil7unid_292, 
                style: style_ResduosdeConstruoCivil7unid_292,
                popuplayertitle: 'Resíduos de Construção Civil (7 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeConstruoCivil7unid_292.png" /> Resíduos de Construção Civil (7 unid.)'
            });
var format_ResduosVerdes1unid_293 = new ol.format.GeoJSON();
var features_ResduosVerdes1unid_293 = format_ResduosVerdes1unid_293.readFeatures(json_ResduosVerdes1unid_293, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosVerdes1unid_293 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosVerdes1unid_293.addFeatures(features_ResduosVerdes1unid_293);
var lyr_ResduosVerdes1unid_293 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosVerdes1unid_293, 
                style: style_ResduosVerdes1unid_293,
                popuplayertitle: 'Resíduos "Verdes" (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosVerdes1unid_293.png" /> Resíduos "Verdes" (1 unid.)'
            });
var format_ChapasdeRaioX1unid_294 = new ol.format.GeoJSON();
var features_ChapasdeRaioX1unid_294 = format_ChapasdeRaioX1unid_294.readFeatures(json_ChapasdeRaioX1unid_294, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ChapasdeRaioX1unid_294 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapasdeRaioX1unid_294.addFeatures(features_ChapasdeRaioX1unid_294);
var lyr_ChapasdeRaioX1unid_294 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapasdeRaioX1unid_294, 
                style: style_ChapasdeRaioX1unid_294,
                popuplayertitle: 'Chapas de Raio-X (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ChapasdeRaioX1unid_294.png" /> Chapas de Raio-X (1 unid.)'
            });
var format_Embalagensvaziasdeagrotxicos1unid_295 = new ol.format.GeoJSON();
var features_Embalagensvaziasdeagrotxicos1unid_295 = format_Embalagensvaziasdeagrotxicos1unid_295.readFeatures(json_Embalagensvaziasdeagrotxicos1unid_295, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Embalagensvaziasdeagrotxicos1unid_295 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embalagensvaziasdeagrotxicos1unid_295.addFeatures(features_Embalagensvaziasdeagrotxicos1unid_295);
var lyr_Embalagensvaziasdeagrotxicos1unid_295 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embalagensvaziasdeagrotxicos1unid_295, 
                style: style_Embalagensvaziasdeagrotxicos1unid_295,
                popuplayertitle: 'Embalagens vazias de agrotóxicos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Embalagensvaziasdeagrotxicos1unid_295.png" /> Embalagens vazias de agrotóxicos (1 unid.)'
            });
var format_leodecozinhausado2unid_296 = new ol.format.GeoJSON();
var features_leodecozinhausado2unid_296 = format_leodecozinhausado2unid_296.readFeatures(json_leodecozinhausado2unid_296, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leodecozinhausado2unid_296 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leodecozinhausado2unid_296.addFeatures(features_leodecozinhausado2unid_296);
var lyr_leodecozinhausado2unid_296 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leodecozinhausado2unid_296, 
                style: style_leodecozinhausado2unid_296,
                popuplayertitle: 'Óleo de cozinha usado (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leodecozinhausado2unid_296.png" /> Óleo de cozinha usado (2 unid.)'
            });
var format_leolubrificanteusado1unid_297 = new ol.format.GeoJSON();
var features_leolubrificanteusado1unid_297 = format_leolubrificanteusado1unid_297.readFeatures(json_leolubrificanteusado1unid_297, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_leolubrificanteusado1unid_297 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leolubrificanteusado1unid_297.addFeatures(features_leolubrificanteusado1unid_297);
var lyr_leolubrificanteusado1unid_297 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leolubrificanteusado1unid_297, 
                style: style_leolubrificanteusado1unid_297,
                popuplayertitle: 'Óleo lubrificante usado (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/leolubrificanteusado1unid_297.png" /> Óleo lubrificante usado (1 unid.)'
            });
var format_Latasdetintametlicasvazias2unid_298 = new ol.format.GeoJSON();
var features_Latasdetintametlicasvazias2unid_298 = format_Latasdetintametlicasvazias2unid_298.readFeatures(json_Latasdetintametlicasvazias2unid_298, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Latasdetintametlicasvazias2unid_298 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latasdetintametlicasvazias2unid_298.addFeatures(features_Latasdetintametlicasvazias2unid_298);
var lyr_Latasdetintametlicasvazias2unid_298 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latasdetintametlicasvazias2unid_298, 
                style: style_Latasdetintametlicasvazias2unid_298,
                popuplayertitle: 'Latas de tinta metálicas vazias (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Latasdetintametlicasvazias2unid_298.png" /> Latas de tinta metálicas vazias (2 unid.)'
            });
var format_ResduosPerigosos1unid_299 = new ol.format.GeoJSON();
var features_ResduosPerigosos1unid_299 = format_ResduosPerigosos1unid_299.readFeatures(json_ResduosPerigosos1unid_299, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosPerigosos1unid_299 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosPerigosos1unid_299.addFeatures(features_ResduosPerigosos1unid_299);
var lyr_ResduosPerigosos1unid_299 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosPerigosos1unid_299, 
                style: style_ResduosPerigosos1unid_299,
                popuplayertitle: 'Resíduos Perigosos (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosPerigosos1unid_299.png" /> Resíduos Perigosos (1 unid.)'
            });
var format_Madeiras1unid_300 = new ol.format.GeoJSON();
var features_Madeiras1unid_300 = format_Madeiras1unid_300.readFeatures(json_Madeiras1unid_300, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Madeiras1unid_300 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madeiras1unid_300.addFeatures(features_Madeiras1unid_300);
var lyr_Madeiras1unid_300 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madeiras1unid_300, 
                style: style_Madeiras1unid_300,
                popuplayertitle: 'Madeiras (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Madeiras1unid_300.png" /> Madeiras (1 unid.)'
            });
var format_ResduosdeServiosdeSade21unid_301 = new ol.format.GeoJSON();
var features_ResduosdeServiosdeSade21unid_301 = format_ResduosdeServiosdeSade21unid_301.readFeatures(json_ResduosdeServiosdeSade21unid_301, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeServiosdeSade21unid_301 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeServiosdeSade21unid_301.addFeatures(features_ResduosdeServiosdeSade21unid_301);
var lyr_ResduosdeServiosdeSade21unid_301 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeServiosdeSade21unid_301, 
                style: style_ResduosdeServiosdeSade21unid_301,
                popuplayertitle: 'Resíduos de Serviços de Saúde (21 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeServiosdeSade21unid_301.png" /> Resíduos de Serviços de Saúde (21 unid.)'
            });
var format_PilhaseBaterias17unid_302 = new ol.format.GeoJSON();
var features_PilhaseBaterias17unid_302 = format_PilhaseBaterias17unid_302.readFeatures(json_PilhaseBaterias17unid_302, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PilhaseBaterias17unid_302 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilhaseBaterias17unid_302.addFeatures(features_PilhaseBaterias17unid_302);
var lyr_PilhaseBaterias17unid_302 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilhaseBaterias17unid_302, 
                style: style_PilhaseBaterias17unid_302,
                popuplayertitle: 'Pilhas e Baterias (17 unid.)',
                interactive: true,
                title: '<img src="styles/legend/PilhaseBaterias17unid_302.png" /> Pilhas e Baterias (17 unid.)'
            });
var format_Pneus1unid_303 = new ol.format.GeoJSON();
var features_Pneus1unid_303 = format_Pneus1unid_303.readFeatures(json_Pneus1unid_303, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Pneus1unid_303 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pneus1unid_303.addFeatures(features_Pneus1unid_303);
var lyr_Pneus1unid_303 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pneus1unid_303, 
                style: style_Pneus1unid_303,
                popuplayertitle: 'Pneus (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Pneus1unid_303.png" /> Pneus (1 unid.)'
            });
var format_Lmpadas4unid_304 = new ol.format.GeoJSON();
var features_Lmpadas4unid_304 = format_Lmpadas4unid_304.readFeatures(json_Lmpadas4unid_304, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Lmpadas4unid_304 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmpadas4unid_304.addFeatures(features_Lmpadas4unid_304);
var lyr_Lmpadas4unid_304 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmpadas4unid_304, 
                style: style_Lmpadas4unid_304,
                popuplayertitle: 'Lâmpadas (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Lmpadas4unid_304.png" /> Lâmpadas (4 unid.)'
            });
var format_ResduosdeCouro1unid_305 = new ol.format.GeoJSON();
var features_ResduosdeCouro1unid_305 = format_ResduosdeCouro1unid_305.readFeatures(json_ResduosdeCouro1unid_305, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosdeCouro1unid_305 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosdeCouro1unid_305.addFeatures(features_ResduosdeCouro1unid_305);
var lyr_ResduosdeCouro1unid_305 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosdeCouro1unid_305, 
                style: style_ResduosdeCouro1unid_305,
                popuplayertitle: 'Resíduos de Couro (1 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosdeCouro1unid_305.png" /> Resíduos de Couro (1 unid.)'
            });
var format_ResduosEletrnicos2unid_306 = new ol.format.GeoJSON();
var features_ResduosEletrnicos2unid_306 = format_ResduosEletrnicos2unid_306.readFeatures(json_ResduosEletrnicos2unid_306, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosEletrnicos2unid_306 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosEletrnicos2unid_306.addFeatures(features_ResduosEletrnicos2unid_306);
var lyr_ResduosEletrnicos2unid_306 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosEletrnicos2unid_306, 
                style: style_ResduosEletrnicos2unid_306,
                popuplayertitle: 'Resíduos Eletrônicos (2 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosEletrnicos2unid_306.png" /> Resíduos Eletrônicos (2 unid.)'
            });
var format_ResduosReciclveis15unid_307 = new ol.format.GeoJSON();
var features_ResduosReciclveis15unid_307 = format_ResduosReciclveis15unid_307.readFeatures(json_ResduosReciclveis15unid_307, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosReciclveis15unid_307 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosReciclveis15unid_307.addFeatures(features_ResduosReciclveis15unid_307);
var lyr_ResduosReciclveis15unid_307 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosReciclveis15unid_307, 
                style: style_ResduosReciclveis15unid_307,
                popuplayertitle: 'Resíduos Recicláveis (15 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosReciclveis15unid_307.png" /> Resíduos Recicláveis (15 unid.)'
            });
var format_ResduosInservveis4unid_308 = new ol.format.GeoJSON();
var features_ResduosInservveis4unid_308 = format_ResduosInservveis4unid_308.readFeatures(json_ResduosInservveis4unid_308, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ResduosInservveis4unid_308 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResduosInservveis4unid_308.addFeatures(features_ResduosInservveis4unid_308);
var lyr_ResduosInservveis4unid_308 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResduosInservveis4unid_308, 
                style: style_ResduosInservveis4unid_308,
                popuplayertitle: 'Resíduos Inservíveis (4 unid.)',
                interactive: true,
                title: '<img src="styles/legend/ResduosInservveis4unid_308.png" /> Resíduos Inservíveis (4 unid.)'
            });
var format_Contineres286unid_309 = new ol.format.GeoJSON();
var features_Contineres286unid_309 = format_Contineres286unid_309.readFeatures(json_Contineres286unid_309, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres286unid_309 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres286unid_309.addFeatures(features_Contineres286unid_309);
var lyr_Contineres286unid_309 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres286unid_309, 
                style: style_Contineres286unid_309,
                popuplayertitle: 'Contêineres (286 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Contineres286unid_309.png" /> Contêineres (286 unid.)'
            });
var format_rvoreImuneaoCorte9unid_310 = new ol.format.GeoJSON();
var features_rvoreImuneaoCorte9unid_310 = format_rvoreImuneaoCorte9unid_310.readFeatures(json_rvoreImuneaoCorte9unid_310, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_rvoreImuneaoCorte9unid_310 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rvoreImuneaoCorte9unid_310.addFeatures(features_rvoreImuneaoCorte9unid_310);
var lyr_rvoreImuneaoCorte9unid_310 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rvoreImuneaoCorte9unid_310, 
                style: style_rvoreImuneaoCorte9unid_310,
                popuplayertitle: 'Árvore Imune ao Corte (9 unid.)',
                interactive: true,
                title: '<img src="styles/legend/rvoreImuneaoCorte9unid_310.png" /> Árvore Imune ao Corte (9 unid.)'
            });
var format_LocaisdeDifcilAcessoereasRurais20unid_311 = new ol.format.GeoJSON();
var features_LocaisdeDifcilAcessoereasRurais20unid_311 = format_LocaisdeDifcilAcessoereasRurais20unid_311.readFeatures(json_LocaisdeDifcilAcessoereasRurais20unid_311, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LocaisdeDifcilAcessoereasRurais20unid_311 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaisdeDifcilAcessoereasRurais20unid_311.addFeatures(features_LocaisdeDifcilAcessoereasRurais20unid_311);
var lyr_LocaisdeDifcilAcessoereasRurais20unid_311 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocaisdeDifcilAcessoereasRurais20unid_311, 
                style: style_LocaisdeDifcilAcessoereasRurais20unid_311,
                popuplayertitle: 'Locais de Difícil Acesso e Áreas Rurais (20 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LocaisdeDifcilAcessoereasRurais20unid_311.png" /> Locais de Difícil Acesso e Áreas Rurais (20 unid.)'
            });
var format_AcademiasaoArLivre84unid_312 = new ol.format.GeoJSON();
var features_AcademiasaoArLivre84unid_312 = format_AcademiasaoArLivre84unid_312.readFeatures(json_AcademiasaoArLivre84unid_312, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcademiasaoArLivre84unid_312 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademiasaoArLivre84unid_312.addFeatures(features_AcademiasaoArLivre84unid_312);
var lyr_AcademiasaoArLivre84unid_312 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademiasaoArLivre84unid_312, 
                style: style_AcademiasaoArLivre84unid_312,
                popuplayertitle: 'Academias ao Ar Livre (84 unid.)',
                interactive: true,
                title: '<img src="styles/legend/AcademiasaoArLivre84unid_312.png" /> Academias ao Ar Livre (84 unid.)'
            });
var format_Voorocas26unid_313 = new ol.format.GeoJSON();
var features_Voorocas26unid_313 = format_Voorocas26unid_313.readFeatures(json_Voorocas26unid_313, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Voorocas26unid_313 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voorocas26unid_313.addFeatures(features_Voorocas26unid_313);
var lyr_Voorocas26unid_313 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voorocas26unid_313, 
                style: style_Voorocas26unid_313,
                popuplayertitle: 'Voçorocas (26 unid.)',
                interactive: true,
                title: '<img src="styles/legend/Voorocas26unid_313.png" /> Voçorocas (26 unid.)'
            });
var group_DescarteCorretodeResduos = new ol.layer.Group({
                                layers: [lyr_Gesso1unid_291,lyr_ResduosdeConstruoCivil7unid_292,lyr_ResduosVerdes1unid_293,lyr_ChapasdeRaioX1unid_294,lyr_Embalagensvaziasdeagrotxicos1unid_295,lyr_leodecozinhausado2unid_296,lyr_leolubrificanteusado1unid_297,lyr_Latasdetintametlicasvazias2unid_298,lyr_ResduosPerigosos1unid_299,lyr_Madeiras1unid_300,lyr_ResduosdeServiosdeSade21unid_301,lyr_PilhaseBaterias17unid_302,lyr_Pneus1unid_303,lyr_Lmpadas4unid_304,lyr_ResduosdeCouro1unid_305,lyr_ResduosEletrnicos2unid_306,lyr_ResduosReciclveis15unid_307,lyr_ResduosInservveis4unid_308,],
                                fold: 'close',
                                title: 'Descarte Correto de Resíduos'});
var group_RodoviaseEstradas = new ol.layer.Group({
                                layers: [lyr_RodoviasEstaduais4unid_288,lyr_EstradasRuraisMunicipais34unid_289,lyr_RodoviasMunicipais8unid_290,],
                                fold: 'close',
                                title: 'Rodovias e Estradas'});
var group_PontosViciados = new ol.layer.Group({
                                layers: [lyr_LotesImvelPrivado92unid_285,lyr_ImvelPblico118unid_286,lyr_ImvelPrivado92unid_287,],
                                fold: 'close',
                                title: 'Pontos Viciados'});
var group_ProgramaAdoteUmaPraa = new ol.layer.Group({
                                layers: [lyr_ProgramaAdoteUmaPraa315unid30277327m_280,lyr_ComPlacaDilu161unid17007212m_281,lyr_ComPlacaEgnaldo134unid12211725m_282,lyr_SemPlacaDilu16unid774541m_283,lyr_SemPlacaEgnaldo4unid86447m_284,],
                                fold: 'close',
                                title: 'Programa Adote Uma Praça'});
var group_ParquesdeFranca = new ol.layer.Group({
                                layers: [lyr_JardimZoobotnicoDelimitao_267,lyr_JardimZoobotnicoTrajetos_268,lyr_JardimZoobotnicoPontosdeInteresse19unid_269,lyr_ParquedosTrabalhadores_270,lyr_ParquedosTrabalhadores_271,lyr_ComplexoPoliesportivo_272,lyr_ComplexoPoliesportivo_273,lyr_ParqueCaxambu_274,lyr_ParqueCaxambu_275,lyr_ParquedeExposiesFernandoCosta_276,lyr_ParquedeExposiesFernandoCosta_277,lyr_ParqueAmbientalLuprcioTaveira_278,lyr_ParqueAmbientalLuprcioTaveira_279,],
                                fold: 'close',
                                title: 'Parques de Franca'});
var group_reasCompromissadas = new ol.layer.Group({
                                layers: [lyr_AoCivilPblica1unid_253,lyr_AoCivilPblica1unid_254,lyr_CartaAnuncia20unid_255,lyr_CartaAnuncia20unid_256,lyr_PlantioVoluntrio1unid_257,lyr_PlantioVoluntrio1unid_258,lyr_TACMinistrioPblico9unid_259,lyr_TACMinistrioPblico9unid_260,lyr_TCRACETESB28unid_261,lyr_TCRACETESB28unid_262,lyr_TCRAMunicipal14unid_263,lyr_TCRAMunicipal14unid_264,lyr_TRPRLCETESB2unid_265,lyr_TRPRLCETESB2unid_266,],
                                fold: 'close',
                                title: 'Áreas Compromissadas'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_ARORemanescentesFlorestais_237,lyr_AROreadeAmortecimento_238,lyr_AROFaixadeCuestas_239,lyr_AROAPP_240,lyr_ARAIncongrunciasemAPP_241,lyr_ARAETELagoas_242,lyr_ARAAterros_243,lyr_AODreaUrbanaConsolidada_244,lyr_AODBaixaDensidadeNvel3_245,lyr_AODBaixaDensidadeNvel2_246,lyr_AODBaixaDensidadeNvel1_247,lyr_AODAUSFase2_248,lyr_AODAUSFase1_249,lyr_LimitedaBaciadoRioCanoasLeiC4322024_250,lyr_LimitedaBaciadoRioCanoasLeiC1002006_251,lyr_DelimitaodaBaciadoRibeirodaOna_252,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_GerenciamentodereasContaminadas = new ol.layer.Group({
                                layers: [lyr_ParqueZumbidosPalmares_227,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229,lyr_AntigoAterrodasMaritacas_230,lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231,lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232,lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233,lyr_AntigoAterrodaFazendaMunicipal_234,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235,lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236,],
                                fold: 'close',
                                title: 'Gerenciamento de Áreas Contaminadas'});
var group_SecretariadeSade = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222,lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223,lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224,lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225,lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226,],
                                fold: 'close',
                                title: 'Secretaria de Saúde'});
var group_SecretariadeEsporteeCultura = new ol.layer.Group({
                                layers: [lyr_PrprioPblicoMunicipalArena3unid_203,lyr_PrprioPblicoMunicipalBiblioteca1unid_204,lyr_PrprioPblicoMunicipalCampo18unid_205,lyr_PrprioPblicoMunicipalCasa1unid_206,lyr_PrprioPblicoMunicipalCentro4unid_207,lyr_PrprioPblicoMunicipalCEPEL12unid_208,lyr_PrprioPblicoMunicipalConjunto4unid_209,lyr_PrprioPblicoMunicipalEstadio1unid_210,lyr_PrprioPblicoMunicipalGinsio5unid_211,lyr_PrprioPblicoMunicipalMuseu2unid_212,lyr_PrprioPblicoMunicipalParque2unid_213,lyr_PrprioPblicoMunicipalPavilho1unid_214,lyr_PrprioPblicoMunicipalPinacoteca1unid_215,lyr_PrprioPblicoMunicipalPiscina1unid_216,lyr_PrprioPblicoMunicipalPista1unid_217,lyr_PrprioPblicoMunicipalPraa3unid_218,lyr_PrprioPblicoMunicipalQuadra3unid_219,lyr_PrprioPblicoMunicipalSecretaria1unid_220,lyr_PrprioPblicoMunicipalTeatro2unid_221,],
                                fold: 'close',
                                title: 'Secretaria de Esporte e Cultura'});
var group_SecretariadeInfraestrutura = new ol.layer.Group({
                                layers: [lyr_CondomnioIICityPetrpolis_57,lyr_CondomnioIICityPetrpolis_58,lyr_CondomnioICityPetrpolis_59,lyr_CondomnioICityPetrpolis_60,lyr_EmpreendimentoVillaBella_61,lyr_EmpreendimentoVillaBella_62,lyr_EmpreendimentoFazendaProgresso_63,lyr_EmpreendimentoFazendaProgresso_64,lyr_EmpreendimentoArizona_65,lyr_EmpreendimentoArizona_66,lyr_EmpreendimentoVilaDiEspanha_67,lyr_EmpreendimentoVilaDiEspanha_68,lyr_EmpreendimentoTerraNova_69,lyr_EmpreendimentoTerraNova_70,lyr_EmpreendimentoDiocesedeFranca_71,lyr_EmpreendimentoDiocesedeFranca_72,lyr_EmpreendimentoResidencialBoaVista_73,lyr_EmpreendimentoResidencialBoaVista_74,lyr_EmpreendimentoVillaDoratta_75,lyr_EmpreendimentoVillaDoratta_76,lyr_EmpreendimentoInfratcnica_77,lyr_EmpreendimentoInfratcnica_78,lyr_EmpreendimentoSoCarlosII_79,lyr_EmpreendimentoSoCarlosII_80,lyr_EmpreendimentoParqueFlora_81,lyr_EmpreendimentoParqueFlora_82,lyr_EmpreendimentoVittaSoVicente_83,lyr_EmpreendimentoVittaSoVicente_84,lyr_EmpreendimentoRecantoMeneghetti_85,lyr_EmpreendimentoRecantoMeneghetti_86,lyr_EmpreendimentoParquedosSabias_87,lyr_EmpreendimentoParquedosSabias_88,lyr_EmpreendimentoMoradadaMata_89,lyr_EmpreendimentoMoradadaMata_90,lyr_EmpreendimentoIrineuZanetiII_91,lyr_EmpreendimentoIrineuZanetiII_92,lyr_EmpreendimentoAdonis_93,lyr_EmpreendimentoAdonis_94,lyr_EmpreendimentoResidencialMarianaAlarcon_95,lyr_EmpreendimentoResidencialMarianaAlarcon_96,lyr_EmpreendimentoResidencialJabuticabeiras_97,lyr_EmpreendimentoResidencialJabuticabeiras_98,lyr_EmpreendimentoResidencialCintraAlves_99,lyr_EmpreendimentoResidencialCintraAlves_100,lyr_EmpreendimentoLoteamentolamo_101,lyr_EmpreendimentoLoteamentolamo_102,lyr_EmpreendimentoSantaLina_103,lyr_EmpreendimentoSantaLina_104,lyr_EmpreendimentoResidencialPousoAlegreII_105,lyr_EmpreendimentoResidencialPousoAlegreII_106,lyr_EmpreendimentoResidencialPousoAlegre_107,lyr_EmpreendimentoResidencialPousoAlegre_108,lyr_EmpreendimentoResidencialAltodaFazenda_109,lyr_EmpreendimentoResidencialAltodaFazenda_110,lyr_EmpreendimentoResidencialMarioTasso_111,lyr_EmpreendimentoResidencialMarioTasso_112,lyr_EmpreendimentoVivenna_113,lyr_EmpreendimentoVivenna_114,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115,lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116,lyr_EmprendimentoElias_117,lyr_EmprendimentoElias_118,lyr_EmpreendimentoResidencialSoCarlosI_119,lyr_EmpreendimentoResidencialSoCarlosI_120,lyr_EmpreendimentoMonti_121,lyr_EmpreendimentoMonti_122,lyr_EmpreendimentoResidencialMoradadoBosque_123,lyr_EmpreendimentoResidencialMoradadoBosque_124,lyr_EmpreendimentoVittaAlvorada_125,lyr_EmpreendimentoVittaAlvorada_126,lyr_EmpreendimentoResidencialMarthaHelena_127,lyr_EmpreendimentoResidencialMarthaHelena_128,lyr_EmpreendimentoResidencialYasminTorres_129,lyr_EmpreendimentoResidencialYasminTorres_130,lyr_EmpreendimentoPalmeiraReal_131,lyr_EmpreendimentoPalmeiraReal_132,lyr_EmpreendimentoEssence_133,lyr_EmpreendimentoEssence_134,lyr_EmpreendimentoVersalhes_135,lyr_EmpreendimentoVersalhes_136,lyr_EmpreendimentoSonetto_137,lyr_EmpreendimentoSonetto_138,lyr_EmpreendimentoResidencialSantaIns_139,lyr_EmpreendimentoResidencialSantaIns_140,lyr_EmpreendimentoEdifcioSolNascente_141,lyr_EmpreendimentoEdifcioSolNascente_142,lyr_EmpreendimentoResidencialQuintadosOitis_143,lyr_EmpreendimentoResidencialQuintadosOitis_144,lyr_EmpreendimentoResidencialQuintadoSol_145,lyr_EmpreendimentoResidencialQuintadoSol_146,lyr_EmpreendimentoParquePalmeiraImperial_147,lyr_EmpreendimentoParquePalmeiraImperial_148,lyr_EmpreendimentoBordadaMata_149,lyr_EmpreendimentoBordadaMata_150,lyr_EmpreendimentoEdifcioResidencialHope_151,lyr_EmpreendimentoEdifcioResidencialHope_152,lyr_EmpreendimentoHorizResidence_153,lyr_EmpreendimentoHorizResidence_154,lyr_EmpreendimentoJardimFlora_155,lyr_EmpreendimentoJardimFlora_156,lyr_EmpreendimentoJardimHorizonte_157,lyr_EmpreendimentoJardimHorizonte_158,lyr_EmpreendimentoJardimMariaLuiza_159,lyr_EmpreendimentoJardimMariaLuiza_160,lyr_EmpreendimentoMontBlancResidence_161,lyr_EmpreendimentoMontBlancResidence_162,lyr_EmpreendimentoMoradadoVerdeII_163,lyr_EmpreendimentoMoradadoVerdeII_164,lyr_EmpreendimentoParagonII_165,lyr_EmpreendimentoParagonII_166,lyr_EmpreendimentoParagon_167,lyr_EmpreendimentoParagon_168,lyr_EmpreendimentoParqueVillaLobos_169,lyr_EmpreendimentoParqueVillaLobos_170,lyr_EmpreendimentoDaVinci_171,lyr_EmpreendimentoDaVinci_172,lyr_EmpreendimentoResidencialDomingosJardini_173,lyr_EmpreendimentoResidencialDomingosJardini_174,lyr_EmpreendimentoResidencialSantaF_175,lyr_EmpreendimentoResidencialSantaF_176,lyr_EmpreendimentoEdifcioRuadoSol_177,lyr_EmpreendimentoEdifcioRuadoSol_178,lyr_EmpreendimentoTorontoResidence_179,lyr_EmpreendimentoTorontoResidence_180,lyr_EmpreendimentoVillaPucci_181,lyr_EmpreendimentoVillaPucci_182,lyr_EmpreendimentoFerracini_183,lyr_EmpreendimentoFerracini_184,lyr_EmpreendimentoColorado_185,lyr_EmpreendimentoColorado_186,lyr_EmpreendimentoResicencialNairRetuciII_187,lyr_EmpreendimentoResicencialNairRetuciII_188,lyr_EmpreendimentoResicencialNairRetuci_189,lyr_EmpreendimentoResicencialNairRetuci_190,lyr_EmpreendimentoCidadeJardim_191,lyr_EmpreendimentoCidadeJardim_192,lyr_ServidoRamal138kVFranca4Guanabara_193,lyr_ServidoRamal138kVFranca4Guanabara_194,lyr_EmpreendimentosAprovado27unid_195,lyr_EmpreendimentosDiretriz8unid_196,lyr_EmpreendimentosDefinitiva7unid_197,lyr_EmpreendimentosPrvia24unid_198,lyr_PBZPAEdifcioPrimeHELIPONTO_199,lyr_PBZPAEdifcioPrimeHELIPONTO_200,lyr_PBZPAHospitalHELIPONTO_201,lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202,],
                                fold: 'close',
                                title: 'Secretaria de Infraestrutura'});
var group_SEINFRAREURB = new ol.layer.Group({
                                layers: [lyr_REURBEmmonitoramento1unid_45,lyr_REURBEmregularizao36unid_46,lyr_REURBNotificado4unid_47,lyr_REURBNotificar25unid_48,lyr_REURBVerificar2unid_49,lyr_REURBRegularizado9unid_50,lyr_REURBEmmonitoramento1unid_51,lyr_REURBEmregularizao36unid_52,lyr_REURBNotificado4unid_53,lyr_REURBNotificar25unid_54,lyr_REURBVerificar2unid_55,lyr_REURBRegularizado9unid_56,],
                                fold: 'close',
                                title: 'SEINFRA - REURB'});
var group_reasPblicas = new ol.layer.Group({
                                layers: [lyr_LoteEMDEF10unid218783m_35,lyr_LoteEMDEF10unid_36,lyr_Lote504unid13809703m_37,lyr_Lote504unid_38,lyr_APP156unid230392892m_39,lyr_readeUsoEspecial247unid269671879m_40,lyr_reaInstitucional226unid133023699m_41,lyr_reaPatrimonial33unid15807656m_42,lyr_LoteamentoFechado115unid52603608m_43,lyr_reaVerde1934unid805836637m_44,],
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

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_LimiteMunicipaldeFranca_3.setVisible(true);lyr_reaUrbanadeFranca_4.setVisible(true);lyr_RegioCentroLeste42unid675453694m_5.setVisible(false);lyr_RegioLesteNordeste50unid1233454938m_6.setVisible(false);lyr_RegioNorteI45unid1043752016m_7.setVisible(false);lyr_RegioNorteII36unid859331837m_8.setVisible(false);lyr_RegioOesteI65unid1245065890m_9.setVisible(false);lyr_RegioOesteII43unid599615871m_10.setVisible(false);lyr_RegioSudeste38unid579321135m_11.setVisible(false);lyr_RegioSudesteSul44unid830633497m_12.setVisible(false);lyr_RegioSul20unid639964086m_13.setVisible(false);lyr_APP1745unid_14.setVisible(false);lyr_RiosDuplos84unid_15.setVisible(false);lyr_MassasDgua270unid_16.setVisible(false);lyr_RiosSimples1842unid_17.setVisible(false);lyr_Nascentes821unid_18.setVisible(false);lyr_reaN_19.setVisible(false);lyr_ConjuntoHabitacional_20.setVisible(false);lyr_AvdeacessoaoHortoeColgioAgrcola_21.setVisible(false);lyr_reaK_22.setVisible(false);lyr_reaJ_23.setVisible(false);lyr_reaI_24.setVisible(false);lyr_reaH_25.setVisible(false);lyr_reaG_26.setVisible(false);lyr_reaF_27.setVisible(false);lyr_reaE_28.setVisible(false);lyr_reaD_29.setVisible(false);lyr_reaC_30.setVisible(false);lyr_reaB_31.setVisible(false);lyr_reaA_32.setVisible(false);lyr_reaAverbada355235ReservaFlorestalLegalPartedareaG_33.setVisible(false);lyr_reaaseraverbadaPartedareaG_34.setVisible(false);lyr_LoteEMDEF10unid218783m_35.setVisible(false);lyr_LoteEMDEF10unid_36.setVisible(false);lyr_Lote504unid13809703m_37.setVisible(false);lyr_Lote504unid_38.setVisible(false);lyr_APP156unid230392892m_39.setVisible(false);lyr_readeUsoEspecial247unid269671879m_40.setVisible(false);lyr_reaInstitucional226unid133023699m_41.setVisible(false);lyr_reaPatrimonial33unid15807656m_42.setVisible(false);lyr_LoteamentoFechado115unid52603608m_43.setVisible(false);lyr_reaVerde1934unid805836637m_44.setVisible(false);lyr_REURBEmmonitoramento1unid_45.setVisible(false);lyr_REURBEmregularizao36unid_46.setVisible(false);lyr_REURBNotificado4unid_47.setVisible(false);lyr_REURBNotificar25unid_48.setVisible(false);lyr_REURBVerificar2unid_49.setVisible(false);lyr_REURBRegularizado9unid_50.setVisible(false);lyr_REURBEmmonitoramento1unid_51.setVisible(false);lyr_REURBEmregularizao36unid_52.setVisible(false);lyr_REURBNotificado4unid_53.setVisible(false);lyr_REURBNotificar25unid_54.setVisible(false);lyr_REURBVerificar2unid_55.setVisible(false);lyr_REURBRegularizado9unid_56.setVisible(false);lyr_CondomnioIICityPetrpolis_57.setVisible(false);lyr_CondomnioIICityPetrpolis_58.setVisible(false);lyr_CondomnioICityPetrpolis_59.setVisible(false);lyr_CondomnioICityPetrpolis_60.setVisible(false);lyr_EmpreendimentoVillaBella_61.setVisible(false);lyr_EmpreendimentoVillaBella_62.setVisible(false);lyr_EmpreendimentoFazendaProgresso_63.setVisible(false);lyr_EmpreendimentoFazendaProgresso_64.setVisible(false);lyr_EmpreendimentoArizona_65.setVisible(false);lyr_EmpreendimentoArizona_66.setVisible(false);lyr_EmpreendimentoVilaDiEspanha_67.setVisible(false);lyr_EmpreendimentoVilaDiEspanha_68.setVisible(false);lyr_EmpreendimentoTerraNova_69.setVisible(false);lyr_EmpreendimentoTerraNova_70.setVisible(false);lyr_EmpreendimentoDiocesedeFranca_71.setVisible(false);lyr_EmpreendimentoDiocesedeFranca_72.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_73.setVisible(false);lyr_EmpreendimentoResidencialBoaVista_74.setVisible(false);lyr_EmpreendimentoVillaDoratta_75.setVisible(false);lyr_EmpreendimentoVillaDoratta_76.setVisible(false);lyr_EmpreendimentoInfratcnica_77.setVisible(false);lyr_EmpreendimentoInfratcnica_78.setVisible(false);lyr_EmpreendimentoSoCarlosII_79.setVisible(false);lyr_EmpreendimentoSoCarlosII_80.setVisible(false);lyr_EmpreendimentoParqueFlora_81.setVisible(false);lyr_EmpreendimentoParqueFlora_82.setVisible(false);lyr_EmpreendimentoVittaSoVicente_83.setVisible(false);lyr_EmpreendimentoVittaSoVicente_84.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_85.setVisible(false);lyr_EmpreendimentoRecantoMeneghetti_86.setVisible(false);lyr_EmpreendimentoParquedosSabias_87.setVisible(false);lyr_EmpreendimentoParquedosSabias_88.setVisible(false);lyr_EmpreendimentoMoradadaMata_89.setVisible(false);lyr_EmpreendimentoMoradadaMata_90.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_91.setVisible(false);lyr_EmpreendimentoIrineuZanetiII_92.setVisible(false);lyr_EmpreendimentoAdonis_93.setVisible(false);lyr_EmpreendimentoAdonis_94.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_95.setVisible(false);lyr_EmpreendimentoResidencialMarianaAlarcon_96.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_97.setVisible(false);lyr_EmpreendimentoResidencialJabuticabeiras_98.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_99.setVisible(false);lyr_EmpreendimentoResidencialCintraAlves_100.setVisible(false);lyr_EmpreendimentoLoteamentolamo_101.setVisible(false);lyr_EmpreendimentoLoteamentolamo_102.setVisible(false);lyr_EmpreendimentoSantaLina_103.setVisible(false);lyr_EmpreendimentoSantaLina_104.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_105.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegreII_106.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_107.setVisible(false);lyr_EmpreendimentoResidencialPousoAlegre_108.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_109.setVisible(false);lyr_EmpreendimentoResidencialAltodaFazenda_110.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_111.setVisible(false);lyr_EmpreendimentoResidencialMarioTasso_112.setVisible(false);lyr_EmpreendimentoVivenna_113.setVisible(false);lyr_EmpreendimentoVivenna_114.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115.setVisible(false);lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116.setVisible(false);lyr_EmprendimentoElias_117.setVisible(false);lyr_EmprendimentoElias_118.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_119.setVisible(false);lyr_EmpreendimentoResidencialSoCarlosI_120.setVisible(false);lyr_EmpreendimentoMonti_121.setVisible(false);lyr_EmpreendimentoMonti_122.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_123.setVisible(false);lyr_EmpreendimentoResidencialMoradadoBosque_124.setVisible(false);lyr_EmpreendimentoVittaAlvorada_125.setVisible(false);lyr_EmpreendimentoVittaAlvorada_126.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_127.setVisible(false);lyr_EmpreendimentoResidencialMarthaHelena_128.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_129.setVisible(false);lyr_EmpreendimentoResidencialYasminTorres_130.setVisible(false);lyr_EmpreendimentoPalmeiraReal_131.setVisible(false);lyr_EmpreendimentoPalmeiraReal_132.setVisible(false);lyr_EmpreendimentoEssence_133.setVisible(false);lyr_EmpreendimentoEssence_134.setVisible(false);lyr_EmpreendimentoVersalhes_135.setVisible(false);lyr_EmpreendimentoVersalhes_136.setVisible(false);lyr_EmpreendimentoSonetto_137.setVisible(false);lyr_EmpreendimentoSonetto_138.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_139.setVisible(false);lyr_EmpreendimentoResidencialSantaIns_140.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_141.setVisible(false);lyr_EmpreendimentoEdifcioSolNascente_142.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_143.setVisible(false);lyr_EmpreendimentoResidencialQuintadosOitis_144.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_145.setVisible(false);lyr_EmpreendimentoResidencialQuintadoSol_146.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_147.setVisible(false);lyr_EmpreendimentoParquePalmeiraImperial_148.setVisible(false);lyr_EmpreendimentoBordadaMata_149.setVisible(false);lyr_EmpreendimentoBordadaMata_150.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_151.setVisible(false);lyr_EmpreendimentoEdifcioResidencialHope_152.setVisible(false);lyr_EmpreendimentoHorizResidence_153.setVisible(false);lyr_EmpreendimentoHorizResidence_154.setVisible(false);lyr_EmpreendimentoJardimFlora_155.setVisible(false);lyr_EmpreendimentoJardimFlora_156.setVisible(false);lyr_EmpreendimentoJardimHorizonte_157.setVisible(false);lyr_EmpreendimentoJardimHorizonte_158.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_159.setVisible(false);lyr_EmpreendimentoJardimMariaLuiza_160.setVisible(false);lyr_EmpreendimentoMontBlancResidence_161.setVisible(false);lyr_EmpreendimentoMontBlancResidence_162.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_163.setVisible(false);lyr_EmpreendimentoMoradadoVerdeII_164.setVisible(false);lyr_EmpreendimentoParagonII_165.setVisible(false);lyr_EmpreendimentoParagonII_166.setVisible(false);lyr_EmpreendimentoParagon_167.setVisible(false);lyr_EmpreendimentoParagon_168.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_169.setVisible(false);lyr_EmpreendimentoParqueVillaLobos_170.setVisible(false);lyr_EmpreendimentoDaVinci_171.setVisible(false);lyr_EmpreendimentoDaVinci_172.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_173.setVisible(false);lyr_EmpreendimentoResidencialDomingosJardini_174.setVisible(false);lyr_EmpreendimentoResidencialSantaF_175.setVisible(false);lyr_EmpreendimentoResidencialSantaF_176.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_177.setVisible(false);lyr_EmpreendimentoEdifcioRuadoSol_178.setVisible(false);lyr_EmpreendimentoTorontoResidence_179.setVisible(false);lyr_EmpreendimentoTorontoResidence_180.setVisible(false);lyr_EmpreendimentoVillaPucci_181.setVisible(false);lyr_EmpreendimentoVillaPucci_182.setVisible(false);lyr_EmpreendimentoFerracini_183.setVisible(false);lyr_EmpreendimentoFerracini_184.setVisible(false);lyr_EmpreendimentoColorado_185.setVisible(false);lyr_EmpreendimentoColorado_186.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_187.setVisible(false);lyr_EmpreendimentoResicencialNairRetuciII_188.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_189.setVisible(false);lyr_EmpreendimentoResicencialNairRetuci_190.setVisible(false);lyr_EmpreendimentoCidadeJardim_191.setVisible(false);lyr_EmpreendimentoCidadeJardim_192.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_193.setVisible(false);lyr_ServidoRamal138kVFranca4Guanabara_194.setVisible(false);lyr_EmpreendimentosAprovado27unid_195.setVisible(false);lyr_EmpreendimentosDiretriz8unid_196.setVisible(false);lyr_EmpreendimentosDefinitiva7unid_197.setVisible(false);lyr_EmpreendimentosPrvia24unid_198.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_199.setVisible(false);lyr_PBZPAEdifcioPrimeHELIPONTO_200.setVisible(false);lyr_PBZPAHospitalHELIPONTO_201.setVisible(false);lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.setVisible(false);lyr_PrprioPblicoMunicipalArena3unid_203.setVisible(false);lyr_PrprioPblicoMunicipalBiblioteca1unid_204.setVisible(false);lyr_PrprioPblicoMunicipalCampo18unid_205.setVisible(false);lyr_PrprioPblicoMunicipalCasa1unid_206.setVisible(false);lyr_PrprioPblicoMunicipalCentro4unid_207.setVisible(false);lyr_PrprioPblicoMunicipalCEPEL12unid_208.setVisible(false);lyr_PrprioPblicoMunicipalConjunto4unid_209.setVisible(false);lyr_PrprioPblicoMunicipalEstadio1unid_210.setVisible(false);lyr_PrprioPblicoMunicipalGinsio5unid_211.setVisible(false);lyr_PrprioPblicoMunicipalMuseu2unid_212.setVisible(false);lyr_PrprioPblicoMunicipalParque2unid_213.setVisible(false);lyr_PrprioPblicoMunicipalPavilho1unid_214.setVisible(false);lyr_PrprioPblicoMunicipalPinacoteca1unid_215.setVisible(false);lyr_PrprioPblicoMunicipalPiscina1unid_216.setVisible(false);lyr_PrprioPblicoMunicipalPista1unid_217.setVisible(false);lyr_PrprioPblicoMunicipalPraa3unid_218.setVisible(false);lyr_PrprioPblicoMunicipalQuadra3unid_219.setVisible(false);lyr_PrprioPblicoMunicipalSecretaria1unid_220.setVisible(false);lyr_PrprioPblicoMunicipalTeatro2unid_221.setVisible(false);lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222.setVisible(false);lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223.setVisible(false);lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.setVisible(false);lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.setVisible(false);lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226.setVisible(false);lyr_ParqueZumbidosPalmares_227.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.setVisible(false);lyr_AntigoAterrodasMaritacas_230.setVisible(false);lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.setVisible(false);lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.setVisible(false);lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.setVisible(false);lyr_AntigoAterrodaFazendaMunicipal_234.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.setVisible(false);lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.setVisible(false);lyr_ARORemanescentesFlorestais_237.setVisible(false);lyr_AROreadeAmortecimento_238.setVisible(false);lyr_AROFaixadeCuestas_239.setVisible(false);lyr_AROAPP_240.setVisible(false);lyr_ARAIncongrunciasemAPP_241.setVisible(false);lyr_ARAETELagoas_242.setVisible(false);lyr_ARAAterros_243.setVisible(false);lyr_AODreaUrbanaConsolidada_244.setVisible(false);lyr_AODBaixaDensidadeNvel3_245.setVisible(false);lyr_AODBaixaDensidadeNvel2_246.setVisible(false);lyr_AODBaixaDensidadeNvel1_247.setVisible(false);lyr_AODAUSFase2_248.setVisible(false);lyr_AODAUSFase1_249.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_250.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_251.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_252.setVisible(false);lyr_AoCivilPblica1unid_253.setVisible(false);lyr_AoCivilPblica1unid_254.setVisible(false);lyr_CartaAnuncia20unid_255.setVisible(false);lyr_CartaAnuncia20unid_256.setVisible(false);lyr_PlantioVoluntrio1unid_257.setVisible(false);lyr_PlantioVoluntrio1unid_258.setVisible(false);lyr_TACMinistrioPblico9unid_259.setVisible(false);lyr_TACMinistrioPblico9unid_260.setVisible(false);lyr_TCRACETESB28unid_261.setVisible(false);lyr_TCRACETESB28unid_262.setVisible(false);lyr_TCRAMunicipal14unid_263.setVisible(false);lyr_TCRAMunicipal14unid_264.setVisible(false);lyr_TRPRLCETESB2unid_265.setVisible(false);lyr_TRPRLCETESB2unid_266.setVisible(false);lyr_JardimZoobotnicoDelimitao_267.setVisible(false);lyr_JardimZoobotnicoTrajetos_268.setVisible(false);lyr_JardimZoobotnicoPontosdeInteresse19unid_269.setVisible(false);lyr_ParquedosTrabalhadores_270.setVisible(false);lyr_ParquedosTrabalhadores_271.setVisible(false);lyr_ComplexoPoliesportivo_272.setVisible(false);lyr_ComplexoPoliesportivo_273.setVisible(false);lyr_ParqueCaxambu_274.setVisible(false);lyr_ParqueCaxambu_275.setVisible(false);lyr_ParquedeExposiesFernandoCosta_276.setVisible(false);lyr_ParquedeExposiesFernandoCosta_277.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_278.setVisible(false);lyr_ParqueAmbientalLuprcioTaveira_279.setVisible(false);lyr_ProgramaAdoteUmaPraa315unid30277327m_280.setVisible(false);lyr_ComPlacaDilu161unid17007212m_281.setVisible(false);lyr_ComPlacaEgnaldo134unid12211725m_282.setVisible(false);lyr_SemPlacaDilu16unid774541m_283.setVisible(false);lyr_SemPlacaEgnaldo4unid86447m_284.setVisible(false);lyr_LotesImvelPrivado92unid_285.setVisible(false);lyr_ImvelPblico118unid_286.setVisible(false);lyr_ImvelPrivado92unid_287.setVisible(false);lyr_RodoviasEstaduais4unid_288.setVisible(false);lyr_EstradasRuraisMunicipais34unid_289.setVisible(false);lyr_RodoviasMunicipais8unid_290.setVisible(false);lyr_Gesso1unid_291.setVisible(false);lyr_ResduosdeConstruoCivil7unid_292.setVisible(false);lyr_ResduosVerdes1unid_293.setVisible(false);lyr_ChapasdeRaioX1unid_294.setVisible(false);lyr_Embalagensvaziasdeagrotxicos1unid_295.setVisible(false);lyr_leodecozinhausado2unid_296.setVisible(false);lyr_leolubrificanteusado1unid_297.setVisible(false);lyr_Latasdetintametlicasvazias2unid_298.setVisible(false);lyr_ResduosPerigosos1unid_299.setVisible(false);lyr_Madeiras1unid_300.setVisible(false);lyr_ResduosdeServiosdeSade21unid_301.setVisible(false);lyr_PilhaseBaterias17unid_302.setVisible(false);lyr_Pneus1unid_303.setVisible(false);lyr_Lmpadas4unid_304.setVisible(false);lyr_ResduosdeCouro1unid_305.setVisible(false);lyr_ResduosEletrnicos2unid_306.setVisible(false);lyr_ResduosReciclveis15unid_307.setVisible(false);lyr_ResduosInservveis4unid_308.setVisible(false);lyr_Contineres286unid_309.setVisible(false);lyr_rvoreImuneaoCorte9unid_310.setVisible(false);lyr_LocaisdeDifcilAcessoereasRurais20unid_311.setVisible(false);lyr_AcademiasaoArLivre84unid_312.setVisible(false);lyr_Voorocas26unid_313.setVisible(false);
var layersList = [group_MapasBase,lyr_LimiteMunicipaldeFranca_3,lyr_reaUrbanadeFranca_4,group_Bairros383unidRegies9unid,group_HidrografiaFBDS2025,group_FazendaMunicipalPousoAlto,group_reasPblicas,group_SEINFRAREURB,group_SecretariadeInfraestrutura,group_SecretariadeEsporteeCultura,group_SecretariadeSade,group_GerenciamentodereasContaminadas,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_reasCompromissadas,group_ParquesdeFranca,group_ProgramaAdoteUmaPraa,group_PontosViciados,group_RodoviaseEstradas,group_DescarteCorretodeResduos,lyr_Contineres286unid_309,lyr_rvoreImuneaoCorte9unid_310,lyr_LocaisdeDifcilAcessoereasRurais20unid_311,lyr_AcademiasaoArLivre84unid_312,lyr_Voorocas26unid_313];
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
lyr_LoteEMDEF10unid218783m_35.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_LoteEMDEF10unid_36.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', });
lyr_Lote504unid13809703m_37.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_Lote504unid_38.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Área (m²)': 'Área (m²)', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', });
lyr_APP156unid230392892m_39.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_readeUsoEspecial247unid269671879m_40.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaInstitucional226unid133023699m_41.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaPatrimonial33unid15807656m_42.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_LoteamentoFechado115unid52603608m_43.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'processo', });
lyr_reaVerde1934unid805836637m_44.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'm2': 'm2', 'data_inclusao': 'Data de Inclusão', 'regiao': 'Região', 'processo': 'Processo', });
lyr_REURBEmmonitoramento1unid_45.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBEmregularizao36unid_46.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBNotificado4unid_47.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBNotificar25unid_48.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBVerificar2unid_49.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBRegularizado9unid_50.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBEmmonitoramento1unid_51.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBEmregularizao36unid_52.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBNotificado4unid_53.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBNotificar25unid_54.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBVerificar2unid_55.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_REURBRegularizado9unid_56.set('fieldAliases', {'fid': 'fid', 'processo': 'processo', 'modalidade': 'modalidade', 'nome_loteamento': 'Nome do Loteamento', 'observacao': 'Observação', 'matricula': 'Matrícula', 'quant_lotes': 'Nº de Lotes', 'area_total_m2': 'Área Total (m²)', 'decreto_reurb': 'Decreto REURB', 'situacao': 'Situação', });
lyr_CondomnioIICityPetrpolis_57.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioIICityPetrpolis_58.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_59.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_CondomnioICityPetrpolis_60.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_61.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaBella_62.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_63.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFazendaProgresso_64.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_65.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoArizona_66.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVilaDiEspanha_67.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVilaDiEspanha_68.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTerraNova_69.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTerraNova_70.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDiocesedeFranca_71.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDiocesedeFranca_72.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_73.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialBoaVista_74.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_75.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaDoratta_76.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratcnica_77.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoInfratcnica_78.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_79.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSoCarlosII_80.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_81.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueFlora_82.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_83.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaSoVicente_84.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoRecantoMeneghetti_85.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoRecantoMeneghetti_86.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_87.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquedosSabias_88.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_89.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadaMata_90.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_91.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoIrineuZanetiII_92.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_93.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAdonis_94.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_95.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarianaAlarcon_96.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_97.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialJabuticabeiras_98.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_99.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialCintraAlves_100.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_101.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoLoteamentolamo_102.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_103.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSantaLina_104.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_105.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegreII_106.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_107.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialPousoAlegre_108.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_109.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialAltodaFazenda_110.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialMarioTasso_111.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarioTasso_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVivenna_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVivenna_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmprendimentoElias_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialSoCarlosI_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSoCarlosI_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoMonti_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMonti_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMoradadoBosque_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMoradadoBosque_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVittaAlvorada_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialMarthaHelena_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialMarthaHelena_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialYasminTorres_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialYasminTorres_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoPalmeiraReal_131.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoPalmeiraReal_132.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEssence_133.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEssence_134.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_135.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVersalhes_136.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoSonetto_137.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoSonetto_138.set('fieldAliases', {'fid': 'fid', });
lyr_EmpreendimentoResidencialSantaIns_139.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaIns_140.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoEdifcioSolNascente_141.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioSolNascente_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadosOitis_143.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadosOitis_144.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_EmpreendimentoResidencialQuintadoSol_145.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialQuintadoSol_146.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_147.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParquePalmeiraImperial_148.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_149.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoBordadaMata_150.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_151.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioResidencialHope_152.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_153.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoHorizResidence_154.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_155.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimFlora_156.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_157.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimHorizonte_158.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_159.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoJardimMariaLuiza_160.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_161.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMontBlancResidence_162.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_163.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoMoradadoVerdeII_164.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_165.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagonII_166.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_167.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParagon_168.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_169.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoParqueVillaLobos_170.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_171.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoDaVinci_172.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_173.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialDomingosJardini_174.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_175.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResidencialSantaF_176.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_177.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoEdifcioRuadoSol_178.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_179.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoTorontoResidence_180.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_181.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoVillaPucci_182.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_183.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoFerracini_184.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_185.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoColorado_186.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_187.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuciII_188.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_189.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoResicencialNairRetuci_190.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_191.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_EmpreendimentoCidadeJardim_192.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_ServidoRamal138kVFranca4Guanabara_193.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ServidoRamal138kVFranca4Guanabara_194.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_EmpreendimentosAprovado27unid_195.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDiretriz8unid_196.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosDefinitiva7unid_197.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_EmpreendimentosPrvia24unid_198.set('fieldAliases', {'fid': 'fid', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'latitude': 'latitude', 'longitude': 'longitude', 'unidade_municipal': 'Unidade Municipal', 'etapa': 'Etapa', 'decreto': 'Decreto', 'tipologia': 'Tipologia', 'matricula': 'Matrícula', 'processo': 'Processo', 'proprietarios': 'Proprietarios', 'nome_empreendimento': 'Nome do Empreendimento', 'zoneamento': 'Zoneamento', 'area_verde_m2': 'Área Verde (m²)', 'area_institucional_m2': 'Área Institucional (m²)', 'area_lazer_m2': 'Área Lazer (m²)', 'lotes_m2': 'Lotes (m²)', 'unidades_lotes': 'Lotes (unid)', 'unidades_lotes_misto': 'Lotes Mistos (unid)', 'unidades_lotes_residenciais': 'Lotes Residenciais (unid)', 'lotes_comerciais': 'Lotes Comerciais', });
lyr_PBZPAEdifcioPrimeHELIPONTO_199.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAEdifcioPrimeHELIPONTO_200.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PBZPAHospitalHELIPONTO_201.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PrprioPblicoMunicipalArena3unid_203.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_204.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCampo18unid_205.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCasa1unid_206.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCentro4unid_207.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalCEPEL12unid_208.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalConjunto4unid_209.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalEstadio1unid_210.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalGinsio5unid_211.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalMuseu2unid_212.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalParque2unid_213.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPavilho1unid_214.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_215.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPiscina1unid_216.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPista1unid_217.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalPraa3unid_218.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalQuadra3unid_219.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalSecretaria1unid_220.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalTeatro2unid_221.set('fieldAliases', {'fid': 'fid', 'unidade_municipal': 'Unidade Municipal', 'cadastro_imobiliario': 'Cadastro Imobiliário', 'proprio_municipal': 'Próprio Público Municipal', 'endereco': 'Endereço', 'lat_long': 'lat_long', 'lat': 'lat', 'long': 'long', 'categoria': 'Categoria', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226.set('fieldAliases', {'fid': 'fid', 'CNES': 'CNES', 'EQUIPAMENTO_DE_SAÚDE': 'Equipamento de Saúde', 'ENDERECO': 'Endereço', 'CADASTRO_IMOBILIARIO': 'Cadastro Imobiliário', 'CATEGORIA': 'Categoria', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_ParqueZumbidosPalmares_227.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.set('fieldAliases', {'fid': 'fid', 'Name': 'Poço', });
lyr_AntigoAterrodasMaritacas_230.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.set('fieldAliases', {'fid': 'fid', 'Poço': 'Poço', 'Norte (m)': 'Norte (m)', 'Este (m)': 'Este (m)', 'Cota': 'Cota', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.set('fieldAliases', {'fid': 'fid', 'Norte': 'Norte', 'Leste': 'Leste', 'Cota': 'Cota', 'Identifica': 'Identifica', 'Profundida': 'Profundida', 'Identifi_1': 'Poço', 'Profundi_1': 'Profundi_1', 'NA Dinâmi': 'NA Dinâmi', 'NA Estatic': 'NA Estatic', 'NÍVEL DE': 'NÍVEL DE', 'TEMPERATUR': 'TEMPERATUR', 'pH': 'pH', 'CONDUTIVID': 'CONDUTIVID', 'Eh/ORP': 'Eh/ORP', 'OXIGÊNIO': 'OXIGÊNIO', 'TURBIDEZ': 'TURBIDEZ', });
lyr_AntigoAterrodaFazendaMunicipal_234.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Área (m²)': 'Área (m²)', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.set('fieldAliases', {'fid': 'fid', 'Field1': 'Poço', 'Field2': 'Field2', 'Field3': 'Field3', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Poço', });
lyr_ARORemanescentesFlorestais_237.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_238.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_239.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_240.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_241.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_242.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_243.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_244.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_245.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_246.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_247.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_248.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase1_249.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_250.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_251.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_DelimitaodaBaciadoRibeirodaOna_252.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_AoCivilPblica1unid_253.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_AoCivilPblica1unid_254.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'area': 'area', 'quant': 'quant', 'proc_municipal': 'proc_municipal', });
lyr_CartaAnuncia20unid_255.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_CartaAnuncia20unid_256.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'doc_origem': 'Documento de origem', });
lyr_PlantioVoluntrio1unid_257.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_PlantioVoluntrio1unid_258.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', });
lyr_TACMinistrioPblico9unid_259.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TACMinistrioPblico9unid_260.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'ic': 'Inquérito Civil nº.', 'proc_municipal': 'Processo nº. (Municipal)', });
lyr_TCRACETESB28unid_261.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRACETESB28unid_262.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TCRAMunicipal14unid_263.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TCRAMunicipal14unid_264.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'quant': 'Quantidade de mudas', 'autorizacao': 'Autorização nº. (Municipal)', });
lyr_TRPRLCETESB2unid_265.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_TRPRLCETESB2unid_266.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'Area': 'Área (m²)', 'matricula': 'Matrícula nº.', 'proc_cetesb': 'Processo CETESB nº. (e-Ambiente)', });
lyr_JardimZoobotnicoDelimitao_267.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_JardimZoobotnicoTrajetos_268.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_269.set('fieldAliases', {'fid': 'fid', 'Legenda': 'Legenda', });
lyr_ParquedosTrabalhadores_270.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedosTrabalhadores_271.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ComplexoPoliesportivo_272.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ComplexoPoliesportivo_273.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Descrição', });
lyr_ParqueCaxambu_274.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueCaxambu_275.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_276.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParquedeExposiesFernandoCosta_277.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_278.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ParqueAmbientalLuprcioTaveira_279.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_280.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'Bairro': 'Bairro', 'Nº Cadastro Imobiliário': 'Nº Cadastro Imobiliário', 'Código da Região': 'Código da Região', '1ª Semana': '1ª Semana', '2ª Semana': '2ª Semana', '3ª Semana': '3ª Semana', '4ª Semana': '4ª Semana', '5ª Semana': '5ª Semana', 'Terceirização': 'Terceirização', 'responsavel': 'Responsável', 'm2': 'Área (m²)', });
lyr_ComPlacaDilu161unid17007212m_281.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_ComPlacaEgnaldo134unid12211725m_282.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaDilu16unid774541m_283.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_SemPlacaEgnaldo4unid86447m_284.set('fieldAliases', {'fid': 'fid', 'Adotante': 'Adotante', 'Local': 'Local', 'Programa': 'Programa', 'Possui placa?': 'Possui placa?', 'm2': 'Área (m²)', 'responsavel': 'Responsável', 'data_contrato': 'Data de Assinatura do Contrato', 'bairro': 'bairro', });
lyr_LotesImvelPrivado92unid_285.set('fieldAliases', {'fid': 'fid', 'quadra': 'QUADRA', 'lote': 'LOTE', 'cadastro_imobiliario': 'CADASTRO IMOBILIÁRIO', '_BAIRRO': '_BAIRRO', '_RUA': '_RUA', '_processo_seinfra': 'Processo SEINFRA', '_processo_sms': 'Processo SMS', '_processo_mp': 'Pocesso MP', '_processo_smseg': 'Processo SMSEG', '_outros_processos': 'Outos Processos', '_data_inclusao': 'Data de Inclusão', });
lyr_ImvelPblico118unid_286.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_ImvelPrivado92unid_287.set('fieldAliases', {'fid': 'fid', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'CADASTRO IMOBILIÁRIO': 'CADASTRO IMOBILIÁRIO', 'CLASSIFICAÇÃO DO IMÓVEL': 'CLASSIFICAÇÃO DO IMÓVEL', 'FREQUÊNCIA DE LIMPEZA': 'FREQUÊNCIA DE LIMPEZA', 'QUADRA': 'QUADRA', 'LOTE': 'LOTE', 'processo_seinfra': 'Processo SEINFRA', 'processo_sms': 'Processo SMS', 'processo_mp': 'Pocesso MP', 'processo_smseg': 'Processo SMSEG', 'coordenada_x': 'Coordenada Leste (x)', 'coordenada_y': 'Coordenada Norte (y)', 'outros_processos': 'Outos Processos', 'data_inclusao': 'Data de Inclusão', });
lyr_RodoviasEstaduais4unid_288.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Extensao': 'Extensao (km)', 'Superficie': 'Superficie', 'Jurisdicao': 'Jurisdição', });
lyr_EstradasRuraisMunicipais34unid_289.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'description', 'Extensao_km': 'Extensao (km)', });
lyr_RodoviasMunicipais8unid_290.set('fieldAliases', {'fid': 'fid', 'geometriaaproximada': 'geometriaaproximada', 'tipovia': 'tipovia', 'jurisdicao': 'Jurisdição', 'administracao': 'administracao', 'revestimento': 'revestimento', 'operacional': 'operacional', 'situacaofisica': 'situacaofisica', 'canteirodivisorio': 'canteirodivisorio', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavimentacao': 'tipopavimentacao', 'sigla': 'sigla', 'Extensao': 'Extensao (km)', });
lyr_Gesso1unid_291.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeConstruoCivil7unid_292.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosVerdes1unid_293.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ChapasdeRaioX1unid_294.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Embalagensvaziasdeagrotxicos1unid_295.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leodecozinhausado2unid_296.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_leolubrificanteusado1unid_297.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Latasdetintametlicasvazias2unid_298.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosPerigosos1unid_299.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Madeiras1unid_300.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeServiosdeSade21unid_301.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_PilhaseBaterias17unid_302.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Pneus1unid_303.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Lmpadas4unid_304.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosdeCouro1unid_305.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosEletrnicos2unid_306.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosReciclveis15unid_307.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_ResduosInservveis4unid_308.set('fieldAliases', {'fid': 'fid', 'Categoria': 'Categoria', 'Local': 'Local', 'Descrição': 'Descrição', 'Endereço': 'Endereço', 'Contato': 'Contato', });
lyr_Contineres286unid_309.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Nome', 'bairro': 'bairro', });
lyr_rvoreImuneaoCorte9unid_310.set('fieldAliases', {'fid': 'fid', 'nome_popular': 'Nome Popular', 'nome_cientifico': 'Nome Científico', 'legislacao': 'Legislação', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_311.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'PER__ODO_TURNO_': 'Período', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'Horário', 'FREQU__NCIA': 'Frequência', 'PROGRAMA____O_SEMANAL': 'Programação Semanal', 'EQUIPAMENTOS': 'Equipamentos', 'LONGITUDE': 'Longitude', 'LATITUDE': 'Latitude', });
lyr_AcademiasaoArLivre84unid_312.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'description': 'Local', 'bairro': 'bairro', });
lyr_Voorocas26unid_313.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ID_PONTO_I': 'ID_PONTO_I', 'IBGE': 'IBGE', 'MUNIC__PIO': 'MUNIC__PIO', 'BACIA': 'BACIA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'SITUA____O': 'Situação', 'REFER__NCI': 'Referência', 'PRIORIDADE': 'Prioridade', 'OBSERVA_____': 'Observação', });
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
lyr_LoteEMDEF10unid218783m_35.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteEMDEF10unid_36.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', });
lyr_Lote504unid13809703m_37.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_Lote504unid_38.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Área (m²)': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', });
lyr_APP156unid230392892m_39.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_readeUsoEspecial247unid269671879m_40.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaInstitucional226unid133023699m_41.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaPatrimonial33unid15807656m_42.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_LoteamentoFechado115unid52603608m_43.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': '', 'regiao': '', 'processo': '', });
lyr_reaVerde1934unid805836637m_44.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'm2': 'TextEdit', 'data_inclusao': 'DateTime', 'regiao': 'TextEdit', 'processo': 'TextEdit', });
lyr_REURBEmmonitoramento1unid_45.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBEmregularizao36unid_46.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBNotificado4unid_47.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBNotificar25unid_48.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBVerificar2unid_49.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBRegularizado9unid_50.set('fieldImages', {'fid': 'TextEdit', 'processo': 'TextEdit', 'modalidade': 'TextEdit', 'nome_loteamento': 'TextEdit', 'observacao': 'TextEdit', 'matricula': 'TextEdit', 'quant_lotes': 'Range', 'area_total_m2': 'TextEdit', 'decreto_reurb': 'TextEdit', 'situacao': 'TextEdit', });
lyr_REURBEmmonitoramento1unid_51.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_REURBEmregularizao36unid_52.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_REURBNotificado4unid_53.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_REURBNotificar25unid_54.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_REURBVerificar2unid_55.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_REURBRegularizado9unid_56.set('fieldImages', {'fid': 'TextEdit', 'processo': '', 'modalidade': '', 'nome_loteamento': '', 'observacao': '', 'matricula': '', 'quant_lotes': '', 'area_total_m2': '', 'decreto_reurb': '', 'situacao': '', });
lyr_CondomnioIICityPetrpolis_57.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioIICityPetrpolis_58.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_59.set('fieldImages', {'fid': '', 'layer': '', });
lyr_CondomnioICityPetrpolis_60.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_61.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaBella_62.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_63.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFazendaProgresso_64.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_65.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoArizona_66.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVilaDiEspanha_67.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVilaDiEspanha_68.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTerraNova_69.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTerraNova_70.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDiocesedeFranca_71.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDiocesedeFranca_72.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_73.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialBoaVista_74.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_75.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaDoratta_76.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratcnica_77.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoInfratcnica_78.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_79.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSoCarlosII_80.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_81.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueFlora_82.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_83.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaSoVicente_84.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoRecantoMeneghetti_85.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoRecantoMeneghetti_86.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_87.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquedosSabias_88.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_89.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadaMata_90.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_91.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoIrineuZanetiII_92.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_93.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAdonis_94.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_95.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarianaAlarcon_96.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_97.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialJabuticabeiras_98.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_99.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialCintraAlves_100.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_101.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoLoteamentolamo_102.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_103.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSantaLina_104.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_105.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegreII_106.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_107.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialPousoAlegre_108.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_109.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialAltodaFazenda_110.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialMarioTasso_111.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarioTasso_112.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVivenna_113.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVivenna_114.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmprendimentoElias_117.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_EmprendimentoElias_118.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialSoCarlosI_119.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSoCarlosI_120.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoMonti_121.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMonti_122.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_123.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMoradadoBosque_124.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_125.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVittaAlvorada_126.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialMarthaHelena_127.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialMarthaHelena_128.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialYasminTorres_129.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialYasminTorres_130.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoPalmeiraReal_131.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoPalmeiraReal_132.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEssence_133.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEssence_134.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_135.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVersalhes_136.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoSonetto_137.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoSonetto_138.set('fieldImages', {'fid': '', });
lyr_EmpreendimentoResidencialSantaIns_139.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaIns_140.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoEdifcioSolNascente_141.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioSolNascente_142.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_143.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadosOitis_144.set('fieldImages', {'fid': '', 'layer': '', 'path': '', });
lyr_EmpreendimentoResidencialQuintadoSol_145.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialQuintadoSol_146.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_147.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParquePalmeiraImperial_148.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_149.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoBordadaMata_150.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_151.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioResidencialHope_152.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_153.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoHorizResidence_154.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_155.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimFlora_156.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_157.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimHorizonte_158.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_159.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoJardimMariaLuiza_160.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_161.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMontBlancResidence_162.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_163.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoMoradadoVerdeII_164.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_165.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagonII_166.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_167.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParagon_168.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_169.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoParqueVillaLobos_170.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_171.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoDaVinci_172.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_173.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialDomingosJardini_174.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_175.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResidencialSantaF_176.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_177.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoEdifcioRuadoSol_178.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_179.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoTorontoResidence_180.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_181.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoVillaPucci_182.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_183.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoFerracini_184.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_185.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoColorado_186.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_187.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuciII_188.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_189.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoResicencialNairRetuci_190.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_191.set('fieldImages', {'fid': '', 'layer': '', });
lyr_EmpreendimentoCidadeJardim_192.set('fieldImages', {'fid': '', 'layer': '', });
lyr_ServidoRamal138kVFranca4Guanabara_193.set('fieldImages', {'fid': '', 'id': '', });
lyr_ServidoRamal138kVFranca4Guanabara_194.set('fieldImages', {'fid': '', 'id': '', });
lyr_EmpreendimentosAprovado27unid_195.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDiretriz8unid_196.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosDefinitiva7unid_197.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_EmpreendimentosPrvia24unid_198.set('fieldImages', {'fid': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'unidade_municipal': 'TextEdit', 'etapa': 'TextEdit', 'decreto': 'TextEdit', 'tipologia': 'TextEdit', 'matricula': 'TextEdit', 'processo': 'TextEdit', 'proprietarios': 'TextEdit', 'nome_empreendimento': 'TextEdit', 'zoneamento': 'TextEdit', 'area_verde_m2': 'TextEdit', 'area_institucional_m2': 'TextEdit', 'area_lazer_m2': 'TextEdit', 'lotes_m2': 'TextEdit', 'unidades_lotes': 'TextEdit', 'unidades_lotes_misto': 'TextEdit', 'unidades_lotes_residenciais': 'TextEdit', 'lotes_comerciais': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_199.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAEdifcioPrimeHELIPONTO_200.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PBZPAHospitalHELIPONTO_201.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_PrprioPblicoMunicipalArena3unid_203.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_204.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCampo18unid_205.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCasa1unid_206.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCentro4unid_207.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalCEPEL12unid_208.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalConjunto4unid_209.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalEstadio1unid_210.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalGinsio5unid_211.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalMuseu2unid_212.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalParque2unid_213.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPavilho1unid_214.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_215.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPiscina1unid_216.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPista1unid_217.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalPraa3unid_218.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalQuadra3unid_219.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalSecretaria1unid_220.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalTeatro2unid_221.set('fieldImages', {'fid': 'TextEdit', 'unidade_municipal': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', 'proprio_municipal': 'TextEdit', 'endereco': 'TextEdit', 'lat_long': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'categoria': 'TextEdit', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226.set('fieldImages', {'fid': 'TextEdit', 'CNES': 'Range', 'EQUIPAMENTO_DE_SAÚDE': 'TextEdit', 'ENDERECO': 'TextEdit', 'CADASTRO_IMOBILIARIO': 'TextEdit', 'CATEGORIA': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ParqueZumbidosPalmares_227.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_AntigoAterrodasMaritacas_230.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.set('fieldImages', {'fid': 'TextEdit', 'Poço': 'TextEdit', 'Norte (m)': 'TextEdit', 'Este (m)': 'TextEdit', 'Cota': 'TextEdit', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.set('fieldImages', {'fid': 'TextEdit', 'Norte': 'TextEdit', 'Leste': 'TextEdit', 'Cota': 'TextEdit', 'Identifica': 'TextEdit', 'Profundida': 'TextEdit', 'Identifi_1': 'TextEdit', 'Profundi_1': 'TextEdit', 'NA Dinâmi': 'TextEdit', 'NA Estatic': 'TextEdit', 'NÍVEL DE': 'TextEdit', 'TEMPERATUR': 'TextEdit', 'pH': 'TextEdit', 'CONDUTIVID': 'TextEdit', 'Eh/ORP': 'TextEdit', 'OXIGÊNIO': 'TextEdit', 'TURBIDEZ': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipal_234.set('fieldImages', {'fid': '', 'Nome': '', 'Área (m²)': '', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.set('fieldImages', {'fid': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ARORemanescentesFlorestais_237.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_238.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_239.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_240.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_241.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_242.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_243.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_244.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_245.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_246.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_247.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_248.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': 'TextEdit', 'desc_classe': 'TextEdit', });
lyr_AODAUSFase1_249.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_250.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_251.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_252.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_AoCivilPblica1unid_253.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_AoCivilPblica1unid_254.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'proc_municipal': 'TextEdit', });
lyr_CartaAnuncia20unid_255.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': '', });
lyr_CartaAnuncia20unid_256.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'doc_origem': 'TextEdit', });
lyr_PlantioVoluntrio1unid_257.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_PlantioVoluntrio1unid_258.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', });
lyr_TACMinistrioPblico9unid_259.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TACMinistrioPblico9unid_260.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'quant': 'Range', 'ic': 'TextEdit', 'proc_municipal': 'TextEdit', });
lyr_TCRACETESB28unid_261.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'proc_cetesb': '', });
lyr_TCRACETESB28unid_262.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'proc_cetesb': 'TextEdit', });
lyr_TCRAMunicipal14unid_263.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'quant': 'Range', 'autorizacao': '', });
lyr_TCRAMunicipal14unid_264.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'quant': 'Range', 'autorizacao': 'TextEdit', });
lyr_TRPRLCETESB2unid_265.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': '', 'matricula': '', 'proc_cetesb': '', });
lyr_TRPRLCETESB2unid_266.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'matricula': 'TextEdit', 'proc_cetesb': 'TextEdit', });
lyr_JardimZoobotnicoDelimitao_267.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_JardimZoobotnicoTrajetos_268.set('fieldImages', {'fid': '', 'NOME': '', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_269.set('fieldImages', {'fid': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_ParquedosTrabalhadores_270.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedosTrabalhadores_271.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ComplexoPoliesportivo_272.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ComplexoPoliesportivo_273.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_ParqueCaxambu_274.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueCaxambu_275.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_276.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParquedeExposiesFernandoCosta_277.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_278.set('fieldImages', {'fid': '', 'Nome': '', 'Descrição': '', });
lyr_ParqueAmbientalLuprcioTaveira_279.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_280.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'Bairro': 'TextEdit', 'Nº Cadastro Imobiliário': 'TextEdit', 'Código da Região': 'TextEdit', '1ª Semana': 'TextEdit', '2ª Semana': 'TextEdit', '3ª Semana': 'TextEdit', '4ª Semana': 'TextEdit', '5ª Semana': 'TextEdit', 'Terceirização': 'TextEdit', 'responsavel': 'TextEdit', 'm2': 'TextEdit', });
lyr_ComPlacaDilu161unid17007212m_281.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_ComPlacaEgnaldo134unid12211725m_282.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_SemPlacaDilu16unid774541m_283.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': '', 'bairro': '', });
lyr_SemPlacaEgnaldo4unid86447m_284.set('fieldImages', {'fid': 'TextEdit', 'Adotante': 'TextEdit', 'Local': 'TextEdit', 'Programa': 'TextEdit', 'Possui placa?': 'TextEdit', 'm2': 'TextEdit', 'responsavel': 'TextEdit', 'data_contrato': 'DateTime', 'bairro': '', });
lyr_LotesImvelPrivado92unid_285.set('fieldImages', {'fid': 'TextEdit', 'quadra': 'TextEdit', 'lote': 'TextEdit', 'cadastro_imobiliario': 'TextEdit', '_BAIRRO': 'TextEdit', '_RUA': 'TextEdit', '_processo_seinfra': 'TextEdit', '_processo_sms': 'TextEdit', '_processo_mp': 'TextEdit', '_processo_smseg': 'TextEdit', '_outros_processos': 'TextEdit', '_data_inclusao': 'DateTime', });
lyr_ImvelPblico118unid_286.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': '', 'data_inclusao': '', });
lyr_ImvelPrivado92unid_287.set('fieldImages', {'fid': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'CADASTRO IMOBILIÁRIO': 'TextEdit', 'CLASSIFICAÇÃO DO IMÓVEL': 'TextEdit', 'FREQUÊNCIA DE LIMPEZA': 'TextEdit', 'QUADRA': 'TextEdit', 'LOTE': 'TextEdit', 'processo_seinfra': 'TextEdit', 'processo_sms': 'TextEdit', 'processo_mp': 'TextEdit', 'processo_smseg': 'TextEdit', 'coordenada_x': 'TextEdit', 'coordenada_y': 'TextEdit', 'outros_processos': 'TextEdit', 'data_inclusao': '', });
lyr_RodoviasEstaduais4unid_288.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_EstradasRuraisMunicipais34unid_289.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Extensao_km': 'TextEdit', });
lyr_RodoviasMunicipais8unid_290.set('fieldImages', {'fid': 'TextEdit', 'geometriaaproximada': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administracao': 'TextEdit', 'revestimento': 'TextEdit', 'operacional': 'TextEdit', 'situacaofisica': 'TextEdit', 'canteirodivisorio': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'tipopavimentacao': 'TextEdit', 'sigla': 'TextEdit', 'Extensao': 'TextEdit', });
lyr_Gesso1unid_291.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeConstruoCivil7unid_292.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosVerdes1unid_293.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ChapasdeRaioX1unid_294.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Embalagensvaziasdeagrotxicos1unid_295.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leodecozinhausado2unid_296.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_leolubrificanteusado1unid_297.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Latasdetintametlicasvazias2unid_298.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosPerigosos1unid_299.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Madeiras1unid_300.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeServiosdeSade21unid_301.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_PilhaseBaterias17unid_302.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Pneus1unid_303.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Lmpadas4unid_304.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosdeCouro1unid_305.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosEletrnicos2unid_306.set('fieldImages', {'fid': '', 'Categoria': '', 'Local': '', 'Descrição': '', 'Endereço': '', 'Contato': '', });
lyr_ResduosReciclveis15unid_307.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_ResduosInservveis4unid_308.set('fieldImages', {'fid': 'TextEdit', 'Categoria': 'TextEdit', 'Local': 'TextEdit', 'Descrição': 'TextEdit', 'Endereço': 'TextEdit', 'Contato': 'TextEdit', });
lyr_Contineres286unid_309.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'bairro': '', });
lyr_rvoreImuneaoCorte9unid_310.set('fieldImages', {'fid': 'TextEdit', 'nome_popular': 'TextEdit', 'nome_cientifico': 'TextEdit', 'legislacao': 'TextEdit', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_311.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'PER__ODO_TURNO_': 'TextEdit', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'TextEdit', 'FREQU__NCIA': 'TextEdit', 'PROGRAMA____O_SEMANAL': 'TextEdit', 'EQUIPAMENTOS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_AcademiasaoArLivre84unid_312.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'bairro': '', });
lyr_Voorocas26unid_313.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ID_PONTO_I': 'TextEdit', 'IBGE': 'TextEdit', 'MUNIC__PIO': 'TextEdit', 'BACIA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'SITUA____O': 'TextEdit', 'REFER__NCI': 'TextEdit', 'PRIORIDADE': 'TextEdit', 'OBSERVA_____': 'TextEdit', });
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
lyr_LoteEMDEF10unid218783m_35.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_LoteEMDEF10unid_36.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', });
lyr_Lote504unid13809703m_37.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_Lote504unid_38.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', });
lyr_APP156unid230392892m_39.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_readeUsoEspecial247unid269671879m_40.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_reaInstitucional226unid133023699m_41.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_reaPatrimonial33unid15807656m_42.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_LoteamentoFechado115unid52603608m_43.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_reaVerde1934unid805836637m_44.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'inline label - visible with data', '1ª Semana': 'inline label - visible with data', '2ª Semana': 'inline label - visible with data', '3ª Semana': 'inline label - visible with data', '4ª Semana': 'inline label - visible with data', '5ª Semana': 'inline label - visible with data', 'Terceirização': 'hidden field', 'm2': 'inline label - visible with data', 'data_inclusao': 'hidden field', 'regiao': 'hidden field', 'processo': 'no label', });
lyr_REURBEmmonitoramento1unid_45.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBEmregularizao36unid_46.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBNotificado4unid_47.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBNotificar25unid_48.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBVerificar2unid_49.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBRegularizado9unid_50.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBEmmonitoramento1unid_51.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBEmregularizao36unid_52.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBNotificado4unid_53.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBNotificar25unid_54.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBVerificar2unid_55.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_REURBRegularizado9unid_56.set('fieldLabels', {'fid': 'hidden field', 'processo': 'inline label - visible with data', 'modalidade': 'inline label - visible with data', 'nome_loteamento': 'inline label - visible with data', 'observacao': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'quant_lotes': 'inline label - visible with data', 'area_total_m2': 'inline label - visible with data', 'decreto_reurb': 'inline label - visible with data', 'situacao': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_57.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioIICityPetrpolis_58.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_59.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_CondomnioICityPetrpolis_60.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_61.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaBella_62.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_63.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFazendaProgresso_64.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_65.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoArizona_66.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVilaDiEspanha_67.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVilaDiEspanha_68.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTerraNova_69.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTerraNova_70.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDiocesedeFranca_71.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDiocesedeFranca_72.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_73.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialBoaVista_74.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_75.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaDoratta_76.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratcnica_77.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoInfratcnica_78.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_79.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSoCarlosII_80.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_81.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueFlora_82.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_83.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaSoVicente_84.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoRecantoMeneghetti_85.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoRecantoMeneghetti_86.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_87.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquedosSabias_88.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_89.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadaMata_90.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_91.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoIrineuZanetiII_92.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_93.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAdonis_94.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_95.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarianaAlarcon_96.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_97.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialJabuticabeiras_98.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_99.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialCintraAlves_100.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_101.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoLoteamentolamo_102.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_103.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSantaLina_104.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_105.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegreII_106.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_107.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialPousoAlegre_108.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_109.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialAltodaFazenda_110.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialMarioTasso_111.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarioTasso_112.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVivenna_113.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVivenna_114.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_115.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoAbuDhabiParadiseResortResidence_116.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_117.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmprendimentoElias_118.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialSoCarlosI_119.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSoCarlosI_120.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoMonti_121.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMonti_122.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMoradadoBosque_123.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMoradadoBosque_124.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_125.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVittaAlvorada_126.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialMarthaHelena_127.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialMarthaHelena_128.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialYasminTorres_129.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialYasminTorres_130.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoPalmeiraReal_131.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoPalmeiraReal_132.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEssence_133.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEssence_134.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_135.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVersalhes_136.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoSonetto_137.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoSonetto_138.set('fieldLabels', {'fid': 'hidden field', });
lyr_EmpreendimentoResidencialSantaIns_139.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaIns_140.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoEdifcioSolNascente_141.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioSolNascente_142.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadosOitis_143.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadosOitis_144.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_EmpreendimentoResidencialQuintadoSol_145.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialQuintadoSol_146.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_147.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParquePalmeiraImperial_148.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_149.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoBordadaMata_150.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_151.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioResidencialHope_152.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_153.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoHorizResidence_154.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_155.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimFlora_156.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_157.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimHorizonte_158.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_159.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoJardimMariaLuiza_160.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_161.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMontBlancResidence_162.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_163.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoMoradadoVerdeII_164.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_165.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagonII_166.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_167.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParagon_168.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_169.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoParqueVillaLobos_170.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_171.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoDaVinci_172.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_173.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialDomingosJardini_174.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_175.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResidencialSantaF_176.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_177.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoEdifcioRuadoSol_178.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_179.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoTorontoResidence_180.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_181.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoVillaPucci_182.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_183.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoFerracini_184.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_185.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoColorado_186.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_187.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuciII_188.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_189.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoResicencialNairRetuci_190.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_191.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_EmpreendimentoCidadeJardim_192.set('fieldLabels', {'fid': 'hidden field', 'layer': 'inline label - visible with data', });
lyr_ServidoRamal138kVFranca4Guanabara_193.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_ServidoRamal138kVFranca4Guanabara_194.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_EmpreendimentosAprovado27unid_195.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDiretriz8unid_196.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosDefinitiva7unid_197.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_EmpreendimentosPrvia24unid_198.set('fieldLabels', {'fid': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'unidade_municipal': 'hidden field', 'etapa': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'tipologia': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'processo': 'inline label - visible with data', 'proprietarios': 'inline label - visible with data', 'nome_empreendimento': 'inline label - visible with data', 'zoneamento': 'inline label - visible with data', 'area_verde_m2': 'inline label - visible with data', 'area_institucional_m2': 'inline label - visible with data', 'area_lazer_m2': 'inline label - visible with data', 'lotes_m2': 'inline label - visible with data', 'unidades_lotes': 'inline label - visible with data', 'unidades_lotes_misto': 'inline label - visible with data', 'unidades_lotes_residenciais': 'inline label - visible with data', 'lotes_comerciais': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_199.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAEdifcioPrimeHELIPONTO_200.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PBZPAHospitalHELIPONTO_201.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PlanoBsicodeZonadeProteodeAerdromoPBZPA_202.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalArena3unid_203.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalBiblioteca1unid_204.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCampo18unid_205.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCasa1unid_206.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCentro4unid_207.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalCEPEL12unid_208.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalConjunto4unid_209.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalEstadio1unid_210.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalGinsio5unid_211.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalMuseu2unid_212.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalParque2unid_213.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPavilho1unid_214.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPinacoteca1unid_215.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPiscina1unid_216.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPista1unid_217.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'hidden field', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalPraa3unid_218.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - always visible', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalQuadra3unid_219.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalSecretaria1unid_220.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalTeatro2unid_221.set('fieldLabels', {'fid': 'hidden field', 'unidade_municipal': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', 'proprio_municipal': 'inline label - visible with data', 'endereco': 'inline label - visible with data', 'lat_long': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'categoria': 'inline label - visible with data', });
lyr_PrprioPblicoMunicipalAtenoPrimria24unid_222.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalGestoAdministrativo3unid_223.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalUnidadedeUrgnciaeEmergncia8unid_224.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalServiodeEspecialidadesDiagnstico14unid_225.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_PrprioPblicoMunicipalVigilnciaemSade5unid_226.set('fieldLabels', {'fid': 'hidden field', 'CNES': 'inline label - visible with data', 'EQUIPAMENTO_DE_SAÚDE': 'inline label - visible with data', 'ENDERECO': 'inline label - visible with data', 'CADASTRO_IMOBILIARIO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'LAT': 'hidden field', 'LONG': 'hidden field', });
lyr_ParqueZumbidosPalmares_227.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento3Etapa5unid_228.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento2Etapa41unid_229.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacas_230.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodasMaritacasPoosdeMonitoramento1Etapa28unid_231.set('fieldLabels', {'fid': 'hidden field', 'Poço': 'inline label - visible with data', 'Norte (m)': 'hidden field', 'Este (m)': 'hidden field', 'Cota': 'hidden field', });
lyr_reaBdaFazendaMunicipalAntigareadoClubedeHipismo_232.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_reaBdaFazendaMunicipalPoosdeMonitoramentoEngesolve7unid_233.set('fieldLabels', {'fid': 'hidden field', 'Norte': 'hidden field', 'Leste': 'hidden field', 'Cota': 'hidden field', 'Identifica': 'hidden field', 'Profundida': 'hidden field', 'Identifi_1': 'inline label - visible with data', 'Profundi_1': 'hidden field', 'NA Dinâmi': 'hidden field', 'NA Estatic': 'hidden field', 'NÍVEL DE': 'hidden field', 'TEMPERATUR': 'hidden field', 'pH': 'hidden field', 'CONDUTIVID': 'hidden field', 'Eh/ORP': 'hidden field', 'OXIGÊNIO': 'hidden field', 'TURBIDEZ': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipal_234.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramentoAVATZ6unid_235.set('fieldLabels', {'fid': 'hidden field', 'Field1': 'inline label - visible with data', 'Field2': 'hidden field', 'Field3': 'hidden field', });
lyr_AntigoAterrodaFazendaMunicipalPoosdeMonitoramento15unid_236.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_237.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_238.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_239.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_240.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_241.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_242.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_243.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_244.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_245.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_246.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_247.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_248.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase1_249.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_250.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_251.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_252.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_253.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_AoCivilPblica1unid_254.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_255.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_CartaAnuncia20unid_256.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'doc_origem': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_257.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_PlantioVoluntrio1unid_258.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_259.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TACMinistrioPblico9unid_260.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'ic': 'inline label - visible with data', 'proc_municipal': 'inline label - visible with data', });
lyr_TCRACETESB28unid_261.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRACETESB28unid_262.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_263.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TCRAMunicipal14unid_264.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'quant': 'inline label - visible with data', 'autorizacao': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_265.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_TRPRLCETESB2unid_266.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'matricula': 'inline label - visible with data', 'proc_cetesb': 'inline label - visible with data', });
lyr_JardimZoobotnicoDelimitao_267.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_JardimZoobotnicoTrajetos_268.set('fieldLabels', {'fid': 'hidden field', 'NOME': 'inline label - visible with data', });
lyr_JardimZoobotnicoPontosdeInteresse19unid_269.set('fieldLabels', {'fid': 'hidden field', 'Legenda': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_270.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedosTrabalhadores_271.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_272.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ComplexoPoliesportivo_273.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_ParqueCaxambu_274.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueCaxambu_275.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_276.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParquedeExposiesFernandoCosta_277.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ParqueAmbientalLuprcioTaveira_278.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - visible with data', 'Descrição': 'header label - always visible', });
lyr_ParqueAmbientalLuprcioTaveira_279.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'header label - visible with data', 'Descrição': 'inline label - visible with data', });
lyr_ProgramaAdoteUmaPraa315unid30277327m_280.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'Bairro': 'inline label - visible with data', 'Nº Cadastro Imobiliário': 'inline label - visible with data', 'Código da Região': 'hidden field', '1ª Semana': 'hidden field', '2ª Semana': 'hidden field', '3ª Semana': 'hidden field', '4ª Semana': 'hidden field', '5ª Semana': 'hidden field', 'Terceirização': 'hidden field', 'responsavel': 'inline label - visible with data', 'm2': 'inline label - visible with data', });
lyr_ComPlacaDilu161unid17007212m_281.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_ComPlacaEgnaldo134unid12211725m_282.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaDilu16unid774541m_283.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_SemPlacaEgnaldo4unid86447m_284.set('fieldLabels', {'fid': 'hidden field', 'Adotante': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Programa': 'inline label - visible with data', 'Possui placa?': 'inline label - visible with data', 'm2': 'inline label - visible with data', 'responsavel': 'inline label - visible with data', 'data_contrato': 'inline label - visible with data', 'bairro': 'no label', });
lyr_LotesImvelPrivado92unid_285.set('fieldLabels', {'fid': 'hidden field', 'quadra': 'inline label - visible with data', 'lote': 'inline label - visible with data', 'cadastro_imobiliario': 'inline label - visible with data', '_BAIRRO': 'inline label - visible with data', '_RUA': 'inline label - visible with data', '_processo_seinfra': 'inline label - visible with data', '_processo_sms': 'inline label - visible with data', '_processo_mp': 'inline label - visible with data', '_processo_smseg': 'inline label - visible with data', '_outros_processos': 'inline label - visible with data', '_data_inclusao': 'inline label - visible with data', });
lyr_ImvelPblico118unid_286.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_ImvelPrivado92unid_287.set('fieldLabels', {'fid': 'hidden field', 'BAIRRO': 'inline label - visible with data', 'RUA': 'inline label - visible with data', 'CADASTRO IMOBILIÁRIO': 'inline label - visible with data', 'CLASSIFICAÇÃO DO IMÓVEL': 'hidden field', 'FREQUÊNCIA DE LIMPEZA': 'hidden field', 'QUADRA': 'inline label - visible with data', 'LOTE': 'inline label - visible with data', 'processo_seinfra': 'inline label - visible with data', 'processo_sms': 'inline label - visible with data', 'processo_mp': 'inline label - visible with data', 'processo_smseg': 'inline label - visible with data', 'coordenada_x': 'hidden field', 'coordenada_y': 'hidden field', 'outros_processos': 'inline label - visible with data', 'data_inclusao': 'inline label - visible with data', });
lyr_RodoviasEstaduais4unid_288.set('fieldLabels', {'fid': 'hidden field', 'ogc_fid': 'hidden field', 'Codigo_Rod': 'hidden field', 'Tipo_Trech': 'hidden field', 'Unidade_Fe': 'hidden field', 'Codigo_SNV': 'hidden field', 'Codigo_SRE': 'hidden field', 'Extensao': 'inline label - visible with data', 'Superficie': 'hidden field', 'Jurisdicao': 'inline label - visible with data', });
lyr_EstradasRuraisMunicipais34unid_289.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Extensao_km': 'inline label - visible with data', });
lyr_RodoviasMunicipais8unid_290.set('fieldLabels', {'fid': 'hidden field', 'geometriaaproximada': 'hidden field', 'tipovia': 'hidden field', 'jurisdicao': 'inline label - visible with data', 'administracao': 'hidden field', 'revestimento': 'hidden field', 'operacional': 'hidden field', 'situacaofisica': 'hidden field', 'canteirodivisorio': 'hidden field', 'nrpistas': 'hidden field', 'nrfaixas': 'hidden field', 'trafego': 'hidden field', 'tipopavimentacao': 'hidden field', 'sigla': 'hidden field', 'Extensao': 'inline label - visible with data', });
lyr_Gesso1unid_291.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeConstruoCivil7unid_292.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosVerdes1unid_293.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ChapasdeRaioX1unid_294.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Embalagensvaziasdeagrotxicos1unid_295.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leodecozinhausado2unid_296.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_leolubrificanteusado1unid_297.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Latasdetintametlicasvazias2unid_298.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosPerigosos1unid_299.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Madeiras1unid_300.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeServiosdeSade21unid_301.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_PilhaseBaterias17unid_302.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Pneus1unid_303.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Lmpadas4unid_304.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosdeCouro1unid_305.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosEletrnicos2unid_306.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosReciclveis15unid_307.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_ResduosInservveis4unid_308.set('fieldLabels', {'fid': 'hidden field', 'Categoria': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Descrição': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Contato': 'inline label - visible with data', });
lyr_Contineres286unid_309.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_rvoreImuneaoCorte9unid_310.set('fieldLabels', {'fid': 'hidden field', 'nome_popular': 'inline label - visible with data', 'nome_cientifico': 'inline label - visible with data', 'legislacao': 'inline label - visible with data', });
lyr_LocaisdeDifcilAcessoereasRurais20unid_311.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'PER__ODO_TURNO_': 'inline label - visible with data', 'HOR__RIO_DE_INICIO_DOS_SERVI__OS': 'inline label - visible with data', 'FREQU__NCIA': 'inline label - visible with data', 'PROGRAMA____O_SEMANAL': 'inline label - visible with data', 'EQUIPAMENTOS': 'inline label - visible with data', 'LONGITUDE': 'inline label - visible with data', 'LATITUDE': 'inline label - visible with data', });
lyr_AcademiasaoArLivre84unid_312.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'bairro': 'inline label - visible with data', });
lyr_Voorocas26unid_313.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'ID_PONTO_I': 'hidden field', 'IBGE': 'hidden field', 'MUNIC__PIO': 'hidden field', 'BACIA': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'SITUA____O': 'hidden field', 'REFER__NCI': 'inline label - visible with data', 'PRIORIDADE': 'hidden field', 'OBSERVA_____': 'inline label - visible with data', });
lyr_Voorocas26unid_313.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});